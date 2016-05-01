$(document).ready(function () {

	var game = {

		timer: 30,
		

	    run: function (){
	      var counter = setInterval(dec, 1000);
	    },

	    dec: function (){
	      game.timer--;
	      $('#show-number').html('<h2>' + timer + '</h2>');
	      if (game.timer === 0){
	        stop();}
	    },

	    stop: function (){
	      clearInterval(counter);
	    },

	   
	};

	game.run();
});