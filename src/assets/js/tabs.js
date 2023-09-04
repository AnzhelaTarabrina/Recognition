const $btnsLists = document.querySelectorAll('.tabs-btns');
$btnsLists.forEach($btnsList => {
  const $btns = $btnsList.querySelectorAll('.tabs-btn');
  $btns.forEach(($btn, index) => {
    $btn.addEventListener('click', () => {
      const tabsName = $btnsList.dataset.tabsName;
      const $tabsList = document.querySelector(`.tabs-list[data-tabs-name="${tabsName}"]`);
      if (!$tabsList) {
        return;
      }

      const $selectedBtnLists = document.querySelectorAll(`.tabs-btns[data-tabs-name="${tabsName}`);
      $selectedBtnLists.forEach($seletedBtns => {
        const $oldBtn = $seletedBtns.querySelector('.tabs-btn--active');
        const $newBtn = $seletedBtns.querySelectorAll('.tabs-btn')[index];
        $oldBtn.classList.remove('tabs-btn--active');
        $newBtn.classList.add('tabs-btn--active');
      });

      const $oldItem = $tabsList.querySelector('.tabs-item--active');
      const $newItem = $tabsList.querySelectorAll('.tabs-item')[index];
      
      $oldItem?.classList.remove('tabs-item--active');
      $newItem.classList.add('tabs-item--active');
    });
  });
});