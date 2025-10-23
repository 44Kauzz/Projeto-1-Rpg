const readline = require("readline-sync");

let nome = readline.question('Ola, Jogador! Qual seu nome? \n meu nome é ');
let vida = 10;
let ouro = 0;
let gameplay = true; 
let tutorial;

console.log();
console.log('         ╭══• ೋ•✧๑♡๑✧•ೋ •══╮\n              BEM-VINDO\n                  A\n              KRABLAND!\n         ╰══• ೋ•✧๑♡๑✧•ೋ •══╯\n');
    console.log("======================================");
    console.log(`Esse é o seu chamado para a aventura!`);
    console.log("======================================");


//Laço while, para o jogador definir se deseja tutorial ou não.
//O laço aqui é utilizado para garantir que o jogador irá respoder com sim ou nao

while(true){
console.log();
console.log('      ✌️--(ㆆ_ㆆ)--\n \nBilu: Seja bem vindo,' + nome);
console.log('Bilu: Eu me chamo, Bilu e vim em paz! Posso te dar um rapido conhecimento sobre Krabland...');
console.log();
     tutorial = readline.question('Voce deseja ver o turotial antes de iniciar? (sim/nao)').toLowerCase();

    if (tutorial === "sim" || tutorial === "nao"){
    break;
    } else {
    console.log('Resposta invalida! Digite apenas "Sim" ou "Não"!')

}
} 


//if e else basico, com a entrada do tutorial ou a opção de negar o mesmo.
    if (tutorial === 'sim'){
    console.log("======================================");
    console.log("=============== TUTORIAL =============\n");
    console.log('      --(ㆆ_ㆆ)--')
    console.log();
    console.log("Bilu: No mundo de Krabland voce deve enfrentar carangueijos \nE juntar ouro o suficiente para vencer!");
    console.log("======================================");
    console.log("1. Use comandos para interagir com o jogo e o mundo de Krabland!\n");
    console.log("2. Tome decisões com sabedoria!\n");
    console.log("3. E não esqueça de se divertir!\n");
    console.log("======================================")

    } else if (tutorial === "nao")
        console.log('Ok, pulando o tutorial! Divirta-se!')


while (gameplay) {
    console.log("======================================");
    console.log(`\n O que o nosso aventureiro ${nome} ira fazer?`);
    console.log("1 - Verificar status\n2 - Explorar Krabland\n3 - Descansar\n4 - Sair/Encerrar");
    console.log();
let opcao = readline.question("Escolha um caminho a ser trilhado: ");

switch (opcao) {
    case "1":
        console.log("\n==== STATUS ====");
    console.log(`Nome: ${nome}`);
    console.log(`Vida: ${vida}`);
    console.log(`Ouro: ${ouro}`);
    break;

   case "2":
  console.log("\nVocê sai para explorar Krabland...");
  let evento = Math.floor(Math.random() * 6);

  switch (evento) {
    case 0:
      console.log("⚔️ Um monstro caranguejo gigante apareceu!");
      console.log();
      let re = readline.question('deseja atacar?\n - sim\n - nao\ndefina sua resposta: ');
      console.log();

      if (re === 'sim' ){
      let dano = Math.floor(Math.random() * 5) + 1;
      vida -= dano;
      console.log(`O monstro te atacou e causou ${dano} de dano!`);
      }
      else if (re === 'nao'){
        console.log('voce fugiu!');
        console.log();

        // conquista ilustrativa
        console.log('      --(ㆆ_ㆆ)--\nBilu: tem uma coisa interessante pra te dar nesse momento...');
        console.log()
        console.log('====================');
        console.log('Conquista Alcansada!');
        console.log('   ~* convarde *~   ');
        console.log('====================');
        console.log();
      }
      else if (re != 'sim' || re != 'nao'){
        console.log('resposta invalida.');
      }
      else if (vida <= 0) {
        console.log("💀 Você foi derrotado!");
        console.log('      --(ㆆ_ㆆ)--\nBilu: tentou, pae...');

        gameplay = false;
      } else {
        let ouroGanho = Math.floor(Math.random() * 5) + 1;
        ouro += ouroGanho;
        console.log(`🎉 Você sobreviveu e ganhou ${ouroGanho} de ouro!`);
      }
      break;

    case 1:
      console.log("🧪 Você achou uma poção brilhante e recuperou 3 de vida!");
      vida += 3;
      if (vida > 10) vida = 10;
      break;

    case 2:
      console.log("🚶 Nada aconteceu, mas foi uma boa caminhada pelos vales de Krabland.");
      break;

    case 3:
      console.log("🎁 Você encontrou um baú misterioso...");
      let conteudo = Math.floor(Math.random() * 2);
      if (conteudo === 0) {
        let ouroBaú = Math.floor(Math.random() * 10) + 5;
        ouro += ouroBaú;
        console.log(`💰 O baú continha ${ouroBaú} de ouro!`);
      } else {
        let armadilha = Math.floor(Math.random() * 4) + 1;
        vida -= armadilha;
        console.log(`💥 Era uma armadilha! Você perdeu ${armadilha} de vida.`);
        if (vida <= 0) {
          console.log("💀 Você foi derrotado pela armadilha!");
          console.log();
          console.log('      --(ㆆ_ㆆ)--\nBilu: Fiz o que pude e pude pouco...');
          gameplay = false;
        }
      }
      break;

    case 4:
      console.log("🧙 Você encontrou um viajante sábio que compartilhou segredos antigos.");
      console.log("✨ Sua coragem aumentou! (Nada muda nos números, mas você se sente mais confiante.)");
      break;

    case 5:
      console.log("🕵️ Você caiu em uma emboscada de ladrões!");
      let ouroPerdido = Math.floor(Math.random() * 5) + 1;
      ouro -= ouroPerdido;
      if (ouro < 0) ouro = 0;
      console.log(`😠 Eles roubaram ${ouroPerdido} de ouro antes de fugir.`);
       console.log(`      --(ㆆ_ㆆ)--\nBilu: conta tudo pra sua mae, ${nome}`);
      break;
  }
  break;

  case "3":
      // === Descansar ===
      console.log("\nVocê decide descansar...");
      console.log('      --(ㆆ_ㆆ)--\nBilu: que o caba nao é de ferro');
      vida += 2;
      if (vida > 10) vida = 10;
      console.log("Você recuperou um pouco de vida.");
    break;

    case "4":
      console.log("\nVocê decide encerrar a aventura Krabland te Aguarda.");
      console.log('\n      --(ㆆ_ㆆ)--\nBilu: Até a próxima!')
      gameplay = false;
      break;
    }


        }
    