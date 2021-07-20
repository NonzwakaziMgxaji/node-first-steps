"use strict"

//IMPORTING THE GREET MODULE THAT IS IN CURRENT FOLDER
    const greet = require('./greet');


//DECLARING THE EXTERNAL MODULES
    const chalk = require('chalk');
    const figlet = require('figlet');


    const styledMessage = chalk.bgGreen.black(
        figlet.textSync(greet('Xola'))
    );

    console.log(styledMessage);