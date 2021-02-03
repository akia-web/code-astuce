let pages = document.querySelectorAll('.lien-chapitre');

console.log("a[href^='#']");


function coucou(){
   
     
      $("a[href^='#']").click(function (e) {
         //$(this).hide();
         //this -> <a></a>
         //this.href -> url
         setTimeout(grossir, 1000);
        
        let split = splitHref(this.href);
        console.log(split);
      
        let container = document.querySelector("#" + split);
      
        document.querySelector(".active").classList.remove("active");
        //    container.classList.add("page-rotate");
        container.classList.add("active");
        
        
        
      });
   }

  





coucou();

function grossir(){
  
   $(".container").addClass("gros")
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