// Select random words
// When answering, if index DE matches ESP, the answer is correct

const ArrayAnimalsDE = ["Tiere", "Hund", "Katze", "Fisch", "Kanarienvogel", "Haustiere", "Hamster", "Kaninchen", "Maus", "Pony"];
const ArrayAnimalsESP = ["Animales", "Perro", "Gato", "Pez", "Canario", "Mascotas", "Hamster", "Conejo", "Raton", "Poni"];
const ArrayShoppingDE  = ["Ja", "Nein", "Bitte", "Danke", "Wo", "Vielleicht", "Entschuldigung", "Alles klar", "Ich verstehe", "Warum"];
const ArrayShoppingESP = ["Sí", "No", "Por Favor", "Gracias", "Dónde", "Tal Vez", "Io Siento", "Vale", "Entiendo", "Por Que"];
const ArrayTravelDE = ["Mieten", "Stornieren", "Kaufen", "Bestätigen", "Schlafen", "Ich komme aus", "Hallo", "Guten Morgen", "Guten Tag", "Gute Nacht"];
const ArrayTravelESP = ["Alquilar", "Cancelar", "Comprar", "Confirm", "Dormir", "Soy de", "Hola", "Buenos Dias", "Buenas Tardes", "Buenas Noches"];

categorySet = false;
category = '';
lastWord = '';
exerciseStarted  = false;
exerciseFinished = false;
isAnswerCorrect  = false;
counterCorrect = 0;







//Main Function 
function Start(){
	
	//if no category set
	if (categorySet == false) {ShowCategory()}
	//else start exercise
	else {StartExercise()}
	exerciseStarted = true;
	     document.getElementById('Counter').innerHTML = 'Richtig: ' + counterCorrect + '/10';
	if(categorySet == true){
		document.getElementById('startButton').innerHTML = 'Answer';
	}
	if(isAnswerCorrect){
		document.getElementById('Main').innerHTML = 'Correct Answer!';
		document.getElementById('startButton').innerHTML = 'Next';
		document.getElementById('Question').innerHTML = '';
		isAnswerCorrect = false;
		counterCorrect++;	
	}
	
	//finished after 10 answers
	if(counterCorrect >10){
		document.getElementById('Main').innerHTML = 'Finished!';
		document.getElementById('startButton').style.display='none';
		document.getElementById('mainButton').style.border='2px solid red';
		document.getElementById('Question').innerHTML = '';
		document.getElementById('Category').innerHTML = '';
	}
	   
	
	
	
}

function SetCategory(selectedCategory){
	
	
	category = selectedCategory;
	categorySet = true;
	document.getElementById('Category').innerHTML = 'Category: ' + category;
	
}



function ShowCategory(){
	
 document.getElementById('Main').innerHTML = '';  
 var myDiv = document.getElementById("Main");
 
 
 var buttonAnimals = document.createElement('BUTTON');
 var text = document.createTextNode("Animals");
 buttonAnimals.appendChild(text);
 buttonAnimals.setAttribute('class', 'button');
 buttonAnimals.setAttribute('type', 'button');
 buttonAnimals.setAttribute('onclick', 'SetCategory("Animals")');
 myDiv.appendChild(buttonAnimals);
 
 
 
 var buttonShopping = document.createElement('BUTTON');
 var text = document.createTextNode("Shopping");
 buttonShopping.appendChild(text);
 buttonShopping.setAttribute('class', 'button');
 buttonShopping.setAttribute('type', 'button');
 buttonShopping.setAttribute('onclick', 'SetCategory("Shopping")');
 myDiv.appendChild(buttonShopping);
 
 

 
 var buttonTravel = document.createElement('BUTTON');
 var text = document.createTextNode("Travel");
 buttonTravel.appendChild(text);
 buttonTravel.setAttribute('class', 'button');
 buttonTravel.setAttribute('type', 'button');
 buttonTravel.setAttribute('onclick', 'SetCategory("Travel")');
 myDiv.appendChild(buttonTravel);
 
 
}


//select one question index
//first answer index is the same
//select three remaining randomly, can only be used once
// remove selected from array




