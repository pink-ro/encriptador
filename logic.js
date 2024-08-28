function filtro_entrada(cadena) {
    var regex = /^[a-z0-9]+$/;
    return regex.test(cadena);
}


function func_encriptar(){
	var textarea = document.getElementById("icon_prefix2");
    var valor = textarea.value;
    if(filtro_entrada(valor)){
    	M.toast({html: 'El texto fue encriptado!'});
    	var parrafo = document.getElementById("resultado");
    	parrafo.innerHTML = btoa(valor);

    	var elemento = document.getElementById("copiar");
        elemento.classList.remove("disabled");
    }else{
    	M.toast({html: 'Solo se aceptan letras minusculas y numeros!'});
    }
	
}

function func_desencriptar(){
	var textarea = document.getElementById("icon_prefix2");
    var valor = textarea.value;
    M.toast({html: 'El texto fue desencriptado!'});
    var parrafo = document.getElementById("resultado");
    var elemento = document.getElementById("copiar");
    elemento.classList.remove("disabled");
    parrafo.innerHTML = atob(valor);
}

function copiar_texto() {
    var texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto).then(function() {
    	M.toast({html: 'Copiado al portapapeles!'});
    }).catch(function(err) {
        M.toast({html: 'Error al copiar el texto'});
       });
}