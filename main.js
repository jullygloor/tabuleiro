// Referenciando o Canvas
var canvas = document.getElementById('meu_canvas');

// Obtendo o contexto gráfico
var context = canvas.getContext('2d');

// //Desenhar um retangulo
// // fillRect(x, y, largura, altura);
// // context.fillRect(50, 50, 100, 100);

// //Trabalhando com o contorno
// context.strokeRect(50, 50, 100, 100);


// //Propriedades
// // fillStyle : Cor de preenchimento
// // strokSstyle : cor da linha
// // lineWidth : espessura da linha(pixels)

// // Preenchimento vermelho
// context.fillStyle = 'red';
// context.fillRect(50, 50, 100, 100);
// // Contorno azul, com espessura de 3px
// context.lineWidth = 3;
// context.strokeStyle = 'black';
// context.strokeRect(50, 50, 100, 100);

// // adicionando uma imagem
// const imagem = new Image();
// imagem.src = 'img/tabuleiro.png';
// imagem.onload = () => {
//     context.drawImage(imagem,50,50,680,680)
// }

// const torre = new Image();
// torre.src = 'img/torre.png';
// torre.onload = () => {
//     context.drawImage(torre,50,50,100,100)
// }

context.fillStyle = 'white';
context.fillRect(50,50,400,400);
context.fillStyle = 'grey';

// linha 1
context.fillRect(100,150,50,50);
context.fillRect(200,150,50,50);
context.fillRect(300,150,50,50);
context.fillRect(400,150,50,50);

// linha 2
context.fillRect(50,200,50,50);
context.fillRect(150,200,50,50);
context.fillRect(250,200,50,50);
context.fillRect(350,200,50,50);
// linha 3
context.fillRect(100,250,50,50);
context.fillRect(200,250,50,50);
context.fillRect(300,250,50,50);
context.fillRect(400,250,50,50);
// linha 4
context.fillRect(50,300,50,50);
context.fillRect(150,300,50,50);
context.fillRect(250,300,50,50);
context.fillRect(350,300,50,50);
//linha 5
context.fillRect(100,350,50,50);
context.fillRect(200,350,50,50);
context.fillRect(300,350,50,50);
context.fillRect(400,350,50,50);
// linha 6
context.fillRect(50,400,50,50);
context.fillRect(150,400,50,50);
context.fillRect(250,400,50,50);
context.fillRect(350,400,50,50);
//linha 7
context.fillRect(100,450,50,50);
context.fillRect(200,450,50,50);
context.fillRect(300,450,50,50);
context.fillRect(400,450,50,50);
//linha 8
context.fillRect(50,500,50,50);
context.fillRect(150,500,50,50);
context.fillRect(250,500,50,50);
context.fillRect(350,500,50,50);

