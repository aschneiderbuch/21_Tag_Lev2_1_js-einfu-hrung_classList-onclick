console.log("testing test")

// Hmtl id s in    Variablen  packen 

/* let h1Headline = document.querySelector("h1") */
let h1Headline = document.getElementById("h1Headline");

let button___mitStyle = document.getElementById("button___mitStyle");
let button___ohneStyle = document.getElementById("button___ohneStyle");
let button___toggleStyle = document.getElementById("button___toggleStyle");

// Event listener
button___mitStyle.addEventListener("click", addStyle);
button___ohneStyle.addEventListener("click", removeStyle);
button___toggleStyle.addEventListener("click", toggleStyle);


// function definition
function addStyle() {
    // h1 wird eine css classe zugewiesen    und zwar die js_class_h1.... 
    h1Headline.classList.add("js_class_h1____style___isRed");  //   add von class
}


function removeStyle() {
    h1Headline.classList.remove("js_class_h1____style___isRed");  // remove von class   
                                                                //die davor mit add hinzu kam
}



function toggleStyle(){
    h1Headline.classList.toggle("js_class_h1___style___isToggle");
    // toggle Style kann     RedStyle überschreiben weil toogle im css weiter unten kommt
}
