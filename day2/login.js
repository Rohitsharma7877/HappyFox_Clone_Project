

document.querySelector("form").addEventListener("submit",todoapp)
let taskarr=[];
function todoapp(event) {
    event.preventDefault();
   let task= document.querySelector("#email").value
   let priority=document.querySelector("#prefooterButton22").value
   let taskobj={
    ta:task,
    prior:priority,
   };
   taskarr.push(taskobj)
   //console.log(taskarr)
   displaytable(taskarr);

}

 function displaytable(taskarr){
    document.querySelector("tbody").innerHTML=""
    taskarr.forEach(function(ele){
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        col1.innerText=ele.ta;
        let col2=document.createElement("td");
        col2.innerText=ele.prior;
        if(ele.prior=="High")
        {
            col2.style.backgroundColor="red"
        }
        else if(ele.prior=="Low")
        {
            col2.style.backgroundColor="green"
        }
        let col3=document.createElement("td");
        col3.innerText="Delete";
        col3.addEventListener("click",function(event){
            event.target.parentNode.remove();
        });
        col3.style.color="red";
        row.append(col1,col2,col3);
        document.querySelector("tbody").append(row);

    });
}





