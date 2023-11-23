function getNameFromAuth() {
  firebase.auth().onAuthStateChanged(user => {
      // Check if a user is signed in:
      if (user) {
          // Do something for the currently logged-in user here: 
          console.log(user.uid); //print the uid in the browser console
          console.log(user.displayName);  //print the user name in the browser console
          userName = user.displayName;

          // method #1:  insert with JS
          // document.getElementById("name-goes-here").innerText = userName;    

          //method #2:  insert using jquery
          $("#name-goes-here").text(userName); //using jquery

          //method #3:  insert using querySelector
          //document.querySelector("#name-goes-here").innerText = userName

      } else {
          // No user is signed in.
      }
  });
}
getNameFromAuth(); //run the function



function print1() {
  console.log("button 1 walmart working");
  printcheckboxvalue();
}

function print2() {
  console.log("button 2 costco working");
  printcheckboxvalue();
}

function print3() {
  console.log("button 3 saveonfoods working");
  printcheckboxvalue();

}

function print4() {
  console.log("button 4 t&t working");
  printcheckboxvalue();

}

function dosearch() {
  console.log("search button clicked");
  var result = document.getElementById("search").value;
  // alert(result);
  window.location.href = "searchresults.html?value=" + result;

  
}

function enterSearch(e) {
  console.log(e.keyCode);
  if(e.keyCode == 13) {
    dosearch();
  }
}
const conflict = document.querySelector("#search");
conflict.addEventListener("keydown", checkEnter, false);

function checkEnter(event) {
  if(event.keyCode == 13){
    event.preventDefault();
  }
}



function printcheckboxvalue() {
  var walmartbox = document.getElementById('walmartcb').checked;
  var costcobox = document.getElementById('costcocb').checked;
  var saveonfoodsbox = document.getElementById('saveonfoodscb').checked;
  var tntbox = document.getElementById('tntcb').checked;

  console.log(walmartbox + " in main page ");
  console.log(costcobox);
  console.log(saveonfoodsbox);
  console.log(tntbox);

  localStorage.setItem("walmartstat", walmartbox);
}
