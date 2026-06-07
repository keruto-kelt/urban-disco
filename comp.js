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

function saveTable(showMessage = false) {

    const rows = [];

    document.querySelectorAll("#itemTable tr").forEach((row, index) => {

        if (index < 2) return;

        const inputs = row.querySelectorAll("input");

        if (inputs.length === 2) {
            rows.push({
                name: inputs[0].value,
                price: inputs[1].value
            });
        }
    });

    localStorage.setItem("items", JSON.stringify(rows));

    if (showMessage) {
        alert("保存が完了しました");
    }
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

    const data = localStorage.getItem("items");

    if (!data) return;

    const items = JSON.parse(data);

    // 既存の入力行を削除
    const table = document.getElementById("itemTable");

    while (table.rows.length > 2) {
        table.deleteRow(2);
    }

    // 保存内容を復元
    items.forEach(item => {
        addRow(item.name, item.price);
    });
}
