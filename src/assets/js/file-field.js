const $inputs = document.querySelectorAll('.js-file-input');
$inputs.forEach($input => {
  $input.addEventListener('change', () => {
    const output = $input.dataset.fileOutput;
    if (!output) {
      return;
    }

    const $value = document.querySelector(`.js-file-value[data-file-output="${output}"]`);
    $value.innerText = $input.files[0].name;
  });
});