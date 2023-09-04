const $forms = document.querySelectorAll('.search');
$forms.forEach($form => {
  const $input = $form.querySelector('.search__input');
  $input.addEventListener('input', () => {
    if ($input.value !== '' && !$form.classList.contains('search--fill')) {
      $form.classList.add('search--fill');
    } else if ($input.value === '' && $form.classList.contains('search--fill')) {
      $form.classList.remove('search--fill');
    }
  });

  const $clear = $form.querySelector('.search__btn--clear');
  $clear?.addEventListener('click', () => {
    $input.value = '';
    $input.focus();
    $form.classList.remove('search--fill');
  });

  const $open = $form.querySelector('.search__open');
  $open?.addEventListener('click', () => $form.classList.toggle('search--active'));

  const $close = $form.querySelector('.search__btn--close');
  $close?.addEventListener('click', () => $form.classList.remove('search--active'));
});