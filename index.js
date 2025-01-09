//
// import fs from 'fs'
const relatorio = [
  {
    produto: "papel A4",
    quantidade: 18,
  }
];


function loadingInfo() {
  const container = document.getElementById("container");

  container.innerHTML = relatorio
    .map(
      (objeto) =>
        `<ul> --- INFORMAÇÕES ---
            <li> PRODUTO: ${objeto.produto};
            <li> QUANTIDADE: ${objeto.quantidade}
        </ul>`
    )
    .join("\n");
};

const formulario = document.querySelector('#form');
formulario.addEventListener('submit', event => {
    event.preventDefault();

    const produto = document.getElementById('product').value;
    const quantidade = parseInt(document.getElementById('quant').value, 10);

    const newElement = {
        produto,
        quantidade
    };
    
    console.log(relatorio);
    
    relatorio.push(newElement);
    
    //
    formulario.reset();
    loadingInfo();
})

loadingInfo();


function downloadPDF() {
  container;
  const options = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(options).from(container).save();
}
