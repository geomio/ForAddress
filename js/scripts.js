function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
  }
  
  AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  }
  
  AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }
  
  AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] != undefined) {
      return this.contacts[id];
    }
    return false;
  }
  
  AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id] === undefined) {
      return false;
    }
    delete this.contacts[id];
    return true;
  }
  
  function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }

let addressBook = new AddressBook();
$(document).ready(function() {
  $('form#new-contact').submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $('input#new-first-name').val();
    const inputtedLastName = $('input#mew-last-name').val();
    const inputtedPhoneNumber = $('input#new-phone-number').val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  });
});

let contact = new Contact("Jim", "Davis", "555-555-5555");
let contact2 = new Contact("Garfield", "Cat", "555-555-5555");
addressBook.addContact(contact);
addressBook.addContact(contact2);
addressBook.deleteContact(contact);
console.log(contact2);
console.log(contact);