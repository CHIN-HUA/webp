var words = ["boat", "cat", "dog", "rabbit", "crow", "cow", "cheese", "jquery", "javascript", "lol", "no", "idea", "more", "koodaa", "it", "generator", "soon", "or", "else", "go", "nerves", "school", "course", "internet", "summer", "sauna", "beer", "party", "job", "screen", "car", "semester", "payment", "yahoo", "card", "sticker", "thread", "monkey", "bar", "cheddar", "dvd", "elektro", "pharaoh", "gorilla", "acre", "indie", "christmas", "cocoa", "suburb", "monday", "witch", "opera", "pastasauce", "quesadilla", "rally", "television", "unique", "old", "guitar", "environment", "zorro", "buffy", "confused", "over", "magnet", "board", "table", "form"];
var wordsVisible = [];
var points = 0;

$(document).ready(function(){

	var $answerBox = $('#answer');

	$answerBox.keyup(function(){

		if(deleteWord($answerBox.val().toLowerCase()) === true){
			$answerBox.val("");
		}
		
	});

	$('#answerform').submit(function(){
		return false;
	});

 	createGameArea();
 	addWordToGame();
 	runGame();

 });


function createGameArea(){

	for( var j = 0; j < 10; j++){
		$('#gamearea').append('<div id="row' + j + '" class="row"></div>');

	 	for(var i = j * 20; i < (j * 20 + 20); i++){
 			$('#row' + j).append('<div id="' + (i + 1) + '" class="square"></div>');

		}
 	}
}


 function addWordToGame(){

	var word;
	var enoughSpace = false;
	var x_pos = 0;

 	do{
		word = words[Math.floor(Math.random() * words.length)];
 	}while(wordsVisible.indexOf(word) !== -1);

 	wordsVisible.push(word);

 	var end = 0;

 	do{
 		x_pos = Math.floor(Math.random() * 20 + 2) - word.length;

 		for(var i = x_pos; i <= 20; i++){
 			if($('#' + i).html() !== ""){
 				enoughSpace = false;
 				break;
 			}
 			else{
 				enoughSpace = true;
 			}
 		}
 		end++;
 	}while((x_pos <= 0 || (enoughSpace === false)) && end < 15);

	if(enoughSpace === true){
	 	for(var i = 0; i < word.length; i++){
			var $letter = $('#' + (x_pos + i));

	 		$letter.html(word[i]);
	 		$letter.addClass(word);
		}
 	}else{
 		return false;
 	}
 }

 function descendWord(wordToMove){
 	var $wordToMove = $('.' + wordToMove);
	

 	if(parseInt($wordToMove.attr('id')) <= 180){

		if(detectCollision($wordToMove) === false){
			$wordToMove.each(function(){

				var id = parseInt($(this).attr('id'));

 				var $squareBelow = $('#' + (id + 20));

				$squareBelow.html($(this).html());
				$squareBelow.addClass(wordToMove);

				$(this).removeClass(wordToMove);
				$(this).html("");
			});
		}
 	}
 	
 }

 function detectCollision($wordToMove){
 	var collisions = [];

 		$wordToMove.each(function(){
			var id = parseInt($(this).attr('id'));

 			var $squareBelow = $('#' + (id + 20));

 			if($squareBelow.html() !== ""){
 				collisions.push(true);
 			}

 		});

	if(collisions.length === 0){
		return false;
	}else{
		return true;
	}
 }


function runGame(){

	var intervalID = window.setInterval(function(){

	 	for(var i = 0; i < wordsVisible.length; i++){
	 		descendWord(wordsVisible[i]);
	 	}

	 	if(addWordToGame() === false){
	 		clearInterval(intervalID);

			alert("Game Over!");
	 		
	 		var $answerBox = $('#answer');
	 		
	 		$answerBox.off();
	 		$answerBox.val("");
	 		$answerBox.attr("disabled", "disabled")
	 	}
	}, 1200);
}

function deleteWord(word){
	
	if(wordsVisible.indexOf(word) === -1){
		console.log("Word \"" + word + "\" not found");
		return false;

	}else{

		var $wordToDelete = $('.' + word);

		$wordToDelete.removeClass(word);
		$wordToDelete.html("");
		wordsVisible.splice(wordsVisible.indexOf(word), 1);
		console.log("Word \"" + word + "\" deleted");

		calculatePoints(word);

		return true;

	}
}

function calculatePoints(word){

	points += word.length;

	$('#score').html(points);
}