
	
	//define variable
	var rArray = [];
	var rNum = 0 ;
	var yourScore = 0;
	var win = 0;
	var lose = 0;
	var chosenNum;

	
	//Create a random number from 1-9
	var Rndm = function(){

  		rNum = Math.floor(Math.random()*9 + 1);
	};
	//Reset function
	var reset = function(){

		yourScore = 0;
		rNum = 0;
		rArray = [];
		reArray();
	};
	//randomly choose a number bigger than 10 and define unrepeated numbers for buttons
	var reArray = function(){

		chosenNum = Math.floor(Math.random() * 100 + 10);

	for(var i=0 ; i<10 ; i++){
	    Rndm();
	    
	if(rArray.indexOf(rNum) == -1){

	    rArray.push(rNum);

	if(rArray.length == 4) break;

	    }
	};

	$("#button-1").attr("value", rArray[0]);
	$("#button-2").attr("value", rArray[1]);
	$("#button-3").attr("value", rArray[2]);
	$("#button-4").attr("value", rArray[3]);
	$("#rno").html(chosenNum);
	};

	//this will check the result (win & lose)
	var result = function(){
		if (yourScore == chosenNum) {
			win++;
			$("#wns").html(win);
			$("#yscore").empty();
			$(".panel-body").append($("<img>").attr({"class":"wImg", "src":"assets/images/winner.jpg", "width":"200", "height":"200"}));
			setTimeout(function(){ $('.wImg').fadeOut("fast", reset); }, 1500);
			
		}
		if (yourScore > chosenNum) {
			lose++;
			$("#los").html(lose);
			$("#yscore").empty();
			$(".panel-body").append($("<img>").attr({"class":"lImg", "src":"assets/images/loser.jpg", "width":"200", "height":"200"}));
			setTimeout(function(){ $('.lImg').fadeOut("fast", reset); }, 1500);
		}
	};


	//on page load it will call reArray function to prepare everything for starting the game
	$(document).ready(function() {


		reArray();

	});
	//this onclick function will get the value from the image and will add it to yourscore
	$(".image").on("click", function(){
	
			var imgNum = parseInt($(this).val());
			yourScore = imgNum + yourScore;
			$("#yscore").html(yourScore);
			result();
		
	});




    
  
