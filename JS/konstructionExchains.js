let colors = document.getElementById("colors");
let Podushka = document.getElementById("viborPodushkaImg");

let colorsColor1 = document.getElementById("colorsColor1");
let colorsColor2 = document.getElementById("colorsColor2");
let colorsColor3 = document.getElementById("colorsColor3");
let colorsColor4 = document.getElementById("colorsColor4");
let colorsColor5 = document.getElementById("colorsColor5");
let colorsColor6 = document.getElementById("colorsColor6");
let colorsColor7 = document.getElementById("colorsColor7");
let colorsColor8 = document.getElementById("colorsColor8");
let colorsColor9 = document.getElementById("colorsColor9");

let PodusshkaText = document.getElementById("PodusshkaText");

let paramsis = false;



Podushka.addEventListener("click", function (param) {
   console.log("Push Ring"); 
   param = paramsis;
    // Podushka.style.backgroundColor = "red";
    if (param === false) {
        colors.style.visibility = "visible";    
        paramsis = true;
        paramsis2 = false;
        paramsis3 = false;
        colorsVerchLez.style.visibility = "hidden";
        colorsNizLez.style.visibility = "hidden";
        
    }
    else{
        colors.style.visibility = "hidden";    
        paramsis = false;
        // paramsis2 = false;

        console.log(param);
    }    
});


// красный фон подушки
colorsColor1.addEventListener("click", function () {
    PodusshkaText.style.visibility = "hidden";    
    // Podushka.style.backgroundImage = "none";
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor1JS.png')";
});

// зеленный фон
colorsColor2.addEventListener("click", function (params) {
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor2JS.png')";
    // Podushka.style.backgroundImage = "none";
    PodusshkaText.style.visibility = "hidden";
});

//Рисунок1
colorsColor3.addEventListener("click", function (params) {
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor3JS.png')";
    // Podushka.style.backgroundImage = "none";
    PodusshkaText.style.visibility = "hidden";
    
});

//розовый фон
colorsColor4.addEventListener("click", function (params) {
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor4JS.png')";
    // Podushka.style.backgroundImage = "none";
    PodusshkaText.style.visibility = "hidden";
});


colorsColor5.addEventListener("click", function (params) {
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor5JS.png')";
    // Podushka.style.backgroundImage = "none";
    PodusshkaText.style.visibility = "hidden";
});


colorsColor6.addEventListener("click", function (params) {
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor6JS.png')";
    // Podushka.style.backgroundImage = "none";
    PodusshkaText.style.visibility = "hidden";
});


colorsColor7.addEventListener("click", function (params) {
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor7JS.png')";
    // Podushka.style.backgroundImage = "none";
    PodusshkaText.style.visibility = "hidden";
});

colorsColor8.addEventListener("click", function (params) {
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor8JS.png')";
    // Podushka.style.backgroundImage = "none";
    PodusshkaText.style.visibility = "hidden";
});

colorsColor9.addEventListener("click", function (params) {
    Podushka.style.backgroundImage = "url('./IMG_Site/PodushkaColor9JS.png')";
    // Podushka.style.backgroundImage = "none";
    PodusshkaText.style.visibility = "hidden";
});


// ?????????????????????????????????????????????????????
// Работа с верхней частью лежанки

let colorsVerchLez = document.getElementById("colorsVerchLez");
let viborVerchLezanki = document.getElementById("viborVerchLezanki");

let paramsis2 = false;

let viborVerchLezankiText = document.getElementById("viborVerchLezankiText");

let colorVerxColor1 = document.getElementById("colorVerxColor1");
let colorVerxColor2 = document.getElementById("colorVerxColor2");
let colorVerxColor3 = document.getElementById("colorVerxColor3");
let colorVerxColor4 = document.getElementById("colorVerxColor4");
let colorVerxColor5 = document.getElementById("colorVerxColor5");
let colorVerxColor6 = document.getElementById("colorVerxColor6");



