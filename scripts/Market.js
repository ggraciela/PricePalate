//Database for Walmart Store

function wmarket() {
  var walmartbox = (localStorage.getItem("walmartstat") === 'true');
  var costcobox = (localStorage.getItem("costcostat") === 'true');
  var saveonfoodsbox = (localStorage.getItem("saveonfoodsstat") === 'true');
  var tntbox = (localStorage.getItem("tntstat") === 'true');

  var walmartItems = db.collection("market");

  walmartItems.doc("aB1cD2").set({
    id: "aB1cD2",
    description: "Fresh and nutritious milk",
    price: 2.99,
    imgurl: "../images/products/milk.jpg",
    productFullName: "Milk",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "milk",
  });

  walmartItems.doc("xY3zEf").set({
    id: "xY3zEf",
    description: "Farm-fresh eggs",
    price: 1.99,
    imgurl: "../images/products/egg.jpg",
    productFullName: "Eggs",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "eggs"
  });

  walmartItems.doc("pQ5rGh").set({
    id: "pQ5rGh",
    description: "Whole grain bread",
    price: 3.49,
    imgurl: "../images/products/bread.jpg",
    productFullName: "Bread",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "bread"
  });

  walmartItems.doc("sT6uJk").set({
    id: "sT6uJk",
    description: "Long-grain white rice",
    price: 4.99,
    imgurl: "../images/products/rice.jpg",
    productFullName: "Rice",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "rice"
  });

  walmartItems.doc("vW7xYl").set({
    id: "vW7xYl",
    description: "Penne pasta made from durum wheat",
    price: 1.79,
    imgurl: "../images/products/pasta.jpg",
    productFullName: "Pasta",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "pasta"
  });

  walmartItems.doc("mZ8aNm").set({
    id: "mZ8aNm",
    description: "Sweet and crunchy apples",
    price: 0.99,
    imgurl: "../images/products/apples.jpg",
    productFullName: "Apples",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "apple"
  });

  walmartItems.doc("bB9oPn").set({
    id: "bB9oPn",
    description: "Delicious and ripe bananas",
    price: 0.59,
    imgurl: "../images/products/bananas.jpg",
    productFullName: "Bananas",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "banana"
  });

  walmartItems.doc("kC0qAr").set({
    id: "kC0qAr",
    description: "Juicy and refreshing oranges",
    price: 1.29,
    imgurl: "../images/products/oranges.jpg",
    productFullName: "Oranges",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "orange"
  });

  walmartItems.doc("dD1rBs").set({
    id: "dD1rBs",
    description: "Crisp lettuce for salads",
    price: 1.49,
    imgurl: "../images/products/lettuce.jpg",
    productFullName: "Lettuce",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "lettuce"
  });

  walmartItems.doc("lE2sCt").set({
    id: "lE2sCt",
    description: "Sweet and tangy tomatoes",
    price: 0.79,
    imgurl: "../images/products/tomatoes.jpg",
    productFullName: "Tomatoes",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "tomato"
  });

  walmartItems.doc("fF3uDv").set({
    id: "fF3uDv",
    description: "Crunchy carrots",
    price: 0.69,
    imgurl: "../images/products/carrots.jpg",
    productFullName: "Carrots",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "carrot"
  });

  walmartItems.doc("gG4wEx").set({
    id: "gG4wEx",
    description: "Fresh chicken breast",
    price: 5.99,
    imgurl: "../images/products/chickenbreast.jpg",
    productFullName: "Chicken Breast",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "chicken"
  });

  walmartItems.doc("hH5xJy").set({
    id: "hH5xJy",
    description: "Lean ground beef",
    price: 4.49,
    imgurl: "../images/products/groundbeef.jpg",
    productFullName: "Ground Beef",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "beef"
  });

  walmartItems.doc("iI6zKz").set({
    id: "iI6zKz",
    description: "Tender fish fillet",
    price: 6.99,
    imgurl: "../images/products/fish.jpg",
    productFullName: "Fish Fillet",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "fish"
  });

  walmartItems.doc("jJ7AL1").set({
    id: "jJ7AL1",
    description: "Creamy butter",
    price: 2.49,
    imgurl: "../images/products/butter.jpg",
    productFullName: "Butter",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "butter"
  });

  walmartItems.doc("kK8BM2").set({
    id: "kK8BM2",
    description: "Variety of cheese",
    price: 3.79,
    imgurl: "../images/products/cheese.jpg",
    productFullName: "Cheese",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "cheese"
  });

  walmartItems.doc("lL9cN3").set({
    id: "lL9cN3",
    description: "Thick and creamy yogurt",
    price: 1.29,
    imgurl: "../images/products/yogurt.jpg",
    productFullName: "Yogurt",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "yogurt"
  });

  walmartItems.doc("mM0dO4").set({
    id: "mM0dO4",
    description: "Healthy and crunchy cereal",
    price: 3.99,
    imgurl: "../images/products/cereal.jpg",
    productFullName: "Cereal",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "cereal"
  });

  walmartItems.doc("nN1eP5").set({
    id: "nN1eP5",
    description: "Tasty canned beans",
    price: 1.29,
    imgurl: "../images/products/beans.jpg",
    productFullName: "Canned Beans",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "beans"
  });

  walmartItems.doc("pP3gR7").set({
    id: "pP3gR7",
    description: "Variety of frozen vegetables",
    price: 2.79,
    imgurl: "../images/products/frozenvegetables.jpg",
    productFullName: "Frozen Vegetables",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "vegetable"
  });

  walmartItems.doc("qQ4hS8").set({
    id: "qQ4hS8",
    description: "Delicious frozen pizza",
    price: 4.99,
    imgurl: "../images/products/frozenpizza.jpg",
    productFullName: "Frozen Pizza",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "frozen pizza"
  });

  walmartItems.doc("rR5iU9").set({
    id: "rR5iU9",
    description: "Creamy peanut butter",
    price: 3.29,
    imgurl: "../images/products/peanutbutter.jpg",
    productFullName: "Peanut Butter",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "peanut butter"
  });

  walmartItems.doc("sS6jV0").set({
    id: "sS6jV0",
    description: "Sweet jam or jelly",
    price: 2.49,
    imgurl: "../images/products/jam.jpg",
    productFullName: "Jam",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "jam"
  });

  walmartItems.doc("tT7kW1").set({
    id: "tT7kW1",
    description: "Crunchy snack chips",
    price: 1.99,
    imgurl: "../images/products/chips.jpg",
    productFullName: "Snack Chips",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "chips"
  });

  walmartItems.doc("uU8lX2").set({
    id: "uU8lX2",
    description: "Rich and aromatic coffee",
    price: 8.99,
    imgurl: "../images/products/coffee.jpg",
    productFullName: "Coffee",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "coffee"
  });

  walmartItems.doc("vV9mY3").set({
    id: "vV9mY3",
    description: "Variety of tea blends",
    price: 3.49,
    imgurl: "../images/products/tea.jpg",
    productFullName: "Tea",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "tea"
  });

  walmartItems.doc("wW0nZ4").set({
    id: "wW0nZ4",
    description: "Refreshing bottled water",
    price: 0.99,
    imgurl: "../images/products/water.jpg",
    productFullName: "Bottled Water",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "water"
  });

  walmartItems.doc("xX1oA5").set({
    id: "xX1oA5",
    description: "Soft and gentle toilet paper",
    price: 5.99,
    imgurl: "../images/products/paper.jpg",
    productFullName: "Toilet Paper",
    store: "walmart",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "toilet paper"
  });
}


