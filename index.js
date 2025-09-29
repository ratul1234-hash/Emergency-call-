let totalCoin = parseInt(document.getElementById("total-coin").innerText);
let callButtons = document.querySelectorAll(".call-button");
for (i = 0; i < callButtons.length; i++) {
    let button = callButtons[i];
    let callCost = 20;

    button.addEventListener("click", function (event) {
        let name = event.target.closest(".card").querySelector(".service-name").textContent;
        let number = event.target.closest(".card").querySelector(".service-number").textContent;
        if (totalCoin >= callCost) {
            alert(" calling" + name + number);
            totalCoin = totalCoin - callCost;
            document.getElementById("total-coin").innerText = totalCoin;
            let presentTime = new Date().toLocaleTimeString();
            let callHistoryName = name;
            let callHistoryNumber = number;
            let callHistoryTime = presentTime;
            let liName = document.createElement("li");
            let liNumber = document.createElement("li")
            let liTime = document.createElement("li");
            liName.textContent = callHistoryName;
            liNumber.textContent = callHistoryNumber;
            liTime.textContent = callHistoryTime;
            liName.classList.add('inter', 'text-[18px]', 'font-semibold');
            liNumber.classList.add('hind-madurai', 'text-[18px]', 'font-normal', 'text-[#5C5C5C]')
            liNumber.classList.add('hind-madurai', 'text-[18px]', 'font-normal')
            document.getElementById("call-history-details").append(liName, liNumber);
            document.getElementById("call-history-time").appendChild(liTime);


        }
        else {
            alert("You don't have enough coins, you need at least 20 coins to make a call.")
        }


    }

    )

}
// heart button section 
let heartButtons = document.querySelectorAll(".heart-btn");
for (i = 0; i < heartButtons.length; i++) {
    let heartButton = heartButtons[i];
    heartButton.addEventListener("click", function () {
        let totalHeart = parseInt(document.getElementById("total-heart").innerText);
        totalHeart = totalHeart + 1;
        document.getElementById("total-heart").innerText = totalHeart;

    })
}
// clear button 
let clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
    document.getElementById("call-history-details").innerHTML = "";
    document.getElementById("call-history-time").innerHTML = "";
})

// copy button 
let copyButtons = document.querySelectorAll(".copy-btn");
for(i=0; i< copyButtons.length; i++){
    let copyButton = copyButtons[i];
    
    copyButton.addEventListener("click", function(event){
        let totalCopy = parseInt(document.getElementById("total-copy").innerText)
        totalCopy = totalCopy +1;
        document.getElementById("total-copy").innerText = totalCopy;
        let textToCopy = parseInt(event.target.closest(".card").querySelector('.service-number').textContent);
        navigator.clipboard.writeText(textToCopy).then(() =>{
            alert('Hotline number copied to clipboard!');
        })
    })
}