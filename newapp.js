const addButton = document.getElementById("btnAdd");
const removeButton = document.getElementById("btnRemove");
const btnSave = document.getElementById("save");
const errorStatus = document.getElementById("errorDisplay");
const countNum = document.getElementById("count_tick");
const recordHolder = document.getElementById("record_holder");
const recordList = document.getElementById("record_list");
const advise = document.getElementById("advise");

let salesList = recordList.childNodes;

let countNew = 0;

function addNum(){
    errorStatus.style.display = "none";
    countNew += 1;
    countNum.innerText = countNew
}

function removeNum(){
    if(countNew == 0){
        errorStatus.style.display = "grid";
        countNum.innerText = "0";
    }
    else{
        countNew -= 1;
        countNum.innerText = countNew;
    }
}

function saveNum(){
 
    console.log(countNew);
    recordHolder.style.display = "grid";
    
    if(countNew <= 1){
        let newParagraph = document.createElement("p");

        let pStyle = newParagraph.classList;
        pStyle.add("records");
        newParagraph.innerText = countNew + " Ticket";
        recordList.appendChild(newParagraph);
        countNew = 0;
        countNum.innerText = "0";
    }
    else{
        let newParagraph = document.createElement("p");

        let pStyle = newParagraph.classList;
        pStyle.add("records");
        newParagraph.innerText = countNew + " Tickets";
        recordList.appendChild(newParagraph);
        countNew = 0;
        countNum.innerText = "0";
    }

    // console.log(salesList);
    }

    // function salesCheck(){

    //     let salesLengthCheck = salesList.length;
    //     if(salesLengthCheck >= 2){
    //         advise.innerText = "Okay, lets have this";
    //     }
    //     else if(salesLengthCheck > 5){
    //         advise.innerText = "Another hit";
    //     }
    //     else if(salesLengthCheck >= 20){
    //         advise.innerText = "You're making Sales";
    //     }
    //     else if(salesLengthCheck >50){
    //         advise.innerText = "You're Doing Great Today";
    //     }
        

    //     // elseif(salesList.length = 15){
    //     //     advise.textContent = "Gradually";
    //     // }
    // }

    addButton.addEventListener("click", addNum);

    removeButton.addEventListener("click", removeNum);

    btnSave.addEventListener("click", saveNum);

