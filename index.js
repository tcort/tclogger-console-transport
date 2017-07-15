'use strict';

const chalk = require('chalk');
const moment = require('moment');

const levelColors = {
    EMERG: 'magenta',
    ALERT: 'magenta',
    CRIT: 'magenta',
    CRITICAL: 'magenta',
    ERR: 'red',
    ERROR: 'red',
    WARN: 'yellow',
    WARNING: 'yellow',
    NOTICE: 'yellow',
    INFO: 'green',
    DEBUG: 'blue'
};

module.exports = function consoleTransport() {
    return function (log) {
        const color = levelColors.hasOwnProperty(log.level) ? levelColors[log.level] : 'cyan';
        console.log(chalk[color](`[${moment().format()}] [${log.level}] ${log.message}`));
    };
};
