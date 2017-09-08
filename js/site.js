$(document).ready(function () {
    app.SetupWorker();
});


window.setInterval(function () {
    app.viewmodel.IsOnline(app.IsWebWorkerAvailable());
}, 1000);



var app = {};
app.IsOnline = false;
app.IsWebWorkerAvailable = function () {
    app.IsOnline = (typeof (Worker) !== "undefined");
    return app.IsOnline;
};

app.SetupWorker = function () {
    if (app.IsWebWorkerAvailable()) {
        //app.Worker = new Worker("webworker.js");
    }
}