var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
]

// encontra tbody
var tbody = document.querySelector('table tbody'); 

document.querySelector('.form').addEventListener('submit', function(event){
    
    // event prevent default - evitar recarregar no submit
    event.preventDefault();

    // cria a td
    var tr = document.createElement('tr');

    // cria uma td para cada campo e add na tr
    campos.forEach(campo => {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    // cria volume
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    // add td volume na tr
    tr.appendChild(tdVolume);

    // add tr no table - tbody
    tbody.appendChild(tr);

    // após cadastro, precisamos limpar os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0.0;

    // focar no campo data
    campos[0].focus();
})
