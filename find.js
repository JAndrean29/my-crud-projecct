function findItem() {
    let searchQuery = document.getElementById("search-query").value;
    let filteredList = [];

    filteredList = items.filter(item => item.itemName.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(filteredList);

    if (filteredList.length === 0) {
        displayItems(myList);
    } else {
        items = [...filteredList];
        displayItems(items);
    }
}

function resetSearch() {
    displayItems(myList);
}