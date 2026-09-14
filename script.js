const botaoComecar = document.getElementById("btn-comecar");
const telaInicial = document.getElementById("tela-inicial");
const faixaEtaria = document.getElementById("faixa-etaria");
const quiz = document.getElementById("quiz");
const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const feedback = document.getElementById("feedback");
const resultado = document.getElementById("resultado");
const resultadoBox = document.getElementById("resultado-box");
const voceSabia = document.getElementById("voce-sabia");
const impactoAmbiental = document.getElementById("impacto-ambiental");
const mensagemFinal = document.getElementById("mensagem-final");
const botaoProxima = document.getElementById("btn-proxima");
const botaoPosQuiz = document.getElementById("btn-pos-quiz");
let faixaSelecionada = "";
let pontuacao = 0;
let numeroPergunta = 1;
let respostas = {};

botaoComecar.addEventListener("click", function() {
    telaInicial.style.display = "none";
    faixaEtaria.style.display = "block";
});

const botoesIdade = faixaEtaria.querySelectorAll("button");
botoesIdade.forEach(function(botao) {
    botao.addEventListener("click", function() {
        faixaSelecionada = botao.getAttribute("data-idade");
        console.log("Faixa etária escolhida:", faixaSelecionada);
        respostas.faixaEtaria = faixaSelecionada; 
        faixaEtaria.style.display = "none";
        quiz.style.display = "block";
        mostrarPergunta1();
    });
});

function mostrarPergunta1() {
    numeroPergunta = 1;
    pergunta.textContent = "Você comprou um teclado novo porque o antigo parou de funcionar. O equipamento ainda está inteiro, sem sinais de queimadura ou vazamento. O que você faria com o teclado antigo?";
    alternativas.innerHTML =`
    <button data-resposta="A">A) Colocaria na coleta seletiva porque ele é composto principalmente por plástico.</button>
    <button data-resposta="B">B) Guardaria indefinidamente, pois um eletrônico só deve ser descartado quando estiver completamente destruído.</button>
    <button data-resposta="C">C) Verificaria se pode ser reutilizado ou doado e, caso não tenha mais utilidade, procuraria um ponto que receba resíduas eletrônicos.</button>
    <button data-resposta="D">D) Desmontaria o teclado e separaria o plástico, metal e componentes eletrônicos para colocar cada material em uma lixeira diferente.</button>
    `;
    const respostaCorreta = "C";
    const botoes = alternativas.querySelectorAll("button");
    
    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {
            respostas[1] = botao.getAttribute("data-resposta");
            const respostaEscolhida = botao.getAttribute("data-resposta");
            if (respostaEscolhida === respostaCorreta) {
                pontuacao = pontuacao + 1;

                resultado.textContent = "Parabéns! Você escolheu a opção correta.";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");

            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");

            }

            voceSabia.textContent = "O teclado que usamos atualmente tem uma história que remonta às antigas máquinas de escrever. O padrão QWERTY atravessou gerações e chegou aos teclados eletrônicos atuais.";
            impactoAmbiental.textContent = "Antes de transformar um equipamento em resíduo, podemos pensar: ele pode ser reparado, reutilizado ou doado?";
            feedback.style.display = "block";
        });
    });
}

