import {useState} from 'react';

function Events(){
    
    let [x,ChangeData]=useState("value placeholder");
    let [data,assignData]=useState(20)
    
    //when you click, x will change to 500:
    function doSomething(){
        ChangeData(500)
    }
    function doSomething2(){
        assignData(++data)
    }
    return(
        <>
        <h2>{x}</h2>
        <input type="button" value="click" onClick={doSomething}/>
        <h2>{data}</h2>
        <input type="button" value="click" onClick={doSomething2}/>
        </>
    )
}



export default Events