const dialogoContexto = document.querySelector("#contexto_dialogo");
const setaContexto = document.querySelector("#seta_contexto");
const dialogoSentence = document.querySelector("#paragrafo_sentence");
const dialogoSentenceSection = document.querySelector("#sentence_dialogo");
const setaSentence = document.querySelector("#seta_sentence");
const popUp = document.querySelector("#pop_up");
const fundo = document.querySelector("#fundo_pop_up");
const palavraEmIngles = document.querySelector("#palavra_em_ingles");
const defIngles = document.querySelector("#def_ingles");
const palavraEmPortugues = document.querySelector("#palavra_em_portugues");
const defPortugues = document.querySelector("#def_portugues");
const audioPortugues = document.querySelector("#audio_portugues");
const audioIngles = document.querySelector("#audio_ingles");
let audioSentence = document.querySelector("#audio_sentence");
let idConteudoDialogo, frase, palavra;
let audiosTocando = ["", "", ""];

for (let i=0; i<10; i++) {
    const botao = document.querySelector(`#p${i}`);
    botao.addEventListener("click", () => {
        paraAudios();
        idConteudoDialogo = i;
        popUp.style.display = "flex";
        fundo.style.display = "flex";
        mudaContexto();
        mudaSentence();
        mudaPopUp();
        const textoPortugues = palavraEmPortugues.textContent.toLowerCase();
        audioPortugues.addEventListener("click", () => {
            paraAudios();
            audiosTocando[0] = new Audio(`./assets/audios/portugues/${textoPortugues}.mp3`);
            audiosTocando[0].play();
        });
        const textoIngles = palavraEmIngles.textContent.toLowerCase();
        audioIngles.addEventListener("click", () => {
            paraAudios();
            audiosTocando[1] = new Audio(`./assets/audios/ingles/${textoIngles}.mp3`);
            audiosTocando[1].play();
        });
    }); 
}

setaContexto.addEventListener("click", () => {
    if (dialogoContexto.style.display === "flex") {
        desativaContexto();
    } else {
        ativaContexto();
    }
});

setaSentence.addEventListener("click", () => {
    if (dialogoSentenceSection.style.display === "flex") {
        desativaSentence();
    } else {
        ativaSentence();
    }
});

fundo.addEventListener("click", () => {
    popUp.style.display = "none";
    fundo.style.display = "none";
    paraAudios();
});

function paraAudios() {
    for (let i=0; i<3; i++) {
        try {
            audiosTocando[i].pause();
        } catch (err) {}
    }
}

function desativaContexto() {
    dialogoContexto.style.display = "none";
    setaContexto.style.rotate = "0deg";
}

function ativaContexto() {
    dialogoContexto.style.display = "flex";
    setaContexto.style.rotate = "180deg";
    mudaContexto();
}

function desativaSentence() {
    paraAudios();
    dialogoSentenceSection.style.display = "none";
    setaSentence.style.rotate = "0deg";
}

function ativaSentence() {
    dialogoSentenceSection.style.display = "flex";
    setaSentence.style.rotate = "180deg";
    mudaSentence();
}

