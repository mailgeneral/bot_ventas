const messagesContainer = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const closeBtn = document.querySelector('.close-chat-btn');

// Función básica para meter burbujas al DOM
function appendMessage(role, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role === 'user' ? 'user' : 'ai'}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;

    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Captura de envío limpia
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    
    if (text) {
        chatInput.value = ''; // Limpieza instantánea
        appendMessage('user', text);
        
        // Aquí no pasa nada más. El bot está mudo hasta que decidas qué meterle.
    }
});

// Manejador del botón de cierre muerto
closeBtn.addEventListener('click', () => {
    console.log("Cerrar ventana presionado.");
});
