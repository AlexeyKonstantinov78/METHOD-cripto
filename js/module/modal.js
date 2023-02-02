const registrtionBtn = document.querySelector('.registrtion__btn'),
  overlay = document.querySelector('.overlay'),
  modal = document.querySelector('.modal'),
  modalOrder = document.querySelector('.modal__order'),
  modalClose = document.querySelector('.modal__close'),
  form = document.querySelector('.modal__form'),
  modalTitle = document.querySelector('.modal__title');
  
registrtionBtn.addEventListener('click', () => {
  overlay.classList.add('overlay__open');
  modal.classList.add('modal__open');
});

overlay.addEventListener('click', (event) => {
  const target = event.target;
  if(target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay__open');
    modal.classList.remove('modal__open');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    name: form.name.value,
    surname: form.surname.value,
    tel: form.tel.value
  };

  fetch('https://cloudy-slash-rubidium.glitch.me/api/order', {
    method: 'POST',
    body: JSON.stringify(data)  
  }).then(response => response.json())
    .then(person => {
      modalTitle.textContent = person.name + `,  заявка отправлена` + person.id;
      form.remove();

      setTimeout(() => {
        overlay.classList.remove('overlay__open');
        modal.classList.remove('modal__open');
      }, 3000);
    });
});