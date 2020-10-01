const { Stemmer, Tokenizer } = require('sastrawijs');
const { inArray } = require('../utils')

const kataKasar = [
    'anjing',
    'kontol',
    'memek',
    'jembut'
    //Tambahin Sendiri
];

module.exports = cariKasar = (kata) => new Promise((resolve, reject) => {
    let sentence = kata;
    let stemmer = new Stemmer();
    let tokenizer = new Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})