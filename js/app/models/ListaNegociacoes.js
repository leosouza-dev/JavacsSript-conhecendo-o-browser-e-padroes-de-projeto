class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        // progr. defensiva - devolve um novo array com o valor igual a lista
        // se tentar dar um push, ou qualquer coisa, altera essa copia e nao a prop.
        return [].concat(this._negociacoes);
    }
}