function displayCardsDynamically(collection) {
  allmarket();
  var cardTemplate = document.getElementById("searchresulttemplate");
  
  // to match search result with the keyword
  let params = new URL(window.location.href); // Get the URL from the search bar
  let keyword = params.searchParams.get("value");
 
  // to get value of checkboxes
  var walmartbox = (localStorage.getItem("walmartstat") === 'true');
  var costcobox = (localStorage.getItem("costcostat") === 'true');
  var saveonfoodsbox = (localStorage.getItem("saveonfoodsstat") === 'true');
  var tntbox = (localStorage.getItem("tntstat") === 'true');


  db.collection(collection)
    .orderBy('price')
    .where('keywords', "==", keyword)
    .where('walmart', "==", walmartbox)
    .where('costco', "==", costcobox)
    .where('saveonfoods', "==", saveonfoodsbox)
    .where('tnt', "==", tntbox)
    .get()   //the collection 
    .then(allResults => {
      if(allResults.size < 1){
        document.getElementById('allresults').innerHTML = "<br><br><br><br><br><br><br><br><br>No results";
        document.getElementById('allresults').style.textAlign = "center";
        document.getElementById('allresults').style.margin = "auto";
      }
      else {
        allResults.forEach(doc => { //iterate thru each doc
          // console.log(doc.data());
          var itemid = doc.data().id;
          var imgurl = doc.data().imgurl;
          var itemname = doc.data().productFullName;
          var detail = doc.data().description;
          var price = doc.data().price;
          var store = doc.data().store;
          var storelogo = doc.data().storelogo;
          let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

          // entering the data to the html
          newcard.querySelector('.price').innerHTML = "$" + price;
          newcard.querySelector('.item').innerHTML = itemname;
          newcard.querySelector('.detail').innerHTML = detail;
          newcard.getElementById("productimage").src = imgurl; 
          newcard.getElementById("storelogo").src = storelogo;
          
          newcard.querySelector('button').id = 'add-' + itemid;  
          newcard.querySelector('button').onclick = () => additemtolist(itemid); 

          // adding the new card
          document.getElementById('allresults').appendChild(newcard);
          
        })
      }
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

          // document.getElementById("add-" + itemid ).innerHTML = 'add_box'; 
          // document.getElementById("add-" + itemid).children[0].innerHTML = 'add_box'; 
          document.getElementById("add-" + itemid).children[0].style = "font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;"; 
          document.getElementById("add-" + itemid).children[0].style.color = "#39A36A"; 

          // document.getElementById("add-" + itemid).style. = "#39A36A";
          // document.getElementById("plusbtn").classList.add(""); 
          // document.getElementById("plusbtn").innerHTML = "add_box"; 

          // document.getElementById("add-" + itemid).style.setProperty('font-variation-settings', `'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48`);
          // document.getElementById("add-" + itemid).style.setProperty('--variation', `'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48`);


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



// function checkifalreadyclicked(){
//   db.collection("users").doc(user.uid).data().currentList.forEach((itemid) => {
//     if(itemid == itemid) {
//       document.getElementById("add-" + itemid).children[0].style = "font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;"; 
//       document.getElementById("add-" + itemid).children[0].style.color = "#39A36A"; 
//     }
//   })
// }

// checkifalreadyclicked()