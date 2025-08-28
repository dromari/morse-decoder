const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }
  const newArr = arr.map((elArr) =>
    elArr !== '**********' ? Number(elArr) : elArr
  );

  const newStringArr = newArr.map((elArr) =>
    elArr !== '**********' ? String(elArr) : ' '
  );

  const arrDashes = newStringArr.map((elArr) => elArr.replaceAll('11', '-'));

  const arrDots = arrDashes.map((elArr) => elArr.replaceAll('10', '.'));

  const inLitters = arrDots.map((elArr) =>
    elArr !== ' ' ? MORSE_TABLE[elArr] : ' '
  );

  return inLitters.join('');
};
