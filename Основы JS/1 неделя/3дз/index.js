/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function(hours, minutes, interval) {
    if (hours <= 23 && minutes <= 59) {
        minutes = minutes + interval;

        if (minutes > 59) {
            interval = parseInt(minutes / 60);
            hours = hours + interval;
            minutes = minutes % 60;
            //*console.log(hours + ' ' + minutes);
        };

        if (hours > 23 || minutes > 59) {
            hours = hours % 24;
            minutes = minutes % 60;
        };

        if (hours < 10 && minutes < 10) {
            //*console.log('0' + hours + ':0' + minutes);
            return ('0' + hours + ':0' + minutes);
        };

        if (hours < 10) {
            //*console.log('0' + hours + ':' + minutes);
            return ('0' + hours + ':' + minutes);
        };

        if (minutes < 10) {
            //*console.log(hours + ':0' + minutes);
            return (hours + ':0' + minutes);
        };

        //*console.log(hours + ':' + minutes);
        return (hours + ':' + minutes);
    };

    return false;
};