const statusconversa = [
  {
    img: "../../assets/img/app.png",
    titulo: "Sobre",
    paragrafo:
      "Vamos conversar sobre mim, minha trajetória e trocar experiências?",

    respostas: {
      help: `
<pre>
📚 Comandos disponíveis:

nome
cargo
sobre
objetivo
experiencia

stack
habilidades
skills

html
css
javascript
python
cpp

git
github

interesses
nivel
foco atual
estudando
qualidades
disponibilidade
</pre>
  `,
      nome: "Giovani Manzatto Furlan",

      cargo: "Desenvolvedor Front-End em evolução para Full-Stack",

      sobre:
        "Sou apaixonado por tecnologia, desenvolvimento de software e criação de soluções que geram impacto real. Gosto de aprender continuamente, enfrentar novos desafios e transformar ideias em projetos práticos.",

      objetivo:
        "Meu objetivo é me tornar um desenvolvedor Full-Stack completo, criando aplicações modernas, sistemas escaláveis e soluções inovadoras utilizando tecnologias web, backend e Internet das Coisas (IoT).",

      experiencia:
        "Tenho experiência no desenvolvimento de interfaces web utilizando HTML, CSS e JavaScript, criando páginas responsivas, organizadas e focadas na experiência do usuário.",

      stack: {
        frontend: ["HTML", "CSS", "JavaScript"],

        backend: ["Python (Iniciante)", "C++ (Em desenvolvimento)"],

        versionamento: ["Git", "GitHub"],
      },

      habilidades: [
        "Criação de interfaces responsivas",
        "Estruturação de páginas web",
        "Estilização moderna com CSS",
        "Lógica de programação",
        "Manipulação do DOM",
        "Versionamento de código",
        "Resolução de problemas",
        "Aprendizado contínuo",
      ],

      skills: {
        html: "Estruturação semântica de páginas web.",
        css: "Estilização, layouts responsivos, Flexbox e Grid.",
        javascript: "Interatividade, manipulação do DOM e lógica no navegador.",
        python: "Fundamentos da linguagem, lógica e automações básicas.",
        cpp: "Estudos focados em estruturas de dados, desempenho e sistemas.",
        git: "Controle de versão e gerenciamento de alterações.",
        github: "Hospedagem de projetos e colaboração em equipe.",
      },

      interesses: [
        "Internet das Coisas (IoT)",
        "Desenvolvimento Web",
        "Desenvolvimento de Sistemas",
        "C++",
        "Python",
        "Automação",
        "Inteligência Artificial",
        "Tecnologias Emergentes",
      ],

      nivel: {
        frontend: "80%",
        backend: "5%",
      },

      focoAtual:
        "Evoluir no desenvolvimento backend, aprofundar conhecimentos em Python e C++, construir projetos reais e desenvolver sistemas IoT em tempo real.",

      estudando: [
        "Python",
        "C++",
        "Back-End",
        "IoT",
        "Arquitetura de Sistemas",
        "APIs",
        "Git e GitHub",
      ],

      qualidades: [
        "Comprometimento",
        "Curiosidade",
        "Organização",
        "Persistência",
        "Facilidade para aprender",
        "Resolução de problemas",
      ],

      disponibilidade:
        "Disponível para oportunidades de estágio, projetos pessoais, freelas e colaboração em desenvolvimento de software.",
    },

    mensagens: [
      {
        tipo: "recebida",
        texto: "Olá! Seja bem-vindo ao meu portfólio.",
      },
      {
        tipo: "recebida",
        texto: `Aqui você pode conhecer mais sobre mim. Digite 'help' dos comando`,
      },
    ],
  },

  {
    img: "../../assets/img/app2.png",
    titulo: "Contato",
    paragrafo:
      "Precisa falar comigo? Deixe sua mensagem aqui para conversarmos direto.",

    respostas: {
      email: "Você pode entrar em contato pelo meu e-mail.",
      whatsapp: "Você pode me chamar pelo WhatsApp.",
      contato: "Estou disponível para conversar.",
    },

    mensagens: [
      {
        tipo: "recebida",
        texto: "Oi! Se quiser falar comigo, mande uma mensagem por aqui!",
      },
    ],
  },

  {
    img: "../../assets/img/app3.png",
    titulo: "Certificados",
    paragrafo:
      "Confira minhas conquistas acadêmicas, cursos e especializações concluídas.",

    respostas: {
      certificado: "Tenho diversos certificados em programação.",
      curso: "Concluí vários cursos voltados para desenvolvimento web.",
      javascript: "Possuo cursos de JavaScript.",
      html: "Possuo cursos de HTML e CSS.",
    },

    mensagens: [
      {
        tipo: "recebida",
        texto: "Olá! Quer dar uma olhada nos cursos que já concluí?",
      },
    ],
  },

  {
    img: "../../assets/img/app1.png",
    titulo: "Projetos",
    paragrafo:
      "Explore meus principais projetos e veja como transformo ideias em código.",

    respostas: {
      projeto: "Tenho projetos utilizando HTML, CSS e JavaScript.",
      github: "Você pode visualizar meus projetos no GitHub.",
      site: "Já desenvolvi diversos sites responsivos.",
      sistema: "Também desenvolvo sistemas web.",
    },

    mensagens: [
      {
        tipo: "recebida",
        texto:
          "E aí! Quer conhecer as tecnologias que utilizo nos meus códigos?",
      },
    ],
  },
];

