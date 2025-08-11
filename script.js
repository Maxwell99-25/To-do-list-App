    let items=[];
    function itemsAdding(){
    var item=document.getElementById("item").value;
    if(item===""){
     alert("Please add an item!!");
     return;   
    }
    //Add and Display functionality.
    items.push(item);
    let li=document.createElement("li");
    li.innerText=item;
    //Edit functionality.
    let updateBtn=document.createElement("button");
    updateBtn.innerText="Edit";
    updateBtn.onclick=function(){
    let newItem=prompt("Edit your Item:",item);
    if(newItem !== null && newItem.trim() !==""){
     li.innerText=newItem;
     item=newItem;
     buttonsUpdate();   
    }    
    };
    //Delete functionality
    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.onclick=function(){
    li.remove();
    items=items.filter(t=>t !== item);
    }

    function buttonsUpdate(){
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);
   }
    buttonsUpdate();
    document.getElementById("listItems").appendChild(li);
   }
