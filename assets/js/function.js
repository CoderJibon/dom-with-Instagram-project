
// Create Post and store LS Data
const addLsData = (type, formData) => {
    //read ls data
    const readLsData = localStorage.getItem(type);
    //add ls data
    let Alldata = [];
    
    if (readLsData) {
        Alldata = JSON.parse(readLsData);
    }
    //form data add ls data
    Alldata.push(formData);

    console.log(Alldata);
    //post data add on ls
    localStorage.setItem(type, JSON.stringify(Alldata));
    

}

// read ls data
const readLsData = (type) => {
    return JSON.parse(localStorage.getItem(type));
}

//update ls data

const updateLsData = (type,updateForm) => {
    localStorage.setItem(type, JSON.stringify(updateForm));
}

//alert sms
const alertSms = (text, type = "danger",) => {
    return `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
   ${text}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
}