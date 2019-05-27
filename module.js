function help(val){
	console.log('hey, you get this data from module : ' + val)
};

function result(){
	console.log('hey, I am result method');
}
module.exports = {
	help:help,
	result:result,
}
// module.exports = function(val) {
// 	console.log('hey, you get this data from module : ' + val)
// }
