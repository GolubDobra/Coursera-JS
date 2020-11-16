// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var phoneBook = require('./index.js');

// Добавляем телефоны контакту Ivan

phoneBook('ADD Ivan 555,666');
phoneBook('ADD Alex 777');
phoneBook('ADD Alex 333');
phoneBook('REMOVE_PHONE 555');
phoneBook('SHOW');


phoneBook('REMOVE_PHONE 777');
//phoneBook('ADD Ivan 888');
phoneBook('SHOW');
// Проверка работы функции SHOW
/*



После команд "ADD Ivan 555,666; ADD Alex 777; ADD Alex 333; REMOVE_PHONE 555; SHOW", ожидается результат: 
["Alex: 777, 333","Ivan: 666"],
[ 'Alex: 777, 333', 'Ivan:  666' ]

После команд "ADD Ivan 555,666; ADD Alex 777; ADD Alex 333; REMOVE_PHONE 555; REMOVE_PHONE 777; SHOW", ожидается результат: 
["Alex: 333","Ivan: 666"]
[ 'Alex:  333', 'Ivan:  666' ]





assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'), ['Beka: 555-11-02', 'Ivan: 555-10-01, 555-10-03, 555-10-02'],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-03, 555-10-02"'
);


// Добавляем новый контакт
phoneBook('ADD Alex 555-20-01');

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'), [
        'Alex: 555-20-01',
        'Beka: 555-11-02',
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"'
);

// Удаляем телефон
phoneBook('REMOVE_PHONE 555-20-01');

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'), [
        'Beka: 555-11-02',
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-02"'
);*/


console.info('OK!');