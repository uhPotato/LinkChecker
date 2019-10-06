javascript:(function(){
	var linkChecker = {
		isValidLink: function(l){
			return l.getAttribute('data-analytics-region') != null && l.getAttribute('data-analytics-title') != null;
		}

	};

	var links = document.links;
	var docTitle = document.title;
	var header = document.createElement('h2');
	var tblContainer = document.createElement('div');
	var tblBorder = document.createElement('style');
	var resultsWindow = window.open("", "resultsWindow", "width=200,height=100");
	
	var border = 'table, th, td { padding: 10px; border: 1px solid black; border-collapse: collapse;}';

	var tbl = '<table border="1";style="font-size: 16px; line-height:20px;">';
	tbl += '<thead style="font-weight:bold;"><tr><td>Link List</td><td>Title</td><td>Region</td><td>Aria-Label</td></tr></thead><tbody>';

    
	for(var i = 0; i < links.length; i++){
		var link = links[i];
		
			if(linkChecker.isValidLink(link)){
				
				var href = link.getAttribute('href');
				var analytics = link.getAttribute('data-analytics-region');
				var analyticsTitle = link.getAttribute('data-analytics-title');
				var ariaLable = link.getAttribute('aria-label');
                tbl += '<tr><td><a href="' + href + '">' + href + '</a></td><td>Analytics Title: ' + analyticsTitle + '</td><td>Analytics Region: ' + analytics + '</td><td>Aria-Lable: ' + ariaLable + '</td></tr>';
                console.log(link.href);
			}
	}
	
	tbl += '</tbody></table>';



		
	header.innerHTML = docTitle;
	tblBorder.innterHTML = border;
	tblContainer.innerHTML = tbl;
	resultsWindow.document.head.innerHTML = '';
	resultsWindow.document.body.innerHTML = '';
	resultsWindow.document.head.appendChild(tblBorder);
	resultsWindow.document.body.appendChild(header);
	resultsWindow.document.body.appendChild(tblContainer);
	resultsWindow.document.title = docTitle;

}());