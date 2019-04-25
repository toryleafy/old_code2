
const height = 5

const width = 5


//const timer = require('./timer.js');
//let val = timer.timer(); 


//var btn = document.querySelector('button');
//var btn = document.querySelector('button');

//function random(number) {
  //return Math.floor(Math.random()*(number+1));
//}

//btn.onclick = function() {
  //var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  //document.body.style.backgroundColor = rndCol;
//}


//import Timer() from './timer.js'
//const timer = new Timer()
function setupGrid () {
  
	//document.addEventListener('click', flipSquare1)
	//display.addEventListener('click', startGame)
	//display.addEventListener('click', flipSquare)
	const squares = document.querySelectorAll('.lightsout-square')
  
	for (let i = 0; i < squares.length; i++) {
    
		const row = Math.floor(i / height)
    
		const col = i % height
    
		squares[i].style.gridRowStart = row + 1
    
		squares[i].style.gridColumnStart = col + 1
    
		console.log(`For index ${i}, row: ${row} col: ${col}`)
  }

}


window.onload = function(){




//import Timer from './timer.js'
//onst timer = new Timer()
//timer.start()
//setInterval(() => console.log(liner.getElapsedTime()), 1000)

//var timer = document.querySelector('#lightsout-timer')
var startButton = document.querySelector('#lightsout-newgame-btn')
var square1 = document.querySelector('.lightsout-square-1');
var square2 = document.querySelector('.lightsout-square-2');
var square3 = document.querySelector('.lightsout-square-3');
var square4 = document.querySelector('.lightsout-square-4');
var square5 = document.querySelector('.lightsout-square-5');
var square6 = document.querySelector('.lightsout-square-6');
var square7 = document.querySelector('.lightsout-square-7');
var square8 = document.querySelector('.lightsout-square-8');
var square9 = document.querySelector('.lightsout-square-9');
var square10 = document.querySelector('.lightsout-square-10');
var square11 = document.querySelector('.lightsout-square-11');
var square12 = document.querySelector('.lightsout-square-12');
var square13 = document.querySelector('.lightsout-square-13');
var square14 = document.querySelector('.lightsout-square-14');
var square15 = document.querySelector('.lightsout-square-15');
var square16 = document.querySelector('.lightsout-square-16');
var square17 = document.querySelector('.lightsout-square-17');
var square18 = document.querySelector('.lightsout-square-18');
var square19 = document.querySelector('.lightsout-square-19');
var square20 = document.querySelector('.lightsout-square-20');
var square21 = document.querySelector('.lightsout-square-21');
var square22 = document.querySelector('.lightsout-square-22');
var square23 = document.querySelector('.lightsout-square-23');
var square24 = document.querySelector('.lightsout-square-24');
var square25 = document.querySelector('.lightsout-square-25');

running = 0
startTime = null
stopTime = null
let elapsed = 0;
function Start(){
	startTime = new Date()
	running = true
	minutes = 0;
	seconds = 0;
}
function Stop(){
	stopTime = null
	running = false
	minutes = 0;
	seconds = 0;
	document.getElementById('lightsout-timer').innerHTML = '0:0'
	}
function reset(){
		running = 0
		startTime = 0
		stopTime = null
		minutes = 0;
		seconds = 0;
	}
let minutes = 0;
let seconds = 0;
let gameCount = 0;
function ElapsedTime(){
		if(startTime === null){
			return['0','0']
		}
		if(stopTime !== null){
			elapsed = stopTime - startTime
		}
		else{
			elapsed = new Date()
		}
		if(gameCount === 1){
			let count = Math.floor(elapsed / 1000)
		}
		if(gameCount === 2){
			let count = Math.floor(elapsed / 1000)
		}
		else{
			let count = Math.floor(elapsed / 1000)
		}
		let count = Math.floor(elapsed / 1000)
		count = count % 60
		if(count <= 59){
			seconds++
		}
		//let minutes = 0;
		seconds = seconds % 60
		if((seconds % 60) == 0){
			minutes++
		}
		document.getElementById('lightsout-timer').innerHTML = minutes + ':' + seconds

	
}


startButton.onclick = function(){
	gameCount++
	Stop()
	reset()
	Start();

	overlay.classList.add('normalGame')
	
	removeOverlay()
	if (gameCount == 1){
		let starter = setInterval(() => console.log(ElapsedTime()), 1000)
	}
	square1.classList.remove('js-lightsout-square-on')
	square2.classList.remove('js-lightsout-square-on')
	square3.classList.remove('js-lightsout-square-on')
	square4.classList.remove('js-lightsout-square-on')
	square5.classList.remove('js-lightsout-square-on')
	square6.classList.remove('js-lightsout-square-on')
	square7.classList.remove('js-lightsout-square-on')
	square8.classList.remove('js-lightsout-square-on')
	square9.classList.remove('js-lightsout-square-on')
	square10.classList.remove('js-lightsout-square-on')
	square11.classList.remove('js-lightsout-square-on')
	square12.classList.remove('js-lightsout-square-on')
	square13.classList.remove('js-lightsout-square-on')
	square14.classList.remove('js-lightsout-square-on')
	square15.classList.remove('js-lightsout-square-on')
	square16.classList.remove('js-lightsout-square-on')
	square17.classList.remove('js-lightsout-square-on')
	square18.classList.remove('js-lightsout-square-on')
	square19.classList.remove('js-lightsout-square-on')
	square20.classList.remove('js-lightsout-square-on')
	square21.classList.remove('js-lightsout-square-on')
	square22.classList.remove('js-lightsout-square-on')
	square23.classList.remove('js-lightsout-square-on')
	square24.classList.remove('js-lightsout-square-on')
	square25.classList.remove('js-lightsout-square-on')
	randSquare()
	randSquare()
	randSquare()
	randSquare()
	randSquare()
	randSquare()
	randSquare()
	randSquare()
	randSquare()
	randSquare()
}

square1.onclick = function(){
	square1.classList.toggle('js-lightsout-square-on').onclick
	square2.classList.toggle('js-lightsout-square-on').onclick
	square6.classList.toggle('js-lightsout-square-on').onclick	
	isVictorious()
}

square2.onclick = function(){
	square2.classList.toggle('js-lightsout-square-on').onclick
	square1.classList.toggle('js-lightsout-square-on').onclick
	square3.classList.toggle('js-lightsout-square-on').onclick
	square7.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square3.onclick = function(){
	square3.classList.toggle('js-lightsout-square-on').onclick
	square4.classList.toggle('js-lightsout-square-on').onclick
	square2.classList.toggle('js-lightsout-square-on').onclick
	square8.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square4.onclick = function(){
	square4.classList.toggle('js-lightsout-square-on').onclick
	square5.classList.toggle('js-lightsout-square-on').onclick
	square3.classList.toggle('js-lightsout-square-on').onclick
	square9.classList.toggle('js-lightsout-square-on').onclick	
	isVictorious()
}

square5.onclick = function(){
	square5.classList.toggle('js-lightsout-square-on').onclick
	square4.classList.toggle('js-lightsout-square-on').onclick
	square10.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square6.onclick = function(){
	square1.classList.toggle('js-lightsout-square-on').onclick
	square6.classList.toggle('js-lightsout-square-on').onclick
	square7.classList.toggle('js-lightsout-square-on').onclick
	square11.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square7.onclick = function(){
	square7.classList.toggle('js-lightsout-square-on').onclick
	square6.classList.toggle('js-lightsout-square-on').onclick
	square8.classList.toggle('js-lightsout-square-on').onclick
	square2.classList.toggle('js-lightsout-square-on').onclick
	square12.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square8.onclick = function(){
	square8.classList.toggle('js-lightsout-square-on').onclick
	square7.classList.toggle('js-lightsout-square-on').onclick
	square9.classList.toggle('js-lightsout-square-on').onclick
	square3.classList.toggle('js-lightsout-square-on').onclick
	square13.classList.toggle('js-lightsout-square-on').onclick	
	isVictorious()
}

square9.onclick = function(){
	square9.classList.toggle('js-lightsout-square-on').onclick
	square8.classList.toggle('js-lightsout-square-on').onclick
	square10.classList.toggle('js-lightsout-square-on').onclick
	square4.classList.toggle('js-lightsout-square-on').onclick
	square14.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square10.onclick = function(){
	square10.classList.toggle('js-lightsout-square-on').onclick
	square9.classList.toggle('js-lightsout-square-on').onclick
	square5.classList.toggle('js-lightsout-square-on').onclick
	square15.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square11.onclick = function(){
	square11.classList.toggle('js-lightsout-square-on').onclick
	square6.classList.toggle('js-lightsout-square-on').onclick
	square12.classList.toggle('js-lightsout-square-on').onclick
	square16.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square12.onclick = function(){
	square12.classList.toggle('js-lightsout-square-on').onclick
	square11.classList.toggle('js-lightsout-square-on').onclick
	square13.classList.toggle('js-lightsout-square-on').onclick
	square7.classList.toggle('js-lightsout-square-on').onclick
	square17.classList.toggle('js-lightsout-square-on').onclick	
	isVictorious()
}

square13.onclick = function(){
	square13.classList.toggle('js-lightsout-square-on').onclick
	square14.classList.toggle('js-lightsout-square-on').onclick
	square12.classList.toggle('js-lightsout-square-on').onclick
	square8.classList.toggle('js-lightsout-square-on').onclick
	square18.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square14.onclick = function(){
	square14.classList.toggle('js-lightsout-square-on').onclick
	square15.classList.toggle('js-lightsout-square-on').onclick
	square13.classList.toggle('js-lightsout-square-on').onclick
	square9.classList.toggle('js-lightsout-square-on').onclick
	square19.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square15.onclick = function(){
	square15.classList.toggle('js-lightsout-square-on').onclick
	square14.classList.toggle('js-lightsout-square-on').onclick
	square10.classList.toggle('js-lightsout-square-on').onclick
	square20.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square16.onclick = function(){
	square16.classList.toggle('js-lightsout-square-on').onclick
	square11.classList.toggle('js-lightsout-square-on').onclick
	square21.classList.toggle('js-lightsout-square-on').onclick
	square17.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square17.onclick = function(){
	square17.classList.toggle('js-lightsout-square-on').onclick
	square16.classList.toggle('js-lightsout-square-on').onclick
	square18.classList.toggle('js-lightsout-square-on').onclick
	square22.classList.toggle('js-lightsout-square-on').onclick
	square12.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square18.onclick = function(){
	square18.classList.toggle('js-lightsout-square-on').onclick
	square17.classList.toggle('js-lightsout-square-on').onclick
	square19.classList.toggle('js-lightsout-square-on').onclick
	square13.classList.toggle('js-lightsout-square-on').onclick
	square23.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square19.onclick = function(){
	square19.classList.toggle('js-lightsout-square-on').onclick
	square18.classList.toggle('js-lightsout-square-on').onclick
	square20.classList.toggle('js-lightsout-square-on').onclick
	square14.classList.toggle('js-lightsout-square-on').onclick
	square24.classList.toggle('js-lightsout-square-on').onclick	
	isVictorious()
}

square20.onclick = function(){
	square20.classList.toggle('js-lightsout-square-on').onclick
	square15.classList.toggle('js-lightsout-square-on').onclick
	square19.classList.toggle('js-lightsout-square-on').onclick
	square25.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}


square21.onclick = function(){
	square21.classList.toggle('js-lightsout-square-on').onclick
	square16.classList.toggle('js-lightsout-square-on').onclick
	square22.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square22.onclick = function(){
	square21.classList.toggle('js-lightsout-square-on').onclick
	square23.classList.toggle('js-lightsout-square-on').onclick
	square22.classList.toggle('js-lightsout-square-on').onclick
	square17.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

square23.onclick = function(){
	square23.classList.toggle('js-lightsout-square-on').onclick
	square22.classList.toggle('js-lightsout-square-on').onclick
	square24.classList.toggle('js-lightsout-square-on').onclick
	square18.classList.toggle('js-lightsout-square-on').onclick	
	isVictorious()
}

square24.onclick = function(){
	square24.classList.toggle('js-lightsout-square-on').onclick
	square25.classList.toggle('js-lightsout-square-on').onclick
	square23.classList.toggle('js-lightsout-square-on').onclick
	square19.classList.toggle('js-lightsout-square-on').onclick
	//temp()	
	isVictorious()	
}

square25.onclick = function(){
	square25.classList.toggle('js-lightsout-square-on').onclick
	square24.classList.toggle('js-lightsout-square-on').onclick
	square20.classList.toggle('js-lightsout-square-on').onclick
	isVictorious()	
}

function randSquare(){
	let randNum = Math.floor(Math.random() * 25) + 1
	if(randNum === 1){
		square1.classList.toggle('js-lightsout-square-on').onclick
		square2.classList.toggle('js-lightsout-square-on').onclick
		square6.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 2){
		square2.classList.toggle('js-lightsout-square-on').onclick
		square1.classList.toggle('js-lightsout-square-on').onclick
		square3.classList.toggle('js-lightsout-square-on').onclick
		square7.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 3){
		square3.classList.toggle('js-lightsout-square-on').onclick
		square4.classList.toggle('js-lightsout-square-on').onclick
		square2.classList.toggle('js-lightsout-square-on').onclick
		square8.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 4){		
		square4.classList.toggle('js-lightsout-square-on').onclick
		square5.classList.toggle('js-lightsout-square-on').onclick
		square3.classList.toggle('js-lightsout-square-on').onclick
		square9.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 5){
		square5.classList.toggle('js-lightsout-square-on').onclick
		square4.classList.toggle('js-lightsout-square-on').onclick
		square10.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 6){
		square1.classList.toggle('js-lightsout-square-on').onclick
		square6.classList.toggle('js-lightsout-square-on').onclick
		square7.classList.toggle('js-lightsout-square-on').onclick
		square11.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 7){
		square7.classList.toggle('js-lightsout-square-on').onclick
		square6.classList.toggle('js-lightsout-square-on').onclick
		square8.classList.toggle('js-lightsout-square-on').onclick
		square2.classList.toggle('js-lightsout-square-on').onclick
		square12.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 8){
		square8.classList.toggle('js-lightsout-square-on').onclick
		square7.classList.toggle('js-lightsout-square-on').onclick
		square9.classList.toggle('js-lightsout-square-on').onclick
		square3.classList.toggle('js-lightsout-square-on').onclick
		square13.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 9){
		square9.classList.toggle('js-lightsout-square-on').onclick
		square8.classList.toggle('js-lightsout-square-on').onclick
		square10.classList.toggle('js-lightsout-square-on').onclick
		square4.classList.toggle('js-lightsout-square-on').onclick
		square14.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 10){
		square10.classList.toggle('js-lightsout-square-on').onclick
		square9.classList.toggle('js-lightsout-square-on').onclick
		square5.classList.toggle('js-lightsout-square-on').onclick
		square15.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 11){
		square11.classList.toggle('js-lightsout-square-on').onclick
		square6.classList.toggle('js-lightsout-square-on').onclick
		square12.classList.toggle('js-lightsout-square-on').onclick
		square16.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 12){
		square12.classList.toggle('js-lightsout-square-on').onclick
		square11.classList.toggle('js-lightsout-square-on').onclick
		square13.classList.toggle('js-lightsout-square-on').onclick
		square7.classList.toggle('js-lightsout-square-on').onclick
		square17.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 13){
		square13.classList.toggle('js-lightsout-square-on').onclick
		square14.classList.toggle('js-lightsout-square-on').onclick
		square12.classList.toggle('js-lightsout-square-on').onclick
		square8.classList.toggle('js-lightsout-square-on').onclick
		square18.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 14){
		square14.classList.toggle('js-lightsout-square-on').onclick
		square15.classList.toggle('js-lightsout-square-on').onclick
		square13.classList.toggle('js-lightsout-square-on').onclick
		square9.classList.toggle('js-lightsout-square-on').onclick
		square19.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 15){
		square15.classList.toggle('js-lightsout-square-on').onclick
		square14.classList.toggle('js-lightsout-square-on').onclick
		square10.classList.toggle('js-lightsout-square-on').onclick
		square20.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 16){
		square16.classList.toggle('js-lightsout-square-on').onclick
		square11.classList.toggle('js-lightsout-square-on').onclick
		square21.classList.toggle('js-lightsout-square-on').onclick
		square17.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 17){
		square17.classList.toggle('js-lightsout-square-on').onclick
		square16.classList.toggle('js-lightsout-square-on').onclick
		square18.classList.toggle('js-lightsout-square-on').onclick
		square22.classList.toggle('js-lightsout-square-on').onclick
		square12.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 18){
		square18.classList.toggle('js-lightsout-square-on').onclick
		square17.classList.toggle('js-lightsout-square-on').onclick
		square19.classList.toggle('js-lightsout-square-on').onclick
		square13.classList.toggle('js-lightsout-square-on').onclick
		square23.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 19){
		square19.classList.toggle('js-lightsout-square-on').onclick
		square18.classList.toggle('js-lightsout-square-on').onclick
		square20.classList.toggle('js-lightsout-square-on').onclick
		square14.classList.toggle('js-lightsout-square-on').onclick
		square24.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 20){
		square20.classList.toggle('js-lightsout-square-on').onclick
		square15.classList.toggle('js-lightsout-square-on').onclick
		square19.classList.toggle('js-lightsout-square-on').onclick
		square25.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 21){
		square21.classList.toggle('js-lightsout-square-on').onclick
		square16.classList.toggle('js-lightsout-square-on').onclick
		square22.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 22){
		square21.classList.toggle('js-lightsout-square-on').onclick
		square23.classList.toggle('js-lightsout-square-on').onclick
		square22.classList.toggle('js-lightsout-square-on').onclick
		square17.classList.toggle('js-lightsout-square-on').onclick
	}
	if(randNum === 23){
		square23.classList.toggle('js-lightsout-square-on').onclick
		square22.classList.toggle('js-lightsout-square-on').onclick
		square24.classList.toggle('js-lightsout-square-on').onclick
		square18.classList.toggle('js-lightsout-square-on').onclick	
	}
	if(randNum === 24){
		square24.classList.toggle('js-lightsout-square-on').onclick
		square25.classList.toggle('js-lightsout-square-on').onclick
		square23.classList.toggle('js-lightsout-square-on').onclick
		square19.classList.toggle('js-lightsout-square-on').onclick
		
	}
	else{
		square25.classList.toggle('js-lightsout-square-on').onclick
		square24.classList.toggle('js-lightsout-square-on').onclick
		square20.classList.toggle('js-lightsout-square-on').onclick
	}
}

randSquare()
randSquare()
randSquare()
randSquare()
randSquare()
randSquare()
randSquare()
randSquare()
randSquare()
randSquare()


function temp(){
	overlay.classList.add('endgame-popup')
	const popup = document.createElement('div')
	const popupText = document.createElement('p')
	const newGame = document.createElement('button')	
	popupText.innerText = 'congratulations! Finished at:    ' + document.getElementById('lightsout-timer').innerHTML
	Stop()
	reset()
	//popupText.innerText = minutes + ":" + seconds
	overlay.appendChild(startButton)
	overlay.appendChild(popupText)
}

function removeOverlay(){
	overlay.classList.remove('endgame-popup')
	overlay.popupText = ''
}


function isVictorious(){
	if(!square1.classList.contains('js-lightsout-square-on') && !square2.classList.contains('js-lightsout-square-on') && !square3.classList.contains('js-lightsout-square-on') && !square4.classList.contains('js-lightsout-square-on') && !square5.classList.contains('js-lightsout-square-on') && !square6.classList.contains('js-lightsout-square-on') && !square7.classList.contains('js-lightsout-square-on') && !square8.classList.contains('js-lightsout-square-on') && !square9.classList.contains('js-lightsout-square-on') && !square10.classList.contains('js-lightsout-square-on') && !square11.classList.contains('js-lightsout-square-on') && !square12.classList.contains('js-lightsout-square-on') && !square13.classList.contains('js-lightsout-square-on') && !square14.classList.contains('js-lightsout-square-on') && !square15.classList.contains('js-lightsout-square-on') && !square16.classList.contains('js-lightsout-square-on') && !square17.classList.contains('js-lightsout-square-on') && !square18.classList.contains('js-lightsout-square-on') && !square19.classList.contains('js-lightsout-square-on') && !square20.classList.contains('js-lightsout-square-on') && !square21.classList.contains('js-lightsout-square-on') && !square22.classList.contains('js-lightsout-square-on') && !square23.classList.contains('js-lightsout-square-on') && !square24.classList.contains('js-lightsout-square-on') && !square25.classList.contains('js-lightsout-square-on')){
	//if(gameCount > 1){
	//	overlay.remove(popupText)
	//}
	overlay.classList.add('endgame-popup')
	const popup = document.createElement('div')
	const popupText = document.createElement('p')
	const newGame = document.createElement('button')	
	popupText.innerText = 'congratulations! Finished at:    ' + document.getElementById('lightsout-timer').innerHTML
	Stop()
	document.getElementById('lightsout-timer').innerHTML ="0:0"
	//popupText.innerText = minutes + ":" + seconds
	overlay.appendChild(startButton)
	overlay.appendChild(popupText)
	overlay.classList.remove('normalGame')
	popupText.classList.add('endGamePopupText')
		
		
	}
}
  






setupGrid()

//const timer = new Timer()
//timer.start()
//setInterval(() => console.log(timer.getElapsedTime()), 1000)
}




