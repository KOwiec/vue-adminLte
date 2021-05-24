// get fake data without save in db.json and send by api/services & store(modules/products.js) to table in src/views/examples/APIExample.vue
// first: run 'faker' script in package.json
const faker = require('faker');
let productId = 1;
class FakeProduct {
  constructor () {
    this.id = productId++;
    let fc = faker.commerce;
    this.name = fc.productName();
    this.color = fc.color();
    this.department = fc.department();
    this.price = fc.price();
    this.adjective = fc.productAdjective();
    this.material = fc.productMaterial();
    this.product = fc.product()
  }

  serialize () {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
      department: this.department,
      price: this.price,
      adjective: this.adjective,
      material: this.material,
      product: this.product
    }
  }
}

module.exports = function () {
  let data = { products: [] };
  // Create 1000 Product
  data.products = generateFakeObject(FakeProduct, 100);
  return data
};

function generateFakeObject (TARGETCLASS = '', count = 10) {
  if (typeof TARGETCLASS !== 'function') {
    console.error('ERROR');
    return []
  }
  let result = [];
  for (var i = 0; i < count; i++) {
    const fp = new TARGETCLASS();
    result.push(fp.serialize())
  }
  return result
}
