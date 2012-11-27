var phrase 		= "The phrase";
var start 		= 10;
var offset		= 5;
var frequency	= 100;
var uncypher	= true;

var initial; 


var letters_array = new Array();

$(document).ready(function(){
	bits = phrase.split("");
	var length = bits.length;

	$("#output").append("<table>");

	for (var i = 0; i < length; i++) {
		initial = start + offset*i;
		letters_array[i]=[bits[i], initial];
	}

	$("#output").append("</table>");
	
	tick();

});

function tick(){
	number_finished = 0;
	len = letters_array.length;
	for (var i = 0; i < len; i++) 
	{ 
		if(letters_array[i][1] < -5)
		{
			number_finished += 1;
		};
	}
	// if the number of finished animations = the number of letters
	if(number_finished == len)
	{ 
		console.log("finished!");
		clearTimeout(timer);
	}
	else
	{	
		cycle(letters_array);
		timer=setTimeout(function(){tick()},frequency);
	}
}

function cycle(all){
// the output string is going to store the final string we show, first we want it to be empty (this happens every frame) 
	output_string = "";
	// for all the items in the array
	for (var i = 0; i < len; i++) {
		// take away one from the number next to each letter
		all[i][1] --;
		
		// if the number of frames to random is still greater than 0
		if(all[i][1] > 0){
			// this bit just says, if there is a space there, put a space, not a number.  This splits the sentence up in to nice chunks, rather than just tonnes of numbers
			if(all[i][0] == " ")
			{
				// add it on the end
				output_string += " ";
			}
			else
			{
				// add the random number
				output_string += Math.ceil(Math.random()*9);
			}
		}	
		else
		{
			// check this out.  the number next to the letter ie (D, 0) is zero or less, so add the actual letter this time, not the random number. 
			output_string += all[i][0];
		}
		
	}
	// fill the textbox with the output
	$("#output").html("<p>" + output_string + "</p>");
}