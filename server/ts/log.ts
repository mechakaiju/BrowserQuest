import * as Log from 'log';

export let log;

switch (process.env.ERROR_LEVEL) {
  case 'error':
    //log = new Log(Log.ERROR);
    break;
  case 'debug':
    //log = new Log(Log.DEBUG);
    break;
  case 'info':
    //log = new Log(Log.INFO);
    break;
  default:
    //log = new Log(Log.INFO);
    break;
}
