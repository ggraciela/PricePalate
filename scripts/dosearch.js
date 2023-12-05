function dosearch() {

  allmarket();
  var result = document.getElementById("search").value; 
  localStorage.setItem("keywordsearch", result);
  // console.log("search button clicked, value should be stored");

  // var keyword = (localStorage.getItem("keywordsearch"));

  // alert(allResults);

  // displayCardsDynamically("market");
  window.location.href = "searchResults.html?value=" + result;


    firebase.auth().onAuthStateChanged((user) => {
      // Check if a user is signed in:
      // console.log("ENTERING SECOND FUNCTION")
      if (user) {
        const currentUser = db.collection("users").doc(user.uid);
        currentUser
          .update({
            // myNewField:"keywordsearch",
            // keywordsearch: firebase.firestore.FieldValue.String(result),
            keywordsearch: result,

          })
          // Handle the front-end update to change the icon, providing visual feedback to the user that it has been clicked.
          .then(function () {
            // console.log("product has been added into shoppinglist" + productId);
            // var itemID = "item-" + productId;
            console.log(result);
          });
      } else {
      }
    });
}