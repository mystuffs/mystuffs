var itemList = JSON.parse(localStorage.getItem('myitemlist')) || [];

const newitemform = document.getElementById(`newItem`);


newitemform.addEventListener('submit', event => {
    // The form was submit, stop the refreshing of the page
    //      (which is what a form wants to do by default)
    event.preventDefault();

    // Get the text from the field
    let itemname = newitemform.name.value;
    let itemprice = newitemform.price.value;
    let itemlocation = newitemform.location.value;
    let itemcondition = newitemform.condition.value;
    let itemcategory = newitemform.category.value;
    let itemdescription = newitemform.name.value;

    // Use the current filter category as the default for any new items added
    // Push it into our dataset (Array: shoppingList)
    // Default to 0 quantity, and no category
    itemList.push( {name: itemname, price: itemprice, location: itemlocation, condition: itemcondition, category: itemcategory, description: itemdescription } );

    // Save our shoppingList to the browser
    localStorage.setItem('myitemlist', JSON.stringify(itemList));
});

