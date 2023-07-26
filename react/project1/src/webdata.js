import {useState} from 'react';

function WebData(){

    let[records, setRecords]=useState([])

    function getDataFromResponse(data){
        setRecords(data)
    }
    function processResponse(response){
        let jsonPromise = response.json()
        jsonPromise.then(getDataFromResponse)
    }

    
    function search(){
        let id = document.getElementById("query").value
        let url = "http://jsonplaceholder.typicode.com/posts/"+id+"/comments"

        let responsePromise = fetch (url)
        responsePromise.then(processResponse)
 
    }
    

    return(
        <>
        <h1> Type in a number to view comments: </h1>
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