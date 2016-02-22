$( document ).ready(function() {

//getting value from input box




// Minus sign - when pressed deletes the entry

	$('.fa-minus').on("click",function (){
		$(this).parent().remove();
		
	});

// Check sign - when pressed, makes a line across the item 

	$('.fa-check').on("click",function (){
		$(this).parent().css("text-decoration", "line-through");
		
	});



}); //belongs to line 1 