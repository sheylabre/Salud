;
(function() {
    window.addEventListener("load", function() {
        var fruta = document.getElementById("drag1");
        var dia = document.getElementsByClassName("alimento");
        var seccion = document.getElementById("menu-de-frutas");
        var contador = 0;

        for (var i = 0; i < dia.length; i++) {
            fruta.addEventListener("dragstart", function(evento) {
                inicio(evento, this);
            });

            dia[i].addEventListener("drop", function(evento) {
                clonar(evento, this);

            });

            dia[i].addEventListener("dragover", function(ev) {
                ev.preventDefault();

            });
        }

        for (var i = 0; i < dia.length; i++) {
            document.getElementById("drag0").addEventListener("dragstart", function(evento) {
                inicio(evento, this);
            });
        }

        function inicio(e) {
            e.dataTransfer.setData("img", e.target.id); //Coje el elemento que se va a mover
        }

        function clonar(e) {
            var elementoArrastrado = document.getElementById(e.dataTransfer.getData("img")); // Elemento arrastrado
            elementoArrastrado.style.opacity = ''; // Dejamos la opacidad a su estado anterior para copiar el elemento igual que era antes
            var elementoClonado = elementoArrastrado.cloneNode(true); // Se clona el elemento
            elementoClonado.id = "ElemClonado" + contador; // Se cambia el id porque tiene que ser unico
            contador += 1;
            elementoClonado.style.position = "static"; // Se posiciona de forma "normal" (Sino habria que cambiar las coordenadas de la posición)
            e.target.appendChild(elementoClonado); // Se añade el elemento clonado
            e.target.style.border = ''; // Quita el borde del "cuadro clonador"
        }


    });




})()

/*
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
*/
