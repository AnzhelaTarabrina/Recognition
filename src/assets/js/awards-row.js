const $awardsRows = document.querySelectorAll('.awards-row');
$awardsRows.forEach($row => {
  const $moreBtns = $row.querySelectorAll('.awards-row__item--more, .awards-row__mobile-more');
  const $mobileMore = $row.querySelector('.awards-row__mobile-more');
  $moreBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $row.classList.toggle('awards-row--active');

      const toggleText = $mobileMore.dataset.toggleText;
      if (toggleText) {
        $mobileMore.dataset.toggleText = $mobileMore.innerHTML;
        $mobileMore.innerHTML = toggleText;
      }
    });
  });
});