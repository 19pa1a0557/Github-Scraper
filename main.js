var objPeople = [
    {
        username: "hasa",
        password: "hasaa"
    },
	{ 
		username: "sam",
		password: "codify"
	},
	{ 
		username: "matt",
		password: "academy"
	},
	{ 
		username: "chris",
		password: "forever"
	}

]
function blah(){
	var bool = true;
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log("lalalalalalala");
			bool = false;
			location.replace("index.html")
		}
    }
	if(bool){
		alert("yoo chusukobadala");
	}
}

function register(){
    var bool = true;
	var usern = document.getElementById('username').value
	var pass = document.getElementById('password').value
	var dict={}
    dict[username]=usern
    dict[password]= pass
    objPeople.push(dict)
    location.replace("login.html")
}
