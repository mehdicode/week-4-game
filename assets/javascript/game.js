
	

	var rArray = [];
	var rNum = 0 ;
	var yourScore = 0;
	var win = 0;
	var lose = 0;
	var chosenNum;

	var Rndm = function(){

  		rNum = Math.floor(Math.random()*9 + 1);
	};

	var reset = function(){

		yourScore = 0;
		rNum = 0;
		rArray = [];
		reArray();
	};

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

	var result = function(){
		if (yourScore == chosenNum) {
			win++;
			$("#wns").html(win);
			$("#yscore").empty();
			reset();
		}
		if (yourScore > chosenNum) {
			lose++;
			$("#los").html(lose);
			$("#yscore").empty();
			reset();
		}
	};



	$(document).ready(function() {


		reArray();

	});

	$(".image").on("click", function(){
	
			var imgNum = parseInt($(this).val());
			yourScore = imgNum + yourScore;
			$("#yscore").html(yourScore);
			
			
			result();
		
		
	});




    
  
