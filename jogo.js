console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');



const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  desenha() {
    contexto.drawImage(
    // pra que essa função de desenhar possa fazer sprite ficar visivel
    // é necessário definir o fps dela com RequestAnimationFrame
    sprites, 
    flappyBird.spriteX, flappyBird.spriteY, // coordenada do sprite x e y 
    flappyBird.largura, flappyBird.altura, // tamanho recorte do pedaço na sprite
    flappyBird.x, flappyBird.y, // posição do sprite na tela
    flappyBird.largura, flappyBird.altura // tamanho a ser usado
    );
  }
}

const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height -112,
  desenha() {
    contexto.drawImage(
      // pra que essa função de desenhar possa fazer sprite ficar visivel
      // é necessário definir o fps dela com RequestAnimationFrame
      sprites, 
      chao.spriteX, chao.spriteY, // coordenada do sprite x e y 
      chao.largura, chao.altura, // tamanho recorte do pedaço na sprite
      chao.x, chao.y, // posição do sprite na tela
      chao.largura, chao.altura // tamanho a ser usado
      );

    contexto.drawImage(
      sprites, 
      chao.spriteX, chao.spriteY, 
      chao.largura, chao.altura,
      (chao.x + 96), chao.y,
      chao.largura, chao.altura 
      );
  }
}

// Plano de Fundo
const fundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 276,
  altura: 204,
  x: 0,
  y: canvas.height -204,
  desenho() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height)
    contexto.drawImage(
      sprites,
      fundo.spriteX, fundo.spriteY,
      fundo.largura, fundo.altura,
      fundo.x, fundo.y,
      fundo.largura, fundo.altura
    );

    contexto.drawImage(
      sprites,
      fundo.spriteX, fundo.spriteY,
      fundo.largura, fundo.altura,
      (fundo.x + 44), fundo.y,
      fundo.largura, fundo.altura
    );
  } 

}


//Loop
function loop() {
    fundo.desenho()
    chao.desenha()
    flappyBird.desenha()

    requestAnimationFrame(loop);
}

loop();



