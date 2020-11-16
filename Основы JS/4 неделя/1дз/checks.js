// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
var friends = [{
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
    { name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com' },
    { name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com' }
]);
console.info('+++++++++++++++++++++++++++++++OK1');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Банан']),
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
]);
console.info('+++++++++++++++++++++++++++++++OK2');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Банан']),
    lib.select('name'),
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { name: 'Эмили' },
    { name: 'Мэт' }
]);
console.info('+++++++++++++++++++++++++++++++OK3');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result,
    friends
);
console.info('+++++++++++++++++++++++++++++++OK4');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.select('favoriteFruit')
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, []);
console.info('+++++++++++++++++++++++++++++++OK5');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Банан'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, []);
console.info('+++++++++++++++++++++++++++++++OK6');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Банан']),
    lib.filterIn('favoriteFruit', ['Фейхоа'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, []);
console.info('+++++++++++++++++++++++++++++++OK7');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.filterIn('name', ['Сэм', 'Брэд', 'Стелла']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Картофель']),
    lib.filterIn('email', ['waltersguzman@example.com'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [{
    name: 'Стелла',
    gender: 'Женский',
    email: 'waltersguzman@example.com',
    favoriteFruit: 'Картофель'
}]);

console.info('+++++++++++++++++++++++++++++++OK8');