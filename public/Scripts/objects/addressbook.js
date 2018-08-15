(function(){
    class AddressBook {
        constructor() {
            this.Contacts = [];
            var add = function (firstname,lastname,contactnumber,emailAddress) {
                var contact = {
               firstname:firstname,
               lastname:lastname,
               contactnumber:contactnumber,
               emailAddress:emailAddress
                };
                contacts[Contacts.length]=contact;
            };
        }

        // complete the addressbook class
    }

    objects.AddressBook = AddressBook;

})(objects || (objects = {}));