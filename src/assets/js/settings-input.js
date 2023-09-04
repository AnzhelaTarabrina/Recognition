const $textareas = document.querySelectorAll('.settings-input--area');
$textareas.forEach($textarea => {
  textareaSizeHandler($textarea);
  $textarea.addEventListener('input', () => textareaSizeHandler($textarea));
  window.addEventListener('resize', () => textareaSizeHandler($textarea));
});

const $tabsBtns = document.querySelectorAll('.tabs-btn');
$tabsBtns.forEach($btn => {
  $btn.addEventListener('click', () => {
    setTimeout(() => {
      $textareas.forEach($textarea => textareaSizeHandler($textarea));
    }, 50);
  });
});

function textareaSizeHandler($textarea) {
  const minHeight = getTextareaMinHeight($textarea);
  $textarea.style.height = `${minHeight}px`;
  
  const height = Math.max(minHeight, $textarea.scrollHeight);
  $textarea.style.height = `${height}px`;
}

function getTextareaMinHeight($textarea) {
  if ($textarea.dataset.minHeight) {
    return +$textarea.dataset.minHeight;
  } else {
    return window.innerWidth < 680 ? 55 : 90;
  }
}