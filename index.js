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
    return function (level, message) {
        const color = levelColors.hasOwnProperty(level) ? levelColors[level] : 'cyan';
        return chalk[color](`[${moment().format()}] [${level}] ${message}`);
    };
};
