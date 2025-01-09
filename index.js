//
// import fs from 'fs'
const relatorio = [
  {
    "unidade": "José Moraes Corrêia",
    "curso": "Técnico em Informática para Internet",
    "periodo": "2023.2",
    "turno": "manhã",
    "cidade": "Parnaíba-PI",
    "instrutora": "Hilton Elias",
    "modalidade": "qualificação profissional",
    "linha_de_acao": "gratuidade"
  }
];


function loadingInfo() {
  const container = document.getElementById("container");

  container.innerHTML = relatorio.map((objeto) =>
        `<ol> --- SOLICITAÇÃO DE KIT ---
            <li> Unidade: ${objeto.unidade},</li>
            <li> Curso: ${objeto.curso},</li>
            <li> Periodo: ${objeto.periodo},</li>
            <li> Turno: ${objeto.turno},</li>
            <li> Cidade: ${objeto.cidade},</li>
            <li> Instrutora: ${objeto.instrutora},</li>
            <li> Modalidade: ${objeto.modalidade},</li>
            <li> Linha de ação: ${objeto.linha_de_acao}</li>
        </ol>`
    )
    .join("\n");
};

const formulario = document.querySelector('#form');
formulario.addEventListener('submit', event => {
    event.preventDefault();

    const unidade = document.getElementById('unidade').value;
    const curso = document.getElementById('curso').value;const periodo = document.getElementById('periodo').value;
    const turno = document.getElementById('turno').value;const cidade = document.getElementById('cidade').value;
    const instrutora = document.getElementById('instrutora').value;
    const modalidade = document.getElementById('modalidade').value;
    const linha_de_acao = document.getElementById('linha-de-acao').value;

    const newElement = {
        unidade,
        curso,
        periodo,
        turno,
        cidade,
        instrutora,
        modalidade,
        linha_de_acao
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
    filename: "docs.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(options).from(container).save();
}
