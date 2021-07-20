"use strict"

// ORIGINAL BOOTCAMP GREET FUNCTION
    function greet(name){
        return "Hello, " + name;
    }
    var msg = greet('Xola')
    console.log(msg)

// CREATING A MODULE
    module.exports = function(name){
        return 'Hello, ' + name;
}   

