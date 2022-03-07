"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[237],{5237:function(e,n,s){s.r(n),s.d(n,{default:function(){return g}});var t=s(885),r=s(2791),i=s(6871),a=s(9023),o=s(7462),c=s(3366),l=s(4578),d=s(9252),p=s(2946),u=s(7726),m=function(e,n){return e&&n&&n.split(" ").forEach((function(n){return(0,p.Z)(e,n)}))},v=function(e){function n(){for(var n,s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];return(n=e.call.apply(e,[this].concat(t))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(e,s){var t=n.resolveArguments(e,s),r=t[0],i=t[1];n.removeClasses(r,"exit"),n.addClass(r,i?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(e,s)},n.onEntering=function(e,s){var t=n.resolveArguments(e,s),r=t[0],i=t[1]?"appear":"enter";n.addClass(r,i,"active"),n.props.onEntering&&n.props.onEntering(e,s)},n.onEntered=function(e,s){var t=n.resolveArguments(e,s),r=t[0],i=t[1]?"appear":"enter";n.removeClasses(r,i),n.addClass(r,i,"done"),n.props.onEntered&&n.props.onEntered(e,s)},n.onExit=function(e){var s=n.resolveArguments(e)[0];n.removeClasses(s,"appear"),n.removeClasses(s,"enter"),n.addClass(s,"exit","base"),n.props.onExit&&n.props.onExit(e)},n.onExiting=function(e){var s=n.resolveArguments(e)[0];n.addClass(s,"exit","active"),n.props.onExiting&&n.props.onExiting(e)},n.onExited=function(e){var s=n.resolveArguments(e)[0];n.removeClasses(s,"exit"),n.addClass(s,"exit","done"),n.props.onExited&&n.props.onExited(e)},n.resolveArguments=function(e,s){return n.props.nodeRef?[n.props.nodeRef.current,e]:[e,s]},n.getClassNames=function(e){var s=n.props.classNames,t="string"===typeof s,r=t?""+(t&&s?s+"-":"")+e:s[e];return{baseClassName:r,activeClassName:t?r+"-active":s[e+"Active"],doneClassName:t?r+"-done":s[e+"Done"]}},n}(0,l.Z)(n,e);var s=n.prototype;return s.addClass=function(e,n,s){var t=this.getClassNames(n)[s+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===s&&r&&(t+=" "+r),"active"===s&&e&&e.scrollTop,t&&(this.appliedClasses[n][s]=t,function(e,n){e&&n&&n.split(" ").forEach((function(n){return(0,d.Z)(e,n)}))}(e,t))},s.removeClasses=function(e,n){var s=this.appliedClasses[n],t=s.base,r=s.active,i=s.done;this.appliedClasses[n]={},t&&m(e,t),r&&m(e,r),i&&m(e,i)},s.render=function(){var e=this.props,n=(e.classNames,(0,c.Z)(e,["classNames"]));return r.createElement(u.ZP,(0,o.Z)({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(r.Component);v.defaultProps={classNames:""},v.propTypes={};var h=v,f=s(364),x=s(184);function E(e){return(0,r.useEffect)((function(){e.cssUpd(!0)})),0==e.tab?(0,x.jsx)("div",{children:"0\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4."}):1==e.tab?(0,x.jsx)("div",{children:"1\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4."}):(0,x.jsx)("div",{children:"2\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4."})}function C(e){return(0,x.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stoke[0]]})}var g=(0,f.$j)((function(e){return{state:e.reducer,alertOpen:e.reducer2}}))((function(e){var n=(0,r.useState)(!0),s=(0,t.Z)(n,2),o=s[0],c=s[1],l=(0,r.useState)(""),d=(0,t.Z)(l,2),p=(d[0],d[1],(0,r.useState)(0)),u=(0,t.Z)(p,2),m=u[0],v=u[1],f=(0,r.useState)(!1),g=(0,t.Z)(f,2),j=g[0],N=g[1];(0,r.useEffect)((function(){var e=setTimeout((function(){c(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var k=(0,i.s0)(),b=(0,i.UO)().id,Z=e.shoes.find((function(e){return e.id==b}));return(0,x.jsxs)("div",{className:"container",children:[!0===o?(0,x.jsx)("div",{className:"my_alert",children:(0,x.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+Z.id+".jpg",width:"100%"})}),(0,x.jsxs)("div",{className:"col-md-6 mt-4",children:[(0,x.jsx)("h4",{className:"pt-5",children:Z.title}),(0,x.jsx)("p",{children:Z.content}),(0,x.jsxs)("p",{children:[Z.price,"\uc6d0"]}),(0,x.jsx)(C,{stoke:e.stoke}),(0,x.jsx)("p",{}),(0,x.jsx)("button",{className:"btn btn-danger",onClick:function(){e.stokeUpd([9,11,12]),e.dispatch({type:"quanAdd",data:{id:Z.id,name:Z.title,quan:1}}),k("/cart")},children:"\uc8fc\ubb38\ud558\uae30"}),"\xa0",(0,x.jsx)("button",{className:"btn btn-danger",onClick:function(){k("/")},children:" Back "})]})]}),(0,x.jsxs)(a.Z,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[(0,x.jsx)(a.Z.Item,{children:(0,x.jsx)(a.Z.Link,{eventKey:"link-0",onClick:function(){N(!1),v(0)},children:" Option 1"})}),(0,x.jsx)(a.Z.Item,{children:(0,x.jsx)(a.Z.Link,{eventKey:"link-1",onClick:function(){N(!1),v(1)},children:" Option 2"})})]}),(0,x.jsx)(h,{in:j,classNames:"wow",timeout:500,children:(0,x.jsx)(E,{tab:m,cssUpd:N})})]})}))}}]);
//# sourceMappingURL=237.945b70e5.chunk.js.map