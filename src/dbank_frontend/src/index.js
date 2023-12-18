import {dbank_backend} from "../../declarations/dbank_backend";

window.addEventListener("load", async function() {
    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const button = event.target.submitButton;
    button.setAttribute("disabled", true);
    const topUpInput = parseFloat(document.querySelector("#input-amount").value);
    const withdrawalInput = parseFloat(document.querySelector("#withdrawal-amount").value);
    console.log(withdrawalInput);

    if (document.getElementById("input-amount").value.length != 0){
        await dbank_backend.topUp(topUpInput);
        
    }

    if (document.getElementById("withdrawal-amount").value.length != 0){
        await dbank_backend.withdrawal(withdrawalInput);
     
    }
    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";
    await dbank_backend.compound();
    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
    button.removeAttribute("disabled");
})