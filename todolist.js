
function task(){
    var task = document.getElementById("task");
    if(task.value == ""){
        alert("Enter task First");
    }
    else{
        var ol = document.getElementById("ol");
        var li = document.createElement("li");
        li.innerHTML=task.value;
        ol.appendChild(li);
        task.value = "";

        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode("Remove"));
        li.appendChild(btn);
        btn.classList.add("removebtn");
        
    }
    document.querySelector("#ol").addEventListener("click",(e)=>{
        if(e.target.tagName === "BUTTON"){
            e.target.parentElement.remove();
        }
    })
    
    
   
}