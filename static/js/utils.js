APIGatewayId      = "prmqu29tej";
RegionName        = "us-east-1";
USER_API_URL  = "https://"+APIGatewayId+".execute-api."+RegionName+".amazonaws.com/Dev/rddb"

function ProcessTimeout() {
  console.log("Query to API Gateway timed out");
 }

function getbalance() {
    var accessToken = tokens.id_token;
    var API_URL = USER_API_URL;
    var API_Client = new XMLHttpRequest();
    API_Client.onreadystatechange = function() {
     if (API_Client.readyState == XMLHttpRequest.DONE) {
      Result = API_Client.responseText;
      console.log(Result);
      document.getElementById("getbalance").innerHTML = Result;
     }
    }
  
    API_Client.open("get", API_URL);
    //API_Client.withCredentials = true;
    API_Client.setRequestHeader("Content-Type", "application/json");
    //API_Client.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
    //API_Client.setRequestHeader("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
    //API_Client.setRequestHeader("Access-Control-Allow-Origin", "*");
    API_Client.setRequestHeader("Authorization", accessToken);
    API_Client.timeout = 10000;
    API_Client.ontimeout = ProcessTimeout;
    API_Client.send();
  }