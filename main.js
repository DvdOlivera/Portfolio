document.querySelector("#proyectosreact").addEventListener("click",verproyectosreact)

document.querySelector("#proyectosjavascript").addEventListener("click",verproyectosvanilla)






function verproyectosvanilla(){
   
    document.querySelector("#proyectosjavascript").classList.remove("jav2");
    document.querySelector("#proyectosjavascript").classList.add("jav");
    document.querySelector("#proyectosreact").classList.remove("rea2");
    document.querySelector("#proyectosreact").classList.add("rea");

    document.querySelectorAll(".react").forEach((options)=>{


        options.classList.remove("visiblereact"); 
        options.classList.add("ocultoreact");})

        document.querySelectorAll(".contenedorproyecto").forEach((options)=>{

            options.classList.remove("ocultovanilla"); 
            options.classList.add("visiblevanilla");})
        


}


function verproyectosreact(){
    document.querySelector("#proyectosjavascript").classList.remove("jav");
    document.querySelector("#proyectosjavascript").classList.add("jav2");
    document.querySelector("#proyectosreact").classList.remove("rea");
    document.querySelector("#proyectosreact").classList.add("rea2");

    document.querySelectorAll(".vanilla").forEach((options)=>{
        
        options.classList.add("ocultovanilla");})

        document.querySelectorAll(".contenedorproyecto").forEach((options)=>{

            options.classList.remove("ocultoreact"); 
            options.classList.add("visiblereact");})
        


}

function ejecutarmiDescripcion(p) {
    document.querySelectorAll(".descripciones").forEach((options)=>{
        options.classList.remove('visible');
        options.classList.add('oculto');})

     memoryLoad(p);
}

function memoryLoad(p) {
    
     /* pasar parametro para hacer diferentes operaciones- 1 2 3 4.. etc*/
     if (p == 0){
        
        document.querySelector("#perfil").classList.remove("oculto"); 
        document.querySelector("#perfil").classList.add("visible");
    }

    if (p == 1){
        
        document.querySelector("#contacto").classList.remove("oculto"); 
        document.querySelector("#contacto").classList.add("visible");

    }
    if (p == 2){
        
        document.querySelector("#proyectos").classList.remove("oculto"); 
        document.querySelector("#proyectos").classList.add("visible");

    }

}

//AGRADECER IMAGEN DE FONDO AL FOTOGRAFO
