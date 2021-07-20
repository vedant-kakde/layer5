(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[626],{59571:function(e,t,n){"use strict";n.d(t,{OK:function(){return R},td:function(){return j},x4:function(){return D},mQ:function(){return I}});var r=n(67294);function o(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var a=o("Tab"),s=o("TabList"),l=o("TabPanel");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return a(e)||s(e)||l(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,c({},e.props,{children:i(e.props.children,t)})):e}))}function u(e,t){return r.Children.forEach(e,(function(e){null!==e&&(a(e)||l(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(s(e)&&t(e),u(e.props.children,t)))}))}function d(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function f(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(r&&(r+=" "),r+=t);return r}var p,b=0;function h(){return"react-tabs-"+b++}function v(e){var t=0;return u(e,(function(e){a(e)&&t++})),t}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return e&&"getAttribute"in e}function C(e){return g(e)&&"tab"===e.getAttribute("role")}function T(e){return g(e)&&"true"===e.getAttribute("aria-disabled")}var N=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props,r=n.direction,o=n.disableUpDownKeys;if(t.isTabFromContainer(e.target)){var a=t.props.selectedIndex,s=!1,l=!1;32!==e.keyCode&&13!==e.keyCode||(s=!0,l=!1,t.handleClick(e)),37===e.keyCode||!o&&38===e.keyCode?(a="rtl"===r?t.getNextTab(a):t.getPrevTab(a),s=!0,l=!0):39===e.keyCode||!o&&40===e.keyCode?(a="rtl"===r?t.getPrevTab(a):t.getNextTab(a),s=!0,l=!0):35===e.keyCode?(a=t.getLastTab(),s=!0,l=!0):36===e.keyCode&&(a=t.getFirstTab(),s=!0,l=!0),s&&e.preventDefault(),l&&t.setSelected(a,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(T(n))return;var r=[].slice.call(n.parentNode.children).filter(C).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,m(t,n);var c=o.prototype;return c.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},c.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!T(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!T(this.getTab(r)))return r;return e},c.getPrevTab=function(e){for(var t=e;t--;)if(!T(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!T(this.getTab(t)))return t;return e},c.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!T(this.getTab(t)))return t;return null},c.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!T(this.getTab(e)))return e;return null},c.getTabsCount=function(){return v(this.props.children)},c.getPanelsCount=function(){return function(e){var t=0;return u(e,(function(e){l(e)&&t++})),t}(this.props.children)},c.getTab=function(e){return this.tabNodes["tabs-"+e]},c.getChildren=function(){var e=this,t=0,n=this.props,o=n.children,c=n.disabledTabClassName,u=n.focus,d=n.forceRenderTabPanel,f=n.selectedIndex,b=n.selectedTabClassName,v=n.selectedTabPanelClassName,y=n.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var m=this.tabIds.length-this.getTabsCount();m++<0;)this.tabIds.push(h()),this.panelIds.push(h());return i(o,(function(n){var o=n;if(s(n)){var h=0,m=!1;null==p&&function(e){var t=e||("undefined"!=typeof window?window:void 0);try{p=!(void 0===t||!t.document||!t.document.activeElement)}catch(n){p=!1}}(y),p&&(m=r.Children.toArray(n.props.children).filter(a).some((function(t,n){var r=y||("undefined"!=typeof window?window:void 0);return r&&r.document.activeElement===e.getTab(n)}))),o=(0,r.cloneElement)(n,{children:i(n.props.children,(function(t){var n="tabs-"+h,o=f===h,a={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[h],panelId:e.panelIds[h],selected:o,focus:o&&(u||m)};return b&&(a.selectedClassName=b),c&&(a.disabledClassName=c),h++,(0,r.cloneElement)(t,a)}))})}else if(l(n)){var g={id:e.panelIds[t],tabId:e.tabIds[t],selected:f===t};d&&(g.forceRender=d),v&&(g.selectedClassName=v),t++,o=(0,r.cloneElement)(n,g)}return o}))},c.isTabFromContainer=function(e){if(!C(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},c.render=function(){var e=this,t=this.props,n=(t.children,t.className),o=(t.disabledTabClassName,t.domRef),a=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,t.environment,t.disableUpDownKeys,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"]));return r.createElement("div",y({},a,{className:f(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,o&&o(t)},"data-tabs":!0}),this.getChildren())},o}(r.Component);function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}N.defaultProps={className:"react-tabs",focus:!1};var I=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var o=n.props.onSelect,a=n.state.mode;if("function"!=typeof o||!1!==o(e,t,r)){var s={focus:"keydown"===r.type};1===a&&(s.selectedIndex=e),n.setState(s)}},n.state=o.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,O(t,n),o.getDerivedStateFromProps=function(e,t){return o.copyPropsToState(e,t)},o.getModeFromProps=function(e){return null===e.selectedIndex?1:0},o.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var r={focus:n,mode:o.getModeFromProps(e)};if(1===r.mode){var a=Math.max(0,v(e.children)-1),s=null;s=null!=t.selectedIndex?Math.min(t.selectedIndex,a):e.defaultIndex||0,r.selectedIndex=s}return r},o.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","defaultIndex","defaultFocus"])),o=this.state,a=o.focus,s=o.selectedIndex;return n.focus=a,n.onSelect=this.handleSelected,null!=s&&(n.selectedIndex=s),r.createElement(N,n,t)},o}(r.Component);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}I.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},I.tabsRole="Tabs";var j=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,x(t,n),o.prototype.render=function(){var e=this.props,t=e.children,n=e.className,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","className"]);return r.createElement("ul",P({},o,{className:f(n),role:"tablist"}),t)},o}(r.Component);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}j.defaultProps={className:"react-tabs__tab-list"},j.tabsRole="TabList";var w="react-tabs__tab",R=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,k(t,n);var a=o.prototype;return a.componentDidMount=function(){this.checkFocus()},a.componentDidUpdate=function(){this.checkFocus()},a.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},a.render=function(){var e,t=this,n=this.props,o=n.children,a=n.className,s=n.disabled,l=n.disabledClassName,c=(n.focus,n.id),i=n.panelId,u=n.selected,d=n.selectedClassName,p=n.tabIndex,b=n.tabRef,h=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return r.createElement("li",_({},h,{className:f(a,(e={},e[d]=u,e[l]=s,e)),ref:function(e){t.node=e,b&&b(e)},role:"tab",id:c,"aria-selected":u?"true":"false","aria-disabled":s?"true":"false","aria-controls":i,tabIndex:p||(u?"0":null)}),o)},o}(r.Component);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}R.defaultProps={className:w,disabledClassName:w+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:w+"--selected"},R.tabsRole="Tab";var E="react-tabs__tab-panel",D=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,S(t,n),o.prototype.render=function(){var e,t=this.props,n=t.children,o=t.className,a=t.forceRender,s=t.id,l=t.selected,c=t.selectedClassName,i=t.tabId,u=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return r.createElement("div",F({},u,{className:f(o,(e={},e[c]=l,e)),role:"tabpanel",id:s,"aria-labelledby":i}),a||l?n:null)},o}(r.Component);D.defaultProps={className:E,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},D.tabsRole="TabPanel"}}]);
//# sourceMappingURL=cd6bade0a1fcd32f8364e1a61a7e698fe0d013a0-de4f1d8655eb4a6b2bce.js.map