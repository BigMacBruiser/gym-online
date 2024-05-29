document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        { text: "Gym FitLife me ha ayudado a alcanzar mis metas de salud y bienestar. ¡Lo recomiendo al 100%!", author: "Juan Pérez" },
        { text: "Las clases de yoga son increíbles y los entrenadores son muy profesionales.", author: "María García" }
    ];

    const testimonialContainer = document.getElementById('testimonial-container');
    
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('p');
        testimonialElement.innerText = `"${testimonial.text}" - ${testimonial.author}`;
        testimonialContainer.appendChild(testimonialElement);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        alert(`Mensaje enviado por ${nombre} (${email}): ${mensaje}`);
        
        contactForm.reset();
    });
});
