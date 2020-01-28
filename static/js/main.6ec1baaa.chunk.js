(this["webpackJsonpreact-hw-01-components"]=this["webpackJsonpreact-hw-01-components"]||[]).push([[0],{35:function(e,t,n){e.exports=n(84)},41:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),s=n.n(c),i=n(3),o=n.n(i),u=n(12),l=n(13),v=n(15),p=n(14),d=n(16),h=(n(41),n(9)),f=n(8),g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"trendingTitle"},"Trending Today"),r.a.createElement("ul",{className:"startFilmsList"},this.props.movies.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(h.b,{id:t.id,onClick:e.props.getDetails,to:"/movies/".concat(t.id)},t.original_title))}))))}}]),t}(a.Component),m=n(11),b=n.n(m),w="7dbf79a7ec9fee0ed11175b6a2c600f3",y={getData:function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.awrap(b.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(w)).then((function(e){return e.data.results})));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},getCasts:function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.awrap(b.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(w)).then((function(e){return e.data.cast})));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])},getReviews:function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.awrap(b.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(w,"&language=en-US&page=1")).then((function(e){return e.data.results})));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])},searchMovies:function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.awrap(b.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(w,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),null,null,[[0,7]])},getMovieDetails:function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.awrap(b.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(w,"&language=en-US")).then((function(e){return e.data})));case 3:return t=n.sent,n.abrupt("return",t);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},M=n(30),E=n.n(M),x=(n(34),Object(a.lazy)((function(){return n.e(6).then(n.bind(null,87))}))),k=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,88))})),S=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],findedMovies:[],currentMovie:{},cast:[],review:[],currentMovieId:null,value:""},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),y.searchMovies(n.state.value).then((function(e){console.log("data",e),n.setState({findedMovies:e})}))},n.getMovies=function(){y.getData().then((function(e){console.log("data",e),n.setState({movies:e})}))},n.getMovieCast=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(y.getCasts(n.state.currentMovieId));case 2:e=t.sent,n.setState({cast:e});case 4:case"end":return t.stop()}}))},n.getMovieReviews=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(y.getReviews(n.state.currentMovieId));case 2:e=t.sent,n.setState({reviews:e});case 4:case"end":return t.stop()}}))},n.getDetails=function(e){var t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.persist(),a.next=3,o.a.awrap(y.getMovieDetails(+e.target.id));case 3:t=a.sent,n.setState({currentMovie:t,currentMovieId:+e.target.id});case 5:case"end":return a.stop()}}))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"navLink"},r.a.createElement(h.b,{to:"/"},"Home"),r.a.createElement(h.b,{to:"/movies"},"Movies")),r.a.createElement("hr",null),r.a.createElement(a.Suspense,{fallback:r.a.createElement(E.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,render:function(){return r.a.createElement(g,{movies:e.state.movies,getDetails:e.getDetails})}}),r.a.createElement(f.b,{path:"/movies/:movieId",render:function(){return r.a.createElement(k,{currentMovie:e.state.currentMovie,getMovieCast:e.getMovieCast,getMovieReviews:e.getMovieReviews,cast:e.state.cast,reviews:e.state.reviews})}}),r.a.createElement(f.b,{path:"/movies",render:function(){return r.a.createElement(x,{findedMovies:e.state.findedMovies,handleChange:e.handleChange,handleSubmit:e.handleSubmit,inputValue:e.state.value,getDetails:e.getDetails})}}),r.a.createElement(f.a,{to:"/"}))))}}]),t}(a.Component);s.a.render(r.a.createElement(h.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6ec1baaa.chunk.js.map