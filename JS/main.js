/*// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
//get data from firebase
import { getDatabase, ref, child, get, onValue, push, update, remove, set} 
from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
//get auth from database
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} 
from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';

//get database
const db = getDatabase();
const auth = getAuth();

//get player data
const playerRef = ref(db, "players");

let players = 0;

getPlayerData();
function getPlayerData(){
    //const playerRef = ref(db, "players");
    //PlayerRef is declared at the top using a constant
    //get(child(db,`players/`))
    get(playerRef).then((snapshot) => {//retrieve a snapshot of the data using a callback
        if (snapshot.exists()) {//if the data exist
            try {
                //let's do something about it
                let table = document.getElementById("table");
                let playerInfo = "";
                snapshot.forEach((childSnapshot) => {//looping through each snapshot
                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
                    playerInfo += `<tr>
                        <td>${childSnapshot.key}</td>
                        <td>${childSnapshot.val().username}</td>
                        <td>${childSnapshot.val().email}</td>
                        </tr>`;
                    //console.log(playerInfo);
                    players ++;
                });
                table.innerHTML = playerInfo;
            } catch(error){
                console.log("Error getPlayerData" + error);
            }
        } else {
                    console.log("No data available");
        }
    });
}//end getPlayerData

//retrieve element from form
var frmCreatePlayer = document.getElementById("frmCreatePlayer");
//we create a button listener to listen when someone clicks
frmCreatePlayer.addEventListener("submit", function(e){
    e.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("player email").value;
    console.log("username" + username + "player email" + email);
    if (username == "" || email == ""){
        alert("Please fill in all fields");
        return
    }
    createPlayer(username, email);
});

//create a new player based on username n email into database
function createPlayer(username, email){
    var playerData = {
        email: email,
        username: username,
    };
    var userId = players + 10001;
    set(ref(db, `players/${userId}`), playerData);
    getPlayerData();
}


//retrieve element from form
var frmCreateUser = document.getElementById("frmCreateUser");
//we create a button listener to listen when someone clicks
frmCreateUser.addEventListener("submit", function(e){
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    createUser(email, password);
    console.log("email" + email + "password" + password);
});

//retrieve element from form
var frmLoginUser = document.getElementById("frmLoginUser");
//we create a button listener to listen when someone clicks
frmLoginUser.addEventListener("submit", function(e){
    e.preventDefault();
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    loginUser(email, password);
    console.log("loginEmail" + email + "loginPassword" + password);
});

//retrieve element from form
var frmLogoutUser = document.getElementById("frmLogoutUser");

//create a new user based on email n password into Auth service
//user will get signed in
//userCredential is an object that gets
function createUser(email, password){
    console.log("creating the user");
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
        //signedin
        const user = userCredential.user;
        console.log("created user ... " + JSON.stringify(userCredential));
        console.log("User is now signed in ");
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ErrorCode: ${errorCode} -> Message: ${errorMessage}`);
    });
}

//login user based on email n password into Auth service
//user will get signed in
//userCredential is an object that gets
function loginUser(email,password){
    console.log("login the user");
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
        //signedin
        const user = userCredential.user;
        console.log("login user ... " + JSON.stringify(userCredential));
        console.log("User is now signed in ");
        var displayEmail = document.getElementById("displayEmail");
        console.log("displayEmail" + displayEmail);
        displayEmail.innerHTML = user.email;
        frmLoginUser.style.display = "none";
        frmLogoutUser.style.display = "block";

    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ErrorCode: ${errorCode} -> Message: ${errorMessage}`);
    });
}*/