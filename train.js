var vineelsTrain = "Mandava Express";
        var myDestination = "Home";
        var myFirstTrain = "12:30";
        var myFrequency = 1;
        var myNextArrival = 19;
        var config = {
            apiKey: "AIzaSyD5P8z-PKSEPDJaLaBcO1DGcYsdbwhPlOc",
            authDomain: "trainapp-d7408.firebaseapp.com",
            databaseURL: "https://trainapp-d7408.firebaseio.com",
            projectId: "trainapp-d7408",
            storageBucket: "trainapp-d7408.appspot.com",
            messagingSenderId: "606672476455"
        };
        firebase.initializeApp(config);
        firebase.database().ref().on("child_added",function(snapshot){
                var train = (snapshot.val());
                vineelsTrain = train.newTrain.trainName;
                myDestination = train.newTrain.destination;
                myFrequency = train.newTrain.frequency;
                myFirstTrain = train.newTrain.firstTrainTime;

                var remainder = moment().diff(moment.unix(myFirstTrain),"minutes")%myFrequency;
                var minutes = myFrequency - remainder;

                myNextArrival = moment().add(minutes, "m").format("hh:mm A");
                $("#traintable").append("<tr><td>" + vineelsTrain + "</td>  <td>" + myDestination+ "</td> <td>" + myFrequency + "</td> <td>" + myNextArrival + "</td> <td> " + minutes + "</td> </tr>");
                
                console.log(remainder);
                console.log(minutes);
                console.log(myNextArrival);
            });
        
        function addNewTrain(){
            event.preventDefault();
            var newTrain = {
                trainName: $("#TrainName").val(),
                destination: $("#Destination").val(),
                firstTrainTime: moment($("#FirstTrainTime").val(), "HH:mm").subtract(10, "years").format("X"),
                frequency: $("#Frequency").val()
            }
            
            firebase.database().ref().push({
                newTrain
            });
            
        }