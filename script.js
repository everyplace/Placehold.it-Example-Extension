$(document).ready(function(){

	$("img").each(function(index, image) {
	
		var width = $(image).attr("width");
		var height = $(image).attr("height");
		
		$(image).attr({
			"src":"http://placehold.it/"+width+"x"+height,
			"width":width, 
			"height":height
		});
	
	});

});
