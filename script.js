//form validation
const name = document.getElementById("name");
const mobile = document.getElementById("mobile");
let validName = false;
let validMobile = false;
name.addEventListener("blur", () => {
  let validation = /^[a-zA-Z]([\sa-zA-Z]){2,40}$/;
  let str = name.value;
  if (validation.test(str)) {
    validName = true;
  } else {
    alert("Please enter a valid name.");
    validName = false;
  }
});
mobile.addEventListener("blur", () => {
  let validation = /^([0-9]){10}$/;
  let str = mobile.value;
  if (validation.test(str)) {
    validMobile = true;
  } else {
    alert("Mobile number should be of 10 digits.");
    validMobile = false;
  }
});

//add,delete,edit,update operations

var rowSelected = null;
let onFormSubmit = () => {
  // console.log(validName,validMobile);
  if (validName && validMobile) {
    var formData = readFormData();
    if (rowSelected == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
};
// read
let readFormData = () => {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["age"] = document.getElementById("age").value;
  formData["mobile"] = document.getElementById("mobile").value;
  return formData;
};
//reset form
let resetForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("mobile").value = "";
  rowSelected = null;
};
//add
let insertNewRecord = (data) => {
  var table = document.getElementById("list");
  // console.log(table);
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerText = data.name;
  var cell2 = newRow.insertCell(1);
  cell2.innerText = data.age;
  var cell3 = newRow.insertCell(2);
  cell3.innerText = data.mobile;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<a herf ="#" onClick="onEdit(this)">Edit</a> <a herf = "#" onClick="onDelete(this)">Delete</a>`;
};
//delete
let onDelete = (td) => {
  if (confirm("Do you want to delete this record ?")) {
    row = td.parentElement.parentElement;
    // console.log(row);
    document.getElementById("list").deleteRow(row.rowIndex);
  }
};
//edit
let onEdit = (td) => {
  rowSelected = td.parentElement.parentElement;
  document.getElementById("name").value = rowSelected.cells[0].innerHTML;
  document.getElementById("age").value = rowSelected.cells[1].innerHTML;
  document.getElementById("mobile").value = rowSelected.cells[2].innerHTML;
};
//update
function updateRecord(formData) {
  rowSelected.cells[0].innerHTML = formData.name;
  rowSelected.cells[1].innerHTML = formData.age;
  rowSelected.cells[2].innerHTML = formData.mobile;
  // console.log(formData);
}

//search box
let searchData = () => {
  let searchStr = document.getElementById("searchInput").value.toUpperCase();
  let list = document.getElementById("list");
  let tr = list.getElementsByTagName("tr");
  // console.log(searchStr);
  for (let i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue.toUpperCase().indexOf(searchStr) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

//sorting
// ascending || descending
function sortTable(n) {
  var table,i,compare1,compare2,count = 0;
  table = document.getElementById("list");
  // console.log(table);
  var switching = true;
  var direction = "ascending";
  while (switching) {
    switching = false;
    var rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      var Switch = false;
      compare1 = rows[i].getElementsByTagName("td")[n];
      compare2 = rows[i + 1].getElementsByTagName("td")[n];
      if (direction == "ascending") {
        if (compare1.innerHTML.toLowerCase() > compare2.innerHTML.toLowerCase()) {
          Switch = true;
          break;
        }
      } else if (direction == "descending") {
        if (compare1.innerHTML.toLowerCase() < compare2.innerHTML.toLowerCase()) {
          Switch = true;
          break;
        }
      }
    }
    if (Switch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      count++;
    }else{
      if(count==0 && direction == "ascending"){
        direction = "descending";
        switching = true;
      }
    }
  }
}

 //pagination

// var rowPerPage = 3;
// function pagination(){
//   var pageRow = document.getElementById("tableBody").rows.length;
//   console.log(pageRow);
//   var displayPage = Math.round(pageRow / rowPerPage);
//   console.log(displayPage);
//   var table = document.getElementById("tableBody");
//   var row = table.rows
//   var x,y;
//  for(let i=1;i<=displayPage;i++){
//   x = row[i].getElementsByTagName ("td");

//    console.log(x)
//  }
// }


