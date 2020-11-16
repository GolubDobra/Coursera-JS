// Телефонная книга
var phoneBook = {
    people: []
};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function(command) {

    var newCommand = [];
    var showBook = [];
    var newTelNumber = [];
    var telNumberWithPoint = [];
    command = command.split(' ');
    //telNumber = command[2].split(',');
    //console.log(telNumber);

    if (command[0] === 'ADD') {
        newCommand = command[2].split(',');
        telNumberWithPoint[0] = newCommand[0]
        for (var index = 1; index < newCommand.length; index++) {
            telNumberWithPoint[0] = telNumberWithPoint[0] + ', ' + newCommand[index];
        };
        return addContact(command[1], telNumberWithPoint[0]);
    };

    if (command[0] === 'REMOVE_PHONE') {
        return removePhone(command[1]);
    };

    if (command[0] === 'SHOW') {
        return showAllContacts();
    };

    function addContact(newName, newPhone) {
        //console.log('\n------ДОБАВЛЕНИЕ ИМЯ И ТЕЛЕФОНА------');
        var i = 0;
        //console.log(newPhone);
        for (var index = 0; index < phoneBook.people.length; index++) {
            //console.log('ИМЯ:        ' + phoneBook.people[index].Name);
            if (newName == phoneBook.people[index].Name) {
                phoneBook.people[index].tel = phoneBook.people[index].tel + ', ' + newPhone;
                break;
            } else { i++ };
        };
        if (i == phoneBook.people.length) {
            phoneBook.people[phoneBook.people.length] = {
                Name: newName,
                tel: newPhone
            };
        };
    };

    function removePhone(deletePhone) {
        //console.log('\n------УДАЛЕНИЕ ТЕЛЕФОНА------');
        for (var index = 0; index < phoneBook.people.length; index++) {
            newTelNumber[index] = (phoneBook.people[index].tel.split(','));
        };
        var i = 0;
        var deletePhoneWithPoint = deletePhone + ',';
        var deletePhoneWithProbel = ' ' + deletePhone;
        for (var index = 0; index < newTelNumber.length; index++) {
            for (var ind = 0; ind < newTelNumber[index].length; ind++) {
                //console.log('Телефон для удаления:  ' + deletePhone + ' сравниваем с ' + newTelNumber[index][ind]);
                if ((deletePhone == newTelNumber[index][ind]) || (deletePhoneWithPoint == newTelNumber[index][ind]) || (deletePhoneWithProbel == newTelNumber[index][ind])) {
                    newTelNumber[index].splice(ind, 1);
                    i++;
                    if (newTelNumber[index].length == 0) {
                        phoneBook.people.splice(index, 1);
                        i++;
                    };
                    break;
                };

            };
        };
        if (i == 2) {
            return true;
        };
        for (var index = 0; index < phoneBook.people.length; index++) {
            delete phoneBook.people[index].tel;

        };
        for (var index = 0; index < newTelNumber.length; index++) {
            phoneBook.people[index].tel = newTelNumber[index][0];
        };
        for (var index = 0; index < newTelNumber.length; index++) {
            for (var ind = 1; ind < newTelNumber[index].length; ind++) {
                //console.log('Добавляем в тел  -- ' + newTelNumber[index][ind]);
                phoneBook.people[index].tel = phoneBook.people[index].tel + ',' + newTelNumber[index][ind];
            };
        };
        if (i == 0) {
            return false;
        };
        return true;
    };

    function showAllContacts() {
        //console.log('\n------ВЫВОД ВСЕХ КОНТАКТОВ------');
        var arr;
        for (var index = 0; index < phoneBook.people.length - 1; index++) {
            for (var ind = 1; ind < phoneBook.people.length; ind++) {
                //console.log('Сравниваем ' + phoneBook.people[index].Name + ' и ' + phoneBook.people[ind].Name);
                if (phoneBook.people[index].Name > phoneBook.people[ind].Name) {
                    arr = phoneBook.people[index];
                    phoneBook.people[index] = phoneBook.people[ind];
                    phoneBook.people[ind] = arr;
                };
            };
        };
        var telWithoutProbel;
        for (var index = 0; index < phoneBook.people.length; index++) {
            showBook.push(phoneBook.people[index].Name);
            //console.log(phoneBook.people[index].tel);
            telWithoutProbel = phoneBook.people[index].tel.split('  ');
            telWithoutProbel = phoneBook.people[index].tel.split(' ');
            //console.log(telWithoutProbel);
            if (telWithoutProbel.length > 1 && telWithoutProbel[0] != '') {
                for (var ind = 0; ind < telWithoutProbel.length - 1; ind++) {
                    telWithoutProbel[0] = telWithoutProbel[0] + ' ' + telWithoutProbel[ind + 1];
                };
            };
            if (telWithoutProbel[0] == '') {
                //console.log(telWithoutProbel[1]);
                telWithoutProbel[0] = telWithoutProbel[1];
            };
            //showBook.push(phoneBook.people[index].Name);
            showBook[index] = showBook[index] + ': ' + telWithoutProbel[0];
        };
        for (var index = 0; index < showBook.length; index++) {
            if (showBook[index].length < 5) {
                showBook.splice([index], 1);
            };
        };
        return showBook;
    };
    return false;
};


// [ 'Alex: 555-20-01', 'Ivan: 555-10-01,  555-10-02' ]        [ [ '555-20-01' ], [ '555-10-01,', '555-10-02' ] ]

// A < Z
// { people: 
// [ { Name: 'Ivan', tel: '555-10-01,  555-10-03,  555-10-02' },
// { Name: 'Alex', tel: '555-20-01' },
// { Name: 'Lera', tel: '555-21-01' } ] }

//  ['Ivan: 555-10-01, 555-10-03, 555-10-02']
//  [ 'Ivan:555-10-01,555-10-03,555-10-02' ]

// { people: [ { Name: 'Ivan', tel: '555-10-01,555-10-03,555-10-02' } ] }

// { people: 
// [ { Name: 'Ivan', tel: '555-10-01' },
// { Name: 'Lera', tel: '555-10-02' } ] }

// Добавляем телефоны контакту Ivan
// phoneBook('ADD Ivan 555-10-01,555-10-03');   [ 'ADD', 'Ivan', '555-10-01, 555-10-03' ]
// phoneBook('ADD Ivan 555-10-02');                             [ 555-10-02 ]

// 'REMOVE_PHONE 555-10-03'         [ '555-10-01', '555-10-03', '555-10-02' ]
// [ [ '555-10-01', '555-10-03' ], [ '555-10-02' ] ]  [[],[]]
// [ [ '555-10-01' ], [ '555-10-02' ] ]

/* var phoneBook = {   
    people: [
        { name: Ivan, tel: 555-10-02},
        { name: Pety, tel: 705-11-02}
    ]
}; 

var phoneBook = {
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
    */