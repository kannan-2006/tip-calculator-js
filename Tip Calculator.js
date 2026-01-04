let billAmountInput = document.getElementById('billAmount');
let precentageTipAmountInput = document.getElementById('percentageTip');
let tipAmountInput = document.getElementById('tipAmount');
let totalAmoumtInput = document.getElementById('totalAmount');
let paragraph_element = document.getElementById('errorMessage');
let error_message = "Please Enter a Valid Input";

function calculateAmount() {
    let bill_amount = billAmountInput.value;
    let percentage_tip_amount = precentageTipAmountInput.value;
    if (bill_amount === "") {
        paragraph_element.textContent = error_message;
        paragraph_element.style.color = "red";
    } else if (percentage_tip_amount === "") {
        paragraph_element.textContent = error_message;
        paragraph_element.style.color = "red";
    } else {
        bill_amount = parseInt(bill_amount);
        percentage_tip_amount = parseInt(percentage_tip_amount);
        let calculatTip = (percentage_tip_amount / 100) * bill_amount;
        let calculatTotalAmount = bill_amount + calculatTip;
        tipAmountInput.value = calculatTip;
        totalAmoumtInput.value = calculatTotalAmount;
        paragraph_element.textContent = "";

    }

}