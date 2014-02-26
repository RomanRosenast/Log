	function getTaskProperties(node) {
		var data = {};
		data.name = $(node).children(".nameHere").innerHtml;
		data.date = $(node).children(".dateHere").innerHtml;
		data.class = $(node).children(".classhere").innerHtml;
		console.log($(node).children(".nameHere"));
		//console.log($(node).children(".nameHere").innerHtml);
		return data;	}

	function getAllTasks() {
		var tasks = [];
		$(".entry") .each(function (i, e) {
			getTaskProperties(e);
		})
		for (var i; i<tasks.length; i++) {
			console.log(tasks[i]);
		}
	}

	window.onload = function () {
		jQuery("#button").click(function (e) {
			var element = jQuery("#entryTemplate").clone().appendTo("#entryList").show();
			element.children (".classHere") .html (
			$ ("#classTextBox") .val() );
			$ ("#classTextBox") .val("");
			element.children (".nameHere") .html (
			$ ("#nameTextBox") .val() );
			$ ("#nameTextBox") .val("");
			element.children (".dateHere") .html ("Due: " +
			$ ("#dateTextBox") .val() );
			$ ("#dateTextBox") .val("");
			$ (".editEntry") .hide();
			$ ("#plusButton") .show();
		});
		$ ("#plusButton") .click(function (f) {
			$ ("#plusButton") .hide();
			$ ("#editEntry") .show();
		});
		$("#cancelButton") .click (function (g) {
			$ ("#editEntry") .hide();
			$ ("#plusButton") .show();
			});

		$(".trashButton") .click(function () {
			console.log ("hello")
			// $(".entry").hide;
			// h.parent() .hide();
		});

// var pressTimer

// $(".deleteEntry").mouseup(function(){
//   clearTimeout(pressTimer)
//   // Clear timeout
//   return false;
// }).mousedown(function(){
//   // Set timeout
//   pressTimer = window.setTimeout(function() { ... your code ...},1000)
//   return false; 
// });

		}

if (window.localStorage) { // checks if browser support localStorage
  if (localStorage['testKey']) { // checks if value exists
    console.log('Value exist on page load in localstorage for key testKey : ', localStorage['testKey']);
  }
  localStorage['testKey'] = 'Hi again!'; // stores value in localstorage
}
else {
 console.log('your browser dont support localstorage');
}