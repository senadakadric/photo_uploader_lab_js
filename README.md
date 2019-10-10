# Photo Uploader

We have an application that uploads photos. That's it.

## Create Your Server

All of the photos are stored in the `db.json` file. You'll want to access this data using a JSON server. In order to do this, run the following two commands:

   * `npm install -g json-server`
   * `json-server --watch db.json`
   
This will create a server storing all of our photo data with restful routes
at `http://localhost:3000/photos`. You can also check out
`http://localhost:3000/photos/:id`

## Fetch Photos

On the `index.html` page, there is a `div` with the `id` "photoContainer."

When the page loads, make a 'GET' request to fetch all the photo objects. With the
response data, make a `<div class="photo">` for each photo and add it to the
photoContainer `div`.

## Add Photo Info to the Photo Div

Each Photo Div should have the following child elements:

  * `h3` tag with the photo's name
  * `p` tag with photo's owner
  * `img` tag with the `src` of the photo's url attribute 
  * `button` tag with a class "removeButton" and inner text of Remove

After all of that, the Photo Div should resemble:

```html
  <div className="photo">
      <h3>Photo Name</h3>
      <p>By Not-Rei</p>
      <img src="https://lh4.googleusercontent.com/-biLWrHsnoj4/AAAAAAAAAAI/AAAAAAAAADM/VQfqDfNKF10/photo.jpg">
      <button class="removeButton">Remove</button>
  </div>
```

## Add a New Photo

* When a user clicks on the add new photo button, the hidden form will pop up. When the form is submitted, a `POST` request is sent to `http://localhost:3000/photos` and the new photo is added to PhotoContainer.
* The photo should render to the page.
* In order to send a POST request via Fetch, give the fetch a second argument of an object. This object should specify the method as `POST` and also provide the appropriate headers and the JSON-ified data for the request. If your request isn't working, make sure your headers and keys match the documentation.

```
POST http://localhost:3000/photos
headers: 
{
  "Content-Type": "application/json",
  "Accept": "application/json"
}

body:
{
  "name": "Rei's Photo",
  "owner": "Not Rei"
  "photo_image_url": "https://lh4.googleusercontent.com/-biLWrHsnoj4/AAAAAAAAAAI/AAAAAAAAADM/VQfqDfNKF10/photo.jpg",
}
```
* For examples, refer to the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options).

###Sample Photo Data
{
    "name": "Sample 1",
    "photo_image_url": "https://uc30c8a0afd0a0a9d15ade47f26a.previews.dropboxusercontent.com/p/thumb/AAll56msw8YL1sz4N87Ja0LSX6BpNXfp0RLm-k5SUOKHDV2TIGOxy0MImb4KwUAcsAVk5k3mx6vNcsr2cFRMXsEZsU1pwLC1-gMRUnr0PuwRREl7iHqW17sRmudqiKSpl-vTzIE2CfZw7SsIXFhit-DnsONlA0_JFAR2SrIyMkQzLoMTDO_FXzB-IrUnKGvmA866bT0zt4vqdeXkycpVrtIW8LhiQsSwgaOdNVeuadCBUXA04bC2revhNiOKl1HmORXheGsHNtsyBrg5ZlA2JSZIbNbJnOHsGRZmJXSPd9TDEiIRCOOlEwozWUiEPtk4gfBzrDOqvBSz71UmmmSVGDNyhgzlmmEyXNPFpxR7wWRcdg/p.jpeg?fv_content=true&size_mode=5",
    "owner": "Eric"
},
{
    "name": "Sample 2",
    "photo_image_url": "https://cdn-images-1.medium.com/max/1200/1*yGtxOVUsngf8nnlH_-0idw@2x.jpeg",
    "owner": "Leizl"
}

## Remove Photo 

When a user clicks on a photo's remove button, the photo div should be removed and also removed from the database.

  * A delete request sent to the server at `http://localhost:3000/photos/:id`
  
```
DELETE http://localhost:3000/photos/:id
```

# Bonus 
## Update Photo Information

If we have an update button, and When a user clicks on a Photo's update button, two things should happen:

  * bring up an edit form with the fields populated with the specific photo's information except the owner.
  * A patch request sent to the server at `http://localhost:3000/photos/:id` updating the the information of the photo.
  * Headers and body are provided below (If your request isn't working, make sure your header and keys match the documentation.)
  
```
PATCH http://localhost:3000/photos/:id
headers: 
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

body:
{
  "name": <new number>,
  "photo_image_url": <new photo url>
}
```