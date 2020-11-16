module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    //console.log("______конструктор______");
    this.collections = [];
    //console.log(this);
}


// Методы коллекции
Collection.prototype.append = function(value) {
    //console.log("______APPEND______");
    if (value instanceof Collection) {
        //console.log("value является объектов конструктора Collection");
        this.collections = this.collections.concat(value.collections);
    } else {
        this.collections.push(value);
    };
    //console.log(this.collections);
};

Collection.prototype.count = function() {
    //console.log("______COUNT______");
    //console.log(this.collections.length);
    return this.collections.length;
};

Collection.prototype.values = function() {
    //console.log("______VALUES______");
    //console.log(this.collections);
    return this.collections;
};

Collection.prototype.at = function(index) {
    //console.log("______AT______");
    if (index < 1 && index > this.collections.length) {
        return null;
    } else {
        return this.collections[index - 1];
    };
};

Collection.prototype.removeAt = function(index) {
    //console.log("______REMOVEAT______");
    if (index <= this.collections.length && index > 0) {
        this.collections.splice(index - 1, 1)
        return true;
    } else {
        return false;
    };
};
/**
 * Создание коллекции из массива значений
 */
Collection.from = function(value) {
    //console.log("______FROM______");
    values = new Collection;
    values.collections = values.collections.concat(value);
    //console.log(values.collections);
    return values;
};