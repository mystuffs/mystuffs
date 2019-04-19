const itemspage = document.getElementById(`itmlst`);
const newitemform = document.getElementById(`add-content`);
const addItemsButton = document.getElementById(`add-button`);

// testing array use
// const itemList2 = [
//             {name:"Spoon", 
//             price:"Priceless", 
//             location:"Miami", 
//             condition:"Awful", 
//             category:"Kitchen", 
//             description:"Truly amazing, how elegant!"},

//             {name:"Spoon2", 
//             price:"Priceless", 
//             location:"Miami", 
//             condition:"Awful", 
//             category:"Kitchen", 
//             description:"Truly amazing, how elegant!"},

//             {name:"Spoon3", 
//             price:"Priceless", 
//             location:"Miami", 
//             condition:"Awful", 
//             category:"Kitchen", 
//             description:"Truly amazing, how elegant!"},
//             ];

// localStorage.setItem('myitemlist', JSON.stringify(itemList2));

var itemList = JSON.parse(localStorage.getItem('myitemlist')) || [];


let printListing = (listing) => {

    return `
            <li class="item">
            <input type="radio" name="items">
                <div class="name">${listing.name}</div>
                <div class="price">${listing.price}</div>
                <div class="location">${listing.location}</div>
                <div class="condition">${listing.condition}</div>
                <div class="category">${listing.category}</div>
                <div class="description">${listing.description}</div>
            </li>`;

 }
 
 let printAllEvents = () => {
    itemspage.innerHTML += itemList.map(printListing).join('');
 }
 
 printAllEvents();






