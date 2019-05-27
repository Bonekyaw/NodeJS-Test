var event = require('events');

var eventEmitterListener = new event.EventEmitter();

eventEmitterListener.on('HiEvent', function () {
	console.log('I catch event, ha ha ...');
})

var i = 0;
var inter = setInterval(function(){
	i++;
	if (i == 10) {
		clearInterval(inter)
	}

	if ((i%3) == 0) {
		eventEmitterListener.emit('HiEvent');
	} else {
		console.log('Waiting event ...');
	}
}, 2000);