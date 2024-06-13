function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down-long");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("rgb(43, 101, 226)");
    return true;
  } else {
    error("rgb(189, 87, 87)");
    return false;
  }
}

function validateUser(user) {
  if (user.value.length < 6) {
    error("rgb(189, 87, 87)");
    return false;
  } else {
    error("rgb(43, 101, 226)");
    return true;
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  if (nextForm) {
    nextForm.classList.add("active");
    nextForm.classList.remove("inactive");
  }
}

function error(colour) {
  document.body.style.backgroundColor = colour;
}

animatedForm();
