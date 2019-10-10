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

// const photoContainer = document.querySelector('#photoContainer');
// photoContainer.addEventListener('click', function(e){
//     if(e.target.className === "removeButton"){
//         e.target.parentElement.remove();
//     }
// })

// const newPicForm = document.querySelector('#newPicForm')
// newPicForm.addEventListener('submit', newPic)

// function newPic(e){
//     e.preventDefault()
//     const name = e.target.querySelector('#name').value
//     const photo_url = e.target.querySelector('#photo_url').value
//     const owner = e.target.querySelector('#owner').value
//     const newPic = {
//         name: name,
//         photo_url: photo_url,
//         owner: owner
//     }
//     createElement(newPic)
//     e.target.reset()
// }

// function createElement(picObject){
//     const photoContainer = document.querySelector('#photoContainer');
//         const photoDiv = document.createElement('div');
//         photoDiv.className = "photo"
//             const photoName = document.createElement('h3')
//             photoName.innerText = picObject.name
//             const ownerName = document.createElement('p')
//             ownerName.innerText = picObject.owner
//             const photoImg = document.createElement('img');
//             photoImg.src = picObject.photo_url
//             const button = document.createElement('button')
//             button.className = 'removeButton'
//             button.innerText = "Remove"
//         photoDiv.append(photoName, ownerName, photoImg, button)
//     photoContainer.append(photoDiv)
// }