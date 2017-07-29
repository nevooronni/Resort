//custom js

$(document).ready(function() {
	$("#button").click(function(event) {
		var inputOne = $("input#name").val();
		var inputTwo = $("input#email").val();

		$("span#input1").text(inputOne);
		$("span#input2").text(inputTwo);

		$("#subscribe").hide();

		$("#output").show();
		event.preventDefault();
	});
});