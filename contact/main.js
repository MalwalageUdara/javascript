
function setFunction(){

	var selection = document.getElementById('selection').value;

	if(selection=='Display All'){
		document.getElementById('addContact').style.display = 'none';
		getAllContacts();
		document.getElementById('displayAll').style.display = 'block';
		document.getElementById('removeContact').style.display = 'none';
		document.getElementById('displayName').style.display = 'none';
		document.getElementById('displayCountry').style.display = 'none';
	}else if(selection=='Add Contact'){
		document.getElementById('addContact').style.display = 'block';
		document.getElementById('displayAll').style.display = 'none';
		document.getElementById('removeContact').style.display = 'none';
		document.getElementById('displayName').style.display = 'none';
		document.getElementById('displayCountry').style.display = 'none';
	}else if(selection=='Remove Contact'){
		document.getElementById('removeContact').style.display = 'block';

		document.getElementById('displayAll').style.display = 'none';
		document.getElementById('addContact').style.display = 'none';
		document.getElementById('displayName').style.display = 'none';
		document.getElementById('displayCountry').style.display = 'none';

	}else if(selection=='Display by Name'){
		document.getElementById('addContact').style.display = 'none';
		setContactsByName();
		document.getElementById('displayAll').style.display = 'none';
		document.getElementById('displayName').style.display = 'block';
		document.getElementById('removeContact').style.display = 'none';
		document.getElementById('displayCountry').style.display = 'none';
	}else if(selection=='Display by Country'){
		document.getElementById('addContact').style.display = 'none';
		setContactsByCountry();
		document.getElementById('displayAll').style.display = 'none';
		document.getElementById('displayCountry').style.display = 'block';
		document.getElementById('displayName').style.display = 'none';
		document.getElementById('removeContact').style.display = 'none';
	}
}

var nameArr    = new Array();
var emailArr   = new Array();
var phoneArr   = new Array();
var countryArr = new Array();

function addContactList(){

	var name    = document.getElementById('name').value;
	var email   = document.getElementById('email').value;
	var phone   = document.getElementById('phone').value;
	var country = document.getElementById('country').value;

	nameArr.push(name);
	emailArr.push(email);
	phoneArr.push(phone);
	countryArr.push(country);

	alert('Contact Added successfully');
	document.getElementById('addContact').style.display = 'none';

}

function getAllContacts(){
	var display = "<table>";
	for (var i = 0; i<=nameArr.length-1; i++) {
		display+="<tr>";
        display+="<td><span>Name</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+nameArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Email</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+emailArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Phone</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+phoneArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Country</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+countryArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td>&nbsp;</td>";
        display+="<td>&nbsp;</td>";
        display+="<td>&nbsp;</td>";
      display+="</tr>";
	}
	display+="</table>";

	document.getElementById('displayAll').innerHTML = display;
}


function removeEle(){

	var elem = document.getElementById('elementId').value;

	 nameArr.splice(elem, elem+1);
	 emailArr.splice(elem, elem+1);
	 phoneArr.splice(elem, elem+1);
	 countryArr.splice(elem, elem+1);

	 alert('Element Removed Successfully!!');
}

function setContactsByName(){

	var display = "<table>";
	for (var i = 0; i<=nameArr.length-1; i++) {
		display+="<tr>";
        display+="<td><span>Name</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+nameArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Email</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+emailArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Phone</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+phoneArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Country</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+countryArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td>&nbsp;</td>";
        display+="<td>&nbsp;</td>";
        display+="<td>&nbsp;</td>";
      display+="</tr>";
	}
	display+="</table>";

	document.getElementById('displayName').innerHTML = display;
}


function setContactsByCountry(){
	var display = "<table>";
	for (var i = 0; i<=countryArr.length-1; i++) {
		display+="<tr>";
        display+="<td><span>Name</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+nameArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Email</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+emailArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Phone</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+phoneArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td><span>Country</span></td>";
        display+="<td><span>:</span></td>";
        display+="<td><span>"+countryArr[i]+"</span></td>";
      display+="</tr>";
      display+="<tr>";
        display+="<td>&nbsp;</td>";
        display+="<td>&nbsp;</td>";
        display+="<td>&nbsp;</td>";
      display+="</tr>";
	}
	display+="</table>";

	document.getElementById('displayCountry').innerHTML = display;
}

