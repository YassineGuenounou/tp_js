let word = "Python";

function repeate(word) {
  if (word.length % 2 === 0) {
    let wordRes = "";
    for (let i = 0; i < word.length / 2; i++) {
      wordRes = wordRes + word.slice(word.length / 2);
    }
    return wordRes;
  } else {
    return "the length is odd";
  }
}

console.log("first idea --> ", repeate(word));

//********** */

function repeate2(word) {
  if (word.length % 2 === 1 && word.length >= 3) {
    let wordRes = "";
    wordRes = wordRes + word.substring(3, 6);
    return wordRes;
  } else {
    return "not acceptable word";
  }
}

console.log("second idea ---> ", repeate2(word));
