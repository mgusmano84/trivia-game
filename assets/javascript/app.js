$(document).ready(function () {

	//Audio Starts
	var audio = new Audio('assets/music/castle.mp3');
    audio.play();

	var right = 0;
	var wrong = 0;
	var count = 0;

	//Questions Array
	var questions = [
		{question: "Who is Mario\'s counterpart?",
	    correctMain: "Luigi",
	    option1: "Bowser",
	    option2: "Toad"},

	    {question: "Who is the name of the hero that must save Zelda?",
	    option1: "Mario",
	    correctMain: "Link",
	    option2: "Donkey Kong"},

	   	{question: "What year did the Nintendo Entertainment System come out?",
	    option1: "1981",
	    correctMain: "1983",
	    option2: "1984"},

	    {question: "What system did Ocarina of Time premier on?",
	    option1: "Super Nintendo",
	    correctMain: "Nintendo 64",
	    option2: "Nintendo Wii"},

	    {question: "Who is Link\s archrival?",
	    option1: "Bowser",
	    option2: "Goomba",
	    correctMain: "Ganondorf"},

	    {question: "In what game do Nintendo favorites hash in out in endless battles?",
	    correctMain: "Smash Bros",
	    option1: "Nitendo Fighters",
	    option2: "Street Fighter"},
		];


	//Start Button
	$('.start').click(function() {
	   	run();
	    questionAppear();
	    $('.start').hide();
	});

	//Timer
	var timer = 120;
    function run(){
      counter = setInterval(decrement, 1000);
    };
    function decrement(){
      timer--;
      $('#show-number').html('<h2>' + timer + " " + "Seconds" + '</h2>');
      if (timer === 0){
        stop()}
    };
	function stop(){
      clearInterval(counter);
    };
	// run();
	//End Timer

	function questionAppear(){
		 $('.questions').html(questions[count].question);
		 $('.choices').html(
		 	"<input type='radio' name='optradio'>" + " " + questions[count].option1 + "<br>" + 
		 	"<input type='radio' name='optradio'>" +  " " + questions[count].option2 + "<br>" + 
		 	"<input type='radio' name='optradio' value='correct'>" + " " + questions[count].correctMain + "");
	};

	//Choice selction function
	$('.choices').on('change', function() {
	   if($('input[name=optradio]:checked', '.choices').val() == 'correct') {
	    right ++;
	   } else {
	    wrong ++;
	   }; 
	   count ++;

	   if(count == questions.length) {
       stop();
	   summary();}
	       
	   else {
	   questionAppear();}
	});

	//if timer ends
	if (timer == 0) {
		summary();
	};
	//end results
	function summary (){
		$(".questions").hide();
		$(".choices").hide();
		$('.sum').html("<h3>Questions Right: " + right + "</h3><br>" + "<h3>Questions Wrong: " + wrong +"</h3>");
	};

	
});


// function start(){
	// 	$(".mainArea").hide;
	// 	$(".mainArea").html("<h1>Click Here to Start</h1>")

	// }


	// start();