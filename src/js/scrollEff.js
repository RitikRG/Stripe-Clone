// This js file will be dealing with the product popup scroll effect

const page1Selector = document.querySelector('#ppl1');
const page1 = document.querySelector('#GpBlock');

const page2Selector = document.querySelector('#ppl2');
const page2 = document.querySelector('#RFBlock');

const page3Selector = document.querySelector('#ppl3');
const page3 = document.querySelector('#BaSBlock');

page1Selector.addEventListener('mouseover', ()=>{
    console.log('ok')
    page1.classList.add('loadPage1');
    page1.classList.remove('removePage1');

    page2.classList.remove('loadPage2');
    page2.classList.add('removePage2');

    page3.classList.remove('loadPage3');
    page3.classList.add('removePage3');

    page1Selector.style.backgroundColor='white';
    page2Selector.style.backgroundColor='';
    page3Selector.style.backgroundColor='';
})
page2Selector.addEventListener('mouseover', ()=>{
    console.log('ok')
    page1.classList.remove('loadPage1');
    page1.classList.add('removePage1');

    page2.classList.add('loadPage2');
    page2.classList.remove('removePage2');

    page3.classList.remove('loadPage3');
    page3.classList.add('removePage3');

    page1Selector.style.backgroundColor='';
    page2Selector.style.backgroundColor='white';
    page3Selector.style.backgroundColor='';
})
page3Selector.addEventListener('mouseover', ()=>{
    console.log('ok')
    page1.classList.remove('loadPage1');
    page1.classList.add('removePage1');

    page2.classList.remove('loadPage2');
    page2.classList.add('removePage2');

    page3.classList.add('loadPage3');
    page3.classList.remove('removePage3');

    page1Selector.style.backgroundColor='';
    page2Selector.style.backgroundColor='';
    page3Selector.style.backgroundColor='white';
})