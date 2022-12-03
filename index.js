




//Tour

var modal = document.getElementById("myModalTour");
var btn = document.getElementById("Tour");
var span = document.getElementById("closeTour");

btn.onclick=function(){
modal.style.display="block";
}
span.onclick=function(){
  modal.style.display="none";
}
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  //chair

var chairModal = document.getElementById("myModalChair1");
var chairBtn = document.getElementById("FurnitureChair");
var chairClose = document.getElementById("closeChair");



chairBtn.onclick= function(){
chairModal.style.display="block";
console.log("chair clicked")
}
chairClose.onclick=function(){
chairModal.style.display="none";
console.log("close")
}
window.onclick = function(event) {
  if (event.target == chairModal) {
    chairModal.style.display = "none";
  }
}
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


  //window blinds

var windowModal = document.getElementById("myModalWindowBlind1");
var windowBtn = document.getElementById("windowBlinds1");
var windowClose = document.getElementById("closeWindowBlinds");


    windowBtn.onclick= function(){
        windowModal.style.display="block";
    console.log("windowblind click")
}
windowClose.onclick=function(){
    windowModal.style.display="none";
}
  

//buttonclick color change
const selectBtn = document.getElementById('Select'); 
  selectBtn.addEventListener("click", function onclick(){
    selectBtn.style.backgroundColor = 'red';
    selectBtn.style.color = 'white';
 
})

//buttonclick color change
const UnselectBtn = document.getElementById('Unselect');

UnselectBtn.addEventListener('click', function onClick() {
  UnselectBtn.style.backgroundColor = 'red';
  UnselectBtn.style.color = 'white';
});

//buttonclick color change
const moveBtn = document.getElementById('Move');

moveBtn.addEventListener('click', function onClick() {
  moveBtn.style.backgroundColor = 'red';
  moveBtn.style.color = 'white';
});

//buttonclick color change
const rotateBtn = document.getElementById('Rotate');

rotateBtn.addEventListener('click', function onClick() {
  rotateBtn.style.backgroundColor = 'red';
  rotateBtn.style.color = 'white';
});

//buttonclick color change
const navigationBtn = document.getElementById('Navigation');

navigationBtn .addEventListener('click', function onClick() {
  navigationBtn .style.backgroundColor = 'red';
  navigationBtn .style.color = 'white';
});

//buttonclick color change
const zoomBtn = document.getElementById('Zoom');

zoomBtn.addEventListener('click', function onClick() {
  zoomBtn.style.backgroundColor = 'red';
  zoomBtn.style.color = 'white';
});

//buttonclick color change
const panBtn = document.getElementById('Pan');

panBtn.addEventListener('click', function onClick() {
  panBtn.style.backgroundColor = 'red';
  panBtn.style.color = 'white';
});

//buttonclick color change
const rotate1Btn = document.getElementById('Rotate1');

rotate1Btn.addEventListener('click', function onClick() {
  rotate1Btn.style.backgroundColor = 'red';
  rotate1Btn.style.color = 'white';
});

//buttonclick color change
const ReloadSceneBtn = document.getElementById('ReloadScene');

ReloadSceneBtn.addEventListener('click', function onClick() {
  ReloadSceneBtn.style.backgroundColor = 'red';
  ReloadSceneBtn.style.color = 'white';
});

 //control

 var controlModal = document.getElementById("myModalControls");
 var controlBtn = document.getElementById("Controls");
 var controlClose = document.getElementById("closeContols");
 
 
 
 controlBtn.onclick= function(){
  controlModal.style.display="block";
 console.log("control clicked")
 }
 controlClose.onclick=function(){
  controlModal.style.display="none";
 console.log("close")
 }
 

 //Artifacts

 var artifactsModal = document.getElementById("myModalArtifacts");
 var artifactsBtn = document.getElementById("Artifacts");
 var artifactsClose = document.getElementById("closeArtifacts");
 
 
 
 artifactsBtn.onclick= function(){
  artifactsModal.style.display="block";
 console.log("Artifacts clicked")
 }
 artifactsClose.onclick=function(){
  artifactsModal.style.display="none";
 console.log("close")
 }

 
 //View Points

 var viewPointsModal = document.getElementById("myModalViewpoints");
 var viewPointsBtn = document.getElementById("viewPoints");
 var viewPointsClose = document.getElementById("closeViewpoints");
 
 
 
 viewPointsBtn.onclick= function(){
  viewPointsModal.style.display="block";
 console.log("ViewPoints clicked")
 }
 viewPointsClose.onclick=function(){
  viewPointsModal.style.display="none";
 console.log("close")
 }
 
 //login

