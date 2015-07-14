function calculaTodosImcs(pascientesTr){

	percorreArray(pascientesTr, function(paciente){
        //monta paciente
        var imc = paciente.pegaImc(); // pega o imc do paciente atual
        var trDoImc = trDoPaciente.getElementsByClassName("info-imc")[0];
        imcTd.textContent = imc; // atualiza imc
        console.log(imc); // imprime o imc do paciente atual    
    }); 
}


function pecorreArray(pascientesTr, comportamento){
	for(var i=0;i<pascientesTr.length;i++){
		var trAtual = pascientesTr[i];
		comportamento(trAtual);
	}
}

function imprimeNome(trAtual){
	var pasciente = montaPasciente(trAtual);
	console.log(pasciente.nome);
}

function imprimeImc(trAtual){
	var pasciente = montaPasciente(trAtual);
	
	var tximc = trAtual.getElementsByClassName("info-imc")[0];
	tximc.textContent = pasciente.pegaImc();
}

function montaPasciente(trAtual){
	var nome = trAtual.getElementsByClassName("info-nome")[0];
	var peso = trAtual.getElementsByClassName("info-peso")[0];
	var altura = trAtual.getElementsByClassName("info-altura")[0];
	var pasciente = {"nome": nome.textContent, "peso": peso.textContent, "altura": altura.textContent, "pegaImc": function(){
		if(this.altura>0){
			var imc = this.peso/(this.altura*this.altura);
			return imc;
		}			
	}};
	return pasciente;
}

var pascientesTr = document.getElementsByClassName("paciente");

pecorreArray(pascientesTr, imprimeImc);
pecorreArray(pascientesTr, imprimeNome);

var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function(){
	console.log("Primeira");
});

botao.addEventListener("click", function(){
	console.log("Segunda");
});

pecorreArray(pascientesTr, function(trAtual){
	trAtual.addEventListener("mouseover", function(){
		this.setAttribute("bgcolor", "grey");
	});
});