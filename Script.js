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
		$(".trash").click(function (h) {
			$ (".entry") .hide();
			console.log("hello world");
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