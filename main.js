console.log(customers);

const main = document.querySelector('.main');
  let headerH1 = document.createElement('h1');
  headerH1.textContent = "INTERNAL COMPANY DIRECTORY";
  headerH1.setAttribute('id', 'heading');
  main.appendChild(headerH1);

console.log(headerH1);

for(let i = 0; i < customers.results.length; i++){
   let customerInfo = customers.results[i];

   let contactContainer = document.createElement('div');
   let picContainer = document.createElement('div');
   let contactPic = document.createElement('img');
   let nameContainer = document.createElement('h3');
   let emailContainer = document.createElement('p');
   let addressList = document.createElement('ul');
   let address1 = document.createElement('li');
   let address2 = document.createElement('li');
   let phoneContainer = document.createElement('p');
   let ssnContainer = document.createElement('p');

   contactPic.style.background = customerInfo.picture.large;
   nameContainer.textContent = customerInfo.name.first + " " + customerInfo.name.last;
   emailContainer.textContent = customerInfo.email;
   address1.textContent = customerInfo.location.street;
   address2.textContent = customerInfo.location.city + ", " +    customerInfo.location.state + " " + customerInfo.location.postcode;
   phoneContainer.textContent = customerInfo.cell;
   ssnContainer.textContent = customerInfo.id.value;

   contactContainer.setAttribute('id', 'contactContainer');
   picContainer.setAttribute('id', 'picContainer');
   contactPic.setAttribute('src', customerInfo.picture.medium);
   nameContainer.setAttribute('id', 'nameContainer');
   emailContainer.setAttribute('id', 'emailContainer');
   addressList.setAttribute('id', 'addressList');
   address1.setAttribute('id', 'address1');
   address2.setAttribute('id', 'address2');
   phoneContainer.setAttribute('id', 'phoneContainer');
   ssnContainer.setAttribute('id', 'ssnContainer');

   picContainer.appendChild(contactPic);
   contactContainer.appendChild(picContainer);
   contactContainer.appendChild(nameContainer);
   contactContainer.appendChild(emailContainer);
   contactContainer.appendChild(addressList);
   addressList.appendChild(address1);
   addressList.appendChild(address2);
   contactContainer.appendChild(phoneContainer);
   contactContainer.appendChild(ssnContainer);
   main.appendChild(contactContainer);

  //  console.log(picContainer);
  //  console.log(nameContainer);
  //  console.log(emailContainer);
  //  console.log(addressList);
  // //  console.log(address2);
  //  console.log(phoneContainer);
  //  console.log(ssnContainer);
  //  console.log("-------------------");
}
