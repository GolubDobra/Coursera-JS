// Телефонная книга
var phoneBook = {
    people: []
};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function(command) {

    var telNumber;
    //var contactBook = [];
    //var _phoneBook = {};
    command = command.split(' ');


    if (command[0] === 'ADD') {
        telNumber = command[2].split(',');
        console.log(telNumber);
        return addContact(command[1], telNumber);
    };


    if (command[0] === 'REMOVE_PHONE') {
        return removePhone( /**/ );
    };


    if (command[0] === 'SHOW') {
        return showAllContacts( /**/ );
    };

    function addContact(newName, newPhone) {
        var i = 0;
        /*for (var index = 0; index < phoneBook.people.length; index++) {
            if (newName == phoneBook.people[index].name) {
                for (var ind = 0; ind < newPhone.length; ind++) {
                    if (newPhone[ind] != phoneBook.people[index].tel) {
                        phoneBook.people[index].tel = newPhone[ind];
                    };
                };
                break;
            } else { i++ };
        };*/

        console.log('\n' + phoneBook + '\n' + i + '  ' + phoneBook.people.length);

        if (i == (phoneBook.people.length - 1)) {
            phoneBook.people[(phoneBook.people.length - 1)] = {
                Name: newName
                    //tel: newPhone[1]
            };
        };
        console.log('Итог: ' + phoneBook);
    };

    return false;
};



// Добавляем телефоны контакту Ivan
// phoneBook('ADD Ivan 555-10-01,555-10-03');   [ 'ADD', 'Ivan', '555-10-01,555-10-03' ]
// phoneBook('ADD Ivan 555-10-02');

/* var phoneBook = {
    person1:{
        name: Ivan,
        tel: 555-10-02
    },
    person2:{
        name: Ivan,
        tel: 555-10-02
    }, 
    ...
}; 

var phoneBook = {   
    people: [
        { name: Ivan, tel: 555-10-02},
        { name: Pety, tel: 705-11-02}
    ]
};
    */