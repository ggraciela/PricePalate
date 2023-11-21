//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
  var cardTemplate = document.getElementById("searchresulttemplate"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 
  // alert(cardTemplate);
  
  let params = new URL(window.location.href); // Get the URL from the search bar
  let keyword = params.searchParams.get("value");
  // alert(keyword);

  // var keyword = document.getElementById("search").value;
  

  db.collection(collection)
    
    .where('keywords', "==", keyword)

    // .where('walmartbox', "==", walmartbox)
    // .where('costcobox', "==", costcobox)
    // .where('saveonfoodsbox', "==", saveonfoodsbox)
    // .where('tntbox', "==", tntbox)

    // .orderBy('price')
    .get()   //the collection called "hikes"
    .then(allResults => {
      allResults.forEach(doc => { //iterate thru each doc
        console.log(doc.data());
        var itemid = doc.data().id;
        var imgurl = doc.data().imgurl;
        var itemname = doc.data().productFullName;
        var detail = doc.data().description;
        var price = doc.data().price;
        var store = doc.data().store;
        var storelogo = doc.data().storelogo;
        let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

        //update title and text and image
        newcard.querySelector('.price').innerHTML = "$" + price;
        newcard.querySelector('.item').innerHTML = itemname;
        newcard.querySelector('.detail').innerHTML = detail;
        // newcard.querySelector('.store').innerHTML = store;
        newcard.getElementById("productimage").src = imgurl; // newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; // Example: NV01.jpg
        newcard.getElementById("storelogo").src = storelogo; // newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; // Example: NV01.jpg
        newcard.querySelector('button').id = 'add-' + itemid;   //guaranteed to be unique
        newcard.querySelector('button').onclick = () => additemtolist(itemid); // add event listener to the addbutton

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


function additemtolist() {
  console.log("add item button clicked");
  // if (// button was already green or clicked on before && data is already in shopping list) {
  //   // then remove from shopping list AND make button not green again 
  // }
  // else {
  //   // make button green and add it to the shopping list ( currentList )
  // }
}

// function usekeyword() {
//   // Get the input field
//   var input = document.getElementById("search");

//   // Execute a function when the user presses a key on the keyboard
//   input.addEventListener("keypress", function (event) {
//     // If the user presses the "Enter" key on the keyboard
//     if (event.key === "Enter") {
      
//     }
//   });
// }

