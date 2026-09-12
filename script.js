// LUXEWEAR GH - Contact Form Interaction

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    contactMessage.textContent =
        `Thank you, ${name}! Your enquiry has been received. We'll get back to you soon.`;

    contactForm.reset();
});