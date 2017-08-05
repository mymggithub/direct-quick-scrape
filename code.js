$(".channel-col-name>a").each(function(index, el) {
	label = $(this).parent().attr("aria-label");

	if (label!="Help" && label!=undefined) {
		label = label.replace("Sub channels for undefined", "").trim();
			console.log("text(): "+$(this).text());
			console.log("attr('aria-label'): "+label);
			console.log(parseInt($(this).parent().siblings("div.channel-number").text().replace("#", "").trim()));
			$(this).parent().parent().find(".channel-pack-flyout").each(function(index, el) {
				console.log($(this).text());
			});
			console.log(index);
			console.log($(this)[0]);
	}	
});