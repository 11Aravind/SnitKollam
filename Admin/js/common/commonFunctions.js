let commonFunctions=(msg)=>{
    $("#responseMsg").text(msg);
    setTimeout(()=>{
        $("#responseMsg").text("");        
    },3000);
}