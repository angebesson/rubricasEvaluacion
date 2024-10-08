const text = document.querySelector("#text");
const boton = document.getElementById("btn-agregar");
let materia = document.querySelector(".materia").value;

function accionUsuario(event) {
    event.preventDefault()
}

if (text) { text.innerText = "Resultado de evaluación: "; }
if (boton) {
    boton.addEventListener("click", () => {
        let materia = document.querySelector(".materia").value;
        let fechaSelec = document.querySelector(".fecha").value;
        let contenido = document.querySelector(".contenido").value;
        let contenido1 = document.querySelector(".contenido1").value;
        let contenido2 = document.querySelector(".contenido2").value;
        let convivencia = document.querySelector(".convivencia").value;
        let evaluacionCont = document.querySelector(".evaluacionCont").value;
        let evaluacionCont1 = document.querySelector(".evaluacionCont1").value;
        let evaluacionCont2 = document.querySelector(".evaluacionCont2").value;
        let evaluacionConv = document.querySelector(".evaluacionConv").value;
        if (evaluacionCont === "" || contenido === "" || materia === "" || fechaSelec === "" || evaluacionCont1 === "" || evaluacionCont2 === "" || evaluacionConv === "") {
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
            let fechaFormat = obtenerMes(fecha);
            let curso = document.querySelector(".curso").value;
            let evaluacionCont = document.querySelector(".evaluacionCont").value;
            let evaluacionCont1 = document.querySelector(".evaluacionCont1").value;
            let evaluacionCont2 = document.querySelector(".evaluacionCont2").value;
            let evaluacionConv = document.querySelector(".evaluacionConv").value;
            const icono = iconForMat(materia);

            text.innerHTML = "";
            text.insertAdjacentHTML('beforeend', `<span class="card-title">${estudiante.toUpperCase()}</span>`);
            text.insertAdjacentHTML('beforeend', `  <div class="card-content">
                             <p>Curso: ${curso} | Materia: ${materia} </p>
                             <p>Período evaluado: ${fechaFormat}<br></p>
                             </div>`);
            text.insertAdjacentHTML('beforeend', `<div class="content1"><p>• En el trabajo con: ${contenido}</p> <p>Desempeño:  <strong> ${evaluacionCont} </strong>${textoEvaluacionCont()} </p> </div>`);
            text.insertAdjacentHTML('beforeend', `<div class="content2"><p>• En el trabajo con: ${contenido1}</p> <p>Desempeño:  <strong> ${evaluacionCont1} </strong> ${textoEvaluacionCont1()}</p>`);
            text.insertAdjacentHTML('beforeend', `<div class="content3"><p>• En el trabajo con: ${contenido2}</p> <p>Desempeño:  <strong> ${evaluacionCont2} </strong> ${textoEvaluacionCont2()}</p>`);
            text.insertAdjacentHTML('beforeend', `<div class="conviv"><p>• En la convivencia:${convivencia}</p><p> <strong>${evaluacionConv}</strong>${textoEvaluacionConv()}</p>`);
        }
    });
}
const iconForMat = (materia) => {
    if (materia === "Artes Visuales") {
        return `<i class="fa-solid fa-palette"></i>`;
    } else if (materia === "Educación Física") {
        return `<i class="fa-solid fa-person-running"></i>`;
    } else if (materia === "Tecnología") {
        return `<i class="fa-solid fa-gears"></i>`;
    } else if (materia === "Música") {
        return `<i class="fa-solid fa-music"></i>`;
    }
    return "";
}

const textoEvaluacionCont = () => {
    let evaluacionCont = document.querySelector(".evaluacionCont").value;
    if (evaluacionCont === "Excelente") {
        return ": Utiliza varias vías para resolver la propuesta. Construye su propio aprendizaje, autónomamente."
    } else if (evaluacionCont === "Muy bueno") {
        return ": Presenta un buen ritmo de trabajo, manifiesta interés, desempeñándose eficazmente.";
    } else if (evaluacionCont === "Bueno") {
        return ": Trabaja correctamente en clase.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    } else if (evaluacionCont === "En proceso(EPAC)") {
        return ": Requiere apoyo e intervención docente en todo momento para lograr construir su aprendizaje.Aún no adquirió el contenido enseñado.";
    } return "";
}

const textoEvaluacionCont1 = () => {
    let evaluacionCont1 = document.querySelector(".evaluacionCont1").value;
    if (evaluacionCont1 === "Excelente") {
        return ": Utiliza varias vías para resolver la propuesta. Construye su propio aprendizaje, autónomamente."
    } else if (evaluacionCont1 === "Muy bueno") {
        return ": Presenta un buen ritmo de trabajo, manifiesta interés, desempeñándose eficazmente.";
    } else if (evaluacionCont1 === "Bueno") {
        return ": Trabaja correctamente en clase.                         ";
    } else if (evaluacionCont1 === "En proceso(EPAC)") {
        return ": Requiere apoyo e intervención docente en todo momento para lograr construir su aprendizaje.Aún no adquirió el contenido enseñado.";
    } return "";
}

