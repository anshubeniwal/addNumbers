function addNumbers (...options) {
    var sum = 0;
    for (var i=0; i < options.length; i++) {
        sum += options[i];
    }
    return sum;
}

module.exports.addNumbers = addNumbers