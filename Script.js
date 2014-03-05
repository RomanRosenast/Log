	function getTaskProperties(node) {
		var data = {};
		data.name = $(node).children(".nameHere").html();
		data.date = $(node).children(".dateHere").html();
		data.class = $(node).children(".classHere").html();
		//console.log($(node).children(".nameHere").innerHtml);
		return data;	}

	function getAllTasks() {
		var tasks = {};
		$(".entry") .each(function (i, e) {
			if ( getTaskProperties(e).name
				&& getTaskProperties(e).date
				&& getTaskProperties(e).class) {
				tasks.push(getTaskProperties(e));
			}
		})
			console.log(tasks);
	}

	window.onload = function () {
	    // if (window.localStorage) {
	    //     if (localStorage["tasks"]) {
	    //        console.log(localStorage["tasks"]);
	    //         var tasks = JSON.parse(localStorage["tasks"]);
	    //         for (var i = 0; i < tasks.length; i++) {
	    //             var taskz = tasks[i];
	    //             var element = jQuery("#entryTemplate").clone().appendTo("#entryList").show();
	    //             element.children(".classHere").html(
	    //             taskz.class);
	    //             element.children(".nameHere").html(
	    //             taskz.name);
	    //             element.children(".dateHere").html(
	    //             taskz.date);
	    //         }
	    //     }
	    // }
	    jQuery("#button").click(function (e) {
	        var element = jQuery("#entryTemplate").clone().appendTo("#entryList").show();
	        element.children(".classHere").html(
	        $("#classTextBox").val());
	        $("#classTextBox").val("");
	        element.children(".nameHere").html(
	        $("#nameTextBox").val());
	        $("#nameTextBox").val("");
	        element.children(".dateHere").html("Due: " + $("#dateTextBox").val());
	        $("#dateTextBox").val("");
	        $(".editEntry").hide();
	        $("#plusButton").show();
	        // if (window.localStorage) {
	        //     console.log("saving");
	        //     localStorage["tasks"] = JSON.stringify(getAllTasks());
	        //     console.log(JSON.stringify(getAllTasks()));
	        // }
	        			console.log($("div.trashButton"));
		  $("div.trashButton").click(function() {
		    console.log("This button works!");
		    $(this).parent().hide();
		    return false;
		  });
	    });
	    $("#plusButton").click(function (f) {
	        $("#plusButton").hide();
	        $("#editEntry").show();
	    });
	    $("#cancelButton").click(function (g) {
	        $("#editEntry").hide();
	        $("#plusButton").show();
	    });

	    // $(".trashButton") .click(function () {
	    // 	console.log ("hello")
	    // 	// $(".entry").hide;
	    // 	// h.parent() .hide();
	    // });

	}

	// $(document).ready
			console.log($("div.trashButton"));
		  $("div.trashButton").click(function() {
		    $(this).parent().hide();
		    return false;
		  });


	    // $(".trashButton").click(function () {
	    //     $(".trashButton").parent().hide();
	    //     console.log("hello");
	    // })


// if (window.localStorage) { // checks if browser support localStorage
//   if (localStorage['testKey']) { // checks if value exists
//     console.log('Value exist on page load in localstorage for key testKey : ', localStorage['testKey']);
//   }
//   localStorage['testKey'] = 'Hi again!'; // stores value in localstorage
// }
// else {
//  console.log('your browser dont support localstorage');
// }
