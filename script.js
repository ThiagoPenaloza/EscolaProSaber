let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    contactButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contatos').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Animated reveal of sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealSections);

// Mobile menu toggle
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

//modals starts

// Get the modal
var modal = document.getElementById("subjectModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function closeModal() {
    document.querySelector(".modal-content").style.animation = "modalFadeOut 0.3s ease-out";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
    document.body.style.overflow = 'auto';
}

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}



// Function to open modal with specific content
// Function to open modal with specific content
function openModal(title, content, colorClass) {
    document.getElementById("modalTitle").innerText = title;
    
    // Split the content into sentences
    let sentences = content.split('.');
    
    // Ensure we have at least 3 paragraphs
    let paragraphs = [];
    let currentParagraph = '';
    
    sentences.forEach((sentence, index) => {
        if (sentence.trim() !== '') {
            currentParagraph += sentence.trim() + '.';
        }
        
        // Create a new paragraph after every 3 sentences or at the end
        if ((index + 1) % 3 === 0 || index === sentences.length - 1) {
            paragraphs.push(currentParagraph);
            currentParagraph = '';
        }
    });
    
    // Join paragraphs with line breaks
    content = paragraphs.join('<br><br>');
    
    document.getElementById("modalContent").innerHTML = content;
    modal.style.display = "block";
    document.querySelector(".modal-header").className = "modal-header " + colorClass;
    document.querySelector(".modal-content").className = "modal-content " + colorClass;
    document.querySelector(".modal-content").style.animation = "modalFadeIn 0.3s ease-out";
    
    document.body.style.overflow = 'hidden';

    modal.addEventListener('touchstart', function(e) {
        if (e.target == modal) {
            closeModal();
        }
    });
}




  
  // Add click event listeners to "Saiba Mais" buttons
  document.querySelectorAll('.subjects .box .btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const titles = [
        "A Filosofia da Escola",
        "O Método Montessori",
        "A Escola"
      ];
      const contents = [
        "Temos como conceito de escola, uma organização que é parte integrante da sociedade, da família e da cultura, instituição preocupada com a possibilidade de viver com alegria, de construir indivíduos críticos e criativos, autônomos e conscientes, cooperativos e responsáveis, seres humanos no melhor de sua essência.\n\nTemos consciência do nosso compromisso ético, pedagógico e moral para com os futuros adultos que se encontram em nossas vidas. Responsabilidade calcada no dever de aproximar áreas específicas do conhecimento, valores e cultura.\n\nAcreditamos numa aprendizagem para a vida, onde se recupere o valor da educação para a escola, em que se permita o desenvolvimento de indivíduos autônomos, mais críticos e solidários nesta nova sociedade que se forma, auxiliando na preparação para a vida e não, simplesmente ganhar a vida.\n\nDessa forma, visualizamos, com o auxílio da trajetória de Maria Montessori, a possibilidade de um trabalho educacional mais consistente e coerente com as verdadeiras necessidades humanas que precisam ser consideradas seriamente, como a reflexão crítica, o equilíbrio e o sentido da verdadeira evolução humana, tecnológica e cientifíca.\n\nA metodologia Montessoriana, baseada num sistema de valores considerados essenciais para a formação do homem, visa à constituição integral do indivíduo, buscando o crescimento de um adulto sadio e, principalmente, humano. Um agente de mudanças dentro da sociedade.\n\nEsta perspectiva pressupõe o exercício da iniciativa, da autonomia da determinação, do gerenciamento, da criatividade, da espiritualidade e do lazer. Exigências que a sociedade atual espera do novo perfil de homem que se estabelece na sociedade de hoje, quer seja nas relações pessoais, interpessoais, profissionais, ecológicas e globais. Partindo do pressuposto que o homem é construtor de si mesmo, ele é quem absorve e integra sua cultura e constrói sua própria personalidade.\n\nNesse contexto, buscamos, não apenas um emprego teórico em relação à conduta do aluno, mas uma aplicabilidade e funcionabilidade da equipe, no que diz respeito às atitudes. Existe a busca por um ideal de ser humano, sendo trabalhado desde o momento em que o aluno entra na escola até o momento em que se despede, seja durante uma atividade, aula, palestra ou refeição.\n\nDessa forma, esperamos que assim como na escola, na família e na sociedade os adultos(um corpo maior) venham a ensinar as crianças(um corpo menor) a cuidar, se interessar, compartilhar, ser intimo, brincar e trabalhar em conjunto.\n\nEsta é a maior tarefa da Escola... Construir-se numa verdadeira ajuda à vida!",
        "Criado pela Dra. Maria Montessori, e iniciado na itália em 1907, o Método Montessori é hoje sem dúvida o mais difundido pelo mundo. Em todos os continentes encontraremos escolas montessorianas e se acessarmos à internet, vamos nos surpreender com tantas instituições irmanadas pelo mesmo ideal, pois muito mais que uma metodologia, uma Escola Montessori, tem uma filosofia de vida inspirada nos princípios de liberdade e nos ideais de solidariedade humana, ajudando cada criança a construir-se para o exercício de sua cidadania além de capacitá-la academicamente para buscar novos conhecimentos.\n\n<h2 class='modal-highlight'>E O QUE FAZ A EDUCAÇÃO MONTESSORIANA SER TÃO ESPECIAL E DIFERENCIADA?</h2>\n\n<h3 class='modal-subtitle'>Nas relações com os pais</h3>\n\nIniciamos por combater uma discriminação!\n\nEm nossa sociedade o termo \"pais\" nove das dez vezes em que é usado, na realidade significa \"mãe\". Por isso, de forma ostensiva, usamos em toda a primeira parte desta nossa \"conversa\" a palavra mãe como o adulto responsável pela escolha do destino das crianças. Invencionávamos chamar a atenção para este fato!\n\nApesar de toda a divulgação dos estudos de psicólogos, sociólogos e educadores, isto ainda é, nos dias de hoje, o socialmente instituído.\n\nTodos nós em algum momento, fomos espectadores de situações onde um homem ao estar com seu filho num parque, no pediatra, num aniversário, recebeu perguntas do tipo: o que está fazendo aqui sozinho com seu filho? Onde está a sua mulher? Temos a firme convicção da necessidade que se reconheça, a importância dos homens no mundo da primeira infância; buscamos harmonizar em nosso trabalho, o respeito às ideias e expectativas dos pais, favorecendo-lhes oportunidades iguais sem os \"papeis\" discriminatórios entre o homem e a mulher.\n\n<h3 class='modal-subtitle'>Nas relações com as crianças</h3>\n\nPara começar, compartilhamos de tese de que as crianças nascem com um patrimônio genético próprio e com distintas predisposições e personalidades. No entanto, acreditamos também, que aquilo que acontece depois do nascimento será bem mais significativo para determinar em que tipo de pessoas irão se tornar. Esta convicção incorpora uma grande responsabilidade para aqueles que dedicam-se ao trabalho com os mais importantes anos da formação do Homem.\n\nPensamos que um dos compromissos mais importantes de um adulto, que se ocupa de cuidar de uma criança pequena,seja aquele de fazê-la sentir-se feliz pela maior parte do tempo possível. A vida já é bastante dolorosa e frustrante e não há necessidade de agregar voluntariamente uma prática educativa rígida, punitiva ou imperativa. De outro lado, não pensamos absolutamente que a liberdade ilimitada seja a chave para a felicidade e ótimo desenvolvimento. Por esta razão, embora possamos dar a impressão de que só assumimos uma posição \"não interventista\" , afirmamos que sempre que possível, o adulto deve FAVORECER, antes de INTERVIR numa atividade da criança. E, na Escola, quando o fazemos, é num contexto de minuciosa programação e num ambiente bem organizado.\n\nOs adultos têm um papel básico na formação do comportamento das crianças, mas esses podem decidir desenvolvê-lo, assumindo uma postura autoritária ou de cooperação, por meio de uma ordem ou de uma negociação!\n\nExistem provas irrefutáveis de que o segundo posicionamento é de longe muito mais eficaz, gerando menos conflitos e sofrimentos. Portanto, damos muita importância às ações de negociação ao invés das de coerção, porque só desta forma podemos no futuro, ajudar as crianças a negociarem entre si.",
        "Terminado o período oficialmente concedido à mulher para os cuidados com o seu bebê, chega a hora de tomar decisões que invariavelmente criam situações que tornam suas escolhas muito difíceis. A volta ao trabalho vem acrescida de sentimentos antagônicos que causam medo, insegurança, culpa...\n\nNum momento está feliz por retornar às suas atividades profissionais, no outro, sente-se angustiada... O que é melhor para seu filho: Deixar de trabalhar? Recorrer a alguma pessoa da família? Contratar uma babá? Colocar numa creche? Numa Escola?\n\nPelas já conhecidas razões, as duas últimas podem ser consideradas \"uma preferência nacional\", sendo portanto frequente que as crianças pequenas passem ao menos uma parte do dia fora de casa, sob os cuidados de educadores.\n\nSabemos que a variedade desses serviços podem parecer impressionantes, mas na verdade as mães têm poucas possibilidades de escolha. Os progressos referentes ao acesso de conhecimento sobre o desenvolvimento das crianças é bastante significado, mesmo assim, alguns destes locais estão longe de conferir ao seu trabalho um relacionamento adequado à importância dos 3 primeiros anos de vida."
      ];
      const colorClasses = ["one", "two", "three"];
      openModal(titles[index], contents[index], colorClasses[index]);
    });
  });



  // Add this to your existing script.js file

  document.getElementById("cardapio").addEventListener("click", () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    openMenuModal(month, year);
});


