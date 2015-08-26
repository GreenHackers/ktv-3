
$(document).ready(function(){
	// слайдер в промоблоке
	$('.promo__slider').carousel({
        interval: 5000 
		});
	// анкор в промо
	$('a.promo__anchor').click(function(){
        var el = $(this).attr('href');
        if ($(window).width() > 991) {
        $('body').animate({
            scrollTop: $(el).offset().top-159}, 500);
        return false; 
    } else {
    	 $('body').animate({
            scrollTop: $(el).offset().top}, 500);
        return false; 
    }
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
    // модальное окно без текстового поля
  	 $('.modal-call').fancybox();
     $('.modal-call').click(function(e){
     	e.preventDefault();
     });
     // модалка с текстерией
    $('.modal-call2').fancybox({
      autoHeight: true,
      minHeight: 560,
      autoCenter: true
     });
     $('.modal-call2').click(function(e){
      e.preventDefault();
     });
     // модалка выведения отправки или ошибки отправки
      $('.feedback_button').fancybox({
    maxHeight: 30
   });

   //отработка табов в рекмендуемых
  	$('.recommend__content-item.cinema').show();
  	$('.recommend-tabs__item.cinema').css('border-bottom-color', '#d4261b');
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
        	elem.css('background', 'rgba(0,0,0,0.7)');
          elem.addClass('fixed')
       			} else {
        	elem.css('background', 'rgba(0,0,0,0.0)');
          elem.removeClass('fixed');
       		}
     	});
   	});


 // lightbox-form
    function sentClientInfoToMail() {

    var name = $("#modalForm").find('[name="Feedback[name]"]').val();
    var telephone = $("#modalForm").find('[name="Feedback[telephone]"]').val();
    var mail = $("#modalForm").find('[name="Feedback[email]"]').val();
    var infotext = $("#feedback_info").find('.throw_error');
    if (name == "" || telephone == "") {
        infotext.html('Заполните все поля...');
        infotext.css('color', 'red');
        $( '[href="#feedback_info"]' ).click();
    } else {
  $.ajax({
    type: "POST",
    url: "/ajax/messages/feedback",
    data: {
        'Feedback[name]': name,
        'Feedback[telephone]': telephone,
        'Feedback[email]': mail
        },
    success: function(data) {
            infotext.html('Заявка отправлена!');
            infotext.css('color', '#f99');
            $( '[href="#feedback_info"]' ).click();
            $("input, textarea").val("");
          },
        error:  function() {
        infotext.html('Ошибка отправки...');
          infotext.css('color', 'red');
          $( '[href="#feedback_info"]' ).click();
        }
    
    });
  }
};
//  select form

    function sentClientMsgToMail() {

    var name = $("#modalForm2").find('[name="product[name]"]').val();
    var telephone = $("#modalForm2").find('[name="product[telephone]"]').val();
    var mail = $("#modalForm2").find('[name="product[email]"]').val();
    var msg = $("#modalForm2").find('[name="product[text]"]').val();
    var text ="Почта: "+mail+", Сообщение: "+msg;
    var infotext = $("#feedback_info").find('.throw_error');
    if (name == "" || telephone == "") {
        infotext.html('Заполните все поля...');
        infotext.css('color', 'red');
        $( '[href="#feedback_info"]' ).click();
    } else {
  $.ajax({
    type: "POST",
    url: "/ajax/messages/feedback",
      data: {
          'Feedback[name]': name,
          'Feedback[telephone]': telephone,
          'Feedback[email]': mail,
          'Feedback[text]': text
        },
    success: function(data) {
            infotext.html('Заявка отправлена!');
            infotext.css('color', '#f99');
            $( '[href="#feedback_info"]' ).click();
            $("input, textarea").val("");
          },
        error:  function() {
        infotext.html('Ошибка отправки...');
          infotext.css('color', 'red');
          $( '[href="#feedback_info"]' ).click();
        }
    });
  }
};

// вызов обработчиков
 $("#modalForm .submit").click(function(event) {
  event.preventDefault();
      
        sentClientInfoToMail();
    });

 $("#modalForm2 .submit").click(function(event) {
  event.preventDefault();
      
        sentClientMsgToMail();
    });

 // табы в пакетах
    $('.packages__content').hide();
    $('.packages__content').eq(0).fadeIn('slow');
    $('.packages__tabs-item').eq(0).addClass('active');
    $('.packages__tabs-item').click(function(){
      if($(this).hasClass('active')){
        return false;
      } else {
        var count = $(this).index();
        $('.packages__tabs-item').removeClass('active');
        $(this).addClass('active');
        $('.packages__content').fadeOut('fast');
        $('.packages__content').eq(count).delay(200).fadeIn('slow');
      }
    });

});

