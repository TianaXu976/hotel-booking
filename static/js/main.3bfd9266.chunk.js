(this["webpackJsonphotel-booking"]=this["webpackJsonphotel-booking"]||[]).push([[0],{119:function(e,t,n){e.exports={container:"style_container__2rOgZ",banner:"style_banner__3nrAs",logo:"style_logo__GXL1K","room-cards":"style_room-cards__xQge9",loading:"style_loading__PVkoB"}},127:function(e,t,n){e.exports=n.p+"static/media/room_4-2.2229c077.jpeg"},128:function(e,t,n){e.exports=n.p+"static/media/room_5-1.3477a44b.jpeg"},129:function(e,t,n){e.exports=n.p+"static/media/room_5-3.23329ae1.jpeg"},130:function(e,t,n){e.exports={contact:"style_contact__3wNCv",fanpage:"style_fanpage__fUKoe",brand:"style_brand__EWPN6","contact-wrap":"style_contact-wrap__3vgcN","contact-info":"style_contact-info__2zpKs",icon:"style_icon__1OIdp"}},131:function(e,t,n){e.exports={"room-card":"style_room-card__2jzqy","room-photo":"style_room-photo__16PO9","room-info":"style_room-info__1zRLX","room-name":"style_room-name__16CS8","price-info":"style_price-info__hQ5mM"}},132:function(e,t,n){e.exports={"banner-img":"style_banner-img__NBPAc",top:"style_top__2oecf",hidden:"style_hidden__1vjRp"}},133:function(e,t,n){e.exports={loading:"style_loading__vscnd","room-photo":"style_room-photo__9O5Ok",logo:"style_logo__G1A7W","room-info":"style_room-info__1uekc",detail:"style_detail__iXHLu",name:"style_name__1hJ9x","description-short":"style_description-short__tGVJ2",description:"style_description__1l6_W",divider:"style_divider__2EpMH",checkInAndOut:"style_checkInAndOut__3Zpt2","room-price":"style_room-price__zimA1","normal-day":"style_normal-day__3YZol","holiday-day":"style_holiday-day__2dgr3"}},134:function(e,t,n){e.exports={amenities:"style_amenities__O4lOe",amenity:"style_amenity__3Zcjd",active:"style_active__3Ow67",icon:"style_icon__3Kd9l"}},136:function(e,t,n){e.exports={slider:"style_slider__1Hr0Z","img-detail":"style_img-detail__36ly6"}},137:function(e,t,n){e.exports={"date-picker":"style_date-picker__3MAwR","booking-btn":"style_booking-btn__3PL4U",disabled:"style_disabled__3fqgI"}},138:function(e,t,n){e.exports={title:"style_title__2l9tD",divider:"style_divider__1-GOh","booking-info":"style_booking-info__Jj2qh",error:"style_error__1KX4S","time-btn":"style_time-btn__30YoC","date-detail":"style_date-detail__d23-l","total-price":"style_total-price__sJyrm","booking-btn":"style_booking-btn__2y0ws",cancel:"style_cancel__on6fW",confirm:"style_confirm__3iYgr",loading:"style_loading__1bfnV"}},139:function(e,t,n){e.exports={title:"style_title__2Rwn9",divider:"style_divider__2FAuk",tick:"style_tick__3PMe1","back-btn":"style_back-btn__2xbxf"}},140:function(e,t,n){e.exports={message:"style_message__1cc03","back-btn":"style_back-btn__1Wn6t"}},151:function(e,t,n){},153:function(e,t,n){},179:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),c=n.n(i),l=(n(151),n(152),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))}),o=(n(153),n(15)),s=n(12),d=n.n(s),b=n(119),j=n.n(b),u=n(120),f=n.n(u).a.create({baseURL:"https://challenge.thef2e.com/api/thef2e2019/stage6",headers:{Authorization:"Bearer ".concat("5oqn72f3oa7IWIe9mohfGOlsZnnDWks59aF3blRGF3LG87lsnwsVN7R35a9Q"),accept:"application/json"}}),m=function(){return f.get("/rooms")},p=function(e){return f.get("/room".concat(e))},O=function(e,t){return f.post("/room/".concat(e),t)},h=n(88),g=n.n(h),y=n(121),x=n(14),v=n(1),_=Object(a.createContext)(),w={state:!1,dialogName:"",info:{}},k="BookingDialog",A="SuccessDialog",N="ErrorDialog",E="CloseDialog";function D(e,t){switch(t.type){case k:return{state:!0,dialogName:k,info:t.payload};case A:return{state:!0,dialogName:A,info:t.payload};case N:return{state:!0,dialogName:N,info:t.payload};case E:return Object(x.a)(Object(x.a)({},e),{},{state:!1});default:return e}}function S(e){var t=e.children,n=Object(a.useReducer)(D,w),r=Object(o.a)(n,2),i=r[0],c=r[1];return Object(v.jsx)(_.Provider,{value:{dialogState:i,dialogDispatch:c},children:t})}function C(e){var t=Object(a.useContext)(_).dialogDispatch;return{getApiResult:Object(a.useCallback)(Object(y.a)(g.a.mark((function n(){var a,r,i=arguments;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.apply(void 0,i);case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),t({type:N,payload:null===n.t0||void 0===n.t0||null===(a=n.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message});case 9:case"end":return n.stop()}}),n,null,[[0,6]])}))),[e,t])}}var R,I,M,P=n(222),F=n(76),z=n(221),B=n(125),Y=n.n(B),Z=Object(F.a)({palette:{primary:{main:Y.a[300]}}});function V(){return Object(v.jsx)(z.a,{theme:Z,children:Object(v.jsx)(P.a,{size:30})})}var H=["title","titleId"];function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function L(e,t){var n=e.title,r=e.titleId,i=W(e,H);return a.createElement("svg",G({width:"162px",height:"163px",viewBox:"0 0 162 163",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},i),void 0===n?a.createElement("title",{id:r},"Group"):n?a.createElement("title",{id:r},n):null,R||(R=a.createElement("desc",null,"Created with Sketch.")),I||(I=a.createElement("defs",null,a.createElement("polygon",{id:"path-1",points:"0 0 148 0 148 16.0839844 15.078125 16.0839844 15.078125 148 0 148"}),a.createElement("pattern",{id:"pattern-2",width:7.13731374,height:7.13731374,x:-7.13731374,y:-7.13731374,patternUnits:"userSpaceOnUse"},a.createElement("use",{xlinkHref:"#image-3",transform:"scale(0.142746275,0.142746275)"})),a.createElement("image",{id:"image-3",width:50,height:50,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGN5fIAKQAAAY1JREFUaAXtl0duw0AMRX2J9O6a3px2/yOkd6f3eoLkMfAiBjiz0Eb4TAgQhjiQ9d88WZArX711yWG1oli9HD9HV5IwDoiNDKYmJYbAd5bcqWtmdRkYwrboHIyOGUCa9C3tlZyZHMwNhFK3WYPAKTMG01D6zRiMhfbKIKVg6gTOwTSVzISDsaeWV/bIbimZqRE4FIy9tnh1z3BayUyVwH8GZkbJzBRm7H+LVw8MQ8HMKpmZZPcvPC3MzEwYmEdg5tTMdAjtlRzMBBQdj4RZKJgngOaVbrNxAp8nzISDWVAzc5Yw88xcCmaMwDmYRSUzBnOaMbOkBDOagXlhLRTMspqZk8RtZmakYEYInIJ5ZW1FyYzBHNNeycEMQ5GDWVUyYzBHnhZmb3QomLaSmSF2/zBjJgzMO5BrSmYGCXyQMBMOZl3NzH7CzAdzKZgBAudgNpTMGMxexszmP0wZO4CR/oyZT9a2yshV6JpdmF0+vYoFU2iHyjoJHX30jqelrEyFr5uCKfyFZZ7Yhdn+beYb9CNZC1e1TTcAAAAASUVORK5CYII="}))),M||(M=a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"index_1",transform:"translate(-54.000000, -46.000000)"},a.createElement("g",{id:"Group",transform:"translate(54.000000, 46.000000)"},a.createElement("g",{id:"Rectangle-Copy-2"},a.createElement("use",{fillOpacity:.28,fill:"#FFFFFF",xlinkHref:"#path-1"}),a.createElement("use",{fill:"url(#pattern-2)",xlinkHref:"#path-1"})),a.createElement("rect",{id:"Rectangle",stroke:"#FFFFFF",strokeWidth:2,fillOpacity:.300152972,fill:"#FFFFFF",x:15,y:16,width:146,height:146}),a.createElement("text",{id:"White-Space",fontFamily:"NotoSansCJKtc-Medium, Noto Sans CJK TC",fontSize:31,fontWeight:400,"line-spacing":44,letterSpacing:3.23777795,fill:"#FFFFFF"},a.createElement("tspan",{x:41,y:77},"White"),a.createElement("tspan",{x:41,y:121},"Space")))))))}var T,U=a.forwardRef(L),J=(n.p,n(127)),K=n.n(J),X=n(128),Q=n.n(X),q=n(129),$=n.n(q),ee=n(130),te=n.n(ee),ne=["title","titleId"];function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){var n=e.title,r=e.titleId,i=re(e,ne);return a.createElement("svg",ae({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",className:"svg-inline--fa fa-instagram fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,T||(T=a.createElement("path",{fill:"#fff",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})))}var ce,le=a.forwardRef(ie),oe=(n.p,["title","titleId"]);function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function be(e,t){var n=e.title,r=e.titleId,i=de(e,oe);return a.createElement("svg",se({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-square",className:"svg-inline--fa fa-facebook-square fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,ce||(ce=a.createElement("path",{fill:"#fff",d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"})))}var je,ue=a.forwardRef(be),fe=(n.p,["title","titleId"]);function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Oe(e,t){var n=e.title,r=e.titleId,i=pe(e,fe);return a.createElement("svg",me({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"phone-alt",className:"svg-inline--fa fa-phone-alt fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,je||(je=a.createElement("path",{fill:"#fff",d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"})))}var he,ge=a.forwardRef(Oe),ye=(n.p,["title","titleId"]);function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function _e(e,t){var n=e.title,r=e.titleId,i=ve(e,ye);return a.createElement("svg",xe({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,he||(he=a.createElement("path",{fill:"#fff",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})))}var we,ke=a.forwardRef(_e),Ae=(n.p,["title","titleId"]);function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function De(e,t){var n=e.title,r=e.titleId,i=Ee(e,Ae);return a.createElement("svg",Ne({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",className:"svg-inline--fa fa-home fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,we||(we=a.createElement("path",{fill:"#fff",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})))}var Se=a.forwardRef(De),Ce=(n.p,d.a.bind(te.a));function Re(){return Object(v.jsxs)("div",{className:Ce("contact"),children:[Object(v.jsxs)("div",{className:Ce("fanpage"),children:[Object(v.jsx)(le,{className:Ce("brand")}),Object(v.jsx)(ue,{className:Ce("brand")})]}),Object(v.jsxs)("div",{className:Ce("contact-wrap"),children:[Object(v.jsxs)("div",{className:Ce("contact-info"),children:[Object(v.jsx)(ge,{className:Ce("icon")}),Object(v.jsx)("span",{children:"02-17264937"})]}),Object(v.jsxs)("div",{className:Ce("contact-info"),children:[Object(v.jsx)(ke,{className:Ce("icon")}),Object(v.jsx)("span",{children:"whitespace@whitespace.com.tw"})]}),Object(v.jsxs)("div",{className:Ce("contact-info"),children:[Object(v.jsx)(Se,{className:Ce("icon")}),Object(v.jsx)("span",{children:"\u53f0\u5317\u5e02\u7f85\u65af\u798f\u8def\u5341\u6bb530\u865f"})]})]})]})}var Ie=n(131),Me=n.n(Ie),Pe=n(48),Fe=d.a.bind(Me.a);function ze(e){var t=e.info;return Object(v.jsx)("div",{className:Fe("room-card"),children:Object(v.jsxs)(Pe.b,{to:"/".concat(t.id),children:[Object(v.jsx)("div",{className:Fe("room-photo"),children:Object(v.jsx)("img",{src:t.imageUrl,alt:"preview"})}),Object(v.jsxs)("div",{className:Fe("room-info"),children:[Object(v.jsx)("span",{className:Fe("room-name"),children:t.name}),Object(v.jsxs)("div",{className:Fe("price-info"),children:[Object(v.jsxs)("span",{children:["NT.",t.normalDayPrice," ",Object(v.jsx)("span",{children:"\u5e73\u65e5"})]}),Object(v.jsxs)("span",{children:["NT.",t.holidayPrice," \u5047\u65e5"]})]})]})]})})}var Be=n(132),Ye=n.n(Be),Ze=d.a.bind(Ye.a);function Ve(e){var t=e.bannerList,n=Object(a.useState)(!1),r=Object(o.a)(n,2),i=r[0],c=r[1],l=Object(a.useState)({top:0,bottom:0}),s=Object(o.a)(l,2),d=s[0],b=s[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){!0===i?(c(!1),b(Object(x.a)(Object(x.a)({},d),{},{top:d.bottom===t.length-1?0:d.bottom+1}))):(c(!0),b(Object(x.a)(Object(x.a)({},d),{},{bottom:d.top===t.length-1?0:d.top+1})))}),4e3);return function(){clearInterval(e)}}),[i,d,t]),Object(v.jsxs)("div",{className:Ze("banner-img"),children:[Object(v.jsx)("img",{src:t[d.top],alt:"banner",className:Ze("top",{hidden:i})}),Object(v.jsx)("img",{src:t[d.bottom],alt:"banner"})]})}var He=d.a.bind(j.a),Ge=[K.a,Q.a,$.a];function We(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=C(m).getApiResult;return Object(a.useEffect)((function(){i().then((function(e){e&&r(e.data.items)}))}),[i]),Object(v.jsxs)("div",{className:He("container"),children:[Object(v.jsxs)("div",{className:He("banner"),children:[Object(v.jsx)(Ve,{bannerList:Ge}),Object(v.jsx)(U,{className:He("logo"),title:"logo"}),Object(v.jsx)(Re,{})]}),n.length>0?Object(v.jsx)("div",{className:He("room-cards"),children:n.map((function(e){return Object(v.jsx)(ze,{info:e},e.id)}))}):Object(v.jsx)("div",{className:He("loading"),children:Object(v.jsx)(V,{})})]})}function Le(){return Object(v.jsx)(We,{})}var Te,Ue,Je,Ke=n(133),Xe=n.n(Ke),Qe=["title","titleId"];function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function $e(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function et(e,t){var n=e.title,r=e.titleId,i=$e(e,Qe);return a.createElement("svg",qe({width:"164px",height:"53px",viewBox:"0 0 164 53",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},i),void 0===n?a.createElement("title",{id:r},"Group"):n?a.createElement("title",{id:r},n):null,Te||(Te=a.createElement("desc",null,"Created with Sketch.")),Ue||(Ue=a.createElement("defs",null,a.createElement("polygon",{id:"path-1",points:"0 -1.13731941e-13 150 -1.13731941e-13 150 10.6730495 15.2818834 10.6730495 15.2818834 49 0 49"}),a.createElement("pattern",{id:"pattern-2",width:5.28507864,height:5.28507864,x:-5.28507864,y:-5.28507864,patternUnits:"userSpaceOnUse"},a.createElement("use",{xlinkHref:"#image-3",transform:"scale(0.105701573,0.105701573)"})),a.createElement("image",{id:"image-3",width:50,height:50,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAZhJREFUaAXll1VuA0EQRNeHCJPDzHj/I4SZGZ0TJK+iWHLinvV3jVsqaTXzU0+v11AURfHVkCueR4jlNILo+ZpYwvwHqcOMumm5p3AEc8P5mBPMJGXLYKzMTABzR7IwUwZzC6TVmo2XmBGM7m1GZVU6WjOtnxWM1qgMRmtoM9nB6PskWjN9ZOuj22b0PZIVjH6DRWYeOJ+y0UJR/ZBsG5hpJzPDlNX/lmjNHjnPCmbGyUyVspckZSYbmCcgZ4nNVGl6QSIzdjBD7QLzDOgcsZlBmp6TaM2yg5m30UJRmTlLmHnh3ApmoAXMAvc2I5hTEr0zMrNoQ0LRfpKCec0NZsnNzAmFozWTGSuYPgqnYN64WyY2I5hjEpmxg+ltAbNio4WigjkikZl3zrOCWQXIZnpoekhSZrKB+QByzUYLRbvJAYnMZAez7mZmP2GmVqlUrGC6AEnCcLfhZEYweyR6Z2qcb2YDw5pZwXSWmPnkbsvJjGB2SbRmnjCsUxMMZ4Kxmg7a7pA/ML9wViAq2wTjClKH2ebhx4xAvgGD91PfHY5rAgAAAABJRU5ErkJggg=="}))),Je||(Je=a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"information",transform:"translate(-49.000000, -32.000000)"},a.createElement("g",{id:"Group",transform:"translate(49.000000, 32.000000)"},a.createElement("g",{id:"Rectangle-Copy-2"},a.createElement("use",{fillOpacity:.28,fill:"#FFFFFF",xlinkHref:"#path-1"}),a.createElement("use",{fill:"url(#pattern-2)",xlinkHref:"#path-1"})),a.createElement("rect",{id:"Rectangle",stroke:"#000000",x:14.5,y:10.5,width:149,height:42}),a.createElement("text",{id:"WhiteSpace",fontFamily:"NotoSansCJKtc-Medium, Noto Sans CJK TC",fontSize:18,fontWeight:400,"line-spacing":44,letterSpacing:1.8800001,fill:"#000000"},a.createElement("tspan",{x:31,y:29},"WhiteSpace")))))))}var tt=a.forwardRef(et),nt=(n.p,n(134)),at=n.n(nt),rt=n(135),it=n(23),ct=d.a.bind(at.a);function lt(e){var t=e.amenitiesState,n=[{icon:it.k,name:"Wi-Fi",state:t["Wi-Fi"]},{icon:it.h,name:"\u96fb\u8a71",state:t.Television},{icon:it.g,name:"\u6f02\u4eae\u7684\u8996\u91ce",state:t["Great-View"]},{icon:it.j,name:"\u65e9\u9910",state:t.Breakfast},{icon:it.l,name:"\u7a7a\u8abf",state:t["Air-Conditioner"]},{icon:it.i,name:"\u7981\u6b62\u5438\u7159",state:t["Smoke-Free"]},{icon:it.c,name:"Mini Bar",state:t["Mini-Bar"]},{icon:it.a,name:"\u51b0\u7bb1",state:t.Refrigerator},{icon:it.b,name:"\u9069\u5408\u5152\u7ae5",state:t["Child-Friendly"]},{icon:it.d,name:"Room Service",state:t["Room-Service"]},{icon:it.e,name:"\u6c99\u767c",state:t.Sofa},{icon:it.f,name:"\u5bf5\u7269\u651c\u5e36",state:t["Pet-Friendly"]}];return Object(v.jsx)("div",{className:ct("amenities"),children:n.map((function(e,t){return Object(v.jsxs)("div",{className:ct("amenity",{active:e.state}),children:[Object(v.jsx)("div",{className:ct("icon"),children:Object(v.jsx)(rt.a,{icon:e.icon,size:"lg"})}),Object(v.jsxs)("span",{children:[e.name," "]})]},t)}))})}var ot=n(136),st=n.n(ot),dt=n(231),bt=n(227),jt=n(230),ut=n(224),ft=n(225),mt=n(226),pt=(n(179),n(180),n(181),n(182),d.a.bind(st.a));function Ot(e){var t=e.img;return Object(v.jsx)("div",{className:pt("slider"),children:Object(v.jsx)(dt.a,{speed:500,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,children:t.map((function(e,t){return Object(v.jsx)(bt.a,{children:Object(v.jsx)("div",{className:pt("img-detail"),style:{backgroundImage:"url(".concat(e,")")}})},t)}))})})}jt.a.use([ut.a,ft.a,mt.a]);var ht=n(137),gt=n.n(ht),yt=n(60),xt=n(71),vt=(n(196),n(117),n(118),n(92)),_t=n(26),wt=n.n(_t),kt=Object(a.createContext)(),At=[],Nt="dateFromApi",Et="bookingDate";function Dt(e){return e.map((function(e){return wt()(e.date).toDate()}))}function St(e,t){switch(t.type){case Nt:return Dt(t.payload);case Et:return[].concat(Object(vt.a)(e),Object(vt.a)(Dt(t.payload)));default:return e}}function Ct(e){var t=e.children,n=Object(a.useReducer)(St,At),r=Object(o.a)(n,2),i=r[0],c=r[1];return Object(v.jsx)(kt.Provider,{value:{bookingRange:i,bookingRangeDispatch:c},children:t})}var Rt=d.a.bind(gt.a),It={startDate:new Date,endDate:new Date,key:"selection"};function Mt(e){var t=e.price,n=e.roomId,r=e.booking,i=Object(a.useContext)(_).dialogDispatch,c=Object(a.useContext)(kt),l=c.bookingRange,s=c.bookingRangeDispatch,d=Object(a.useState)(!0),b=Object(o.a)(d,2),j=b[0],u=b[1],f=Object(a.useState)([It]),m=Object(o.a)(f,2),p=m[0],O=m[1],h={startDate:p[0].startDate,endDate:p[0].endDate};return Object(a.useEffect)((function(){s({type:Nt,payload:r})}),[r,s]),Object(a.useEffect)((function(){u(!0),O([It])}),[l]),Object(v.jsxs)("div",{className:Rt("date-picker"),children:[Object(v.jsx)(xt.DateRange,{onChange:function(e){O([e.selection]),u(!1)},ranges:p,scroll:{enabled:!0},showDateDisplay:!1,rangeColors:["#747474"],showMonthAndYearPickers:!1,minDate:Object(yt.default)(new Date,1),disabledDates:l}),Object(v.jsx)("button",{className:Rt("booking-btn",{disabled:j}),onClick:function(){i({type:k,payload:{dateRange:h,price:t,roomId:n}})},disabled:j,children:"\u9810\u7d04\u6642\u6bb5"})]})}var Pt=n(13),Ft=d.a.bind(Xe.a);function zt(){var e=C(p).getApiResult,t=Object(a.useState)(),n=Object(o.a)(t,2),r=n[0],i=n[1],c=Object(Pt.f)();if(Object(a.useEffect)((function(){e(c.location.pathname).then((function(e){e&&i(e.data)}))}),[c.location.pathname,e]),!r)return Object(v.jsx)("div",{className:Ft("loading"),children:Object(v.jsx)(V,{})});var l=r.room[0],s=r.booking;return Object(v.jsxs)("div",{className:Ft("container"),children:[Object(v.jsxs)("div",{className:Ft("room-photo"),children:[Object(v.jsx)(Ot,{img:l.imageUrl}),Object(v.jsx)("div",{className:Ft("logo"),onClick:function(){return c.push("/")},children:Object(v.jsx)(tt,{})})]}),Object(v.jsxs)("div",{className:Ft("room-info"),children:[Object(v.jsxs)("div",{className:Ft("detail"),children:[Object(v.jsx)("h1",{className:Ft("name"),children:l.name}),Object(v.jsxs)("div",{className:Ft("description-short"),children:["\u623f\u5ba2\u4eba\u6578\u9650\u5236\uff1a",l.descriptionShort.GuestMin," -",l.descriptionShort.GuestMax," \u4eba",Object(v.jsx)("br",{}),"\u5e8a\u578b\uff1a",l.descriptionShort.Bed,Object(v.jsx)("br",{}),"\u885b\u6d74\u6578\u91cf\uff1a",l.descriptionShort["Private-Bath"]," \u9593",Object(v.jsx)("br",{}),"\u623f\u9593\u5927\u5c0f\uff1a",l.descriptionShort.Footage," \u5e73\u65b9\u516c\u5c3a"]}),Object(v.jsx)("div",{className:Ft("description"),children:l.description}),Object(v.jsxs)("div",{className:Ft("divider"),children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]}),Object(v.jsxs)("div",{className:Ft("checkInAndOut"),children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Check In"}),Object(v.jsxs)("span",{children:[l.checkInAndOut.checkInEarly," -",l.checkInAndOut.checkInLate]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Check Out"}),Object(v.jsxs)("span",{children:[l.checkInAndOut.checkOut," "]})]})]}),Object(v.jsx)(lt,{amenitiesState:l.amenities})]}),Object(v.jsxs)("div",{className:Ft("room-price"),children:[Object(v.jsxs)("span",{className:Ft("normal-day"),children:["NT.",l.normalDayPrice]}),Object(v.jsx)("span",{children:"\u5e73\u65e5(\u4e00\uff5e\u56db)"}),Object(v.jsxs)("span",{className:Ft("holiday-day"),children:["NT.",l.holidayPrice]}),Object(v.jsx)("span",{children:"\u5047\u65e5(\u4e94\uff5e\u65e5)"})]}),Object(v.jsx)(Mt,{price:{normalDay:l.normalDayPrice,holiday:l.holidayPrice},roomId:l.id,booking:s})]})]})}function Bt(){return Object(v.jsx)(zt,{})}var Yt=n(138),Zt=n.n(Yt),Vt=(n(197),n(234)),Ht=n(233),Gt=n(232);n(198);function Wt(e){var t=e.dateValue,n=e.type,r=e.onClickAction,i=Object(a.useContext)(kt).bookingRange,c="endDate"===n?Object(yt.default)(t.startDate,1):Object(yt.default)(new Date,1);return Object(v.jsx)(xt.Calendar,{onChange:function(e){r(n,e)},scroll:{enabled:!0},showDateDisplay:!1,color:"#747474",showMonthAndYearPickers:!1,date:t[n],minDate:c,disabledDates:i})}var Lt=d.a.bind(Zt.a),Tt="startDate",Ut="endDate";function Jt(e,t){switch(t.type){case Tt:return wt()(t.payload).diff(e.endDate,"day")>-1?{startDate:t.payload,endDate:wt()(t.payload).add(1,"day").toDate()}:Object(x.a)(Object(x.a)({},e),{},{startDate:t.payload});case Ut:return Object(x.a)(Object(x.a)({},e),{},{endDate:t.payload});default:return e}}var Kt,Xt,Qt,qt,$t,en,tn,nn,an,rn,cn,ln,on,sn,dn,bn,jn=n(139),un=n.n(jn),fn=["title","titleId"];function mn(){return(mn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function pn(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function On(e,t){var n=e.title,r=e.titleId,i=pn(e,fn);return a.createElement("svg",mn({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"510px",height:"510px",fill:"#ade8c6",viewBox:"0 0 510 510",style:{enableBackground:"new 0 0 510 510"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,Kt||(Kt=a.createElement("g",null,a.createElement("g",{id:"check-circle-outline"},a.createElement("path",{d:"M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204 S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255 s114.75,255,255,255s255-114.75,255-255H459z"})))),Xt||(Xt=a.createElement("g",null)),Qt||(Qt=a.createElement("g",null)),qt||(qt=a.createElement("g",null)),$t||($t=a.createElement("g",null)),en||(en=a.createElement("g",null)),tn||(tn=a.createElement("g",null)),nn||(nn=a.createElement("g",null)),an||(an=a.createElement("g",null)),rn||(rn=a.createElement("g",null)),cn||(cn=a.createElement("g",null)),ln||(ln=a.createElement("g",null)),on||(on=a.createElement("g",null)),sn||(sn=a.createElement("g",null)),dn||(dn=a.createElement("g",null)),bn||(bn=a.createElement("g",null)))}var hn=a.forwardRef(On),gn=(n.p,d.a.bind(un.a));var yn=n(140),xn=n.n(yn),vn=d.a.bind(xn.a);var _n={BookingDialog:function(){var e=Object(a.useContext)(_),t=e.dialogState,n=e.dialogDispatch,r=t.info,i=r.dateRange,c=r.price,l=r.roomId,s=C(O).getApiResult,d=Object(a.useRef)(),b=Object(a.useRef)(),j=Object(a.useState)(null),u=Object(o.a)(j,2),f=u[0],m=u[1],p=Object(a.useState)(!1),h=Object(o.a)(p,2),g=h[0],y=h[1],w=Object(a.useState)({open:!1,type:Tt}),k=Object(o.a)(w,2),N=k[0],D=k[1],S=Object(a.useReducer)(Jt,{startDate:i.startDate,endDate:0===wt()(i.startDate).diff(i.endDate)?wt()(i.startDate).add(1,"day").toDate():i.endDate}),R=Object(o.a)(S,2),I=R[0],M=R[1],P=Object(a.useMemo)((function(){return function(e){for(var t=[],n=[],a=wt()(e.startDate),r=wt()(e.endDate).diff(a,"day"),i=0;i<r;i++)t.push(a.add(i,"day"));for(var c=0;c<=r;c++)n.push(a.add(c,"day").format("YYYY-MM-DD"));var l=t.filter((function(e){return e.day()>=0&&e.day()<5})).length;return{normalDay:l,holiday:t.length-l,dateData:n}}(I)}),[I]),F=Object(a.useState)({name:!1,tel:!1}),z=Object(o.a)(F,2),B=z[0],Y=z[1],Z=P.normalDay*c.normalDay+P.holiday*c.holiday;return g?Object(v.jsx)(Gt.a,{open:!0,className:"loading",children:Object(v.jsx)("div",{children:Object(v.jsx)(V,{})})}):Object(v.jsxs)(Ht.a,{open:!0,onClose:function(){return n({type:E})},"aria-labelledby":"form-dialog-title",className:"booking-dialog",children:[Object(v.jsx)("div",{className:Lt("title"),children:Object(v.jsx)("h2",{children:"\u9810\u7d04\u6642\u6bb5"})}),Object(v.jsxs)("div",{className:Lt("divider"),children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]}),Object(v.jsxs)("label",{className:Lt("booking-info"),children:[Object(v.jsx)("span",{children:"\u59d3\u540d"}),Object(v.jsx)("input",{className:Lt({error:B.name}),type:"text",id:"name",ref:d,onChange:function(){return Y(Object(x.a)(Object(x.a)({},B),{},{name:!1}))}})]}),Object(v.jsxs)("label",{className:Lt("booking-info"),children:[Object(v.jsx)("span",{children:"\u96fb\u8a71"}),Object(v.jsx)("input",{className:Lt({error:B.tel}),type:"text",id:"phone",ref:b,onChange:function(){return Y(Object(x.a)(Object(x.a)({},B),{},{tel:!1}))}})]}),Object(v.jsxs)("label",{className:Lt("booking-info"),children:[Object(v.jsx)("span",{children:"\u9810\u7d04\u8d77\u8a16"}),Object(v.jsxs)("div",{className:Lt("time-btn"),children:[Object(v.jsx)("input",{type:"button",id:"startDate",defaultValue:wt()(I.startDate).format("YYYY/MM/DD"),onClick:function(e){D({open:!0,type:Tt}),m(e.currentTarget)}}),"~",Object(v.jsx)("input",{type:"button",id:"endDate",defaultValue:wt()(I.endDate).format("YYYY/MM/DD"),onClick:function(e){D({open:!0,type:Ut}),m(e.currentTarget)}})]})]}),Object(v.jsxs)("div",{className:Lt("date-detail"),children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"\u5e73\u65e5\u6642\u6bb5"}),Object(v.jsxs)("span",{children:[P.normalDay,"\u591c"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"\u5047\u65e5\u6642\u6bb5"}),Object(v.jsxs)("span",{children:[P.holiday,"\u591c"]})]})]}),Object(v.jsx)("div",{className:Lt("total-price"),children:Object(v.jsxs)("span",{children:["NT. ",Z]})}),Object(v.jsxs)("div",{className:Lt("booking-btn"),children:[Object(v.jsx)("button",{className:Lt("cancel"),onClick:function(){return n({type:E})},children:"\u53d6\u6d88"}),Object(v.jsx)("button",{className:Lt("confirm"),onClick:function(){var e=d.current.value.trim(),t=b.current.value.trim();if(e&&t){var a={name:e,tel:t,date:P.dateData};y(!0),s(l,a).then((function(e){e&&n({type:A,payload:e.data.booking})}))}else Y({name:Boolean(!e),tel:Boolean(!t)})},children:"\u78ba\u5b9a\u9810\u5b9a"})]}),Object(v.jsx)(Vt.a,{anchorEl:f,open:N.open,onClose:function(){return D(Object(x.a)(Object(x.a)({},N),{},{open:!1}))},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},transitionDuration:100,children:Object(v.jsx)(Wt,{dateValue:I,type:N.type,onClickAction:function(e,t){M({type:e,payload:t}),D(Object(x.a)(Object(x.a)({},N),{},{open:!1}))}})})]})},SuccessDialog:function(){var e=Object(a.useContext)(_),t=e.dialogState,n=e.dialogDispatch,r=Object(a.useContext)(kt).bookingRangeDispatch,i=function(){n({type:E}),r({type:Et,payload:t.info})};return Object(v.jsxs)(Ht.a,{open:!0,onClose:i,"aria-labelledby":"form-dialog-title",className:"success-dialog",children:[Object(v.jsx)("div",{className:gn("title"),children:Object(v.jsx)("h2",{children:"\u9810\u7d04\u6210\u529f"})}),Object(v.jsxs)("div",{className:gn("divider"),children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]}),Object(v.jsx)(hn,{className:gn("tick")}),Object(v.jsx)("button",{className:gn("back-btn"),onClick:i,children:"\u56de\u9801\u9762"})]})},ErrorDialog:function(){var e=Object(a.useContext)(_),t=e.dialogState,n=e.dialogDispatch;return Object(v.jsxs)(Ht.a,{open:!0,onClose:function(){return n({type:E})},"aria-labelledby":"form-dialog-title",className:"error-dialog",children:[Object(v.jsx)("div",{className:vn("message"),children:t.info}),Object(v.jsx)("button",{className:vn("back-btn"),onClick:function(){return n({type:E})},children:"\u8fd4\u56de"})]})}};function wn(e){var t=e.dialogState.dialogName;return r.a.createElement(_n[t])}var kn=function(){var e=Object(a.useContext)(_).dialogState;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(Pe.a,{children:Object(v.jsxs)(Pt.c,{children:[Object(v.jsx)(Pt.a,{path:"/",exact:!0,component:Le}),Object(v.jsx)(Pt.a,{path:"/:id",exact:!0,component:Bt})]})}),e.state&&Object(v.jsx)(wn,{dialogState:e})]})},An=n(229),Nn=Object(An.a)();c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(z.a,{theme:Nn,children:Object(v.jsx)(Ct,{children:Object(v.jsx)(S,{children:Object(v.jsx)(kn,{})})})})}),document.getElementById("root")),l()}},[[199,1,2]]]);
//# sourceMappingURL=main.3bfd9266.chunk.js.map