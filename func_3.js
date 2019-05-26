function app(val){
	val();
};

var app2 = function(){
	console.log('Hi i am called')
};

app(app2);

// function app(){
// 	console.log('Hi i am called')
// };

// var app2 = function(val){
// 	val()
// };

// app2(app)