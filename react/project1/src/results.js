function Result (props){

    let total = physics+chemistry+maths
    let percentage = total*100/300
      let result = ""
      if (percentage >= 90){
        result="A+"}
        else if (percentage >= 80 && percentage <= 90 ){
        result="A"}
        else if (percentage >= 70 && percentage <= 80 ){
        result="B"}
        else if (percentage >= 60 && percentage <= 70 ){
        result="C"}
        else{
        result="Fail"}
    return(
        <div>
            Name:<b> {props.name} </b>
            <br/>
            Physics:<b> {props.physics} </b>
            <br/>
            Chemistry:<b> {props.chemistry} </b>
            <br/>
            Maths:<b> {props.maths} </b>
            <br/>
            Total Marks:<b> {total} </b>
            <br/>
            Percentage:<b> {percentage} </b>
            <br/>
            Result:<b> {result} </b>
        </div>
    )
}

export default Result;