console.log("testing test")

// Hmtl id s in    Variablen  packen 

/* let h1Headline = document.querySelector("h1") */
let h1Headline = document.getElementById("h1Id_Headline");

let button___mitStyle = document.getElementById("buttonId___mitStyle");
let button___ohneStyle = document.getElementById("buttonId___ohneStyle");
let button___toggleStyle = document.getElementById("buttonId___toggleStyle");

// Event listener click    hört Ids ab (geht weil Variable mit Id verknüpft ist ) 
//    und ruft   Funktion auf
button___mitStyle.addEventListener("click", addStyle);
button___ohneStyle.addEventListener("click", removeStyle);
button___toggleStyle.addEventListener("click", toggleStyle);


// function definition
function addStyle() {
    // h1 wird eine css classe zugewiesen    und zwar die js_class_h1.... 
    h1Headline.classList.add("jsCSS_class_h1____style___isRed");  //   add von class
}


function removeStyle() {
    h1Headline.classList.remove("jsCSS_class_h1____style___isRed");  // remove von class   
                                                                //die davor mit add hinzu kam
}



function toggleStyle(){
    h1Headline.classList.toggle("jsCSS_class_h1___style___isToggle");
    // toggle Style kann     RedStyle überschreiben weil toogle im css weiter unten kommt
}
