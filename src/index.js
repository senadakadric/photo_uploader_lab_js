const addPicButton = document.querySelector('#addPicButton')
addPicButton.addEventListener('click', openNewPicForm)
let formOpen = false

function openNewPicForm(){
    const newPicFormContainer = document.querySelector('#newPicFormContainer')
    if(formOpen){
        newPicFormContainer.style.height = '0px'
        newPicFormContainer.style.padding = '0px'
    }
    else{
        newPicFormContainer.style.height = '280px'
        newPicFormContainer.style.padding = '20px'
    }
    formOpen = !formOpen
}

//****Start coding below****//

