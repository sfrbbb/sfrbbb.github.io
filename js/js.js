$(function(){
	
	var $bnwidth = $('.qi_bnsize_1').width();
	$('.qi_bnsize_1').css('marginLeft',-($bnwidth/2));
	
	var $bnwidth2 = $('.qi_bnsize_2').width();
	$('.qi_bnsize_2').css('marginLeft',-($bnwidth2/2));

	var $bnwidth3 = $('.qi_bnsize_3').width();
	$('.qi_bnsize_3').css('marginLeft',-($bnwidth3/2));

	$('.qi_acon').click(function(){
		$('.qi_conleft').toggleClass('showHied');	
		$('.qi_acon').toggleClass('qi_aconqh');	
	})


});

