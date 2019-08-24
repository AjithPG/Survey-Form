		function myFunction() {
			var x = document.getElementById("password").value;
			var y = document.getElementById("confirm-password").value;
			if (x == null && y == null) {
				console.log('Enter Password');
			} else if (x == y) {
				document.getElementById("demo").innerHTML = "Password Matched";
				document.getElementById("demo").style.color = "Green";
			} else {
				document.getElementById("demo").innerHTML = "Password Missmatched";
				document.getElementById("demo").style.color = "red";
			}
		}
