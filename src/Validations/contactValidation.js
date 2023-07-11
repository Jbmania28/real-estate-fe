function validation(values){
    let err={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const contact_pattern = /^[+]91(9|8|7)\d{9}$/
    
    if(values.name === "")
    {
        err.name="Please enter name"
    }
    else{
        err.name = ""
    }

    if(values.email === "")
    {
        err.email="Please enter email"
    }
    else{
        err.email = ""
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

    if(values.contact === "")
    {
        err.contact = "Please enter contact number"
    }
    else if(!contact_pattern.test(values.contact)){
        err.contact = "enter valid contact with +91"
    }else{
        err.contact = ""
    }

    if(values.message === "")
    {
        err.message="Please enter message"
    }
    else{
        err.message = ""
    }

    return err;
}

export default  validation;