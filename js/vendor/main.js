$( document ).ready(function() {

//getting value from input box
//the person can enter the information by pressing the
//enter button

//Input Box/ Pressing Enter
	$('#input-box').on('keypress', function(e) {
	if(e.keyCode == 13){
		var foodType = $(this).val(); //grabs value of input
		var foodContent = '<li> <i class="fa fa-minus fa-2x"></i>' + foodType + '<i class="fa fa-check fa-2x"></i></li>';
		$('.shopping-list ul').prepend(foodContent);
		$(this).val(""); // put this here, so it reverts back to empty string
	}
	});



// Minus sign - when pressed deletes the entry

	$('ul').on("click", '.fa-minus',function (){
		$(this).parent().remove();
	});

// Check sign - when pressed, makes a line across the item 

	$('ul').on("click",'.fa-check',function (){
		$(this).parent().toggleClass('underline');		
	});



// Reset Button

	$('#clear-button').on("click",function (){
		$('li').remove('underline');

		//this needs to remove words with 
		//lines thru them

	});


}); //belongs to line 1 



//Challeneg 1. If the person clicks on the check mark again,
// it can uncheck
// 2. A Clear Button that removes everyting that is checked
