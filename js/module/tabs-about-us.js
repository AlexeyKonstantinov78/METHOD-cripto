const advantageButtons = document.querySelectorAll('.advantage__button');
const advantageItemContents = document.querySelectorAll('.advantage__item-content');

advantageButtons.forEach((advantageButton, i) => {
  advantageButton.addEventListener('click', () => {
    advantageItemContents.forEach((advantageItemContent, j) => {
      if (i === j) {
        advantageButtons[j].classList.add('advantage__button_activ');
        advantageItemContents[j].classList.add('advantage__item-content_activ');
      } else {
        advantageButtons[j].classList.remove('advantage__button_activ');
        advantageItemContents[j].classList.remove('advantage__item-content_activ');
      }
    });
  });
});
