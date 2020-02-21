module.exports = function toReadable(number) {
    if (number != '') {
        let str = '';
        str += toWords((parseInt((number / 100) % 10)), "hundred ");
        str += toWords(parseInt((number % 100)), "");
        return str.substr(0, str.length - 1);
    }
    return 'zero';
}

function toWords(number, s) {
    let str = '';
    if (number > 19)
        str += secondDig[parseInt(number / 10)] + firstDig[number % 10];
    else
        str += firstDig[number];
    if (number)
        str += s;

    return str;
}

let firstDig = ['', 'one ', 'two ', 'three ', 'four ',
    'five ', 'six ', "seven ", 'eight ',
    'nine ', 'ten ', 'eleven ', 'twelve ',
    'thirteen ', 'fourteen ', 'fifteen ',
    'sixteen ', 'seventeen ', 'eighteen ',
    'nineteen '];

let secondDig = ['', '', 'twenty ', 'thirty ', 'forty ',
    'fifty ', 'sixty ', 'seventy ', 'eighty ',
    'ninety '];
