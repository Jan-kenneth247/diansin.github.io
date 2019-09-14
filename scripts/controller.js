var btnConnect = document.getElementById("btn-connect");
var btnPublish = document.getElementById("btn-publish");
var btnDisconnect = document.getElementById("btn-disconnect");
var btnSubscribe = document.getElementById("btn-subscribe");
var client;


// console.log(client)

btnConnect.addEventListener('click', function(e) {
    e.preventDefault();
    var connected = document.getElementById("connect").value;
    var stat = document.getElementById("status").value;
    if (connected == "") {
        console.log("please add a broker")
    }
    if (connected == "wss://test.mosquitto.org:8081/mqtt") {
        console.log("connect button clicked..")
        client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
        client.on("connect", function() {
            console.log("Successfully connected");
        })
    }



    btnPublish.addEventListener('click', function(e) {
        e.preventDefault();
        var topic = document.getElementById("topic").value;
        var payload = document.getElementById("payload").value;

        console.log("Publish button Clicked.. ")
        client.publish(topic, payload)


    })
    btnSubscribe.addEventListener('click', function(e) {
        e.preventDefault();
        var top = document.getElementById("top").value;
        console.log("Subscribed button Clicked.." + top)
        client.subscribe(top)

        client.on("message", function(topic, payload) {
            console.log("message : " + topic + " : " + payload)
        })




    })

    btnDisconnect.addEventListener('click', function(e) {
        client.end()
        console.log("Successfully disconnected");


    })

})




// // basic functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo")

// client.on("connect", function() {
//     console.log("Successfully connected");
// })

// client.on("message", function(topic, payload) {
//     console.log([topic, payload].join(": "));
//     client.end();
// })

// client.publish("mqtt/demo", "hello world!")

// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })