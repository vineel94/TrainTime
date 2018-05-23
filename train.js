var config = {
    apiKey: "AIzaSyD5P8z-PKSEPDJaLaBcO1DGcYsdbwhPlOc",
    authDomain: "trainapp-d7408.firebaseapp.com",
    databaseURL: "https://trainapp-d7408.firebaseio.com",
    projectId: "trainapp-d7408",
    storageBucket: "trainapp-d7408.appspot.com",
    messagingSenderId: "606672476455"
  };
  firebase.initializeApp(config);

  function addNewTrain(){
      console.log("dwfwefwf");
      var newTrain = {
          trainName = $("#Train Name").val(),
          destination = $("#Train Name").val(),
          firstTrainTime = $("#Train Name").val(),
          frequency = $("#Train Name").val()
      }

      firebase.database().push(newTrain);
      var i = "dwfwf";
      firebase.database.push(i);
  }

