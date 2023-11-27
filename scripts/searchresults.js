//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
  allmarket();
  var cardTemplate = document.getElementById("searchresulttemplate"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 
  // alert(cardTemplate);
  
  // to match search result with the keyword
  let params = new URL(window.location.href); // Get the URL from the search bar
  let keyword = params.searchParams.get("value");
  // alert(keyword);

  


  // var keyword = document.getElementById("search").value;


  var walmartbox = (localStorage.getItem("walmartstat") === 'true');
  console.log(walmartbox + " value of walmartbox");


  var costcobox = (localStorage.getItem("costcostat") === 'true');
  console.log(costcobox + " value of costcobox");

  var saveonfoodsbox = (localStorage.getItem("saveonfoodsstat") === 'true');
  console.log(saveonfoodsbox + " value of saveonfoodsbox");

  var tntbox = (localStorage.getItem("tntstat") === 'true');
  console.log(tntbox + " value of tntbox");



  // trying to parse stored value as a string
  let result = JSON.parse(localStorage.getItem('walmartstat'));
  // console.log(walmartstat + " is the value of walmartstat stored in local storage")
  // console.log(result + " is the value of 'result' stored in local storage")



  db.collection(collection)
    .orderBy('price')
    .where('keywords', "==", keyword)
    .where('walmart', "==", walmartbox)
    .where('costco', "==", costcobox)
    .where('saveonfoods', "==", saveonfoodsbox)
    .where('tnt', "==", tntbox)
    .get()   //the collection called "hikes"
    .then(allResults => {
      // alert (allResults.size);
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


function additemtolist(itemid) {
  firebase.auth().onAuthStateChanged((user) => {
    // var itemid = doc.data().id;
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);
      currentUser.update({
          currentList: firebase.firestore.FieldValue.arrayUnion(itemid),
        })
        // Handle the front-end update to change the icon, providing visual feedback to the user that it has been clicked.
        .then(function () {
          console.log("product has been added into shoppinglist" + itemid);
          var itemID = "item-" + itemid;
          console.log(itemid);
          //this is to change the icon of the hike that was saved to "filled"
          document.getElementById("plusbtn").innerText = 'add_box';
          // changebutton();
        });
    } 
  });
}



// document.getElementById("plusbtn").target.classList.add("filled");
          
// function changebutton() {
//   let allBtns = document.querySelectorAll("plusbtn")

// // For each button, register an event listener
// allBtns.forEach(function(elem){

//   elem.addEventListener("click", function(e){
  
//     // On click, remove the MyClass on ALL buttons
//     allBtns.forEach(function(el){
//       el.classList.remove("filled");
//     });
    
//     // Add the class on clicked one
//     e.target.classList.add("filled");
    
//     // Now pass the data-href to your iframe
//     // let theHREFtoOpen = e.target.getAttribute("data-href")
//     // console.log(theHREFtoOpen)
//     //document.querySelector("#your-iframe").src = theHREFtoOpen
//   })
// })
// }




  
// function dosearchwithenterkey(e) {
//     if (e.keyCode == 13) {
//       console.log("search bar works");
//       dosearch();
//     }
//   };



// function dosearch() {
//   console.log("search button clicked");
//   var result = document.getElementById("search").value;
//   // alert(result);
//   window.location.href = "searchresults.html?value=" + result;
// }