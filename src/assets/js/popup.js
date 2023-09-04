let closeTimer;
const $popups = document.querySelectorAll('.popup');
$popups.forEach($popup => {
  $popup.addEventListener('click', e => {
    if (e.target === $popup) {
      close($popup);
    }

    if (e.target.classList.contains('popup__btn')) {
      close($popup);
    }

    if (e.target.classList.contains('js-close-popup')) {
      close($popup);
    }
  });
});

const $openBtns = document.querySelectorAll('.js-open-popup');
$openBtns.forEach($btn => {
  const name = $btn.dataset.popupName;
  $btn.addEventListener('click', () => {
    const $popup = document.querySelector(`.popup[data-popup-name="${name}"]`);
    open($popup);
  });
});

function open($popup) {
  $popup?.classList.add('popup--show');
  document.body.classList.add('body--lock');

  const delay = +$popup.dataset.closeDelay;
  const $progressDone = $popup.querySelector('.popup__progress .progress__done');
  if (delay && $progressDone) {
    let progressPersent = 0;
    const tick = 1000 / 60;
    closeTimer = setInterval(() => {
      progressPersent = Math.min(progressPersent + tick / delay * 100, 100);
      $progressDone.style.width = `${progressPersent}%`;
      if (progressPersent === 100) {
        close($popup);
        $popup.addEventListener('transitionend', () => {
          $progressDone.setAttribute('style', '');
        }, { once: true })
      }
    }, tick);
  } else if (delay) {
    setTimeout(() => close($popup), delay);
  }
}

function close($popup) {
  $popup?.classList.remove('popup--show');
  document.body.classList.remove('body--lock');
  clearInterval(closeTimer);
}