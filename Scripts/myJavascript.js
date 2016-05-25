var helloConsole = function(){
	$("#button").click(function(){
		$("h2").toggle();
	});
var button = document.getElementById('button').innerHTML = "You clicked it! I dare you to keep pressing the button!";
  console.log('button clicked');
}
