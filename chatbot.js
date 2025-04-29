function sendMessage() {
    const input = document.getElementById("user-input");
    const messages = document.getElementById("messages");
    const userText = input.value.trim();
    if (!userText) return;

    messages.innerHTML += `<div><strong>Tú:</strong> ${userText}</div>`;
    input.value = "";

    const respuesta = getRespuesta(userText.toLowerCase());
    setTimeout(() => {
        messages.innerHTML += `<div><strong>TIENS Bot:</strong> ${respuesta}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);
}

function getRespuesta(pregunta) {
    if (pregunta.includes("calcio")) return "Tenemos varios tipos de calcio, como Viokal y Viokal Plus. ¿Para quién es el suplemento?";
    if (pregunta.includes("precio")) return "Los precios varían según el producto. ¿De cuál estás interesado?";
    if (pregunta.includes("chitosa")) return "La Chitosa ayuda a limpiar el sistema digestivo y controlar el colesterol.";
    if (pregunta.includes("envío")) return "Realizamos envíos a nivel nacional. Consulta disponibilidad según tu zona.";
    return "Lo siento, no entendí tu pregunta. ¿Podrías reformularla?";
}