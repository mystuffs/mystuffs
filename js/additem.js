var itemList = JSON.parse(localStorage.getItem('myitemlist')) || [];

const itmname = document.getElementById(`name`);
const itmprice = document.getElementById(`price`);
const itmlocation = document.getElementById(`location`);
const itmcondition = document.getElementById(`condition`);
const itmcategory = document.getElementById(`category`);
const itmdescription = document.getElementById(`description`);

