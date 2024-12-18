window.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionar elementos del dom

    let inventarioDOM = document.querySelector(".main__inventario");
    let cajas = document.querySelectorAll(".inventario__caja");
    let estanteriaDOM = document.querySelectorAll(".almacen__estanteria");

    // Poner un id unico a cada caja movible

    cajas.forEach((caja, i) => {
        caja.setAttribute("id", "caja"+i);

        caja.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("id", e.target.id)
        })
    });

    // Establecer cada hueco de la estanteria como un hueco donde puedo soltar un elemento

    estanteriaDOM.forEach((estanteria, i) => {

        estanteria.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        estanteria.addEventListener("drop", function(e) {
            e.preventDefault();

            let cajaID = e.dataTransfer.getData("id");

            if (cajaID && cajaID != "") {

                let caja = document.querySelector("#"+cajaID)

                if (this.lastChild == null) {
                    e.target.appendChild(caja);
                    this.StylePropertyMap.boxShadow = "none";
                } else {
                    alert("esta estanteria esta ocupada !!");
                }

                estanteriaDOM.forEach(estanteria => {
                    if (estanteria.lastChild == null) {
                        estanteria.styles.boxShadow = "0px 0px 8px black inset";
                    }
                });

                if (inventarioDOM.innerHTML.trim() == "") {
                    alert("Todas las cajas han sido guardadas!!");
                }

            }
        });
    });
});