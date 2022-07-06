//change ligth to dark color site

traducir();
function traduciraEspaniol(){
  
  document.body.classList.toggle("inglish-languaje");
  let language = "spanish";
  if (document.body.classList.contains("spanish-languaje")) {
    language = "inglish";
  }
    localStorage.setItem("language", language);
traducir();
    
}
function traduciraIngles() {
  document.body.classList.toggle("spanish-languaje");
  let language = "inglish";
  if (document.body.classList.contains("inglish-languaje")) {
    language = "inglish";
  }
    localStorage.setItem("language", language);
    traducir();
}
function traducir() {
  var title = document.title;
  const currentlanguage = localStorage.getItem("language");

  if(currentlanguage == "spanish" && title=="Inicio"){
    //mav
    document.body.classList.remove("inglish-languaje");
    document.body.classList.toggle("spanish-languaje");
    document.getElementById("translate-spanish").innerHTML = "Español";
    document.getElementById("translate-english").innerHTML = "Ingles";
    document.getElementById("home").innerHTML = "Inicio";
    document.getElementById("about").innerHTML = "Acerca de";
    document.getElementById("about_us").innerHTML = "¿Quiénes Somos?";
    document.getElementById("our_philosophy").innerHTML = "Nuestra Filosofía";
    document.getElementById("become_our_brand").innerHTML = "Nuestras Marcas";
    document.getElementById("contact").innerHTML = "Contacto";
    //ini
    document.getElementById("titulo1").innerHTML = "Aero House";
    document.getElementById("titulo2").innerHTML = "¿Qué son?";
    document.getElementById("parafo1").innerHTML = "Cuando hablamos de energía eólica siempre imaginamos los ‘bosques’ de enormes torres y palas que vemos desde la carretera. Existe también la variante doméstica: aerogeneradores para instalar en viviendas, pequeñas comunidades o negocios. Instalar las turbinas minieólicas es más sencillo de lo que parece.";
    document.getElementById("titulo-link").innerHTML = "Más Información en:";
    document.getElementById("parafo-link").innerHTML = "Información sobre la energía eólica";
    document.getElementById("link1").innerHTML = "Aero Generadores";
    document.getElementById("link2").innerHTML = "El viento como motor";
    document.getElementById("link3").innerHTML = "El impulso del viento";
    document.getElementById("link4").innerHTML = "¿Qué son y como funcionan?";
    
    document.getElementById("titulo3").innerHTML = "El futuro en nuestras manos";
    document.getElementById("titulo4").innerHTML = "Impulsamos el crecimiento y producción de la energia sustentable, Dec 7, 2020";
    document.getElementById("titulo5").innerHTML = "Nuestro Proyectos";
    document.getElementById("titulo6").innerHTML = "Proyecto Barrio Solar, Sep 2, 2020";
  }else if (currentlanguage == "spanish") {
    document.body.classList.remove("inglish-languaje");
    document.body.classList.toggle("spanish-languaje");
    document.getElementById("translate-spanish").innerHTML = "Español";
    document.getElementById("translate-english").innerHTML = "Ingles";
    document.getElementById("home").innerHTML = "Inicio";
    document.getElementById("about").innerHTML = "Acerca de";
    document.getElementById("about_us").innerHTML = "¿Quiénes Somos?";
    document.getElementById("our_philosophy").innerHTML = "Nuestra Filosofía";
    document.getElementById("become_our_brand").innerHTML = "Nuestras Marcas";
    document.getElementById("contact").innerHTML = "Contacto";
  }
  if (currentlanguage == "inglish" && title=="Inicio") {
    //navbar
    document.body.classList.remove("spanish-languaje");
    document.body.classList.toggle("inglish-languaje");
    document.getElementById("translate-spanish").innerHTML = "Spanish";
    document.getElementById("translate-english").innerHTML = "English";
    document.getElementById("home").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About";
    document.getElementById("about_us").innerHTML = "About us";
    document.getElementById("our_philosophy").innerHTML = "Our philosophy";
    document.getElementById("become_our_brand").innerHTML = "Become our brand";
    document.getElementById("contact").innerHTML = "Contact";
    //Ini
    document.getElementById("titulo1").innerHTML = "Air House";
    document.getElementById("titulo2").innerHTML = "What are they?";
    document.getElementById("parafo1").innerHTML = "When we talk about wind energy we always imagine the 'forests' of huge towers and blades that we see from the road. There is also the domestic variant: wind turbines to install in homes, small communities or businesses. Installing small wind turbines is easier than it seems.";
    document.getElementById("titulo-link").innerHTML = "More information in:";
    document.getElementById("parafo-link").innerHTML = "Wind energy information";
    document.getElementById("link1").innerHTML = "Air Generators";
    document.getElementById("link2").innerHTML = "The wind as an engine";
    document.getElementById("link3").innerHTML = "The impulse of the wind";
    document.getElementById("link4").innerHTML = "What are they and how do they work?";
    document.getElementById("titulo3").innerHTML = "The future in our hands";
    document.getElementById("titulo4").innerHTML = "We promote the growth and production of sustainable energy, Dec 7, 2020";
    document.getElementById("titulo5").innerHTML = "Our Projects";
    document.getElementById("titulo6").innerHTML = "Solar Neighborhood Project, Sep 2, 2020";
  }
  else if (currentlanguage == "inglish") {
     //navbar
     document.body.classList.remove("spanish-languaje");
     document.body.classList.toggle("inglish-languaje");
     document.getElementById("translate-spanish").innerHTML = "Spanish";
     document.getElementById("translate-english").innerHTML = "English";
     document.getElementById("home").innerHTML = "Home";
     document.getElementById("about").innerHTML = "About";
     document.getElementById("about_us").innerHTML = "About us";
     document.getElementById("our_philosophy").innerHTML = "Our philosophy";
     document.getElementById("become_our_brand").innerHTML = "Become our brand";
     document.getElementById("contact").innerHTML = "Contact";
  }
  /**
  if (currentlanguage == "spanish" && title=="Inicio") {
    document.body.classList.remove("inglish-languaje");
    document.body.classList.toggle("spanish-languaje");
    document.getElementById("translate-spanish").innerHTML = "Español";
    document.getElementById("translate-english").innerHTML = "Ingles";
    document.getElementById("home").innerHTML = "Inicio";
    document.getElementById("about").innerHTML = "Acerca de";
    document.getElementById("about_us").innerHTML = "¿Quiénes Somos?";
    document.getElementById("our_philosophy").innerHTML = "Nuestra Filosofía";
    document.getElementById("become_our_brand").innerHTML = "Nuestras Marcas";
    document.getElementById("contact").innerHTML = "Contacto";


    document.getElementById("titulo1").innerHTML = "Aero House";
    document.getElementById("titulo2").innerHTML = "¿Qué son?";
    document.getElementById("parafo1").innerHTML = "Cuando hablamos de energía eólica siempre imaginamos los ‘bosques’ de enormes torres y palas que vemos desde la carretera. Existe también la variante doméstica: aerogeneradores para instalar en viviendas, pequeñas comunidades o negocios. Instalar las turbinas minieólicas es más sencillo de lo que parece.";
    document.getElementById("titulo-link").innerHTML = "Más Información en:";
    document.getElementById("parafo-link").innerHTML = "Información sobre la energía eólica";
    document.getElementById("link1").innerHTML = "Aero Generadores";
    document.getElementById("link2").innerHTML = "El viento como motor";
    document.getElementById("link3").innerHTML = "El impulso del viento";
    document.getElementById("link4").innerHTML = "¿Qué son y como funcionan?";
    
    document.getElementById("titulo3").innerHTML = "El futuro en nuestras manos";
    document.getElementById("titulo4").innerHTML = "Impulsamos el crecimiento y producción de la energia sustentable, Dec 7, 2020";
    document.getElementById("titulo5").innerHTML = "Nuestro Proyectos";
    document.getElementById("titulo6").innerHTML = "Proyecto Barrio Solar, Sep 2, 2020";

  }else {
    document.body.classList.remove("inglish-languaje");
    document.body.classList.add("spanish-languaje");
    //navbar
    document.getElementById("translate-spanish").innerHTML = "Español";
    document.getElementById("translate-english").innerHTML = "Ingles";
    document.getElementById("home").innerHTML = "Inicio";
    document.getElementById("about").innerHTML = "Acerca de";
    document.getElementById("about_us").innerHTML = "¿Quiénes Somos?";
    document.getElementById("our_philosophy").innerHTML = "Nuestra Filosofía";
    document.getElementById("become_our_brand").innerHTML = "Nuestras Marcas";
    document.getElementById("contact").innerHTML = "Contacto";
  }
  if (currentlanguage == 'inglish' && title=="Inicio") {
    //navbar
    document.body.classList.remove("spanish-languaje");
    document.body.classList.toggle("inglish-languaje");
    document.getElementById("translate-spanish").innerHTML = "Spanish";
    document.getElementById("translate-english").innerHTML = "English";
    document.getElementById("home").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About";
    document.getElementById("about_us").innerHTML = "About us";
    document.getElementById("our_philosophy").innerHTML = "Our philosophy";
    document.getElementById("become_our_brand").innerHTML = "Become our brand";
    document.getElementById("contact").innerHTML = "Contact";
     //Ini
    document.getElementById("titulo1").innerHTML = "Air House";
    document.getElementById("titulo2").innerHTML = "What are they?";
    document.getElementById("parafo1").innerHTML = "When we talk about wind energy we always imagine the 'forests' of huge towers and blades that we see from the road. There is also the domestic variant: wind turbines to install in homes, small communities or businesses. Installing small wind turbines is easier than it seems.";
    document.getElementById("titulo-link").innerHTML = "More information in:";
    document.getElementById("parafo-link").innerHTML = "Wind energy information";
    document.getElementById("link1").innerHTML = "Air Generators";
    document.getElementById("link2").innerHTML = "The wind as an engine";
    document.getElementById("link3").innerHTML = "The impulse of the wind";
    document.getElementById("link4").innerHTML = "What are they and how do they work?";
    document.getElementById("titulo3").innerHTML = "The future in our hands";
    document.getElementById("titulo4").innerHTML = "We promote the growth and production of sustainable energy, Dec 7, 2020";
    document.getElementById("titulo5").innerHTML = "Our Projects";
    document.getElementById("titulo6").innerHTML = "Solar Neighborhood Project, Sep 2, 2020";
  }else{
    //navbar
    document.body.classList.remove("spanish-languaje");
    document.body.classList.toggle("inglish-languaje");
    document.getElementById("translate-spanish").innerHTML = "Spanish";
    document.getElementById("translate-english").innerHTML = "English";
    document.getElementById("home").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About";
    document.getElementById("about_us").innerHTML = "About us";
    document.getElementById("our_philosophy").innerHTML = "Our philosophy";
    document.getElementById("become_our_brand").innerHTML = "Become our brand";
    document.getElementById("contact").innerHTML = "Contact";
  } */
  
} 



