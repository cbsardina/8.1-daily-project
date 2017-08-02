console.log(customers);

const main = document.querySelector('.main');
  let headerH1 = document.createElement('h1');
  headerH1.textContent = "INTERNAL COMPANY DIRECTORY";
  headerH1.setAttribute('class', 'heading');
  main.appendChild(headerH1);

console.log(headerH1);

for(let i = 0; i < customers.results.length; i++){
   let customerInfo = customers.results[i];

   let contactContainer = document.createElement('div');
   let picContainer = document.createElement('img');
   let nameContainer = document.createElement('p');
   let emailContainer = document.createElement('p');
   let address1Container = document.createElement('p');
   let address2Container = document.createElement('p');
   let phoneContainer = document.createElement('p');
   let ssnContainer = document.createElement('p');

   picContainer.style.background = customerInfo.picture.medium; //LEFT OFF HERE FIGURING OUT HOW TO INSERT THE PIC 
   nameContainer.textContent = customerInfo.name.first + " " + customerInfo.name.last;
   emailContainer.textContent = customerInfo.email;
   address1Container.textContent = customerInfo.location.street;
   address2Container.textContent = customerInfo.location.city + ", " +    customerInfo.location.state + " " + customerInfo.location.postcode;
   phoneContainer.textContent = customerInfo.cell;
   ssnContainer.textContent = customerInfo.id.value;

   contactContainer.setAttribute('class', 'contactContainer');
   picContainer.setAttribute('href', customerInfo.picture.medium);
   nameContainer.setAttribute('class', 'nameContainer');
   emailContainer.setAttribute('class', 'emailContainer');
   address1Container.setAttribute('class', 'address1Container');
   address2Container.setAttribute('class', 'address2Container');
   phoneContainer.setAttribute('class', 'phoneContainer');
   ssnContainer.setAttribute('class', 'ssnContainer');

   contactContainer.appendChild(picContainer);
   contactContainer.appendChild(nameContainer);
   contactContainer.appendChild(emailContainer);
   contactContainer.appendChild(address1Container);
   contactContainer.appendChild(address2Container);
   contactContainer.appendChild(phoneContainer);
   contactContainer.appendChild(ssnContainer);
   main.appendChild(contactContainer);

   console.log(picContainer);
   console.log(nameContainer);
   console.log(emailContainer);
   console.log(address1Container);
   console.log(address2Container);
   console.log(phoneContainer);
   console.log(ssnContainer);
   console.log("-------------------");
}
