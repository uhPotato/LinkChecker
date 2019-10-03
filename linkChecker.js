javascript:(function(){
	var linkChecker = {
		isValidLink: function(l){
			return l.getAttribute('data-analytics-region') != null && l.getAttribute('data-analytics-title') != null;
		}
		// isOtherSOmething: function(l){
		// 	//extra code for other functions.
		// }
	};
	
	var processedLinks = {};

	var links = document.links;
	var docTitle = document.title;
	var header = document.createElement('h2');
	var par = document.createElement('p');
	var tblContainer = document.createElement('div');
		
	var tbl = '<table style="font-size: 16px; line-height:20px;">';
	tbl += '<thead style="font-weight:bold;"><tr><td>Link List</td></tr></thead><tbody>';

    
	for(var i = 0; i < links.length; i++){
		var link = links[i];
		if(typeof processedLinks[link.href] === 'undefined'){
			processedLinks[link.href] = false;
		
			if(linkChecker.isValidLink(link)){
				
				var href = link.getAttribute('href');
				var analytics = link.getAttribute('data-analytics-region');
				var analyticsTitle = link.getAttribute('data-analytics-title');
                tbl += '<tr><td><a href="' + href + '">' + href + '</a><p>Analytics Title: ' + analyticsTitle + ' and Analytics Region: ' + analytics + ' </p></td></tr>';
                console.log(link.href);
			}
		}
	}
	
	tbl += '</tbody></table>';



		
	header.innerHTML = docTitle;
	par.innerHTML = "Hello";
	tblContainer.innerHTML = tbl;
	document.body.innerHTML = '';
	document.body.appendChild(header);
	document.body.appendChild(par);
	document.body.appendChild(tblContainer);
	document.title = docTitle;

}());