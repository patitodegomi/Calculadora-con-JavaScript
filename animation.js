const resultado = document.getElementById("display");
const botones = document.querySelectorAll("button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        
        if (boton.id === "AC"){
            resultado.textContent = "0";
            return;
        }

        if (boton.id === "borr"){
            if (resultado.textContent.length === 1){
                resultado.textContent = "0";
                return;
            } else{
                resultado.textContent = resultado.textContent.slice(0, -1);
            return;
            }
        }

        if (boton.id === "igual"){
            try{
                resultado.textContent = eval(resultado.textContent);
            return;
            } catch {
                resultado.textContent = "Error";
            }
        }

        if (resultado.textContent === "0"){
            resultado.textContent = botonApretado;
        } else{
            resultado.textContent += botonApretado;
        }
    })
})