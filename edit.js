function editItem() {
    itemName = document.getElementById('item-name').value;
    itemAmount = document.getElementById('item-amount').value;
    itemPrice = document.getElementById('item-price').value;

    if(items.length === 0) {
        alert("List is Empty");
    } else {
        const result = items.find(item => item.itemName.toLowerCase() === itemName.toLowerCase());
        if(!result){
            alert("No such item!");
        }
        result.itemAmount = itemAmount;
        result.itemPrice = itemPrice;
    }

    displayItems(myList);
}