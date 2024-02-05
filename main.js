
var userArr =[];

function createAdmin(){ 
	if(localStorage.getItem('user')===null){		
		
		var user = {username: 'admin1', password: 'admin', email: '123@gmail.com', phone: '0566490523',userType:'1'};
		var user1 = {username: 'admin2', password: 'abc', email: 'khoi@gmail.com', phone: '0566490523',userType:'1'};
		var user3={username:'admin3' , password: 'abc', email: 'hi@gmail.com', phone: '0566490523',userType:'1'}
		userArr.push(user);
		userArr.push(user1);
		userArr.push(user3);
		localStorage.setItem('user',JSON.stringify(userArr));
	}
}
createAdmin();
function createnewuser()
{
	var userArr = JSON.parse(localStorage.getItem('user'));
	var user1 = {username: document.getElementById('username').value, password: document.getElementById('password').value, email: document.getElementById('email').value,confirmPassword: document.getElementById('confirmPassword').value};
	if ( user1.username.length == 0 || user1.email.length == 0 ||user1.password.length == 0 || user1.confirmPassword.length == 0 ){
		alert("Please complete your personal information!")
		return false;
	}
	for(var i=0;i<userArr.length;i++){
		if(user1.username == userArr[i].username){
			alert("User name existed!");
			return false;
		}
		if(user1.email == userArr[i].email){
			alert("email existed!");
			return false;
		}
	}
	if(user1.email.indexOf('@gmail.com') <= -1){
		alert("email incorrect!");
		return false;
	}
	if (user1.password.length < 8){
		alert("Password must be more than 7 characters!");
		return false;
	}
	if (user1.password != user1.confirmPassword){
	    alert("Make sure password and password confirmation are the same!");
		return false;
    }
	user1.userType='0';
	console.log(user1);
	console.log("Type user 1:");
	console.log(typeof(user1));
	userArr.push(user1);
	
	localStorage.setItem('user',JSON.stringify(userArr));
    window.location="";
	showUserList();
}



