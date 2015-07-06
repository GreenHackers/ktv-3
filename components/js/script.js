$(document).ready(function(){
	alert('Hello');
	// слайдер в промоблоке
	$('.promo__slider').carousel({
        interval: 5000 
		});
	
	// слайдеры в кмендуем посмотреть. 
	// странно работают с промо-слайдерм, поэтому в разных обертках
  	$('.recommendSlider').slick({
  		 dots: false,
  		 infinite: true,
  		 speed: 300,
  		 slidesToShow: 1,
  		 adaptiveHeight: true
		});
  	// модальное окно обратной связи. пока повешено на блок заказать звонок
  	 $('.modal-call').fancybox();
     $('.modal-call').click(function(e){
     	e.preventDefault();
     });
  	// отработка табов в рекмендуемых
  	$('.recommend__content-item.cinema').show();
		$('.recommend-tabs__item a').on('click', function(e){
		e.preventDefault();
		var $tab = $(this).parent('.recommend-tabs__item');
		$('.recommend-tabs__item').not($tab && '.recommend-tabs__item-title').css('border-bottom-color', '#e1e1e1');
			$tab.css('border-bottom-color', '#d4261b');
		if( $tab.hasClass('cinema')){
			$('.recommend__content-item').hide();
			$('.recommend__content-item.cinema').show();
		} else if( $tab.hasClass('sport')){
			$('.recommend__content-item').hide();
			$('.recommend__content-item.sport').show();
		} else if( $tab.hasClass('cognition')){
			$('.recommend__content-item').hide();
			$('.recommend__content-item.cognition').show();
		}
	});
  	// дропдаун клевой верхней кнопке с доп-меню
    $('.dropdoun').click(function(e){
     	e.preventDefault();
     	$('.somit-menu').toggle('slow');
     });
    // фильтрация промоменю
	$('.main-nav__filter-item:first-child a').css('opacity', '0.8');
	$('.main-nav__list--personal').show();
	$('.main-nav__filter-item a').on('click', function(e){
		e.preventDefault();
		$(this).css('opacity', '0.8');
		$('.main-nav__filter-item a').not(this).css('opacity', '1');
			if($(this).parent('.main-nav__filter-item').hasClass('main-nav__filter-item--personal')){

				$('.main-nav__list--gsk').hide();
				$('.main-nav__list--personal').show('400');
			} else if($(this).parent('.main-nav__filter-item').hasClass('main-nav__filter-item--gsk')) {
				$('.main-nav__list--personal').hide();
				$('.main-nav__list--gsk').show('400');	
			};
	});
		// фиксация меню при скроллинге
	var h_hght = 120; 
   	var h_mrg = 0;     
   	$(function(){
    	$(window).scroll(function(){
       		var top = $(this).scrollTop();
       		var elem = $('.main-nav');
       		if (top+h_mrg > h_hght) {
        	elem.addClass('fixed');
       			} else {
        	elem.removeClass('fixed');
       		}
     	});
   	});
   	// мобильное меню
  

});