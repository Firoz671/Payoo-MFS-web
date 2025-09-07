function getInputs(id){
    const  inputField = document.getElementById(id).value
    const inputFieldNumber = parseInt(inputField)
    return inputFieldNumber
}

function getInputStr(id){
    const input = document.getElementById(id)
    input.value
    return input.value
}

function getInnerText(id){
    const element = parseInt(document.getElementById(id).innerText)
    return element
}

function setInnerText(value){
    const availableBalanceElement = document.getElementById('availableBalance')
    availableBalanceElement.innerText = value
}
const transactionData = []



//Add Money
document.getElementById('addMoneyButton').
    addEventListener('click',
        function (){
            const accountNumber = getInputStr('accountNumber')
            const addAmount = getInputs('addAmount')

            const accPin = getInputs('accPin')

            const availableBalance = getInnerText('availableBalance')

            const totalAvailableBalance = addAmount + availableBalance

            setInnerText(totalAvailableBalance)

            const data = {
                    name: "Add Money",
                    date: new Date().toLocaleTimeString()
            }
            transactionData.push(data)
            console.log(transactionData)    
        }
    )

// Cash Out
document.getElementById('cashOutBtn').
    addEventListener('click',
        function (){
            const availableBalance = parseInt(document.getElementById('availableBalance').innerText)

            const cashOutAmount = getInputs('cashOutAmount')

            const remainingBalance = availableBalance - cashOutAmount

            document.getElementById('availableBalance').innerText = remainingBalance

        const data = {
        name:"Cash Out",
        date:new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    console.log(transactionData)
        }
    )

// Pay Bill
document.getElementById('payBillBtn').
    addEventListener('click',
        function (){
            const availableBalance = parseInt(document.getElementById('availableBalance').innerText)

            const payBillAmount = getInputs('payBillAmount')

            const remainingBalance = availableBalance - payBillAmount

            document.getElementById('availableBalance').innerText = remainingBalance

            alert('Bill Paid')


                const data = {
        name:"Pay Bill",
        date:new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    console.log(transactionData)
        }
    )




//Toggle Features

function handleToggle(id){
    const forms = document.getElementsByClassName('form')
        for(const form of forms){
            form.style.display = 'none'
        }
        document.getElementById(id).style.display = 'block'
}


function actionBtn(id){
        const actionBtn = document.getElementsByClassName('form-btn')

        for(const btn of actionBtn){
            btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
            btn.classList.add("border-gray-300")
        }
        document.getElementById(id).classList.remove('border-gray-300')
        document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

document.getElementById('trigAddMoney').
    addEventListener('click',
        function(){
        handleToggle('addMoneySection')

        actionBtn('trigAddMoney')
    }
    )
document.getElementById('trigWithdrawMoney').
    addEventListener('click',
        function(){
        handleToggle('withdrawMoneySection')
        actionBtn('trigWithdrawMoney')
    }
    )
document.getElementById('trigSendMoney').
    addEventListener('click',
        function(){
            handleToggle('transferMoneySection')
            actionBtn('trigSendMoney')
    }
    )
document.getElementById('trigBonus').
    addEventListener('click',
        function(){
            handleToggle('getBonusMoneySection')
            actionBtn('trigBonus')
    }
    )
document.getElementById('trigPayBill').
    addEventListener('click',
        function(){
            handleToggle('payBillSection')
            actionBtn('trigPayBill')
    }
    )
document.getElementById('trigTransactions').
    addEventListener('click',
        function(){
            handleToggle('transactionSection')
            actionBtn('trigTransactions')
    }
    )

// Transactions

document.getElementById("trigTransactions").
addEventListener("click",
    function(){
    const transactionContainer = document.querySelector(".transaction-container")
    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `

        transactionContainer.appendChild(div)


    }
})