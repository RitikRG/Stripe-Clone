const productLink = document.querySelector('#productLink');
const productPopUp= document.querySelector('#productsPopupContainerOut');

const solutionLink= document.querySelector('#solutionLink');
const solutionPopUp= document.querySelector('#solutionsPopupContainerOut');


// Product popup function

productLink.addEventListener('mouseenter', ()=>{
    productPopUp.classList.toggle('popUpClosed');
    productPopUp.classList.remove('popupCLose');

    productPopUp.classList.add('popUpOpen');

    // removing other popups
    solutionPopUp.classList.add('popUpClosed');
    solutionPopUp.classList.remove('popUpOpen');

})

productPopUp.addEventListener('mouseleave', ()=>{
    productPopUp.classList.remove('popUpOpen');
    productPopUp.classList.add('popupCLose');
    setTimeout(()=>{productPopUp.classList.add('popUpClosed');}, 250);
})


// Solution Popup functions

solutionLink.addEventListener('mouseenter', ()=>{
    solutionPopUp.classList.toggle('popUpClosed');
    solutionPopUp.classList.remove('popupCLose');

    solutionPopUp.classList.add('popUpOpen');

    // removing other popups
    productPopUp.classList.add('popUpClosed');
    productPopUp.classList.remove('popUpOpen');

})

solutionPopUp.addEventListener('mouseleave', ()=>{
    solutionPopUp.classList.remove('popUpOpen');
    solutionPopUp.classList.add('popupCLose');
    setTimeout(()=>{solutionPopUp.classList.add('popUpClosed');}, 250);
})