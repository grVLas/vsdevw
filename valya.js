function validateForm() {
  // Очищаем предыдущие ошибки
  clearErrors();

  let isValid = true;

  // Валидация имени
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    showError("nameError", "Имя обязательно для заполнения");
    isValid = false;
  } else if (name.length < 2) {
    showError("nameError", "Имя должно содержать минимум 2 символа");
    isValid = false;
  }

  // Валидация email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    showError("emailError", "Email обязателен для заполнения");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    showError("emailError", "Введите корректный email");
    isValid = false;
  }

  return isValid;
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
    element.style.display = "none";
  });
}
