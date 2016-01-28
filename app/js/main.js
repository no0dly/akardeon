var accordeon = (function(){

	function _setUpListeners() {
		var
			link = document.getElementsByClassName('accordeon__link'),
			length = link.length,
			i;
		for( i=0; i < length; i++) {
			_addListener(link[i], 'click', _openItem);
		}
	}

	function _addListener(e, type, fn) {

		if( typeof addEventListener !== 'undefined' ) {
			e.addEventListener( type, fn, false);
		} else if ( typeof attachEvent !== 'undefined' ) {
			e.attachEvent( 'on' + type, fn );
		} else {
			e['on' + type] = fn;
		}

	}

	function _openItem() {
		var
			$this 		= this,
			container 	= document.getElementsByClassName('accordeon__list'),
			items		= container[0].children,
			item 		= $this.parentElement,
			itemsLen 	= items.length,
			i;

		if ( !item.classList.contains('active') ) {

			for( i=0; i<itemsLen; i++ ) {
				items[i].classList.remove('active');
			}
			item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
	}

	return {
		init: _setUpListeners
	};
}());

accordeon.init();