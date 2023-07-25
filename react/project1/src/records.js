function Records(){
    
    function doubleIt(num){
        let a= num * 2
        return a
    }

    let numbers=[10,30,40,50]
    let numbers2=numbers.map(doubleIt)

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
    
    function doSomething(rec){
        return rec.name
    }
    function check(rec){
        if(rec.dept==="IT"){
            return true
        }else{
            return false
        }
    }

    let names = employees.map(doSomething)
    let names2 = employees.filter(check)

    //instead of creating a function and calling it, you can use an arrow function:
    let list = employees.filter((record)=>record.salary>2000)
    let list2 = employees.map((data)=>data.dept)

    return(
        <>
        {numbers}
        <br/>
        {numbers2}
        <br/>
        {names}
        <br/>
        {names2.length}
        <br/>
        {list.length}
        <br/>
        {list2}
        </>
    )
}

export default Records