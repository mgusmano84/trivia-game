$(document).ready(function () {

	var count = 0;

	var questions = [
		{question: "Who is Mario\' counterpart?",
	    correct: "Luigi",
	    option1: "Bowser",
	    option2: "Toad"},

	    {question: "Who is the name of the hero that must save Zelda?",
	    option1: "Mario",
	    correct: "Link",
	    option2: "Donkey Kong"},

	   	{question: "What year did the Nintendo Entertainment System come out?",
	    option1: "1981",
	    correct: "1983",
	    option2: "1984"},

	    {question: "What year did the Nintendo Entertainment System come out?",
	    option1: "1981",
	    correct: "1983",
	    option2: "1984"},

	    {question: "What year did the Nintendo Entertainment System come out?",
	    option1: "1981",
	    correct: "1983",
	    option2: "1984"},

	    {question: "What year did the Nintendo Entertainment System come out?",
	    option1: "1981",
	    correct: "1983",
	    option2: "1984"},
		];



	//start button
	$('.start').click(function() {
	   	run();
	    questionAppear();
	    $('.start').hide();
	});

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

	function questionAppear(){
	 $('.questions').html(questions[count].question);
	 $('.choices').html("<li><input type='radio' name='optradio'>" + " " +
        questions[count].option1 + "</li><li><input type='radio' name='optradio'>" +  " " +
        questions[count].option2 + "</li><li><input type='radio' name='optradio' value='correct'>" + " " +
        questions[count].correct + "</li>");
	}

		

	
});


// function start(){
	// 	$(".mainArea").hide;
	// 	$(".mainArea").html("<h1>Click Here to Start</h1>")

	// }


	// start();