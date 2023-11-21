function goToHomePage(){
  window.location.href = "main.html";
}

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
          //this is to change the icon of the hike that was saved to "filled"
        });
    } else {
    }
  });
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