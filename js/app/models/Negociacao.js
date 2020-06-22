class Negociacao{

    constructor(data, quantidade, valor){

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // trabalhando com get
    // acessa como 
    // não precisa do ()
    get data(){
        return this._data;
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