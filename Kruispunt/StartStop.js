function starten() {
    auto1.style.top = parseInt(auto1.style.top) - snelheid0 + 'px';
    auto4.style.top = parseInt(auto4.style.top) + snelheid1 + 'px';
    auto2.style.left = parseInt(auto2.style.left) - snelheid2 + 'px';
    auto3.style.left = parseInt(auto3.style.left) + snelheid3 + 'px';
    if(auto1.style.top === '-80px'){
        auto1.style.top = '800px';
    }
    if(auto4.style.top === '800px'){
        auto4.style.top = '-80px';
    }
    if(auto2.style.left === '-200px'){
        auto2.style.left = '1400px';
    }
    if(auto3.style.left === '1500px'){
        auto3.style.left = '-200px';
    }
    rijden = setTimeout(starten,10);

    if(auto1.style.top === '550px' && stop1 === true){
        snelheid0 = 0;
    }else{
        snelheid0 = 5;
    }
    if(auto4.style.top === '200px' && stop1 === true){
        snelheid1 = 0;
    }else{
        snelheid1 = 5;
    }
    if(auto3.style.left === '300px' && stop2 === true){
        snelheid3 = 0;
    }else{
        snelheid3 = 5;
    }
    if(auto2.style.left === '750px' && stop2 === true){
        snelheid2 = 0;
    }else{
        snelheid2 = 5;
    }
}

function stoppen()
{
    clearTimeout(rijden)
}

function opnieuw() {
    auto1.style.top = '800px';
    auto4.style.top = '-80px';
    auto2.style.left = '1400px';
    auto3.style.left = '-200px'
}