function Wmarket() {

  var walmartItems = db.collection("walmart");


  walmartItems.add({
      itemid: "aB1cD2",
      description: "Fresh and nutritious milk",
      price: 2.99,
      imgurl: "https://example.com/milk.jpg",
      productFullName: "Milk"
    });

  walmartItems.add({
     itemid: "xY3zEf",
     description: "Farm-fresh eggs",
     price: 1.99,
     imgurl: "https://example.com/eggs.jpg",
     productFullName: "Eggs"
    });

  
  walmartItems.add({
     itemid: "pQ5rGh",
     description: "Whole grain bread",
     price: 3.49,
     imgurl: "https://example.com/bread.jpg",
     productFullName: "Bread"
    });

    // {
    //   "id": "sT6uJk",
    //   "description": "Long-grain white rice",
    //   "price": 4.99,
    //   "img-url": "https://example.com/rice.jpg",
    //   "productFullName": "Rice"
    // },
    // {
    //   "id": "vW7xYl",
    //   "description": "Penne pasta made from durum wheat",
    //   "price": 1.79,
    //   "img-url": "https://example.com/pasta.jpg",
    //   "productFullName": "Pasta"
    // },
    // {
    //   "id": "mZ8aNm",
    //   "description": "Sweet and crunchy apples",
    //   "price": 0.99,
    //   "img-url": "https://example.com/apples.jpg",
    //   "productFullName": "Apples"
    // },
    // {
    //   "id": "bB9oPn",
    //   "description": "Delicious and ripe bananas",
    //   "price": 0.59,
    //   "img-url": "https://example.com/bananas.jpg",
    //   "productFullName": "Bananas"
    // },
    // {
    //   "id": "kC0qAr",
    //   "description": "Juicy and refreshing oranges",
    //   "price": 1.29,
    //   "img-url": "https://example.com/oranges.jpg",
    //   "productFullName": "Oranges"
    // },
    // {
    //   "id": "dD1rBs",
    //   "description": "Crisp lettuce for salads",
    //   "price": 1.49,
    //   "img-url": "https://example.com/lettuce.jpg",
    //   "productFullName": "Lettuce"
    // },
    // {
    //   "id": "lE2sCt",
    //   "description": "Sweet and tangy tomatoes",
    //   "price": 0.79,
    //   "img-url": "https://example.com/tomatoes.jpg",
    //   "productFullName": "Tomatoes"
    // },
    // {
    //   "id": "fF3uDv",
    //   "description": "Crunchy carrots",
    //   "price": 0.69,
    //   "img-url": "https://example.com/carrots.jpg",
    //   "productFullName": "Carrots"
    // },
    // {
    //   "id": "gG4wEx",
    //   "description": "Fresh chicken breast",
    //   "price": 5.99,
    //   "img-url": "https://example.com/chicken.jpg",
    //   "productFullName": "Chicken Breast"
    // },
    // {
    //   "id": "hH5xJy",
    //   "description": "Lean ground beef",
    //   "price": 4.49,
    //   "img-url": "https://example.com/beef.jpg",
    //   "productFullName": "Ground Beef"
    // },
    // {
    //   "id": "iI6zKz",
    //   "description": "Tender fish fillet",
    //   "price": 6.99,
    //   "img-url": "https://example.com/fish.jpg",
    //   "productFullName": "Fish Fillet"
    // },
    // {
    //   "id": "jJ7AL1",
    //   "description": "Creamy butter",
    //   "price": 2.49,
    //   "img-url": "https://example.com/butter.jpg",
    //   "productFullName": "Butter"
    // },
    // {
    //   "id": "kK8BM2",
    //   "description": "Variety of cheese",
    //   "price": 3.79,
    //   "img-url": "https://example.com/cheese.jpg",
    //   "productFullName": "Cheese"
    // },
    // {
    //   "id": "lL9cN3",
    //   "description": "Thick and creamy yogurt",
    //   "price": 1.29,
    //   "img-url": "https://example.com/yogurt.jpg",
    //   "productFullName": "Yogurt"
    // },
    // {
    //   "id": "mM0dO4",
    //   "description": "Healthy and crunchy cereal",
    //   "price": 3.99,
    //   "img-url": "https://example.com/cereal.jpg",
    //   "productFullName": "Cereal"
    // },
    // {
    //   "id": "nN1eP5",
    //   "description": "Tasty canned beans",
    //   "price": 1.29,
    //   "img-url": "https://example.com/beans.jpg",
    //   "productFullName": "Canned Beans"
    // },
    // {
    //   "id": "oO2fQ6",
    //   "description": "High-quality canned tomatoes",
    //   "price": 1.49,
    //   "img-url": "https://example.com/tomatoes-canned.jpg",
    //   "productFullName": "Canned Tomatoes"
    // },
    // {
    //   "id": "pP3gR7",
    //   "description": "Variety of frozen vegetables",
    //   "price": 2.79,
    //   "img-url": "https://example.com/frozen-vegetables.jpg",
    //   "productFullName": "Frozen Vegetables"
    // },
    // {
    //   "id": "qQ4hS8",
    //   "description": "Delicious frozen pizza",
    //   "price": 4.99,
    //   "img-url": "https://example.com/frozen-pizza.jpg",
    //   "productFullName": "Frozen Pizza"
    // },
    // {
    //   "id": "rR5iU9",
    //   "description": "Creamy peanut butter",
    //   "price": 3.29,
    //   "img-url": "https://example.com/peanut-butter.jpg",
    //   "productFullName": "Peanut Butter"
    // },
    // {
    //   "id": "sS6jV0",
    //   "description": "Sweet jam or jelly",
    //   "price": 2.49,
    //   "img-url": "https://example.com/jam.jpg",
    //   "productFullName": "Jam"
    // },
    // {
    //   "id": "tT7kW1",
    //   "description": "Crunchy snack chips",
    //   "price": 1.99,
    //   "img-url": "https://example.com/chips.jpg",
    //   "productFullName": "Snack Chips"
    // },
    // {
    //   "id": "uU8lX2",
    //   "description": "Rich and aromatic coffee",
    //   "price": 8.99,
    //   "img-url": "https://example.com/coffee.jpg",
    //   "productFullName": "Coffee"
    // },
    // {
    //   "id": "vV9mY3",
    //   "description": "Variety of tea blends",
    //   "price": 3.49,
    //   "img-url": "https://example.com/tea.jpg",
    //   "productFullName": "Tea"
    // },
    // {
    //   "id": "wW0nZ4",
    //   "description": "Refreshing bottled water",
    //   "price": 0.99,
    //   "img-url": "https://example.com/bottled-water.jpg",
    //   "productFullName": "Bottled Water"
    // },
    // {
    //   "id": "xX1oA5",
    //   "description": "Soft and gentle toilet paper",
    //   "price": 5.99,
    //   "img-url": "https://example.com/toilet-paper-soft.jpg",
    //   "productFullName": "Toilet Paper"
    }
  

