/*
 * Log to console
 */

'use strict';

function init () {
    if (console && console.log) {
        var logs = [
            'Hello there!',
            'If you are keen to see the source JS files, take a look at' +
                ' the github repo:',
            'https://github.com/thegingerbloke/folio'
        ];

        var styles = [
            'background: #eee;',
            'color: #f90;',
            'padding: 5px;',
            'line-height: 2em'
        ].join(' ');

        for (var counter = 0; counter < logs.length; counter++) {
            console.log('%c' + logs[counter], styles);
        }
    }
}

module.exports = {
    init: init
};