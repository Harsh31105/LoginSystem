var userData = [{
        username: "Olive",
        password: "123abc"
    },
    {
        username: "Tommy",
        password: "123"
    },
    {
        username: "Harsh",
        password: "abc"
    }
];

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < userData.length; i++) {
        if (userData[i].username == username && userData[i].password == password) {
            alert(username + " is logged in.");
            return;
        }
    }

    alert("Incorrect Username and Password");
}