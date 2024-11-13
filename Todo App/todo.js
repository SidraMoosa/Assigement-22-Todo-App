var firebaseConfig = {
    apiKey: "AIzaSyBj3lPg_59wyJBzIzlSKERF_6OmNjlANNw",
    authDomain: "todo-app-7d42a.firebaseapp.com",
    databaseURL: "https://todo-app-7d42a-default-rtdb.firebaseio.com",
    projectId: "todo-app-7d42a",
    storageBucket: "todo-app-7d42a.firebasestorage.app",
    messagingSenderId: "518069009396",
    appId: "1:518069009396:web:8fe9101e8b2c20c48e57a1"
  };
  
  var app = firebase.initializeApp(firebaseConfig);

console.log(app.database);

firebase.database().ref("todos").on("child_added",(data)=>{
//    console.log(data.val())
    
    var liElement = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    liElement.appendChild(liText);
    olElements.appendChild(liElement);

    console.log(liElement);

        //Delete button
        
var delBtnElement = document.createElement("button");
var delBtnText = document.createTextNode("Delete");

delBtnElement.appendChild(delBtnText);
liElement.appendChild(delBtnElement);

delBtnElement.setAttribute("id",data.val().key)
delBtnElement.setAttribute("onclick","deleteSingleItem(this)")


        //Edit button
        
var editBtnElement = document.createElement("button");
var editBtnText = document.createTextNode("Edit");

editBtnElement.appendChild(editBtnText);
liElement.appendChild(editBtnElement);

editBtnElement.setAttribute("id",data.val().key)
editBtnElement.setAttribute("onclick","editItem(this)")

})



var olElements= document.getElementById("liList")

function addItems(){
    var input= document.getElementById("todoInput")

    //console.log(input.value);

    var key = firebase.database().ref("todos").push().key;

    var obj ={
        value : input.value,
        key : key
    }

firebase.database().ref("todos").child(key).set(obj);
 input.value= "";



}

function deleteAllItems(){
    liList.innerHTML= "";
    firebase.database().ref("todos").remove();

}


function deleteSingleItem(e){
console.log(e.id);
firebase.database().ref("todos").child(e.id).remove();
     e.parentNode.remove();

}


function editItem(e){
//var val= e.parentNode.firstChild.nodeValue;
 var updatedVal = prompt("Enter updated value");

var edittodo={
    value : updatedVal,
    key : e.id
}

firebase.database().ref("todos").child(e.id).set(edittodo)

e.parentNode.firstChild.nodeValue = updatedVal;

}

