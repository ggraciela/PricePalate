function print1() {
  console.log("button 1 walmart working");
}

function print2() {
  console.log("button 2 costco working");
}

function print3() {
  console.log("button 3 saveonfoods working");
}

function print4() {
  console.log("button 4 t&t working");
}

function dosearch() {
  console.log("search button clicked");
  var result = document.getElementById("search").value;
  // alert(result);
  window.location.href = "searchresults.html?value=" + result;
 
  // displayCardsDynamically("market");
}


var walmartbox = document.getElementById('walmartcb').checked;
var costcobox = document.getElementById('costcocb').checked;
var saveonfoodsbox = document.getElementById('saveonfoodscb').checked;
var tntbox = document.getElementById('tntcb').checked;
