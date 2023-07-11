const productLink = document.querySelector('#productLink');
const productPopUp= document.querySelector('#productsPopupContainerOut');

const solutionLink= document.querySelector('#solutionLink');
const solutionPopUp= document.querySelector('#solutionsPopupContainerOut');

const documentationLink= document.querySelector('#documentationLink');
const documentationPopUp= document.querySelector('#documentationPopupContainerOut');

const resourcesLink= document.querySelector('#resourcesLink');
const resourcesPopUp= document.querySelector('#resourcePopupContainerOut');

// Product popup function

productLink.addEventListener('mouseenter', ()=>{
    productPopUp.classList.toggle('popUpClosed');
    productPopUp.classList.remove('popupCLose');

    productPopUp.classList.add('popUpOpen');

    // removing other popups
    solutionPopUp.classList.add('popUpClosed');
    solutionPopUp.classList.remove('popUpOpen');
    documentationPopUp.classList.add('popUpClosed');
    documentationPopUp.classList.remove('popUpOpen');
    resourcesPopUp.classList.add('popUpClosed');
    resourcesPopUp.classList.remove('popUpOpen');
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
    documentationPopUp.classList.add('popUpClosed');
    documentationPopUp.classList.remove('popUpOpen');
    resourcesPopUp.classList.add('popUpClosed');
    resourcesPopUp.classList.remove('popUpOpen');

})

solutionPopUp.addEventListener('mouseleave', ()=>{
    solutionPopUp.classList.remove('popUpOpen');
    solutionPopUp.classList.add('popupCLose');
    setTimeout(()=>{solutionPopUp.classList.add('popUpClosed');}, 250);
})

// Documentation popup functions

documentationLink.addEventListener('mouseenter', ()=>{
    documentationPopUp.classList.toggle('popUpClosed');
    documentationPopUp.classList.remove('popupCLose');

    documentationPopUp.classList.add('popUpOpen');

    // removing other popups
    productPopUp.classList.add('popUpClosed');
    productPopUp.classList.remove('popUpOpen');
    solutionPopUp.classList.add('popUpClosed');
    solutionPopUp.classList.remove('popUpOpen');
    resourcesPopUp.classList.add('popUpClosed');
    resourcesPopUp.classList.remove('popUpOpen');

})

documentationPopUp.addEventListener('mouseleave', ()=>{
    documentationPopUp.classList.remove('popUpOpen');
    documentationPopUp.classList.add('popupCLose');
    setTimeout(()=>{documentationPopUp.classList.add('popUpClosed');}, 250);
})

// Resouces Popup Functions

resourcesLink.addEventListener('mouseenter', ()=>{
    resourcesPopUp.classList.toggle('popUpClosed');
    resourcesPopUp.classList.remove('popupCLose');

    resourcesPopUp.classList.add('popUpOpen');

    // removing other popups
    productPopUp.classList.add('popUpClosed');
    productPopUp.classList.remove('popUpOpen');
    solutionPopUp.classList.add('popUpClosed');
    solutionPopUp.classList.remove('popUpOpen');
    documentationPopUp.classList.add('popUpClosed');
    documentationPopUp.classList.remove('popUpOpen');

})

resourcesPopUp.addEventListener('mouseleave', ()=>{
    resourcesPopUp.classList.remove('popUpOpen');
    resourcesPopUp.classList.add('popupCLose');
    setTimeout(()=>{resourcesPopUp.classList.add('popUpClosed');}, 250);
})