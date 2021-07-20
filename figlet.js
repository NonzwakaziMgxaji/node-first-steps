//FIGLET EXAMPLES TO PRACTISE

"use strict"
/***************************************************/
    var figlet = require('figlet');
    
    figlet('Hello Nzwakie!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });

/***************************************************/

    figlet.text('Boo!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });

/***************************************************/

    console.log(figlet.textSync('CodeX!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));

/***************************************************/