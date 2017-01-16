// Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
 });

 // Add slideUp animation to Bootstrap dropdown when collapsing.
 $('.dropdown').on('hide.bs.dropdown', function() {
   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
 });


 //stop iframe video, when modal video cancel
 $(document).ready(function() {
   $('#intro-modal-video').on('hidden.bs.modal', function() {
     var $this = $(this).find('iframe'),
       tempSrc = $this.attr('src');
     $this.attr('src', "");
     $this.attr('src', tempSrc);
   });

 //stop html5 video, when modal video cancel
   $('#html5Video').on('hidden.bs.modal', function() {
     var html5Video = document.getElementById("htmlVideo");
     if (html5Video != null) {
       html5Video.pause();
       html5Video.currentTime = 0;
     }
   });
 });
