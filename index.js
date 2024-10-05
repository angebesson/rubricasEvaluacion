const text = document.querySelector("#text");
const boton = document.getElementById("btn-agregar");

if (text) { text.innerText = "En el trabajo con "; }
if (boton) {
  boton.addEventListener("click", () => {
    let actividad = document.querySelector(".actividad").value;
    let contenido = document.querySelector(".contenido").value;
    let convivencia = document.querySelector(".convivencia").value;
    let evaluacionAct = document.querySelector(".evaluacionAct").value;
    if (actividad == "" || evaluacionAct == "" || contenido ==""|| convivencia =="") {
      Toastify({
        text: "Ingresa actividad/evaluación",
        className: "info",
        position: "left",
        style: {
          background: "linear-gradient(to right,  #f6c8bd8f, #d481544d)",
          color: "black"
        }
      }).showToast();
    } else {
        let estudiante = document.querySelector(".estudiante").value;
        let actividad = document.querySelector(".actividad").value;
        let evaluacionAct = document.querySelector(".evaluacionAct").value;
        let evaluacionCont = document.querySelector(".evaluacionCont").value;
        let evaluacionConv = document.querySelector(".evaluacionConv").value;
        text.innerText = "Estudiante: " + estudiante + "\n";
        text.innerText += " En el trabajo con " + actividad +" "+ evaluacionAct + "\n";
        text.innerText += " Donde abordamos " + contenido +" "+ evaluacionCont + "\n";
        text.innerText += " Logra una convivencia " + convivencia +" "+ evaluacionConv;
       
            }
        });
    }






    function clearForm() {
        inputContainers = Array.from(document.querySelectorAll('.input-container'));
        for(const container of inputContainers){
            container.innerHTML = ``;
            budgetNumberInput.value = '';
            output.innerText = '' ;
            output.classList.add('hide');
                }};
                clearButton.addEventListener("click", clearForm)
    