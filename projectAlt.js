console.log(customers);

// let theBody = document.querySelector('.theBody');
//   let headerTemp;


const main = document.querySelector('.main');

let headerTemp = `<h1 class="heading">INTERNAL COMPANY DIRECTORY</h1>`;
main.innerHTML = headerTemp;

for(let i = 0; i < customers.results.length; i++){
  let customerInfo = customers.results[i];

  let custPic = customerInfo.picture.large;
  let custName = customerInfo.name.first + customerInfo.name.last;
  let custEmail = customerInfo.email;
  let custAddress1 = customerInfo.location.street;
  let custAddress2 = customerInfo.location.city + customerInfo.location.state + customerInfo.location.postcode;
  let custCell = customerInfo.cell;
  let custSsn = customerInfo.id.value;

  let template;

  template = `<div>`;
  template += '<div>';
  template += '<img src="${custPic}" alt="Customer Pic">';
  template += '</div>';
  template += '<h3>${custName}</h3>';
  template += '<p>${custEmail}</p>';
  template += '<ul>';
  template += '<li>${custAddress1}</li>';
  template += '<li>${custAddress2}</li>';
  template += '<p>${custCell}</p>';
  template += '<p>${custSsn}</p>';
  template += '</ul>';
  template += '</div>';

  main.innerHTML = template;
}

// let template;
//
// template = `<div class="contactContainer">`;
// template += '<div class="picContainer">';
// template += '<img src="custPic" alt="Customer Pic">';
// template += '</div>';
// template += '<h3 class="nameContainer">${custName}</h3>';
// template += '<p class="emailContainer">${custEmail}</p>';
// template += '<ul class="addressList">';
// template += '<li class="address1">${custAddress1}</li>';
// template += '<li class="address2">${custAddress2}</li>';
// template += '<p class="phoneContainer">${custCell}</p>';
// template += '<p class="ssnContainer">${custSsn}</p>';
// template += '</ul>';
// template += '</div>';
//
// main.innerHTML = template;
