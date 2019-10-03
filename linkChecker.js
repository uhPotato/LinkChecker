javascript:(function(){
	var linkChecker = {
		isChapterNavLink: function(l){
			return l.getAttribute('class') != null || l.parentNode.className.match('chapternav') != null;
		},
		isAnalyticsRegion: function(l){
			return l.parentNode.className.match('data-analytics-region') != null;
		},
		isAnalyticsTitle: function(l){
			return l.getAttribute('data-analytics-title') != null;
		},
		isOtherSOmething: function(l){
			
		}
	};
	
	var processedLinks = {};

	var links = document.links;
	var docTitle = document.title;
	var header = document.createElement('h2');
	var par = document.createElement('p');
	var tblContainer = document.createElement('div');
		
	var tbl = '<table style="font-size: 16px; line-height:20px;">';
	tbl += '<thead style="font-weight:bold;"><tr><td>Referenced Articles</td></tr></thead><tbody>';

    
	for(var i = 0; i < links.length; i++){
		var link = links[i];
		if(typeof processedLinks[link.href] === 'undefined'){
			processedLinks[link.href] = true;
		
			if(linkChecker.isChapterNavLink(link)){
				
				var href = link.getAttribute('href');
				var title = link.getAttribute('title');
                tbl += '<tr><td><a href="' + href + '">' + title + '</a></td></tr>';
                console.log(link);
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