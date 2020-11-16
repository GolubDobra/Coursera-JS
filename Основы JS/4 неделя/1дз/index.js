/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {

    var dublCollect = [];
    var queryArgs = [].slice.call(arguments);
    if (queryArgs.length == 1) {
        filters = [];
        selectArgs = [];
        filterArgs = [, []];
        filterIndex = 0;
        INDEX = 0;
        return collection;
    };
    queryArgs.splice(0, 1);

    var selectField = 0;
    var filterField = 0;

    for (var i = 0; i < queryArgs.length; i++) {
        switch (queryArgs[i][0]) {
            case 'select':
                selectField = queryArgs[i][1]; // [ 'name', 'gender', 'email' ]
                break;
        };
    };

    if (filterField.length == 1 || (selectField.length == 0 && INDEX != 0)) {
        filters = [];
        selectArgs = [];
        filterArgs = [, []];
        filterIndex = 0;
        INDEX = 0;
        return dublCollect;
    };

    for (var index = 0; index < collection.length; index++) {
        dublCollect.push(JSON.parse(JSON.stringify(collection[index])));
    };

    for (var index = 0; index < collection.length; index++) {
        for (var ind = 0; ind < filters.length; ind++) {
            if (filters[ind][0] == 'name') {
                if (filters[ind][1].indexOf(collection[index].name) == -1) {
                    delete dublCollect[index];
                };
            };
        };
    };

    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };
    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };
    for (var index = 0; index < dublCollect.length; index++) {
        for (var ind = 0; ind < filters.length; ind++) {
            if (filters[ind][0] == 'email') {
                if (filters[ind][1].indexOf(dublCollect[index].email) == -1) {
                    delete dublCollect[index];
                };
            };
        };
    };

    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };
    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };

    for (var index = 0; index < dublCollect.length; index++) {
        for (var ind = 0; ind < filters.length; ind++) {
            if (filters[ind][0] == 'gender') {
                if (filters[ind][1].indexOf(dublCollect[index].gender) == -1) {
                    delete dublCollect[index];
                };
            };
        };
    };

    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };
    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };

    for (var index = 0; index < dublCollect.length; index++) {
        for (var ind = 0; ind < filters.length; ind++) {
            if (filters[ind][0] == 'favoriteFruit') {
                if (filters[ind][1].indexOf(dublCollect[index].favoriteFruit) == -1) {
                    delete dublCollect[index];
                    break;
                };
            };
        };
    };

    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };
    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };
    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };

    if (selectField == 0 && INDEX == 0) {
        filters = [];
        selectArgs = [];
        filterArgs = [, []];
        filterIndex = 0;
        INDEX = 0;
        return dublCollect;
    };

    var notSelectField;
    var selectKey = Object.keys(collection[0]);

    for (var index = 0; index < selectKey.length; index++) {
        if (selectField.indexOf(selectKey[index]) == -1) {
            notSelectField = selectKey[index];

            for (var ind = 0; ind < dublCollect.length; ind++) {
                delete dublCollect[ind][notSelectField];
            };

        };
    };

    filters = [];
    selectArgs = [];
    filterArgs = [, []];
    filterIndex = 0;
    INDEX = 0;
    return dublCollect;
}

/* function sort(values)
{
    for (var index = 0; index < dublCollect.length; index++) {
        for (var ind = 0; ind < filters.length; ind++) {
            if (filters[ind][0] == 'favoriteFruit') {
                if (filters[ind][1].indexOf(dublCollect[index].favoriteFruit) == -1) {
                    delete dublCollect[index];
                    break;
                };
            };
        };
    };

    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };
    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };
    for (var index = 0; index < dublCollect.length; index++) {
        if (dublCollect[index] == undefined)
            dublCollect.splice(index, 1);
    };

} */

/**
 * @params {String[]}
 */
var selectArgs = [];
var INDEX = 0;

function select() {
    INDEX++;
    var selectResult = [];

    var _selectArgs = [].slice.call(arguments);
    selectResult.push('select');
    var selectIndex = 0;
    var secSelectIndex = 0;
    for (var i = 0; i < selectArgs.length; i++) {
        secSelectIndex++;
        for (var j = 0; j < _selectArgs.length; j++) {
            if (selectArgs[i] == _selectArgs[j]) {
                selectIndex++;
                if (selectResult.length == 2) {
                    selectResult[1].push(selectArgs[i]);
                } else { selectResult.push([selectArgs[i]]); };
            };
        };
    };
    if (secSelectIndex !== 0 && selectResult.length === 1) {
        selectResult.push([])
        return (selectResult);
    };
    if (selectIndex == 0) {
        selectResult.push(_selectArgs);
    };
    selectArgs = [].slice.call(arguments);
    return selectResult;
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
var filterArgs = [, []];
var filterIndex = 0;
var filters = [];

function filterIn(property, values) {
    var _filterArgs = [].slice.call(arguments);

    var filterResult = [];
    filterResult.push('filter');

    if (filterIndex != 0) {
        filterResult.push([_filterArgs[0]]);
    };

    filters.push(_filterArgs);
    return filters;
}


module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};