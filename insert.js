function addItem() {
    itemName = document.getElementById("item-name").value;
    itemAmount = document.getElementById("item-amount").value;
    itemPrice = document.getElementById("item-price").value;

    if(myList.length > 0) {
        console.log(itemName);
        const str = myList.find(item => item.itemName.toLowerCase() === itemName.toLowerCase())
        console.log(str);
        if (str) {
            return alert("Item already exists");
        }
    }

    myList.push({
        itemName: itemName,
        itemAmount: itemAmount,
        itemPrice: itemPrice
    });

    alert("Push Successfull");
    displayItems(myList);
}