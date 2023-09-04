export function moveElement(options) {
  if (document.body.classList.contains('body--desktop')) {
    return;
  }
  
  const {
    element,
    from,
    to,
    width,
    fromInsertType = 'append',
    toInsertType = 'append'
  } = options;

  const $elems = document.querySelectorAll(element);
  const $from = document.querySelector(from);
  const $to = document.querySelector(to);

  if (!$from || !$to) {
    return;
  }

  $elems.forEach($elem => {
    setTimeout(() => {
      if (window.innerWidth <= width && $elem.parentNode === $from) {
        $to[toInsertType]($elem);
      } else if (window.innerWidth >= width && $elem.parentNode !== $from) {
        $from[fromInsertType]($elem);
      }
    });
  });
}

export function showMessage({ text, className = '', delay = 3000 }) {
  const $message = document.createElement('div');
  $message.className = `message ${className}`;
  $message.innerHTML = text;

  document.body.appendChild($message);
  setTimeout(() => $message.classList.add('message--show'), 10);
  setTimeout(() => {
    $message.classList.remove('message--show');
    $message.addEventListener('transitionend', () => $message.remove(), { once: true });
  }, delay);
}

export default {
  moveElement,
  showMessage
};