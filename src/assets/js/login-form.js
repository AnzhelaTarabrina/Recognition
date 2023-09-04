import { showMessage } from "./helpers";

const $loginForm = document.querySelector('.login-form');
if ($loginForm) {
  const $inputs = $loginForm.querySelectorAll('.login-form__input');
  
  $loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isError = false;
    $inputs.forEach(($input) => {
      if (!validateInput($input)) {
        isError = true;
        $input.classList.add('input--error');
      }
    });

    if(isError && !document.querySelector('.message')) {
      showMessage({
        text: 'Сообщение об ошибке. Заполните все обязательные поля',
        className: 'message--error',
        delay: 4000
      });
    } else if (!isError) {
      location.href = 'profile.html';
    }
  });

  $inputs.forEach($input => {
    $input.addEventListener('focus', () => $input.classList.remove('input--error'));
  });
}

function validateInput($input) {
  if ($input.value.length === 0) {
    return false;
  }

  return true;
}