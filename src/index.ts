import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';

const date: Date = new Date();
const year: number = date.getFullYear();
const month: number = date.getMonth();

const dateFormat = (): string => {
  let day = '' + date.getDate();
  let month = '' + (date.getMonth() + 1);
  const year = date.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join('-');
};

const lastDayInNextMonth = (): string => {
  const date = new Date(year, month + 2, 0);
  const lastDate = date.getDate();
  return `${year}-${month + 2} - ${lastDate}`;
};
const firstDate = dateFormat();
const lastDate = lastDayInNextMonth() + '';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', '../public/img/avatar.png', 10);
  renderSearchFormBlock(firstDate, lastDate);
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
});
