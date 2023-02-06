const hide = (item, answer) => {
  if (!item.classList.contains('fag__item_show')) return;

  answer.style.height = `${answer.offsetHeight}px`;  
  answer.offsetHeight;
  answer.style.display = 'block';  
  answer.style.height = 0;
  answer.style.overflow = 'hidden';
  answer.style.transition = 'height 0.36s ease-in-out';  
  item.classList.remove('fag__item_show');

  setTimeout(() => {    
    answer.style.display = '';
    answer.style.overflow = '';
    answer.style.transition = '';
    answer.style.height = ``;
  }, 360);
};
const show = (item, answer) => {
  if (item.classList.contains('fag__item_show')) return;

  answer.style.display = 'block';
  const height = answer.offsetHeight;
  answer.style.height = 0;
  answer.style.overflow = 'hidden';
  answer.style.transition = 'height 0.36s ease-in-out';
  answer.offsetHeight;
  answer.style.height = `${height}px`;
  
  setTimeout(() => {
    item.classList.add('fag__item_show');
    answer.style.display = '';
    answer.style.overflow = '';
    answer.style.transition = '';
    answer.style.height = ``;
  }, 360);  
};


export const accordion = () => {
  const list = document.querySelector('.fag__list');
  const fagItems = document.querySelectorAll('.fag__item');

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.fag__question');

    if(btn) {
      const item = btn.closest('.fag__item');

      fagItems.forEach((fagItem, i) => {

        const answer = fagItem.querySelector('.fag__answer');
        if (item === fagItem) {
          fagItem.classList.contains('fag__item_show') ? hide(fagItem, answer) : show(fagItem, answer);
        } else {
          hide(fagItem, answer);
        }

      });
    }
  });
};
