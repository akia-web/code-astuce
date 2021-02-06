let pages = document.querySelectorAll('.lien-chapitre');

console.log("a[href^='#']");

// animation des livres
$("#balises" ).on({
   "mouseover":function(){
      this.src = 'images/livre-ouvert-balises.svg';
      $(this).addClass("livre-ouvert");
      
      $(this).removeClass("livres");
   },
   "mouseout": function(){
      
      $(this).addClass("livres");
      $(this).removeClass("livre-ouvert");
      this.src="images/livre-balises.svg";
      
   }
})

$("#organisation" ).on({
   "mouseover":function(){
      this.src = 'images/livre-ouvert-organisation.svg';
      $(this).addClass("livre-ouvert");
      $(this).removeClass("livres");
   },
   "mouseout": function(){
      $(this).addClass("livres");
      $(this).removeClass("livre-ouvert");
      this.src="images/livre-organisation-html.svg";
      
   }
})

$("#visual" ).on({
   "mouseover":function(){
      this.src = 'images/livre-ouvert-visual.svg';
      $(this).addClass("livre-ouvert");
      $(this).removeClass("livres");
   },
   "mouseout": function(){
      $(this).addClass("livres");
      $(this).removeClass("livre-ouvert");
      this.src="images/livre-visual-studio.svg";
      
   }
})

$("#zoning" ).on({
   "mouseover":function(){
      this.src = 'images/livre-ouvert-zoning.svg';
      $(this).addClass("livre-ouvert");
      $(this).removeClass("livres");
   },
   "mouseout": function(){
      $(this).addClass("livres");
      $(this).removeClass("livre-ouvert");
      this.src="images/livre-zoning.svg";
      
   }
})




// Ouverture des livres
$("#organisation").click(function (e){
   $(".organisation-html").show();
   $(".livre-etageres").hide();
});


// Fermeture des livres
$(".close").click(function (e){
   $("section").hide();
   $(".livre-etageres").show();
});


// liens
$("a[href^='#']").click(function (e) {
   //$(this).hide();
   //this -> <a></a>
   //this.href -> url

   let idPage = splitHref(this.href);

   // grossir(idPage); // -> Déclanchement de l'animation.
   
   $(".droite").hide();
   $(".gauche").addClass("tourne-vertical");
   $(".gauche").show();

      $(".droite").addClass("tourne-vertical");
      $(".droite").show();
    

   // setTimeout(() => {
      let container = document.querySelector("#" + idPage);

      document.querySelector(".active").classList.remove("active");
      //    container.classList.add("page-rotate");
      container.classList.add("active");

   // });
});

function grossir(idPage){
  
   $("#" + idPage).addClass("tourne-vertical")

}


/**
 * Découpe une url pour récupérer la partie après le dièse (ALORS QUE C'EST UN CROISILLON)
 * 
 * Exemple : http://nom_de_domaine.net/toto/#blabla ici blabla sera récupéré.
 * 
 * @param url string Correspond à l'url à découper. 
 * 
 * @return La partie après le croisillon de l'url. Ou une chaine vide s'il n'y pas de croisillon.
 */
function splitHref(url){
   const i = url.indexOf('#');

   if (i == -1){
       console.log("splitfHref : PAS BON, pas de croisillon dans la chaîne");

       return "";
   }

   return url.substr(i+1, url.length - (i + 1));
   //url.substr(i+1);
}