function mudaContexto() {
    switch (idConteudoDialogo) {
        case 0:
            dialogoContexto.innerHTML = "<p>Para seu azar, isso fê-lo contrair <b>pneumoultramicroscopicossilicovulcanoconiose</b>.</p>";
            break
        case 1:
            dialogoContexto.innerHTML = "<p>João informou que tinha pneumoultramicroscopicossilicovulcanoconiose. A pessoa que o questionou, porém, tinha <b>hipopotomonstrosesquipedaliofobia</b>. A fala de João, portanto, foi um gatilho e o curioso começou a chorar.</p>";
            break
        case 2:
            dialogoContexto.innerHTML = "<p>O protagonista simplesmente ignorou-o, como é seu costume de <b>floccinaucinihilipilificação</b>, e foi receber seu tratamento.</p>";
            break
        case 3:
            dialogoContexto.innerHTML = "<p>Foi em sua primeira competição de verdade. Sua <b>cacorrafiofobia</b> deixou-o extremamente ansioso, mas deu seu melhor para se acalmar.</p>";
            break
        case 4:
            dialogoContexto.innerHTML = "<p>Treinou bastante no Forza. Ficou <b>muito bom</b> no jogo</p>";
            break
        case 5:
            dialogoContexto.innerHTML = "<p>Devido à má organização da escola, ele se safou com a <b>apropriação indébita</b>.</p>";
            break
        case 6:
            dialogoContexto.innerHTML = "<p>Esqueceu-se de usar as máscaras necessárias para esse tipo de atividade e inalou um pouco de cinzas do vulcão. Isso causou sua queda logo no início da escalada e deu tudo <b>errado</b>.</p>";
            break
        case 7:
            dialogoContexto.innerHTML = "<p>A corrida começou e João estava com o <b>ritmo</b> acelerado. Mas, no caminho, deu algumas derrapadas e ficou um pouco para trás.</p>";
            break
        case 8:
            dialogoContexto.innerHTML = "<p>Mesmo assim, terminou a competição em <b>décimo segundo</b> lugar.</p>";
            break
        case 9:
            dialogoContexto.innerHTML = "<p>O garoto arrecadou dinheiro suficiente para comprar um <b>veículo</b> de corrida decente.</p>";
            break
        default:
            dialogoContexto.innerHTML = "<p>Selecione uma palavra para ver o contexto.</p>";
            break
        }
}

function mudaSentence() {
    switch (idConteudoDialogo) {
        case 0:
            frase = "George's brother made a trip to a volcano and got <b>pneumonoultramicroscopicsilicovolcanoconiosis</b>.";
            palavra = "pneumonoultramicroscopicsilicovolcanoconiosis";
            break
        case 1:
            frase = "George's brother read this sentence, and it triggered his <b>hippopotomonstrosesquippedaliophobia</b>.";
            palavra = "hippopotomonstrosesquippedaliophobia";
            break
        case 2:
            frase = "George's life is pure <b>floccinaucinihilipilification</b>.";
            palavra = "floccinaucinihilipilification";
            break
        case 3:
            frase = "Claire wants everything to be perfect, but she is imbued with <b>kakorrhaphiophobia</b>.";
            palavra = "kakorrhaphiophobia";
            break
        case 4:
            frase = "Claire's life is <b>eellogofusciouhipoppokunurious</b>.";
            palavra = "eellogofusciouhipoppokunurious";
            break
        case 5:
            frase = "George borrowed Claire a lot of money, but she gave everything to Viktor, and she got charged with <b>embezzlement</b>.";
            palavra = "embezzlement";
            break
        case 6:
            frase = "Claire tried to carry out a coup, but George interfered, and her attempt went <b>awry</b>.";
            palavra = "awry";
            break
        case 7:
            frase = "Taylor Swift did not sing in the <b>rhythm</b>.";
            palavra = "rhythm";
            break
        case 8:
            frase = "George's city is the <b>twelfth</b> poorest one in the country.";
            palavra = "twelfth";
            break
        case 9:
            frase = "George's <b>vehicle</b> does not work as well as Claire's.";
            palavra = "vehicle";
            break
        default:
            frase = "Select a word to see it in a sentence.";
            palavra = "default";
    }
    dialogoSentence.innerHTML = `<img id="audio_sentence" src="./assets/audio.svg" alt="áudio"> <p>${frase}</p>`;
    audioSentence = document.querySelector("#audio_sentence");
    audiosTocando[2] = new Audio(`./assets/audios/sentences/${palavra}.mp3`);
    audioSentence.addEventListener("click", () => audiosTocando[2].play());
}

