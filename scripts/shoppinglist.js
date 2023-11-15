//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------

const currentUser = db.collection("users").doc("jW8OvbnZkGNpnvym2tEKmhrZKeA2"); //
const hardCodeUserId = "jW8OvbnZkGNpnvym2tEKmhrZKeA2";

function addToList(productId) {
  currentUser
    .update({
      currentList: firebase.firestore.FieldValue.arrayUnion(productId),
    })
    // Handle the front-end update to change the icon, providing visual feedback to the user that it has been clicked.
    .then(function () {
      console.log("product has been added into shoppinglist" + productId);
      var itemID = "item-" + productId;
      console.log(itemID);
      //this is to change the icon of the hike that was saved to "filled"
    });
}

function displayListDynamically(userId) {
  let itemTemplate = document.getElementById("list-template");
  db.collection("users")
    .doc(userId)
    .get()
    .then((userDoc) => {
      console.log("current document data: " + userDoc.data().email);
      let currentList = userDoc.data().currentList;
      // Get the product from "market"
      currentList.forEach((itemId) => {
        db.collection("market")
          .doc(itemId)
          .onSnapshot((itemDoc) => {
            let name = itemDoc.data().productFullName;
            let price = itemDoc.data().price;
            let store = itemDoc.data().store;

            let newList = itemTemplate.content.cloneNode(true);

            newList.querySelector(".item-name").innerHTML = name;
            newList.querySelector(".item-price").innerHTML = price;
            newList.querySelector(".item-store").innerHTML = store;

            newList.querySelector('span').id = 'delete-' + itemId;
            newList.querySelector('span').onclick = () => removeItem(itemId);

            document.getElementById("items").appendChild(newList);
          });
      });
    });
}

function removeItem(itemId){
  currentUser.update({
    // Use 'arrayUnion' to add the new bookmark ID to the 'bookmarks' array.
// This method ensures that the ID is added only if it's not already present, preventing duplicates.
currentList: firebase.firestore.FieldValue.arrayRemove(itemId)
})
// Handle the front-end update to change the icon, providing visual feedback to the user that it has been clicked.
.then(function () {
console.log("item has been delete for" + itemId);
var spanId = 'delete-' + itemId;
//console.log(iconID);
    //this is to change the icon of the hike that was saved to "filled"
document.getElementById(spanId).innerText = 'deleted';
});

}

function generateRandomId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

function saveList() {
  const userDocRef = db.collection("users").doc(hardCodeUserId);
  const currentDate = new Date();
  let currentList;
  userDocRef.get().then((doc) => {
    if (doc.exists) {
      currentList = doc.data().currentList;
      console.log("Current List: ", currentList);

      const autoId = generateRandomId(6);
      console.log(autoId);

      const historyData = {
        [autoId]: {
          listName: "testList",
          createdDate: currentDate,
          shoppinglist: currentList,
        },
      };

      userDocRef.update({
        historyList: historyData,
        currentList: firebase.firestore.FieldValue.delete()
      });
    } else {
      console.log("User document not found.");
    }
  });
}

function doAll(id) {
  const shoppinglist = [];
  productDb = db
    .collection("market")
    .doc(id)
    .onSnapshot((productDoc) => {
      console.log(
        "current document data: " + productDoc.data().productFullName
      );
      shoppinglist.push(productDoc.data());

      // addToList(productDoc.data().id)

      displayListDynamically(hardCodeUserId);
    });
}

const idList = ["uU8lX2", "sS6jV0", "tT7kW1"];
doAll("sS6jV0");