const textoEvaluacionConv = () => {
    let evaluacionConv = document.querySelector(".evaluacionConv").value;
    if (evaluacionConv === "Muy buena") {
        return ": Logra una buena convivencia destacándose por sus valores, respetando a sus pares y docente.";
    } else if (evaluacionConv === "Buena") {
        return ": Se debe recordar pautas de comportamiento, como dialogar, tratarse con respeto, compartir en armonía.";
    } else if (evaluacionConv === "En proceso") {
        return ": No pone en práctica las sugerencias brindadas por el docente, debe continuar trabajando la escucha, la comunicación y el respeto a los demás.";
    } return "";
}

const textoEvaluacionCont2 = () => {
    let evaluacionCont2 = document.querySelector(".evaluacionCont2").value;
    if (evaluacionCont2 === "Excelente") {
        return ": Utiliza varias vías para resolver la propuesta. Construye su propio aprendizaje, autónomamente."
    } else if (evaluacionCont2 === "Muy bueno") {
        return ": Presenta un buen ritmo de trabajo, manifiesta interés, desempeñándose eficazmente.";
    } else if (evaluacionCont2 === "Bueno") {
        return ": Trabaja correctamente en clase.                             ";
    } else if (evaluacionCont2 === "En proceso(EPAC)") {
        return ": Requiere apoyo e intervención docente en todo momento para lograr construir su aprendizaje.Aún no adquirió el contenido enseñado.";
    } return "";
}

function obtenerMes(fecha) {
    if (!(fecha instanceof Date)) {
        throw new Error('El argumento debe ser una fecha válida');
    }

    const opciones = { month: 'long' };
    const mes = fecha.toLocaleDateString('es-ES', opciones);

    return mes.toUpperCase();
}




// const pintarEvaluacion = () => {
//     const contenedor = document.getElementById("card-info");
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML += `<div class="card-image">
//                            <span class="card-title">${estudiante}</span>
//                             </div>
//                          <div class="card-content">
//                              <p>${producto.tipo} | ${producto.litros} litros</p>
//                              <p> $${producto.precio}</p>
//                          </div>
//                         `
//     contenedor.appendChild(div);
// };

// function clearForm() {
//     inputContainers = Array.from(document.querySelectorAll('.input-container'));
//     for (const container of inputContainers) {
//         container.innerHTML = ``;
//         budgetNumberInput.value = '';
//         output.innerText = '';
//         output.classList.add('hide');
//     }
// };
// clearButton.addEventListener("click", clearForm)

const printBtn = document.querySelector(".button-print");
if (printBtn) {
    printBtn.addEventListener("click", function () {
        // Crea una nueva ventana
        const printWindow = window.open('', '', 'width=600,height=400');
        const cardContent = document.querySelector('.card-info').outerHTML;

        // Estilos para la impresión
        printWindow.document.write(`
            <html>
                <head>
                    <title>Imprimir Card</title>
                    <style>
                    
                    body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
 }
                    .card-info {
  background-color: #fafafa;
  display: flex;
  width: fit-content;
  margin: 10px;
  padding: 10px;
  justify-content: center;
  
}
                    div {
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;
  }
                .card-title{
  color: #32229a;
  position: unset;
  text-align: center;
   border-radius: 10px;
  justify-content: space-around;
  background: linear-gradient(to right, #ff7f5f7e, #feb47b6b);
  font-size: medium;
}
                       .encabezado{
  display: flex;
  flex-direction: row;
  justify-content: center;
 
}
                    .card-content{
  font-size: medium;
}
                    #text {
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
                    div .content1, .content2, .content3, .conviv{
 margin: 2px, 3px, 2px, 3px;
 font-size: small;
 align-items: baseline;
 justify-content: baseline;
 margin-left: 10px;
}
                    </style>
                </head>
                <body>
                    ${cardContent}
                </body>
            </html>
        `);

        printWindow.document.close(); // Cierra el documento
        printWindow.focus(); // Enfoca la ventana
        printWindow.print(); // Abre el cuadro de diálogo de impresión
        printWindow.close(); // Cierra la ventana después de imprimir
    });
};

// document.getElementById("printButton").addEventListener("click", function() {
//     // Crea una nueva ventana
//     const printWindow = window.open('', '', 'width=600,height=400');
//     const cardContent = document.querySelector('.card').outerHTML;

//     // Estilos para la impresión
//     printWindow.document.write(`
//         <html>
//             <head>
//                 <title>Imprimir Card</title>
//                 <style>
//                     body {
//                         font-family: Arial, sans-serif;
//                         margin: 20px;
//                     }
//                     .card {
//                         border: 1px solid #ccc;
//                         border-radius: 5px;
//                         padding: 20px;
//                         box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
//                     }
//                 </style>
//             </head>
//             <body>
//                 ${cardContent}
//             </body>
//         </html>
//     `);

//     printWindow.document.close(); // Cierra el documento
//     printWindow.focus(); // Enfoca la ventana
//     printWindow.print(); // Abre el cuadro de diálogo de impresión
//     printWindow.close(); // Cierra la ventana después de imprimir
// });