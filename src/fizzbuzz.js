const answer = []

// Write your code below this line
for(let number = 1; number < 16; number++) {
    let word = ''
    if(number % 3 === 0) {
        word = 'Fizz'
    } 
    if (number % 5 === 0) {
        word += 'Buzz'
    }
    if(word === '') {
        word = number
    }
    answer.push(word)
}




// Don't touch the code below this line, we'll cover it later
module.exports = answer