function openMenuModal(month, year) {
    const modal = document.getElementById("menuModal");
    const modalTitle = document.getElementById("menuModalTitle");
    const tableBody = document.getElementById("menuTableBody");

    modalTitle.textContent = `Cardápio - ${month} ${year}`;

    // Sample data - replace with your actual data
    const menuData = [
        { date: "Segunda-feira", breakfast: "Pão com manteiga", lunch: "Arroz, feijão, frango grelhado", snack: "Frutas variadas" },
        { date: "Terça-feira", breakfast: "Cereais com leite", lunch: "Macarrão, carne moída, salada", snack: "Bolo de cenoura" },
        { date: "Quarta-feira", breakfast: "Iogurte com granola", lunch: "Arroz, feijão, peixe assado", snack: "Sanduíche natural" },
        { date: "Quinta-feira", breakfast: "Tapioca", lunch: "Arroz, feijão, bife, batata frita", snack: "Gelatina com frutas" },
        { date: "Sexta-feira", breakfast: "Panquecas", lunch: "Feijoada, farofa, couve", snack: "Pipoca" }
    ];

    tableBody.innerHTML = "";
    menuData.forEach(item => {
        const row = `
            <tr>
                <td>${item.date}</td>
                <td>${item.breakfast}</td>
                <td>${item.lunch}</td>
                <td>${item.snack}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    modal.style.display = "block";
}

document.querySelector("#menuModal .close").addEventListener("click", () => {
    document.getElementById("menuModal").style.display = "none";
});

document.getElementById("materiaisButton").addEventListener("click", openMaterialsModal);

function openMaterialsModal() {
    const modal = document.getElementById("materialsModal");
    modal.style.display = "block";
}

document.querySelector("#materialsModal .close").addEventListener("click", () => {
    document.getElementById("materialsModal").style.display = "none";
});

const materialsData = {
    Alfabetização: {
        estojo: ["Lápis de cor", "Canetinhas", "Tesoura"],
        demaisItens: ["Caderno grande", "Cola", "Borracha"],
        higiene: ["Escova de dentes", "Pasta dental", "Toalha pequena"]
    },
    Primeiro: {
        estojo: ["Lápis de cor", "Canetinhas", "Apontador"],
        demaisItens: ["Caderno pequeno", "Régua", "Borracha"],
        higiene: ["Escova de dentes", "Pasta dental", "Lenços umedecidos"]
    },
    Segundo: {
        estojo: ["Lápis de cor", "Canetinhas", "Apontador"],
        demaisItens: ["Caderno pequeno", "Régua", "Borracha"],
        higiene: ["Escova de dentes", "Pasta dental", "Lenços umedecidos"]
    },
    Terceiro: {
        estojo: ["Lápis de cor", "Canetinhas", "Apontador"],
        demaisItens: ["Caderno pequeno", "Régua", "Borracha"],
        higiene: ["Escova de dentes", "Pasta dental", "Lenços umedecidos"]
    },
    Quarto: {
        estojo: ["Lápis de cor", "Canetinhas", "Apontador"],
        demaisItens: ["Caderno pequeno", "Régua", "Borracha"],
        higiene: ["Escova de dentes", "Pasta dental", "Lenços umedecidos"]
    },
    Quinto: {
        estojo: ["Lápis de cor", "Canetinhas", "Apontador"],
        demaisItens: ["Caderno pequeno", "Régua", "Borracha"],
        higiene: ["Escova de dentes", "Pasta dental", "Lenços umedecidos"]
    }
    // Add data for other grades...
};

document.querySelectorAll(".grade-btn").forEach(button => {
    button.addEventListener("click", () => {
        const grade = button.getAttribute("data-grade");
        displayMaterialsList(grade);
    });
});

function displayMaterialsList(grade) {
    const materialsListDiv = document.getElementById("materialsList");
    const materials = materialsData[grade];

    let html = `<h3>${grade} Ano</h3>`;
    html += `<h4>Estojo Contendo:</h4><ul>`;
    materials.estojo.forEach(item => html += `<li>${item}</li>`);
    html += `</ul><h4>Demais Itens:</h4><ul>`;
    materials.demaisItens.forEach(item => html += `<li>${item}</li>`);
    html += `</ul><h4>Higiene Pessoal:</h4><ul>`;
    materials.higiene.forEach(item => html += `<li>${item}</li>`);
    html += `</ul>`;

    materialsListDiv.innerHTML = html;
}
