const customers = [
  {
    _id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: "Kulas Light Gwenborough",

    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  },
  {
    _id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: "Victor Plains Wisokyburgh",
    phone: "010-692-6593 x09125",
    website: "anastasia.net"
  },
  {
    _id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: "Douglas Extension McKenziehaven",

    phone: "1-463-123-4447",
    website: "ramiro.info"
  },
  {
    _id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: "Hoeger Mall South Elvis",

    phone: "493-170-9623 x156",
    website: "kale.biz"
  },
  {
    _id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: "Skiles Walks Roscoeview",

    phone: "(254)954-1289",
    website: "demarco.info"
  },
  {
    _id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: "Norberto Crossing  South Christy",

    phone: "1-477-935-8478 x6430",
    website: "ola.org"
  },
  {
    _id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: "Rex Trail Howemouth",

    phone: "210.067.6132",
    website: "elvis.io"
  }
];

export function getCustomers() {
  return customers;
}

export function getCustomer(id) {
  return customers.find(m => m._id === id);
}

export function saveCustomer(customer) {
  let customerInDb = customers.find(m => m._id === customer._id) || {};
  customerInDb.name = customer.name;
  customerInDb.username = customer.username;
  customerInDb.email = customer.email;
  customerInDb.address = customer.address;
  customerInDb.phone = customer.phone;

  customerInDb.website = customer.website;

  if (!customerInDb._id) {
    customerInDb._id = Date.now();
    customers.push(customerInDb);
  }

  return customerInDb;
}

export function deleteCustomer(id) {
  let customerInDb = customers.find(m => m._id === id);
  customers.splice(customers.indexOf(customerInDb), 1);
  return customerInDb;
}
