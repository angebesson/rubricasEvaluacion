const text = document.querySelector("#text");
const boton = document.getElementById("btn-agregar");
let materia = document.querySelector(".materia").value;



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

        function imprimo (){
               const tbody = document.querySelector('.card-info')
    if (tbody.childElementCount === 0) {
        Toastify({
            text: "No hay datos para crear PDF",
            className: "info",
            position: "center",
            style: {
                background: "linear-gradient(to right,  #ffadad, #f5f6f7)",
                color: "black"
            }
        }).showToast();
        return
    }

            html2canvas(document.querySelector('#text')).then((canvas)=>{
                let base64image = canvas.toDataURL('image/png');
                console.log(base64image);
                let pdf = new jsPDF ('p','px', [1600,1131]);
                pdf.addImage (base64image, 'PNG',15,15,495,310);
                pdf.save('rubrica')
            })
        }

        //HOJA de VARIAS EVALUACIONES
    const agregarEvaluacion = () => {
        const tbody = document.querySelector('.card-info')
        if (tbody.childElementCount === 0) {
         Toastify({
             text: "No hay datos para agregar",
             className: "info",
             position: "center",
             style: {
                 background: "linear-gradient(to right,  #ffadad, #f5f6f7)",
                 color: "black"
             }
         }).showToast();
         return
        }
         if (tbody.childElementCount >= 1) {
            html2canvas(document.querySelector('#text')).then((canvas) => {
                let base64image = canvas.toDataURL('image/png');
                
                let contenedor = document.getElementById("content-eval");
                if (contenedor) {
                    // If you want to add the image to the HTML:
                    let img = document.createElement('img');
                    img.src = base64image;
                    img.style.width = '495px';
                    img.style.height = '310px';
                    contenedor.appendChild(img);
                } else {
                    console.error("Element with id 'content-eval' not found");
                }
            });
        }
    }


 const generatePDF = () => {
    const tbody = document.querySelector('#content-eval')
    if (tbody.childElementCount === 0) {
     Toastify({
         text: "No hay datos para crear PDF",
         className: "info",
         position: "center",
         style: {
             background: "linear-gradient(to right,  #ffadad, #f5f6f7)",
             color: "black"
         }
     }).showToast();
     return
    }
    html2canvas(document.querySelector('#content-eval'), {
      scale: 2 // Increase scale for better quality
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      
      // A4 size in pts: 595.28 x 841.89
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30; // Give it a little top margin
      
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('variasRubricas.pdf');
    });
  };