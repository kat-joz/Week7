function Records2(){
    
    let employees = [
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
    
    return(
        <>
        <table>
        {employees.map ((record) => 
           <tr>
               <td> {record.name} </td>
               <td> {record.salary} </td>
               <td> {record.dept} </td>
               <td> {record.salary*21/100} </td>
            </tr>
        )}
        </table>
        </>
    )
}

export default Records2