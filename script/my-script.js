// Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
 });

 // Add slideUp animation to Bootstrap dropdown when collapsing.
 $('.dropdown').on('hide.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
 });


 $(document).ready(function () {
     function CloseNav() {
         $(".navbar-collapse").stop().css({ 'height': '1px' }).removeClass('in').addClass("collapse");
         $(".navbar-toggle").stop().removeClass('collapsed');
     }

     $('html').click(function (event) {
         var clickover = $(event.target);
         var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
         if (_opened === true && !clickover.hasClass("navbar-toggle")) {
             CloseNav();
         }

     });
 });