//Database for Costco Store

function cmarket() {
  var walmartbox = (localStorage.getItem("walmartstat") === 'true');
  var costcobox = (localStorage.getItem("costcostat") === 'true');
  var saveonfoodsbox = (localStorage.getItem("saveonfoodsstat") === 'true');
  var tntbox = (localStorage.getItem("tntstat") === 'true');

  var costcoItems = db.collection("market");

  costcoItems.doc("1a2b3c").set({
    id: "1a2b3c",
    description: "Fresh and nutritious milk",
    price: 2.49,
    imgurl: "../images/products/milk.jpg",
    productFullName: "Milk",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "milk"
  });

  costcoItems.doc("4e5f6g").set({
    id: "4e5f6g",
    description: "Farm-fresh eggs",
    price: 2.29,
    imgurl: "../images/products/egg.jpg",
    productFullName: "Eggs",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "eggs"
  });

  costcoItems.doc("7h8i9j").set({
    id: "7h8i9j",
    description: "Whole grain bread",
    price: 3.99,
    imgurl: "../images/products/bread.jpg",
    productFullName: "Bread",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "bread"
  });

  costcoItems.doc("k0l1m2").set({
    id: "k0l1m2",
    description: "Long-grain white rice",
    price: 5.49,
    imgurl: "../images/products/rice.jpg",
    productFullName: "Rice",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "rice"
  });

  costcoItems.doc("3n4o5p").set({
    id: "3n4o5p",
    description: "Penne pasta made from durum wheat",
    price: 1.99,
    imgurl: "../images/products/pasta.jpg",
    productFullName: "Pasta",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "pasta"
  });

  costcoItems.doc("6q7r8s").set({
    id: "6q7r8s",
    description: "Sweet and crunchy apples",
    price: 1.19,
    imgurl: "../images/products/apples.jpg",
    productFullName: "Apples",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "apple"
  });

  costcoItems.doc("9t0u1v").set({
    id: "9t0u1v",
    description: "Delicious and ripe bananas",
    price: 0.79,
    imgurl: "../images/products/bananas.jpg",
    productFullName: "Bananas",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "banana"
  });

  costcoItems.doc("2w3x4y").set({
    id: "2w3x4y",
    description: "Juicy and refreshing oranges",
    price: 1.59,
    imgurl: "../images/products/oranges.jpg",
    productFullName: "Oranges",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "orange"
  });

  costcoItems.doc("5z6A7B").set({
    id: "5z6A7B",
    description: "Crisp lettuce for salads",
    price: 1.29,
    imgurl: "../images/products/lettuce.jpg",
    productFullName: "Lettuce",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "lettuce"
  });

  costcoItems.doc("8C9d0E").set({
    id: "8C9d0E",
    description: "Sweet and tangy tomatoes",
    price: 0.89,
    imgurl: "../images/products/tomatoes.jpg",
    productFullName: "Tomatoes",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "tomato"
  });

  costcoItems.doc("1E2F3G").set({
    id: "1E2F3G",
    description: "Crunchy carrots",
    price: 0.99,
    imgurl: "../images/products/carrots.jpg",
    productFullName: "Carrots",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "carrot"
  });

  costcoItems.doc("4G5H6I").set({
    id: "4G5H6I",
    description: "Fresh chicken breast",
    price: 6.49,
    imgurl: "../images/products/chickenbreast.jpg",
    productFullName: "Chicken Breast",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "chicken"
  });

  costcoItems.doc("7H8I9J").set({
    id: "7H8I9J",
    description: "Lean ground beef",
    price: 4.79,
    imgurl: "../images/products/groundbeef.jpg",
    productFullName: "Ground Beef",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "beef"
  });

  costcoItems.doc("0I1J2K").set({
    id: "0I1J2K",
    description: "Tender fish fillet",
    price: 7.99,
    imgurl: "../images/products/fish.jpg",
    productFullName: "Fish Fillet",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "fish"
  });

  costcoItems.doc("3K4L5M").set({
    id: "3K4L5M",
    description: "Creamy butter",
    price: 2.79,
    imgurl: "../images/products/butter.jpg",
    productFullName: "Butter",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "butter"
  });

  costcoItems.doc("6M7N8O").set({
    id: "6M7N8O",
    description: "Variety of cheese",
    price: 3.19,
    imgurl: "../images/products/cheese.jpg",
    productFullName: "Cheese",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "cheese"
  });

  costcoItems.doc("9N0O1P").set({
    id: "9N0O1P",
    description: "Thick and creamy yogurt",
    price: 1.39,
    imgurl: "../images/products/yogurt.jpg",
    productFullName: "Yogurt",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "yogurt"
  });

  costcoItems.doc("2O3P4Q").set({
    id: "2O3P4Q",
    description: "Healthy and crunchy cereal",
    price: 4.29,
    imgurl: "../images/products/cereal.jpg",
    productFullName: "Cereal",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "cereal"
  });

  costcoItems.doc("5P6Q7R").set({
    id: "5P6Q7R",
    description: "Tasty canned beans",
    price: 1.69,
    imgurl: "../images/products/beans.jpg",
    productFullName: "Canned Beans",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "beans"
  });

  costcoItems.doc("8R9S0T").set({
    id: "8R9S0T",
    description: "High-quality canned tomatoes",
    price: 1.99,
    imgurl: "../images/products/cannedtomatoes.jpg",
    productFullName: "Canned Tomatoes",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "tomato"
  });

  costcoItems.doc("1S2T3U").set({
    id: "1S2T3U",
    description: "Variety of frozen vegetables",
    price: 2.59,
    imgurl: "../images/products/frozenvegetables.jpg",
    productFullName: "Frozen Vegetables",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "vegetable"
  });

  costcoItems.doc("4U5V6W").set({
    id: "4U5V6W",
    description: "Delicious frozen pizza",
    price: 5.99,
    imgurl: "../images/products/frozenpizza.jpg",
    productFullName: "Frozen Pizza",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "pizza"
  });

  costcoItems.doc("7W8X9Y").set({
    id: "7W8X9Y",
    description: "Creamy peanut butter",
    price: 3.49,
    imgurl: "../images/products/peanutbutter.jpg",
    productFullName: "Peanut Butter",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "peanut butter"
  });

  costcoItems.doc("0X1Y2Z").set({
    id: "0X1Y2Z",
    description: "Sweet jam or jelly",
    price: 2.29,
    imgurl: "../images/products/jam.jpg",
    productFullName: "Jam",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "jam"
  });

  costcoItems.doc("3Y4Z5A").set({
    id: "3Y4Z5A",
    description: "Crunchy snack chips",
    price: 2.09,
    imgurl: "../images/products/chips.jpg",
    productFullName: "Snack Chips",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "chips"
  });

  costcoItems.doc("6Z7A8B").set({
    id: "6Z7A8B",
    description: "Rich and aromatic coffee",
    price: 9.49,
    imgurl: "../images/products/coffee.jpg",
    productFullName: "Coffee",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "coffee"
  });
}


