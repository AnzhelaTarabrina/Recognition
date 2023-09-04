const $accordions = document.querySelectorAll('.accordion');
$accordions.forEach($accordion => {
  const $button = $accordion.querySelector('.accordion-btn');
  const $content = $accordion.querySelector('.accordion-content');

  $button.addEventListener('click', () => {
    const toggleText = $button.dataset.toggleText;
    if (toggleText) {
      $button.dataset.toggleText = $button.innerHTML;
      $button.innerHTML = toggleText;
    }
    
    if (!$accordion.classList.contains('accordion--active')) {
      $button.classList.add('accordion-btn--active');
      $accordion.classList.add('accordion--activating');
      $content.style.height = `${$content.scrollHeight}px`;
    } else {
      $button.classList.remove('accordion-btn--active');
      $content.style.height = `${$content.scrollHeight}px`;
      $accordion.classList.add('accordion--activating');
      setTimeout(() => $content.style.height = '0px');
    }
  });

  $content.addEventListener('transitionend', (e) => {
    if (e.target !== $content) {
      return;
    }

    $accordion.classList.remove('accordion--activating');

    if (!$accordion.classList.contains('accordion--active')) {
      $content.setAttribute('style', '');
      $accordion.classList.add('accordion--active');
    } else {
      $accordion.classList.remove('accordion--active');
    }
  });
});