botaoProxima.addEventListener("click", function() {
    if (numeroPergunta === 1) {
        numeroPergunta = 2;
        pergunta.textContent = "Ao trocar as pilhas de um controle remoto, você percebe que uma delas está vazando e deixou resíduos no compartimento. Qual a atitude é mais adequada?";
        alternativas.innerHTML = `
        <button data-resposta="A">A) Limpar o material diretamente com as mãos e colocar a pilha no lixo comum</button>
        <button data-resposta="B">B) Evitar contato direto com o material, não tentar abrir ou manipular a pilha desnecessariamente e encaminhá-la para uma destinação adequada.</button>
        <button data-resposta="C">C) Lavar a pilha na torneira antes de descartá-la.</button>
        <button data-resposta="D">D) Abrir a pilha para descobrir qual material vazou.</button>
        `;

        const respostaCorreta2 = "B";
        const botoes2 = alternativas.querySelectorAll("button");
        
        botoes2.forEach(function(botao) {
            botao.addEventListener("click", function() {
                respostas[2] = botao.getAttribute("data-resposta");
                const respostaEscolhida2 = botao.getAttribute("data-resposta");
                if (respostaEscolhida2 === respostaCorreta2) {
                    pontuacao = pontuacao + 1;
                    resultado.textContent = "Parabéns! Você escolheu a opção correta.";
                    resultadoBox.classList.remove("incorreto");
                    resultadoBox.classList.add("correto");

                } else {
                    resultado.textContent = "Ops! Resposta incorreta.";
                    resultadoBox.classList.remove("correto");
                    resultadoBox.classList.add("incorreto");
                }

                voceSabia.textContent = "As pilhas podem conter materiais que precisam de cuidados especiais no descarte. Por isso, existem pontos de coleta específicos para esses resíduos";
                impactoAmbiental.textContent = "Quando descartadas de forma incorreta, pilhas e baterias podem liberar substâncias que contaminam o solo e a água. O descarte correto ajuda a reduzir esses impactos.";
                feedback.style.display = "block";
            });
        });
        feedback.style.display = "none";
    }

     else if (numeroPergunta === 2) {
        numeroPergunta = 3;
        pergunta.textContent = "Seu celular ainda funciona, mas a bateria já não dura nem metade do tempo que durava quando era nova. Isso significa que chegou automaticamente a hora de descartar o aparelho?";
        alternativas.innerHTML = `
        <button data-resposta="A">A) Sim, Se a bateria perdeu a autonomia, todo o celular virou lixo eletrônico.</button>
        <button data-resposta="B">B) Não necessariamente. É possível avaliar a substituição da bateria ou outras formas de prolongar a vida útil do aparelho.</button>
        <button data-resposta="C">C) Sim, baterias possuem uma validade fixa e devem ser descartadas após determinado período.</button>
        <button data-resposta="D">D) Não. Uma bateria pode continuar sendo utilizada indefinidamente, mesmo apresentando sinais de dano.</button>
        `;

        const respostaCorreta3 = "B";
        const botoes3 = alternativas.querySelectorAll("button");
        
        botoes3.forEach(function(botao) {
            botao.addEventListener("click", function() {
                respostas[3] = botao.getAttribute("data-resposta");
                const respostaEscolhida3  = botao.getAttribute("data-resposta");
                if (respostaEscolhida3 === respostaCorreta3) {
                    pontuacao = pontuacao + 1;
                    resultado.textContent = "Parabéns! Você escolhou a opção correta.";
                    resultadoBox.classList.remove("incorreto");
                    resultadoBox.classList.add("correto");
                } else {
                    resultado.textContent = "Ops! Resopsta incorreta.";
                    resultadoBox.classList.remove("correto");
                    resultadoBox.classList.add("incorreto");
                }

                voceSabia.textContent = "Baterias recarregáveis sofrem desgaste ao longo dos ciclos de uso. A redução da autonomia não significa automaticamente que todo o aparelho precise ser descartado.";
                impactoAmbiental.textContent = "Quando é seguro e viável reparar ou substituir um componente, podemos prolongar a vida útil do equipamento e evitar um descarte prematuro.";
                feedback.style.display = "block";
            });
        });
        feedback.style.display = "none";
    }
    else if (numeroPergunta === 3) {
        numeroPergunta = 4;
        pergunta.textContent = "Seu carregador ainda consegue carregar o celular, mas passou a aquecer muito mais rápido do que costumava e apresenta um ruído incomum. O que você faria?";
        alternativas.innerHTML = `
        <button data-resposta="A">A) Continuaria utilizando enquanto ele ainda conseguir carregar o celular.</button>
        <button data-resposta="B">B) Deixaria o carregador esfriar e continuaria usando normalmente.</button>
        <button data-resposta="C">C) Interromperia o uso e procuraria substituir o equipamento, encaminhando o antigo para uma destinação adequada.</button>
        <button data-resposta="D">D) Abriria o carregador para descobrir qual componente está fazendo ruído.</button>
        `;

        const respostaCorreta4 = "C";
        const botoes4 = alternativas.querySelectorAll("button");
        
        botoes4.forEach(function(botao) {
            botao.addEventListener("click", function() {
                respostas[4] = botao.getAttribute("data-resposta")
                const respostaEscolhida4 = botao.getAttribute("data-resposta");
                if (respostaEscolhida4 === respostaCorreta4) {
                    pontuacao = pontuacao + 1;
                    resultado.textContent = "Parabéns! Você escolheu a opção correta.";
                    resultadoBox.classList.remove("incorreto");
                    resultadoBox.classList.add("correto");
                } else {
                    resultado.textContent = "Ops! Resposta incorreta.";
                    resultadoBox.classList.remove("correto");
                    resultadoBox.classList.add("incorreto");
                }
                voceSabia.textContent = "Um equipamento elétrico pode apresentar sinais de problema antes de parar completamente de funcionar.";
                impactoAmbiental.textContent = "Quando um carregador chega ao fim de sua vida útil, ele também deve receber uma destinação adequada, em vez de simplesmente ser colocado no lixo comum.";
                feedback.style.display = "block";
            });
        });
        feedback.style.display = "none";
    }
    else if (numeroPergunta === 4){
        numeroPergunta = 5;
        pergunta.textContent = "Você abre uma gaveta e encontra cinco cabos antigos. Alguns são USB, outros pertenciam a aparelhos que você nem possui mais. O que faria?";
        alternativas.innerHTML = `
        <button data-resposta="A">A) Jogaria todos fora porque tecnologias antigas não tem utilidade.</button>
        <button data-resposta="B">B) Guardaria todos, porque algum dia talvez sejam necessários.</button>
        <button data-resposta="C">C) Separaria os que ainda podem ser utilizados ou doados e procuraria uma destinação adequada para os que não têm mais utilidade.</button>
        <button data-resposta="D">D) Colocaria todos na coleta seletiva junto com embalagens plásticas.</button>
        `;

        const respostaCorreta5 = "C";
        const botoes5 = alternativas.querySelectorAll("button");
        
        botoes5.forEach(function(botao) {
            botao.addEventListener("click", function() {
                respostas[5] = botao.getAttribute("data-resposta");
            const respostaEscolhida5 = botao.getAttribute("data-resposta");    
            if (respostaEscolhida5 === respostaCorreta5) {
                pontuacao = pontuacao + 1;
                resultado.textContent = "Parabéns! Você escolheu a opção correta.";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");
            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");
            }
            voceSabia.textContent = "Um aparelho eletrônico que não é mais utilizado ainda pode ter valor para outra pessoa ou para a reciclagem. Por isso, o descarte deve ser feito de maneira consciente.";
            impactoAmbiental.textContent = "O descarte correto evita que componentes eletrônicos sejam destinados de forma inadequada e permite o reaproveitamento de materiais.";
            feedback.style.display = "block";
        });
    });
    feedback.style.display = "none";
}
else if (numeroPergunta === 5) {
    numeroPergunta = 6;
    pergunta.textContent = "Você está ajudando alguém a instalar uma memória RAM em um computador. A pessoa pede cuidado antes de tocar no componente porque seu corpo pode acumular eletricidade estática. Por que essa preocupação faz sentido?";
    alternativas.innerHTML = `
    <button data-resposta="A">A) Uma descarga eletroestática pode danificar componentes eletrônincos sensíveis.</button>
    <button data-resposta="B">B) Qualquer contato humano faz a memória perder permanentemente sua capacidade de armazenamento.</button>
    <button data-resposta="C">C) Componentes eletrônicos só podem ser manipulados utilizando luvas de borracha.</button>
    <button data-resposta="D">D) A eletricidade estática faz o computador consumir mais energia depois da instalação.</button>
    `;
    const respostaCorreta6 = "A";
    const botoes6 = alternativas.querySelectorAll("button");
    
    botoes6.forEach(function(botao) {
        botao.addEventListener("click", function() {
            respostas[6] = botao.getAttribute("data-resposta");
            const respostaEscolhida6 = botao.getAttribute("data-resposta");
            if (respostaEscolhida6 === respostaCorreta6) {
                pontuacao = pontuacao + 1;
                resultado.textContent = "Parabéns! Você escolheu a resposta correta";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");
            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");
            }
            voceSabia.textContent = "Descargas eletroestáticas podem danificar componentes elétricos sensíveis. Por isso existem procedimentos específicos de controle de ESD durante a manipulação de equipamentos.";
            impactoAmbiental.textContent = "Cuidar corretamente dos componentes pode ajudar a evitar danos e proteger a vida útil dos equipamentos.";
            feedback.style.display = "block";
        });
    });
    feedback.style.display = "none";
}
else if (numeroPergunta === 6) {
    numeroPergunta = 7;
    pergunta.textContent = "Um roteador Wi-fi antigo, um celular e uma caixa de som Bluetooth utilizam comunicação sem fio por radiofrequência. Quando esses equipamentos deixam de funcionar, o fato de utilizarem radiofrequência muda a forma como devem ser descartados?";
    alternativas.innerHTML = `
    <button data-resposta="A">A) Sim. Equipamentos que utilizam radiofrequência precisam ser isolados para impedir que continuem emitindo ondas.</button>
    <button data-resposta="B">B) Não. A tecnologia de comunicação utilizada não transforma o equipamento em lixo comum; quando descartado, ele continua sendo um lixo eletrônico.</button>
    <button data-resposta="C">C) Sim. Equipamentos Bluetooth devem ser enterrados para interromper a emissão.</button>
    <button data-resposta="D">D) Não, porque qualquer equipamento eletrônico pode ser colocado no lixo comum depois de desligado.</button>
    `;
    const respostaCorreta7 = "B";
    const botoes7 = alternativas.querySelectorAll("button");
    
    botoes7.forEach(function(botao) {
        botao.addEventListener("click", function() {
            respostas[7] = botao.getAttribute("data-resposta");
            const respostaEscolhida7 = botao.getAttribute("data-resposta");
            if (respostaEscolhida7 === respostaCorreta7) {
                pontuacao = pontuacao + 1;

                resultado.textContent = "Parabéns! Você escolheu a resposta correta.";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");

            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");
            }
            voceSabia.textContent = "Wi-fi e Bluetooth utilizam radiofrequência para comunicação. Fornos micro-ondas também utilizam ondas eletromagnéticas, mas em outra aplicação. O fato de um equipamento utilizar radiofrequência não significa que ele tenha a mesma finalidade ou características de um forno de micro-ondas.";
            impactoAmbiental.textContent = "A tecnologia de comunicação utilizada pelo aparelho não elimina a necessidade de dar uma destinação adequada aos seus componentes quando ele deixa de ser usado.";
            feedback.style.display = "block";
        });
    });
    feedback.style.display = "none";
}
else if (numeroPergunta === 7) {
    numeroPergunta = 8;
    pergunta.textContent = "Você decidiu doar seu celular antigo para outra pessoa. Antes de entregar o aparelho, o que deveria fazer?"
    alternativas.innerHTML = `
    <button data-resposta="A">A) Apenas retirar o chip.</button>
    <button data-resposta="B">B) Apagar algumas fotos e deixar as contas conectadas para facilitar o uso.</button>
    <button data-resposta="C">C) Fazer backup do que deseja manter, remover suas contas e realizar a restauração adequada do aparelho.</button>
    <button data-resposta="D">D) Quebrar o aparelho para impedir que alguém tenha acesso aos dados.</button>
    `;
    const respostaCorreta8 = "C";
    const botoes8 = alternativas.querySelectorAll("button");
    
    botoes8.forEach(function(botao) {
        botao.addEventListener("click", function() {
            respostas[8] = botao.getAttribute("data-resposta");
            const respostaEscolhida8 = botao.getAttribute("data-resposta");

            if (respostaEscolhida8 === respostaCorreta8) {
                pontuacao = pontuacao + 1;
                resultado.textContent = "Parabéns! Você escolheu a resposta correta.";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");

            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");
            }
            voceSabia.textContent = "Um celular que deixou de ser útil para uma pessoa ainda pode continuar sendo útil para outra.";
            impactoAmbiental.textContent = "Preparar um equipamento para a reutilização ou doação pode evitar que ele seja descartado antes do necessário.";
            feedback.style.display = "block";
        });
    });
    feedback.style.display = "none";
}
else if (numeroPergunta === 8) {
    numeroPergunta = 9;
    pergunta.textContent = "Você encontra em uma gaveta: cartões de memória de câmeras antigas, cartões SD e microSD e pendrives antigos. Alguns ainda funcionam e outros não. Qual seria a atitude mais consciente?";
    alternativas.innerHTML = `
    <button data-resposta="A">A) Como são pequenos, podem ser colocados no lixo comum sem preocupação.</button>
    <button data-resposta="B">B) Descartá-los sempre na coleta seletiva de plástico.</button>
    <button data-resposta="C">C) Verificar primeiro se podem ser reutilizados e, quando não tiverem mais utilidade, procurar uma destinação adequada para resíduos eletrônicos.</button>
    <button data-resposta="D">D) Quebrá-los e colocar os pedaços no lixo comum.</button>
    `;
    const respostaCorreta9 = "C";
    const botoes9 = alternativas.querySelectorAll("button");
    
    botoes9.forEach(function(botao) {
        botao.addEventListener("click", function() {
            respostas[9] = botao.getAttribute("data-resposta");
            const respostaEscolhida9 = botao.getAttribute("data-resposta");

            if (respostaEscolhida9 === respostaCorreta9) {
                pontuacao = pontuacao + 1;
                resultado.textContent = "Parabéns! Você escolheu a resposta correta.";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");

            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");

            }
            voceSabia.textContent = "Cartões de memória e pendrives acompanharam a evolução do armazenamento digital, tornando possível transportar grandes quantidades de dados em dispositivos cada vez menores.";
            impactoAmbiental.textContent = "Pequenos não significa insignificantes. Esses dispositivos possuem componentes eletrônicos e devem ser considerados quando pensamos em descarte responsável.";
            feedback.style.display = "block";
        });
    });
    feedback.style.display = "none";
}
else if (numeroPergunta === 9) {
    numeroPergunta = 10;
    pergunta.textContent = "Você encontrou um power bank antigo no fundo de uma gaveta. Ele ainda acende a luz indicadora quando conectado, mas já não consegue carregar o celular como antes. Você decide que é hora de se desfazer dele. Qual a atitude é a mais adequada?";
    alternativas.innerHTML = `
    <button data-resposta="A">A) Como ele ainda possui pouca carga, descarregá-lo completamente e colocá-lo no lixo comum.</button>
    <button data-resposta="B">B) Como é um equipamento pequeno, colocá-lo junto aos materiais recicláveis, pois a parte externa é principalmente plástica.</button>
    <button data-resposta="C">C) Guardá-lo até encontrar uma forma adequada de encaminhá-lo, pois ele possui bateria e componentes eletrônicos que não devem ser descartados no lixo comum.</button>
    <button data-resposta="D">D) Abrir o power bank, retirar a bateria e separar do plástico e os metais para facilitar a reciclagem.</button>
    `;
    const respostaCorreta10 = "C";
    const botoes10 = alternativas.querySelectorAll("button");
    
    botoes10.forEach(function(botao) {
        botao.addEventListener("click", function() {
            respostas[10] = botao.getAttribute("data-resposta");
            const respostaEscolhida10 = botao.getAttribute("data-resposta");

            if (respostaEscolhida10 === respostaCorreta10) {
                pontuacao = pontuacao + 1;
                resultado.textContent = "Parabéns! Você escolheu a reposta correta.";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");

            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");

            }
            voceSabia.textContent = "Muitos power bank utilizam baterias recarregáveis de íons de lítio.";
            impactoAmbiental.textContent = "Um power bank não termina sua vida útil em lixo comum. Suas baterias e componentes precisam de descarte adequado para evitar impactos ao meio ambiente.";
            feedback.style.display = "block";
        });
    });
    feedback.style.display = "none";
}
else if (numeroPergunta === 10) {
    numeroPergunta = 11;
    pergunta.textContent = "A bateria de um celular começa a estufar e a tampa traseira do aparelho começa a se levantar. Qual atitude é mais segura?";
    alternativas.innerHTML = `
    <button data-resposta="A">A) Continuar carregando o aparelho até a bateria descarregar completamente.</button>
    <button data-resposta="B">B) Pressionar a bateria para tentar fazê-la voltar ao formato original.</button>
    <button data-resposta="C">C) Evitar utilizar ou manipular desnecessariamente o aparelho e buscar orientação adequada para encaminhameneto do equipamento.</button>
    <button data-resposta="D">D) Perfurar a bateria para liberar o conteúdo acumulado.</button>
    `;
    const respostaCorreta11 = "C";
    const botoes11 = alternativas.querySelectorAll("button");
    
    botoes11.forEach(function(botao) {
        botao.addEventListener("click", function() {
            respostas[11] = botao.getAttribute("data-resposta");
            const respostaEscolhida11 = botao.getAttribute("data-resposta");

            if (respostaEscolhida11 === respostaCorreta11) {
                pontuacao = pontuacao + 1;
                resultado.textContent = "Parabéns! Você escolheu a resposta correta.";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");

            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");

            }
            voceSabia.textContent = "Alterações físicas, como estufamento, podem indicar que uma bateria está comprometida e exige atenção. Nunca deve ser pressionada ou perfurada.";
            impactoAmbiental.textContent = "Quando uma bateria chega a uma condição inadequada para uso, seu encaminhamento correto faz parte da responsabilidade ambiental e de segurança";
            feedback.style.display = "block";
        });
    });
    feedback.style.display = "none";
}
else if (numeroPergunta === 11) {
    numeroPergunta = 12;
    pergunta.textContent = "Você termina o QuizTech e começa a lembrar dos equipamentos que estão guardados na sua casa: cabos, celulares, pilhas, teclados, cartões de memória e outros eletrônicos. Qual atitude representa melhor o que significa conscientização sobre lixo eletrônico?"
    alternativas.innerHTML = `
    <button data-resposta="A">A) Se está guardado em casa, não está causando nenhum problema.</button>
    <button data-resposta="B">B) Quando não funciona mais, preciso apenas me livrar dele.</button>
    <button data-resposta="C">C) O impacto ambiental começa também nas escolhas que faço antes, durante e depois do uso de um equipamento.</button>
    <button data-resposta="D">D) Se existe reciclagem, não preciso me preocupar com a quantidade de eletrônicos que consumo.</button>
    `;
    const respostaCorreta12 = "C";
    const botoes12 = alternativas.querySelectorAll("button"); 
    feedback.style.display = "none";
    resultado.textContent = "";
    voceSabia.textContent = "";
    impactoAmbiental.textContent = "";
    botaoProxima.style.display = "none";
    botaoPosQuiz.style.display = "none"; 
      
        botoes12.forEach(function(botao) {
        botao.addEventListener("click", function() {
            respostas[12] = botao.getAttribute("data-resposta");
            const respostaEscolhida12 = botao.getAttribute("data-resposta");

            if (respostaEscolhida12 === respostaCorreta12) {
                pontuacao = pontuacao + 1;
                resultado.textContent = "Parabéns! Você escolheu a resposta correta.";
                resultadoBox.classList.remove("incorreto");
                resultadoBox.classList.add("correto");

            } else {
                resultado.textContent = "Ops! Resposta incorreta.";
                resultadoBox.classList.remove("correto");
                resultadoBox.classList.add("incorreto");
            }

            voceSabia.textContent = "O lixo eletrônico não começa na lixeira. Ele começa nas decisões que tomamos antes, durante e depois do uso de um equipamento.";
            impactoAmbiental.textContent = "O descarte consciente é uma escolha que começa antes de jogar fora: reduzir o consumo, reutilizar, reparar, doar e encaminhar corretamente os eletrônicos ajuda a diminuir os impactos no meio ambiente.";
            feedback.style.display = "block";
            botaoPosQuiz.style.display = "block";
        });
    });
}
});
const pesquisa = document.getElementById("pesquisa");
botaoPosQuiz.addEventListener("click", function() {
    quiz.style.display = "none";
    pesquisa.style.display = "block";
});
const respostaAberta = document.getElementById("resposta-aberta");
const botaoEnviarPesquisa = document.getElementById("btn-enviar-pesquisa");

