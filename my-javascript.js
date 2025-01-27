const button = document.querySelector('button');
  button.addEventListener('click', validateForm);

  function validateForm() {
    const result = document.getElementById('form-result');
    result.style.display = 'block';

    if (hasElementError('name') || hasElementError('email') || hasElementError('message')) {
      result.innerText = 'Er is een fout met het invullen van het formulier';
      result.className = 'form-result-error';
    }
    else {
      const name = document.getElementById('name').value;
      result.innerText = 'Beste ' + name + ', Uw bericht is verzonden!';
      result.className = 'form-result-success';
    }
  }

  function hasElementError(elementId) {
    const element = document.getElementById(elementId).value;

    if (element === '' || element.length < 2) {
      document.getElementById('form-error').style.display = 'block';
      document.getElementById('success-message').style.display = 'none';
      return true;
    }

    return false;
  }

  window.addEventListener('scroll', showElements);

  function showElements() {
    const elements = document.querySelectorAll('.hide-animation');
    console.log(elements);
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        console.log(el, 'start animation');
        console.log(rect.top);
        console.log(window.innerHeight);

        //el.classList.remove('hide-animation');
        el.classList.add('fade-and-slide-in');
      }
    });
  }