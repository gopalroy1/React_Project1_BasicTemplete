import React from "react";
import  {useState}  from "react";




const FormDisplayError12June =()=>{

    let [error,setError] = useState("");
    // let [name, setName] = useState("");
    // let [email,setEmail] = useState("");

    let [obj,setObj] = useState({name: "",email: "", password: "",confirm_Password:""});


    function fun(event){
        event.preventDefault();
        setError("");
        if (obj.name.trim().length===0) {
            setError("Enter name");
            return;
        }
         if(!obj.name.trim().includes(" ")){
            setError("Enter full name");
            return;
        }
        if(obj.email.trim().length===0){
        setError("Enter email")
        return;
        }
        if(!obj.email.trim().includes("@") || !obj.email.trim().includes(".")){
            setError("Enter correct email");
            return;
        }
        if(obj.password.length<=5){
            setError("password must be of 5 digits")
        }
        if(obj.password.includes(" ")){
            setError("password cannot contain spaces")
        }
        if (obj.password!==obj.confirm_Password) {
            setError("Password and confirm password must be same");
        }
        
    }

    return(
        <div>


            <form>
                <label >Name</label>
                <input onChange={(event)=>{setObj({...obj, name : event.target.value})}} type="text" placeholder="Name" id="name"/>
                <label >Email</label>
                <input onChange={(event)=>{setObj({...obj, email : event.target.value})}} type="email" placeholder="email" id="email"/>
                <label >password</label>
                <input onChange={(event)=>{setObj({...obj, password : event.target.value})}} type="password" placeholder="password" id="password"/>
                <label >password</label>
                <input onChange={(event)=>{setObj({...obj, confirm_Password : event.target.value})}} type="password" placeholder="confirm-password" id="confirm-password"/>
                <input  onClick={(event)=>{fun(event)}}  type="submit"/>
            </form>
            <div>
                <p>{error}</p>
            </div>
        </div>
    );
}

export default FormDisplayError12June;