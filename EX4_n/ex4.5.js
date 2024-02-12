const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string:', (user_str) => {
    
    const reg_exp=/aa+/g;
    const rep_string=user_str.replace(reg_exp,'b');

    console.log("Original String ",user_str)
    console.log("Replaced String ",rep_string)
    rl.close();
});


