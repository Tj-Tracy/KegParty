
/* Global Variables */

var canvas = document.getElementById('canvas');
console.log(canvas.width); // 300
var canvasHeight = canvas.height;
var canvasWidth = canvas.width;

var username;
var password;

var loginGroup= new Group();
var searchGroup = new Group();
var helpGroup= new Group();

var loginClicked = false;
var helpClicked = false;
var searchClicked = false;

var helpGroupChildren = new Group();
/*Defines */
startRadius= canvasWidth / 18;




$( document ).ready(function() {
    console.log( "ready!" );
	$('#login').hide();
	$('#search').hide();
	main();
});


function main(){
	
	drawLogin();
	drawHelp();
	drawSearch();
	setUpLoginGroup();
	setUpSearchGroup();
	setUpHelpGroup();
	console.log(loginGroup);
	//lol();


	
}

function drawLogin(){
	
	drawOutline(new Point(canvasWidth / 2, canvasHeight / 2),loginGroup);
	drawEdges(new Point(canvasWidth / 2, canvasHeight / 2),loginGroup);
	var loginBubble = new Path.Circle({
	center: view.center,
	radius: startRadius,
	fillColor: 'white',
	strokeWidth: 1,
	strokeColor: 'black'
	});
	loginBubble.position = new Point(canvasWidth / 2, canvasHeight / 2);
	loginGroup.addChild(loginBubble);
	
	drawLogoArc(new Point(canvasWidth / 2, canvasHeight / 2), loginGroup);
	drawLogoName(new Point(canvasWidth / 2, canvasHeight / 2 + canvasHeight / 100), loginGroup, "Login");
	//createLoginForms();
	
}

function drawHelp(){

	drawOutline(new Point(canvasWidth / 2  - canvasWidth / 5, canvasHeight / 2),helpGroup);
	drawEdges(new Point(canvasWidth / 2  - canvasWidth / 5, canvasHeight / 2), helpGroup);	
	var helpBubble = new Path.Circle({
	center: view.center,
	radius: startRadius,
	fillColor: 'white',
	strokeWidth: 1,
	strokeColor: 'black'
	});
	
	helpBubble.position = new Point(canvasWidth / 2  - canvasWidth / 5, canvasHeight / 2);
	helpGroup.addChild(helpBubble);
	drawLogoArc(new Point(canvasWidth / 2  - canvasWidth / 5, canvasHeight / 2), helpGroup);
	drawLogoName(new Point(canvasWidth / 2  - canvasWidth / 5, canvasHeight / 2 + canvasHeight / 100),helpGroup,"How I Feel");
}

function drawSearch(){

	drawOutline(new Point(canvasWidth / 2  + canvasWidth / 5, canvasHeight / 2),searchGroup);
	drawEdges( new Point(canvasWidth / 2 + canvasWidth / 5, canvasHeight / 2),searchGroup);
	var searchBubble = new Path.Circle({
	center: view.center,
	radius: startRadius,
	fillColor: 'white',
	strokeWidth: 1,
	strokeColor: 'black'
	});
	searchBubble.position = new Point(canvasWidth / 2 + canvasWidth / 5, canvasHeight / 2);
	searchGroup.addChild(searchBubble);
	drawLogoArc(new Point(canvasWidth / 2  + canvasWidth / 5, canvasHeight / 2), searchGroup);
	drawLogoName(new Point(canvasWidth / 2  + canvasWidth / 5, canvasHeight / 2 + canvasHeight / 100),searchGroup, "Search");
}

function drawEdges(center, group){

	var radius = startRadius;
	var x;
	var y;

	for(counter=0; counter <= 360; counter += 17.14){
		var edgeCircle = new Path.Circle({
			center: view.center,
			radius: (startRadius) * .16,
			fillColor: 'white',
			strokeWidth: 2,
			strokeColor: 'black'
		});
	x = center.x + radius * Math.cos(counter * Math.PI / 180);
	//console.log(loginBubble.position.x + " and new x" + x);
	y = center.y + radius * Math.sin(counter * Math.PI / 180);
	//console.log(loginBubble.position.y + "and new y" + y);
	edgeCircle.position = new Point(x, y);
	group.addChild(edgeCircle);
	}
}

