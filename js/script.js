let toDo=document.querySelector("#inputToDo");
const submit=document.querySelector("#submit");
const container=document.querySelector("#contain");
const search=document.querySelector("#searchingToDo");
const form=document.querySelectorAll('form');

submit.addEventListener("click",(event)=>
    {
        event.preventDefault();
        if(toDo.value==="")
        {}
        else{
            
            container.innerHTML+=`
            <li class="toDo br-5">
                ${toDo.value}<span class="delete">X</span>
            </li>`;

            toDo.value="";
        }
    }
);
// to delete 

container.addEventListener("click",event=>
    {
        if(event.target.classList.contains("delete"))
        {
            event.target.parentElement.remove();
        }    
    }

);


// to search
const filtered=(item)=>{
    Array.from(container.children)
    .filter((todo)=> !todo.textContent.toLocaleLowerCase().includes(item))
    .forEach(todo=>{
        todo.classList.add("filtered");
    });
    Array.from(container.children)
    .filter((todo)=> todo.textContent.includes(item))
    .forEach(todo=>{
        todo.classList.remove("filtered");
    });

}
search.addEventListener("keyup",()=>
    {
        const item=search.value;
        filtered(item);

    }
);
