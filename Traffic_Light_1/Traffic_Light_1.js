function veranderStoplicht() {
    var stoplicht = document.getElementById('stoplicht');
    if(stoplicht.src.match("stoplichtrood")){
        stoplicht.src = "../verkeer/stoplichtgroen.png";
    }else {
        stoplicht.src = "../verkeer/stoplichtrood.png";
    }
}