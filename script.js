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

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  if (name && email && phone && message) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "sutharsirajan@gmail.com", // Your Gmail
      Password: "9D575A4D6D316417F54FCDA01591A05E3F43", // From Elastic Email Panel
      To: "sutharsirajan@gmail.com", // Your Gmail
      From: email,
      Subject: "Contact Form Message",
      Body: `
        Name: ${name} <br>
        Email: ${email} <br>
        Phone: ${phone} <br>
        Message: ${message}
      `,
    }).then((message) => {
      alert("✅ Message Sent Successfully!");
      form.reset();
    });
  } else {
    alert("❌ Please fill all fields!");
  }
});