viborVerchLezanki.addEventListener("click", (param2) => {
    param2 = paramsis2;
    if (param2 === false) {
        colorsVerchLez.style.visibility = "visible";
        colors.style.visibility = "hidden"; 
        colorsNizLez.style.visibility = "hidden";
        paramsis2 = true;
        paramsis = false;
        paramsis3=false;
    }
    else{
        colorsVerchLez.style.visibility = "hidden";
        paramsis2 = false;
    }
});

colorVerxColor1.addEventListener("click", () =>{
    viborVerchLezanki.style.backgroundImage = "url('./IMG_Site/verchLez1JS.png')";
    viborVerchLezankiText.style.visibility = "hidden";
});

colorVerxColor2.addEventListener("click", () =>{
    viborVerchLezanki.style.backgroundImage = "url('./IMG_Site/verchLez2JS.png')";
    viborVerchLezankiText.style.visibility = "hidden";
});

colorVerxColor3.addEventListener("click", () =>{
    viborVerchLezanki.style.backgroundImage = "url('./IMG_Site/verchLez3JS.png')";
    viborVerchLezankiText.style.visibility = "hidden";
});

colorVerxColor4.addEventListener("click", () =>{
    viborVerchLezanki.style.backgroundImage = "url('./IMG_Site/verchLez4JS.png')";
    viborVerchLezankiText.style.visibility = "hidden";
});

colorVerxColor5.addEventListener("click", () =>{
    viborVerchLezanki.style.backgroundImage = "url('./IMG_Site/verchLez5JS.png')";
    viborVerchLezankiText.style.visibility = "hidden";
});

colorVerxColor6.addEventListener("click", () =>{
    viborVerchLezanki.style.backgroundImage = "url('./IMG_Site/verchLez6JS.png')";
    viborVerchLezankiText.style.visibility = "hidden";
});


// ?????????????????????????????????????????????????????
// Работа с нижней частью лежанки

let colorsNizLez = document.getElementById("colorsNizLez");
let viborNizLezanki = document.getElementById("viborNizLezanki");

let paramsis3 = false;

let viborNizLezankiText = document.getElementById("viborNizLezankiText");

let colorNizColor1 = document.getElementById("colorNizColor1");
let colorNizColor2 = document.getElementById("colorNizColor2");
let colorNizColor3 = document.getElementById("colorNizColor3");
let colorNizColor4 = document.getElementById("colorNizColor4");
let colorNizColor5 = document.getElementById("colorNizColor5");
let colorNizColor6 = document.getElementById("colorNizColor6");



viborNizLezanki.addEventListener("click", (param3) => {
    param3 = paramsis3;
    if (param3 === false) {
        colorsNizLez.style.visibility = "visible";
        colors.style.visibility = "hidden"; 
        colorsVerchLez.style.visibility = "hidden";
        paramsis3 = true;
        paramsis2 = false;
        paramsis = false;
    }
    else{
        colorsNizLez.style.visibility = "hidden";
        paramsis3 = false;
    }
});

colorNizColor1.addEventListener("click", () =>{
    viborNizLezanki.style.backgroundImage = "url('./IMG_Site/verchLez1JS.png')";
    viborNizLezankiText.style.visibility = "hidden";
});

colorNizColor2.addEventListener("click", () =>{
    viborNizLezanki.style.backgroundImage = "url('./IMG_Site/verchLez2JS.png')";
    viborNizLezankiText.style.visibility = "hidden";
});

colorNizColor3.addEventListener("click", () =>{
    viborNizLezanki.style.backgroundImage = "url('./IMG_Site/verchLez3JS.png')";
    viborNizLezankiText.style.visibility = "hidden";
});

colorNizColor4.addEventListener("click", () =>{
    viborNizLezanki.style.backgroundImage = "url('./IMG_Site/verchLez4JS.png')";
    viborNizLezankiText.style.visibility = "hidden";
});

colorNizColor5.addEventListener("click", () =>{
    viborNizLezanki.style.backgroundImage = "url('./IMG_Site/verchLez5JS.png')";
    viborNizLezankiText.style.visibility = "hidden";
});

colorNizColor6.addEventListener("click", () =>{
    viborNizLezanki.style.backgroundImage = "url('./IMG_Site/verchLez6JS.png')";
    viborNizLezankiText.style.visibility = "hidden";
});