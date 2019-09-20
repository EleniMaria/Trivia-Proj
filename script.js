//header items: start, score, reset
const deckFront = document.querySelector ('.front');

class theDeck {
  constructor (front, back) {
    this.front = front;
    this.back = back;
    this.display = function (side) {
      if (side === 0) {
        return this.front;
      }
    };
  }
}
//questions
let card1 = new theDeck (
  'This method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
  'concat()'
);
console.log (card1.front);
console.log (card1.back);

let card2 = new theDeck (
  'This method returns the given value and finishes the generator.',
  'return()'
);
console.log (card2.front);
console.log (card2.back);

let card3 = new theDeck (
  'This method adds one or more elements to the end of an array and returns the new length of the array.',
  'push()'
);
console.log (card3.front);
console.log (card3.back);

let card4 = new theDeck (
  'This method removes the last element from an array and returns that element. This method changes the length of the array.',
  'pop()'
);
console.log (card4.front);
console.log (card4.back);

let card5 = new theDeck (
  'This method changes the contents of an array by removing or replacing existing elements and/or adding new elements.',
  'splice()'
);
console.log (card5.front);
console.log (card5.back);

let card6 = new theDeck (
  'This method extracts a section of a string and returns it as a new string, without modifying the original string.',
  'slice()'
);
console.log (card6.front);
console.log (card6.back);

let card7 = new theDeck (
  'This method is used to return a floating-point, pseudo-random number in the range 0–1 which you can then scale to your desired range.',
  'Math.random()'
);
console.log (card7.front);
console.log (card7.back);

let card8 = new theDeck (
  'This method is used to return the value of a number rounded to the nearest integer',
  'Math.round()'
);
console.log (card8.front);
console.log (card8.back);

let card9 = new theDeck (
  'This method is used to return the smallest integer greater than or equal to a given number.',
  'Math.ceil()'
);
console.log (card9.front);
console.log (card9.back);

let card10 = new theDeck (
  'This method is used to return the largest integer less than or equal to a given number.',
  'Math.floor()'
);
console.log (card10.front);
console.log (card10.back);

let card11 = new theDeck (
  'This method creates a new typed array with the results of calling a provided function on every element in this typed array.',
  'map()'
);
console.log (card11.front);
console.log (card11.back);

let card12 = new theDeck (
  'This method returns the calling string value converted to lower case.',
  'toLowerCase()'
);
console.log (card12.front);
console.log (card12.back);

let card13 = new theDeck (
  'This method returns the calling string value converted to uppercase (the value will be converted to a string if it is not one).',
  'toUpperCase()'
);
console.log (card13.front);
console.log (card13.back);

// create input field and a way to store the answer
let scoreTotal = 0;
const scoreButton = document.querySelector ('.score');
console.log (scoreButton);

//create scoreboard
scoreButton.addEventListener ('click', function () {
  console.log ('.score');
  //add answers
  let answerCard1 = card1.back;
  if (answerCard1 === document.querySelector ('.answer').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton2 = document.querySelector ('.score2');
console.log (scoreButton);

scoreButton2.addEventListener ('click', function () {
  console.log ('.score2');

  let answerCard2 = card2.back;
  if (answerCard2 === document.querySelector ('.answer2').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton3 = document.querySelector ('.score3');
console.log (scoreButton);

scoreButton3.addEventListener ('click', function () {
  console.log ('.score3');

  let answerCard3 = card3.back;
  if (answerCard3 === document.querySelector ('.answer3').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton4 = document.querySelector ('.score4');
console.log (scoreButton);

scoreButton4.addEventListener ('click', function () {
  console.log ('.score4');

  let answerCard4 = card4.back;
  if (answerCard4 === document.querySelector ('.answer4').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton5 = document.querySelector ('.score5');
console.log (scoreButton);

scoreButton5.addEventListener ('click', function () {
  console.log ('.score5');

  let answerCard5 = card5.back;
  if (answerCard5 === document.querySelector ('.answer5').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton6 = document.querySelector ('.score6');
console.log (scoreButton);

scoreButton6.addEventListener ('click', function () {
  console.log ('.score6');

  let answerCard6 = card6.back;
  if (answerCard6 === document.querySelector ('.answer6').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton7 = document.querySelector ('.score7');
console.log (scoreButton);

scoreButton7.addEventListener ('click', function () {
  console.log ('.score7');

  let answerCard7 = card7.back;
  if (answerCard7 === document.querySelector ('.answer7').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton8 = document.querySelector ('.score8');
console.log (scoreButton);

scoreButton8.addEventListener ('click', function () {
  console.log ('.score8');

  let answerCard8 = card8.back;
  if (answerCard8 === document.querySelector ('.answer8').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton9 = document.querySelector ('.score9');
console.log (scoreButton);

scoreButton9.addEventListener ('click', function () {
  console.log ('.score9');

  let answerCard9 = card9.back;
  if (answerCard9 === document.querySelector ('.answer9').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton10 = document.querySelector ('.score10');
console.log (scoreButton);

scoreButton10.addEventListener ('click', function () {
  console.log ('.score10');

  let answerCard10 = card10.back;
  if (answerCard10 === document.querySelector ('.answer10').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton11 = document.querySelector ('.score11');
console.log (scoreButton);

scoreButton11.addEventListener ('click', function () {
  console.log ('.score11');

  let answerCard11 = card11.back;
  if (answerCard11 === document.querySelector ('.answer11').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton12 = document.querySelector ('.score12');
console.log (scoreButton);

scoreButton12.addEventListener ('click', function () {
  console.log ('.score12');

  let answerCard12 = card12.back;
  if (answerCard12 === document.querySelector ('.answer12').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

const scoreButton13 = document.querySelector ('.score13');
console.log (scoreButton);

scoreButton13.addEventListener ('click', function () {
  console.log ('.score13');

  let answerCard13 = card13.back;
  if (answerCard13 === document.querySelector ('.answer13').value) {
    alert ('You got it right!');
    scoreTotal += 1;
    document.querySelector ('.scoreTotal').innerHTML = scoreTotal;
  } else {
    alert ('Incorrect!');
  }
});

//flash cards

//click start and load front of first card
//prompt user for answer and provide input field
//prompt("answer here", )
//if correct Alert Correct and flip card and add to score
//alert("Correct!")
//if incorrect Alert Incorrect and direct user to try again
//while adding incorrect to score
//alert("Incorrect.")
//allow user to restart at any time (saving scores would be nice)
//provide final score on completion of last card and ask if they want to go again
//sources:
//Methods list https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index
