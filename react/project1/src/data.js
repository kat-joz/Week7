import {useState} from 'react';

function Data(){
    
    let records = [
        {
            "name":"Kasia",
            "dept":"IT",
            "salary":2000,
        },
        {
            "name":"Mike",
            "dept":"HR",
            "salary":3000
        },
        {
            "name":"Chester",
            "dept":"Sales",
            "salary":1500
        }
    ]
    
    function addEmployee(){
        setEmployees((oldRecords) => {
            let newRecord = {
            "name":"Mariusz",
            "dept":"IT",
            "salary":3500}
            return [...oldRecords,newRecord]

        })
    }

    let [employees,setEmployees]=useState(records)

    return(
        <>
        <input type="button" value="New Employee" onClick={addEmployee}/>
        <table>
           <tr>
               <td>Name</td>
               <td>Department</td>
               <td>Salary</td>
            </tr>
            { employees.map((rec)=>
                <tr>
                <td> {rec.name} </td>
                <td> {rec.dept} </td>
                <td> {rec.salary} </td>
                </tr>
            )}
        </table>
        </>
    )
}

export default Data