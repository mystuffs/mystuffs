var itemList = JSON.parse(localStorage.getItem('myitemlist')) || [];

const newitemform = document.getElementById(`newItem`);


newitemform.addEventListener('submit', event => {

    event.preventDefault();

    // Get the text from the field
    let itemname = newitemform.name.value;
    let itemprice = newitemform.price.value;
    let itemlocation = newitemform.location.value;
    let itemcondition = newitemform.condition.value;
    let itemcategory = newitemform.category.value;
    let itemdescription = newitemform.name.value;


    newitemform.name.value = '';
    newitemform.price.value = '';
    newitemform.location.value = '';
    newitemform.condition.value = '';
    newitemform.category.value = '';
    newitemform.name.value = '';

    newitemform.name.focus();


    itemList.push( {name: itemname, price: itemprice, location: itemlocation, condition: itemcondition, category: itemcategory, description: itemdescription } );

    localStorage.setItem('myitemlist', JSON.stringify(itemList));
});

