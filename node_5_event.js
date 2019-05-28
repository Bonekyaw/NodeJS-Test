var event = require('events');

var eventEmitterListener = new event.EventEmitter();

eventEmitterListener.on('HiEvent', function (val) {
	console.log(`I catch event, ha ha ... ${val}`);
})

var i = 0;
var inter = setInterval(function(){
	i++;
	if (i == 10) {
		clearInterval(inter)
	}

	if ((i%3) == 0) {
		eventEmitterListener.emit('HiEvent','Bone Kyaw');
	} else {
		console.log('Waiting event ...');
	}
}, 2000);