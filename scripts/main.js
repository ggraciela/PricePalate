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

    }  // else.. No user is signed in.
  });
}
getNameFromAuth(); //run the function



function print1() {
  console.log("button 1 walmart working");
  printcheckboxvalue();
  // allmarket();
}

function print2() {
  console.log("button 2 costco working");
  printcheckboxvalue();
  // allmarket();
}

function print3() {
  console.log("button 3 saveonfoods working");
  printcheckboxvalue();
  // allmarket();

}

function print4() {
  console.log("button 4 t&t working");
  printcheckboxvalue();
  // allmarket();

}

// function dosearch() {
//   allmarket();
//   console.log("search button clicked");
//   var result = document.getElementById("search").value;
//   // alert(allResults);

//   // displayCardsDynamically("market");
//     window.location.href = "searchresults.html?value=" + result;
// }

function enterSearch(e) {
  console.log(e.keyCode);
  if (e.keyCode == 13) {
    allmarket();
    dosearch();
  }
}
const conflict = document.querySelector("#search");
conflict.addEventListener("keydown", checkEnter, false);

function checkEnter(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
}



function printcheckboxvalue() {

  let walmartbox = document.getElementById('walmartcb').checked;

  // var walmartbox = document.getElementById('walmartcb').checked;
  var costcobox = document.getElementById('costcocb').checked;
  var saveonfoodsbox = document.getElementById('saveonfoodscb').checked;
  var tntbox = document.getElementById('tntcb').checked;

  console.log(walmartbox + " , walmart, in main page");
  console.log(costcobox + " , costco, in main page");
  console.log(saveonfoodsbox + " , saveonfoods, in main page");
  console.log(tntbox + " , t&t, in main page");

  // save value in local storage, so the value can be retrieved in another page

  // if(walmartbox === true){
  //   localStorage.setItem("walmartstat", "true");
  // }
  // else {
  //   localStorage.setItem("walmartstat", "false");
  // }

  // localStorage.setItem('walmartstat', JSON.stringify(walmartbox));


  // if no checkboxes are ticked, all checkboxes will have the value set to be ticked so that it shows all matching data from all the stores
  if (walmartbox === false && costcobox === false && saveonfoodsbox === false && tntbox === false) {
    localStorage.setItem("walmartstat", true);
    localStorage.setItem("costcostat", true);
    localStorage.setItem("saveonfoodsstat", true);
    localStorage.setItem("tntstat", true);
  } else {
    localStorage.setItem("walmartstat", walmartbox);
    localStorage.setItem("costcostat", costcobox);
    localStorage.setItem("saveonfoodsstat", saveonfoodsbox);
    localStorage.setItem("tntstat", tntbox);
  }

  allmarket();

  // console.log(typeof walmartbox);
  // console.log(typeof walmartstat);
  // console.log(walmartstat);
  // console.log(walmartstat.value);

}

printcheckboxvalue();

