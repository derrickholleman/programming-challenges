const data = [
  {
    account_id: "39",
    street_address: "216 N May St",
    city: "Chicago",
    state: "IL",
    postal_code: "60607",
  },
  {
    account_id: "40",
    street_address: "625 W Adams St",
    city: "Chicago",
    state: "IL",
    postal_code: "60661",
  },
  {
    account_id: "41",
    street_address: "151 N Franklin St",
    city: "Chicago",
    state: "IL",
    postal_code: "60606",
  },
  {
    account_id: "42",
    street_address: "216 N May St",
    city: "Chicago",
    state: "IL",
    postal_code: "60607",
  },
  {
    account_id: "43",
    street_address: "151 N Franklin St",
    city: "Chicago",
    state: "IL",
    postal_code: "60606",
  },
  {
    account_id: "44",
    street_address: "216 N May St",
    city: "Chicago",
    state: "IL",
    postal_code: "60607",
  },
];

function find_related_addresses(addresses) {
  return addresses.reduce((acc, address) => {
    const { account_id, street_address, city, state, postal_code } = address;

    let full_address = `${street_address}, ${city}, ${state} ${postal_code}`;

    if (acc[full_address] === undefined) {
      acc[full_address] = [];
    }

    acc[full_address].push(account_id);
    return acc;
  }, {});
}
console.log(find_related_addresses(data));
