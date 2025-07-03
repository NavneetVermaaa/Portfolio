document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("formSuccess");

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // prevent default submit
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                successMsg.textContent = "Message sent successfully!";
                successMsg.style.display = "block";
                form.reset(); // clear form fields
            } else {
                successMsg.textContent = "Oops! Something went wrong.";
                successMsg.style.color = "#ff5555";
                successMsg.style.display = "block";
            }
        } catch (error) {
            successMsg.textContent = "Error sending message.";
            successMsg.style.color = "#ff5555";
            successMsg.style.display = "block";
        }
    });
});











// highlights the active nav link       
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const topVisible = rect.top <= 150; // top enters the viewport
    const bottomVisible = rect.bottom >= 150; // bottom hasn't gone past

    if (topVisible && bottomVisible) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});





  
