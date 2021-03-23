// This connects the button to a function. The "button" button will be connected to the "compare" function.
document.getElementById('button').addEventListener('click', compare)
let userInput = 0

function compare () {
  // Get user input and use it as an integer instead of a symbol or character.
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)
  // Now we check if the user's input is negative (less than 0).
  if (userInput < 0) {
    document.getElementById('reveal').innerHTML = 'That number is negative.'
    // If the statement above is true then the "else" function below will be ignored.
  } else {
    document.getElementById('reveal').innerHTML = 'That number is positive.'
    // However, if the statement is not true, meaning if the input is not negative, then the "if" function will be ignored and the "else" function will be carried out.
   }
}
