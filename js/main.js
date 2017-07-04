


$(document).ready(function(){
   add_events();
});

function add_events(){

   $('.invisible').click(function(e){
        e.stopPropagation();
        e.preventDefault(); 
      	
        $('.visible_wraper').show();
    	$('.invisible').hide();
   });

   $(document).click(function(){ 
    	$('.visible_wraper').hide(); 
        $('.invisible').show();
   });

}


