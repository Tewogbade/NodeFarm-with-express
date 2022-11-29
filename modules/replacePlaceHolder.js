"use strict";

module.exports = (old, newProduct) => {
  let output = old.replaceAll("[%PRODUCTIMAGE%]", newProduct.image);
  output = output.replaceAll("[%PRODUCTNAME%]", newProduct.productName);
  output = output.replaceAll("[%PRODUCTQUANTITY%]", newProduct.quantity);
  output = output.replaceAll("[%PRODUCTPRICE%]", newProduct.price);
  output = output.replaceAll("[%PRODUCTDESCRIPTION%]", newProduct.description);
  output = output.replaceAll("[%PRODUCTFROM%]", newProduct.from);
  output = output.replaceAll("[%PRODUCTNUTRIENTS%]", newProduct.nutrients);
  output = output.replaceAll("[%PRODUCTID%]", newProduct.id);

  if (!newProduct.organic) {
    return output.replace("[%NOTORGANIC%]", "not-organic");
  }

  return output;
};
