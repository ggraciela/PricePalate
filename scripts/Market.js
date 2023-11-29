//Database for Walmart Store

function allmarket() {
  var walmartbox = (localStorage.getItem("walmartstat") === 'true');
  var costcobox = (localStorage.getItem("costcostat") === 'true');
  var saveonfoodsbox = (localStorage.getItem("saveonfoodsstat") === 'true');
  var tntbox = (localStorage.getItem("tntstat") === 'true');

  var walmartItems = db.collection("market");

  walmartItems.doc("WaB1cD2").set({
    id: "WaB1cD2",
    description: "Fresh and nutritious milk",
    price: 2.99,
    imgurl: "../images/products/milk.jpg",
    productFullName: "Milk",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "milk",
  });

  walmartItems.doc("WxY3zEf").set({
    id: "WxY3zEf",
    description: "Farm-fresh eggs",
    price: 1.99,
    imgurl: "../images/products/egg.jpg",
    productFullName: "Eggs",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "eggs"
  });

  walmartItems.doc("WpQ5rGh").set({
    id: "WpQ5rGh",
    description: "Whole grain bread",
    price: 3.49,
    imgurl: "../images/products/bread.jpg",
    productFullName: "Bread",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "bread"
  });

  walmartItems.doc("WsT6uJk").set({
    id: "WsT6uJk",
    description: "Long-grain white rice",
    price: 4.99,
    imgurl: "../images/products/rice.jpg",
    productFullName: "Rice",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "rice"
  });

  walmartItems.doc("WvW7xYl").set({
    id: "WvW7xYl",
    description: "Penne pasta made from durum wheat",
    price: 1.79,
    imgurl: "../images/products/pasta.jpg",
    productFullName: "Pasta",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "pasta"
  });

  walmartItems.doc("WmZ8aNm").set({
    id: "WmZ8aNm",
    description: "Sweet and crunchy apples",
    price: 0.99,
    imgurl: "../images/products/applesw.png",
    productFullName: "Apples",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "apple"
  });

  walmartItems.doc("WbB9oPn").set({
    id: "WbB9oPn",
    description: "Delicious and ripe bananas",
    price: 0.59,
    imgurl: "../images/products/bananas.jpg",
    productFullName: "Bananas",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "banana"
  });

  walmartItems.doc("WkC0qAr").set({
    id: "WkC0qAr",
    description: "Juicy and refreshing oranges",
    price: 1.29,
    imgurl: "../images/products/oranges.jpg",
    productFullName: "Oranges",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "orange"
  });

  walmartItems.doc("WdD1rBs").set({
    id: "WdD1rBs",
    description: "Crisp lettuce for salads",
    price: 1.49,
    imgurl: "../images/products/lettuce.jpg",
    productFullName: "Lettuce",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "lettuce"
  });

  walmartItems.doc("WlE2sCt").set({
    id: "WlE2sCt",
    description: "Sweet and tangy tomatoes",
    price: 0.79,
    imgurl: "../images/products/tomatoes.jpg",
    productFullName: "Tomatoes",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "tomato"
  });

  walmartItems.doc("WfF3uDv").set({
    id: "WfF3uDv",
    description: "Crunchy carrots",
    price: 0.69,
    imgurl: "../images/products/carrots.jpg",
    productFullName: "Carrots",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "carrot"
  });

  walmartItems.doc("WgG4wEx").set({
    id: "WgG4wEx",
    description: "Fresh chicken breast",
    price: 5.99,
    imgurl: "../images/products/chickenbreast.jpg",
    productFullName: "Chicken Breast",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "chicken"
  });

  walmartItems.doc("WhH5xJy").set({
    id: "WhH5xJy",
    description: "Lean ground beef",
    price: 4.49,
    imgurl: "../images/products/groundbeef.jpg",
    productFullName: "Ground Beef",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "beef"
  });

  walmartItems.doc("WiI6zKz").set({
    id: "WiI6zKz",
    description: "Tender fish fillet",
    price: 6.99,
    imgurl: "../images/products/fish.jpg",
    productFullName: "Fish Fillet",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "fish"
  });

  walmartItems.doc("WjJ7AL1").set({
    id: "WjJ7AL1",
    description: "Creamy butter",
    price: 2.49,
    imgurl: "../images/products/butter.jpg",
    productFullName: "Butter",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "butter"
  });

  walmartItems.doc("WkK8BM2").set({
    id: "WkK8BM2",
    description: "Variety of cheese",
    price: 3.79,
    imgurl: "../images/products/cheese.jpg",
    productFullName: "Cheese",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "cheese"
  });

  walmartItems.doc("WlL9cN3").set({
    id: "WlL9cN3",
    description: "Thick and creamy yogurt",
    price: 1.29,
    imgurl: "../images/products/yogurt.jpg",
    productFullName: "Yogurt",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "yogurt"
  });

  walmartItems.doc("WmM0dO4").set({
    id: "WmM0dO4",
    description: "Healthy and crunchy cereal",
    price: 3.99,
    imgurl: "../images/products/cereal.jpg",
    productFullName: "Cereal",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "cereal"
  });

  walmartItems.doc("WnN1eP5").set({
    id: "WnN1eP5",
    description: "Tasty canned beans",
    price: 1.29,
    imgurl: "../images/products/beans.jpg",
    productFullName: "Canned Beans",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "beans"
  });

  walmartItems.doc("WpP3gR7").set({
    id: "WpP3gR7",
    description: "Variety of frozen vegetables",
    price: 2.79,
    imgurl: "../images/products/frozenvegetables.jpg",
    productFullName: "Frozen Vegetables",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "vegetable"
  });

  walmartItems.doc("WqQ4hS8").set({
    id: "WqQ4hS8",
    description: "Delicious frozen pizza",
    price: 4.99,
    imgurl: "../images/products/frozenpizza.jpg",
    productFullName: "Frozen Pizza",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "frozen pizza"
  });

  walmartItems.doc("WrR5iU9").set({
    id: "WrR5iU9",
    description: "Creamy peanut butter",
    price: 3.29,
    imgurl: "../images/products/peanutbutter.jpg",
    productFullName: "Peanut Butter",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "peanut butter"
  });

  walmartItems.doc("WsS6jV0").set({
    id: "WsS6jV0",
    description: "Sweet jam or jelly",
    price: 2.49,
    imgurl: "../images/products/jam.jpg",
    productFullName: "Jam",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "jam"
  });

  walmartItems.doc("WtT7kW1").set({
    id: "WtT7kW1",
    description: "Crunchy snack chips",
    price: 1.99,
    imgurl: "../images/products/chips.jpg",
    productFullName: "Snack Chips",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "chips"
  });

  walmartItems.doc("WuU8lX2").set({
    id: "WuU8lX2",
    description: "Rich and aromatic coffee",
    price: 8.99,
    imgurl: "../images/products/coffee.jpg",
    productFullName: "Coffee",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "coffee"
  });

  walmartItems.doc("WvV9mY3").set({
    id: "WvV9mY3",
    description: "Variety of tea blends",
    price: 3.49,
    imgurl: "../images/products/tea.jpg",
    productFullName: "Tea",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "tea"
  });

  walmartItems.doc("WwW0nZ4").set({
    id: "WwW0nZ4",
    description: "Refreshing bottled water",
    price: 0.99,
    imgurl: "../images/products/water.jpg",
    productFullName: "Bottled Water",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "water"
  });

  walmartItems.doc("WxX1oA5").set({
    id: "WxX1oA5",
    description: "Soft and gentle toilet paper",
    price: 5.99,
    imgurl: "../images/products/paper.jpg",
    productFullName: "Toilet Paper",
    store: "walmart",
    walmart: true,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/walmartlogo.png",
    keywords: "toilet paper"
  });













  // costco
  var costcoItems = db.collection("market");

  costcoItems.doc("C1a2b3c").set({
    id: "C1a2b3c",
    description: "Fresh and nutritious milk",
    price: 2.49,
    imgurl: "../images/products/milk.jpg",
    productFullName: "Milk",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "milk"
  });

  costcoItems.doc("C4e5f6g").set({
    id: "C4e5f6g",
    description: "Farm-fresh eggs",
    price: 2.29,
    imgurl: "../images/products/egg.jpg",
    productFullName: "Eggs",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "eggs"
  });

  costcoItems.doc("C7h8i9j").set({
    id: "C7h8i9j",
    description: "Whole grain bread",
    price: 3.99,
    imgurl: "../images/products/bread.jpg",
    productFullName: "Bread",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "bread"
  });

  costcoItems.doc("Ck0l1m2").set({
    id: "Ck0l1m2",
    description: "Long-grain white rice",
    price: 5.49,
    imgurl: "../images/products/rice.jpg",
    productFullName: "Rice",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "rice"
  });

  costcoItems.doc("C3n4o5p").set({
    id: "C3n4o5p",
    description: "Penne pasta made from durum wheat",
    price: 1.99,
    imgurl: "../images/products/pasta.jpg",
    productFullName: "Pasta",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "pasta"
  });

  costcoItems.doc("C6q7r8s").set({
    id: "C6q7r8s",
    description: "Sweet and crunchy apples",
    price: 1.19,
    imgurl: "../images/products/applesc.jpg",
    productFullName: "Apples",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "apple"
  });

  costcoItems.doc("C9t0u1v").set({
    id: "C9t0u1v",
    description: "Delicious and ripe bananas",
    price: 0.79,
    imgurl: "../images/products/bananas.jpg",
    productFullName: "Bananas",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "banana"
  });

  costcoItems.doc("C2w3x4y").set({
    id: "C2w3x4y",
    description: "Juicy and refreshing oranges",
    price: 1.59,
    imgurl: "../images/products/oranges.jpg",
    productFullName: "Oranges",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "orange"
  });

  costcoItems.doc("C5z6A7B").set({
    id: "C5z6A7B",
    description: "Crisp lettuce for salads",
    price: 1.29,
    imgurl: "../images/products/lettuce.jpg",
    productFullName: "Lettuce",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "lettuce"
  });

  costcoItems.doc("C8C9d0E").set({
    id: "C8C9d0E",
    description: "Sweet and tangy tomatoes",
    price: 0.89,
    imgurl: "../images/products/tomatoes.jpg",
    productFullName: "Tomatoes",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "tomato"
  });

  costcoItems.doc("C1E2F3G").set({
    id: "C1E2F3G",
    description: "Crunchy carrots",
    price: 0.99,
    imgurl: "../images/products/carrots.jpg",
    productFullName: "Carrots",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "carrot"
  });

  costcoItems.doc("C4G5H6I").set({
    id: "C4G5H6I",
    description: "Fresh chicken breast",
    price: 6.49,
    imgurl: "../images/products/chickenbreast.jpg",
    productFullName: "Chicken Breast",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "chicken"
  });

  costcoItems.doc("C7H8I9J").set({
    id: "C7H8I9J",
    description: "Lean ground beef",
    price: 4.79,
    imgurl: "../images/products/groundbeef.jpg",
    productFullName: "Ground Beef",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "beef"
  });

  costcoItems.doc("C0I1J2K").set({
    id: "C0I1J2K",
    description: "Tender fish fillet",
    price: 7.99,
    imgurl: "../images/products/fish.jpg",
    productFullName: "Fish Fillet",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "fish"
  });

  costcoItems.doc("C3K4L5M").set({
    id: "C3K4L5M",
    description: "Creamy butter",
    price: 2.79,
    imgurl: "../images/products/butter.jpg",
    productFullName: "Butter",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "butter"
  });

  costcoItems.doc("C6M7N8O").set({
    id: "C6M7N8O",
    description: "Variety of cheese",
    price: 3.19,
    imgurl: "../images/products/cheese.jpg",
    productFullName: "Cheese",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "cheese"
  });

  costcoItems.doc("C9N0O1P").set({
    id: "C9N0O1P",
    description: "Thick and creamy yogurt",
    price: 1.39,
    imgurl: "../images/products/yogurt.jpg",
    productFullName: "Yogurt",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "yogurt"
  });

  costcoItems.doc("C2O3P4Q").set({
    id: "C2O3P4Q",
    description: "Healthy and crunchy cereal",
    price: 4.29,
    imgurl: "../images/products/cereal.jpg",
    productFullName: "Cereal",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "cereal"
  });

  costcoItems.doc("C5P6Q7R").set({
    id: "C5P6Q7R",
    description: "Tasty canned beans",
    price: 1.69,
    imgurl: "../images/products/beans.jpg",
    productFullName: "Canned Beans",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "beans"
  });

  costcoItems.doc("C8R9S0T").set({
    id: "C8R9S0T",
    description: "High-quality canned tomatoes",
    price: 1.99,
    imgurl: "../images/products/cannedtomatoes.jpg",
    productFullName: "Canned Tomatoes",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "tomato"
  });

  costcoItems.doc("C1S2T3U").set({
    id: "C1S2T3U",
    description: "Variety of frozen vegetables",
    price: 2.59,
    imgurl: "../images/products/frozenvegetables.jpg",
    productFullName: "Frozen Vegetables",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "vegetable"
  });

  costcoItems.doc("C4U5V6W").set({
    id: "C4U5V6W",
    description: "Delicious frozen pizza",
    price: 5.99,
    imgurl: "../images/products/frozenpizza.jpg",
    productFullName: "Frozen Pizza",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "pizza"
  });

  costcoItems.doc("C7W8X9Y").set({
    id: "C7W8X9Y",
    description: "Creamy peanut butter",
    price: 3.49,
    imgurl: "../images/products/peanutbutter.jpg",
    productFullName: "Peanut Butter",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "peanut butter"
  });

  costcoItems.doc("C0X1Y2Z").set({
    id: "C0X1Y2Z",
    description: "Sweet jam or jelly",
    price: 2.29,
    imgurl: "../images/products/jam.jpg",
    productFullName: "Jam",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "jam"
  });

  costcoItems.doc("C3Y4Z5A").set({
    id: "C3Y4Z5A",
    description: "Crunchy snack chips",
    price: 2.09,
    imgurl: "../images/products/chips.jpg",
    productFullName: "Snack Chips",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "chips"
  });

  costcoItems.doc("C6Z7A8B").set({
    id: "C6Z7A8B",
    description: "Rich and aromatic coffee",
    price: 9.49,
    imgurl: "../images/products/coffee.jpg",
    productFullName: "Coffee",
    store: "costco",
    walmart: walmartbox,
    costco: true,
    saveonfoods: saveonfoodsbox,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/costcologo.png",
    keywords: "coffee"
  });








  // saveonfoods
  var saveonfoodsItems = db.collection("market");

  saveonfoodsItems.doc("Sxxxxxx").set({
    id: "Sxxxxxx",
    description: "Green and sour",
    price: 1.35,
    imgurl: "../images/products/appless.png",
    productFullName: "Green Apples",
    store: "saveonfoods",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: true,
    tnt: tntbox,
    storelogo: "../images/storelogoshort/saveonfoodslogo.png",
    keywords: "apple"
  });









  // t&t
  var tntItems = db.collection("market");

  tntItems.doc("Tyyyyyy").set({
    id: "Tyyyyyy",
    description: "Sweet and crunchy apples",
    price: 1.55,
    imgurl: "../images/products/applest.png",
    productFullName: "Apples",
    store: "t&t",
    walmart: walmartbox,
    costco: costcobox,
    saveonfoods: saveonfoodsbox,
    tnt: true,
    storelogo: "../images/storelogoshort/tntlonglogo.png",
    keywords: "apple"
  });

}