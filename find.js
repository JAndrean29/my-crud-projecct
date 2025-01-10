function findItem() {
    let searchQuery = document.getElementById("search-query").value;
    let filteredList = [];

    filteredList = items.filter(item => item.itemName.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(filteredList);

    if (searchQuery === "" || searchQuery.trim() === "") {
        items = [...myList];
        displayItems(items);
    } else {
        items = [...filteredList];
        displayItems(items);
    }
}

function resetSearch() {
    currentPage = 1;
    items = [...myList];
    displayItems(items);
}