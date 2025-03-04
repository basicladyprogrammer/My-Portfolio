const toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get the sibling element (the toggle content)
    const toggleContent = btn.nextElementSibling;

    // Toggle the active class for the clicked button and content
    btn.classList.toggle("active");
    toggleContent.classList.toggle("active");

    // Hide other open toggle contents
    toggleBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("active");
        otherBtn.nextElementSibling.classList.remove("active");
      }
    });
  });
});

emailjs.init("DyF8kM0XFw46cGIzl");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name && email && phone && message) {
    emailjs
      .send("service_sdy27b6", "template_a4i5sfn", {
        to_name: "Suthar Sirajan",
        from_name: name,
        from_email: email,
        from_phone: phone,
        message: message,
      })
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send message. Try again later.");
        console.error(error);
      });
  } else {
    alert("❌ Please fill all fields!");
  }
});
