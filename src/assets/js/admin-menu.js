const $menu = document.querySelector('.admin-menu');
if ($menu) {
  const $hasChildrenItems = $menu.querySelectorAll('.admin-menu__item--has-children');
  $hasChildrenItems.forEach($item => {
    const $link = $item.querySelector('.admin-menu__link:not(.admin-menu__link--sub)');
    $link.addEventListener('click', () => {
      const $oldActiveItem = $menu.querySelector('.admin-menu__item--active');
      if ($oldActiveItem) {
        $oldActiveItem.classList.remove('admin-menu__item--active');
      }

      if ($oldActiveItem !== $item) {
        $item.classList.add('admin-menu__item--active')
      }
    });
  });
}