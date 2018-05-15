


 function myFunction(input){
			var message=null;
            var value = input.value;
			var id = input.id;
                if(value !== "" && value!="0")
				{
				switch(id) 
				{
						case "round-1" :
							message = golfScore(1, input.value);
							document.getElementById("ValueRound1").innerHTML = message;
							break;
						case "round-2" :
							message = golfScore(3, input.value);
							document.getElementById("ValueRound2").innerHTML = message;
							break;
						case "round-3" :
							message = golfScore(5, input.value);
							document.getElementById("ValueRound3").innerHTML = message;
							break;
						case "round-4" :
							message = golfScore(7, input.value);
							document.getElementById("ValueRound4").innerHTML = message;
							break;
						case "round-5" :
							message = golfScore(9, input.value);
							document.getElementById("ValueRound5").innerHTML = message;
							break;
                
				}
				}
            }
            

			
			
  function golfScore(par, strokes)
			{
                if(strokes == 1){
                    return "Hole-in-one!";
                }
                else if(strokes <= par - 2){
                    return "Eagle";
                }
                else if(strokes == par - 1){
                    return "Birdie"
                }
                else if(strokes == par){
                    return "Par";
                }
                else if(strokes == par + 1){
                    return "Bogey";
                }
                else if(strokes == par + 2){
                    return "Double Bogey";
                }
                else if(strokes >= par + 3){
                    return "Go Home!";
                }
            }