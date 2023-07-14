const carouselDisplay= document.querySelector('#carousel')
const d1= document.querySelector('#bmwDisplay');
const d2= document.querySelector('#amazonDisplay');
const d3= document.querySelector('#maerskDisplay');
const d4= document.querySelector('#twilloDisplay');

const bmwlogo= document.querySelector('#bmwlogo');
const amazonLogo= document.querySelector('#amazonLogo');
const maerskLogo= document.querySelector('#maerskLogo');
const twilloLogo= document.querySelector('#twilloLogo');

let x=1;

function autoScroll(){
    if(x<4){
        carouselDisplay.scrollBy({
            left: 500,
            behavior: "smooth",
        }); 
    }else if(x>=4&&x<8){
        carouselDisplay.scrollBy({
            left: -500,
            behavior: "smooth",
        });
    }else{
        console.log('reset')
        x=0;
    }
    
    x++;
    if(x==1||x==7){
        bmwlogo.classList.remove('imgGray');

        amazonLogo.classList.add('imgGray');
        maerskLogo.classList.add('imgGray');
        twilloLogo.classList.add('imgGray');


    }else if(x==2||x==6){
        amazonLogo.classList.remove('imgGray');
        
        bmwlogo.classList.add('imgGray');
        maerskLogo.classList.add('imgGray');
        twilloLogo.classList.add('imgGray');

    }else if(x==3||x==5){
        maerskLogo.classList.remove('imgGray');
        
        bmwlogo.classList.add('imgGray');
        amazonLogo.classList.add('imgGray');
        twilloLogo.classList.add('imgGray');

    }else if(x==4){
        twilloLogo.classList.remove('imgGray');
        
        amazonLogo.classList.add('imgGray');
        maerskLogo.classList.add('imgGray');
        bmwlogo.classList.add('imgGray');

    }
    console.log(x)
    setTimeout(autoScroll, 5000);
}
autoScroll(x);

