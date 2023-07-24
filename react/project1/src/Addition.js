function Addition(){
    
    let num1 = 20
    let num2 = 30
    let R = num1 + num2 
    return(
        <>
        <table>
            <tr>
                <td>First number</td>
                <td> {num1} </td>
            </tr>
            <tr>
                <td>Second number</td>
                <td> {num2} </td>
            </tr>
            <tr>
                <td>Result</td>
                <td> {R} </td>
            </tr>
        </table>
        </>
    )}

export default Addition;