//Add a new item.
let itemInput=document.getElementByClass("field-wrap");

let addButton=document.getElementsByClass("add-button");

//New task list item
let createNewItemListing=function(taskString)
{

    let listItem=document.createElement("li");