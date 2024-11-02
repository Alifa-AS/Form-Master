
const SimpleForm = () => {

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.phone.value);
        console.log("from submitted")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password"  name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;