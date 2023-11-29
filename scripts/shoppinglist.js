//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
// const currentUser = db.collection("users").doc(hardCodeUserId); //
// const hardCodeUserId = "yXsEZFc7kTdbuu3cePxcLdG9CBH3";

let redirectAfterSave = false;


function addToList(productId) {
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);
      currentUser
        .update({
          currentList: firebase.firestore.FieldValue.arrayUnion(productId),
        })
        // Handle the front-end update to change the icon, providing visual feedback to the user that it has been clicked.
        .then(function () {
          console.log("product has been added into shoppinglist" + productId);
          var itemID = "item-" + productId;
          console.log(itemID);
        });
    } else {
    }
  });
}

function displayListDynamically() {
  let itemTemplate = document.getElementById("list-template");
  const itemsContainer = document.getElementById("items");

  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const userDocRef = db.collection("users").doc(user.uid);
      userDocRef.onSnapshot((userDoc) => {
        console.log("current document data: " + userDoc.data().email);
        let currentList = userDoc.data().currentList;

        // Clear the existing items before updating the list
        itemsContainer.innerHTML = "";

        // Get the product from "market"
        if (currentList && currentList.length > 0) {
          currentList.forEach((itemId) => {
            const itemDocRef = db.collection("market").doc(itemId);
            itemDocRef.onSnapshot((itemDoc) => {
              let name = itemDoc.data().productFullName;
              let price = itemDoc.data().price;
              let store = itemDoc.data().store;

              let newList = itemTemplate.content.cloneNode(true);

              newList.querySelector(".item-name").innerHTML = name;
              newList.querySelector(".item-price").innerHTML = price;
              newList.querySelector(".item-store").innerHTML = store;

              newList.querySelector("span").id = "delete-" + itemId;
              newList.querySelector("span").onclick = () => removeItem(itemId);

              document.getElementById("items").appendChild(newList);
              document.getElementById("savebox").onclick = () => saveList();
            });
          });
        } else {
          if(!redirectAfterSave){
            window.location.href = "shoppingb.html";
          }
          
          
        }
      });
    } else {
      // If user has not logged in
      window.location.href = "shoppingb.html";
    }
  });
}

function removeItem(itemId) {
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
              deleteMessage(itemId);
              
              // window.location.href = "shopping.html";
            });
        } else {
          console.warn("Current list is empty or null");
        }
      });
    } else {
    }
  });
}

function generateRandomId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

function saveList() {
  redirectAfterSave = true;
  console.log("saveList function is executing");
  // window.location.href = "bookmarks.html";

  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);
      const currentDate = new Date();
      currentUser.get().then((userDoc) => {

        // const historyList = userDoc.data().historyList;
        const currentHistoryList = userDoc.data().historyList || {}; 
        const currentList = userDoc.data().currentList;
        console.log("Current List: ", currentList);

        const autoId = generateRandomId(6);
        console.log(autoId);

        const newHistoryItem = {
          
            listName: `List ${Object.keys(currentHistoryList).length + 1}`,
            createdDate: currentDate,
            shoppinglist: currentList,
          
        };

        // Append to the existing historyList
        currentHistoryList[autoId] = newHistoryItem;

        // Update Firestore and wait for it to finish
        return currentUser.update({
          historyList: currentHistoryList,
          currentList: firebase.firestore.FieldValue.delete(),
        });
      })
      .then(()=>{
        saveMessage();
        // alert("Your list has been saved.");
        
        // window.location.href = "bookmarks.html";
      });
    } else {
      console.log("Not sign in yet");
    }
  });
  
}

function saveMessage(){
  var messageDiv = document.getElementById("message");
  var paragraph = document.createElement("p");
  
  paragraph.innerHTML = 'Your list has been saved <i class="fa fa-check" aria-hidden="true"></i>';
  messageDiv.appendChild(paragraph);
  messageDiv.style.display = "block";
    setTimeout(function () {
      messageDiv.style.display = "none";
    }, 5000);
}

function deleteMessage(itemId){
  var messageDiv = document.getElementById("message");
  var paragraph = document.createElement("p");
  
  paragraph.innerHTML = 'Item is deleted, undo ?';
  messageDiv.appendChild(paragraph);
  // messageDiv.style.display = "block";
  messageDiv.style.cursor = "pointer";
    setTimeout(function () {
      // messageDiv.style.display = "none";
      messageDiv.innerHTML = "";
    }, 7000);

  function handleUndo() {
    messageDiv.style.cursor = "auto";

    messageDiv.innerHTML = "";

    // Perform undo action (addToList(itemId))
    addToList(itemId);
    // Remove the event listener after it's used
    messageDiv.removeEventListener("click", handleUndo);
  }
  // Add event listener for the undo action
  messageDiv.addEventListener("click", handleUndo);
}

function notSuccessSave(){

}


function unsaveReminder(){
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);

      currentUser.get().then((userDoc) => {
        const currentList = userDoc.data().currentList;
        if (currentList && currentList.length > 0) {
          const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
          alert(confirmationMessage);
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayListDynamically();
});


