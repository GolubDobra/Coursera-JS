/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function(date) {

    var UseDate = new Date(date);
    //console.log('БЫЛО:  ' + UseDate);
    /* //console.log(UseDate.getUTCHours()); // Hours
    //console.log(UseDate.getUTCMinutes());
    //console.log(UseDate.getUTCSeconds()); */
    //console.log(Object.keys(UseDate));

    /*  Object.defineProperty(UseDate, 'toString', {
         get: function() {
             //console.log('_________________________________');

             var i = (this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate() + ' ' + this.getHours() + ':' + this.getMinutes());
             //console.log(i.length);
             i = i.split('-');
             //console.log(i[1].length);
             var j = i[2].split(' ');
             j = j[1].split(':');
             //console.log(j);
             if (i[1].length == 1 && j[0].length == 1 && j[1].length == 1) {
                 return (this.getFullYear() + '-0' + (this.getMonth() + 1) + '-' + this.getDate() + ' 0' + this.getHours() + ':0' + this.getMinutes());
             };
             if (i[1].length == 1 && j[0].length == 1) {
                 return (this.getFullYear() + '-0' + (this.getMonth() + 1) + '-' + this.getDate() + ' 0' + this.getHours() + ':' + this.getMinutes());
             };
             if (i[1].length == 1 && j[1].length == 1) {
                 return (this.getFullYear() + '-0' + (this.getMonth() + 1) + '-' + this.getDate() + ' ' + this.getHours() + ':0' + this.getMinutes());
             };
             if (j[0].length == 1 && j[1].length == 1) {
                 return (this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate() + ' 0' + this.getHours() + ':0' + this.getMinutes());
             };
             if (i[1].length == 1) {
                 return (this.getFullYear() + '-0' + (this.getMonth() + 1) + '-' + this.getDate() + ' ' + this.getHours() + ':' + this.getMinutes());
             };
             if (j[0].length == 1) {
                 return (this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate() + ' 0' + this.getHours() + ':' + this.getMinutes());
             };
             if (j[1].length == 1) {
                 return (this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate() + ' ' + this.getHours() + ':0' + this.getMinutes());
             };

             return (this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate() + ' ' + this.getHours() + ':' + this.getMinutes());

         }
     });*/

    return {
        add: function(number, unitOfMeasure) {
            if (number < 0) {
                throw TypeError('Неверное значение');
            };
            switch (unitOfMeasure) {
                case 'years':
                    UseDate.setFullYear(UseDate.getFullYear() + number);
                    break;
                case 'months':
                    UseDate.setMonth(UseDate.getMonth() + number);
                    break;
                case 'days':
                    UseDate.setDate(UseDate.getDate() + number);
                    break;
                case 'hours':
                    UseDate.setHours(UseDate.getHours() + number);
                    break;
                case 'minutes':
                    UseDate.setMinutes(UseDate.getMinutes() + number);
                    break;
                default:
                    throw TypeError('Неверное значение');
            };
            //console.log('Стало: ' + UseDate);
            return this;
        },

        subtract: function(number, unitOfMeasure) {
            if (number < 0) {
                throw TypeError('Неверное значение');
            };
            switch (unitOfMeasure) {
                case 'years':
                    UseDate.setFullYear(UseDate.getFullYear() - number);
                    break;
                case 'months':
                    UseDate.setMonth(UseDate.getMonth() - number);
                    break;
                case 'days':
                    UseDate.setDate(UseDate.getDate() - number);
                    break;
                case 'hours':
                    UseDate.setHours(UseDate.getHours() - number);
                    break;
                case 'minutes':
                    UseDate.setMinutes(UseDate.getMinutes() - number);
                    break;
                default:
                    throw TypeError('Неверное значение');
            };
            //console.log('Стало: ' + UseDate);
            return this;
        },

        get value() {
            var _date = UseDate;
            var year = '' + _date.getFullYear();
            var month = '' + (_date.getMonth() + 1);
            var day = '' + _date.getDate();

            var hour = '' + _date.getHours();
            var minute = '' + _date.getMinutes();


            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            if (hour.length < 2) hour = '0' + hour;
            if (minute.length < 2) minute = '0' + minute;

            var allYear = [year, month, day].join('-');
            var allTime = [hour, minute].join(':');
            return allYear + ' ' + allTime;
        }
    };
};


//{
//console.log('_________________________________');
//console.log(UseDate);
//UseDate.setHours(UseDate.getHours() + 3);
//console.log(UseDate);
/* var i = UseDate.toISOString().slice(0, 16).replace('T', ' ');
    var j = i.split(' ');
    i = i.split(' ');
    j = j[1].split(':');
    j[0] = Number(j[0]) + 3; 
    //console.log(UseDate.toISOString().slice(0, 16).replace('T', ' ')); //i[0] + ' ' + j[0] + ':' + j[1]);
    return (UseDate.toISOString().slice(0, 16).replace('T', ' ')); //i[0] + ' ' + j[0] + ':' + j[1]);
}*/