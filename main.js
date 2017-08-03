console.log(customers);



function createCustomerProfile (custObj) {

  const custProf = `
  <div class="customerProfile">
    <div class="customerPic"><img src="${custObj.picture.large}" alt="Customer picture"></div>
    <h3>${custObj.name.first} ${custObj.name.last}</h3>
    <h4>${custObj.email}</h4>
    <div class="customerAddress">
      <p>${custObj.location.street}</p>
      <p>${custObj.location.city}, ${custObj.location.state} ${custObj.location.postcode}</p>
      <p>${custObj.cell}</p>
    </div>
    <h5 class="ssn">${custObj.id.value}</h5>
  </div>
  `
  return custProf;
  }

  let allHTML = "";

  customers.results.forEach(function (item, idx, arr) {
    allHTML += createCustomerProfile(item);
  })

const customerDOM = document.querySelectorAll('.main')[0];
customerDOM.innerHTML = allHTML;
