class NegociacaoController{

    adiciona(event){
        event.preventDefault();

        // criando um alias - apelido para essa grande função
        // bind(document) - mantem associacao do querySelector com o this (document)
        let $ = document.querySelector.bind(document);
        let inputData = $('#data')
        let inputQuantidade = $('#quantidade')
        let inputValor = $('#valor')

        // exibe yyyy/mm/dd
        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
        
    }
}