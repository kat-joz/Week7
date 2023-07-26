import {useState} from 'react';

function WebData(){

    let[records, setRecords]=useState([])
    //let[filteredData,setFilteredData] = useState(allData)

    function getDataFromResponse(data){
        setRecords(data)
    }
    function processResponse(response){
        let jsonPromise = response.json()
        jsonPromise.then(getDataFromResponse)
    }

    let responsePromise = fetch('http://jsonplaceholder.typicode.com/comments')
    responsePromise.then(processResponse)

    
    function search(){
      //  searchByID((records) => {


        //})
    }
    

    return(
        <>
        <h1> Table for json placeholders </h1>
        <input type="search" id="query" name="q" placeholder="Search..."/>
        <input type="button" value="search" onClick={search}/>
        <table>
            {
                records.map((rec) =>
                <tr>
                    <td>{rec.postId}</td>
                    <td>{rec.name}</td>
                    <td>{rec.email}</td>
                    <td>{rec.body}</td>
                </tr>
                )
            }
        </table>
        </>
    )
}

export default WebData