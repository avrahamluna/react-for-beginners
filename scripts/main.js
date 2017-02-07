var React = require('react');
var ReactDom = require('react-dom');

/*
StorePicker
This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
	render : function() {
		var name = "wes";

		return (
			<form className="store-selector">
			<h2>Please Enter A Store</h2>
			<input type="text" ref="storeId" required />
			<input type="Submit"/>
			</form>

		)
	}
});

ReactDom.render(<StorePicker/>, document.querySelector('#main'));