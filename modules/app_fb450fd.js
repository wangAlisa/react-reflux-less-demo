define("modules/app.jsx",function(e,t,a){"use strict";var n=e("modules/component/header.jsx"),r=e("modules/action/search.jsx");a.exports=React.createClass({displayName:"exports",getInitialState:function(){return{}},render:function(){return React.createElement("div",null,React.createElement(n,{data:this.props.location.pathname}),React.createElement("div",{className:"app-main"},this.props.children))},componentDidMount:function(){r.changeSearch(this.props.params.query)},componentDidUpdate:function(){r.changeSearch(this.props.params.query)}})});