/*	
	Importer
	Allows you to "import" html pages into other html pages using some simple jquery magic
	
	source: https://github.com/Divran/importer
	
	Made by Divran, 04/06/2017
*/

var importer = (function() {
	var importer = {}

	// Credits for this function go to https://stackoverflow.com/a/11654596
	function UpdateQueryString(key, value, url) {
		if (!url) url = window.location.href;
		var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
			hash;

		if (re.test(url)) {
			if (typeof value !== 'undefined' && value !== null)
				return url.replace(re, '$1' + key + "=" + value + '$2$3');
			else {
				hash = url.split('#');
				url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
				if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
					url += '#' + hash[1];
				return url;
			}
		}
		else {
			if (typeof value !== 'undefined' && value !== null) {
				var separator = url.indexOf('?') !== -1 ? '&' : '?';
				hash = url.split('#');
				url = hash[0] + separator + key + '=' + value;
				if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
					url += '#' + hash[1];
				return url;
			}
			else
				return url;
		}
	}

	/*
		importer.getCurrentPage();
		Helper function. Returns the current page.
	*/
	importer.getCurrentPage = function() {
		var current_page_match = window.location.search.match(/[\?\&]page=([^\&]+)/);

		var current_page = "";
		if (current_page_match) {
			if (current_page_match[1]) {
				current_page = current_page_match[1];
			}
		}

		return current_page;
	}

	/*
		importer.load( elemstr, url [, callback, page name] );

		The main function of this library, it loads the file found at <url> and
		inserts it into the specified element. The callback function is called
		when the loading is completed.

		Elemstr must be a unique identifier compatible with jquery's $() function.
		It MUST be a string (not a jquery object), and it MUST be unique,
		or else the history feature will not work. I suggest you use IDs ('$("#container")' etc)

		The page name parameter is optional. If specified, it will adjust the url
		in the browser's address bar, and also push to the browser's history.

		(Note: The "nohistory" parameter is meant to be used internally only.
		It prevents the pushing of history even if a page name is given)
	*/
	importer.load = function( elemstr, url, callback, pagename, nohistory ) {
		var elem = $(elemstr);
		if (elem.length == 0) {return;}

		if (pagename && !nohistory) {
			var current_page = importer.getCurrentPage();

			var current_url = UpdateQueryString("page",pagename);

			var state = {elemstr:elemstr,url:url,pagename:pagename};
			history.pushState(state, "importer.state", current_url );
		}

		$.get( url, function(data) {
			elem.html( data );
			if (callback) {callback();}
		});
	}

	/*
		impoter.initialize( elem, valid_pages [, callback, default_page] );

		This is meant to be called once from the main index.html page of your website.
		Given an object of all valid pagenames, it will check if the current search query
		of the page is set to one of these pages, and if so, load it.
		It also binds to the "popstate" event, to catch this event and properly redirect when the user
		clicks the back button in their browser.

		Elemstr must be a unique identifier compatible with jquery's $() function.
		It MUST be a string (not a jquery object), and it MUST be unique,
		or else the history feature will not work. I suggest you use IDs ('$("#container")' etc)

		The structure of the valid pages object must be
		{
			pagename1:url1,
			pagename2:url2,
			...
		}
		
		If no page is specified, or no match is found, optionally load the default page instead.
		The default page is a string which references to a page found in the valid pages list.
	*/
	importer.initialize = function( elemstr, valid_pages, callback, default_page ) {
		console.log("initialize");
		$(window).off("popstate.importer");
		$(window).on("popstate.importer",function(event) {
			var orig = event.originalEvent;
			console.log("POPSTATE:",orig);
			if (orig.state) {
				console.log("loading page:",orig.state.elemstr, orig.state.url,orig.state.pagename);
				importer.load( orig.state.elemstr, orig.state.url, function(){}, orig.state.pagename, true );
			} else {
				// if state is invalid, that means the user wants to go back to the default page
				console.log("loading default page:",elemstr, valid_pages[default_page],default_page);
				if (default_page) {
					importer.load( elemstr, valid_pages[default_page], callback, default_page, true );
				}
			}
		});

		var elem = $(elemstr);
		if (elem.length == 0) {return;}
		
		var current_page = importer.getCurrentPage();
		if (current_page != "") {
			for(pagename in valid_pages) {
				if (current_page == pagename) {
					var url = valid_pages[pagename];
					importer.load( elemstr, url, callback, pagename, true );
					return;
				}
			}
		}

		if (default_page) {
			// No page is specified or no page found, load default page
			importer.load( elemstr, valid_pages[default_page], callback, default_page, true );
		}
	}

	return importer;
})();