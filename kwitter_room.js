
document.getElementById("usernameok").innerHTML="welcome, "+localStorage.getItem("user_name");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCndqKekqyxjMEWpF1sw7bEeXUPHF4g0bs",
  authDomain: "kitw-bcba7.firebaseapp.com",
  databaseURL: "https://kitw-bcba7-default-rtdb.firebaseio.com",
  projectId: "kitw-bcba7",
  storageBucket: "kitw-bcba7.appspot.com",
  messagingSenderId: "907567621982",
  appId: "1:907567621982:web:2f8e85124a56d7e8fc11cf",
  measurementId: "G-15EV1F2PQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class=room_name id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout() {
      window.location="index.html"
}
function addroom() {
      //document.getElementById("output_for_SMS").innerHTML=document.getElementById("room_name").value;
}