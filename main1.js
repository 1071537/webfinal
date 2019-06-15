$(document).ready(function(){
    
    $("#courseTable").append("<tr1><th></th><th>時間</th><th>隊伍</th></tr1>");
    
    var topicCount = topic.length;
    var sec = 1000;
    var min = sec * 60;
    var hr = min * 60;
    var day = hr * 24;
    
    for(var x = 0; x <topicCount; x++)
    {   
        
        $("#courseTable").append("<tr1>");
        $("#courseTable").append("<td1 background-color>" + (x+1) + "</td1>");
        $("#courseTable").append("<td1>" + 
           (new Date (startDate.getTime()+x*7*day)).toLocaleDateString().slice(5) + "</td1>");
        $("#courseTable").append("<td1>" + topic[x] + "</td1>");
        $("#courseTable").append("</tr1>");
    }
});