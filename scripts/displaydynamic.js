//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
  let cardTemplate = document.getElementById("SearchResultTemplate"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 

  db.collection(collection).get()   //the collection called "hikes"
      .then(allResults=> {
          allResults.forEach(doc => { //iterate thru each doc
              var itemid = doc.data().itemid; 
              var image = doc.data().img-url; 
              var itemname = doc.data().productFullName;      
              var detail = doc.data().description; 
              var price = doc.data().price; 
              let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

              //update title and text and image
              newcard.querySelector('.price').innerHTML = price;
              newcard.querySelector('.item').innerHTML = itemname;
              newcard.querySelector('.detail').innerHTML = detail;
              newcard.querySelector('.image').innerHTML = image; // newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; // Example: NV01.jpg

              //Optional: give unique ids to all elements for future use
              // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
              // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
              // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

              //attach to gallery, Example: "hikes-go-here"
              document.getElementById(collection).appendChild(newcard);

              //i++;   //Optional: iterate variable to serve as unique ID
          })
      })
}

displayCardsDynamically("walmartX");  //input param is the name of the collection