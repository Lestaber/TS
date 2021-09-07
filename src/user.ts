import { renderBlock } from './lib.js';

export function renderUserBlock(
  name: string,
  link: string,
  favoriteItemsAmount: number
): void {
  const favoritesCaption =
    favoriteItemsAmount >= 1 ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${link}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon ${
  hasFavoriteItems ? ' active' : ''
}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}
