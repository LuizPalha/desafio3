console.log ("para iniciar o jogo entre com: nome, idade, tipo de Heroi")
console.log ("Os tipos de herois disponiveis sao: mago, guerreiro, monge e ninja ")
console.log ("*************Loading**************")
console.log("")

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ""; // Inicializa o ataque como uma string vazia
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando o(a) ${this.ataque}`);
    }

    tipoAtaque() {
        if (this.tipo === "mago") {
            this.ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada";
        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken";
        } else {
            this.ataque = "ataque desconhecido"; // Caso o tipo não seja identificado
        }
    }
}

// Criando uma instância da classe Heroi
let heroi = new Heroi("Luiz", 26, "monge");

// Chamando os métodos
heroi.tipoAtaque(); // Define o tipo de ataque
heroi.atacar(); // Exibe a mensagem de ataque
