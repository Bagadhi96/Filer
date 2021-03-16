submitBTN = document.getElementById("submitButton")
const STOREDVALUES=[];
const errorDisplayed =(element)=>{
    const para = element.nextElementSibling
    if(element.value===""|| element.value===null){
        // console.log(fnameElement.value)
        para.classList.add("notifyMand")
        para.innerHTML="Please enter above feilds"
        p_tag=document.querySelectorAll("p");
        for(p_tag_ele of p_tag){
            if(p_tag_ele.classList.contains("notifyMand")){
                submitBTN.disabled=true
                break;
            }else{
                submitBTN.disabled=false
            }
        }
        return ""
    }
    else{
        para.classList.remove("notifyMand")
        return element.value
    }
}

function getGenderValue(){
    const genderGroupEle=document.getElementsByName("gender")
    for(gendersingleEle of genderGroupEle){
        if(gendersingleEle.checked){
            return gendersingleEle.value
        }
    }
}



                /*ONBLUR Handler*/ 
function formFieldsMandatoryOnBlur(id){
    const inputEleField=document.getElementById(id)
    const para=inputEleField.nextElementSibling
    if(inputEleField.value===""|| inputEleField.value===null){
        para.classList.add("notifyMand")
        para.innerHTML="Please enter the above field"
        submitBTN.disabled=true
        
    }

    //EMAIL VALIDATION
    if(id==="email"){
        if(inputEleField.value===""){
            para.classList.add("notifyMand")
            para.innerHTML="Please enter above field"
            submitBTN.disabled=true
        }

        const regx=/^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+)\.([a-z A-Z]{3,10})$/
        if(!regx.test(inputEleField.value)){
            para.classList.add("notifyMand")
            para.innerHTML="Please enter correct Email Id"
            submitBTN.disabled=true
        }
    }
    //PHONE NUMBER VALIDATION
    if(id==='phnum'){
       const regx=/^[6-9]\d{9}$/
       
       if(!regx.test(inputEleField.value)){ 
        para.classList.add("notifyMand")
        para.innerHTML="Please enter valid mobile number"
        submitBTN.disabled=true
       }
    }   
    

}
                /*ONFOCUS Handler*/ 
function formFieldsMandatoryOnFocus(id){
    const inputEleField=document.getElementById(id)
    const para=inputEleField.nextElementSibling
    if(para.classList.contains("notifyMand")){
        para.classList.remove("notifyMand")
        para.innerHTML=""
    }
    p_tag=document.querySelectorAll("p");
    for(p_tag_ele of p_tag){
        if(p_tag_ele.classList.contains("notifyMand")){
            submitBTN.disabled=true
            break;
        }else{
            submitBTN.disabled=false
        }
    }
}
 

const submitButtonHandler=(event)=>{
    
    
    // FIRSTNAME
    const FNameEle=document.getElementById("fname")
    const firstName=errorDisplayed(FNameEle)
    console.log(firstName)


    // SECONDNAME
    const SNameEle=document.getElementById("sname")
    const secondName=errorDisplayed(SNameEle)
    console.log(secondName)      

    //USERNAME
    const UName=document.getElementById("username")
    const userName=errorDisplayed(UName);
    console.log(userName)

    //EMAIL ID
    const Email=document.getElementById("email")
    const emailId=errorDisplayed(Email);
    console.log(emailId)

    //GENDER
    const gender=getGenderValue()
    console.log(gender)
    
    //DATE OF BIRTH
    const DOB=document.getElementById("dateOfBirth")
    const dob=errorDisplayed(DOB)
    console.log(dob)

    //PHONE NUMBER
    const PHNumber=document.getElementById("phnum")
    const phoneNumber=errorDisplayed(PHNumber)
    console.log(phoneNumber)


    const formField={
        id: Math.random(),
        FIRSTNAME: firstName,
        SECONDNAME: secondName,
        USERNAME: userName,
        EMAILID: emailId,
        GENDER: gender,
        DATEOFBIRTH: dob,
        PHNONENUMBER: phoneNumber,
    }
    renderToUI(formField)
    document.getElementById("fname").value=""
    document.getElementById("sname").value=""
    document.getElementById("username").value=""
    document.getElementById("email").value=""
    document.getElementById("dateOfBirth").value=""
    document.getElementById("phnum").value=""


}   
const renderToUI=(inputFields)=>{
    STOREDVALUES.push(inputFields)
    const listOfValues= document.getElementById('listOfValues')
    const headingRow=document.createElement("tr")
    headingRow.innerHTML=`
    <th>First Name</th>
    <th>Second Name</th>
    <th>User Name</th>
    <th>Email Id</th>
    <th>Gender</th>
    <th>Date of birth</th>
    <th>Phone number</th>
    `
    const sreachEvent= document.createElement("tr")
    sreachEvent.innerHTML=`
    <th><input type='search' id='firstNamesearch'> </th>
    <th><input type='search' id='secondNamesearch'> </th>
    <th><input type='search' id='userNamesearch'> </th>
    <th><input type='search' id='emailIdsearch'> </th>
    <th><input type='search' id='gendersearch'> </th>
    <th><input type='date' id='dateOfBirthsearch'> </th>
    <th><input type='search' id='phoneNumberSearch'> </th>
    `
    if(listOfValues.childElementCount===0){
        listOfValues.append(headingRow)
        listOfValues.append(sreachEvent)
    }
    const inputFieldsElements= document.createElement('tr')
    inputFieldsElements.innerHTML=`
    <td>${inputFields.FIRSTNAME}</td>
    <td>${inputFields.SECONDNAME}</td>
    <td>${inputFields.USERNAME}</td>
    <td>${inputFields.EMAILID}</td>
    <td>${inputFields.GENDER}</td>
    <td>${inputFields.DATEOFBIRTH}</td>
    <td>${inputFields.PHNONENUMBER}</td>
    `
    
    listOfValues.append(inputFieldsElements)

    console.log(listOfValues.childElementCount)
    console.log(STOREDVALUES)
}

submitBTN.addEventListener("click", submitButtonHandler.bind(this.event))