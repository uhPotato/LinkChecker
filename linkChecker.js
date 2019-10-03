javascript:(function(){
	var linkChecker = {
		isValidLink: function(l){
			return l.getAttribute('class') != null || l.className.match('ac-gf-directory-column-section-link') != null;
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
			processedLinks[link.href] = true;
		
			if(linkChecker.isValidLink(link)){
				
				var href = link.getAttribute('href');
				var title = link.getAttribute('title');
                tbl += '<tr><td><a href="' + link + '">' + title + '</a></td></tr>';
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