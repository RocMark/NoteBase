# jQuery 外層解析   
> http://bit.ly/2J7FLzV 

# jQuery 最外層
* 最外層使用 IIFE (避免汙染全域)
* 傳入 window 變數
日後若想要在不同的執行環境下 Ex: node
只要將 window 改成 global即可
```js
  ;(function (global) {
    
    return jQuery // 唯一的對外公開
  }(window))
```

## 自建框架 總結

```js
  (function (global) {
    const FormatNum = function (num, digits, unit) {
      return new FormatNum.init(num, digits, unit)
    }
    FormatNum.init = function (num, digits, unit) {
    }
    // 就可以直接在 FormatNum 上設置 prototype method
    FormatNum.init.prototype = FormatNum.prototype = {
      formatNormal: function() {
        // 回傳 this 讓 Function 可以 鏈式呼叫 (chainable)
        return this.calculate('normalUnit');
      },
    }
    // 就可以 對外公開 此 Library
    global.FormatNum = global.F$ = FormatNum
  }(window))
```

# jQuery 不需要 new 來產生實例
* jQuery 物件只是 init 的 建構式
呼叫 jQuery時，實際上會執行一個 init 的 Function
```js
	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},
```

#
```js
  jQuery.fn = jQuery.prototype = {

    // The current version of jQuery being used
    jquery: version,

    constructor: jQuery,

    // The default length of a jQuery object is 0
    length: 0,

    toArray: function() {
      return slice.call( this );
    },

    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function( num ) {

      // Return all the elements in a clean array
      if ( num == null ) {
        return slice.call( this );
      }

      // Return just the one element from the set
      return num < 0 ? this[ num + this.length ] : this[ num ];
    },

    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function( elems ) {

      // Build a new jQuery matched element set
      var ret = jQuery.merge( this.constructor(), elems );

      // Add the old object onto the stack (as a reference)
      ret.prevObject = this;

      // Return the newly-formed element set
      return ret;
    },

    // Execute a callback for every element in the matched set.
    each: function( callback ) {
      return jQuery.each( this, callback );
    },

    map: function( callback ) {
      return this.pushStack( jQuery.map( this, function( elem, i ) {
        return callback.call( elem, i, elem );
      } ) );
    },

    slice: function() {
      return this.pushStack( slice.apply( this, arguments ) );
    },

    first: function() {
      return this.eq( 0 );
    },

    last: function() {
      return this.eq( -1 );
    },

    eq: function( i ) {
      var len = this.length,
        j = +i + ( i < 0 ? len : 0 );
      return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
    },

    end: function() {
      return this.prevObject || this.constructor();
    },

    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  }
```

## jQuery.fn.init 
* 在此處創建 實際的物件  (不使用new)
* 用來判斷傳入 $(這裡) 的值
```js
	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;
		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) { return this; }

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];
			} else { match = rquickExpr.exec( selector ); }

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {
				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};
```

# jQuery.fn
* jQuery.fn = jQuery.prototype = {~}

```js
  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function() { return slice.call( this ); },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function( num ) {
      // Return all the elements in a clean array
      if ( num == null ) { return slice.call( this ); }
      // Return just the one element from the set
      return num < 0 ? this[ num + this.length ] : this[ num ];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function( elems ) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge( this.constructor(), elems );
      // Add the old object onto the stack (as a reference)
      ret.prevObject = this;
      // Return the newly-formed element set
      return ret;
    },
    // 對每個元素 執行相同的 CallBackFunc
    each: function( callback ) { return jQuery.each( this, callback ); },
    map: function( callback ) {
      return this.pushStack( jQuery.map( this, function( elem, i ) {
        return callback.call( elem, i, elem );
      } ) );
    },
    slice: function() { return this.pushStack( slice.apply( this, arguments ) ); },
    first: function() { return this.eq( 0 ); },
    last: function() { return this.eq( -1 ); },
    eq: function( i ) {
      var len = this.length,
        j = +i + ( i < 0 ? len : 0 );
      return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
    },
    end: function() { return this.prevObject || this.constructor(); },
    push: push,  // 下列為 原生 JS Array
    sort: arr.sort,
    splice: arr.splice
  };
```