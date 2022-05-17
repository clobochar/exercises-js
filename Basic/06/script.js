let listaAtores = [

    {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
    },
  
    {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
    },
  
    {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início'
    },
  
  ]

  let htmlAtores = ''

 for (let ator of listaAtores) {
    htmlAtores += `
    <div>
        <h1>${ator.nome}</h1>
        <p>Esse ator interpreta o personagem ${ator.personagem} no filme ${ator.filme}</p>
      </div>
    `
 }

 document.querySelector('#container').innerHTML = htmlAtores


 /*
RESOLUÇÃO:
Para me ajudar na solução, eu primeiro escrevi a organização do conteúdo em HTML, usando uma div, dentro dela outra div com um H1 e um parágrafo.
Depois da lista de atores no script, precisei de ajuda para relembrar como era a sintaxe do for of.
Peguei a organização de HTML que criei (div com H1 e parágrafo) e criei uma string literal com os campos da lista de atores (nome, personagem e filme).
Para criar o design, primeiro usei o id de container mas a borda ficou na div englobando os três atores. Depois arrumei o style para adicionar apenas na div filho da div.
Adicionei a posição inline-block (para ocupar apenas o tamanho do elemento) e a disposição de row.
 */