var loginModal= document.getElementById("myModalLogin");
var loginButton = document.getElementById("Login");
var loginClose = document.getElementById("closeLogin");

loginButton.onclick =function() {
   
  loginModal.style.display = "block";
    console.log("login clicked ");
  } 
  loginClose.onclick = function() {

  loginModal.style.display = "none"; 
  console.log("table closed ");
}


//signup

var signupModal= document.getElementById("myModalSignup");
var signupButton = document.getElementById("signup");
var signupClose = document.getElementById("closeSignup");

signupButton.onclick =function() {
   
  signupModal.style.display = "block";
    console.log("login clicked ");
  } 
  signupClose.onclick = function() {

    signupModal.style.display = "none"; 
  console.log("signup closed ");
}


//Render

var renderModal= document.getElementById("myModalRender");
var renderButton = document.getElementById("Render");
var renderClose = document.getElementById("closeRender");

renderButton.onclick =function() {
   
  renderModal.style.display = "block";
    console.log("render clicked ");
  } 
  renderClose.onclick = function() {

    renderModal.style.display = "none"; 
  console.log(" closed ");
}

//Collaboration

var CollaborationModal= document.getElementById("myModalCollaboration");
var CollaborationButton = document.getElementById("Collaboration");
var CollaborationClose = document.getElementById("closeCollaboration");

CollaborationButton.onclick =function() {
   
  CollaborationModal.style.display = "block";
    console.log("colloboration clicked ");
  } 
  CollaborationClose.onclick = function() {

    CollaborationModal.style.display = "none"; 
  console.log(" closed ");
}


//Measurements

var MeasurementsModal= document.getElementById("myModalMeasurement");
var MeasurementsButton = document.getElementById("Measurements");
var MeasurementsClose = document.getElementById("closeMeasurement");

MeasurementsButton.onclick =function() {
   
  MeasurementsModal.style.display = "block";
    console.log("Measurements clicked ");
  } 
  MeasurementsClose.onclick = function() {

    MeasurementsModal.style.display = "none"; 
  console.log(" closed ");
}



//Measurements

var PreferencesModal= document.getElementById("myModalPreferences");
var PreferencesButton = document.getElementById("Preferences");
var PreferencesClose = document.getElementById("closePreferences");

PreferencesButton.onclick =function() {
   
  PreferencesModal.style.display = "block";
    console.log("Preferences clicked ");
  } 
  PreferencesClose.onclick = function() {

    PreferencesModal.style.display = "none"; 
  console.log(" closed ");
}


//similarChairs

var similarChairModal= document.getElementById("myModalSimilaChairs");
var similarChairButton = document.getElementById("TrySimilarChair");
var similarChairClose = document.getElementById("closeSimilaChairs");

similarChairButton.onclick =function() {
   
  similarChairModal.style.display = "block";
    console.log("Preferences clicked ");
  } 
  similarChairClose.onclick = function() {

    similarChairModal.style.display = "none"; 
  console.log(" closed ");
}


//similarTables

var similarTableModal= document.getElementById("myModalSimilarTables");
var similarTableButton = document.getElementById("TrySimilarTable");
var similarTableClose = document.getElementById("closeSimilaTables");

similarTableButton.onclick =function() {
   
  similarTableModal.style.display = "block";
    console.log("Preferences clicked ");
  } 
  similarTableClose.onclick = function() {

    similarTableModal.style.display = "none"; 
  console.log(" closed ");
}



//similarWindowBlinds

var similarWindowBlindModal= document.getElementById("myModalSimilarWindowBlinds");
var similarWindowBlindButton = document.getElementById("TrySimilarWindowBlinds");
var similarWindowBlindClose = document.getElementById("closeSimilarWindowBlinds");

similarWindowBlindButton.onclick =function() {
   
  similarWindowBlindModal.style.display = "block";
    console.log("Preferences clicked ");
  } 
  similarWindowBlindClose.onclick = function() {

    similarWindowBlindModal.style.display = "none"; 
  console.log(" closed ");
}