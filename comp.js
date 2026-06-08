let searchResults = [];
let currentSearchIndex = -1;

function addRow(name = "", price = "", showMessage = false) {

    const table = document.getElementById("itemTable");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <input type="text" value="${name}">
        </td>
        <td>
            <input type="number" class="price" value="${price}">
        </td>
        <td>
            <button type="button" onclick="deleteRow(this)">
                削除
            </button>
        </td>
    `;

    table.appendChild(row);
    if (showMessage) {
        alert("行を追加しました。");
    }
}

function createShop() {

    const shopName =
        prompt("店舗名を入力してください");

    if (!shopName) {
        return;
    }

    const wrapper =
        addShopTable(shopName);

    const addButton =
        wrapper.querySelector("button");

    addRowToTable(addButton);

    alert("店舗を追加しました。");
}

function addRowToTable(button, name = "", price = "") {

    const wrapper =
        button.closest(".shop-wrapper");

    const table =
        wrapper.querySelector("table");

    const row =
        document.createElement("tr");

    row.innerHTML = `
        <td>
            <input type="text"
                   value="${name}">
        </td>
        <td>
            <input type="number"
                   value="${price}">
        </td>
        <td>
            <button type="button"
                    onclick="deleteRow(this)">
                削除
            </button>
        </td>
    `;

    table.appendChild(row);
}

function saveTable(showMessage = false) {

    const shops = [];

    document.querySelectorAll(".shop-wrapper")
        .forEach(wrapper => {

            const table =
                wrapper.querySelector("table");

            const shopName =
    table.querySelector(".shop-name")
         .textContent
         .trim();

            const items = [];

            for (let i = 2; i < table.rows.length; i++) {

                const inputs =
                    table.rows[i].querySelectorAll("input");

                if (inputs.length === 2) {

                    items.push({
                        name: inputs[0].value,
                        price: inputs[1].value
                    });
                }
            }

            shops.push({
                shopName,
                items
            });
        });

    localStorage.setItem(
        "shopData",
        JSON.stringify(shops)
    );

    if (showMessage) {
        alert("保存が完了しました");
    }
}

function deleteTable(button) {

    const result =
        confirm("この店舗表を削除しますか？");

    if (!result) {
        return;
    }

    const wrapper =
        button.closest(".shop-wrapper");

    wrapper.remove();
}

function deleteRow(button) {

    const result = confirm("この行を削除しますか？");

    if (!result) {
        return;
    }

    const row = button.closest("tr");
    row.remove();
}

function load() {

    const data =
        localStorage.getItem("shopData");

    if (!data) {
        return;
    }

    const shops =
        JSON.parse(data);

    const container =
        document.getElementById("tableContainer");

    container.innerHTML = "";

    shops.forEach(shop => {

        const wrapper =
            addShopTable(shop.shopName);

        const addButton =
            wrapper.querySelector("button");

        shop.items.forEach(item => {

            addRowToTable(
                addButton,
                item.name,
                item.price
            );
        });
    });
}

function addShopTable(shopName = "新しい店舗") {

    const container =
        document.getElementById("tableContainer");

    const wrapper =
        document.createElement("div");

    wrapper.className = "shop-wrapper";

    wrapper.innerHTML = `
    <table class="shopTable">

        <colgroup>
            <col class="col-name">
            <col class="col-price">
            <col class="col-action">
        </colgroup>

        <tr>
            <th colspan="3">
    <div class="shop-header">
        <span class="shop-name">${shopName}</span>

        <button type="button"
                onclick="deleteTable(this)">
            店舗削除
        </button>
    </div>
</th>
        </tr>

        <tr>
            <th>商品名</th>
            <th>価格</th>
            <th>操作</th>
        </tr>

    </table>

    <br>

    <button type="button"
            onclick="addRowToTable(this)">
        行追加
    </button>

    <hr>
    `;

    container.appendChild(wrapper);

    return wrapper;
}

function searchItem() {

    const keyword = prompt("検索する商品名を入力してください");

    if (!keyword) {
        return;
    }

    document.querySelectorAll(".search-hit")
        .forEach(e => e.classList.remove("search-hit"));

    searchResults = [];

    document.querySelectorAll(".shopTable").forEach(table => {

        for (let i = 2; i < table.rows.length; i++) {

            const inputs =
                table.rows[i].querySelectorAll("input");

            if (inputs.length !== 2) {
                continue;
            }

            const name = inputs[0].value.trim();
            const price = Number(inputs[1].value) || 999999999;

            if (name.includes(keyword)) {

                searchResults.push({
                    input: inputs[0],
                    price: price,
                    name: name
                });
            }
        }
    });

    if (searchResults.length === 0) {
        alert("該当する商品が見つかりませんでした。");
        return;
    }

    // 価格の安い順
    searchResults.sort((a, b) => a.price - b.price);

    currentSearchIndex = 0;

    moveToSearchResult();
}

function nextSearchResult() {

    if (searchResults.length === 0) {
        alert("先に検索してください。");
        return;
    }

    currentSearchIndex++;

    if (currentSearchIndex >= searchResults.length) {
        currentSearchIndex = 0;
    }

    moveToSearchResult();
}

function moveToSearchResult() {

    document.querySelectorAll(".search-hit")
        .forEach(e => e.classList.remove("search-hit"));

    const result =
        searchResults[currentSearchIndex];

    result.input.classList.add("search-hit");

    result.input.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    result.input.focus();

    const shopName =
        result.input
              .closest("table")
              .querySelector(".shop-name")
              .textContent;

    document.getElementById("searchInfo").innerHTML =
        `
        ${currentSearchIndex + 1}件目 / ${searchResults.length}件<br><br>
        店舗: ${shopName}<br>
        商品: ${result.name}<br>
        価格: ${result.price}円
        `;

    document.getElementById("searchPopup").style.display =
        "flex";
}

function closeSearchPopup() {

    document.getElementById("searchPopup").style.display =
        "none";
}

function prevSearchResult() {

    if (searchResults.length === 0) {
        alert("先に検索してください。");
        return;
    }

    currentSearchIndex--;

    if (currentSearchIndex < 0) {
        currentSearchIndex = searchResults.length - 1;
    }

    moveToSearchResult();
}
