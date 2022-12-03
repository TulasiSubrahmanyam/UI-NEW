//Table

var tableModal= document.getElementById("myModalTable1");
var tableButton = document.getElementById("Table1");
var tableClose = document.getElementById("closeTable1");

  tableButton.onclick =function() {
   
    tableModal.style.display = "block";
    console.log("table clicked ");
  } 
  tableClose.onclick = function() {

  tableModal.style.display = "none"; 
  console.log("table closed ");
}
