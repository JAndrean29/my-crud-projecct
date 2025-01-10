let myList = [];
let itemName;
let itemAmount;
let itemPrice;
let items;
let currentPage = 1;

function populateList() {
    myList = [
        {itemName: "Apel",itemAmount: 300,itemPrice: 12500},
        {itemName: "Mangga",itemAmount: 250,itemPrice:36000},
        {itemName: "Jeruk",itemAmount: 800,itemPrice:10500},
        {itemName: "Apel Fuji",itemAmount: 100,itemPrice: 19500},
        {itemName: "Jeruk Bali",itemAmount: 300,itemPrice: 20500},
        {itemName: "Pepaya",itemAmount: 80,itemPrice: 16500},
        {itemName: "Semangka",itemAmount: 75,itemPrice: 18500},
        {itemName: "Apel Hijau",itemAmount: 300,itemPrice: 12500},
        {itemName: "Mangga Maju",itemAmount: 250,itemPrice:36000},
        {itemName: "Jeruk Mandarin",itemAmount: 800,itemPrice:10500},
        {itemName: "Pir",itemAmount: 100,itemPrice: 19500},
        {itemName: "Jambu Monyet",itemAmount: 300,itemPrice: 20500},
        {itemName: "Melon",itemAmount: 80,itemPrice: 16500},
        {itemName: "Semangka Kuning",itemAmount: 75,itemPrice: 18500},
        {itemName: "Anggur",itemAmount: 300,itemPrice: 12500},
        {itemName: "Jambu Air",itemAmount: 250,itemPrice:36000},
        {itemName: "Anggur Muscat",itemAmount: 800,itemPrice:10500},
        {itemName: "Nangka",itemAmount: 100,itemPrice: 19500},
        {itemName: "Salak",itemAmount: 300,itemPrice: 20500},
        {itemName: "Durian",itemAmount: 80,itemPrice: 16500},
        {itemName: "Anggur Merah",itemAmount: 75,itemPrice: 18500}
    ]

    displayItems(myList);
}