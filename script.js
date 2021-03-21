console.log('JS is linked!')
/*1.Plan out first. break them all into little pieces
2.Focus on making MVP
3.stretch goals adding cool features 
COMMIT and COMMIT! everytime you make big changes!!!!!!! */

const START_TIMER = 30; //second
const NUM_HOLES = 30; /* Generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.*/
for (let i = 0; i < 10; i++) {
    const hole = document.createElement('div');
    hole.classList.add('hole');
    document.querySelector('.game-board2').append(hole);
}

let timeRemaining =START_TIMER;
let score = 0 ; //score has to be changed so value is 0
let tickId = null; //same goes for tick and mole
let virusID = null;

document.querySelector('.time-number').innerText=timeRemaining;
document.querySelector('.score-number').innerText=score;



document.querySelector('.start-button').addEventListener('click', (event) => {
    document.querySelector('.game-board').classList.add('hidden');
    document.querySelector('.game-board2').classList.remove('hidden');
   //  console.log('you cliked');
   const addVirus = (num) => {
        while(num > 0) {
            setInterval(() => {
                const allHoles = document.querySelectorAll('.hole');
                const randomHole = Math.floor(Math.random() * allHoles.length);
                allHoles[randomHole].classList.add('virus');
                setTimeout(() => {
                    allHoles[randomHole].classList.remove('virus');
                }, 10000)
            }, 1000);
            num--;
        }
    } 
    addVirus(3) //always invoke function!!

    let interval = setInterval(()=> {
        document.querySelector('.time-number').innerText=timeRemaining;
        timeRemaining--;
            if (timeRemaining === 0){
                clearInterval(interval);
             document.querySelector('.time-number').innerText='0';
            }
    }, 1000);
})    

//for/of - loops through the values of an iterable object
for (hole of document.querySelectorAll('.hole')) {
    hole.addEventListener('click', (event) => {
        if(event.target.classList.contains('virus')){
            event.target.classList.remove('virus')
            score ++;
            document.querySelector('.score-number').innerText=score
        }
    })
}

    // const removeVirus = () => {
    //     setTimeout(() => {
    //             const allHolesR = document.querySelectorAll('.hole');
    //             const randomHoleR = Math.floor(Math.random() * allHoles.length);
    //             allHolesR[randomHoleR].classList.remove('virus');
    //         }, 10000)
    // }

    // const removeVirus = () => {
    //     setInterval(()=> {
    //         const allHoles = document.querySelectorAll('.hole');
           
    //     })
    // }
//Random numbers of virus (1 - 3) will show up, so I set infinite while loop
// invoked setInterval with 3 and num-- 






// document.querySelector('.time-number').innerText=timeRemaining