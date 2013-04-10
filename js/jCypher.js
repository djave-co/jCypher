/*
 *
 *	jQuery Cypher
 *		https://github.com/sheepysheep60/count-up
 *	
 *	David Williams
 *		djave.co.uk
 *
*/

(function( $ ) {
	$.fn.jCypher = function(options, callback) {
   
		var settings = $.extend( {
			'cypher_text'	: this.text(),
			'start'			: 10,
			'offset'		: 5,
			'frequency'		: 60,
			'uncypher'		: true,
			'target'		: this,
			'console_log'	: false
		}, options);

		var initial; 

		var letters_array = new Array();

		bits = settings.cypher_text.split("");
		var length = bits.length;

		for (var i = 0; i < length; i++) {
			initial = settings.start + settings.offset*i;
			letters_array[i]=[bits[i], initial];
		}

		tick();

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
				if(settings.console_log==true){console.log("finished!")};
   
				clearTimeout(timer);
    if (typeof callback == 'function') {
        callback.call(this); 
    }
			}
			else
			{
				cycle(letters_array);
				timer=setTimeout(function(){tick()},settings.frequency);
			}
		}

		function cycle(all){
			output_string = [];
			for (var i = 0; i < len; i++) {
				all[i][1] --;
				if(all[i][1] > 0){
					if(all[i][0] == " ")
					{
						output_string.push(" ");
					}
					else
					{
						output_string.push(Math.ceil(Math.random()*9));
					}
				}	
				else
				{
					output_string.push(all[i][0]);
				}

			}
			settings.target.text(output_string.join(""));
		}

	};
})( jQuery );
