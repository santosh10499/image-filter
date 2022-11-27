let mobiles = document.getElementById("mobile");

let UrlElement = document.getElementById("url");
let selectItemElement = document.getElementById("selectitem");
let add = document.getElementById("btn");
let imageElement = document.getElementById("imagediv");
add.addEventListener("click", () => {
  imageElement.innerHTML += `
           <div class=product>
               <img src="${UrlElement.value}" alt="" class="imagesize">
               <button class="remove">delete</button>
            </div>`;

  const deleted = document.querySelectorAll(".remove");
  for (let i = 0; i < deleted.length; i++) {
    deleted[i].addEventListener("click", () => {
      deleted[i].parentNode.remove();
    });
  }
});

(function ()
{
    let buttons = document.querySelectorAll(".btn");
       let StoreImage = document.querySelectorAll(".product");

   buttons.forEach((button) =>
   {
    button.addEventListener('click',(e)=>
    {
        e.preventDefault()
        const filter=e.target.dataset.filter;
        StoreImage.forEach((item)=>{
            if(filter=='all')
            {
                item.style.dusplay='block';
            }
            else if(item.classList.contains(filter))
            {
                item.style.dusplay='block';
            }
            else{
                item.style.dusplay='none';
            }
        })
    })
   }) 
    
})


();
