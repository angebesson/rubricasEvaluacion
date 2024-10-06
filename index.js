const text = document.querySelector("#text");
const boton = document.getElementById("btn-agregar");
const diadeHoy = ()=>{
    console.log(new Date());
}

let hoy = () =>{ 
    let ahora= new Date ();
console.log (ahora.toLocaleDateString());
}
hoy()
diadeHoy()

if (text) { text.innerText = "Resultado de evaluación: "; }
if (boton) {
    boton.addEventListener("click", () => {
        let materia = document.querySelector(".materia").value;
        let fechaSelec = document.querySelector(".fecha").value;
        let actividad = document.querySelector(".actividad").value;
        let contenido = document.querySelector(".contenido").value;
        let convivencia = document.querySelector(".convivencia").value;
        let evaluacionAct = document.querySelector(".evaluacionAct").value;
        if (actividad === "" || evaluacionAct === "" || contenido === "" || materia === "" || fechaSelec === "") {
            Toastify({
                text: "Ingresa dato faltante",
                className: "info",
                position: "left",
                style: {
                    background: "linear-gradient(to right,  #ffadad, #f5f6f7)",
                    color: "black"
                }
            }).showToast();
        } else {
            let estudiante = document.querySelector(".estudiante").value;
            let materia = document.querySelector(".materia").value;
            let fechaSelec = document.querySelector(".fecha").value;
            let fecha = new Date(fechaSelec);
            let fechaFormat =  fecha.toLocaleDateString();
            let curso = document.querySelector(".curso").value;
            let actividad = document.querySelector(".actividad").value;
            let evaluacionAct = document.querySelector(".evaluacionAct").value;
            let evaluacionCont = document.querySelector(".evaluacionCont").value;
            let evaluacionConv = document.querySelector(".evaluacionConv").value;
            text.innerHTML = "Estudiante: " + estudiante + "&nbsp;&nbsp;&nbsp;&nbsp;";
            text.innerHTML += "      Curso: " + curso +"&nbsp;&nbsp;&nbsp;&nbsp;";
            text.innerHTML += "Materia: " + materia + "&nbsp;&nbsp;&nbsp;&nbsp;";
            text.innerText += "Fecha: "+ fechaFormat + "\n";
            text.innerText += " En el trabajo con: " + actividad + " Desempeño: " + evaluacionAct + textoEvaluacionAct() + "\n";
            text.innerText += " Donde abordamos: " + contenido + " Desempeño: " + evaluacionCont + textoEvaluacionCont() + "\n";
            text.innerText += " En la convivencia: " + convivencia + " " + evaluacionConv + textoEvaluacionConv();

        }
    });
}

const textoEvaluacionAct = () => {
    let evaluacionAct = document.querySelector(".evaluacionAct").value;
    if (evaluacionAct === "Excelente") {
        return ". Es original en sus propuestas, construyendo sobre la base del contenido."
    } else if (evaluacionAct === "Muy bueno") {
        return ". Propone varias vías para resolver la actividad.";
    } else if (evaluacionAct === "Bueno") {
        return ". Resuelve la propuesta con apoyo.";
    } else if (evaluacionAct === "En proceso") {
        return ". Requiere acompañamiento e intervención docente para resolver.";
    } return "";
}

const textoEvaluacionCont = () => {
    let evaluacionCont = document.querySelector(".evaluacionCont").value;
    if (evaluacionCont === "Excelente") {
        return ". Profundiza en los contenidos principales."
    } else if (evaluacionCont === "Muy bueno") {
        return ". Aborda la mayoría de los contenidos.";
    } else if (evaluacionCont === "Bueno") {
        return ". Aborda algún contenido o alguna característica de éstos.";
    } else if (evaluacionCont === "En proceso") {
        return ". No aborda el contenido.";
    } return "";
}

const textoEvaluacionConv = () => {
    let evaluacionConv = document.querySelector(".evaluacionConv").value;
    if (evaluacionConv === "Excelente") {
        return ". Se destaca por sus valores y respeto."
    } else if (evaluacionConv === "Muy buena") {
        return ". Logra una buena convivencia.";
    } else if (evaluacionConv === "Buena") {
        return ". Se debe enfatizar los acuerdos con frecuencia.";
    } else if (evaluacionConv === "En proceso") {
        return ". No acepta los acuerdos de convivencia.";
    } return "";
}


const pintarEvaluacion = () => {
    const contenedor = document.getElementById("card-info");
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                           <span class="card-title">${estudiante}</span>
                            </div>
                         <div class="card-content">
                             <p>${producto.tipo} | ${producto.litros} litros</p>
                             <p> $${producto.precio}</p>
                         </div>
                        `
    contenedor.appendChild(div);
};

function clearForm() {
    inputContainers = Array.from(document.querySelectorAll('.input-container'));
    for (const container of inputContainers) {
        container.innerHTML = ``;
        budgetNumberInput.value = '';
        output.innerText = '';
        output.classList.add('hide');
    }
};
clearButton.addEventListener("click", clearForm)
