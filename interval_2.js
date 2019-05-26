let i = 0;
// setTimeout(function(){
// 	console.log('I have waited for 3 seconds & do once');
// }, 3000);
 

var interval = setInterval(function(){
	i++;
	// console.log('I have waited for 2 seconds & do again and again ' + i);
	if (i==5) {
		clearInterval(interval);
	} else {
		console.log(`I have waited for 2 seconds & do again and again ${i}`);
	}
},2000);
