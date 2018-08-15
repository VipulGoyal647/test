let objects;
(function(){
    class Contact {
        constructor(firstname,lastname,contactnumber,emailAddress)
        {
            this.firstname=firstname;
            this.lastname=lastname;
            this.contactnumber=contactnumber;
            this.emailAddress=emailAddress;
        }
    } objects.Contact = Contact;
    
//constructor        function loadJSON() {
      //the reader of jason file
        XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function(){
          if(this.status === 200) {
            if(this.readyState === 4)  {
              addressBook = JSON.parse(this.responseText);
              
              console.log("Data finished loading");///data Loded
              document.getElementById("")
            }
          }
        });
        XHR.open("GET", "/data.json");
        XHR.send();
      }
      
)(objects || (objects = {}));