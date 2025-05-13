export function mostrarMensaje() {
    if (!document.getElementById("mensaje-bairesdev")) {
        let mensaje = document.createElement("div");
        mensaje.id = "mensaje-bairesdev";
        mensaje.textContent = "No hay artículos de BairesDev para ocultar.";
        mensaje.style.position = "fixed";
        mensaje.style.top = "20px";
        mensaje.style.left = "50%";
        mensaje.style.transform = "translateX(-50%)";
        mensaje.style.backgroundColor = "#ffcc00";
        mensaje.style.color = "#000";
        mensaje.style.padding = "10px";
        mensaje.style.borderRadius = "5px";
        mensaje.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
        mensaje.style.zIndex = "1000";
        document.body.appendChild(mensaje);

        setTimeout(() => {
            mensaje.remove();
        }, 3000);
    }
}
