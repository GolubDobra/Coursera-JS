/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function(hours, minutes) {
    if ((hours > -1 && hours < 24) && (minutes > -1 && minutes < 60)) {
        return true;
    };
    return false;

};