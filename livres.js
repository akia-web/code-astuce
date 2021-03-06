$(function() {
    // ferme les cartes
    $('.close').click(function(){ 
    $(".carte").hide()
    $(".etagere").show();
    $(".cadre").show();
    $(".slogan").show();
    })

    // affiche la liste de cours html
    $('#html').click(function(){ 
        $("#menu-html").show();
        $(".etagere").hide();
        if(window.innerWidth<1200) {
           $(".cadre").hide();
        }
    })

    $('#css').click(function(){ 
        $("#menu-css").show();
        $(".etagere").hide();
        if(window.innerWidth<1200) {
           $(".cadre").hide();
           $(".slogan").hide();
        }
    })

  


});



// animation des livres
$("#html" ).on({
    "mouseover":function(){
       this.src = 'images/livre-html-ouvert.svg';
     
    },
    "mouseout": function(){
       
       this.src="images/livre-html.svg";
       
    }
 })

 $("#css" ).on({
    "mouseover":function(){
       this.src = 'images/livre-css-ouvert.svg';
     
    },
    "mouseout": function(){
       
       this.src="images/livre-css.svg";
       
    }
 })


 $("#js" ).on({
    "mouseover":function(){
       this.src = 'images/livre-js-ouvert.svg';
     
    },
    "mouseout": function(){
       
       this.src="images/livre-js.svg";
       
    }
 })


// affiche le contenu du livre HTML
const onglets = document.querySelectorAll('.onglets');
const contenu = document.querySelectorAll('.contenu');

let index = 0;

onglets.forEach(onglet => {

    onglet.addEventListener('click', () => {

        if(onglet.classList.contains('active')){
            return;
        } else {
            onglet.classList.add('active');
        }

        index = onglet.getAttribute('data-anim');
        console.log(index);
        
        for(i = 0; i < onglets.length; i++) {

            if(onglets[i].getAttribute('data-anim') != index) {
                onglets[i].classList.remove('active');
            }

        }

        for(j = 0; j < contenu.length; j++){

            if(contenu[j].getAttribute('data-anim') == index) {
                contenu[j].classList.add('activeContenu');
            } else {
                contenu[j].classList.remove('activeContenu');
            }
            

        }


    })

})


