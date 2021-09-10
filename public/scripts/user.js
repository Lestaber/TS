/* eslint-disable indent */
import { renderBlock } from "./lib.js";
export function renderUserBlock(name, link, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount >= 1 ? favoriteItemsAmount : "ничего нет";
    const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false;
    renderBlock("user-block", `
    <div class="header-container">
      <img class="avatar" src="${link}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon ${hasFavoriteItems ? " active" : ""}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
export function getUserData() {
    let user = {
        userName: localStorage.getItem("user"),
        avatarUrl: localStorage.getItem("user"),
    };
    if (typeof user.userName === "string" && typeof user.avatarUrl === "string") {
        return user.userName && user.avatarUrl;
    }
    return (user = null);
}
export function getFavoritesAmount() {
    let amount = localStorage.getItem("favoritesAmount");
    if (typeof amount === "string") {
        return amount;
    }
    return (amount = null);
}
