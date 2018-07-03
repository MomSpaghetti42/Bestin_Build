 $(document).ready(function(){
    $('.menu-button').on("click", function (event){
        $(".respon-menu__nav").slideToggle();
    });
    $(".mobile-nav__trigger").on("click", function (event){
        $(".respon-menu__nav").slideUp();
    });
    $(".mobile-nav__a").on("click", function (event){
        $(".respon-menu__nav").slideUp();
    });
    02
    $(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
    });
    $('.submit_button').on("click", function (event) {
        AjaxFormRequest();
    });

    function AjaxFormRequest() {
         jQuery.ajax({
         url: '/sendmail.php',
         type: "POST",
         dataType: "html",
         data: jQuery("#formMain").serialize(),
         success: function(response) {
            $('.submit_button').fadeOut('slow', function(){
                $('.sent').fadeIn('slow');
            });
         },
         error: function(response) {
            alert('Something went wrong. Please try again later.')
         }
         });
         
         $(':input','#formMain')
         .not(':button, :submit, :reset, :hidden')
         .val('')
         .removeAttr('checked')
         .removeAttr('selected');
     }
});
