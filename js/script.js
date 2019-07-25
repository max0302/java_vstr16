// $('document').ready(function()=>{
// 	$('h1').css('color', 'coral');
// });

jQuery(function () {
	jQuery('h1').css('color', 'coral');
	$('h1').on('click', ()=>{
		$('h1').css('font-family', 'Arial');
		console.log($('h1').text());
		$('h1').text('Hello');
		$('h1').html('<ul><li>List item</li><li>List item</li></ul>');
		//document.querySelector('h1').classList.addClass('blue');
		// $('h1').addClass('blue');
		// $('h1').removeClass('blue');
		$('h1').toggleClass('blue');
		//$('lilist item3</li>').append$('h1>ul');
		$('h1>ul').append('lilist item3</li>');
	});
});

//addClass
