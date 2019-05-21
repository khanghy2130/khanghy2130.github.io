var currentSection = {"index": 0, "color": null, "expandedProject": null};
var listOf$Sections = [];

var inputAllow = {
	"changeSection": true,
};

function selectSection(index){
	if (inputAllow["changeSection"] && index >= 0 && index < globalData["sections-list"].length){
		currentSection["index"] = index;
		var newColorIndex = 0;
		do {newColorIndex = Math.floor(Math.random() * globalData["section-colors"].length);}
		while (currentSection["color"] === globalData["section-colors"][newColorIndex]);
		
		currentSection["color"] = globalData["section-colors"][newColorIndex];
		inputAllow["changeSection"] = false;
		var sectionObject = globalData["sections-list"][index];

		//set color class ////////////////
		$("#nav-container").css("background-color", currentSection["color"]);
		$(".project-button").css("background-color", currentSection["color"]);
		
		// set description
		$("#projects-section-description").html(sectionObject["section-description"]).hide().slideDown(400);
		// set title
		$("#section-title").text(sectionObject["section-name"]).hide().fadeIn(400, function(){inputAllow["changeSection"] = true;});

		// hide all then show the selected section
		for (var i=0; i < listOf$Sections.length; i++){
			if (index === i) {
				listOf$Sections[i].fadeIn(400 ,"linear");
			}
			else {listOf$Sections[i].hide();}
		}

		// update the nav buttons
		$("#nav-left").removeClass("disabled-nav");
		$("#nav-right").removeClass("disabled-nav");
		if (index === 0) {$("#nav-left").addClass("disabled-nav");}
		if (index >= globalData["sections-list"].length - 1) {$("#nav-right").addClass("disabled-nav");}
	}
}

// one time load
$(document).ready(function(){
	$(this).scrollTop(0);

	// (#projects-section-container)
	for (var sectionIndex=0; sectionIndex < globalData["sections-list"].length; sectionIndex++)
	{
		var projectsList = globalData["sections-list"][sectionIndex]["projects"];
		var $sectionDiv = $("<div>", {id: sectionIndex, "class": "projects-section"});
		for (var i = 0; i < projectsList.length; i++)
		{
			var $projectDiv = $("<div>", {id: projectsList[i]["name"], "class": "project"});

			var $title = $("<h5>", {"class": "project-title"});
			$title.text(projectsList[i]["name"]); // set title text

			var $desc = $("<p>", {"class": "project-description"});
			$desc.html(projectsList[i]["description"]); // set description HTML

			var $image = $("<img>", {"class": "project-image", "src": projectsList[i]["image"]});

			var $button = $(projectsList[i]["button"]);
			$button.addClass("project-button").attr("target", "_blank");

			var $buttonHover = $("<div>", {"class": "button-hover-animate"});

			var $spaceDiv = $("<div>", {"class": "button-space"}); // layout for button
			
			$projectDiv.append([$title, $desc, $image, $button, $buttonHover, $spaceDiv]); // append all the inner contents
			$projectDiv.appendTo($sectionDiv); // add the project into the section

			// last project border radius
			if (i === projectsList.length - 1) {
				$projectDiv.css("border-radius", "0px 0px 40px 40px");
			}
		}
		$sectionDiv.appendTo("#projects-section-container").hide();
		listOf$Sections.push($sectionDiv);
	}

	// (#nav-container)
	selectSection(0);
});


// events
$("#nav-left").on("click", function(){
	selectSection(currentSection["index"] - 1);
});
$("#nav-right").on("click", function(){
	selectSection(currentSection["index"] + 1);
});
// TOP PROJECT ONLY CLICKABLE WHEN ALLOW TO CHANGE SECTION


// auto typed text
var welcomeText = {"text": "", "index": 0, "writing": true, "delayCount": 5};
var welTexts = globalData["welcome-texts"];
var updateAutoTypedText = setInterval(function(){
	if (welcomeText["delayCount"] > 0){
		welcomeText["delayCount"]--;
	}
	else {
		if (welcomeText["writing"]){
			// if there are still characters to be added
			if (welcomeText["text"].length < welTexts[welcomeText["index"]].length)
			{
				welcomeText["text"] += welTexts[welcomeText["index"]].charAt(welcomeText["text"].length);
			}
			else {
				welcomeText["writing"] = false;
				welcomeText["delayCount"] = 25; // read time
			}
		}
		// deleting
		else {
			// if there are still characters to be deleted
			if (welcomeText["text"].length > 0)
			{
				welcomeText["text"] = welcomeText["text"].slice(0, -1);
			}
			else {
				welcomeText["writing"] = true;
				welcomeText["delayCount"] = 10; // wait for next text time
				welcomeText["index"]++;
				if (welcomeText["index"] >= welTexts.length){welcomeText["index"] = 0;}
			}
		}
	}

	$("#welcome-text").text(welcomeText["text"]);
}, 100);

// gear animation, clear this if gear is not visible
var gearAnimation = setInterval(function(){ 
	$("#gear-left")
		.css("transform", "rotate(" + window.scrollY/10 + "deg)")
		.css("top", (400 + window.scrollY * 0.85) + "px");
	$("#gear-right")
		.css("transform", "rotate(" + -window.scrollY/10 + "deg)")
		.css("top", (700 + window.scrollY * 0.6) + "px");
}, 10);
if ($(window).width() < 1000) { clearInterval(gearAnimation); }




