 function login() {
     
  
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var userA = ["Apple", "Google", "Microsoft"];
  var passA = ["AAPL", "GOOGL", "MSFT"];
  
	if (userA === "" || passA === "") {
		myOut.innerHTML = "Username/Password cannot be blank";
		if (aUser === "") {
			U.$("username").focus();
			} else {
			U.$("password").focus()
			}
		else {
		
	
		var valid = false;
        for (i=0; i < unArray.length; i++) {
          if (user === userA[i] && pass == passA[i]){
		  valid = true;
          window.location = "index.html";
          break;
        }
          else {
            alert("Invalid Login ID please try again.")
          }
        }
		if (!valid) {
			myOut.className = "error";
			myOut.innerHTML = "
	}
}

 function init() {
   var login_button = document.getElementById("login_button");
   if (login_button !== null) {
     login_button.onclick = login;
   }
 }