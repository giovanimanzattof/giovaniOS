// ==========================================
// ELEMENTOS PRINCIPAIS
// ==========================================
export const login = document.getElementById("senha")
export const icon = document.getElementById("icon")
export const inicio = document.getElementById("inicio")
export const screen = document.getElementById("screen")

// Barra de menu
export const menu_bar = document.getElementById("menu-bar")

// Área de arquivos
export const pasta = document.getElementById("novapasta")
export const linux = document.getElementById("linux")
export const gerenciador = document.getElementById("gerenciador")
export const arquivosimg = document.querySelectorAll("#arquivos")

// Controles de janela
export const fechar = document.getElementById("fechar")
export const minimizar = document.getElementById("minimizar")

// Menus
export const sistema_menu = document.getElementById("sistema-menu")
export const menu = document.getElementById("menu")
export const card_sidebar = document.querySelectorAll(".card-sidebar")
export const fechar_menu = document.getElementById("fechar-menu")

// Janelas abertas
export const janelas = document.querySelectorAll(".janela")

// Área direita do sistema
export const direito = document.getElementById("direito")

// ==========================================
// CALCULADORA
// ==========================================
export const calculator = document.getElementById('calculator')
export const calculadora = document.getElementById('calculadora')
export const input = document.querySelector('.input')
export const numeros = document.querySelectorAll('.numero')
export const operadores = document.querySelectorAll('.operador')
export const apagarTudo = document.querySelector('.apagar')
export const apagarUm = document.querySelector('.apagar-um')
export const resultado = document.querySelector('.resultado')
export const fechar_calculator = document.getElementById('fechar-calculator')

// ==========================================
// PAPEL DE PAREDE
// ==========================================
export const img_papel = document.getElementById("img-papel")
export const wallpaper = document.getElementById("wallpaper")
export const wallparede = document.getElementById("wallparede")
export const direito_walpaper = document.getElementById("direito_walpaper")
export const menu_terminal = document.getElementById("menu_terminal")

// Botão para fechar tudo
export const fecha_all = document.getElementById('fecha-all')

// ==========================================
// DESCRIÇÃO
// ==========================================
export const text_descricao = document.getElementById("text-descricao")
export const texto_descricao = document.getAnimations("texto-descricao")

// Tela de inicialização
export const inicializacao = document.getElementById('inicializacao')

// ==========================================
// LISTA DE TAREFAS
// ==========================================
export const input_lista = document.getElementById('input-lista')
export const lista = document.getElementById("lista")
export const titulo_lista = document.getElementById("titulo-lista")
export const tarefas_paragrafo = document.getElementById('tarefas-paragrafo')
export const btn_salvar = document.getElementById("btn-salvar")
export const lista_de_tarefas = document.getElementById("lista-de-tarefas")
export const lista_tarefas_btn = document.getElementById("lista-tarefas-btn")
export const fechar_lista = document.getElementById("fechar-lista")

// ==========================================
// TERMINAL
// ==========================================
export const fechar_terminal = document.getElementById("fechar-terminal")
export const input_text = document.getElementById("input")
export const output = document.getElementById("output")
export const terminal_abrir = document.getElementById("terminal-abrir")
export const terminal_hero = document.getElementById("terminal-hero")
export const direito_terminal = document.getElementById("direito_terminal")

// ==========================================
// ABRIR GITHUB
// ==========================================
function github() {
    window.open('https://github.com/giovanimanzattof', '_blank')
}

document.getElementById('github').addEventListener('click', github)
document.getElementById("menu_github").addEventListener("click", github)

// ==========================================
// ABRIR LINKEDIN
// ==========================================
function linkedin() {
    window.open(
        'https://www.linkedin.com/in/giovanimanzattofurlan/',
        '_blank'
    )
}

document.getElementById('linkdin').addEventListener('click', linkedin)
document.getElementById("menu_linkdin").addEventListener("click", linkedin)

// ==========================================
// FECHAR SISTEMA
// ==========================================
function fecharjanela() {

    // Remove todo o conteúdo da página
    document.querySelector('body').remove()

    // Após 300ms abre o Google
    setTimeout(() => {
        window.open('https://google.com', '_self')
    }, 300)

}

document
    .getElementById('fecharjanela')
    .addEventListener('click', fecharjanela)