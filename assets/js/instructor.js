 let datos = document.querySelector("#digimon-contenedor")

fetch("https://digimon-api.vercel.app/api/digimon")
.then(response => response.json())
.then(datos=> {
    console.log(datos)
for (let temp of datos) {
  tabla(temp)
         console.log (temp.name)}
})
function tabla(temp){
let contenido = document.getElementById('digimon-contenedor')
contenido.innerHTML +=

 `
 <div class="col-xs-10 col-sm-8 col-md-6 col-lg-4" >
 <div class="card">
    <div class="face front">
           <img src="${temp.img}">    
    </div>
    <div>
    <h3>"${temp.name}"</h3>
    </div>
    <div class="face back">
               <h5 class="text">${temp.level}</h5>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus expedita, numquam alias dolorum eius similique rem eveniet eos earum repudiandae adipisci? Dolore sunt consequatur porro accusantium cumque sequi blanditiis!</p>
    </div>
      
     </div>
 </div> 
</div>

 `  
}
        






