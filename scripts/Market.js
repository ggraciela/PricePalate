//Database for Walmart Store
function wmarket() {
  var walmartItems = db.collection("market");

  walmartItems.doc("aB1cD2").set({
    id: "aB1cD2",
    description: "Fresh and nutritious milk",
    price: 2.99,
    imgurl: "../images/products/milk.jpg",
    productFullName: "Milk",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("xY3zEf").set({
    id: "xY3zEf",
    description: "Farm-fresh eggs",
    price: 1.99,
    imgurl: "../images/products/eggs.jpg",
    productFullName: "Eggs",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("pQ5rGh").set({
    id: "pQ5rGh",
    description: "Whole grain bread",
    price: 3.49,
    imgurl: "../images/products/bread.jpg",
    productFullName: "Bread",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("sT6uJk").set({
    id: "sT6uJk",
    description: "Long-grain white rice",
    price: 4.99,
    imgurl: "../images/products/rice.jpg",
    productFullName: "Rice",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("vW7xYl").set({
    id: "vW7xYl",
    description: "Penne pasta made from durum wheat",
    price: 1.79,
    imgurl: "../images/products/pasta.jpg",
    productFullName: "Pasta",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("mZ8aNm").set({
    id: "mZ8aNm",
    description: "Sweet and crunchy apples",
    price: 0.99,
    imgurl: "../images/products/apples.jpg",
    productFullName: "Apples",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("bB9oPn").set({
    id: "bB9oPn",
    description: "Delicious and ripe bananas",
    price: 0.59,
    imgurl: "../images/products/bananas.jpg",
    productFullName: "Bananas",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("kC0qAr").set({
    id: "kC0qAr",
    description: "Juicy and refreshing oranges",
    price: 1.29,
    imgurl: "../images/products/oranges.jpg",
    productFullName: "Oranges",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("dD1rBs").set({
    id: "dD1rBs",
    description: "Crisp lettuce for salads",
    price: 1.49,
    imgurl: "../images/products/lettuce.jpg",
    productFullName: "Lettuce",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("lE2sCt").set({
    id: "lE2sCt",
    description: "Sweet and tangy tomatoes",
    price: 0.79,
    imgurl: "../images/products/tomatoes.jpg",
    productFullName: "Tomatoes",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("fF3uDv").set({
    id: "fF3uDv",
    description: "Crunchy carrots",
    price: 0.69,
    imgurl: "../images/products/carrots.jpg",
    productFullName: "Carrots",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("gG4wEx").set({
    id: "gG4wEx",
    description: "Fresh chicken breast",
    price: 5.99,
    imgurl: "../images/products/chicken.jpg",
    productFullName: "Chicken Breast",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("hH5xJy").set({
    id: "hH5xJy",
    description: "Lean ground beef",
    price: 4.49,
    imgurl: "../images/products/beef.jpg",
    productFullName: "Ground Beef",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("iI6zKz").set({
    id: "iI6zKz",
    description: "Tender fish fillet",
    price: 6.99,
    imgurl: "../images/products/fish.jpg",
    productFullName: "Fish Fillet",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("jJ7AL1").set({
    id: "jJ7AL1",
    description: "Creamy butter",
    price: 2.49,
    imgurl: "../images/products/butter.jpg",
    productFullName: "Butter",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("kK8BM2").set({
    id: "kK8BM2",
    description: "Variety of cheese",
    price: 3.79,
    imgurl: "../images/products/cheese.jpg",
    productFullName: "Cheese",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("lL9cN3").set({
    id: "lL9cN3",
    description: "Thick and creamy yogurt",
    price: 1.29,
    imgurl: "../images/products/yogurt.jpg",
    productFullName: "Yogurt",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("mM0dO4").set({
    id: "mM0dO4",
    description: "Healthy and crunchy cereal",
    price: 3.99,
    imgurl: "../images/products/cereal.jpg",
    productFullName: "Cereal",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("nN1eP5").set({
    id: "nN1eP5",
    description: "Tasty canned beans",
    price: 1.29,
    imgurl: "../images/products/beans.jpg",
    productFullName: "Canned Beans",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("oO2fQ6").set({
    id: "oO2fQ6",
    description: "High-quality canned tomatoes",
    price: 1.49,
    imgurl: "../images/products/tomatoes-canned.jpg",
    productFullName: "Canned Tomatoes",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("pP3gR7").set({
    id: "pP3gR7",
    description: "Variety of frozen vegetables",
    price: 2.79,
    imgurl: "../images/products/frozen-vegetables.jpg",
    productFullName: "Frozen Vegetables",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("qQ4hS8").set({
    id: "qQ4hS8",
    description: "Delicious frozen pizza",
    price: 4.99,
    imgurl: "../images/products/frozen-pizza.jpg",
    productFullName: "Frozen Pizza",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("rR5iU9").set({
    id: "rR5iU9",
    description: "Creamy peanut butter",
    price: 3.29,
    imgurl: "../images/products/peanut-butter.jpg",
    productFullName: "Peanut Butter",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("sS6jV0").set({
    id: "sS6jV0",
    description: "Sweet jam or jelly",
    price: 2.49,
    imgurl: "../images/products/jam.jpg",
    productFullName: "Jam",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("tT7kW1").set({
    id: "tT7kW1",
    description: "Crunchy snack chips",
    price: 1.99,
    imgurl: "../images/products/chips.jpg",
    productFullName: "Snack Chips",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("uU8lX2").set({
    id: "uU8lX2",
    description: "Rich and aromatic coffee",
    price: 8.99,
    imgurl: "../images/products/coffee.jpg",
    productFullName: "Coffee",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("vV9mY3").set({
    id: "vV9mY3",
    description: "Variety of tea blends",
    price: 3.49,
    imgurl: "../images/products/tea.jpg",
    productFullName: "Tea",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png",
  });

  walmartItems.doc("wW0nZ4").set({
    id: "wW0nZ4",
    description: "Refreshing bottled water",
    price: 0.99,
    imgurl: "../images/products/bottled-water.jpg",
    productFullName: "Bottled Water",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });

  walmartItems.doc("xX1oA5").set({
    id: "xX1oA5",
    description: "Soft and gentle toilet paper",
    price: 5.99,
    imgurl: "../images/products/toilet-paper-soft.jpg",
    productFullName: "Toilet Paper",
    store: "walmart",
    storelogo : "../images/storelogoshort/walmartlogo.png"
  });
}


//Database for Costco Store

function cmarket() {
  var costcoItems = db.collection("market");

  costcoItems.doc("1a2b3c").set({
    id: "1a2b3c",
    description: "Fresh and nutritious milk",
    price: 2.49,
    imgurl: "../images/products/milk.jpg",
    productFullName: "Milk",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("4e5f6g").set({
    id: "4e5f6g",
    description: "Farm-fresh eggs",
    price: 2.29,
    imgurl: "../images/products/eggs.jpg",
    productFullName: "Eggs",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("7h8i9j").set({
    id: "7h8i9j",
    description: "Whole grain bread",
    price: 3.99,
    imgurl: "../images/products/bread.jpg",
    productFullName: "Bread",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("k0l1m2").set({
    id: "k0l1m2",
    description: "Long-grain white rice",
    price: 5.49,
    imgurl: "../images/products/rice.jpg",
    productFullName: "Rice",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("3n4o5p").set({
    id: "3n4o5p",
    description: "Penne pasta made from durum wheat",
    price: 1.99,
    imgurl: "../images/products/pasta.jpg",
    productFullName: "Pasta",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("6q7r8s").set({
    id: "6q7r8s",
    description: "Sweet and crunchy apples",
    price: 1.19,
    imgurl: "../images/products/apples.jpg",
    productFullName: "Apples",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("9t0u1v").set({
    id: "9t0u1v",
    description: "Delicious and ripe bananas",
    price: 0.79,
    imgurl: "../images/products/bananas.jpg",
    productFullName: "Bananas",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("2w3x4y").set({
    id: "2w3x4y",
    description: "Juicy and refreshing oranges",
    price: 1.59,
    imgurl: "../images/products/oranges.jpg",
    productFullName: "Oranges",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("5z6A7B").set({
    id: "5z6A7B",
    description: "Crisp lettuce for salads",
    price: 1.29,
    imgurl: "../images/products/lettuce.jpg",
    productFullName: "Lettuce",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("8C9d0E").set({
    id: "8C9d0E",
    description: "Sweet and tangy tomatoes",
    price: 0.89,
    imgurl: "../images/products/tomatoes.jpg",
    productFullName: "Tomatoes",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("1E2F3G").set({
    id: "1E2F3G",
    description: "Crunchy carrots",
    price: 0.99,
    imgurl: "../images/products/carrots.jpg",
    productFullName: "Carrots",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("4G5H6I").set({
    id: "4G5H6I",
    description: "Fresh chicken breast",
    price: 6.49,
    imgurl: "../images/products/chicken.jpg",
    productFullName: "Chicken Breast",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("7H8I9J").set({
    id: "7H8I9J",
    description: "Lean ground beef",
    price: 4.79,
    imgurl: "../images/products/beef.jpg",
    productFullName: "Ground Beef",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("0I1J2K").set({
    id: "0I1J2K",
    description: "Tender fish fillet",
    price: 7.99,
    imgurl: "../images/products/fish.jpg",
    productFullName: "Fish Fillet",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("3K4L5M").set({
    id: "3K4L5M",
    description: "Creamy butter",
    price: 2.79,
    imgurl: "../images/products/butter.jpg",
    productFullName: "Butter",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("6M7N8O").set({
    id: "6M7N8O",
    description: "Variety of cheese",
    price: 3.19,
    imgurl: "../images/products/cheese.jpg",
    productFullName: "Cheese",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("9N0O1P").set({
    id: "9N0O1P",
    description: "Thick and creamy yogurt",
    price: 1.39,
    imgurl: "../images/products/yogurt.jpg",
    productFullName: "Yogurt",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("2O3P4Q").set({
    id: "2O3P4Q",
    description: "Healthy and crunchy cereal",
    price: 4.29,
    imgurl: "../images/products/cereal.jpg",
    productFullName: "Cereal",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("5P6Q7R").set({
    id: "5P6Q7R",
    description: "Tasty canned beans",
    price: 1.69,
    imgurl: "../images/products/beans.jpg",
    productFullName: "Canned Beans",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("8R9S0T").set({
    id: "8R9S0T",
    description: "High-quality canned tomatoes",
    price: 1.99,
    imgurl: "../images/products/tomatoes-canned.jpg",
    productFullName: "Canned Tomatoes",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("1S2T3U").set({
    id: "1S2T3U",
    description: "Variety of frozen vegetables",
    price: 2.59,
    imgurl: "../images/products/frozen-vegetables.jpg",
    productFullName: "Frozen Vegetables",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("4U5V6W").set({
    id: "4U5V6W",
    description: "Delicious frozen pizza",
    price: 5.99,
    imgurl: "../images/products/frozen-pizza.jpg",
    productFullName: "Frozen Pizza",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("7W8X9Y").set({
    id: "7W8X9Y",
    description: "Creamy peanut butter",
    price: 3.49,
    imgurl: "../images/products/peanut-butter.jpg",
    productFullName: "Peanut Butter",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("0X1Y2Z").set({
    id: "0X1Y2Z",
    description: "Sweet jam or jelly",
    price: 2.29,
    imgurl: "../images/products/jam.jpg",
    productFullName: "Jam",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("3Y4Z5A").set({
    id: "3Y4Z5A",
    description: "Crunchy snack chips",
    price: 2.09,
    imgurl: "../images/products/chips.jpg",
    productFullName: "Snack Chips",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });

  costcoItems.doc("6Z7A8B").set({
    id: "6Z7A8B",
    description: "Rich and aromatic coffee",
    price: 9.49,
    imgurl: "../images/products/coffee.jpg",
    productFullName: "Coffee",
   store: "costco",
    storelogo : "../images/storelogoshort/costcologo.png",
  });
}
