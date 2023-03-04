let radioBtns = document.querySelectorAll('input[name="curso"]');
let selecionado;
const eletro1 = document.getElementById("eletro1_info");
const info1 = document.getElementById("info1_info");
const info2 = document.getElementById("info2_info");
const info3 = document.getElementById("info3_info");


const exibirDiv = (id) => {
  id.style.display = "flex";
};

const ocultarDiv = (id) => {
  id.style.display = "none";
};

let acharSelecionado = () => {
  selecionado = document.querySelector('input[name="curso"]:checked').value;
  
  if (selecionado === "eletro1") {
    console.log("Selecionado");
    exibirDiv(eletro1);
    ocultarDiv(info1);
    ocultarDiv(info2);
    ocultarDiv(info3);
  } else if (selecionado === "info1") {
    exibirDiv(info1);
    ocultarDiv(eletro1);
    ocultarDiv(info2);
    ocultarDiv(info3);
  }else if (selecionado === "info2") {
    ocultarDiv(info1);
    ocultarDiv(eletro1);
    exibirDiv(info2);
    ocultarDiv(info3);
  }
  else if (selecionado === "info3") {
    ocultarDiv(info1);
    ocultarDiv(eletro1);
    ocultarDiv(info2);
    exibirDiv(info3);
  }
};

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", acharSelecionado);
});

 
