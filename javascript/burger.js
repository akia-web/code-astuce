$(document).ready(function(){
    $('.menu-icon').click(function(e){
        e.preventDefault();
       
        $this= $(this);
        if($this.hasClass('is-opened')){
            $this.addClass('is-closed').removeClass('is-opened');
            $("#menu-langage-burger").hide();

        }else{
            $this.removeClass('is-closed').addClass('is-opened');
            $("#menu-langage-burger").show();
        }
    })



})