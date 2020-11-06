import * as express from 'express';
import * as SocketIO from 'socket.io';
import * as http from 'http';
import * as _ from 'lodash';
import {Utils} from './utils';
import {log} from './log';

export class Server {
  port;
  _connections = {};
  _counter = 0;
  io;
  connection_callback;
  error_callback;
  status_callback;

  constructor(port) {
    this.port = port;
    var self = this;


    const app = express();
    const server = http.createServer(app);
    this.io = SocketIO(server);

    this.io.on('connection', function (connection) {
      console.info('a user connected');

      connection.remoteAddress = connection.handshake.address.address;
      const c = new Connection(self._createId(), connection, self);

      if (self.connection_callback) {
        self.connection_callback(c);
      }
      self.addConnection(c);
    });

    this.io.on('error', function (err) {
      console.error(err.stack);
      self.error_callback()
    });

    server.listen(port, function () {
      console.info('listening on *:' + port);
    });
  }

  _createId() {
    return '5' + Utils.random(99) + '' + (this._counter++);
  }

  broadcast(message) {
    this.forEachConnection(function (connection) {
      connection.send(message);
    });
  }

  onRequestStatus(status_callback) {
    this.status_callback = status_callback;
  }

  onConnect(callback) {
    this.connection_callback = callback;
  }

  onError(callback) {
    this.error_callback = callback;
  }


  forEachConnection(callback) {
    _.each(this._connections, callback);
  }

  addConnection(connection) {
    this._connections[connection.id] = connection;
  }

  removeConnection(id) {
    delete this._connections[id];
  }

  getConnection(id) {
    return this._connections[id];
  }
}

export class Connection {
  _connection;
  _server;
  id;
  listen_callback;
  close_callback;

  constructor(id, connection, server) {
    this._connection = connection;
    this._server = server;
    this.id = id;
    const self = this;


    // HANDLE DISPATCHER IN HERE
    connection.on('dispatch', function (message) {
      console.log('Received dispatch request')
      self._connection.emit('dispatched', {'status': 'OK', host: server.host, port: server.port})
    });

    connection.on('message', function (message) {
      if (self.listen_callback)
        self.listen_callback(message)
    });

    connection.on('disconnect', function () {
      if (self.close_callback) {
        self.close_callback();
      }
      self._server.removeConnection(self.id);
    });
  }

  onClose(callback) {
    this.close_callback = callback;
  }

  listen(callback) {
    this.listen_callback = callback;
  }

  broadcast(message) {
    throw 'Not implemented';
  }

  send(message) {
    this._connection.emit('message', message);
  }

  sendUTF8(data) {
    this._connection.send(data);
  }

  close(logError) {
    console.info('Closing connection to ' + this._connection.remoteAddress + '. Error: ' + logError);
    this._connection.disconnect();
  }
}
