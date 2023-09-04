const $body = document.body;
if ($body.classList.contains('body--desktop') || $body.classList.contains('body--admin')) {
  window.addEventListener('scroll', () => {
    const x = -window.scrollX;
    const fixedSelectors = `
      .header,
      .admin-navbar,
      .popup,
      .menu,
      .stories,
      .wallet__btns-box
    `;
    
    document.querySelectorAll(fixedSelectors).forEach(($elem) => {
      $elem.style.transform = `translateX(${x}px)`;
    });
  });
}
