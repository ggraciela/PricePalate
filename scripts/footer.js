function searchwithlastkeyword(){
  var keyword = (localStorage.getItem("keywordsearch"));

  document.getElementById("searchpage").style.color = "#39A36A";

  if (keyword != null) {
    window.location.href = "searchResults.html?value=" + keyword;
  } else {
    window.location.href = "searchResults.html"
  }

  if (window.location.href.includes("searchResults.html")) {
    document.getElementById("searchpage").style.color = "#39A36A";
  }
}