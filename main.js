function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " trabalha na empresa SK e tem o cargo e salario:");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.07;
        _salario = novoSalario;
    }


    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

function Backend(nome) {
    Funcionario.call(this, nome, "Back-end", 5000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.1;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario("Roberto", "dev front-end", 2000);
const funcionario2 = new Backend("Lucas");
const funcionario3 = new Gerente("Fernanda");

funcionario1.dizOi();
funcionario1.dizCargo();


funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.dizOi();
funcionario2.dizCargo();

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.dizOi();
funcionario3.dizCargo();

funcionario3.aumento();
console.log(funcionario3.getSalario());