function drawLogoArc(center, group){
	var Radius = startRadius;
	var x;
	var y;

	
	var logoArc = new Path.Circle({
	center: view.center,
	radius: Radius * .87,
	fillColor: 'purple'
	
	});
	logoArc.position = center;

	console.log(center.x + 'x');
	console.log(center.y + 'y');


	var logoRect = new Path.Rectangle(center.x - Radius * .88, center.y - Radius * .3, Radius * 1.76,  Radius * .6);

	console.log(center.x + Radius * 85 + 'x');
	console.log( center.y + Radius * .2 +'y');
	logoRect.fillColor = 'white';
	logoRect.rotate	(-12);
	group.addChild(logoArc);
	group.addChild(logoRect);
	
}
function drawLogoName(center, group, name){
	var text = new PointText(center);
	text.justification = 'center';
	text.fillColor = 'black';

	text.style = {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: 30,
    fillColor: 'black',
    justification: 'center'
	};
	text.content = name;
	text.rotate(-12);
	group.addChild(text);
	
}
function drawOutline(center,group){

	var outline = new Path.Circle({
	center: view.center,
	radius: startRadius * 1.095,
	fillColor: 'white',
	strokeWidth: 3,
	strokeColor: 'black'
	});
	outline.position = center;
	group.addChild(outline);
}
function setUpLoginGroup(){
	loginGroup.onClick = function(event){
		$('#search').hide();
		if(!loginClicked){
			/* Enlarge loginGroup */
			this.animate({
      			properties: {
          			scale:3,
					rotate: 12,
					position: { x: canvasWidth/2, y: canvasHeight/2}
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/*Move helpGroup */	  
			helpGroup.animate({
      			properties: {
          			position: { x: canvasWidth/ 6, y: canvasHeight - canvasHeight/ 4},
					scale: 1,
					rotate: 0
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/* move searchGroup */
			searchGroup.animate({
      			properties: {
          			position: { x: canvasWidth- canvasWidth/6, y: canvasHeight - canvasHeight/ 4},
					scale: 1,
					rotate: 0
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			
			loginGroup.children[26].visible = false;
			searchGroup.children[26].visible = true; 
			$('#login').show();
			loginClicked = true;
			helpClicked = false;
			searchClicked = false;


		}
		else {
			this.animate({
      			properties: {
          			scale:1,
					rotate: 0,
					position: { x: canvasWidth/2, y: canvasHeight/2}
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/*Move helpGroup */
			$('#login').hide();	  
			helpGroup.animate({
      			properties: {
          			position: { x: canvasWidth / 2  - canvasWidth / 5,  y: canvasHeight / 2},
					scale: 1
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/* move searchGroup */
			searchGroup.animate({
      			properties: {
          			position: {  x: canvasWidth / 2  + canvasWidth / 5,  y: canvasHeight / 2},
					scale: 1
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
				  loginClicked = false;
				  loginGroup.children[26].visible = true;
				  searchGroup.children[26].visible = true;
				  
		}

		
	
		
	}
} 

function setUpSearchGroup(){
	searchGroup.onClick = function(event){
		$('#login').hide();
		if(!searchClicked){
			/* Enlarge loginGroup */
			
			this.animate({
      			properties: {
          			scale:3,
					rotate: 12,
					position: { x: canvasWidth/ 2, y: canvasHeight / 2}
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/*Move helpGroup */	  
			helpGroup.animate({
      			properties: {
          			position: { x: canvasWidth/ 6, y: canvasHeight - canvasHeight/ 4},
					scale: 1,
					rotate: 0
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/* move searchGroup */
			loginGroup.animate({
      			properties: {
          			position: { x: canvasWidth- canvasWidth/6, y: canvasHeight - canvasHeight/ 4},
					scale: 1,
					rotate: 0
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			searchGroup.children[26].visible = false;
			$('#search').show();
			loginGroup.children[26].visible = true;

			



			loginClicked = false;
			helpClicked = false;
			searchClicked = true;
		}
		else {
			loginGroup.animate({
      			properties: {
          			scale:1,
					rotate: 0,
					position: { x: canvasWidth/2, y: canvasHeight/2}
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/*Move helpGroup */	  
			helpGroup.animate({
      			properties: {
          			position: { x: canvasWidth / 2  - canvasWidth / 5,  y: canvasHeight / 2},
					scale: 1
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/* move searchGroup */
			searchGroup.animate({
      			properties: {
          			position: {  x: canvasWidth / 2  + canvasWidth / 5,  y: canvasHeight / 2},
					scale: 1,
					rotate: 0
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
				  $('#search').hide();
				  searchClicked = false;
				  loginGroup.children[26].visible = true;
				  
				  searchGroup.children[26].visible = true;
		}

		
	
		
	}
}
function setUpHelpGroup(){
	helpGroup.onClick = function(event){
		$('#login').hide();
		$('#search').hide();
		if(!helpClicked){
			/* Enlarge loginGroup */
			
			this.animate({
      			properties: {
          			scale:1,
					rotate: 12,
					position: { x: canvasWidth/ 8, y: canvasHeight / 5}
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/*Move helpGroup */	  
			loginGroup.animate({
      			properties: {
          			position: { x: canvasWidth/ 8, y: canvasHeight - canvasHeight/ 4},
					scale: 1,
					rotate: 12
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/* move searchGroup */
			searchGroup.animate({
      			properties: {
          			position: { x: canvasWidth- canvasWidth/6, y: canvasHeight - canvasHeight/ 4},
					scale: 1,
					rotate: 12
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			searchGroup.children[26].visible = true;
			loginGroup.children[26].visible = true;

			drawHelpGroupChildren();
			



			loginClicked = false;
			helpClicked = false;
			searchClicked = true;
		}
		else {
			loginGroup.animate({
      			properties: {
          			scale:1,
					rotate: 0,
					position: { x: canvasWidth/2, y: canvasHeight/2}
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/*Move helpGroup */	  
			helpGroup.animate({
      			properties: {
          			position: { x: canvasWidth / 2  - canvasWidth / 5,  y: canvasHeight / 2},
					scale: 1
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
			/* move searchGroup */
			searchGroup.animate({
      			properties: {
          			position: {  x: canvasWidth / 2  + canvasWidth / 5,  y: canvasHeight / 2},
					scale: 1,
					rotate: 0
					
      			},
      			settings: {
          			duration: 500,
          			easing: "swing"
      			}});
				  $('#search').hide();
				  searchClicked = false;
				  loginGroup.children[26].visible = true;
				  
				  searchGroup.children[26].visible = true;
		}

		
	
		
	}
}
function drawHelpGroupChildren(){
	var start_x =  2 * canvasWidth/ 8;
	var start_y =  canvasHeight / 20;
	var offset_x = canvasWidth / 10;
	var offset_y = canvasHeight / 5;
	var count_x;
	var count_y;

	for(count_x = 0; count_x < (6 * offset_x); count_x += 1.66 * offset_x){
		for(count_y = offset_y; count_y <= (3* offset_y); count_y += offset_y){
			var bubble = new Path.Circle({
				center: view.center,
				radius: startRadius * .66,
				fillColor: 'red',
				strokeWidth: 1,
				strokeColor: 'black'
			});
			bubble.position= new Point(start_x + count_x, start_y + count_y);
		}
	}
}
function cleanUpHelpGroupChildren(){

}