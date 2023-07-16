// a section: contains all projects made by a specific technology
/*
	// SECTION NAME
	{
		"section-name": "",
		"section-description":"",
		"projects": [],
	},
*/

// access a project: globalData -> sections-list -> item section -> projects -> item project
// a project: single button contains html text, will be auto set class to button and target to _blank
/*
	// project 1
	{
		"name": "",
		"description": "",
		"image": "",
		"button": "",
	},
*/

// project images are 400px by 400px


var globalData = {
	"welcome-texts": [
		"Welcome to my portfolio.", "I go by Logix Indie, a puzzle games creator.", "I love problem solving...", "as well as presenting it as a game.", 
	],

	"section-colors": [
		"rgb(94, 239, 62)", "rgb(80, 138, 252)", "rgb(164, 88, 252)", "rgb(249, 74, 231)", "rgb(242, 87, 87)", "rgb(252, 180, 37)", "rgb(228, 243, 20)", 
	],

	// list of sections -> section data
	"sections-list": [
		
		
		// PROESSING.JS
		{
			"section-name": "Processing.js",
			"section-description": "<a target=\"_blank\" href=\"http://processingjs.org/\">Processing.js</a> is a great library for creating interactive programs on canvas.",
			"projects": [
				// project 1
				{
					"name": "Wormhole",
					"description": "A line-drawing game with the presence of wormholes. It's one of my most favorite randomized puzzle games.",
					"image": "processingjs-images/wormhole.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=0\">OPEN GAME</a>",
				},
				// project 2
				{
					"name": "Picross",
					"description": "A puzzle game similar to Minesweeper, inspired by <a  target=\"_blank\" href=\"http://liouh.com/picross/\">a version of Picross</a> by Henry Liou.",
					"image": "processingjs-images/picross.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=1\">OPEN GAME</a>",
				},
				// project 3
				{
					"name": "Escaped",
					"description": "A maze game with many twists including destroying walls, limited moves, and more.",
					"image": "processingjs-images/escaped.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=2\">OPEN GAME</a>",
				},
				// project 4
				{
					"name": "Python",
					"description": "A snake game with gravity, featuring in-game Level Editor for the players. <a target=\"_blank\" href=\"https://youtu.be/EBkodFo-oWA\">Watch walkthrough video</a>.",
					"image": "processingjs-images/python.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=3\"> OPEN GAME</a>",
				},
				// project 5
				{
					"name": "Slide",
					"description": "Your goal is to restore the shuffled image by sliding the pieces, featuring multiple difficulties and images.",
					"image": "processingjs-images/slide.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=4\">OPEN GAME</a>",
				},
				// project 6
				{
					"name": "Arrows",
					"description": "An unique puzzle game that is simple yet challenging.",
					"image": "processingjs-images/arrows.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=5\">OPEN GAME</a>",
				},
				// project 7
				{
					"name": "Equalizing",
					"description": "A math-based game where you use operations to equalize both sides.",
					"image": "processingjs-images/equalizing.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=6\">OPEN GAME</a>",
				},
				// project 8
				{
					"name": "Snakes",
					"description": "A logic-based game where you learn the rule through examples. It's based on <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=org.gromozeka1980.caterpillar_logic\">Caterpillar Logic</a>.",
					"image": "processingjs-images/snakes.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=7\">OPEN GAME</a>",
				},
				// project 9
				{
					"name": "Rotatic",
					"description": "This converted project is originally made with p5.js. <a target=\"_blank\" href=\"https://github.com/khanghy2130/Rotatic\">See original project on Github</a>.",
					"image": "processingjs-images/rotatic.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=8\">OPEN</a>",
				},
				// project 10
				{
					"name": "Relink",
					"description": "I teamed up with <a target=\"_blank\" href=\"https://itch.io/profile/bigcheese73\">BigCheese73</a> for GMTK 2021 Game Jam and made this game. <a target=\"_blank\" href=\"https://logixindie.itch.io/relink\">Original version</a>",
					"image": "processingjs-images/relink.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=9\">OPEN</a>",
				},
				// project 11
				{
					"name": "Mystery Box",
					"description": "A tactics game where you can play against computer or another player.",
					"image": "processingjs-images/mysterybox.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=10\">OPEN</a>",
				},
                // project 12
				{
					"name": "Little Minigame",
					"description": "A puzzle game about sending blockers flying.",
					"image": "processingjs-images/littleminigame.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=11\">OPEN</a>",
				},
                // project 13
				{
					"name": "Negative",
					"description": "A puzzle about overlapping shapes.",
					"image": "processingjs-images/negative.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=12\">OPEN</a>",
				},
                // project 14
				{
					"name": "Lights Editor",
					"description": "A tool to create animations.",
					"image": "processingjs-images/lightseditor.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=13\">OPEN</a>",
				},
                // project 15
				{
					"name": "Warp",
					"description": "My first platformer game. Featuring frustrating difficulty and anti-gravity.",
					"image": "processingjs-images/warp.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=14\">OPEN</a>",
				},
                // project 16
				{
					"name": "Homeward",
					"description": "My first 3D game, inspired by .projekt. A team collab with 5 other members.",
					"image": "processingjs-images/homeward.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=15\">OPEN</a>",
				},
                // project 17
				{
					"name": "Fit the Pieces Together",
					"description": "Single-player version of Spread Puzzle.",
					"image": "processingjs-images/fitthepiecestogether.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=16\">OPEN</a>",
				},
			// project 18
				{
					"name": "Laser Loop",
					"description": "Procedural puzzler about making a laser loop.",
					"image": "processingjs-images/lazerloop.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=17\">OPEN</a>",
				},
			// project 19
				{
					"name": "Curvy Copter",
					"description": "A puzzler about rotating circles on tiles.",
					"image": "processingjs-images/curvycopter.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=18\">OPEN</a>",
				},
			// project 20
				{
					"name": "Num & Sum",
					"description": "A game about finding the most sums.",
					"image": "processingjs-images/numsum.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=19\">OPEN</a>",
				},
			// project 21
				{
					"name": "Regions",
					"description": "A game about building regions.",
					"image": "processingjs-images/regions.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=20\">OPEN</a>",
				},
			// project 22
				{
					"name": "Laser Loop 2",
					"description": "Sequel of Laser Loop, featuring triangular grid.",
					"image": "processingjs-images/laserloop2.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=21\">OPEN</a>",
				},
			// project 23
				{
					"name": "Laser Loop 3",
					"description": "Trequel of Laser Loop, featuring cubic surface grid.",
					"image": "processingjs-images/laserloop3.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=22\">OPEN</a>",
				},
			// project 24
				{
					"name": "Shift",
					"description": "A game about shifting hypersquares to matching patterns.",
					"image": "processingjs-images/shift.png",
					"button": "<a href=\"https://khanghy2130.github.io/processing-projects.html?game=23\">OPEN</a>",
				}
			]
		},
		
		// APP INVENTOR
		{
			"section-name": "App Inventor",
			"section-description": "App Inventor is a free, friendly tool to develop mobile apps. All of the projects were entries for <a target=\"_blank\" href=\"https://appinventor.mit.edu/explore/app-month-gallery.html\">App of the Month</a>, a monthly contest.",
			"projects": [
				// project 1
				{
					"name": "3 Steps",
					"description": "A math-based game where the solution lies within the correct order of operations. <span class=\"award\">Best Design September 2017</span>",
					"image": "appinventor-images/threesteps.png",
					"button": "<a href=\"https://play.google.com/store/apps/details?id=appinventor.ai_khanghy2130.Three\">GOOGLE PLAY LINK</a>",
				},
				// project 2
				{
					"name": "Simple Rubik",
					"description": "The game was taken down along with many other apps for mentioning the Rubik's Cube. <span class=\"award\">Best Design December 2017</span>",
					"image": "appinventor-images/simplerubik.png",
					"button": "<a href=\"https://youtu.be/HroUqUP0AxU\">WATCH GAMEPLAY</a>",
				},
				// project 3
				{
					"name": "Sum 4x4",
					"description": "A math-puzzle game where you connect numbers that make the target sum. <span class=\"award\">Best Design February 2018</span>",
					"image": "appinventor-images/sum4x4.png",
					"button": "<a href=\"https://play.google.com/store/apps/details?id=appinventor.ai_khanghy2130.Sum4x4\">GOOGLE PLAY LINK</a>",
				},
				// project 4
				{
					"name": "One-line: Hexagon",
					"description": "A line-drawing game on hexagonal grid where you must satisfy all numbers. <span class=\"award\">Most Creative April 2018</span>",
					"image": "appinventor-images/hex.png",
					"button": "<a href=\"https://play.google.com/store/apps/details?id=appinventor.ai_khanghy2130.Hexa2\">GOOGLE PLAY LINK</a>",
				},
				// project 5
				{
					"name": "8th Power",
					"description": "A 2048 clone, but with abilities and customizable number sets. <span class=\"award\">Most Innovative July 2018</span>",
					"image": "appinventor-images/eighthpower.png",
					"button": "<a href=\"https://play.google.com/store/apps/details?id=appinventor.ai_khanghy2130.power\">GOOGLE PLAY LINK</a>",
				},
			],
		},

        // UNITY
		{
			"section-name": "Unity",
			"section-description": "<a target=\"_blank\" href=\"https://unity3d.com/\">Unity</a> is a powerful game engine that uses C# as the scripting language.",
			"projects": [
				// project 1
				{
					"name": "Arrows Puzzle",
					"description": "A mobile version of Arrows, featuring balanced progression and polished graphic.",
					"image": "unity-images/arrowspuzzle.png",
					"button": "<a href=\"https://play.google.com/store/apps/details?id=com.LogixIndie.arrowspuzzle\">GOOGLE PLAY LINK</a>",
				}
			],
		},

		// APP LAB
		{
			"section-name": "App Lab",
			"section-description": "<a target=\"_blank\" href=\"https://code.org/educate/applab\">App Lab</a> is simple app development environment where you code in JavaScript with either blocks or text.",
			"projects": [
				// project 1
				{
					"name": "Flappy Red",
					"description": "A Flappy Bird clone that can be manually played or auto played by a simple AI.",
					"image": "applab-images/flappyred.png",
					"button": "<a href=\"https://studio.code.org/projects/applab/7eJifHsRhnRy0ypmh5f92taJfPFRLshlQQLBc5uFI-A\">OPEN GAME</a>",
				}
			],
		}
	]
};
