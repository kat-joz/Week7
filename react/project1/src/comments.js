import {useState} from 'react';

function Comments(){

    let[records, setRecords]=useState([])
    let[comment, setComments]=useState([])

    function getDataFromResponse(data){
        setRecords(data)

    function getDataFromResponse(comment){
            setComments(comment)
    }
    function processResponse(response){
        let jsonPromise = response.json()
        jsonPromise.then(getDataFromResponse)
    }


    let responsePromise = fetch ("http://jsonplaceholder.typicode.com/posts")
    responsePromise.then(processResponse)

    function displayComments (pid){
        let url = "http://jsonplaceholder.typicode.com/posts/"+pid+"/comments"

        let responsePromise = fetch (url)
        responsePromise.then(processResponse)
 
    }


    return(
        <>
        <h1> Type in a number to view comments: </h1> 
        <table>
            {
                records.map((rec) =>
                <tr>
                    <td>{rec.id}</td>
                    <td>{rec.title}</td>
                    <td>{rec.body}</td>
                    <td><input 
                    type="button" 
                    value="Comments" 
                    onClick={()=>displayComments(rec.id)}/></td>   
                </tr>
                )}
        </table>
        <table>
            {
                comment.map((rec) =>
                <tr>
                    <td>{rec.postId}</td>
                    <td>{rec.name}</td>
                    <td>{rec.email}</td>
                    <td>{rec.body}</td>
                </tr>
            )}
        </table>
        </>
    )
}

export default Comments