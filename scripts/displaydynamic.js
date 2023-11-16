//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
  let cardTemplate = document.getElementById("searchresulttemplate"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 
//  var inputkeyword = "beans";

  db.collection(collection)
  .orderBy('price')  
      // .where('keyword', "==", inputkeyword)
      .get()   //the collection called "hikes"
      .then(allResults=> {
          allResults.forEach(doc => { //iterate thru each doc
            console.log(doc.data());
              var itemid = doc.data().itemid; 
              var image = doc.data().imgurl; 
              var itemname = doc.data().productFullName;      
              var detail = doc.data().description; 
              var price = doc.data().price; 
              var store = doc.data().store; 
              let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

              //update title and text and image
              newcard.querySelector('.price').innerHTML = price;
              newcard.querySelector('.item').innerHTML = itemname;
              newcard.querySelector('.detail').innerHTML = detail;
              newcard.querySelector('.store').innerHTML = store;
              // newcard.getElementById("#image").src = "(imgurl)"; // newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; // Example: NV01.jpg

              //Optional: give unique ids to all elements for future use
              // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
              // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
              // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

              //attach to gallery, Example: "hikes-go-here"
              document.getElementById('allresults').appendChild(newcard);

              //i++;   //Optional: iterate variable to serve as unique ID
          })
      })
}

displayCardsDynamically("market");  //input param is the name of the collection