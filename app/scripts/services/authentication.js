'use strict';

/**
 * @ngdoc service
 * @name pshopApp.authentication
 * @description
 * # authentication
 * Service in the pshopApp.
 */
 angular.module('pshopApp')
 .service('authentication', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var vm = this;

    this.user = {
    	userId:'1',
    	userName:'smiley159',
    	email:'smiley_donhacktt@hotmail.com'

    };

    this.shop = {
    	shopId:'1',
    	shopName: 'CShop',
    	imgPath:'images/CShop/10.jpg'
    };



    this.transactions = [
    {productId:'1',productName:'pant',price:'399',amount:'1',createDatetime:'21 May 2015',imgPath:'images/CShop/2.jpeg'
    ,address:"151/343 ซอย 3/4 ถนน บางแวก แขวงบางไผ่ เขต บางแค กรุงเทพ 10160",orderBy:"Pumjai Chatmaitri",contact:'023123121'},
    {productId:'2',productName:'shirt',price:'299',amount:'2',createDatetime:'21 May 2015',imgPath:'images/CShop/2.jpeg'
    ,address:"151/343 ซอย 3/4 ถนน บางแวก แขวงบางไผ่ เขต บางแค กรุงเทพ 10160",orderBy:"Poon Chatanant",contact:'091321312'}

    ];

    this.orderLists = 
    [

    {productId:'1',productName:'pant',price:'399',amount:'1',createDatetime:'21 May 2015',imgPath:'images/CShop/2.jpeg'
    ,address:"151/343 ซอย 3/4 ถนน บางแวก แขวงบางไผ่ เขต บางแค กรุงเทพ 10160",orderBy:"Pumjai Chatmaitri",contact:'023423252'},
    {productId:'2',productName:'shirt',price:'299',amount:'2',createDatetime:'21 May 2015',imgPath:'images/CShop/2.jpeg'
    ,address:"151/343 ซอย 3/4 ถนน บางแวก แขวงบางไผ่ เขต บางแค กรุงเทพ 10160",orderBy:"Poon Chatanant",contact:'023423252'}

    ];


    return {

        shopId:'1'
    };


    // var request = $http({ 
    // 	method: "post",
    // 	url: "php/product.php",  
    // 	data: { 
    // 		task: 'getProduct',
    // 		shopId: '1'

    // 	}, 
    // 	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

    // }).success(function (data) {
    // 	console.log(data);
    // 	return data;
    // });

    // return {
    // 	request: request




});



	// this.products = [
	// 					{productId:'1',productName:'pant',price:'399',amount:'20',imgPath:'images/CShop/1.jpeg'},
	// 					{productId:'2',productName:'shirt',price:'299',amount:'30',imgPath:'images/CShop/2.jpeg'}
	// 				];                                                                         