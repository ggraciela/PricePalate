function displayCardsDynamically(collection) {
  allmarket();
  var cardTemplate = document.getElementById("searchresulttemplate");

  // to match search result with the keyword
  let params = new URL(window.location.href); // Get the URL from the search bar
  let keyword = params.searchParams.get("value").toLowerCase();
  // console.log(keyword);

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
      if (allResults.size < 1) {
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


          checkifalreadyclicked(itemid);

          newcard.querySelector('.addbutton').onclick = () => additemtolist(itemid);
          newcard.querySelector('.minusbutton').onclick = () => removeitemfromlist(itemid);
          newcard.querySelector('.minus').style.color = "transparent";
          
          newcard.querySelector('.addbutton').id = 'add-' + itemid;
          newcard.getElementById('minusbtn').id = 'minus-' + itemid;

          // document.getElementById("minusbtn").classList.add("invisible"); 

          // adding the new card
          document.getElementById('allresults').appendChild(newcard);

        })
      }
    })
}

displayCardsDynamically("market");  //input param is the name of the collection



function additemtolist(itemid) {
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);
      currentUser.update({
        currentList: firebase.firestore.FieldValue.arrayUnion(itemid),
      })
        .then(function () {
          // console.log("product has been added into shoppinglist" + itemid);
          var itemID = "item-" + itemid;
          // console.log(itemid);

          // turns the clicked add button to green and filled
          document.getElementById("add-" + itemid).children[0].style = "font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;";
          document.getElementById("add-" + itemid).children[0].style.color = "#39A36A";

          // document.getElementById("minus-" + itemid).style.visibility = "visible";
          document.getElementById("minus-" + itemid).style.color = "#39A36A";
          // showminusbutton(itemid);
        });
    }
  });
}

function showminusbutton(itemid){
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);

      currentUser.get().then((userDoc) => {
        const currentList = userDoc.data().currentList;

        currentList.forEach((itemId) => {
          if (itemId == itemid) {
            document.getElementById("minus-" + itemid).style.visibility = "visible";
            document.getElementById("minus-" + itemid).style.color = "#39A36A";
          } 
        })
      })
    }
  })
}

function checkifalreadyclicked(itemid) {
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);

      currentUser.get().then((userDoc) => {
        const currentList = userDoc.data().currentList;

        currentList.forEach((itemId) => {
          
          if (itemId == itemid) {
            document.getElementById("add-" + itemid).children[0].style = "font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;";
            document.getElementById("add-" + itemid).children[0].style.color = "#39A36A";

            document.getElementById("minus-" + itemid).style.color = "#39A36A";
          } else {
            document.getElementById("add-" + itemid).children[0].style = "font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;";
            document.getElementById("add-" + itemid).children[0].style.color = "#6e6e6e";

            document.getElementById("minus-" + itemid).style.color = "transparent";
          }
        })
      })
    }
  })
}


function resetbuttons(itemid){
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);

      currentUser.get().then((userDoc) => {
        const currentList = userDoc.data().currentList;

        currentList.forEach((itemId) => {
          if (itemId == itemid) {
            document.getElementById("add-" + itemid).children[0].style = "font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;";
            document.getElementById("add-" + itemid).children[0].style.color = "#39A36A";

            document.getElementById("minus-" + itemid).style.color = "#39A36A";
            console.log("reset button if");
          } else {
            document.getElementById("add-" + itemid).children[0].style = "font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;";
            document.getElementById("add-" + itemid).children[0].style.color = "#6e6e6e";

            document.getElementById("minus-" + itemid).style.color = "transparent";
            console.log("reset button else");
          }
        })
      })
    }
  })
}

function removeitemfromlist(itemId) {
  redirectAfterSave = true;
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);

      currentUser.get().then((userDoc) => {
        const currentList = userDoc.data().currentList;
        if (currentList && currentList.length > 0) {
          currentUser
            .update({
              // Use 'arrayUnion' to add the new bookmark ID to the 'bookmarks' array.
              // This method ensures that the ID is added only if it's not already present, preventing duplicates.
              currentList: firebase.firestore.FieldValue.arrayRemove(itemId),
              
            })
            // Handle the front-end update to change the icon, providing visual feedback to the user that it has been clicked.
            .then(() => {
              console.log("item has been deleted for" + itemId);

              resetbuttons(itemId);
              // checkifalreadyclicked(itemid);
              // displayCardsDynamically("market");
              

              
              // let params = new URL(window.location.href); // Get the URL from the search bar
              // let keyword = params.searchParams.get("value");
              // window.location.href = "searchresults.html?value=" + result;

              var keyword = (localStorage.getItem("keywordsearch"));
              window.location.href = "searchresults.html?value=" + keyword;
            });
        } else {
          console.warn("Current list is empty or null");
        }
      });
    } else {
    }
  });
}