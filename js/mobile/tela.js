const abrir_chat = document.getElementById("abrir-chat");
const conversa = document.getElementById("conversa");
const fechar = document.getElementById("fechar");

abrir_chat.addEventListener("touchstart", () => {
  if (conversa.style.display === "none") {
    conversa.style.display = "block";
  } else {
    conversa.style.display = "none";
  }
});

fechar.addEventListener("touchstart", () => {
  if (conversa.style.display === "block") {
    conversa.style.display = "none";
  } else {
    conversa.style.display = "block";
  }
});
