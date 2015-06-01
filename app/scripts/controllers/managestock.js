'use strict';

/**
 * @ngdoc function
 * @name pshopApp.controller:ManagestockCtrl
 * @description
 * # ManagestockCtrl
 * Controller of the pshopApp
 */
 angular.module('pshopApp')
 .controller('ManagestockCtrl', function ($scope,authentication,product,Upload,productsss) {

  $scope.newProduct = {};
  $scope.products = productsss.data;
  console.log(productsss);
  $scope.shop = authentication.shop;
  $scope.newProduct.imgPath='Wahaaaa';

  $scope.log = '';

  $scope.createProduct = function(){   		

   product.createProduct($scope.newProduct);

   $scope.newProduct={};   		
 }

 

$scope.click = function(){
  $scope.upload($scope.files);   
}

$scope.upload = function (files) {
  if (files && files.length) {
   
      var file = files[0];
      Upload.upload({
        url: 'php/upload.php',
        fields: {
          task: 'createProduct',
          productName: $scope.newProduct.productName,
          productCode: $scope.newProduct.productCode,
          price: $scope.newProduct.price,  
          amount: $scope.newProduct.amount,
          description: $scope.newProduct.description,
          shopId: '1'
        },
        file: file
      }).success(function (data, status, headers, config) {
        $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
        $scope.$apply();
        console.log(data);
        $scope.newProduct.productId = data.productId;
        $scope.newProduct.imagePath = data.imagePath;
        $scope.products.push($scope.newProduct);
        $scope.newProduct={};
        
      });


    
  }
};



});
