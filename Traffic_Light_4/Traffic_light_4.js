var werken;             //animatie heet 'werken'
var buitenwerking;      //andere animatie heet 'buitenwerking'
var stoplicht4=document.getElementById('stoplicht');
stoplicht4.style.position='absolute';
stoplicht4.style.left='715px';
stoplicht4.style.top='510px';

function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood2();
    werken=setTimeout(maakGroen2,4000); // na 4 sec (4000msec) groen maken
    werken=setTimeout(maakGeel2,8000); // na 8 sec geel maken
    werken=setTimeout(aanzetten,10000); // en na 10 sec opniew aanzetten
}

function knipperen() {
    clearTimeout(werken);
    maakGeel2();
    buitenwerking= setTimeout(zetUit2,500);         //na 500 msec uitzetten
    buitenwerking= setTimeout(knipperen,1000);      //na 500 msec weer knipperen
}

function uitzetten() {
    //deze funtie zet de animaties van het stoplicht uit
    //dat is anders dan dat de functie zetUit() doet zetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

function maakRood2() {
    stoplicht2.src= "stoplichtrood.png";
}

function maakGroen2() {
    stoplicht2.src="stoplichtgroen.png";
}

function maakGeel2() {
    stoplicht2.src="stoplichtgeel.png";
}

function zetUit2() {
    //deze functie laat het plaatje met alle lampjes uit zien.
    //niet verwarren met de functie uitzetten()
    stoplicht2.src="stoplichtuit.png";
}