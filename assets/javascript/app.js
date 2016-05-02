$(document).ready(function () {

	
	// function start(){
	// 	$(".mainArea").hide;
	// 	$(".mainArea").html("<h1>Click Here to Start</h1>")
		
	// }





	//Timer
	var timer = 120;
    function run(){
      counter = setInterval(decrement, 1000);
    }
    function decrement(){
      timer--;
      $('#show-number').html('<h2>' + timer + " " + "Seconds" + '</h2>');
      if (timer === 0){
        stop()}
    }
	function stop(){
      clearInterval(counter);
    }

	// run();
	//End Timer

	start();
});