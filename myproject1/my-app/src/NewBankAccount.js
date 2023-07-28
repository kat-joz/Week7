import {useState} from 'react'

function NewBankAccount(){
let [account, setAccountNumber]=useState({accountNumber:"not known"})

function processData(data){
    setAccountNumber(data)
}

function processResponse(response){
    let promise2 = response.json()
    promise2.then(processData)
}

function createAccount(){
const request = {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
    "name":document.getElementById("na").value,
    "country":document.getElementById("country").value,
    "accountType":document.getElementById("acctype").value
})
}

let promise1 = fetch('http://127.0.0.1:8000/createAccount',request)
promise1.then(processResponse)
}


    return(


        <>
        Name <input type="text" id="na" /><br/>
        Country <input type="text" id="country" /><br/>
        AccountType <input type="text" id="acctype" /><br/>
        <input type="Button" value="New Account" onClick={ ()=> createAccount()}></input>
        Account Number:<b>{account.newAccountNumber}</b>

        </>

    )


}



export default NewBankAccount;