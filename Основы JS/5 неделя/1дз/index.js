var arrayOfNotification = [];
module.exports = {
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function(event, subscriber, handler) {

        //console.log('_________ON__________');
        if (arrayOfNotification[event] == undefined) {
            arrayOfNotification[event] = [];
        };
        arrayOfNotification[event].push({ subscriber: subscriber, func: handler.bind(subscriber) });
        //var a = handler;
        //a.call(subscriber);
        //console.log(arrayOfNotification);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function(event, subscriber) {

        if (arrayOfNotification[event] != undefined) {
            if (arrayOfNotification[event].length == 0) {
                delete arrayOfNotification[event];
            };
            //console.log('_________OFF__________');
            //console.log(arrayOfNotification[event].length);
            //console.log('==================================');
            for (var index = (arrayOfNotification[event].length - 1); index > -1; index--) {
                //console.log(index);
                if (arrayOfNotification[event][index].subscriber == subscriber) {
                    //console.log('УДАЛЯЮ');
                    //console.log(arrayOfNotification[event]);
                    arrayOfNotification[event].splice(index, 1);
                }; // else { console.log('НЕ УДАЛЯЮ'); };
            };
        };
        //console.log('---------------Был удален logger');

        return this;

    },

    /**
     * @param {String} event
     */
    emit: function(event) {

        //console.log('_________EMIT__________');
        if (arrayOfNotification[event] != undefined) {
            for (var index = 0; index < arrayOfNotification[event].length; index++) {
                arrayOfNotification[event][index].func();
                //console.log(arrayOfNotification[event][index]);
            };
        };
        //console.log(arrayOfNotification[event]);
        return this;
        /*  arg = function() {
             this.logs.push('Произошло новое событие new_notification');
         };
         arg.call(logger) */
    }
};



/* [ new_notification: [ { subscriber: [Object], f: [Function: bound count] },
    { subscriber: [Object], f: [Function: bound ] },
    { subscriber: [Object], f: [Function: bound ] } ] ]*/