import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState('alifa')
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
      e.preventDefault();
      if(password.length < 6){
        setError('password must be 6 Characters or longer')
      }
      else{
        setError('');
        console.log(name, email, password);
      }
    }

    const handleNameChange = e =>{
        setName(e.target.value)

    }

    const handleEmailChange = e =>{
        setEmail(e.target.value) //যতবার ইমেইল ফিল্ডের ভ্যালুটাকে চেঞ্জ করবা ততবার আমি তোমার মান টাকে নিয়ে ইমেইলের মধ্যে সেন্ট করে দিব , তাহলে সব সময় ইমেইলের মধ্যে মান্ টা থেকে যাবে
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value = {name}
                onSubmit={handleNameChange}
                type="text"  name="name" />
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input 
                onChange={handlePasswordChange}
                type="password"  name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;