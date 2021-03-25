var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { 
    return document.getElementById(id); 
};
// display the table with names and scores
const displayScores = function(){
    var scores_table = document.getElementById("scores_table");
    scores_table.innerHTML = '<br><br><tr><th>'+ "Name" + '</th><th>' + "Score" + '</th></tr>';
    for(var i = 0; i < names.length; i++)
    {
       scores_table.innerHTML+= '<tr><td>' + names[i] + '</td><td>' + scores[i] + '</td>';
	}
};
// add values to two arrays
const addScore = function() {
	var name = $("name").value;
	var score = $("score").value;
	score = parseInt(score);
	
/*	if (score = " "){
        alert("You must enter a name and a valid score.");
        $("score").value = " ";
        $("score").focus();
       }*/
        if (name == "" || (score < 0 || score > 100)) {
		alert("You must enter a name and a valid score.");
        $("name").value = " ";
        $("score").value = " ";
		$("name").focus();
       }
		else {
		names[names.length] = name;
		scores[scores.length] = score;
	   }
};
// display average and high score
	const displayResults = function(){
		var total = 0;
		var average = 0.0;
		var highScore = scores[0];
		for (var i = 0; i < scores.length; i++ ){
			total = total + scores[i];
		}
		for (var j = 1; j < scores.length; j++){
			if (scores[j]> highScore)
			highScore = scores[j];
		}
		average = total/scores.length;
		var addNewElements = document.getElementById("results");
		addNewElements.innerHTML = '<h2>'+ "Results" + '</h2><p>' + "Average =  " + average.toFixed(2);
		addNewElements.innerHTML += '\n';
		addNewElements.innerHTML += "High Score =  " + highScore + '</p>';
	};



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
    $("name").focus();
};


