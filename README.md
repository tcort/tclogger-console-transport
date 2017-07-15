# tclogger-console-transport

## Usage

```
npm install --save tclogger tclogger-console-transport
```

Code
```
const log = require('tclogger');
const consoleTransport = require('tclogger-console-transport');

process.on('log', consoleTransport());

log.inProdEnv('Testing 1-2-3');
```

## License

See [LICENSE.md](https://github.com/tcort/tclogformat/blob/master/LICENCE.md)
