// Nickname Generator

// Create an array of nicknames
let nicknames = ["Crusher", "Twinkle-toes", "the Sloth", "the Coder", "Coco"];
//   index ->        0               1             2            3           4

// Add Event listeners
document.getElementById("random-btn").addEventListener("click", randomNickname);
document.getElementById("random-btn-all").addEventListener("click", randomNicknameAll);

function randomNickname() {
  // Get User's First and Last Name
  let firstName = document.getElementById("first-input").value;
  let lastName = document.getElementById("last-input").value;
  let nickname = nicknames[Math.floor(Math.random() * 4)];

  // Output the Full Nickname
  document.getElementById("output").innerHTML = `${firstName} "${nickname}" ${lastName}`;

}


function randomNicknameAll() {
  // Get User's First and Last Name
  let firstName = document.getElementById("first-input").value;
  let lastName = document.getElementById("last-input").value;
  let nickname = nicknames[Math.floor(Math.random() * 4)];

  var allNames = "";
  for (var i = 0; i <= nicknames.length-1; i++) {
    allNames+= firstName+ ' " '+nicknames[i]+' "'+lastName+"<br>"
  }
  document.getElementById("output").innerHTML = allNames;

}