botaoEnviarPesquisa.addEventListener("click", function() {
    if (!respostas.atitude) {
        alert("Por favor, responda a pergunta sobre mudança de atitude.");
        return;
    }
    if (!respostas.informacao) {
        alert("Por favor, responda qual informação mais chamou sua atenção");
        return;
    }
    if (!respostas.descarte) {
        alert("Por favor, responda se você sabe onde levar um eletrônico em Curitiba.");
        return;
    }
    if(respostaAberta.value.trim() ==="") {
        alert("Por favor, escreva uma resposta antes de enviar.");
        return;
    }
    respostas.respostaAberta = respostaAberta.value.trim();
    respostas.pontuacao = pontuacao;

    const dadosParaEnviar = {
        "Faixa Etária": respostas.faixaEtaria,
        "Q1": respostas[1],
        "Q2": respostas[2],
        "Q3": respostas[3],
        "Q4": respostas[4],
        "Q5": respostas[5],
        "Q6": respostas[6],
        "Q7": respostas[7],
        "Q8": respostas[8],
        "Q9": respostas[9],
        "Q10": respostas[10],
        "Q11": respostas[11],
        "Q12": respostas[12],
        "Pontuação": respostas.pontuacao,
        "Atitude": respostas.atitude,
        "Informação": respostas.informacao,
        "Descarte": respostas.descarte,
        "Resposta Aberta": respostas.respostaAberta
    };

    fetch("https://script.google.com/macros/s/AKfycbz1MkffIjiIEL2qZEbFVv41AsDfwzz1PqRgw01QW4KU-6NytPHpdHybnnICGTOHoTMd/exec", {
        method: "POST",
        body: JSON.stringify(dadosParaEnviar)
    })

    .then(function(resposta) {
        if (!resposta.ok) {
            throw new Error("Não foi possível enviar os dados.");
        }
        return resposta.text();
    })

    .then(function(resultado) {
    
    console.log("Respostas do google:", resultado);
    console.log("Respostas finais:", respostas);
    
    alert("Obrigado por participar do QuizTech!");
    mensagemFinal.innerHTML = "O futuro não começa amanhã. Ele começa nas escolhas que fazemos hoje.<br>Obrigado por participar do QuizTech.";
    mensagemFinal.style.display = "block";
    })
    .catch(function(erro) {
        console.error("Erro ao enviar as respostas:", erro);
        alert("Não foi possível enviar suas respostas. Tente novamente.");
    });
});

const botoesPesquisa = document.querySelectorAll(".opcao-pesquisa");
botoesPesquisa.forEach(function(botao) {
botao.addEventListener("click", function() {    
        const grupo = botao.getAttribute("data-grupo");
        respostas[grupo] = botao.textContent;

        const botoesDoGrupo = document.querySelectorAll(
            '.opcao-pesquisa[data-grupo="' + grupo + '"]'
        );
        botoesDoGrupo.forEach(function(outroBotao) {
            outroBotao.style.backgroundColor = "";
        });
        botao.style.backgroundColor = "lightgreen";
    });
});

