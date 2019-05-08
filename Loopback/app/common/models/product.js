'use strict';

module.exports = function(Product) {

  Product.observe('before save', function(ctx, next) {
    console.log('CTX DATA: ', ctx)
    if(ctx.instance && ctx.instance.categoryId) {
      return Product.app.models.Category
        .count({ id: ctx.instance.categoryId })
        .then(res => {
          if(res < 1) {
            return Promise.reject('Error adding product to non-existing category')
          }
        })
    }
    return next()
  })

  /**
   * Return true if ionput is larger than 0
   * @param {number} quantity
   */
  const validQuantity = quantity => Boolean(quantity > 0)


  /**
   * Buy this product
   * @param {number} quantity Number of products to buy
   * @param {Function(Error, object)} callback
   */

  Product.prototype.buy = function(quantity, callback) {
  let prod
  if(quantity === 1) {
    prod = 'product'
  } else {
    prod = 'products'
  }
  if(!validQuantity(quantity)) {
    return callback(`Invalid quantity ${quantity}`)
  }
    const result = {
      status: `You bought ${quantity} ${prod}`
    }
    // TODO
    callback(null, result)
  }

  // Validate minimal length of the name
  Product.validatesLengthOf('name', {
    min: 3,
  })

  // Validate the name to be unique
  Product.validatesUniquenessOf('name')

  const positiveInteger = /^[0-9]*$/

  const validatePositiveInteger = function(err) {
    if(!positiveInteger.test(this.price)) {
      err()
    }
  }
  Product.validate('price', validatePositiveInteger, {
    message: 'Price should be a positive integer'
  })
};
