let form = document.querySelector('.form');
let rand_n = parseInt((100 * Math.random()) + 1);
// console.log(rand_n)

let remGuess = 10

let flag = 0;

function nnCheck(n) {
    if (n % 69 == 0 && n > 100) {
        let t = n / 69;
        if (t % 101 == 0 || t % 101 == 1) {
            return true;
        }
        else {
            return false;
        }

    }
    else {
        return false;
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (flag === 1) { }
    else {
        const gn = document.querySelector('#guessField')
        const gussed_number = parseInt(gn.value)
        gn.value = ""
        console.log(gussed_number);

        if (gussed_number > 100 || gussed_number <= 0) {
            if (nnCheck(gussed_number)) {
                let Sw = document.querySelector('#SwinBox')
                Sw.style.display = "block"
                document.querySelector("#SplayAgain").focus();
            }
            else {
                alert("Enter the number Between 1 to 100 please")
            }
        }
        // else if (gussed_number.isNaN()) { }
        else {
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
                document.querySelector("#playAgain").focus();
            }

            else if (remGuess == 0) {
                flag = 1;
                let cn = document.querySelector('#correctNumber')
                cn.innerHTML = rand_n
                let loser = document.querySelector('#loseBox')
                loser.style.display = "block"
                document.querySelector("#tryAgain").focus();

            }
            else if (gussed_number < rand_n) {
                display.innerHTML = "Higher"
            }
            else if (gussed_number > rand_n) {
                display.innerHTML = "Lower"
            }
        }
    }
})

let playAgain = document.querySelector('#playAgain')

playAgain.addEventListener('click', () => {
    window.location.reload();
})

let tryAgain = document.querySelector('#tryAgain')

tryAgain.addEventListener('click', () => {
    window.location.reload();
})

let sb = document.querySelector("#SplayAgain")

sb.addEventListener('click', () => {
    document.querySelector('#SwinBox').style.display = "none"
})

[playAgain, tryAgain, sb].forEach(btn => {
    btn.addEventListener('keyup', (e) => {
        if (e.key === "Enter") {
            btn.click(); // simulate click
        }
    });
});