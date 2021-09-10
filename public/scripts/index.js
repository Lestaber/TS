import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock, getUserData, getFavoritesAmount } from "./user.js";
import { renderToast } from "./lib.js";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dateFormat = () => {
    let day = "" + date.getDate();
    let month = "" + (date.getMonth() + 1);
    const year = date.getFullYear();
    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }
    return [year, month, day].join("-");
};
const lastDayInNextMonth = () => {
    const date = new Date(year, month + 2, 0);
    const lastDate = date.getDate();
    return `${year}-${month + 2} - ${lastDate}`;
};
const firstDate = dateFormat();
const lastDate = lastDayInNextMonth() + "";
window.addEventListener("DOMContentLoaded", () => {
    renderUserBlock("Wade Warren", "../img/avatar.png", 10);
    getUserData();
    getFavoritesAmount();
    renderSearchFormBlock({ firstDate, lastDate });
    renderSearchStubBlock();
    renderToast({
        text: "Это пример уведомления. Используйте его при необходимости",
        type: "success",
    }, {
        name: "Понял",
        handler: () => {
            console.log("Уведомление закрыто");
        },
    });
});
