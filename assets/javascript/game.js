$(document).ready(function() {

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').html(wins);
	$('#loss').html(losses);

	//this array holds the sources for the dumb doodles i did at work. 

	var crystals = [];
	for(i = 1; i <16; i++){
	crystals.push('assets/pics/'+[i]+'.gif');
	}
	

	

	
	newCrystals();
	newGame();

	//this function assigns random numbers to an array while the array is less than four

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*7+3)
			  numbers[numbers.length]=randomnumber;
			}	
	//this for loop stores arbitrary custom data attributes on the imageCrystal variable then appends the div with the id crystals in html.
	//
		for (i = 0; i < numbers.length; i++) {
			var crystalimagepicker = Math.floor((Math.random())*15)
			var imageCrystal = $("<img>");
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[crystalimagepicker]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage');
			$('#crystals').append(imageCrystal);
		}
	}

	//this function contains the game.

	function newGame() {

		//counter stores the added together crystal values chosen by the user.

		counter = 0;
		$('#yourScore').html(counter);

		//this function allows us to change the scope of the game by changing the min and max
		//values of the number to guess.

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var winningNumber = randomIntFromInterval(25,100);

		$('.value').html(winningNumber);

		//when a crystal image is picked the counter goes up by the value that was created in the while loop
		//and assigned by the for loop.
		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').html(counter);

		    //if the counter is equal to the number to guess, tell the player they won,
		    //increment wins by one, clear the old crystals and start over.

		    if (counter == winningNumber){
		      $('#status').html('You did it!!!!');
		      wins ++;
		      $('#numberofwins').html(wins);
		      $('#crystals').empty();
		      newCrystals();
		      newGame();



		     //if the counter is over the number to guess, tell the player they lost,
		    //increment wins by one, clear the old crystals and start over.
		        
		    } else if ( counter > winningNumber){
		        $('#status').text('You lost you frigging loser!!')
		        losses ++;
		        $('#numberoflosses').text(losses);
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});