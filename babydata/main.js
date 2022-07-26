// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {

  document.getElementById('name-count').innerHTML = babyData.length;
    var tot = "";
  for (var i = 0; i <=babyData.length-1; i++) {
        tot+="<span><b>"+babyData[i].name+"</b>(Rank : "+babyData[i].rank+", Gender : "+babyData[i].gender+")</span><br>";
  }
 
document.getElementById('container').innerHTML = tot;
}

// Display Names by Gender
function searchGender() {
   let text;
  let person = prompt("Please enter gender (Boy/Girl):", "");
  if (person == null || person == "") {
    
  } else {
    text = "Hello " + person + "! How are you today?";

    var tot = "";
    $x=1;
  for (var i = 0; i <=babyData.length-1; i++) {
    if(babyData[i].gender==person){
        tot+="<span><b>"+babyData[i].name+"</b>(Rank : "+babyData[i].rank+", Gender : "+babyData[i].gender+")</span><br>";
        $x++;
    }
  }
  document.getElementById('container').innerHTML = tot;
  document.getElementById('name-count').innerHTML = $x;
  }
}

// Display Names within a Range of Ranks
function searchRank() {
 let text;
  let person = prompt("Please enter minimum rank:", "");
  if (person == null || person == "") {
    
  } else {
    

    var tot = "";
    $x=1;
  for (var i = 0; i <=babyData.length-1; i++) {
    if(babyData[i].rank==person){
        tot+="<span><b>"+babyData[i].name+"</b>(Rank : "+babyData[i].rank+", Gender : "+babyData[i].gender+")</span><br>";
        $x++;
    }
  }
  document.getElementById('container').innerHTML = tot;
  document.getElementById('name-count').innerHTML = $x;
  }
}

// Display Names with Starting Letter
function searchStartingLetter() {
  let text;
  let person = prompt("Please enter Starting letter:", "");
  if (person == null || person == "") {
    
  } else {
    

    var tot = "";
    $x=1;
  for (var i = 0; i <=babyData.length-1; i++) {
    if(babyData[i].name.charAt(0)==person){
        tot+="<span><b>"+babyData[i].name+"</b>(Rank : "+babyData[i].rank+", Gender : "+babyData[i].gender+")</span><br>";
        $x++;
    }
  }
  document.getElementById('container').innerHTML = tot;
  document.getElementById('name-count').innerHTML = $x;
  }
}

// Display Names with a Specific Length
function searchLength() {
  let text;
  let person = prompt("Please enter name length:", "");
  if (person == null || person == "") {
    
  } else {
    

    var tot = "";
    $x=1;
  for (var i = 0; i <=babyData.length-1; i++) {
    if(babyData[i].name.length==person){
        tot+="<span><b>"+babyData[i].name+"</b>(Rank : "+babyData[i].rank+", Gender : "+babyData[i].gender+")</span><br>";
        $x++;
    }
  }
  document.getElementById('container').innerHTML = tot;
  document.getElementById('name-count').innerHTML = $x;
  }
}
