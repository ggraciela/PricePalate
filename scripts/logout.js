//---------------------------------
// Your own functions here
//---------------------------------
//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      const currentUser = db.collection("users").doc(user.uid);

      currentUser.get().then((userDoc) => {
        const currentList = userDoc.data().currentList;
        if (currentList && currentList.length > 0) {
          const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
          const flag = confirm(confirmationMessage);
          if(flag){
            logoutAction()
          }
        }else {
          // Empty currentList process Log out
          logoutAction()
        }
      });
    }
  });
    
}

function logoutAction(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log("logging out user");
    window.location.href = "index.html";
  })
  .catch((error) => {
    // An error happened.
  });
}

function sayHello() {
    //do something
}
//sayHello();    //invoke function

