class Negociacao{

    constructor(data, quantidade, valor){

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        // congelamos o this
        // com isso n conseguimos alterar as propriedades (melhorou um pouco mais)
        Object.freeze(this);
    }

    // programacao defensiva - evitar alterar prop. do objeto data
    get data(){
        // passamos um novo objeto
        // se alguerm tentar alterar, altera a copia e não a propriedade
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}