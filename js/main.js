const itemspage = document.getElementById(`itmlst`);
const newitemform = document.getElementById(`add-content`);
const addItemsButton = document.getElementById(`add-button`);

// testing array use
const itemList = [
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



// STARTUP THE APPLICATION ///////////////////////////////////////////
// When the window is loaded, start the application!


// ADD A NEW ITEM //////////////////////////////////////////////
// When the form is submit, take the field and add to the list
//addItemsButton.addEventListener('submit', event => {

     // submit form and no refresh page
    
    //event.preventDefault();

    // Get the text from the field
   // let newitemform = newitemform.item.value;
 //clear
   // newitemform.item.value = '';

   // newitemform.item.focus();

    //itemList.push( { id: shoppingList.name, price, location, condition: category, description } );
//trying to add info into the form and clear form- information in the form should be submitted and generated onto the next page




