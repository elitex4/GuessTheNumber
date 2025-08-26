let form = document.querySelector('.form');
let rand_n = parseInt((100 * Math.random()) + 1);
// console.log(rand_n)

let remGuess = 10

let flag = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (flag === 1) { }
    else {
        const gussed_number = parseInt(document.querySelector('#guessField').value)

        let display = document.querySelector('.lowOrHi');

        remGuess--
        let guessCounter = document.querySelector('.lastResult')



        guessCounter.innerHTML = remGuess

        let prevGuess = document.querySelector('.guesses');

        prevGuess.innerHTML = prevGuess.innerHTML + " " + gussed_number;



        if (gussed_number === rand_n) {
            //   display.innerHTML = "You Won"
            let winner = document.querySelector('#winBox')
            winner.style.display = "block"
            flag = 1;
        }
        else if(gussed_number===6969){
            let Sw = document.querySelector('#SwinBox')
            Sw.style.display = "block"
        }
        else if(remGuess==0){
            flag = 1;
            let cn = document.querySelector('#correctNumber')
            cn.innerHTML = rand_n
            let loser = document.querySelector('#loseBox')
            loser.style.display = "block"

        }
        else if (gussed_number < rand_n) {
            display.innerHTML = "Higher"
        }
        else if (gussed_number > rand_n) {
            display.innerHTML = "Lower"
        }
    }
})

let playAgain = document.querySelector('#playAgain')

playAgain.addEventListener('click', ()=>{
    window.location.reload();
})

let tryAgain = document.querySelector('#tryAgain')

tryAgain.addEventListener('click', ()=>{
    window.location.reload();
})

let sb = document.querySelector("#SplayAgain")

sb.addEventListener('click', ()=>{
    window.location.reload();
})

