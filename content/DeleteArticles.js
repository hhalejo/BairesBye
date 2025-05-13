function eliminarArticulos() {
    let cantidad = 0;

    function mostrarEliminados(cantidad) {
        let mensaje = document.createElement("div");
        mensaje.id = "mensaje-eliminados";
        mensaje.textContent = `Se eliminaron ${cantidad} ofertas de BairesDev.`;
        mensaje.style.position = "fixed";
        mensaje.style.top = "20px";
        mensaje.style.left = "50%";
        mensaje.style.transform = "translateX(-50%)";
        mensaje.style.backgroundColor = "#4CAF50";
        mensaje.style.color = "white";
        mensaje.style.padding = "12px";
        mensaje.style.fontSize = "16px";
        mensaje.style.borderRadius = "5px";
        mensaje.style.boxShadow = "0px 0px 15px rgba(0,0,0,0.3)";
        mensaje.style.zIndex = "1000";
        mensaje.style.textAlign = "center";
        document.body.appendChild(mensaje);
        setTimeout(() => mensaje.remove(), 3000);
    }

    function mostrarMensaje() {
        if (!document.getElementById("mensaje-bairesdev")) {
            let mensaje = document.createElement("div");
            mensaje.id = "mensaje-bairesdev";
            mensaje.textContent = "No hay artículos de BairesDev para ocultar.";
            mensaje.style.position = "fixed";
            mensaje.style.top = "20px";
            mensaje.style.left = "50%";
            mensaje.style.transform = "translateX(-50%)";
            mensaje.style.backgroundColor = "#ffcc00";
            mensaje.style.color = "black";
            mensaje.style.padding = "12px";
            mensaje.style.fontSize = "16px";
            mensaje.style.borderRadius = "5px";
            mensaje.style.boxShadow = "0px 0px 15px rgba(0,0,0,0.3)";
            mensaje.style.zIndex = "1000";
            mensaje.style.textAlign = "center";
            document.body.appendChild(mensaje);
            setTimeout(() => mensaje.remove(), 3000);
        }
    }

    document.querySelectorAll("article").forEach(article => {
        let enlace = article.querySelector("a[href*='bairesdev']");
        if (enlace) {
            cantidad++;
            article.remove();
            
        }
    });

    if (cantidad === 0) {
        mostrarMensaje();
    } else {
        mostrarEliminados(cantidad);
    }
}


eliminarArticulos();
