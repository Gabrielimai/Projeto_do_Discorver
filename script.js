function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
    // se estiver light mode, adiciona esse texto 
    img.setAttribute(
      "alt",
      "Foto de Gabriel Imai, usando óculos e com jaqueta jeans com mascara.")
    
  } else {
    //  se estiver sem light mode, manter a imagem normal
    img.setAttribute("src","./assets/avatar.png");
    // se estiver sem o light mode, manter esse texto
    img.setAttribute(
      "alt",
      "Foto de Gabriel Imai, usando óculos e camisa cinza, com um bigode."
    )
    
  }

}

