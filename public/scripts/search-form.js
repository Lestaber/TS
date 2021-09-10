import { renderBlock } from "./lib.js";
export function renderSearchFormBlock(searchForm) {
    renderBlock("search-form-block", `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${searchForm.firstDate}" min="${searchForm.firstDate}" max="${searchForm.lastDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${searchForm.firstDate}" min="${searchForm.firstDate}" max="${searchForm.lastDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <button type="submit" id="button">Найти</button>
          </div>
        </div>
      </fieldset>
    </form>
    `);
    const realty = {
        emptyArray: [],
    };
    const button = document.getElementById("button");
    if (button != null) {
        button.onclick = function (event) {
            event.preventDefault();
            const firstDateInput = (document.querySelector("#check-in-date"));
            const lastDateInput = (document.querySelector("#check-out-date"));
            const searchFormData = {
                firstDate: firstDateInput.value,
                lastDate: lastDateInput.value,
            };
            search(searchFormData, (emptyArray, error) => {
                setTimeout(() => {
                    const randNum = Math.floor(Math.random() * 10) + 1;
                    console.log(randNum);
                    if (randNum % 2 === 0) {
                        console.log("200", emptyArray);
                    }
                    else {
                        console.log("404", error);
                    }
                }, 3000);
            });
            function search(form, printMsg) {
                console.log(form);
                const result = printMsg(realty, "error");
                if (result != undefined) {
                    console.log(result);
                }
            }
        };
    }
}
