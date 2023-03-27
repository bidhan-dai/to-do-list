const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-task");
//to give button fucntion and add span element
function addTask(){
    if(inputBox.value===""){
        alert("enter the task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
//to remove and check the list 
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//to save data 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//to display data
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();