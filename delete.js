function deleteItem() {
    itemName = document.getElementById('item-name').value;


    if (myList.length === 0) {
        alert("List is empty!");
    } else {
        const result = myList.filter(item => item.itemName.toLowerCase() !== itemName.toLowerCase())
        if(result.length === myList.length){
            return alert("No such item in list!");
        }
        myList = result;
    }
    displayItems(myList);
}

function clearList() {
    myList = [];
    currentPage = 1;
    displayItems(myList);
}