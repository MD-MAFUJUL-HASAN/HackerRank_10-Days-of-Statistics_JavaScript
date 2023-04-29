'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowels_array = [];
    var consonants = "";

    for(var idx = 0; idx<s.length; idx++) {
        if (vowels.indexOf(s[idx]) !== -1) {
            console.log(s[idx]);
        } else {
            consonants += s[idx] + '\n';
        }
    }
    console.log(consonants);
}

