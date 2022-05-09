costPriceInput = document.getElementById("cost-price-el");
sellingPriceInput = document.getElementById("selling-price-el");
output = document.getElementById("status-el");
percentage = document.getElementById("percentage-el");

function update() {
    if (costPriceInput.value > sellingPriceInput.value) {
        output.innerText = "Status: Loss";
        percentage.innerText = "Percentage: " + (((costPriceInput.value) - (sellingPriceInput.value)) / (costPriceInput.value) * 100) + "%";
        costPriceInput.value = ""
        sellingPriceInput.value = ""
    } else if (sellingPriceInput.value > costPriceInput.value) {
        output.innerText = "Status: Profit";
        percentage.innerText = "Percentage: " + (((sellingPriceInput.value) - (costPriceInput.value)) / (costPriceInput.value) * 100) + "%";
        costPriceInput.value = ""
        sellingPriceInput.value = ""
    } else {
        output.innerText = "Status: No Profit, No Loss";
        percentage.innerText = "Percentage: 0%";
        costPriceInput.value = ""
        sellingPriceInput.value = ""
    }
}
