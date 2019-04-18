const itemspage = document.getElementById(`itemlist`);
const newitemform = document.getElementById(`add-content`);
const addItemsButton = document.getElementById(`add-button`);


// Array
let itemList;

// testing array use
itemList = [
            {name:"Spoon", 
            price:"Priceless", 
            location:"Miami", 
            condition:"Awful", 
            category:"Kitchen", 
            description:"Truly amazing, how elegant!"},

            {name:"Spoon2", 
            price:"Priceless", 
            location:"Miami", 
            condition:"Awful", 
            category:"Kitchen", 
            description:"Truly amazing, how elegant!"},

            {name:"Spoon3", 
            price:"Priceless", 
            location:"Miami", 
            condition:"Awful", 
            category:"Kitchen", 
            description:"Truly amazing, how elegant!"},
            ];


// GENERIC PRINTER 
// Will clear out the current list to replace with a new list
function printList(theArrayToPrint = itemList) {

    // Add list of <li> items to the document
    // Replace these with necessary array of items and values 
    itemspage.innerHTML = theArrayToPrint.map(item => `
        <li class="item">
            <input type="radio" name="items">
                <div class="name">${item.name}</div>
                <div class="price">${item.price}</div>
                <div class="location">${item.location}</div>
                <div class="condition">${item.condition}</div>
                <div class="category">${item.category}</div>
                <div class="description">${item.description}</div>
         </li>
    `).join('');
}


// STARTUP THE APPLICATION ///////////////////////////////////////////
// When the window is loaded, start the application!
window.addEventListener('load', event => {

    itemList = JSON.parse(window.localStorage.getItem('shoppingList')) || [];
   
    printList();

});

// ADD A NEW ITEM //////////////////////////////////////////////
// When the form is submit, take the field and add to the list
addItemsButton.addEventListener('submit', event => {

     // submit form and no refresh page
    
    event.preventDefault();

    // Get the text from the field
    let newitemform = newitemform.item.value;
 //clear
    newitemform.item.value = '';

    newitemform.item.focus();

    itemList.push( { id: shoppingList.name, price, location, condition: category, description } );
});
//trying to add info into the form and clear form- information in the form should be submitted and generated onto the next page