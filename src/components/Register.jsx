import { useState } from "react";
function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    return(
        <>
            <input type="text" onChange={ (e) => setName(e.target.value)} />;
            <input type="password" onChange={(e) => setPassword( e.target.value)} />;
        </>
    )
}
export default Register;