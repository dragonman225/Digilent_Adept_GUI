const exec = require('child_process').exec;

function sendOutput(msg) { getOutput().innerHTML = msg; };
function setStatus(msg) { getStatus().innerHTML = msg; };

function init(){
    let init = exec('djtgcfg init -d Nexys3');
    init.stdout.on('data', (data) => {
        sendOutput('[stdout] \n' + data);
    });
    init.stderr.on('data', (data) => {
        console.log('stderr: \n' + data);
    });
    init.on('close', function (code) {
        if (code == 0)
            setStatus('child process complete.');
        else
            setStatus('child process exited with code ' + code);
        //getOutput().style.background = "DarkGray";
    });
}

function discover(){
    let discover = exec('djtgcfg enum');
    discover.stdout.on('data', (data) => {
        sendOutput('[stdout] \n' + data);
    });
    discover.stderr.on('data', (data) => {
        console.log('stderr: \n' + data);
    });
    discover.on('close', function (code) {
        if (code == 0)
            setStatus('child process complete.');
        else
            setStatus('child process exited with code ' + code);
        //getOutput().style.background = "DarkGray";
    });
}

function prog(path){
    let prog = exec('djtgcfg prog -d Nexys3 -i 0 -f ' + path);
    prog.stdout.on('data', (data) => {
        sendOutput('[stdout] \n' + data);
    });
    prog.stderr.on('data', (data) => {
        console.log('stderr: \n' + data);
    });
    prog.on('close', function (code) {
        if (code == 0)
            setStatus('child process complete.');
        else
            setStatus('child process exited with code ' + code);
        //getOutput().style.background = "DarkGray";
    });
}