function StartExercise(){
 
 //document.getElementById('Main').innerHTML = 'Category set to ' + category + ' lets start';
 
 var ArrayQuestion = [];
 var ArrayAnswer = [];
 
 if(category == 'Animals'){
 ArrayQuestion = ArrayAnimalsESP;
 ArrayAnswer   = ArrayAnimalsDE;
 }
 else if(category == 'Shopping'){
 ArrayQuestion = ArrayShoppingESP;
 ArrayAnswer   = ArrayShoppingDE;
 }
 else if(category == 'Travel'){
 ArrayQuestion = ArrayTravelESP;
 ArrayAnswer   = ArrayTravelDE;
 }
 
 
 
 //select one word from ArrayQuestion

 var question;
 randomNumberQ = Math.floor(Math.random() * 4);
 question = ArrayQuestion[randomNumberQ];
 
 
 var myDiv = document.getElementById('Main');
 var questionDiv = document.getElementById('Question');
 myDiv.innerHTML = '';
 questionDiv.innerHTML = question;
 
 
 
 //create Buttons with answers
 


 
 
 var buttonAnswerA = document.createElement('BUTTON');
 randomNumberA = randomNumberQ;
 var text = document.createTextNode(ArrayAnswer[randomNumberA]);
 buttonAnswerA.appendChild(text);
 buttonAnswerA.setAttribute('class', 'button');
 buttonAnswerA.setAttribute('type', 'button');
 buttonAnswerA.setAttribute('onclick', 'CompareAnswer(randomNumberQ, randomNumberA)');
 myDiv.appendChild(buttonAnswerA);
 //remove answer from array to avoid multiples
 
 
 
 
 
 var buttonAnswerB = document.createElement('BUTTON');
 randomNumberB = randomNumberA + Math.floor(Math.random() * 2) + 1;
 var text = document.createTextNode(ArrayAnswer[randomNumberB]);
 buttonAnswerB.appendChild(text);
 buttonAnswerB.setAttribute('class', 'button');
 buttonAnswerB.setAttribute('type', 'button');
 buttonAnswerB.setAttribute('onclick', 'CompareAnswer(randomNumberQ, randomNumberB)');
 myDiv.appendChild(buttonAnswerB);
 
 

 var buttonAnswerC = document.createElement('BUTTON');
 randomNumberC = randomNumberB + Math.floor(Math.random() * 2) + 1;
 var text = document.createTextNode(ArrayAnswer[randomNumberC]);
 buttonAnswerC.appendChild(text);
 buttonAnswerC.setAttribute('class', 'button');
 buttonAnswerC.setAttribute('type', 'button');
 buttonAnswerC.setAttribute('onclick', 'CompareAnswer(randomNumberQ, randomNumberC)');
 myDiv.appendChild(buttonAnswerC);
 
 var buttonAnswerD = document.createElement('BUTTON');
 randomNumberD = randomNumberC + Math.floor(Math.random() * 2) + 1;
 var text = document.createTextNode(ArrayAnswer[randomNumberD]);
 buttonAnswerD.appendChild(text);
 buttonAnswerD.setAttribute('class', 'button');
 buttonAnswerD.setAttribute('type', 'button');
 buttonAnswerD.setAttribute('onclick', 'CompareAnswer(randomNumberQ, randomNumberD)');
 myDiv.appendChild(buttonAnswerD);
 
}



function CompareAnswer(a, b) {
	
   if (a == b) {
   isAnswerCorrect = true;
   }
   else {isAnswerCorrect = false}
   
}




function Reload() {
	
document.location.reload(true);
categorySet = false;
exerciseStarted = false;
isAnswerCorrect = false;
counterCorrect = 0;
}



/*function DisplayWords(amount) {
	
const ArrayResult = [];

for (let i=0; i < amount; i++) {
 
 
 randomNumber = Math.floor(Math.random() * 9) + 0;
 ArrayResult[i] = ArrayDE[randomNumber];
 
}

let result = ArrayResult.toString();
document.getElementById('Main').innerHTML = result;
}
*/


// display category in top left after it's set
//set category = animals
//set category on start page
//use cookies?
//store user data
//hide buttons and show them later for solutions
//add title
//add site icon
//arrays vernünftig formatieren
//test version with limited amount of words