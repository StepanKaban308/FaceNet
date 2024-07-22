const formAuthEl = document.querySelector(".register");

const handleformAuthSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formAuthEl);
  const newUser = Object.fromEntries(formData);

  localStorage.setItem("user", JSON.stringify(newUser))

  alert('Вы успешно зарегистрировались! Чтобы продолжить нажмите кнопку')
  window.location.href = "../Main/main.html"

  console.log(newUser);
};

formAuthEl.addEventListener("submit", handleformAuthSubmit);