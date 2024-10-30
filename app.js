var olElements= document.getElementById("liList")

function addItems(){
    var input= document.getElementById("todoInput")

    if(input.value){
    var liElement = document.createElement("li");
    var liText = document.createTextNode(input.value);
    liElement.appendChild(liText);
    olElements.appendChild(liElement);

    console.log(liElement);
    input.value= "";
}else{
    alert("Fill the Filled")
}

        //Delete button
        
var delBtnElement = document.createElement("button");
var delBtnText = document.createTextNode("Delete");

delBtnElement.appendChild(delBtnText);
liElement.appendChild(delBtnElement);

delBtnElement.setAttribute("onclick","deleteSingleItem(this)")


        //Edit button
        
var editBtnElement = document.createElement("button");
var editBtnText = document.createTextNode("Edit");

editBtnElement.appendChild(editBtnText);
liElement.appendChild(editBtnElement);

editBtnElement.setAttribute("onclick","editItem(this)")

}

function deleteAllItems(){
    olElements.innerHTML= ""
}


function deleteSingleItem(e){
e.parentNode.remove();
}


function editItem(e){
var updatedVal = prompt("Enter updated value")

e.parentNode.firstChild.nodeValue = updatedVal;

}

