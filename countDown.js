_time = 10;
var countDown = setInterval(function(){
    _time--;
    console.log('time:', _time);
    if (_time ===0){
        console.log('ring ring ring');
        clearInterval(countDown);
    }
}, 1000);