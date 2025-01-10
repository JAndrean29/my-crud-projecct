
function displayItems(arr) {
    const listContainer = document.getElementById("list-content");
    const pageCount = Math.ceil(arr.length/5);
    console.log(myList);

    const start = (currentPage - 1) * 5;
    const end = start + 5;
    let currentItems = arr.slice(start,end);


    listContainer.innerHTML = "";
    
    for(let i = 0;i<currentItems.length;i++){
        const div = document.createElement("div");

         div.appendChild(document.createElement("br"));
         div.appendChild(document.createTextNode("Nama: " + currentItems[i].itemName));
         div.appendChild(document.createElement("br"));
         div.appendChild(document.createTextNode("Harga: " + currentItems[i].itemAmount));
         div.appendChild(document.createElement("br"));
         div.appendChild(document.createTextNode("Banyak: " + currentItems[i].itemPrice));
         div.appendChild(document.createElement("br"));

        listContainer.appendChild(div);
    }

    checkPage(pageCount, currentPage);
}

function nextPage(arr) {
    currentPage += 1;
    displayItems(arr);
}

function prevPage(arr) {
    currentPage -= 1;
    displayItems(arr);
}

function checkPage(n, i) {
    let next = document.getElementById("next-btn");
    let prev = document.getElementById("prev-btn");

    if (n === 0){
        next.classList.remove("enabled");
        prev.classList.remove("enabled");
        next.classList.add("disabled");
        prev.classList.add("disabled");
    } else if (i === 1 && n > 0) {
        next.classList.remove("disabled");
        next.classList.add("enabled");
        prev.classList.remove("enabled");
        prev.classList.add("disabled");
    } else if (i === n && n > 0) {
        next.classList.remove("enabled");
        next.classList.add("disabled");
        prev.classList.remove("disabled");
        prev.classList.add("enabled");
    } else if ((i > 1 || i < n) && n > 0){
        next.classList.remove("disabled");
        next.classList.add("enabled");
        prev.classList.remove("disabled");
        prev.classList.add("enabled");
    }
}