context.lineWidth = 3;
 context.strokeStyle = 'black';
 context.strokeRect(50, 150, 400, 400);

 const torre = new Image();
 torre.src = 'img/torre.png';
 torre.onload = () => {
     context.drawImage(torre,50,155,50,50)
 }
 const cavalo = new Image();
 cavalo.src = 'img/cavalo.png';
 cavalo.onload = () => {
     context.drawImage(cavalo,100,150,50,50)
 }
 const torre2 = new Image();
 torre2.src = 'img/torre.png';
 torre2.onload = () => {
    context.drawImage(torre2,400,153,50,50)
 }
 const cavalo2 = new Image();
 cavalo2.src = 'img/cavalo.png';
 cavalo2.onload = () => {
    context.drawImage(cavalo2,350,155,50,50)
 }
 const bispo = new Image();
 bispo.src = 'img/bispo.png';
 bispo.onload = () => {
    context.drawImage(bispo,150,155,50,50)
 }
 const bispo2 = new Image();
 bispo2.src = 'img/bispo.png';
 bispo2.onload = () => {
    context.drawImage(bispo2,300,152,50,50)
 }
 const rainha = new Image();
 rainha.src = 'img/rainha.png';
 rainha.onload = () => {
    context.drawImage(rainha,200,150,50,50)
 }
 const rei = new Image();
 rei.src = 'img/rei.png';
 rei.onload = () => {
    context.drawImage(rei,250,153,50,50)
 }
 const peao1 = new Image();
 peao1.src = 'img/peao.png';
 peao1.onload = () => {
    context.drawImage(peao1,50,205,50,50)
 }
 const peao2 = new Image();
 peao2.src = 'img/peao.png';
 peao2.onload = () => {
    context.drawImage(peao2,100,205,50,50)
}
const peao3 = new Image();
 peao3.src = 'img/peao.png';
 peao3.onload = () => {
    context.drawImage(peao3,150,205,50,50)
}
const peao4 = new Image();
 peao4.src = 'img/peao.png';
 peao4.onload = () => {
    context.drawImage(peao4,200,205,50,50)
}
const peao5 = new Image();
 peao5.src = 'img/peao.png';
 peao5.onload = () => {
    context.drawImage(peao5,250,205,50,50)
}
const peao6 = new Image();
 peao6.src = 'img/peao.png';
 peao6.onload = () => {
    context.drawImage(peao6,300,205,50,50)
}
const peao7 = new Image();
 peao7.src = 'img/peao.png';
 peao7.onload = () => {
    context.drawImage(peao7,350,205,50,50)
}
const peao8 = new Image();
 peao8.src = 'img/peao.png';
 peao8.onload = () => {
    context.drawImage(peao8,400,205,50,50)
}
const peaoS1 = new Image();
peaoS1.src = 'img/peaoS.png';
peaoS1.onload = () => {
   context.drawImage(peaoS1,50,450,50,50)
}
const peaoS2 = new Image();
 peaoS2.src = 'img/peaoS.png';
 peaoS2.onload = () => {
    context.drawImage(peaoS2,100,450,50,50)
 }
 const peaoS3 = new Image();
 peaoS3.src = 'img/peaoS.png';
 peaoS3.onload = () => {
    context.drawImage(peaoS3,150,450,50,50)
 }
 const peaoS4 = new Image();
 peaoS4.src = 'img/peaoS.png';
 peaoS4.onload = () => {
    context.drawImage(peaoS4,200,450,50,50)
 }
 const peaoS5 = new Image();
 peaoS5.src = 'img/peaoS.png';
 peaoS5.onload = () => {
    context.drawImage(peaoS5,250,450,50,50)
 }
 const peaoS6 = new Image();
 peaoS6.src = 'img/peaoS.png';
 peaoS6.onload = () => {
    context.drawImage(peaoS6,300,450,50,50)
 }
 const peaoS7 = new Image();
 peaoS7.src = 'img/peaoS.png';
 peaoS7.onload = () => {
    context.drawImage(peaoS7,350,450,50,50)
 }
 const peaoS8 = new Image();
 peaoS8.src = 'img/peaoS.png';
 peaoS8.onload = () => {
    context.drawImage(peaoS8,400,450,50,50)
 }
 const torreS = new Image();
 torreS.src = 'img/torreS.png';
 torreS.onload = () => {
     context.drawImage(torreS,50,500,50,50)
 }
 const torreS2 = new Image();
 torreS2.src = 'img/torreS.png';
 torreS2.onload = () => {
     context.drawImage(torreS2,400,500,50,50)
 }
 const cavaloS = new Image();
 cavaloS.src = 'img/cavaloS.png';
 cavaloS.onload = () => {
     context.drawImage(cavaloS,100,500,50,50)
 }
 const cavaloS2 = new Image();
 cavaloS2.src = 'img/cavaloS.png';
 cavaloS2.onload = () => {
     context.drawImage(cavaloS2,350,500,50,50)
 }
 const bispoS = new Image();
 bispoS.src = 'img/bispoS.png';
 bispoS.onload = () => {
    context.drawImage(bispoS,150,500,50,50)
 }
 const bispoS2 = new Image();
 bispoS2.src = 'img/bispoS.png';
 bispoS2.onload = () => {
    context.drawImage(bispoS2,300,500,50,50)
 }
 const rainhaS = new Image();
 rainhaS.src = 'img/rainhaS.png';
 rainhaS.onload = () => {
    context.drawImage(rainhaS,200,500,50,50)
 }
 const reiS = new Image();
 reiS.src = 'img/reiS.png';
 reiS.onload = () => {
    context.drawImage(reiS,250,500,50,50)
 }