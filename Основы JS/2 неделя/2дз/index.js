/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function(hashtags) {

    var smallHashtags = [];
    for (var index = 0; index < hashtags.length; index++) {
        smallHashtags.push(hashtags[index].toLowerCase());
    };
    for (var __index = 1; __index < smallHashtags.length; __index++) {
        for (var index = 0; index < smallHashtags.length; index++) {
            for (var _index = index + 1; _index < smallHashtags.length; _index++) {
                //*console.log('сравниваю:  ' + smallHashtags[index] + '  и  ' + smallHashtags[_index]);
                if (smallHashtags[index] == smallHashtags[_index]) {
                    smallHashtags.splice(_index, 1);
                    //*console.log('я удаляю --------- ' + smallHashtags);
                }; //*else { console.log('не удаляю') };
                //*console.log(smallHashtags[index]);
            };
        };
        //*console.log('ИТОГО:  ' + smallHashtags.join(', '));
    };
    return smallHashtags.join(', ');
};