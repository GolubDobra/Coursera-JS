/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function(tweet) {
    filter_tweet = tweet.split(' ');
    var final_result = [];
    var hash = '#';
    for (var j = 0; j < filter_tweet.length; j++) {
        var index = filter_tweet[j].split('');
        for (var ind = 0; ind < index.length; ind++) {
            if (index[ind] == hash) {
                final_result.push(filter_tweet[j]);
            };
        };
    };
    var _final_result = [];
    /*
        if (final_result.length == 0) {
            return final_result;
        }
    */
    for (var i_ = 0; i_ < final_result.length; i_++) {
        _final_result.push(final_result[i_].split('#'));
        var h = [];
    };
    for (var _j = 0; _j < _final_result.length; _j++) {
        h.push(_final_result[_j][1]);
    };
    return h;

};