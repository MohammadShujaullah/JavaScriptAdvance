let randomnumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')

const userinput=document.querySelector('#guessfield')
const guessslot=document.querySelector(('.guesses'))
const remaianing=document.querySelector(('.lastResult'))
const loworhi=document.querySelector(('.loworHi'))
const startover=document.querySelector(('.resultparas'))

const p= document.createElement('p');

let prevguess=[];
let numguess=1;


let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);

    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess<1){
        alert("please enter anumber>1")
    }
    else if(guess>100){
        alert("please enter anumber<100")
    }
    else{         // put the number in array
        prevguess.push(guess);

        // check the limits
        if(numguess==10){
            displayguess(guess)
            displaymessage(`Game Over, the random no. was ${randomnumber}`)
            endGame();

        }
        else{
            displayguess(guess);    // display it 
            checkguess(guess);    // check it, 
                          
        }

    }

}
function checkguess(guess){
    if(guess===randomnumber){
        displaymessage(`you guessed it right`)
        endGame()
    }
    else if(guess<randomnumber){
        displaymessage(`number is too low`)

    }
    else if(guess>randomnumber){
        displaymessage(`number is too high`)

    }


}
function displayguess(guess){
    userinput.value='';
    guessslot.innerHTML+=`${guess}, `;
    numguess++;
    remaianing.innerHTML=`${11-numguess}`
    

}
function displaymessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`;

}
function endGame(){
    userinput.value='';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame=false;
    newGame();





}
function newGame(){
    const newgamebutton=document.querySelector('#newGame');
 
    newgamebutton.addEventListener('click',function(e){
        randomnumber=parseInt(Math.random()*100+1);
        prevguess=[];
        numguess=1;
        guessslot.innerHTML='';
        remaianing.innerHTML=`${11-numguess}`;
        userinput.removeAttribute('disabled')
        startover.removeChild(p);
        playgame=true;

    })

}










