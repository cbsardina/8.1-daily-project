console.log(customers);

const main = document.querySelector('.main');

// for(let i = 0; i < customers.length; i++){
   let customerInfo = customers.results[1];

   let contactContainer = document.createElement('div');
   let headerH1 = document.createElement('h1');
   let picContainer = document.createElement('div');
   let nameContainer = document.createElement('p');
   let emailContainer = document.createElement('p');
   let address1Container = document.createElement('p');
   let address2Container = document.createElement('p');
   let phoneContainer = document.createElement('p');
   let ssnContainer = document.createElement('p');

   headerH1.textContent = "INTERNAL COMPANY DIRECTORY";
   picContainer.textContent = customerInfo.picture.medium;
   nameContainer.textContent = customerInfo.name.first + " " + customerInfo.name.last;
   emailContainer.textContent = customerInfo.email;
   address1Container.textContent = customerInfo.location.street;
   address2Container.textContent = customerInfo.location.city + ", " +    customerInfo.location.state + " " + customerInfo.location.postcode;
   phoneContainer.textContent = customerInfo.cell;
   ssnContainer.textContent = customerInfo.id.value;

   console.log(headerH1);
   console.log(picContainer);
   console.log(nameContainer);
   console.log(emailContainer);
   console.log(address1Container);
   console.log(address2Container);
   console.log(phoneContainer);
   console.log(ssnContainer);
// // }
// =======================================================
//    newNameTitle.textContent = personInfo.name
//    newHeightLabel.textContent = 'height ' + personInfo.height
//    newAgeLabel.textContent = 'age: ' + personInfo.age
//
//    personContainer.setAttribute('class', 'person-info')
//    // <div class="person-info">
//    //    <h1>Persons Name</h1>
//    //    <p>Persons Height</p>
//    //    <p>Persons Age</p>
//    //     <ul>
//    //         <li> hobby data</li>
//    //         <li> hobby data</li>
//    //
//    //      </ul>
//    //
//    // </div>
//     personContainer.style.color = personInfo.favoriteColor
//    personContainer.appendChild(newNameTitle)
//    personContainer.appendChild(newHeightLabel)
//    personContainer.appendChild(newAgeLabel)
//    personContainer.appendChild(newHobbyList)
//    appContainer.appendChild(personContainer)
//    }

// }


// let hobbyListItem = document.createElement('li')
//       hobbyListItem.textContent = hobby
//       console.log('------')
//       console.log(hobbyListItem)
//       console.log('------')
//       let newHobbyList = document.createElement('ul');
//       for(let n = 0; n < personInfo.hobbies.length; n++) {
//          let hobby = personInfo.hobbies[n]
//          let hobbyListItem = document.createElement('li')
//          hobbyListItem.textContent = hobby
//          console.log('------')
//          console.log(hobbyListItem)
//          console.log('------')
//
//          // console.log(personInfo.name);
//
//          // console.log(hobby)
//          newHobbyList.appendChild(hobbyListItem)
//       }
//       console.log(newHobbyList)
