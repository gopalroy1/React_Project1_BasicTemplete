
import React,{useState} from "react";

const AddToArraySetState12June=()=>{
    
    let [arr,setArr] = useState(["apple","Mango"]);
    let [newFruit,setNewFruit] = useState("");
    function fun(){
        let arr1 = arr;
        arr1.push(newFruit);
        setArr(arr1);
        console.log(arr.join(",,"));
    }
    function reset(){
        setArr([]);
        setNewFruit("");
    }
    return(
        <div>
            <input value={newFruit} onChange={(event)=>{
                setNewFruit(event.target.value)
                
                }} type="text" />
            <button onClick={fun}>submit</button>
            <button onClick={reset}>Reset</button>
            <div>{arr.join(" ")}</div>
        </div>
    )
}

export default AddToArraySetState12June;