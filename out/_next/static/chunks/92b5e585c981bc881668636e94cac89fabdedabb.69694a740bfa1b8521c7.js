(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{BGYt:function(e,r,t){"use strict";var o=t("vOnD"),a=t("za5s"),i=t("X4gC"),n=Object(o.c)(i.a).withConfig({displayName:"FlexBox",componentId:"vldgmo-0"})(["display:flex;flex-direction:row;"," "," "," "," ",""],a.f,a.b,a.e,a.i,a.a);r.a=n},EwLn:function(e,r,t){"use strict";t.d(r,"d",(function(){return s})),t.d(r,"b",(function(){return p})),t.d(r,"c",(function(){return f})),t.d(r,"e",(function(){return g})),t.d(r,"a",(function(){return b}));var o=t("Qetd"),a=t.n(o),i=function(e,r){var t=a()({},e,r);for(var o in e){var i;e[o]&&"object"===typeof r[o]&&a()(t,((i={})[o]=a()(e[o],r[o]),i))}return t},n={breakpoints:[40,52,64].map((function(e){return e+"em"}))},d=function(e){return"@media screen and (min-width: "+e+")"},c=function(e,r){return s(r,e,e)},s=function(e,r,t,o,a){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:a;return e===a?t:e},p=function e(r){var t={},o=function(e){var o={},c=!1,p=e.theme&&e.theme.disableStyledSystemCache;for(var f in e)if(r[f]){var g=r[f],b=e[f],m=s(e.theme,g.scale,g.defaults);if("object"!==typeof b)a()(o,g(b,m,e));else{if(t.breakpoints=!p&&t.breakpoints||s(e.theme,"breakpoints",n.breakpoints),Array.isArray(b)){t.media=!p&&t.media||[null].concat(t.breakpoints.map(d)),o=i(o,l(t.media,g,m,b,e));continue}null!==b&&(o=i(o,u(t.breakpoints,g,m,b,e)),c=!0)}}return c&&(o=function(e){var r={};return Object.keys(e).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(t){r[t]=e[t]})),r}(o)),o};o.config=r,o.propNames=Object.keys(r),o.cache=t;var c=Object.keys(r).filter((function(e){return"config"!==e}));return c.length>1&&c.forEach((function(t){var a;o[t]=e(((a={})[t]=r[t],a))})),o},l=function(e,r,t,o,i){var n={};return o.slice(0,e.length).forEach((function(o,d){var c,s=e[d],p=r(o,t,i);s?a()(n,((c={})[s]=a()({},n[s],p),c)):a()(n,p)})),n},u=function(e,r,t,o,i){var n={};for(var c in o){var s=e[c],p=r(o[c],t,i);if(s){var l,u=d(s);a()(n,((l={})[u]=a()({},n[u],p),l))}else a()(n,p)}return n},f=function(e){var r=e.properties,t=e.property,o=e.scale,a=e.transform,i=void 0===a?c:a,n=e.defaultScale;r=r||[t];var d=function(e,t,o){var a={},n=i(e,t,o);if(null!==n)return r.forEach((function(e){a[e]=n})),a};return d.scale=o,d.defaults=n,d},g=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var o=e[t];r[t]=!0!==o?"function"!==typeof o?f(o):o:f({property:t,scale:t})})),p(r)},b=function(){for(var e={},r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];t.forEach((function(r){r&&r.config&&a()(e,r.config)}));var i=p(e);return i}},OJSm:function(e,r,t){"use strict";function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var a=function(e,r,t,o,a){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:a;return e===a?t:e},i=[40,52,64].map((function(e){return e+"em"})),n={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},d={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},c={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},s={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},p=function(e,r){if("number"!==typeof r||r>=0)return a(e,r,r);var t=Math.abs(r),o=a(e,t,t);return"string"===typeof o?"-"+o:-1*o},l=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return o({},e,((t={})[r]=p,t))}),{});r.a=function e(r){return function(t){void 0===t&&(t={});var p=o({},n,{},t.theme||t),u={},f=function(e){return function(r){var t={},o=a(r,"breakpoints",i),n=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var d in e){var c="function"===typeof e[d]?e[d](r):e[d];if(null!=c)if(Array.isArray(c))for(var s=0;s<c.slice(0,n.length).length;s++){var p=n[s];p?(t[p]=t[p]||{},null!=c[s]&&(t[p][d]=c[s])):t[d]=c[s]}else t[d]=c}return t}}("function"===typeof r?r(p):r)(p);for(var g in f){var b=f[g],m="function"===typeof b?b(p):b;if("variant"!==g)if(m&&"object"===typeof m)u[g]=e(m)(p);else{var h=a(d,g,g),y=a(s,h),v=a(p,y,a(p,h,{})),S=a(l,h,a)(v,m,m);if(c[h])for(var x=c[h],R=0;R<x.length;R++)u[x[R]]=S;else u[h]=S}else u=o({},u,{},e(a(p,m))(p))}return u}}},X4gC:function(e,r,t){"use strict";var o=t("vOnD"),a=t("za5s"),i=o.c.div.withConfig({displayName:"Box",componentId:"sc-15jsbqj-0"})((function(e){var r=e.shadow,t=e.cursor,o=e.transition;return{boxShadow:e.theme.shadows[r],cursor:t,transition:o}}),Object(a.c)(a.f,a.i,a.b,a.g,a.e,a.d,a.a,a.j));i.defaultProps={shadow:0,cursor:"unset"},r.a=i},YFqc:function(e,r,t){e.exports=t("cTJO")},cTJO:function(e,r,t){"use strict";var o=t("zoAU"),a=t("7KCV");r.__esModule=!0,r.default=void 0;var i=a(t("q1tI")),n=t("elyg"),d=t("nOHt"),c=t("vNVm"),s={};function p(e,r,t,o){if(e&&(0,n.isLocalURL)(r)){e.prefetch(r,t,o).catch((function(e){0}));var a=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[r+"%"+t+(a?"%"+a:"")]=!0}}var l=function(e){var r=!1!==e.prefetch,t=(0,d.useRouter)(),a=t&&t.pathname||"/",l=i.default.useMemo((function(){var r=(0,n.resolveHref)(a,e.href,!0),t=o(r,2),i=t[0],d=t[1];return{href:i,as:e.as?(0,n.resolveHref)(a,e.as):d||i}}),[a,e.href,e.as]),u=l.href,f=l.as,g=e.children,b=e.replace,m=e.shallow,h=e.scroll,y=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var v=i.Children.only(g),S=v&&"object"===typeof v&&v.ref,x=(0,c.useIntersection)({rootMargin:"200px"}),R=o(x,2),w=R[0],C=R[1],L=i.default.useCallback((function(e){w(e),S&&("function"===typeof S?S(e):"object"===typeof S&&(S.current=e))}),[S,w]);(0,i.useEffect)((function(){var e=C&&r&&(0,n.isLocalURL)(u),o="undefined"!==typeof y?y:t&&t.locale,a=s[u+"%"+f+(o?"%"+o:"")];e&&!a&&p(t,u,f,{locale:o})}),[f,u,C,y,r,t]);var k={ref:L,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,r,t,o,a,i,d,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,n.isLocalURL)(t))&&(e.preventDefault(),null==d&&(d=o.indexOf("#")<0),r[a?"replace":"push"](t,o,{shallow:i,locale:c,scroll:d}))}(e,t,u,f,b,m,h,y)},onMouseEnter:function(e){(0,n.isLocalURL)(u)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),p(t,u,f,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var T="undefined"!==typeof y?y:t&&t.locale,j=t&&t.isLocaleDomain&&(0,n.getDomainLocale)(f,T,t&&t.locales,t&&t.domainLocales);k.href=j||(0,n.addBasePath)((0,n.addLocale)(f,T,t&&t.defaultLocale))}return i.default.cloneElement(v,k)};r.default=l},pvl1:function(e,r,t){"use strict";var o=t("OJSm"),a=t("vOnD"),i=t("za5s"),n=a.c.button.withConfig({displayName:"Button",componentId:"l2616d-0"})((function(e){var r=e.color,t=e.fullwidth;return Object(o.a)({display:"flex",width:t?"100%":"unset",justifyContent:"center",alignItems:"center",outline:"none",border:"none",cursor:"pointer",padding:"11px 1.5rem",fontSize:"1rem",fontWeight:600,color:r?"".concat(r,".main"):"body.text",background:"transparent",transition:"all 150ms ease-in-out",lineHeight:1,"&:focus":{boxShadow:3},"&:disabled":{bg:"text.disabled",color:"text.hint",borderColor:"text.disabled",cursor:"unset","svg path":{fill:"text.hint"},"svg polyline, svg polygon":{color:"text.hint"}}})}),(function(e){var r,t,o,a,n,d,c,s,p=e.theme,l=e.color;return Object(i.k)({prop:"variant",variants:{text:{border:"none",color:"".concat(l,".main"),"&:hover":{bg:l?"".concat(l,".light"):"gray.100"}},outlined:{padding:"10px 16px",color:"".concat(l,".main"),border:"1px solid",borderColor:l?"".concat(l,".main"):"text.disabled","&:enabled svg path":{fill:l?"".concat(null===(r=p.colors[l])||void 0===r?void 0:r.main," !important"):"text.primary"},"&:enabled svg polyline, svg polygon":{color:l?"".concat(null===(t=p.colors[l])||void 0===t?void 0:t.main," !important"):"text.primary"},"&:focus":{boxShadow:"0px 1px 4px 0px ".concat(null===(o=p.colors[l])||void 0===o?void 0:o.light)},"&:hover:enabled":{bg:l&&"".concat(l,".main"),borderColor:l&&"".concat(l,".main"),color:l&&"".concat(l,".text"),"svg path":{fill:l?"".concat(null===(a=p.colors[l])||void 0===a?void 0:a.text," !important"):"text.primary"},"svg polyline, svg polygon":{color:l?"".concat(null===(n=p.colors[l])||void 0===n?void 0:n.text," !important"):"text.primary"}}},contained:{border:"none",color:"".concat(l,".text"),bg:"".concat(l,".main"),"&:focus":{boxShadow:"0px 1px 4px 0px ".concat(null===(d=p.colors[l])||void 0===d?void 0:d.light)},"&:enabled svg path":{fill:l?"".concat(null===(c=p.colors[l])||void 0===c?void 0:c.text," !important"):"text.primary"},"&:enabled svg polyline, svg polygon":{color:l?"".concat(null===(s=p.colors[l])||void 0===s?void 0:s.text," !important"):"text.primary"}}}})}),Object(i.k)({prop:"size",variants:{large:{height:"56px",px:30},medium:{height:"48px",px:30},small:{height:"40px",fontSize:14}}}),Object(i.c)(i.b,i.f,i.i,i.a,i.h));n.defaultProps={size:"small",borderRadius:5},r.a=n},vNVm:function(e,r,t){"use strict";var o=t("zoAU");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!n,c=(0,a.useRef)(),s=(0,a.useState)(!1),p=o(s,2),l=p[0],u=p[1],f=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||l||e&&e.tagName&&(c.current=function(e,r,t){var o=function(e){var r=e.rootMargin||"",t=d.get(r);if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return d.set(r,t={id:r,observer:a,elements:o}),t}(t),a=o.id,i=o.observer,n=o.elements;return n.set(e,r),i.observe(e),function(){n.delete(e),i.unobserve(e),0===n.size&&(i.disconnect(),d.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:r}))}),[t,r,l]);return(0,a.useEffect)((function(){if(!n&&!l){var e=(0,i.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[l]),[f,l]};var a=t("q1tI"),i=t("0G5g"),n="undefined"!==typeof IntersectionObserver;var d=new Map},za5s:function(e,r,t){"use strict";t.d(r,"c",(function(){return o.a})),t.d(r,"i",(function(){return I})),t.d(r,"b",(function(){return c})),t.d(r,"f",(function(){return i})),t.d(r,"j",(function(){return l})),t.d(r,"e",(function(){return f})),t.d(r,"a",(function(){return v})),t.d(r,"g",(function(){return L})),t.d(r,"h",(function(){return A})),t.d(r,"k",(function(){return H})),t.d(r,"d",(function(){return G}));var o=t("EwLn"),a={width:{property:"width",scale:"sizes",transform:function(e,r){return Object(o.d)(r,e,!function(e){return"number"===typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0},i=Object(o.e)(a),n=i,d={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};d.bg=d.backgroundColor;var c=Object(o.e)(d),s=c,p={fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0},l=Object(o.e)(p),u=l,f=Object(o.e)({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),g=f,b={space:[0,4,8,16,32,64,128,256,512]},m={gridGap:{property:"gridGap",scale:"space",defaultScale:b.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:b.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:b.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},h=Object(o.e)(m),y={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};y.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},y.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},y.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},y.borderBottomColor={property:"borderBottomColor",scale:"colors"},y.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},y.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},y.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},y.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},y.borderLeftColor={property:"borderLeftColor",scale:"colors"},y.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},y.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},y.borderRightColor={property:"borderRightColor",scale:"colors"},y.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var v=Object(o.e)(y),S=v,x={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};x.bgImage=x.backgroundImage,x.bgSize=x.backgroundSize,x.bgPosition=x.backgroundPosition,x.bgRepeat=x.backgroundRepeat;var R=Object(o.e)(x),w={space:[0,4,8,16,32,64,128,256,512]},C={position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:w.space},right:{property:"right",scale:"space",defaultScale:w.space},bottom:{property:"bottom",scale:"space",defaultScale:w.space},left:{property:"left",scale:"space",defaultScale:w.space}},L=Object(o.e)(C),k=L,T={space:[0,4,8,16,32,64,128,256,512]},j=function(e){return"number"===typeof e&&!isNaN(e)},z=function(e,r){if(!j(e))return Object(o.d)(r,e,e);var t=e<0,a=Math.abs(e),i=Object(o.d)(r,a,a);return j(i)?i*(t?-1:1):t?"-"+i:i},B={};B.margin={margin:{property:"margin",scale:"space",transform:z,defaultScale:T.space},marginTop:{property:"marginTop",scale:"space",transform:z,defaultScale:T.space},marginRight:{property:"marginRight",scale:"space",transform:z,defaultScale:T.space},marginBottom:{property:"marginBottom",scale:"space",transform:z,defaultScale:T.space},marginLeft:{property:"marginLeft",scale:"space",transform:z,defaultScale:T.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:z,defaultScale:T.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:z,defaultScale:T.space}},B.margin.m=B.margin.margin,B.margin.mt=B.margin.marginTop,B.margin.mr=B.margin.marginRight,B.margin.mb=B.margin.marginBottom,B.margin.ml=B.margin.marginLeft,B.margin.mx=B.margin.marginX,B.margin.my=B.margin.marginY,B.padding={padding:{property:"padding",scale:"space",defaultScale:T.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:T.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:T.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:T.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:T.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:T.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:T.space}},B.padding.p=B.padding.padding,B.padding.pt=B.padding.paddingTop,B.padding.pr=B.padding.paddingRight,B.padding.pb=B.padding.paddingBottom,B.padding.pl=B.padding.paddingLeft,B.padding.px=B.padding.paddingX,B.padding.py=B.padding.paddingY;var O=Object(o.e)(B.margin),W=Object(o.e)(B.padding),I=Object(o.a)(O,W),A=Object(o.e)({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}}),E=t("OJSm"),H=function(e){var r,t,a=e.scale,i=e.prop,n=void 0===i?"variant":i,d=e.variants,c=void 0===d?{}:d,s=e.key;(t=Object.keys(c).length?function(e,r,t){return Object(E.a)(Object(o.d)(r,e,null))(t.theme)}:function(e,r){return Object(o.d)(r,e,null)}).scale=a||s,t.defaults=c;var p=((r={})[n]=t,r);return Object(o.b)(p)},G=(H({key:"buttons"}),H({key:"textStyles",prop:"textStyle"}),H({key:"colorStyles",prop:"colors"}),n.width,n.height,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight,n.size,n.verticalAlign,n.display,n.overflow,n.overflowX,n.overflowY,s.opacity,u.fontSize,u.fontFamily,u.fontWeight,u.lineHeight,u.textAlign,u.fontStyle,u.letterSpacing,g.alignItems,g.alignContent,g.justifyItems,g.justifyContent,g.flexWrap,g.flexDirection,g.flex);g.flexGrow,g.flexShrink,g.flexBasis,g.justifySelf,g.alignSelf,g.order,h.gridGap,h.gridColumnGap,h.gridRowGap,h.gridColumn,h.gridRow,h.gridAutoFlow,h.gridAutoColumns,h.gridAutoRows,h.gridTemplateColumns,h.gridTemplateRows,h.gridTemplateAreas,h.gridArea,S.borderWidth,S.borderStyle,S.borderColor,S.borderTop,S.borderRight,S.borderBottom,S.borderLeft,S.borderRadius,R.backgroundImage,R.backgroundSize,R.backgroundPosition,R.backgroundRepeat,k.zIndex,k.top,k.right,k.bottom,k.left}}]);