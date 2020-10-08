function contactSubmitHandler(event){
  event.preventDefault();

  let name = document.getElementById("fullNameInput").value; 
  let email = document.getElementById("emailInput").value; 
  let phone = document.getElementById("phoneInput").value; 
  let query = document.getElementById("queryInput").value; 

  let myData = `name=${name}&phone=${phone}&email=${email}&query=${query}`;

  console.log(myData);
  // AJAX logic begins 
  var ajaxReq = new XMLHttpRequest();
  ajaxReq.onreadystatechange = function(){
    if(this.readyState == 4 && this.response ){
      console.log(JSON.parse(this.response));
      let resp = JSON.parse(this.response);
      if(resp.id == 11){
        document.getElementById("formStatus").innerText = "Saved Successfully";
      }else{
        document.getElementById("formStatus").innerText = "Some Error Occured";
      }
      document.getElementById("formStatus").style.display = 'block';
    }else{
      document.getElementById("formStatus").innerText = "Submitting....";
      document.getElementById("formStatus").style.display = 'block';
    }
  }

  ajaxReq.open("POST", "http://jsonplaceholder.typicode.com/users", true);
  ajaxReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajaxReq.send(myData);
  
}