import React, { useState, useEffect } from 'react';

function EnterDetails(){

const getRecordsEndpoint = "http://localhost:8000/getData";
const addRecordEndpoint = "http://localhost:8000/postData";

const callRestApi = async () => {
  const response = await fetch(getRecordsEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  const ArrayOfLists = jsonResponse.records.map(
    record => <li key={record.name.value}><b>{record.accountType.value}</b>{record.country.value}</li>
  )
  return ArrayOfLists;
};

const AddNewRecord = async (name, accountType, country) => {
  const RecordBodyParameters = {
    'name': name,
    'accountType': accountType,
    'country': country
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(RecordBodyParameters)
  }

  const response = await fetch(addRecordEndpoint, options);
  const jsonResponse = await response.json();
  console.log(JSON.stringify(jsonResponse));
  return jsonResponse;
};

function RenderResult() {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");
  const [nameValue, setNameValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [accountTypeValue, setAccountTypeValue] = useState("");
  const [successCounter, setSuccessCounter] = useState(0);

  useEffect(() => {
    callRestApi().then(
      result => setApiResponse(result));
  }, [successCounter]);

  function HandleNameChange(event) {
    setNameValue(event.target.value);
  }

  function HandleCountryChange(event) {
    setCountryValue(event.target.value);
  }

  function HandleAccountTypeChange(event) {
    setAccountTypeValue(event.target.value);
  }

  function ButtonClick() {
    setApiResponse(apiResponse.concat(<li key="0" >*** now loading ***</li>));
    AddNewRecord(nameValue, countryValue, accountTypeValue)
      .then(response => {
          setSuccessCounter(successCounter + 1);
        }
      );
  }

  return (
    <div>
      <h1>React App</h1>
      <ul>{apiResponse}</ul>
      <form>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input type="text" value={nameValue} id="name-input" onChange={HandleNameChange} />
        </div>
        <div>
          <label htmlFor="country-input">Country:</label>
          <input type="text" value={countryValue} id="country-input" onChange={HandleCountryChange} />
        </div>
        <div>
          <label htmlFor="accountType-input">Account Type:</label>
          <input type="text" value={accountTypeValue} id="accountType-input" onChange={HandleAccountTypeChange} />
        </div>
        <button type="button" onClick={ButtonClick}>Submit</button>

      </form>
    </div>
  );
}
}

export default EnterDetails;

/*return(


        <>

            <h1> Enter your details below </h1>
<form>
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="fname" /><br/>
            <label for="country">Country:</label>
            <input type="text" id="country" name="country" /><br/>
            <label for="accountType">Account type:</label>
            <input type="text" id="accountType" name="accountType" /><br/>
           
            <input type="radio" id="current" name="current" value="Current"></input>
            <label for="current">Current</label><br/>
           
            <input type="radio" id="savings" name="savings" value="Savings"></input>
            <label for="savings">Savings</label><br/>

            <input type="submit" value="Submit" onClick={ ()=> SaveData()}></input>
</form>
        </>

    )


}
*/