function smarket() {
  var walmartbox = (localStorage.getItem("walmartstat") === 'true');
  var costcobox = (localStorage.getItem("costcostat") === 'true');
  var saveonfoodsbox = (localStorage.getItem("saveonfoodsstat") === 'true');
  var tntbox = (localStorage.getItem("tntstat") === 'true');

  var saveonfoodsItems = db.collection("market");

  saveonfoodsItems.doc("xxxxxx").set({
    id: "xxxxxx",
    description: "Fresh and nutritious milk",
    price: 2.49,
    imgurl: "../images/products/milk.jpg",
    productFullName: "Milk",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/saveonfoodslogo.png",
    keywords: "milk"
  });
}

function tmarket() {
  var walmartbox = (localStorage.getItem("walmartstat") === 'true');
  var costcobox = (localStorage.getItem("costcostat") === 'true');
  var saveonfoodsbox = (localStorage.getItem("saveonfoodsstat") === 'true');
  var tntbox = (localStorage.getItem("tntstat") === 'true');

  var tntItems = db.collection("market");

  tntItems.doc("yyyyyy").set({
    id: "yyyyyy",
    description: "Fresh and nutritious milk",
    price: 2.49,
    imgurl: "../images/products/milk.jpg",
    productFullName: "Milk",
    store: "costco",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/tntlonglogo.png",
    keywords: "milk"
  });
}