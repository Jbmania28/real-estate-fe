function validation(values){
    let err={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/
    
    if(values.fname === "")
    {
        err.fname="Please enter first name"
    }
    else{
        err.fname = ""
    }

    if(values.lname === "")
    {
        err.lname="Please enter last name"
    }
    else{
        err.lname = ""
    }

    if(values.email === "")
    {
        err.email="Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        err.email = "Email didnt match"
    }else{
        err.email=""
    }

    if(values.password === "")
    {
        err.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.passwword)){
        err.password = "Password didnt match"
    }else{
        err.password = ""
    }

    return err;
}

export default  validation;