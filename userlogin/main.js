


let usernames = [];
let passwords = [];
let signUpBtn = document.getElementById("sign-in-btn");


signUpBtn.addEventListener("click", signUp);

function signUp(){

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var confPass = document.getElementById('confPass').value;
	var totErrors = false;
	if(username==''){
		alert('Please enter your User Name');
		totErrors = true;
	}else if(password==''){
		alert('Please enter a Password');
		totErrors = true;
	}else if(password!=confPass){
		alert('Passwords are not matched');
		totErrors = true;
	}else if(username!='' && password!='' && password==confPass){

	var error = false;
	for (var i = 0; i <=usernames.length; i++) {
		if(usernames[i]==username){
			error = true;
		}
	}

	if(error){
		alert("This User Name is already in use!!");
		document.getElementById('username').value = '';
		totErrors = true;
	}else{

		if(!totErrors){
		usernames.push(username);
		passwords.push(password);

		alert('User Registered Successfully!!');

		}
	}
	}


}

function showSignIn(){
	document.getElementById('sign-up-div').style.display = 'none';
	document.getElementById('sign-in-div').style.display = 'block';
}

function showSignUp(){
	document.getElementById('sign-up-div').style.display = 'block';
	document.getElementById('sign-in-div').style.display = 'none';
}

function signIn(){

	var username = document.getElementById('logUsername').value;
	var password = document.getElementById('logPassword').value;

	if(username==''){
		alert('Please enter your user name');
	}else if(password==''){
		alert('Please enter your Password');
	}else if(username!=='' && password!=''){
		var login = false;
		var pass  = 0;
		for (var i = 0; i <=usernames.length; i++) {
			if(usernames[i]==username){
				login = true;
				pass = i;
			}
		}

		if(login){
			if(passwords[pass]==password){
				alert('User login successfully');
			}else{
				alert('Please check your username and password');
			}
		}else{
			alert('Please check your username and password');
		}

	}

}