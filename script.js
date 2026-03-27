const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const contactForm = document.querySelector(".contact-form");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : "";

    if (submitButton) {
      submitButton.textContent = "Inquiry Sent";
      submitButton.disabled = true;
    }

    const successMessage = document.createElement("p");
    successMessage.className = "form-success";
    successMessage.textContent = "Thanks for reaching out. Your message has been captured for this demo.";
    successMessage.setAttribute("role", "status");

    const existingMessage = contactForm.querySelector(".form-success");
    if (existingMessage) {
      existingMessage.remove();
    }

    contactForm.appendChild(successMessage);
    contactForm.reset();

    window.setTimeout(() => {
      if (submitButton) {
        submitButton.textContent = originalText || "Send Inquiry";
        submitButton.disabled = false;
      }

      successMessage.remove();
    }, 2500);
  });
}
