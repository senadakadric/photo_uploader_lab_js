const addPicButton = document.querySelector("#addPicButton");
addPicButton.addEventListener("click", openNewPicForm);
let formOpen = false;

function openNewPicForm() {
  const newPicFormContainer = document.querySelector("#newPicFormContainer");
  if (formOpen) {
    newPicFormContainer.style.height = "0px";
    newPicFormContainer.style.padding = "0px";
  } else {
    newPicFormContainer.style.height = "280px";
    newPicFormContainer.style.padding = "20px";
  }
  formOpen = !formOpen;
}

//****Start coding below****//

const photoContainer = document.querySelector("#photoContainer");

const newPhotoForm = document.querySelector("#newPicForm");

fetch("http://localhost:3000/photos")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    json.forEach(function (photo) {
      addPhotoToPhotoContainer(photo);
    });
  });

function addPhotoToPhotoContainer(photo) {
  const photoDiv = document.createElement("div");
  photoDiv.className = "photo";
  photoDiv.innerHTML = `
      <h3>${photo.name}</h3>
      <p>By ${photo.owner}</p>
      <img src="${photo.photo_image_url}">
      <button class="removeButton">Remove</button>
      `;

  photoContainer.append(photoDiv);

  const deleteBtn = photoDiv.querySelector("button");
  deleteBtn.addEventListener("click", function (event) {
    photoDiv.remove();

    fetch(`http://localhost:3000/photos/${photo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(photo),
    });
  });
}

newPhotoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const photoObject = {
    name: event.target.name.value,
    owner: event.target.owner.value,
    photo_image_url: event.target.photo_image_url.value,
  };

  fetch("http://localhost:3000/photos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(photoObject),
  });

  addPhotoToPhotoContainer(photoObject);
});
