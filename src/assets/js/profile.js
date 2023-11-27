import { moveElement } from "./helpers";

const $profile = document.querySelector('.profile');
if ($profile) {
  moveAwardsOwn();
  window.addEventListener('resize', moveAwardsOwn);

  moveAwardrOther();
  window.addEventListener('resize', moveAwardrOther);

  moveBanners();
  window.addEventListener('resize', moveBanners);

  moveProfileMap();
  window.addEventListener('resize', moveProfileMap);

  const $awardsMore = document.querySelector('.profile__awards-more');
  $awardsMore?.addEventListener('click', () => {
    const $awards = $awardsMore.closest('.profile__awards');
    $awards.classList.toggle('profile__awards--full');

    const toggleText = $awardsMore.dataset.toggleText;
    if (toggleText) {
      $awardsMore.dataset.toggleText = $awardsMore.innerHTML;
      $awardsMore.innerHTML = toggleText;
    }
  });
}

function moveAwardsOwn() {
  moveElement({
    element: '.profile__awards--own',
    from: '.profile__awards-desktop',
    to: '.profile__awards-mobile',
    width: 680,
  });
}

function moveAwardrOther() {
  moveElement({
    element: '.profile__awards--other',
    from: '.profile__awards-desktop',
    to: '.profile__awards-mobile',
    width: 680,
  });
}

function moveBanners() {
  moveElement({
    element: '.profile__banner--movement',
    from: '.profile__banners-desktop',
    to: '.profile__banners-mobile',
    width: 680,
  });
}

function moveProfileMap() {
  moveElement({
    element: '.profile-map',
    from: '.profile__map-desktop',
    to: '.profile__map-mobile',
    width: 680,
  });
}