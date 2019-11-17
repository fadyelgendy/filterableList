// Get input element
let filterInput = document.getElementById("filterInput");

// Add Event listener
filterInput.addEventListener("keyup", filterNames);

// filter the names
function filterNames() {
  // Get input value and convert it to uppercase
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  // Get ul element
  let ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.collection-item");

  // Iterate over list items
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
