window.onload = function () {
    displayReceipts();
    const button = document.getElementById("generate-receipt");

    button.onclick = function (){
        e.preventDefault();
        let tenant = document.getElementById("tName").value;
        let landlord = document.getElementById("lName").value;
        let address = document.getElementById("address").value;
        let amount = document.getElementById("amount").value;
        let payment = document.getElementById("paymentMethod").value;
        let dateFrom = document.getElementById("periodFrom").value;
        let dateTo = document.getElementById("periodTo").value;
        let receipt = document.getElementById("receiptID").value;
        let signature = document.getElementById("signature").value;
        let email = document.getElementById("email").value;
        let unit = document.getElementById("unit").value;
        let number = document.getElementById("number").value;
        let date = document.getElementById("pDate").value;


        if (tenant==0 || landlord==0 || address==0 || amount==0 || payment==0 ||
            dateFrom==0|| dateTo==0 || receipt==0 || signature==0 ||
            email==0 || unit==0 || number==0 || date==0) {
                window.alert("Please fill out all questions");
                return;
        }

        let receiptObj = {
            tenant,
            landlord,
            address,
            unit,
            amount,
            payment,
            dateFrom,
            dateTo,
            receiptID: receipt,
            signature,
            email,
            number,
            paymentDate: date
        };

        let receipts = JSON.parse(localStorage.getItem("receipts")) || [];
        receipts.push(receiptObj);
        localStorage.setItem("receipts", JSON.stringify(receipts));

        displayReceipts();
    };
};

function displayReceipts(){
    let receipts = JSON.parse(localStorage.getItem("receipts")) || [];
    let outputDiv = document.getElementById("recieptOut");
    outputDiv.innerHTML = "";

    receipts.forEach((r, index) => {
        outputDiv.innerHTML += `
            <div class="receipt-class">
            <h1><strong>Rent Receipt</strong>${index +1}</h1>
            <p><strong>Tenant:</strong> ${r.tenant}</p>
            <p><strong>Landlord:</strong> ${r.landlord}</p>
            <p><strong>Address:</strong> ${r.address}</p>
            <p><strong>Payment Method:</strong> ${r.payment}</p>
            <p><strong>Date:</strong> ${r.dateFrom} - ${r.dateTo}</p>
            <p><strong>Receipt No:</strong> ${r. receiptID}</p>
            <button onclick="deleteReciept(${index})"> X </button>
            </div>
        `;
    });
}

function deleteReciept(index){
    let receipts = JSON.parse(localStorage.getItem("receipts")) || [];
    receipts.splice(index, 1);
    localStorage.setItem("receipts", JSON.stringify(receipts));
    displayReciepts();
}
