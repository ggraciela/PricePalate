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




function printcheckboxvalue() {
  var walmartbox = document.getElementById('walmartcb').checked;
  var costcobox = document.getElementById('costcocb').checked;
  var saveonfoodsbox = document.getElementById('saveonfoodscb').checked;
  var tntbox = document.getElementById('tntcb').checked;

  console.log(walmartbox + " in main page ");
  console.log(costcobox);
  console.log(saveonfoodsbox);
  console.log(tntbox);

  localStorage.setItem("walmart", walmartbox);
}
