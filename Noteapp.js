const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
   let inputBox= document.createElement("p");
   let img=document.createElement("img");
   inputBox.className="input-box";
   inputBox.setAttribute("contenteditable","true");
   img.src="./delete.png";
   notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
    }
})

