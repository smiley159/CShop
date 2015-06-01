'use strict';

/**
 * @ngdoc service
 * @name pshopApp.product
 * @description
 * # product
 * Service in the pshopApp.
 */
angular.module('pshopApp')
  .service('product', function ($http,authentication) {

    this.product = {};
    
   	this.createProduct = function(newProduct){ 

      var request = $http({
        method: "post",
        url: "php/product.php", 
        data: { 
            task: 'createProduct',
            productName: newProduct.productName,
            productCode: newProduct.productCode,
            price: newProduct.price, 
            amount: newProduct.amount,
            description: newProduct.description,
            imgPath: newProduct.imgPath,
            shopId: authentication.shopId
          
        }, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

    });  

      console.log(request);

      request.success(function (data) {
       	console.log(data);

    	});

  }



  return  {
      products: function(){
        return $http({ 
          method: "post",
          url: "php/product.php",  
          data: { 
            task: 'getProduct',
            shopId: authentication.shopId

          }, 
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

        })
      }
    };
   	
  });
