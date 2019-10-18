var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var searchItem = document.getElementById("search-item");

//Adding Form Submit Event
form.addEventListener("submit", addItem);

//Deleting item from the list
itemList.addEventListener("click", removeItem);

// Search event
searchItem.addEventListener("keyup", searchItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById("item").value;

  //Create a new 'li' element
  var li = document.createElement("li");

  //Add  class
  li.className = "list-group-item";

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Append li to list
  itemList.appendChild(li);

  //Create a new 'delete button' element
  var deleteBtn = document.createElement("button");

  //Add  classes
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //Add text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append li to list
  li.appendChild(deleteBtn);

  document.getElementById("item").value='';
}



//Remove item Function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are sure you want to delete this item? ")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Search item Function
function searchItems(e) {
  //covert search input to lower case
  var text = e.target.value.toLowerCase();

  //Get 'Li'
  var items = itemList.getElementsByTagName("li");

  //Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