const contatos = document.querySelectorAll("#contato");
const voltar = document.getElementById("voltar");
const consersas_ativas = document.getElementById("consersas-ativas");
const status = document.getElementById("status");
const mensagensChat = document.getElementById("mensagens-chat");

const inputMensagem = document.getElementById("inputMensagem");
const btnEnviar = document.getElementById("btnEnviar");

let indexChatAtivo = null;

function horaAtual() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderizarMensagens(index) {
  mensagensChat.innerHTML = "";

  statusconversa[index].mensagens.forEach((msg) => {
    mensagensChat.innerHTML += `
      <div class="mensagem ${msg.tipo}">
        <div class="balao">
          ${msg.texto}
          <span class="hora">${msg.hora || ""}</span>
        </div>
      </div>
    `;
  });

  mensagensChat.scrollTop = mensagensChat.scrollHeight;
}

function obterResposta(texto) {
  const chat = statusconversa[indexChatAtivo];

  texto = texto.toLowerCase();

  for (const palavra in chat.respostas) {
    if (texto.includes(palavra)) {
      return chat.respostas[palavra];
    }
  }

  return "Desculpe, não encontrei uma resposta para essa pergunta.";
}

function enviarMensagem() {
  if (indexChatAtivo === null) return;

  const texto = inputMensagem.value.trim();

  if (!texto) return;

  statusconversa[indexChatAtivo].mensagens.push({
    tipo: "enviada",
    texto,
    hora: horaAtual(),
  });

  renderizarMensagens(indexChatAtivo);

  inputMensagem.value = "";

  setTimeout(() => {
    statusconversa[indexChatAtivo].mensagens.push({
      tipo: "recebida",
      texto: obterResposta(texto),
      hora: horaAtual(),
    });

    renderizarMensagens(indexChatAtivo);
  }, 1000);
}

contatos.forEach((contato, index) => {
  contato.addEventListener("click", () => {
    const dados = statusconversa[index];

    indexChatAtivo = index;

    consersas_ativas.style.display = "flex";

    status.innerHTML = `
      <div class="status-mensagens">
          <img src="${dados.img}" width="35">

          <div class="status-titulo">
              <h4>${dados.titulo}</h4>
              <p>${dados.paragrafo}</p>
          </div>
      </div>
    `;

    renderizarMensagens(index);
  });
});

if (btnEnviar) {
  btnEnviar.addEventListener("click", enviarMensagem);
}

if (inputMensagem) {
  inputMensagem.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      enviarMensagem();
    }
  });
}

if (voltar) {
  voltar.addEventListener("click", () => {
    consersas_ativas.style.display = "none";
  });
}
