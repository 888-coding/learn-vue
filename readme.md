# Learn Vue JS
Estará sendo totalmente feito em Português.

## Lição 1:
Criação do index.html 

Criação do main.js

## Lição 2:
**Criação:** diretórios, arquivo css, imagens jpg.

**Alteração:**  html vinculado com CSS e main.js 

## Lição 3:

Feito um link de importação do Vue, dentro da pagina html.

## Lição 4:

Primeira utilização de **vue** , Montar o App, e depois usar o duas chaves para colocar o variavel do return do main.js 

## Lição 5:

Aprendendo com o 'Attribute binding'  

* Aprendi que você pode colocar o atributo do main.js dentro da expressão do tag do html , o qual fica dentro do **""**.

_Por exemplo_: < a :href="url" > o : seria o binding para vincular o url para o atributo de url que está no  main.js 

## Lição 6: 

**Condition rendering**

Nesta lição aprendí o "if", "if else", "else" do vue.  Utiliza-se o comando v-if, v-else, v-if-else.  

"< p v-if="inventory > 10 " >"  (_desta maneira_) 

Também aprendi o comando "v-show" , mas, desta maneira, aparecerá no html,

 o "< p **display:none**> Conteúdo < /p >"

 Não é aconselhado fazer desta maneira com v-show. 

 
## Lição 7:

Aprendendo sobre Lista.  

Adicionar uma lista no main.js    

o uso de v-for dentro de uma tag div

para facil e futuro aprendizado, lembre-se de umar um :key no final da tag div.  que será usado para o chave primaria e vincular. 

_Por exemplo_ : < div v-for="product in produtos" :key = " product.id " >

## Lição 8:

### Botões e eventos 

Comando: v-on 

Métodos (funções) em main.js

_Exemplo_: 
< button class="button" v-on:click="addToCart" >

< button class="button" @click="addToCart" >

(O evento é tão comum, que é feito um atalho de v-on para "@")

## Conclusão do aprendizado

*Sobre o curso* Tem sido muito rápido a forma de aprendizado. 

*Site consultado* Vue Mastery 

Minha opinião:  Interessante a forma de trabalhar com Vue, é a primeira vez que tento mexer com SPA. (Single page application) Muito Legal. 

Lado positivo é bom para iniciante, muitas coisas você não precisa saber o porquê, simplesmente o faz. 

Lado negativo é que dentro do VS Code, eu nao consegui que editor detect codigos de vue, e portanto muitos lugares simplesmente, nao tenho a formalização das cores para facilitar o entendimento dos codigos, tags , etc. Mas, também, existe forma mais complexa de criar componentes vue, onde o qual não foi mencionado no aprendizado básico. 