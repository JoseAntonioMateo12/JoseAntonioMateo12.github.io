document.getElementById('contact-btn').addEventListener('click', function() {
    const phoneNumber = '123456789'; // Cambia este número por tu número de WhatsApp
    const message = '¡Hola! Estoy interesado en los servicios de aire acondicionado.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});