function mudaPopUp() {
    switch (idConteudoDialogo) {
        case 0:
            palavraEmIngles.textContent = "Pneumonoultramicroscopicsilicovolcanoconiosis";
            palavraEmPortugues.textContent = "Pneumoultramicroscopicossilicovulcanoconiose";
            palavraEmIngles.style.fontSize = "1.5rem";
            palavraEmPortugues.style.fontSize = "1.5rem";
            defIngles.textContent = "An invented long word said to mean a lung disease caused by inhaling very fine ash and sand dust";
            defPortugues.textContent = "Uma palavra longa inventada que supostamente significa uma doença pulmonar causada pela inalação de poeira fina de cinzas e areia";
            break
        case 1:
            palavraEmIngles.textContent = "Hippopotomonstrosesquippedaliophobia";
            palavraEmPortugues.textContent = "Hipopotomonstrosesquipedaliofobia";
            palavraEmIngles.style.fontSize = "1.9rem";
            palavraEmPortugues.style.fontSize = "1.9rem";
            defIngles.textContent = "The phobia or fear of long words";
            defPortugues.textContent = "A fobia ou medo de palavras longas";
            break
        case 2:
            palavraEmIngles.textContent = "Floccinaucinihilipilification";
            palavraEmPortugues.textContent = "Floccinaucinihilipilificação";
            palavraEmIngles.style.fontSize = "3rem";
            palavraEmPortugues.style.fontSize = "3rem";
            defIngles.textContent = "The action or habit of estimating something as worthless";
            defPortugues.textContent = "A ação ou hábito de estimar algo como inútil";
            break
        case 3:
            palavraEmIngles.textContent = "Kakorrhaphiophobia";
            palavraEmPortugues.textContent = "Cacorrafiofobia";
            palavraEmIngles.style.fontSize = "3rem";
            palavraEmPortugues.style.fontSize = "3rem";
            defIngles.textContent = "Abnormal fear of failure";
            defPortugues.textContent = "Medo anormal de falhar";
            break
        case 4:
            palavraEmIngles.textContent = "Eellogofusciouhipoppokunurious";
            palavraEmPortugues.textContent = "Muito bom";
            palavraEmIngles.style.fontSize = "2rem";
            palavraEmPortugues.style.fontSize = "2rem";
            defIngles.textContent = "Very good, very fine";
            defPortugues.textContent = "Muito bom, muito bem";
            break
        case 5:
            palavraEmIngles.textContent = "Embezzlement";
            palavraEmPortugues.textContent = "Apropriação indébita";
            palavraEmIngles.style.fontSize = "3rem";
            palavraEmPortugues.style.fontSize = "3rem";
            defIngles.textContent = "Theft or misappropriation of funds placed in one's trust or belonging to one's employer";
            defPortugues.textContent = "Roubo ou desvio de fundos confiados a alguém ou pertencentes ao empregador";
            break
        case 6:
            palavraEmIngles.textContent = "Awry";
            palavraEmPortugues.textContent = "Errado";
            palavraEmIngles.style.fontSize = "3rem";
            palavraEmPortugues.style.fontSize = "3rem";
            defIngles.textContent = "Away from the appropriate, planned, or expected course";
            defPortugues.textContent = "Fora do curso apropriado, planejado ou esperado";
            break
        case 7:
            palavraEmIngles.textContent = "Rhythm";
            palavraEmPortugues.textContent = "Ritmo";
            palavraEmIngles.style.fontSize = "3rem";
            palavraEmPortugues.style.fontSize = "3rem";
            defIngles.textContent = "A strong, regular, repeated pattern of movement or sound";
            defPortugues.textContent = "Um padrão de movimento ou som forte, regular e repetido";
            break
        case 8:
            palavraEmIngles.textContent = "Twelfth";
            palavraEmPortugues.textContent = "Décimo segundo";
            palavraEmIngles.style.fontSize = "3rem";
            palavraEmPortugues.style.fontSize = "3rem";
            defIngles.textContent = "Constituting number twelve in a sequence";
            defPortugues.textContent = "Constituindo o número doze numa sequência";
            break
        default:
            palavraEmIngles.textContent = "Vehicle";
            palavraEmPortugues.textContent = "Veículo";
            palavraEmIngles.style.fontSize = "3rem";
            palavraEmPortugues.style.fontSize = "3rem";
            defIngles.textContent = "A thing used for transporting people or goods, especially on land, such as a car, truck, or cart";
            defPortugues.textContent = "Um objeto usado para transportar pessoas ou mercadorias, especialmente em terra, como um carro, caminhão ou carrinho";
            break
    }
}