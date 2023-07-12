const carouselDisplay= document.querySelector('#carouselDisplay')
const d1= document.querySelector('#bmwDisplay');
const d2= document.querySelector('#amazonDisplay');
const d3= document.querySelector('#maerskDisplay');
const d4= document.querySelector('#twilloDisplay');
let x=1;

function autoScroll(x){
    if(x>4){
        x=1;
        carouselDisplay.scrollLeft=0;
        console.log('bskd');
    }else{
        carouselDisplay.scrollLeft+=500;
        carouselDisplay.scroll({behavior:"smooth"})
        console.log('bskd')
        x++;
    }
    setTimeout(autoScroll, 5000);
}
autoScroll(x);

