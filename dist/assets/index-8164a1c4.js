(function(){const K=document.createElement("link").relList;if(K&&K.supports&&K.supports("modulepreload"))return;for(const te of document.querySelectorAll('link[rel="modulepreload"]'))J(te);new MutationObserver(te=>{for(const ie of te)if(ie.type==="childList")for(const ae of ie.addedNodes)ae.tagName==="LINK"&&ae.rel==="modulepreload"&&J(ae)}).observe(document,{childList:!0,subtree:!0});function Y(te){const ie={};return te.integrity&&(ie.integrity=te.integrity),te.referrerpolicy&&(ie.referrerPolicy=te.referrerpolicy),te.crossorigin==="use-credentials"?ie.credentials="include":te.crossorigin==="anonymous"?ie.credentials="omit":ie.credentials="same-origin",ie}function J(te){if(te.ep)return;te.ep=!0;const ie=Y(te);fetch(te.href,ie)}})();const index="";/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lumo extends HTMLElement{static get version(){return"23.3.8"}}customElements.define("vaadin-lumo-styles",Lumo);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$4=window,e$6=t$4.ShadowRoot&&(t$4.ShadyCSS===void 0||t$4.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$4=Symbol(),n$6=new WeakMap;let o$5=class{constructor(K,Y,J){if(this._$cssResult$=!0,J!==s$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=K,this.t=Y}get styleSheet(){let K=this.o;const Y=this.t;if(e$6&&K===void 0){const J=Y!==void 0&&Y.length===1;J&&(K=n$6.get(Y)),K===void 0&&((this.o=K=new CSSStyleSheet).replaceSync(this.cssText),J&&n$6.set(Y,K))}return K}toString(){return this.cssText}};const r$3=ee=>new o$5(typeof ee=="string"?ee:ee+"",void 0,s$4),i$5=(ee,...K)=>{const Y=ee.length===1?ee[0]:K.reduce((J,te,ie)=>J+(ae=>{if(ae._$cssResult$===!0)return ae.cssText;if(typeof ae=="number")return ae;throw Error("Value passed to 'css' function must be a 'css' function result: "+ae+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(te)+ee[ie+1],ee[0]);return new o$5(Y,ee,s$4)},S$2=(ee,K)=>{e$6?ee.adoptedStyleSheets=K.map(Y=>Y instanceof CSSStyleSheet?Y:Y.styleSheet):K.forEach(Y=>{const J=document.createElement("style"),te=t$4.litNonce;te!==void 0&&J.setAttribute("nonce",te),J.textContent=Y.cssText,ee.appendChild(J)})},c$2=e$6?ee=>ee:ee=>ee instanceof CSSStyleSheet?(K=>{let Y="";for(const J of K.cssRules)Y+=J.cssText;return r$3(Y)})(ee):ee;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$3;const e$5=window,r$2=e$5.trustedTypes,h$2=r$2?r$2.emptyScript:"",o$4=e$5.reactiveElementPolyfillSupport,n$5={toAttribute(ee,K){switch(K){case Boolean:ee=ee?h$2:null;break;case Object:case Array:ee=ee==null?ee:JSON.stringify(ee)}return ee},fromAttribute(ee,K){let Y=ee;switch(K){case Boolean:Y=ee!==null;break;case Number:Y=ee===null?null:Number(ee);break;case Object:case Array:try{Y=JSON.parse(ee)}catch{Y=null}}return Y}},a$2=(ee,K)=>K!==ee&&(K==K||ee==ee),l$3={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$2};let d$2=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(K){var Y;this.finalize(),((Y=this.h)!==null&&Y!==void 0?Y:this.h=[]).push(K)}static get observedAttributes(){this.finalize();const K=[];return this.elementProperties.forEach((Y,J)=>{const te=this._$Ep(J,Y);te!==void 0&&(this._$Ev.set(te,J),K.push(te))}),K}static createProperty(K,Y=l$3){if(Y.state&&(Y.attribute=!1),this.finalize(),this.elementProperties.set(K,Y),!Y.noAccessor&&!this.prototype.hasOwnProperty(K)){const J=typeof K=="symbol"?Symbol():"__"+K,te=this.getPropertyDescriptor(K,J,Y);te!==void 0&&Object.defineProperty(this.prototype,K,te)}}static getPropertyDescriptor(K,Y,J){return{get(){return this[Y]},set(te){const ie=this[K];this[Y]=te,this.requestUpdate(K,ie,J)},configurable:!0,enumerable:!0}}static getPropertyOptions(K){return this.elementProperties.get(K)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const K=Object.getPrototypeOf(this);if(K.finalize(),K.h!==void 0&&(this.h=[...K.h]),this.elementProperties=new Map(K.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const Y=this.properties,J=[...Object.getOwnPropertyNames(Y),...Object.getOwnPropertySymbols(Y)];for(const te of J)this.createProperty(te,Y[te])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(K){const Y=[];if(Array.isArray(K)){const J=new Set(K.flat(1/0).reverse());for(const te of J)Y.unshift(c$2(te))}else K!==void 0&&Y.push(c$2(K));return Y}static _$Ep(K,Y){const J=Y.attribute;return J===!1?void 0:typeof J=="string"?J:typeof K=="string"?K.toLowerCase():void 0}u(){var K;this._$E_=new Promise(Y=>this.enableUpdating=Y),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(K=this.constructor.h)===null||K===void 0||K.forEach(Y=>Y(this))}addController(K){var Y,J;((Y=this._$ES)!==null&&Y!==void 0?Y:this._$ES=[]).push(K),this.renderRoot!==void 0&&this.isConnected&&((J=K.hostConnected)===null||J===void 0||J.call(K))}removeController(K){var Y;(Y=this._$ES)===null||Y===void 0||Y.splice(this._$ES.indexOf(K)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((K,Y)=>{this.hasOwnProperty(Y)&&(this._$Ei.set(Y,this[Y]),delete this[Y])})}createRenderRoot(){var K;const Y=(K=this.shadowRoot)!==null&&K!==void 0?K:this.attachShadow(this.constructor.shadowRootOptions);return S$2(Y,this.constructor.elementStyles),Y}connectedCallback(){var K;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(K=this._$ES)===null||K===void 0||K.forEach(Y=>{var J;return(J=Y.hostConnected)===null||J===void 0?void 0:J.call(Y)})}enableUpdating(K){}disconnectedCallback(){var K;(K=this._$ES)===null||K===void 0||K.forEach(Y=>{var J;return(J=Y.hostDisconnected)===null||J===void 0?void 0:J.call(Y)})}attributeChangedCallback(K,Y,J){this._$AK(K,J)}_$EO(K,Y,J=l$3){var te;const ie=this.constructor._$Ep(K,J);if(ie!==void 0&&J.reflect===!0){const ae=(((te=J.converter)===null||te===void 0?void 0:te.toAttribute)!==void 0?J.converter:n$5).toAttribute(Y,J.type);this._$El=K,ae==null?this.removeAttribute(ie):this.setAttribute(ie,ae),this._$El=null}}_$AK(K,Y){var J;const te=this.constructor,ie=te._$Ev.get(K);if(ie!==void 0&&this._$El!==ie){const ae=te.getPropertyOptions(ie),re=typeof ae.converter=="function"?{fromAttribute:ae.converter}:((J=ae.converter)===null||J===void 0?void 0:J.fromAttribute)!==void 0?ae.converter:n$5;this._$El=ie,this[ie]=re.fromAttribute(Y,ae.type),this._$El=null}}requestUpdate(K,Y,J){let te=!0;K!==void 0&&(((J=J||this.constructor.getPropertyOptions(K)).hasChanged||a$2)(this[K],Y)?(this._$AL.has(K)||this._$AL.set(K,Y),J.reflect===!0&&this._$El!==K&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(K,J))):te=!1),!this.isUpdatePending&&te&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(Y){Promise.reject(Y)}const K=this.scheduleUpdate();return K!=null&&await K,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var K;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((te,ie)=>this[ie]=te),this._$Ei=void 0);let Y=!1;const J=this._$AL;try{Y=this.shouldUpdate(J),Y?(this.willUpdate(J),(K=this._$ES)===null||K===void 0||K.forEach(te=>{var ie;return(ie=te.hostUpdate)===null||ie===void 0?void 0:ie.call(te)}),this.update(J)):this._$Ek()}catch(te){throw Y=!1,this._$Ek(),te}Y&&this._$AE(J)}willUpdate(K){}_$AE(K){var Y;(Y=this._$ES)===null||Y===void 0||Y.forEach(J=>{var te;return(te=J.hostUpdated)===null||te===void 0?void 0:te.call(J)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(K)),this.updated(K)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(K){return!0}update(K){this._$EC!==void 0&&(this._$EC.forEach((Y,J)=>this._$EO(J,this[J],Y)),this._$EC=void 0),this._$Ek()}updated(K){}firstUpdated(K){}};d$2.finalized=!0,d$2.elementProperties=new Map,d$2.elementStyles=[],d$2.shadowRootOptions={mode:"open"},o$4==null||o$4({ReactiveElement:d$2}),((s$3=e$5.reactiveElementVersions)!==null&&s$3!==void 0?s$3:e$5.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$3;const i$4=window,s$2=i$4.trustedTypes,e$4=s$2?s$2.createPolicy("lit-html",{createHTML:ee=>ee}):void 0,o$3=`lit$${(Math.random()+"").slice(9)}$`,n$4="?"+o$3,l$2=`<${n$4}>`,h$1=document,r$1=(ee="")=>h$1.createComment(ee),d$1=ee=>ee===null||typeof ee!="object"&&typeof ee!="function",u$1=Array.isArray,c$1=ee=>u$1(ee)||typeof(ee==null?void 0:ee[Symbol.iterator])=="function",v$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a$1=/-->/g,f$1=/>/g,_$1=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),m$1=/'/g,p$1=/"/g,$=/^(?:script|style|textarea|title)$/i,g$1=ee=>(K,...Y)=>({_$litType$:ee,strings:K,values:Y}),y$1=g$1(1),w$1=g$1(2),x$1=Symbol.for("lit-noChange"),b$1=Symbol.for("lit-nothing"),T=new WeakMap,A$1=h$1.createTreeWalker(h$1,129,null,!1),E$1=(ee,K)=>{const Y=ee.length-1,J=[];let te,ie=K===2?"<svg>":"",ae=v$1;for(let se=0;se<Y;se++){const oe=ee[se];let ne,le,he=-1,de=0;for(;de<oe.length&&(ae.lastIndex=de,le=ae.exec(oe),le!==null);)de=ae.lastIndex,ae===v$1?le[1]==="!--"?ae=a$1:le[1]!==void 0?ae=f$1:le[2]!==void 0?($.test(le[2])&&(te=RegExp("</"+le[2],"g")),ae=_$1):le[3]!==void 0&&(ae=_$1):ae===_$1?le[0]===">"?(ae=te??v$1,he=-1):le[1]===void 0?he=-2:(he=ae.lastIndex-le[2].length,ne=le[1],ae=le[3]===void 0?_$1:le[3]==='"'?p$1:m$1):ae===p$1||ae===m$1?ae=_$1:ae===a$1||ae===f$1?ae=v$1:(ae=_$1,te=void 0);const ce=ae===_$1&&ee[se+1].startsWith("/>")?" ":"";ie+=ae===v$1?oe+l$2:he>=0?(J.push(ne),oe.slice(0,he)+"$lit$"+oe.slice(he)+o$3+ce):oe+o$3+(he===-2?(J.push(void 0),se):ce)}const re=ie+(ee[Y]||"<?>")+(K===2?"</svg>":"");if(!Array.isArray(ee)||!ee.hasOwnProperty("raw"))throw Error("invalid template strings array");return[e$4!==void 0?e$4.createHTML(re):re,J]};class C{constructor({strings:K,_$litType$:Y},J){let te;this.parts=[];let ie=0,ae=0;const re=K.length-1,se=this.parts,[oe,ne]=E$1(K,Y);if(this.el=C.createElement(oe,J),A$1.currentNode=this.el.content,Y===2){const le=this.el.content,he=le.firstChild;he.remove(),le.append(...he.childNodes)}for(;(te=A$1.nextNode())!==null&&se.length<re;){if(te.nodeType===1){if(te.hasAttributes()){const le=[];for(const he of te.getAttributeNames())if(he.endsWith("$lit$")||he.startsWith(o$3)){const de=ne[ae++];if(le.push(he),de!==void 0){const ce=te.getAttribute(de.toLowerCase()+"$lit$").split(o$3),pe=/([.?@])?(.*)/.exec(de);se.push({type:1,index:ie,name:pe[2],strings:ce,ctor:pe[1]==="."?M$1:pe[1]==="?"?k$1:pe[1]==="@"?H$1:S$1})}else se.push({type:6,index:ie})}for(const he of le)te.removeAttribute(he)}if($.test(te.tagName)){const le=te.textContent.split(o$3),he=le.length-1;if(he>0){te.textContent=s$2?s$2.emptyScript:"";for(let de=0;de<he;de++)te.append(le[de],r$1()),A$1.nextNode(),se.push({type:2,index:++ie});te.append(le[he],r$1())}}}else if(te.nodeType===8)if(te.data===n$4)se.push({type:2,index:ie});else{let le=-1;for(;(le=te.data.indexOf(o$3,le+1))!==-1;)se.push({type:7,index:ie}),le+=o$3.length-1}ie++}}static createElement(K,Y){const J=h$1.createElement("template");return J.innerHTML=K,J}}function P$1(ee,K,Y=ee,J){var te,ie,ae,re;if(K===x$1)return K;let se=J!==void 0?(te=Y._$Co)===null||te===void 0?void 0:te[J]:Y._$Cl;const oe=d$1(K)?void 0:K._$litDirective$;return(se==null?void 0:se.constructor)!==oe&&((ie=se==null?void 0:se._$AO)===null||ie===void 0||ie.call(se,!1),oe===void 0?se=void 0:(se=new oe(ee),se._$AT(ee,Y,J)),J!==void 0?((ae=(re=Y)._$Co)!==null&&ae!==void 0?ae:re._$Co=[])[J]=se:Y._$Cl=se),se!==void 0&&(K=P$1(ee,se._$AS(ee,K.values),se,J)),K}class V{constructor(K,Y){this.u=[],this._$AN=void 0,this._$AD=K,this._$AM=Y}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(K){var Y;const{el:{content:J},parts:te}=this._$AD,ie=((Y=K==null?void 0:K.creationScope)!==null&&Y!==void 0?Y:h$1).importNode(J,!0);A$1.currentNode=ie;let ae=A$1.nextNode(),re=0,se=0,oe=te[0];for(;oe!==void 0;){if(re===oe.index){let ne;oe.type===2?ne=new N$1(ae,ae.nextSibling,this,K):oe.type===1?ne=new oe.ctor(ae,oe.name,oe.strings,this,K):oe.type===6&&(ne=new I$1(ae,this,K)),this.u.push(ne),oe=te[++se]}re!==(oe==null?void 0:oe.index)&&(ae=A$1.nextNode(),re++)}return ie}p(K){let Y=0;for(const J of this.u)J!==void 0&&(J.strings!==void 0?(J._$AI(K,J,Y),Y+=J.strings.length-2):J._$AI(K[Y])),Y++}}let N$1=class Ee{constructor(K,Y,J,te){var ie;this.type=2,this._$AH=b$1,this._$AN=void 0,this._$AA=K,this._$AB=Y,this._$AM=J,this.options=te,this._$Cm=(ie=te==null?void 0:te.isConnected)===null||ie===void 0||ie}get _$AU(){var K,Y;return(Y=(K=this._$AM)===null||K===void 0?void 0:K._$AU)!==null&&Y!==void 0?Y:this._$Cm}get parentNode(){let K=this._$AA.parentNode;const Y=this._$AM;return Y!==void 0&&K.nodeType===11&&(K=Y.parentNode),K}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(K,Y=this){K=P$1(this,K,Y),d$1(K)?K===b$1||K==null||K===""?(this._$AH!==b$1&&this._$AR(),this._$AH=b$1):K!==this._$AH&&K!==x$1&&this.g(K):K._$litType$!==void 0?this.$(K):K.nodeType!==void 0?this.T(K):c$1(K)?this.k(K):this.g(K)}O(K,Y=this._$AB){return this._$AA.parentNode.insertBefore(K,Y)}T(K){this._$AH!==K&&(this._$AR(),this._$AH=this.O(K))}g(K){this._$AH!==b$1&&d$1(this._$AH)?this._$AA.nextSibling.data=K:this.T(h$1.createTextNode(K)),this._$AH=K}$(K){var Y;const{values:J,_$litType$:te}=K,ie=typeof te=="number"?this._$AC(K):(te.el===void 0&&(te.el=C.createElement(te.h,this.options)),te);if(((Y=this._$AH)===null||Y===void 0?void 0:Y._$AD)===ie)this._$AH.p(J);else{const ae=new V(ie,this),re=ae.v(this.options);ae.p(J),this.T(re),this._$AH=ae}}_$AC(K){let Y=T.get(K.strings);return Y===void 0&&T.set(K.strings,Y=new C(K)),Y}k(K){u$1(this._$AH)||(this._$AH=[],this._$AR());const Y=this._$AH;let J,te=0;for(const ie of K)te===Y.length?Y.push(J=new Ee(this.O(r$1()),this.O(r$1()),this,this.options)):J=Y[te],J._$AI(ie),te++;te<Y.length&&(this._$AR(J&&J._$AB.nextSibling,te),Y.length=te)}_$AR(K=this._$AA.nextSibling,Y){var J;for((J=this._$AP)===null||J===void 0||J.call(this,!1,!0,Y);K&&K!==this._$AB;){const te=K.nextSibling;K.remove(),K=te}}setConnected(K){var Y;this._$AM===void 0&&(this._$Cm=K,(Y=this._$AP)===null||Y===void 0||Y.call(this,K))}},S$1=class{constructor(K,Y,J,te,ie){this.type=1,this._$AH=b$1,this._$AN=void 0,this.element=K,this.name=Y,this._$AM=te,this.options=ie,J.length>2||J[0]!==""||J[1]!==""?(this._$AH=Array(J.length-1).fill(new String),this.strings=J):this._$AH=b$1}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(K,Y=this,J,te){const ie=this.strings;let ae=!1;if(ie===void 0)K=P$1(this,K,Y,0),ae=!d$1(K)||K!==this._$AH&&K!==x$1,ae&&(this._$AH=K);else{const re=K;let se,oe;for(K=ie[0],se=0;se<ie.length-1;se++)oe=P$1(this,re[J+se],Y,se),oe===x$1&&(oe=this._$AH[se]),ae||(ae=!d$1(oe)||oe!==this._$AH[se]),oe===b$1?K=b$1:K!==b$1&&(K+=(oe??"")+ie[se+1]),this._$AH[se]=oe}ae&&!te&&this.j(K)}j(K){K===b$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,K??"")}},M$1=class extends S$1{constructor(){super(...arguments),this.type=3}j(K){this.element[this.name]=K===b$1?void 0:K}};const R$1=s$2?s$2.emptyScript:"";let k$1=class extends S$1{constructor(){super(...arguments),this.type=4}j(K){K&&K!==b$1?this.element.setAttribute(this.name,R$1):this.element.removeAttribute(this.name)}},H$1=class extends S$1{constructor(K,Y,J,te,ie){super(K,Y,J,te,ie),this.type=5}_$AI(K,Y=this){var J;if((K=(J=P$1(this,K,Y,0))!==null&&J!==void 0?J:b$1)===x$1)return;const te=this._$AH,ie=K===b$1&&te!==b$1||K.capture!==te.capture||K.once!==te.once||K.passive!==te.passive,ae=K!==b$1&&(te===b$1||ie);ie&&this.element.removeEventListener(this.name,this,te),ae&&this.element.addEventListener(this.name,this,K),this._$AH=K}handleEvent(K){var Y,J;typeof this._$AH=="function"?this._$AH.call((J=(Y=this.options)===null||Y===void 0?void 0:Y.host)!==null&&J!==void 0?J:this.element,K):this._$AH.handleEvent(K)}},I$1=class{constructor(K,Y,J){this.element=K,this.type=6,this._$AN=void 0,this._$AM=Y,this.options=J}get _$AU(){return this._$AM._$AU}_$AI(K){P$1(this,K)}};const z$1=i$4.litHtmlPolyfillSupport;z$1==null||z$1(C,N$1),((t$3=i$4.litHtmlVersions)!==null&&t$3!==void 0?t$3:i$4.litHtmlVersions=[]).push("2.6.1");const Z$1=(ee,K,Y)=>{var J,te;const ie=(J=Y==null?void 0:Y.renderBefore)!==null&&J!==void 0?J:K;let ae=ie._$litPart$;if(ae===void 0){const re=(te=Y==null?void 0:Y.renderBefore)!==null&&te!==void 0?te:null;ie._$litPart$=ae=new N$1(K.insertBefore(r$1(),re),re,void 0,Y??{})}return ae._$AI(ee),ae};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$2;let s$1=class extends d$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var K,Y;const J=super.createRenderRoot();return(K=(Y=this.renderOptions).renderBefore)!==null&&K!==void 0||(Y.renderBefore=J.firstChild),J}update(K){const Y=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(K),this._$Do=Z$1(Y,this.renderRoot,this.renderOptions)}connectedCallback(){var K;super.connectedCallback(),(K=this._$Do)===null||K===void 0||K.setConnected(!0)}disconnectedCallback(){var K;super.disconnectedCallback(),(K=this._$Do)===null||K===void 0||K.setConnected(!1)}render(){return x$1}};s$1.finalized=!0,s$1._$litElement$=!0,(l$1=globalThis.litElementHydrateSupport)===null||l$1===void 0||l$1.call(globalThis,{LitElement:s$1});const n$3=globalThis.litElementPolyfillSupport;n$3==null||n$3({LitElement:s$1});((o$2=globalThis.litElementVersions)!==null&&o$2!==void 0?o$2:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ThemePropertyMixin=ee=>class extends ee{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(Y){this._set_theme(Y)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const themeRegistry=[];function registerStyles(ee,K,Y={}){ee&&hasThemes(ee)&&console.warn(`The custom element definition for "${ee}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),K=flattenStyles(K),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(ee,K,Y):themeRegistry.push({themeFor:ee,styles:K,include:Y.include,moduleId:Y.moduleId})}function getAllThemes(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():themeRegistry}function matchesThemeFor(ee,K){return(ee||"").split(" ").some(Y=>new RegExp(`^${Y.split("*").join(".*")}$`).test(K))}function getIncludePriority(ee=""){let K=0;return ee.startsWith("lumo-")||ee.startsWith("material-")?K=1:ee.startsWith("vaadin-")&&(K=2),K}function flattenStyles(ee=[]){return[ee].flat(1/0).filter(K=>K instanceof o$5?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function getIncludedStyles(ee){const K=[];return ee.include&&[].concat(ee.include).forEach(Y=>{const J=getAllThemes().find(te=>te.moduleId===Y);J?K.push(...getIncludedStyles(J),...J.styles):console.warn(`Included moduleId ${Y} not found in style registry`)},ee.styles),K}function addStylesToTemplate(ee,K){const Y=document.createElement("style");Y.innerHTML=ee.map(J=>J.cssText).join(`
`),K.content.appendChild(Y)}function getThemes(ee){const K=`${ee}-default-theme`,Y=getAllThemes().filter(J=>J.moduleId!==K&&matchesThemeFor(J.themeFor,ee)).map(J=>({...J,styles:[...getIncludedStyles(J),...J.styles],includePriority:getIncludePriority(J.moduleId)})).sort((J,te)=>te.includePriority-J.includePriority);return Y.length>0?Y:getAllThemes().filter(J=>J.moduleId===K)}function hasThemes(ee){return classHasThemes(customElements.get(ee))}function classHasThemes(ee){return ee&&Object.prototype.hasOwnProperty.call(ee,"__themes")}const ThemableMixin=ee=>class extends ThemePropertyMixin(ee){static finalize(){if(super.finalize(),this.elementStyles)return;const Y=this.prototype._template;!Y||classHasThemes(this)||addStylesToTemplate(this.getStylesForThis(),Y)}static finalizeStyles(Y){const J=this.getStylesForThis();return Y?[...super.finalizeStyles(Y),...J]:J}static getStylesForThis(){const Y=Object.getPrototypeOf(this.prototype),J=(Y?Y.constructor.__themes:[])||[];this.__themes=[...J,...getThemes(this.is)];const te=this.__themes.flatMap(ie=>ie.styles);return te.filter((ie,ae)=>ae===te.lastIndexOf(ie))}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const colorBase=i$5`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,$tpl$5=document.createElement("template");$tpl$5.innerHTML=`<style>${colorBase.toString().replace(":host","html")}</style>`;document.head.appendChild($tpl$5.content);const color=i$5`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;registerStyles("",color,{moduleId:"lumo-color"});const colorLegacy=i$5`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;registerStyles("",[color,colorLegacy],{moduleId:"lumo-color-legacy"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const template$2=document.createElement("template");template$2.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(template$2.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sizing$1=i$5`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,$tpl$4=document.createElement("template");$tpl$4.innerHTML=`<style>${sizing$1.toString().replace(":host","html")}</style>`;document.head.appendChild($tpl$4.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const style=i$5`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;i$5`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
  }
`;const $tpl$3=document.createElement("template");$tpl$3.innerHTML=`<style>${style.toString().replace(":host","html")}$</style>`;document.head.appendChild($tpl$3.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fieldButton=i$5`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;registerStyles("",fieldButton,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const spacing$1=i$5`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,$tpl$2=document.createElement("template");$tpl$2.innerHTML=`<style>${spacing$1.toString().replace(":host","html")}</style>`;document.head.appendChild($tpl$2.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const font=i$5`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,typography$1=i$5`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;registerStyles("",typography$1,{moduleId:"lumo-typography"});const $tpl$1=document.createElement("template");$tpl$1.innerHTML=`<style>${font.toString().replace(":host","html")}</style>`;document.head.appendChild($tpl$1.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const overlay=i$5`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;registerStyles("",overlay,{moduleId:"lumo-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const menuOverlayCore=i$5`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;registerStyles("",menuOverlayCore,{moduleId:"lumo-menu-overlay-core"});const menuOverlayExt=i$5`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,menuOverlay=[overlay,menuOverlayCore,menuOverlayExt];registerStyles("",menuOverlay,{moduleId:"lumo-menu-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const requiredField=i$5`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;registerStyles("",requiredField,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const badge=i$5`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon,
  [theme~='badge'] iron-icon {
    margin: -0.25em 0;
    --iron-icon-width: 1.5em;
    --iron-icon-height: 1.5em;
  }

  [theme~='badge'] vaadin-icon:first-child,
  [theme~='badge'] iron-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child,
  [theme~='badge'] iron-icon:last-child {
    margin-right: -0.375em;
  }

  iron-icon[theme~='badge'][icon],
  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  iron-icon[theme~='badge'][icon][theme~='small'],
  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child,
  [dir='rtl'][theme~='badge'] iron-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child,
  [dir='rtl'][theme~='badge'] iron-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;registerStyles("",badge,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const userColors=i$5`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,$tpl=document.createElement("template");$tpl.innerHTML=`<style>${userColors.toString().replace(":host","html")}</style>`;document.head.appendChild($tpl.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const accessibility=i$5`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const background=i$5`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const border=i$5`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const flexboxAndGrid=i$5`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const layout=i$5`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const shadows=i$5`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sizing=i$5`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const spacing=i$5`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const typography=i$5`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const utility=i$5`
${accessibility}
${background}
${border}
${shadows}
${flexboxAndGrid}
${layout}
${sizing}
${spacing}
${typography}
`;registerStyles("",utility,{moduleId:"lumo-utility"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(ee,K){return ee};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;function resolveUrl(ee,K){if(ee&&ABS_URL.test(ee)||ee==="//")return ee;if(workingURL===void 0){workingURL=!1;try{const Y=new URL("b","http://a");Y.pathname="c%20d",workingURL=Y.href==="http://a/c%20d"}catch{}}if(K||(K=document.baseURI||window.location.href),workingURL)try{return new URL(ee,K).href}catch{return ee}return resolveDoc||(resolveDoc=document.implementation.createHTMLDocument("temp"),resolveDoc.base=resolveDoc.createElement("base"),resolveDoc.head.appendChild(resolveDoc.base),resolveDoc.anchor=resolveDoc.createElement("a"),resolveDoc.body.appendChild(resolveDoc.anchor)),resolveDoc.base.href=K,resolveDoc.anchor.href=ee,resolveDoc.anchor.href||ee}function resolveCss(ee,K){return ee.replace(CSS_URL_RX,function(Y,J,te,ie){return J+"'"+resolveUrl(te.replace(/["']/g,""),K)+"'"+ie})}function pathFromUrl(ee){return ee.substring(0,ee.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const useShadow=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const supportsAdoptingStyleSheets=useShadow&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const ee=new CSSStyleSheet;ee.replaceSync("");const K=document.createElement("div");return K.attachShadow({mode:"open"}),K.shadowRoot.adoptedStyleSheets=[ee],K.shadowRoot.adoptedStyleSheets[0]===ee}catch{return!1}})();let rootPath=window.Polymer&&window.Polymer.rootPath||pathFromUrl(document.baseURI||window.location.href),sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let strictTemplatePolicy=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,allowTemplateFromDomModule=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,legacyOptimizations=window.Polymer&&window.Polymer.legacyOptimizations||!1,legacyWarnings=window.Polymer&&window.Polymer.legacyWarnings||!1,syncInitialRender=window.Polymer&&window.Polymer.syncInitialRender||!1,legacyUndefined=window.Polymer&&window.Polymer.legacyUndefined||!1,orderedComputed=window.Polymer&&window.Polymer.orderedComputed||!1,removeNestedTemplates=window.Polymer&&window.Polymer.removeNestedTemplates||!1,fastDomIf=window.Polymer&&window.Polymer.fastDomIf||!1,suppressTemplateNotifications=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let useAdoptedStyleSheetsWithBuiltCSS=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let dedupeId$1=0;const dedupingMixin=function(ee){let K=ee.__mixinApplications;K||(K=new WeakMap,ee.__mixinApplications=K);let Y=dedupeId$1++;function J(te){let ie=te.__mixinSet;if(ie&&ie[Y])return te;let ae=K,re=ae.get(te);if(!re){re=ee(te),ae.set(te,re);let se=Object.create(re.__mixinSet||ie||null);se[Y]=!0,re.__mixinSet=se}return re}return J};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let modules={},lcModules={};function setModule(ee,K){modules[ee]=lcModules[ee.toLowerCase()]=K}function findModule(ee){return modules[ee]||lcModules[ee.toLowerCase()]}function styleOutsideTemplateCheck(ee){ee.querySelector("style")&&console.warn("dom-module %s has style outside template",ee.id)}class DomModule extends HTMLElement{static get observedAttributes(){return["id"]}static import(K,Y){if(K){let J=findModule(K);return J&&Y?J.querySelector(Y):J}return null}attributeChangedCallback(K,Y,J,te){Y!==J&&this.register()}get assetpath(){if(!this.__assetpath){const K=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,Y=resolveUrl(this.getAttribute("assetpath")||"",K.baseURI);this.__assetpath=pathFromUrl(Y)}return this.__assetpath}register(K){if(K=K||this.id,K){if(strictTemplatePolicy&&findModule(K)!==void 0)throw setModule(K,null),new Error(`strictTemplatePolicy: dom-module ${K} re-registered`);this.id=K,setModule(K,this),styleOutsideTemplateCheck(this)}}}DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";function importModule(ee){return DomModule.import(ee)}function styleForImport(ee){let K=ee.body?ee.body:ee;const Y=resolveCss(K.textContent,ee.baseURI),J=document.createElement("style");return J.textContent=Y,J}function stylesFromModules(ee){const K=ee.trim().split(/\s+/),Y=[];for(let J=0;J<K.length;J++)Y.push(...stylesFromModule(K[J]));return Y}function stylesFromModule(ee){const K=importModule(ee);if(!K)return console.warn("Could not find style data in module named",ee),[];if(K._styles===void 0){const Y=[];Y.push(..._stylesFromModuleImports(K));const J=K.querySelector("template");J&&Y.push(...stylesFromTemplate(J,K.assetpath)),K._styles=Y}return K._styles}function stylesFromTemplate(ee,K){if(!ee._styles){const Y=[],J=ee.content.querySelectorAll("style");for(let te=0;te<J.length;te++){let ie=J[te],ae=ie.getAttribute(INCLUDE_ATTR);ae&&Y.push(...stylesFromModules(ae).filter(function(re,se,oe){return oe.indexOf(re)===se})),K&&(ie.textContent=resolveCss(ie.textContent,K)),Y.push(ie)}ee._styles=Y}return ee._styles}function stylesFromModuleImports(ee){let K=importModule(ee);return K?_stylesFromModuleImports(K):[]}function _stylesFromModuleImports(ee){const K=[],Y=ee.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(let J=0;J<Y.length;J++){let te=Y[J];if(te.import){const ie=te.import,ae=te.hasAttribute(SHADY_UNSCOPED_ATTR);if(ae&&!ie._unscopedStyle){const re=styleForImport(ie);re.setAttribute(SHADY_UNSCOPED_ATTR,""),ie._unscopedStyle=re}else ie._style||(ie._style=styleForImport(ie));K.push(ae?ie._unscopedStyle:ie._style)}}return K}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wrap$1=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?ee=>ShadyDOM.patch(ee):ee=>ee;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function isPath(ee){return ee.indexOf(".")>=0}function root(ee){let K=ee.indexOf(".");return K===-1?ee:ee.slice(0,K)}function isAncestor(ee,K){return ee.indexOf(K+".")===0}function isDescendant(ee,K){return K.indexOf(ee+".")===0}function translate(ee,K,Y){return K+Y.slice(ee.length)}function matches(ee,K){return ee===K||isAncestor(ee,K)||isDescendant(ee,K)}function normalize(ee){if(Array.isArray(ee)){let K=[];for(let Y=0;Y<ee.length;Y++){let J=ee[Y].toString().split(".");for(let te=0;te<J.length;te++)K.push(J[te])}return K.join(".")}else return ee}function split(ee){return Array.isArray(ee)?normalize(ee).split("."):ee.toString().split(".")}function get$1(ee,K,Y){let J=ee,te=split(K);for(let ie=0;ie<te.length;ie++){if(!J)return;let ae=te[ie];J=J[ae]}return Y&&(Y.path=te.join(".")),J}function set(ee,K,Y){let J=ee,te=split(K),ie=te[te.length-1];if(te.length>1){for(let ae=0;ae<te.length-1;ae++){let re=te[ae];if(J=J[re],!J)return}J[ie]=Y}else J[K]=Y;return te.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;function dashToCamelCase(ee){return caseMap[ee]||(caseMap[ee]=ee.indexOf("-")<0?ee:ee.replace(DASH_TO_CAMEL,K=>K[1].toUpperCase()))}function camelToDashCase(ee){return caseMap[ee]||(caseMap[ee]=ee.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let microtaskCurrHandle$1=0,microtaskLastHandle$1=0,microtaskCallbacks$1=[],microtaskNodeContent$1=0,microtaskScheduled$1=!1,microtaskNode$1=document.createTextNode("");new window.MutationObserver(microtaskFlush$1).observe(microtaskNode$1,{characterData:!0});function microtaskFlush$1(){microtaskScheduled$1=!1;const ee=microtaskCallbacks$1.length;for(let K=0;K<ee;K++){let Y=microtaskCallbacks$1[K];if(Y)try{Y()}catch(J){setTimeout(()=>{throw J})}}microtaskCallbacks$1.splice(0,ee),microtaskLastHandle$1+=ee}const timeOut$1={after(ee){return{run(K){return window.setTimeout(K,ee)},cancel(K){window.clearTimeout(K)}}},run(ee,K){return window.setTimeout(ee,K)},cancel(ee){window.clearTimeout(ee)}},microTask$1={run(ee){return microtaskScheduled$1||(microtaskScheduled$1=!0,microtaskNode$1.textContent=microtaskNodeContent$1++),microtaskCallbacks$1.push(ee),microtaskCurrHandle$1++},cancel(ee){const K=ee-microtaskLastHandle$1;if(K>=0){if(!microtaskCallbacks$1[K])throw new Error("invalid async handle: "+ee);microtaskCallbacks$1[K]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const microtask=microTask$1,PropertiesChanged=dedupingMixin(ee=>{class K extends ee{static createProperties(J){const te=this.prototype;for(let ie in J)ie in te||te._createPropertyAccessor(ie)}static attributeNameForProperty(J){return J.toLowerCase()}static typeForProperty(J){}_createPropertyAccessor(J,te){this._addPropertyToAttributeMap(J),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[J]||(this.__dataHasAccessor[J]=!0,this._definePropertyAccessor(J,te))}_addPropertyToAttributeMap(J){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let te=this.__dataAttributes[J];return te||(te=this.constructor.attributeNameForProperty(J),this.__dataAttributes[te]=J),te}_definePropertyAccessor(J,te){Object.defineProperty(this,J,{get(){return this.__data[J]},set:te?function(){}:function(ie){this._setPendingProperty(J,ie,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let J in this.__dataHasAccessor)this.hasOwnProperty(J)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[J]=this[J],delete this[J])}_initializeInstanceProperties(J){Object.assign(this,J)}_setProperty(J,te){this._setPendingProperty(J,te)&&this._invalidateProperties()}_getProperty(J){return this.__data[J]}_setPendingProperty(J,te,ie){let ae=this.__data[J],re=this._shouldPropertyChange(J,te,ae);return re&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(J in this.__dataOld)&&(this.__dataOld[J]=ae),this.__data[J]=te,this.__dataPending[J]=te),re}_isPropertyPending(J){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(J))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,microtask.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const J=this.__data,te=this.__dataPending,ie=this.__dataOld;this._shouldPropertiesChange(J,te,ie)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(J,te,ie)),this.__dataCounter--}_shouldPropertiesChange(J,te,ie){return Boolean(te)}_propertiesChanged(J,te,ie){}_shouldPropertyChange(J,te,ie){return ie!==te&&(ie===ie||te===te)}attributeChangedCallback(J,te,ie,ae){te!==ie&&this._attributeToProperty(J,ie),super.attributeChangedCallback&&super.attributeChangedCallback(J,te,ie,ae)}_attributeToProperty(J,te,ie){if(!this.__serializing){const ae=this.__dataAttributes,re=ae&&ae[J]||J;this[re]=this._deserializeValue(te,ie||this.constructor.typeForProperty(re))}}_propertyToAttribute(J,te,ie){this.__serializing=!0,ie=arguments.length<3?this[J]:ie,this._valueToNodeAttribute(this,ie,te||this.constructor.attributeNameForProperty(J)),this.__serializing=!1}_valueToNodeAttribute(J,te,ie){const ae=this._serializeValue(te);(ie==="class"||ie==="name"||ie==="slot")&&(J=wrap$1(J)),ae===void 0?J.removeAttribute(ie):J.setAttribute(ie,ae===""&&window.trustedTypes?window.trustedTypes.emptyScript:ae)}_serializeValue(J){switch(typeof J){case"boolean":return J?"":void 0;default:return J!=null?J.toString():void 0}}_deserializeValue(J,te){switch(te){case Boolean:return J!==null;case Number:return Number(J);default:return J}}}return K});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nativeProperties={};let proto=HTMLElement.prototype;for(;proto;){let ee=Object.getOwnPropertyNames(proto);for(let K=0;K<ee.length;K++)nativeProperties[ee[K]]=!0;proto=Object.getPrototypeOf(proto)}const isTrustedType=(()=>window.trustedTypes?ee=>trustedTypes.isHTML(ee)||trustedTypes.isScript(ee)||trustedTypes.isScriptURL(ee):()=>!1)();function saveAccessorValue(ee,K){if(!nativeProperties[K]){let Y=ee[K];Y!==void 0&&(ee.__data?ee._setPendingProperty(K,Y):(ee.__dataProto?ee.hasOwnProperty(JSCompiler_renameProperty("__dataProto",ee))||(ee.__dataProto=Object.create(ee.__dataProto)):ee.__dataProto={},ee.__dataProto[K]=Y))}}const PropertyAccessors=dedupingMixin(ee=>{const K=PropertiesChanged(ee);class Y extends K{static createPropertiesForAttributes(){let te=this.observedAttributes;for(let ie=0;ie<te.length;ie++)this.prototype._createPropertyAccessor(dashToCamelCase(te[ie]))}static attributeNameForProperty(te){return camelToDashCase(te)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(te){for(let ie in te)this._setProperty(ie,te[ie])}_ensureAttribute(te,ie){const ae=this;ae.hasAttribute(te)||this._valueToNodeAttribute(ae,ie,te)}_serializeValue(te){switch(typeof te){case"object":if(te instanceof Date)return te.toString();if(te){if(isTrustedType(te))return te;try{return JSON.stringify(te)}catch{return""}}default:return super._serializeValue(te)}}_deserializeValue(te,ie){let ae;switch(ie){case Object:try{ae=JSON.parse(te)}catch{ae=te}break;case Array:try{ae=JSON.parse(te)}catch{ae=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${te}`)}break;case Date:ae=isNaN(te)?String(te):Number(te),ae=new Date(ae);break;default:ae=super._deserializeValue(te,ie);break}return ae}_definePropertyAccessor(te,ie){saveAccessorValue(this,te),super._definePropertyAccessor(te,ie)}_hasAccessor(te){return this.__dataHasAccessor&&this.__dataHasAccessor[te]}_isPropertyPending(te){return Boolean(this.__dataPending&&te in this.__dataPending)}}return Y});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const templateExtensions={"dom-if":!0,"dom-repeat":!0};let placeholderBugDetect=!1,placeholderBug=!1;function hasPlaceholderBug(){if(!placeholderBugDetect){placeholderBugDetect=!0;const ee=document.createElement("textarea");ee.placeholder="a",placeholderBug=ee.placeholder===ee.textContent}return placeholderBug}function fixPlaceholder(ee){hasPlaceholderBug()&&ee.localName==="textarea"&&ee.placeholder&&ee.placeholder===ee.textContent&&(ee.textContent=null)}const copyAttributeWithTemplateEventPolicy=(()=>{const ee=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:K=>K});return(K,Y,J)=>{const te=Y.getAttribute(J);if(ee&&J.startsWith("on-")){K.setAttribute(J,ee.createScript(te,J));return}K.setAttribute(J,te)}})();function wrapTemplateExtension(ee){let K=ee.getAttribute("is");if(K&&templateExtensions[K]){let Y=ee;for(Y.removeAttribute("is"),ee=Y.ownerDocument.createElement(K),Y.parentNode.replaceChild(ee,Y),ee.appendChild(Y);Y.attributes.length;){const{name:J}=Y.attributes[0];copyAttributeWithTemplateEventPolicy(ee,Y,J),Y.removeAttribute(J)}}return ee}function findTemplateNode(ee,K){let Y=K.parentInfo&&findTemplateNode(ee,K.parentInfo);if(Y){for(let J=Y.firstChild,te=0;J;J=J.nextSibling)if(K.parentIndex===te++)return J}else return ee}function applyIdToMap(ee,K,Y,J){J.id&&(K[J.id]=Y)}function applyEventListener(ee,K,Y){if(Y.events&&Y.events.length)for(let J=0,te=Y.events,ie;J<te.length&&(ie=te[J]);J++)ee._addMethodEventListenerToNode(K,ie.name,ie.value,ee)}function applyTemplateInfo(ee,K,Y,J){Y.templateInfo&&(K._templateInfo=Y.templateInfo,K._parentTemplateInfo=J)}function createNodeEventHandler(ee,K,Y){return ee=ee._methodHost||ee,function(te){ee[Y]?ee[Y](te,te.detail):console.warn("listener method `"+Y+"` not defined")}}const TemplateStamp=dedupingMixin(ee=>{class K extends ee{static _parseTemplate(J,te){if(!J._templateInfo){let ie=J._templateInfo={};ie.nodeInfoList=[],ie.nestedTemplate=Boolean(te),ie.stripWhiteSpace=te&&te.stripWhiteSpace||J.hasAttribute&&J.hasAttribute("strip-whitespace"),this._parseTemplateContent(J,ie,{parent:null})}return J._templateInfo}static _parseTemplateContent(J,te,ie){return this._parseTemplateNode(J.content,te,ie)}static _parseTemplateNode(J,te,ie){let ae=!1,re=J;return re.localName=="template"&&!re.hasAttribute("preserve-content")?ae=this._parseTemplateNestedTemplate(re,te,ie)||ae:re.localName==="slot"&&(te.hasInsertionPoint=!0),fixPlaceholder(re),re.firstChild&&this._parseTemplateChildNodes(re,te,ie),re.hasAttributes&&re.hasAttributes()&&(ae=this._parseTemplateNodeAttributes(re,te,ie)||ae),ae||ie.noted}static _parseTemplateChildNodes(J,te,ie){if(!(J.localName==="script"||J.localName==="style"))for(let ae=J.firstChild,re=0,se;ae;ae=se){if(ae.localName=="template"&&(ae=wrapTemplateExtension(ae)),se=ae.nextSibling,ae.nodeType===Node.TEXT_NODE){let ne=se;for(;ne&&ne.nodeType===Node.TEXT_NODE;)ae.textContent+=ne.textContent,se=ne.nextSibling,J.removeChild(ne),ne=se;if(te.stripWhiteSpace&&!ae.textContent.trim()){J.removeChild(ae);continue}}let oe={parentIndex:re,parentInfo:ie};this._parseTemplateNode(ae,te,oe)&&(oe.infoIndex=te.nodeInfoList.push(oe)-1),ae.parentNode&&re++}}static _parseTemplateNestedTemplate(J,te,ie){let ae=J,re=this._parseTemplate(ae,te);return(re.content=ae.content.ownerDocument.createDocumentFragment()).appendChild(ae.content),ie.templateInfo=re,!0}static _parseTemplateNodeAttributes(J,te,ie){let ae=!1,re=Array.from(J.attributes);for(let se=re.length-1,oe;oe=re[se];se--)ae=this._parseTemplateNodeAttribute(J,te,ie,oe.name,oe.value)||ae;return ae}static _parseTemplateNodeAttribute(J,te,ie,ae,re){return ae.slice(0,3)==="on-"?(J.removeAttribute(ae),ie.events=ie.events||[],ie.events.push({name:ae.slice(3),value:re}),!0):ae==="id"?(ie.id=re,!0):!1}static _contentForTemplate(J){let te=J._templateInfo;return te&&te.content||J.content}_stampTemplate(J,te){J&&!J.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(J),te=te||this.constructor._parseTemplate(J);let ie=te.nodeInfoList,ae=te.content||J.content,re=document.importNode(ae,!0);re.__noInsertionPoint=!te.hasInsertionPoint;let se=re.nodeList=new Array(ie.length);re.$={};for(let oe=0,ne=ie.length,le;oe<ne&&(le=ie[oe]);oe++){let he=se[oe]=findTemplateNode(re,le);applyIdToMap(this,re.$,he,le),applyTemplateInfo(this,he,le,te),applyEventListener(this,he,le)}return re=re,re}_addMethodEventListenerToNode(J,te,ie,ae){ae=ae||J;let re=createNodeEventHandler(ae,te,ie);return this._addEventListenerToNode(J,te,re),re}_addEventListenerToNode(J,te,ie){J.addEventListener(te,ie)}_removeEventListenerFromNode(J,te,ie){J.removeEventListener(te,ie)}}return K});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let dedupeId=0;const NOOP=[],TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},COMPUTE_INFO="__computeInfo",capitalAttributeRegex=/[A-Z]/;function ensureOwnEffectMap(ee,K,Y){let J=ee[K];if(!J)J=ee[K]={};else if(!ee.hasOwnProperty(K)&&(J=ee[K]=Object.create(ee[K]),Y))for(let te in J){let ie=J[te],ae=J[te]=Array(ie.length);for(let re=0;re<ie.length;re++)ae[re]=ie[re]}return J}function runEffects(ee,K,Y,J,te,ie){if(K){let ae=!1;const re=dedupeId++;for(let se in Y){let oe=te?root(se):se,ne=K[oe];if(ne)for(let le=0,he=ne.length,de;le<he&&(de=ne[le]);le++)(!de.info||de.info.lastRun!==re)&&(!te||pathMatchesTrigger(se,de.trigger))&&(de.info&&(de.info.lastRun=re),de.fn(ee,se,Y,J,de.info,te,ie),ae=!0)}return ae}return!1}function runEffectsForProperty(ee,K,Y,J,te,ie,ae,re){let se=!1,oe=ae?root(J):J,ne=K[oe];if(ne)for(let le=0,he=ne.length,de;le<he&&(de=ne[le]);le++)(!de.info||de.info.lastRun!==Y)&&(!ae||pathMatchesTrigger(J,de.trigger))&&(de.info&&(de.info.lastRun=Y),de.fn(ee,J,te,ie,de.info,ae,re),se=!0);return se}function pathMatchesTrigger(ee,K){if(K){let Y=K.name;return Y==ee||!!(K.structured&&isAncestor(Y,ee))||!!(K.wildcard&&isDescendant(Y,ee))}else return!0}function runObserverEffect(ee,K,Y,J,te){let ie=typeof te.method=="string"?ee[te.method]:te.method,ae=te.property;ie?ie.call(ee,ee.__data[ae],J[ae]):te.dynamicFn||console.warn("observer method `"+te.method+"` not defined")}function runNotifyEffects(ee,K,Y,J,te){let ie=ee[TYPES.NOTIFY],ae,re=dedupeId++;for(let oe in K)K[oe]&&(ie&&runEffectsForProperty(ee,ie,re,oe,Y,J,te)||te&&notifyPath(ee,oe,Y))&&(ae=!0);let se;ae&&(se=ee.__dataHost)&&se._invalidateProperties&&se._invalidateProperties()}function notifyPath(ee,K,Y){let J=root(K);if(J!==K){let te=camelToDashCase(J)+"-changed";return dispatchNotifyEvent(ee,te,Y[K],K),!0}return!1}function dispatchNotifyEvent(ee,K,Y,J){let te={value:Y,queueProperty:!0};J&&(te.path=J),wrap$1(ee).dispatchEvent(new CustomEvent(K,{detail:te}))}function runNotifyEffect(ee,K,Y,J,te,ie){let re=(ie?root(K):K)!=K?K:null,se=re?get$1(ee,re):ee.__data[K];re&&se===void 0&&(se=Y[K]),dispatchNotifyEvent(ee,te.eventName,se,re)}function handleNotification(ee,K,Y,J,te){let ie,ae=ee.detail,re=ae&&ae.path;re?(J=translate(Y,J,re),ie=ae&&ae.value):ie=ee.currentTarget[Y],ie=te?!ie:ie,(!K[TYPES.READ_ONLY]||!K[TYPES.READ_ONLY][J])&&K._setPendingPropertyOrPath(J,ie,!0,Boolean(re))&&(!ae||!ae.queueProperty)&&K._invalidateProperties()}function runReflectEffect(ee,K,Y,J,te){let ie=ee.__data[K];sanitizeDOMValue&&(ie=sanitizeDOMValue(ie,te.attrName,"attribute",ee)),ee._propertyToAttribute(K,te.attrName,ie)}function runComputedEffects(ee,K,Y,J){let te=ee[TYPES.COMPUTE];if(te)if(orderedComputed){dedupeId++;const ie=getComputedOrder(ee),ae=[];for(let se in K)enqueueEffectsFor(se,te,ae,ie,J);let re;for(;re=ae.shift();)runComputedEffect(ee,"",K,Y,re)&&enqueueEffectsFor(re.methodInfo,te,ae,ie,J);Object.assign(Y,ee.__dataOld),Object.assign(K,ee.__dataPending),ee.__dataPending=null}else{let ie=K;for(;runEffects(ee,te,ie,Y,J);)Object.assign(Y,ee.__dataOld),Object.assign(K,ee.__dataPending),ie=ee.__dataPending,ee.__dataPending=null}}const insertEffect=(ee,K,Y)=>{let J=0,te=K.length-1,ie=-1;for(;J<=te;){const ae=J+te>>1,re=Y.get(K[ae].methodInfo)-Y.get(ee.methodInfo);if(re<0)J=ae+1;else if(re>0)te=ae-1;else{ie=ae;break}}ie<0&&(ie=te+1),K.splice(ie,0,ee)},enqueueEffectsFor=(ee,K,Y,J,te)=>{const ie=te?root(ee):ee,ae=K[ie];if(ae)for(let re=0;re<ae.length;re++){const se=ae[re];se.info.lastRun!==dedupeId&&(!te||pathMatchesTrigger(ee,se.trigger))&&(se.info.lastRun=dedupeId,insertEffect(se.info,Y,J))}};function getComputedOrder(ee){let K=ee.constructor.__orderedComputedDeps;if(!K){K=new Map;const Y=ee[TYPES.COMPUTE];let{counts:J,ready:te,total:ie}=dependencyCounts(ee),ae;for(;ae=te.shift();){K.set(ae,K.size);const re=Y[ae];re&&re.forEach(se=>{const oe=se.info.methodInfo;--ie,--J[oe]===0&&te.push(oe)})}ie!==0&&console.warn(`Computed graph for ${ee.localName} incomplete; circular?`),ee.constructor.__orderedComputedDeps=K}return K}function dependencyCounts(ee){const K=ee[COMPUTE_INFO],Y={},J=ee[TYPES.COMPUTE],te=[];let ie=0;for(let ae in K){const re=K[ae];ie+=Y[ae]=re.args.filter(se=>!se.literal).length+(re.dynamicFn?1:0)}for(let ae in J)K[ae]||te.push(ae);return{counts:Y,ready:te,total:ie}}function runComputedEffect(ee,K,Y,J,te){let ie=runMethodEffect(ee,K,Y,J,te);if(ie===NOOP)return!1;let ae=te.methodInfo;return ee.__dataHasAccessor&&ee.__dataHasAccessor[ae]?ee._setPendingProperty(ae,ie,!0):(ee[ae]=ie,!1)}function computeLinkedPaths(ee,K,Y){let J=ee.__dataLinkedPaths;if(J){let te;for(let ie in J){let ae=J[ie];isDescendant(ie,K)?(te=translate(ie,ae,K),ee._setPendingPropertyOrPath(te,Y,!0,!0)):isDescendant(ae,K)&&(te=translate(ae,ie,K),ee._setPendingPropertyOrPath(te,Y,!0,!0))}}}function addBinding(ee,K,Y,J,te,ie,ae){Y.bindings=Y.bindings||[];let re={kind:J,target:te,parts:ie,literal:ae,isCompound:ie.length!==1};if(Y.bindings.push(re),shouldAddListener(re)){let{event:oe,negate:ne}=re.parts[0];re.listenerEvent=oe||camelToDashCase(te)+"-changed",re.listenerNegate=ne}let se=K.nodeInfoList.length;for(let oe=0;oe<re.parts.length;oe++){let ne=re.parts[oe];ne.compoundIndex=oe,addEffectForBindingPart(ee,K,re,ne,se)}}function addEffectForBindingPart(ee,K,Y,J,te){if(!J.literal)if(Y.kind==="attribute"&&Y.target[0]==="-")console.warn("Cannot set attribute "+Y.target+' because "-" is not a valid attribute starting character');else{let ie=J.dependencies,ae={index:te,binding:Y,part:J,evaluator:ee};for(let re=0;re<ie.length;re++){let se=ie[re];typeof se=="string"&&(se=parseArg(se),se.wildcard=!0),ee._addTemplatePropertyEffect(K,se.rootProperty,{fn:runBindingEffect,info:ae,trigger:se})}}}function runBindingEffect(ee,K,Y,J,te,ie,ae){let re=ae[te.index],se=te.binding,oe=te.part;if(ie&&oe.source&&K.length>oe.source.length&&se.kind=="property"&&!se.isCompound&&re.__isPropertyEffectsClient&&re.__dataHasAccessor&&re.__dataHasAccessor[se.target]){let ne=Y[K];K=translate(oe.source,se.target,K),re._setPendingPropertyOrPath(K,ne,!1,!0)&&ee._enqueueClient(re)}else{let ne=te.evaluator._evaluateBinding(ee,oe,K,Y,J,ie);ne!==NOOP&&applyBindingValue(ee,re,se,oe,ne)}}function applyBindingValue(ee,K,Y,J,te){if(te=computeBindingValue(K,te,Y,J),sanitizeDOMValue&&(te=sanitizeDOMValue(te,Y.target,Y.kind,K)),Y.kind=="attribute")ee._valueToNodeAttribute(K,te,Y.target);else{let ie=Y.target;K.__isPropertyEffectsClient&&K.__dataHasAccessor&&K.__dataHasAccessor[ie]?(!K[TYPES.READ_ONLY]||!K[TYPES.READ_ONLY][ie])&&K._setPendingProperty(ie,te)&&ee._enqueueClient(K):ee._setUnmanagedPropertyToNode(K,ie,te)}}function computeBindingValue(ee,K,Y,J){if(Y.isCompound){let te=ee.__dataCompoundStorage[Y.target];te[J.compoundIndex]=K,K=te.join("")}return Y.kind!=="attribute"&&(Y.target==="textContent"||Y.target==="value"&&(ee.localName==="input"||ee.localName==="textarea"))&&(K=K??""),K}function shouldAddListener(ee){return Boolean(ee.target)&&ee.kind!="attribute"&&ee.kind!="text"&&!ee.isCompound&&ee.parts[0].mode==="{"}function setupBindings(ee,K){let{nodeList:Y,nodeInfoList:J}=K;if(J.length)for(let te=0;te<J.length;te++){let ie=J[te],ae=Y[te],re=ie.bindings;if(re)for(let se=0;se<re.length;se++){let oe=re[se];setupCompoundStorage(ae,oe),addNotifyListener(ae,ee,oe)}ae.__dataHost=ee}}function setupCompoundStorage(ee,K){if(K.isCompound){let Y=ee.__dataCompoundStorage||(ee.__dataCompoundStorage={}),J=K.parts,te=new Array(J.length);for(let ae=0;ae<J.length;ae++)te[ae]=J[ae].literal;let ie=K.target;Y[ie]=te,K.literal&&K.kind=="property"&&(ie==="className"&&(ee=wrap$1(ee)),ee[ie]=K.literal)}}function addNotifyListener(ee,K,Y){if(Y.listenerEvent){let J=Y.parts[0];ee.addEventListener(Y.listenerEvent,function(te){handleNotification(te,K,Y.target,J.source,J.negate)})}}function createMethodEffect(ee,K,Y,J,te,ie){ie=K.static||ie&&(typeof ie!="object"||ie[K.methodName]);let ae={methodName:K.methodName,args:K.args,methodInfo:te,dynamicFn:ie};for(let re=0,se;re<K.args.length&&(se=K.args[re]);re++)se.literal||ee._addPropertyEffect(se.rootProperty,Y,{fn:J,info:ae,trigger:se});return ie&&ee._addPropertyEffect(K.methodName,Y,{fn:J,info:ae}),ae}function runMethodEffect(ee,K,Y,J,te){let ie=ee._methodHost||ee,ae=ie[te.methodName];if(ae){let re=ee._marshalArgs(te.args,K,Y);return re===NOOP?NOOP:ae.apply(ie,re)}else te.dynamicFn||console.warn("method `"+te.methodName+"` not defined")}const emptyArray=[],IDENT="(?:[a-zA-Z_$][\\w.:$\\-*]*)",NUMBER="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",SQUOTE_STRING="(?:'(?:[^'\\\\]|\\\\.)*')",DQUOTE_STRING='(?:"(?:[^"\\\\]|\\\\.)*")',STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*)",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*)",ARGUMENT_LIST="(?:\\(\\s*(?:"+ARGUMENTS+"?)\\)\\s*)",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?)",OPEN_BRACKET="(\\[\\[|{{)\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET,bindingRegex=new RegExp(EXPRESSION,"g");function literalFromParts(ee){let K="";for(let Y=0;Y<ee.length;Y++){let J=ee[Y].literal;K+=J||""}return K}function parseMethod(ee){let K=ee.match(/([^\s]+?)\(([\s\S]*)\)/);if(K){let J={methodName:K[1],static:!0,args:emptyArray};if(K[2].trim()){let te=K[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(te,J)}else return J}return null}function parseArgs(ee,K){return K.args=ee.map(function(Y){let J=parseArg(Y);return J.literal||(K.static=!1),J},this),K}function parseArg(ee){let K=ee.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),Y={name:K,value:"",literal:!1},J=K[0];switch(J==="-"&&(J=K[1]),J>="0"&&J<="9"&&(J="#"),J){case"'":case'"':Y.value=K.slice(1,-1),Y.literal=!0;break;case"#":Y.value=Number(K),Y.literal=!0;break}return Y.literal||(Y.rootProperty=root(K),Y.structured=isPath(K),Y.structured&&(Y.wildcard=K.slice(-2)==".*",Y.wildcard&&(Y.name=K.slice(0,-2)))),Y}function getArgValue(ee,K,Y){let J=get$1(ee,Y);return J===void 0&&(J=K[Y]),J}function notifySplices(ee,K,Y,J){const te={indexSplices:J};legacyUndefined&&!ee._overrideLegacyUndefined&&(K.splices=te),ee.notifyPath(Y+".splices",te),ee.notifyPath(Y+".length",K.length),legacyUndefined&&!ee._overrideLegacyUndefined&&(te.indexSplices=[])}function notifySplice(ee,K,Y,J,te,ie){notifySplices(ee,K,Y,[{index:J,addedCount:te,removed:ie,object:K,type:"splice"}])}function upper(ee){return ee[0].toUpperCase()+ee.substring(1)}const PropertyEffects=dedupingMixin(ee=>{const K=TemplateStamp(PropertyAccessors(ee));class Y extends K{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return TYPES}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(hostStack.length){let te=hostStack[hostStack.length-1];te._enqueueClient(this),this.__dataHost=te}}_initializeProtoProperties(te){this.__data=Object.create(te),this.__dataPending=Object.create(te),this.__dataOld={}}_initializeInstanceProperties(te){let ie=this[TYPES.READ_ONLY];for(let ae in te)(!ie||!ie[ae])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[ae]=this.__dataPending[ae]=te[ae])}_addPropertyEffect(te,ie,ae){this._createPropertyAccessor(te,ie==TYPES.READ_ONLY);let re=ensureOwnEffectMap(this,ie,!0)[te];re||(re=this[ie][te]=[]),re.push(ae)}_removePropertyEffect(te,ie,ae){let re=ensureOwnEffectMap(this,ie,!0)[te],se=re.indexOf(ae);se>=0&&re.splice(se,1)}_hasPropertyEffect(te,ie){let ae=this[ie];return Boolean(ae&&ae[te])}_hasReadOnlyEffect(te){return this._hasPropertyEffect(te,TYPES.READ_ONLY)}_hasNotifyEffect(te){return this._hasPropertyEffect(te,TYPES.NOTIFY)}_hasReflectEffect(te){return this._hasPropertyEffect(te,TYPES.REFLECT)}_hasComputedEffect(te){return this._hasPropertyEffect(te,TYPES.COMPUTE)}_setPendingPropertyOrPath(te,ie,ae,re){if(re||root(Array.isArray(te)?te[0]:te)!==te){if(!re){let se=get$1(this,te);if(te=set(this,te,ie),!te||!super._shouldPropertyChange(te,ie,se))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(te,ie,ae))return computeLinkedPaths(this,te,ie),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[te])return this._setPendingProperty(te,ie,ae);this[te]=ie}return!1}_setUnmanagedPropertyToNode(te,ie,ae){(ae!==te[ie]||typeof ae=="object")&&(ie==="className"&&(te=wrap$1(te)),te[ie]=ae)}_setPendingProperty(te,ie,ae){let re=this.__dataHasPaths&&isPath(te),se=re?this.__dataTemp:this.__data;return this._shouldPropertyChange(te,ie,se[te])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),te in this.__dataOld||(this.__dataOld[te]=this.__data[te]),re?this.__dataTemp[te]=ie:this.__data[te]=ie,this.__dataPending[te]=ie,(re||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][te])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[te]=ae),!0):!1}_setProperty(te,ie){this._setPendingProperty(te,ie,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(te){this.__dataPendingClients=this.__dataPendingClients||[],te!==this&&this.__dataPendingClients.push(te)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let te=this.__dataPendingClients;if(te){this.__dataPendingClients=null;for(let ie=0;ie<te.length;ie++){let ae=te[ie];ae.__dataEnabled?ae.__dataPending&&ae._flushProperties():ae._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(te,ie){for(let ae in te)(ie||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][ae])&&this._setPendingPropertyOrPath(ae,te[ae],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(te,ie,ae){let re=this.__dataHasPaths;this.__dataHasPaths=!1;let se;runComputedEffects(this,ie,ae,re),se=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(ie,ae,re),this._flushClients(),runEffects(this,this[TYPES.REFLECT],ie,ae,re),runEffects(this,this[TYPES.OBSERVE],ie,ae,re),se&&runNotifyEffects(this,se,ie,ae,re),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(te,ie,ae){this[TYPES.PROPAGATE]&&runEffects(this,this[TYPES.PROPAGATE],te,ie,ae),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,te,ie,ae)}_runEffectsForTemplate(te,ie,ae,re){const se=(oe,ne)=>{runEffects(this,te.propertyEffects,oe,ae,ne,te.nodeList);for(let le=te.firstChild;le;le=le.nextSibling)this._runEffectsForTemplate(le,oe,ae,ne)};te.runEffects?te.runEffects(se,ie,re):se(ie,re)}linkPaths(te,ie){te=normalize(te),ie=normalize(ie),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[te]=ie}unlinkPaths(te){te=normalize(te),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[te]}notifySplices(te,ie){let ae={path:""},re=get$1(this,te,ae);notifySplices(this,re,ae.path,ie)}get(te,ie){return get$1(ie||this,te)}set(te,ie,ae){ae?set(ae,te,ie):(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][te])&&this._setPendingPropertyOrPath(te,ie,!0)&&this._invalidateProperties()}push(te,...ie){let ae={path:""},re=get$1(this,te,ae),se=re.length,oe=re.push(...ie);return ie.length&&notifySplice(this,re,ae.path,se,ie.length,[]),oe}pop(te){let ie={path:""},ae=get$1(this,te,ie),re=Boolean(ae.length),se=ae.pop();return re&&notifySplice(this,ae,ie.path,ae.length,0,[se]),se}splice(te,ie,ae,...re){let se={path:""},oe=get$1(this,te,se);ie<0?ie=oe.length-Math.floor(-ie):ie&&(ie=Math.floor(ie));let ne;return arguments.length===2?ne=oe.splice(ie):ne=oe.splice(ie,ae,...re),(re.length||ne.length)&&notifySplice(this,oe,se.path,ie,re.length,ne),ne}shift(te){let ie={path:""},ae=get$1(this,te,ie),re=Boolean(ae.length),se=ae.shift();return re&&notifySplice(this,ae,ie.path,0,0,[se]),se}unshift(te,...ie){let ae={path:""},re=get$1(this,te,ae),se=re.unshift(...ie);return ie.length&&notifySplice(this,re,ae.path,0,ie.length,[]),se}notifyPath(te,ie){let ae;if(arguments.length==1){let re={path:""};ie=get$1(this,te,re),ae=re.path}else Array.isArray(te)?ae=normalize(te):ae=te;this._setPendingPropertyOrPath(ae,ie,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(te,ie){this._addPropertyEffect(te,TYPES.READ_ONLY),ie&&(this["_set"+upper(te)]=function(ae){this._setProperty(te,ae)})}_createPropertyObserver(te,ie,ae){let re={property:te,method:ie,dynamicFn:Boolean(ae)};this._addPropertyEffect(te,TYPES.OBSERVE,{fn:runObserverEffect,info:re,trigger:{name:te}}),ae&&this._addPropertyEffect(ie,TYPES.OBSERVE,{fn:runObserverEffect,info:re,trigger:{name:ie}})}_createMethodObserver(te,ie){let ae=parseMethod(te);if(!ae)throw new Error("Malformed observer expression '"+te+"'");createMethodEffect(this,ae,TYPES.OBSERVE,runMethodEffect,null,ie)}_createNotifyingProperty(te){this._addPropertyEffect(te,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(te)+"-changed",property:te}})}_createReflectedProperty(te){let ie=this.constructor.attributeNameForProperty(te);ie[0]==="-"?console.warn("Property "+te+" cannot be reflected to attribute "+ie+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(te,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:ie}})}_createComputedProperty(te,ie,ae){let re=parseMethod(ie);if(!re)throw new Error("Malformed computed expression '"+ie+"'");const se=createMethodEffect(this,re,TYPES.COMPUTE,runComputedEffect,te,ae);ensureOwnEffectMap(this,COMPUTE_INFO)[te]=se}_marshalArgs(te,ie,ae){const re=this.__data,se=[];for(let oe=0,ne=te.length;oe<ne;oe++){let{name:le,structured:he,wildcard:de,value:ce,literal:pe}=te[oe];if(!pe)if(de){const ve=isDescendant(le,ie),ue=getArgValue(re,ae,ve?ie:le);ce={path:ve?ie:le,value:ue,base:ve?get$1(re,le):ue}}else ce=he?getArgValue(re,ae,le):re[le];if(legacyUndefined&&!this._overrideLegacyUndefined&&ce===void 0&&te.length>1)return NOOP;se[oe]=ce}return se}static addPropertyEffect(te,ie,ae){this.prototype._addPropertyEffect(te,ie,ae)}static createPropertyObserver(te,ie,ae){this.prototype._createPropertyObserver(te,ie,ae)}static createMethodObserver(te,ie){this.prototype._createMethodObserver(te,ie)}static createNotifyingProperty(te){this.prototype._createNotifyingProperty(te)}static createReadOnlyProperty(te,ie){this.prototype._createReadOnlyProperty(te,ie)}static createReflectedProperty(te){this.prototype._createReflectedProperty(te)}static createComputedProperty(te,ie,ae){this.prototype._createComputedProperty(te,ie,ae)}static bindTemplate(te){return this.prototype._bindTemplate(te)}_bindTemplate(te,ie){let ae=this.constructor._parseTemplate(te),re=this.__preBoundTemplateInfo==ae;if(!re)for(let se in ae.propertyEffects)this._createPropertyAccessor(se);if(ie)if(ae=Object.create(ae),ae.wasPreBound=re,!this.__templateInfo)this.__templateInfo=ae;else{const se=te._parentTemplateInfo||this.__templateInfo,oe=se.lastChild;ae.parent=se,se.lastChild=ae,ae.previousSibling=oe,oe?oe.nextSibling=ae:se.firstChild=ae}else this.__preBoundTemplateInfo=ae;return ae}static _addTemplatePropertyEffect(te,ie,ae){let re=te.hostProps=te.hostProps||{};re[ie]=!0;let se=te.propertyEffects=te.propertyEffects||{};(se[ie]=se[ie]||[]).push(ae)}_stampTemplate(te,ie){ie=ie||this._bindTemplate(te,!0),hostStack.push(this);let ae=super._stampTemplate(te,ie);if(hostStack.pop(),ie.nodeList=ae.nodeList,!ie.wasPreBound){let re=ie.childNodes=[];for(let se=ae.firstChild;se;se=se.nextSibling)re.push(se)}return ae.templateInfo=ie,setupBindings(this,ie),this.__dataClientsReady&&(this._runEffectsForTemplate(ie,this.__data,null,!1),this._flushClients()),ae}_removeBoundDom(te){const ie=te.templateInfo,{previousSibling:ae,nextSibling:re,parent:se}=ie;ae?ae.nextSibling=re:se&&(se.firstChild=re),re?re.previousSibling=ae:se&&(se.lastChild=ae),ie.nextSibling=ie.previousSibling=null;let oe=ie.childNodes;for(let ne=0;ne<oe.length;ne++){let le=oe[ne];wrap$1(wrap$1(le).parentNode).removeChild(le)}}static _parseTemplateNode(te,ie,ae){let re=K._parseTemplateNode.call(this,te,ie,ae);if(te.nodeType===Node.TEXT_NODE){let se=this._parseBindings(te.textContent,ie);se&&(te.textContent=literalFromParts(se)||" ",addBinding(this,ie,ae,"text","textContent",se),re=!0)}return re}static _parseTemplateNodeAttribute(te,ie,ae,re,se){let oe=this._parseBindings(se,ie);if(oe){let ne=re,le="property";capitalAttributeRegex.test(re)?le="attribute":re[re.length-1]=="$"&&(re=re.slice(0,-1),le="attribute");let he=literalFromParts(oe);return he&&le=="attribute"&&(re=="class"&&te.hasAttribute("class")&&(he+=" "+te.getAttribute(re)),te.setAttribute(re,he)),le=="attribute"&&ne=="disable-upgrade$"&&te.setAttribute(re,""),te.localName==="input"&&ne==="value"&&te.setAttribute(ne,""),te.removeAttribute(ne),le==="property"&&(re=dashToCamelCase(re)),addBinding(this,ie,ae,le,re,oe,he),!0}else return K._parseTemplateNodeAttribute.call(this,te,ie,ae,re,se)}static _parseTemplateNestedTemplate(te,ie,ae){let re=K._parseTemplateNestedTemplate.call(this,te,ie,ae);const se=te.parentNode,oe=ae.templateInfo,ne=se.localName==="dom-if",le=se.localName==="dom-repeat";removeNestedTemplates&&(ne||le)&&(se.removeChild(te),ae=ae.parentInfo,ae.templateInfo=oe,ae.noted=!0,re=!1);let he=oe.hostProps;if(fastDomIf&&ne)he&&(ie.hostProps=Object.assign(ie.hostProps||{},he),removeNestedTemplates||(ae.parentInfo.noted=!0));else{let de="{";for(let ce in he){let pe=[{mode:de,source:ce,dependencies:[ce],hostProp:!0}];addBinding(this,ie,ae,"property","_host_"+ce,pe)}}return re}static _parseBindings(te,ie){let ae=[],re=0,se;for(;(se=bindingRegex.exec(te))!==null;){se.index>re&&ae.push({literal:te.slice(re,se.index)});let oe=se[1][0],ne=Boolean(se[2]),le=se[3].trim(),he=!1,de="",ce=-1;oe=="{"&&(ce=le.indexOf("::"))>0&&(de=le.substring(ce+2),le=le.substring(0,ce),he=!0);let pe=parseMethod(le),ve=[];if(pe){let{args:ue,methodName:me}=pe;for(let ge=0;ge<ue.length;ge++){let _e=ue[ge];_e.literal||ve.push(_e)}let fe=ie.dynamicFns;(fe&&fe[me]||pe.static)&&(ve.push(me),pe.dynamicFn=!0)}else ve.push(le);ae.push({source:le,mode:oe,negate:ne,customEvent:he,signature:pe,dependencies:ve,event:de}),re=bindingRegex.lastIndex}if(re&&re<te.length){let oe=te.substring(re);oe&&ae.push({literal:oe})}return ae.length?ae:null}static _evaluateBinding(te,ie,ae,re,se,oe){let ne;return ie.signature?ne=runMethodEffect(te,ae,re,se,ie.signature):ae!=ie.source?ne=get$1(te,ie.source):oe&&isPath(ae)?ne=get$1(te,ae):ne=te.__data[ae],ie.negate&&(ne=!ne),ne}}return Y}),hostStack=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function register$1(ee){}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function normalizeProperties(ee){const K={};for(let Y in ee){const J=ee[Y];K[Y]=typeof J=="function"?{type:J}:J}return K}const PropertiesMixin=dedupingMixin(ee=>{const K=PropertiesChanged(ee);function Y(ie){const ae=Object.getPrototypeOf(ie);return ae.prototype instanceof te?ae:null}function J(ie){if(!ie.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",ie))){let ae=null;if(ie.hasOwnProperty(JSCompiler_renameProperty("properties",ie))){const re=ie.properties;re&&(ae=normalizeProperties(re))}ie.__ownProperties=ae}return ie.__ownProperties}class te extends K{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const ae=this._properties;this.__observedAttributes=ae?Object.keys(ae).map(re=>this.prototype._addPropertyToAttributeMap(re)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const ae=Y(this);ae&&ae.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const ae=J(this);ae&&this.createProperties(ae)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const ae=Y(this);this.__properties=Object.assign({},ae&&ae._properties,J(this))}return this.__properties}static typeForProperty(ae){const re=this._properties[ae];return re&&re.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return te});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const version="3.5.1",builtCSS=window.ShadyCSS&&window.ShadyCSS.cssBuild,ElementMixin$1=dedupingMixin(ee=>{const K=PropertiesMixin(PropertyEffects(ee));function Y(se){if(!se.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",se))){se.__propertyDefaults=null;let oe=se._properties;for(let ne in oe){let le=oe[ne];"value"in le&&(se.__propertyDefaults=se.__propertyDefaults||{},se.__propertyDefaults[ne]=le)}}return se.__propertyDefaults}function J(se){return se.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",se))||(se.__ownObservers=se.hasOwnProperty(JSCompiler_renameProperty("observers",se))?se.observers:null),se.__ownObservers}function te(se,oe,ne,le){ne.computed&&(ne.readOnly=!0),ne.computed&&(se._hasReadOnlyEffect(oe)?console.warn(`Cannot redefine computed property '${oe}'.`):se._createComputedProperty(oe,ne.computed,le)),ne.readOnly&&!se._hasReadOnlyEffect(oe)?se._createReadOnlyProperty(oe,!ne.computed):ne.readOnly===!1&&se._hasReadOnlyEffect(oe)&&console.warn(`Cannot make readOnly property '${oe}' non-readOnly.`),ne.reflectToAttribute&&!se._hasReflectEffect(oe)?se._createReflectedProperty(oe):ne.reflectToAttribute===!1&&se._hasReflectEffect(oe)&&console.warn(`Cannot make reflected property '${oe}' non-reflected.`),ne.notify&&!se._hasNotifyEffect(oe)?se._createNotifyingProperty(oe):ne.notify===!1&&se._hasNotifyEffect(oe)&&console.warn(`Cannot make notify property '${oe}' non-notify.`),ne.observer&&se._createPropertyObserver(oe,ne.observer,le[ne.observer]),se._addPropertyToAttributeMap(oe)}function ie(se,oe,ne,le){if(!builtCSS){const he=oe.content.querySelectorAll("style"),de=stylesFromTemplate(oe),ce=stylesFromModuleImports(ne),pe=oe.content.firstElementChild;for(let ue=0;ue<ce.length;ue++){let me=ce[ue];me.textContent=se._processStyleText(me.textContent,le),oe.content.insertBefore(me,pe)}let ve=0;for(let ue=0;ue<de.length;ue++){let me=de[ue],fe=he[ve];fe!==me?(me=me.cloneNode(!0),fe.parentNode.insertBefore(me,fe)):ve++,me.textContent=se._processStyleText(me.textContent,le)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(oe,ne),useAdoptedStyleSheetsWithBuiltCSS&&builtCSS&&supportsAdoptingStyleSheets){const he=oe.content.querySelectorAll("style");if(he){let de="";Array.from(he).forEach(ce=>{de+=ce.textContent,ce.parentNode.removeChild(ce)}),se._styleSheet=new CSSStyleSheet,se._styleSheet.replaceSync(de)}}}function ae(se){let oe=null;if(se&&(!strictTemplatePolicy||allowTemplateFromDomModule)&&(oe=DomModule.import(se,"template"),strictTemplatePolicy&&!oe))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${se}`);return oe}class re extends K{static get polymerElementVersion(){return version}static _finalizeClass(){K._finalizeClass.call(this);const oe=J(this);oe&&this.createObservers(oe,this._properties),this._prepareTemplate()}static _prepareTemplate(){let oe=this.template;oe&&(typeof oe=="string"?(console.error("template getter must return HTMLTemplateElement"),oe=null):legacyOptimizations||(oe=oe.cloneNode(!0))),this.prototype._template=oe}static createProperties(oe){for(let ne in oe)te(this.prototype,ne,oe[ne],oe)}static createObservers(oe,ne){const le=this.prototype;for(let he=0;he<oe.length;he++)le._createMethodObserver(oe[he],ne)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let oe=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof oe=="function"&&(oe=oe()),this._template=oe!==void 0?oe:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&ae(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(oe){this._template=oe}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const oe=this.importMeta;if(oe)this._importPath=pathFromUrl(oe.url);else{const ne=DomModule.import(this.is);this._importPath=ne&&ne.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=rootPath,this.importPath=this.constructor.importPath;let oe=Y(this.constructor);if(oe)for(let ne in oe){let le=oe[ne];if(this._canApplyPropertyDefault(ne)){let he=typeof le.value=="function"?le.value.call(this):le.value;this._hasAccessor(ne)?this._setPendingProperty(ne,he,!0):this[ne]=he}}}_canApplyPropertyDefault(oe){return!this.hasOwnProperty(oe)}static _processStyleText(oe,ne){return resolveCss(oe,ne)}static _finalizeTemplate(oe){const ne=this.prototype._template;if(ne&&!ne.__polymerFinalized){ne.__polymerFinalized=!0;const le=this.importPath,he=le?resolveUrl(le):"";ie(this,ne,oe,he),this.prototype._bindTemplate(ne)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(oe){const ne=wrap$1(this);if(ne.attachShadow)return oe?(ne.shadowRoot||(ne.attachShadow({mode:"open",shadyUpgradeFragment:oe}),ne.shadowRoot.appendChild(oe),this.constructor._styleSheet&&(ne.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),syncInitialRender&&window.ShadyDOM&&window.ShadyDOM.flushInitial(ne.shadowRoot),ne.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(oe){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,oe)}resolveUrl(oe,ne){return!ne&&this.importPath&&(ne=resolveUrl(this.importPath)),resolveUrl(oe,ne)}static _parseTemplateContent(oe,ne,le){return ne.dynamicFns=ne.dynamicFns||this._properties,K._parseTemplateContent.call(this,oe,ne,le)}static _addTemplatePropertyEffect(oe,ne,le){return legacyWarnings&&!(ne in this._properties)&&!(le.info.part.signature&&le.info.part.signature.static)&&!le.info.part.hostProp&&!oe.nestedTemplate&&console.warn(`Property '${ne}' used in template but not declared in 'properties'; attribute will not be observed.`),K._addTemplatePropertyEffect.call(this,oe,ne,le)}}return re});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const policy=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:ee=>ee});class LiteralString{constructor(K,Y){assertValidTemplateStringParameters(K,Y);const J=Y.reduce((te,ie,ae)=>te+literalValue(ie)+K[ae+1],K[0]);this.value=J.toString()}toString(){return this.value}}function literalValue(ee){if(ee instanceof LiteralString)return ee.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${ee}`)}function htmlValue(ee){if(ee instanceof HTMLTemplateElement)return ee.innerHTML;if(ee instanceof LiteralString)return literalValue(ee);throw new Error(`non-template value passed to Polymer's html function: ${ee}`)}const html=function(K,...Y){assertValidTemplateStringParameters(K,Y);const J=document.createElement("template");let te=Y.reduce((ie,ae,re)=>ie+htmlValue(ae)+K[re+1],K[0]);return policy&&(te=policy.createHTML(te)),J.innerHTML=te,J},assertValidTemplateStringParameters=(ee,K)=>{if(!Array.isArray(ee)||!Array.isArray(ee.raw)||K.length!==ee.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const PolymerElement=ElementMixin$1(HTMLElement),DEV_MODE_CODE_REGEXP=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,FlowClients=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function isMinified(){function ee(){return!0}return uncommentAndRun(ee)}function isDevelopmentMode(){try{return isForcedDevelopmentMode()?!0:isLocalhost()?FlowClients?!isFlowProductionMode():!isMinified():!1}catch{return!1}}function isForcedDevelopmentMode(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function isFlowProductionMode(){return!!(FlowClients&&Object.keys(FlowClients).map(K=>FlowClients[K]).filter(K=>K.productionMode).length>0)}function uncommentAndRun(ee,K){if(typeof ee!="function")return;const Y=DEV_MODE_CODE_REGEXP.exec(ee.toString());if(Y)try{ee=new Function(Y[1])}catch(J){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",J)}return ee(K)}window.Vaadin=window.Vaadin||{};const runIfDevelopmentMode=function(ee,K){if(window.Vaadin.developmentMode)return uncommentAndRun(ee,K)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=isDevelopmentMode());function maybeGatherAndSendStats(){}const usageStatistics=function(){if(typeof runIfDevelopmentMode=="function")return runIfDevelopmentMode(maybeGatherAndSendStats)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let microtaskCurrHandle=0,microtaskLastHandle=0;const microtaskCallbacks=[];let microtaskNodeContent=0,microtaskScheduled=!1;const microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){microtaskScheduled=!1;const ee=microtaskCallbacks.length;for(let K=0;K<ee;K++){const Y=microtaskCallbacks[K];if(Y)try{Y()}catch(J){setTimeout(()=>{throw J})}}microtaskCallbacks.splice(0,ee),microtaskLastHandle+=ee}const timeOut={after(ee){return{run(K){return window.setTimeout(K,ee)},cancel(K){window.clearTimeout(K)}}},run(ee,K){return window.setTimeout(ee,K)},cancel(ee){window.clearTimeout(ee)}},animationFrame={run(ee){return window.requestAnimationFrame(ee)},cancel(ee){window.cancelAnimationFrame(ee)}},idlePeriod={run(ee){return window.requestIdleCallback?window.requestIdleCallback(ee):window.setTimeout(ee,16)},cancel(ee){window.cancelIdleCallback?window.cancelIdleCallback(ee):window.clearTimeout(ee)}},microTask={run(ee){microtaskScheduled||(microtaskScheduled=!0,microtaskNode.textContent=microtaskNodeContent,microtaskNodeContent+=1),microtaskCallbacks.push(ee);const K=microtaskCurrHandle;return microtaskCurrHandle+=1,K},cancel(ee){const K=ee-microtaskLastHandle;if(K>=0){if(!microtaskCallbacks[K])throw new Error(`invalid async handle: ${ee}`);microtaskCallbacks[K]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Debouncer$1=class Ce{static debounce(K,Y,J){return K instanceof Ce?K._cancelAsync():K=new Ce,K.setConfig(Y,J),K}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(K,Y){this._asyncModule=K,this._callback=Y,this._timer=this._asyncModule.run(()=>{this._timer=null,debouncerQueue$1.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),debouncerQueue$1.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}},debouncerQueue$1=new Set;function enqueueDebouncer$1(ee){debouncerQueue$1.add(ee)}function flushDebouncers$1(){const ee=Boolean(debouncerQueue$1.size);return debouncerQueue$1.forEach(K=>{try{K.flush()}catch(Y){setTimeout(()=>{throw Y})}}),ee}const flush$1=()=>{let ee;do ee=flushDebouncers$1();while(ee)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class DirHelper{static detectScrollType(){const K=document.createElement("div");K.textContent="ABCD",K.dir="rtl",K.style.fontSize="14px",K.style.width="4px",K.style.height="1px",K.style.position="absolute",K.style.top="-1000px",K.style.overflow="scroll",document.body.appendChild(K);let Y="reverse";return K.scrollLeft>0?Y="default":(K.scrollLeft=2,K.scrollLeft<2&&(Y="negative")),document.body.removeChild(K),Y}static getNormalizedScrollLeft(K,Y,J){const{scrollLeft:te}=J;if(Y!=="rtl"||!K)return te;switch(K){case"negative":return J.scrollWidth-J.clientWidth+te;case"reverse":return J.scrollWidth-J.clientWidth-te;default:return te}}static setNormalizedScrollLeft(K,Y,J,te){if(Y!=="rtl"||!K){J.scrollLeft=te;return}switch(K){case"negative":J.scrollLeft=J.clientWidth-J.scrollWidth+te;break;case"reverse":J.scrollLeft=J.scrollWidth-J.clientWidth-te;break;default:J.scrollLeft=te;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const directionSubscribers=[];function directionUpdater(){const ee=getDocumentDir();directionSubscribers.forEach(K=>{alignDirs(K,ee)})}let scrollType;const directionObserver=new MutationObserver(directionUpdater);directionObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function alignDirs(ee,K,Y=ee.getAttribute("dir")){K?ee.setAttribute("dir",K):Y!=null&&ee.removeAttribute("dir")}function getDocumentDir(){return document.documentElement.getAttribute("dir")}const DirMixin=ee=>class extends ee{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:Y=>Y||"",toAttribute:Y=>Y===""?null:Y}}}}static finalize(){super.finalize(),scrollType||(scrollType=DirHelper.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),alignDirs(this,getDocumentDir(),null))}attributeChangedCallback(Y,J,te){if(super.attributeChangedCallback(Y,J,te),Y!=="dir")return;const ie=getDocumentDir(),ae=te===ie&&directionSubscribers.indexOf(this)===-1,re=!te&&J&&directionSubscribers.indexOf(this)===-1;ae||re?(this.__subscribe(),alignDirs(this,ie,te)):te!==ie&&J===ie&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=directionSubscribers.includes(this),this.__unsubscribe()}_valueToNodeAttribute(Y,J,te){te==="dir"&&J===""&&!Y.hasAttribute("dir")||super._valueToNodeAttribute(Y,J,te)}_attributeToProperty(Y,J,te){Y==="dir"&&!J?this.dir="":super._attributeToProperty(Y,J,te)}__subscribe(){directionSubscribers.includes(this)||directionSubscribers.push(this)}__unsubscribe(){directionSubscribers.includes(this)&&directionSubscribers.splice(directionSubscribers.indexOf(this),1)}__getNormalizedScrollLeft(Y){return DirHelper.getNormalizedScrollLeft(scrollType,this.getAttribute("dir")||"ltr",Y)}__setNormalizedScrollLeft(Y,J){return DirHelper.setNormalizedScrollLeft(scrollType,this.getAttribute("dir")||"ltr",Y,J)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){usageStatistics()};let statsJob;const registered=new Set,ElementMixin=ee=>class extends DirMixin(ee){static get version(){return"23.3.8"}static finalize(){super.finalize();const{is:Y}=this;Y&&!registered.has(Y)&&(window.Vaadin.registrations.push(this),registered.add(Y),window.Vaadin.developmentModeCallback&&(statsJob=Debouncer$1.debounce(statsJob,idlePeriod,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),enqueueDebouncer$1(statsJob)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$3={HTML:1,SVG:2},n$2=(ee,K)=>K===void 0?(ee==null?void 0:ee._$litType$)!==void 0:(ee==null?void 0:ee._$litType$)===K;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$3=ee=>(...K)=>({_$litDirective$:ee,values:K});let i$2=class{constructor(K){}get _$AU(){return this._$AM._$AU}_$AT(K,Y,J){this._$Ct=K,this._$AM=Y,this._$Ci=J}_$AS(K,Y){return this.update(K,Y)}update(K,Y){return this.render(...Y)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e$2=class extends i$2{constructor(K){if(super(K),this.it=b$1,K.type!==t$2.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(K){if(K===b$1||K==null)return this._t=void 0,this.it=K;if(K===x$1)return K;if(typeof K!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(K===this.it)return this._t;this.it=K;const Y=[K];return Y.raw=Y,this._t={_$litType$:this.constructor.resultType,strings:Y,values:[]}}};e$2.directiveName="unsafeHTML",e$2.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t$1=class extends e$2{};t$1.directiveName="unsafeSVG",t$1.resultType=2;const o$1=e$3(t$1);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function cloneSvgNode(ee){let K=b$1;if(ee){const Y=ee.cloneNode(!0);Y.removeAttribute("id"),K=w$1`${o$1(Y.outerHTML)}`}return K}function isValidSvg(ee){return n$2(ee,i$3.SVG)||ee===b$1}function ensureSvgLiteral(ee){let K=ee==null||ee===""?b$1:ee;return isValidSvg(K)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),K=b$1),K}function renderSvg(ee,K){const Y=ensureSvgLiteral(ee);Z$1(Y,K)}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iconRegistry={};class Iconset extends ElementMixin(PolymerElement){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(K){let Y=iconRegistry[K];return Y||(Y=document.createElement("vaadin-iconset"),Y.name=K,iconRegistry[K]=Y),Y}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(K){this._icons=this._icons||this.__createIconMap();const Y=this._icons[this.__getIconId(K)];return{svg:cloneSvgNode(Y),size:this.size,viewBox:Y?Y.getAttribute("viewBox"):null}}__createIconMap(){const K={};return this.querySelectorAll("[id]").forEach(Y=>{K[this.__getIconId(Y.id)]=Y}),K}__getIconId(K){return(K||"").replace(`${this.name}:`,"")}__nameChanged(K,Y){Y&&(iconRegistry[K]=Iconset.getIconset(Y),delete iconRegistry[Y]),K&&(iconRegistry[K]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:K})))}}customElements.define(Iconset.is,Iconset);registerStyles("vaadin-icon",i$5`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ControllerMixin=dedupingMixin(ee=>class extends ee{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(Y=>{Y.hostConnected&&Y.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(Y=>{Y.hostDisconnected&&Y.hostDisconnected()})}addController(Y){this.__controllers.add(Y),this.$!==void 0&&this.isConnected&&Y.hostConnected&&Y.hostConnected()}removeController(Y){this.__controllers.delete(Y)}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function newSplice(ee,K,Y){return{index:ee,removed:K,addedCount:Y}}const EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;function calcEditDistances(ee,K,Y,J,te,ie){let ae=ie-te+1,re=Y-K+1,se=new Array(ae);for(let oe=0;oe<ae;oe++)se[oe]=new Array(re),se[oe][0]=oe;for(let oe=0;oe<re;oe++)se[0][oe]=oe;for(let oe=1;oe<ae;oe++)for(let ne=1;ne<re;ne++)if(equals(ee[K+ne-1],J[te+oe-1]))se[oe][ne]=se[oe-1][ne-1];else{let le=se[oe-1][ne]+1,he=se[oe][ne-1]+1;se[oe][ne]=le<he?le:he}return se}function spliceOperationsFromEditDistances(ee){let K=ee.length-1,Y=ee[0].length-1,J=ee[K][Y],te=[];for(;K>0||Y>0;){if(K==0){te.push(EDIT_ADD),Y--;continue}if(Y==0){te.push(EDIT_DELETE),K--;continue}let ie=ee[K-1][Y-1],ae=ee[K-1][Y],re=ee[K][Y-1],se;ae<re?se=ae<ie?ae:ie:se=re<ie?re:ie,se==ie?(ie==J?te.push(EDIT_LEAVE):(te.push(EDIT_UPDATE),J=ie),K--,Y--):se==ae?(te.push(EDIT_DELETE),K--,J=ae):(te.push(EDIT_ADD),Y--,J=re)}return te.reverse(),te}function calcSplices(ee,K,Y,J,te,ie){let ae=0,re=0,se,oe=Math.min(Y-K,ie-te);if(K==0&&te==0&&(ae=sharedPrefix(ee,J,oe)),Y==ee.length&&ie==J.length&&(re=sharedSuffix(ee,J,oe-ae)),K+=ae,te+=ae,Y-=re,ie-=re,Y-K==0&&ie-te==0)return[];if(K==Y){for(se=newSplice(K,[],0);te<ie;)se.removed.push(J[te++]);return[se]}else if(te==ie)return[newSplice(K,[],Y-K)];let ne=spliceOperationsFromEditDistances(calcEditDistances(ee,K,Y,J,te,ie));se=void 0;let le=[],he=K,de=te;for(let ce=0;ce<ne.length;ce++)switch(ne[ce]){case EDIT_LEAVE:se&&(le.push(se),se=void 0),he++,de++;break;case EDIT_UPDATE:se||(se=newSplice(he,[],0)),se.addedCount++,he++,se.removed.push(J[de]),de++;break;case EDIT_ADD:se||(se=newSplice(he,[],0)),se.addedCount++,he++;break;case EDIT_DELETE:se||(se=newSplice(he,[],0)),se.removed.push(J[de]),de++;break}return se&&le.push(se),le}function sharedPrefix(ee,K,Y){for(let J=0;J<Y;J++)if(!equals(ee[J],K[J]))return J;return Y}function sharedSuffix(ee,K,Y){let J=ee.length,te=K.length,ie=0;for(;ie<Y&&equals(ee[--J],K[--te]);)ie++;return ie}function calculateSplices(ee,K){return calcSplices(ee,0,ee.length,K,0,K.length)}function equals(ee,K){return ee===K}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function isSlot(ee){return ee.localName==="slot"}let FlattenedNodesObserver=class{static getFlattenedNodes(ee){const K=wrap$1(ee);return isSlot(ee)?(ee=ee,K.assignedNodes({flatten:!0})):Array.from(K.childNodes).map(Y=>isSlot(Y)?(Y=Y,wrap$1(Y).assignedNodes({flatten:!0})):[Y]).reduce((Y,J)=>Y.concat(J),[])}constructor(ee,K){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=ee,this.callback=K,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){isSlot(this._target)?this._listenSlots([this._target]):wrap$1(this._target).children&&(this._listenSlots(wrap$1(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,ee=>{this._processMutations(ee)}):(this._nativeChildrenObserver=new MutationObserver(ee=>{this._processMutations(ee)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){isSlot(this._target)?this._unlistenSlots([this._target]):wrap$1(this._target).children&&(this._unlistenSlots(wrap$1(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,microTask$1.run(()=>this.flush()))}_processMutations(ee){this._processSlotMutations(ee),this.flush()}_processSlotMutations(ee){if(ee)for(let K=0;K<ee.length;K++){let Y=ee[K];Y.addedNodes&&this._listenSlots(Y.addedNodes),Y.removedNodes&&this._unlistenSlots(Y.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let ee={target:this._target,addedNodes:[],removedNodes:[]},K=this.constructor.getFlattenedNodes(this._target),Y=calculateSplices(K,this._effectiveNodes);for(let te=0,ie;te<Y.length&&(ie=Y[te]);te++)for(let ae=0,re;ae<ie.removed.length&&(re=ie.removed[ae]);ae++)ee.removedNodes.push(re);for(let te=0,ie;te<Y.length&&(ie=Y[te]);te++)for(let ae=ie.index;ae<ie.index+ie.addedCount;ae++)ee.addedNodes.push(K[ae]);this._effectiveNodes=K;let J=!1;return(ee.addedNodes.length||ee.removedNodes.length)&&(J=!0,this.callback.call(this._target,ee)),J}_listenSlots(ee){for(let K=0;K<ee.length;K++){let Y=ee[K];isSlot(Y)&&Y.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(ee){for(let K=0;K<ee.length;K++){let Y=ee[K];isSlot(Y)&&Y.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let uniqueId=0;function generateUniqueId(){return uniqueId++}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class SlotController extends EventTarget{static generateId(K,Y){return`${K||"default"}-${Y.localName}-${generateUniqueId()}`}constructor(K,Y,J,te,ie){super(),this.host=K,this.slotName=Y,this.slotFactory=J,this.slotInitializer=te,ie&&(this.defaultId=SlotController.generateId(Y,K))}hostConnected(){if(!this.initialized){let K=this.getSlotChild();K?(this.node=K,this.initCustomNode(K)):K=this.attachDefaultNode(),this.initNode(K),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:K,slotName:Y,slotFactory:J}=this;let te=this.defaultNode;return!te&&J&&(te=J(K),te instanceof Element&&(Y!==""&&te.setAttribute("slot",Y),this.node=te,this.defaultNode=te)),te&&K.appendChild(te),te}getSlotChild(){const{slotName:K}=this;return Array.from(this.host.childNodes).find(Y=>Y.nodeType===Node.ELEMENT_NODE&&Y.slot===K||Y.nodeType===Node.TEXT_NODE&&Y.textContent.trim()&&K==="")}initNode(K){const{slotInitializer:Y}=this;Y&&Y(this.host,K)}initCustomNode(K){}teardownNode(K){}observe(){const{slotName:K}=this,Y=K===""?"slot:not([name])":`slot[name=${K}]`,J=this.host.shadowRoot.querySelector(Y);this.__slotObserver=new FlattenedNodesObserver(J,te=>{const ie=this.node,ae=te.addedNodes.find(re=>re!==ie);te.removedNodes.length&&te.removedNodes.forEach(re=>{this.teardownNode(re)}),ae&&(ie&&ie.isConnected&&this.host.removeChild(ie),this.node=ae,ae!==this.defaultNode&&(this.initCustomNode(ae),this.initNode(ae)))})}}/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TooltipController extends SlotController{constructor(K){super(K,"tooltip"),this.setTarget(K)}initCustomNode(K){K.target=this.target,this.context!==void 0&&(K.context=this.context),this.manual!==void 0&&(K.manual=this.manual),this.opened!==void 0&&(K.opened=this.opened),this.position!==void 0&&(K._position=this.position),this.shouldShow!==void 0&&(K.shouldShow=this.shouldShow)}setContext(K){this.context=K;const Y=this.node;Y&&(Y.context=K)}setManual(K){this.manual=K;const Y=this.node;Y&&(Y.manual=K)}setOpened(K){this.opened=K;const Y=this.node;Y&&(Y.opened=K)}setPosition(K){this.position=K;const Y=this.node;Y&&(Y._position=K)}setShouldShow(K){this.shouldShow=K;const Y=this.node;Y&&(Y.shouldShow=K)}setTarget(K){this.target=K;const Y=this.node;Y&&(Y.target=K)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const DEFAULT_ICONSET="vaadin";class Icon extends ThemableMixin(ElementMixin(ControllerMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          fill: currentColor;
        }

        :host([hidden]) {
          display: none !important;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      </style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      ></svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-icon"}static get properties(){return{icon:{type:String,observer:"__iconChanged"},svg:{type:Object},size:{type:Number,value:24},__svgElement:Object,__viewBox:String}}static get observers(){return["__svgChanged(svg, __svgElement)"]}constructor(){super(),this.__onIconsetRegistered=this.__onIconsetRegistered.bind(this)}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("svg"),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController)}__getIconsetName(K){return K?K.split(":")[0]||DEFAULT_ICONSET:void 0}__onIconsetRegistered(K){K.detail===this.__getIconsetName(this.icon)&&this.__iconChanged(this.icon)}connectedCallback(){super.connectedCallback(),document.addEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}__iconChanged(K){if(K){this.__checkDeprecatedIcon(K);const Y=this.__getIconsetName(K),J=Iconset.getIconset(Y),{svg:te,size:ie,viewBox:ae}=J.applyIcon(K);ae&&(this.__viewBox=ae),ie!==this.size&&(this.size=ie),this.svg=te}else this.svg=ensureSvgLiteral(null)}__checkDeprecatedIcon(K){const Y={"vaadin:buss":"vaadin:bus","vaadin:funcion":"vaadin:function","vaadin:megafone":"vaadin:megaphone","vaadin:palete":"vaadin:palette","vaadin:trendind-down":"vaadin:trending-down"};K in Y&&console.warn(`WARNING: The icon "${K}" is deprecated. Use "${Y[K]}" instead`)}__svgChanged(K,Y){Y&&renderSvg(K,Y)}__computeViewBox(K,Y){return Y||`0 0 ${K} ${K}`}}customElements.define(Icon.is,Icon);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const template$1=document.createElement("template");template$1.innerHTML=`<vaadin-iconset name="vaadin" size="16">
<svg><defs>
<g id="vaadin:abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>
<g id="vaadin:absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>
<g id="vaadin:academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>
<g id="vaadin:accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>
<g id="vaadin:accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>
<g id="vaadin:add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>
<g id="vaadin:adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>
<g id="vaadin:adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>
<g id="vaadin:airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>
<g id="vaadin:alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>
<g id="vaadin:align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>
<g id="vaadin:align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>
<g id="vaadin:alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>
<g id="vaadin:ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>
<g id="vaadin:anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>
<g id="vaadin:angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>
<g id="vaadin:angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>
<g id="vaadin:angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>
<g id="vaadin:angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>
<g id="vaadin:angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>
<g id="vaadin:angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>
<g id="vaadin:archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>
<g id="vaadin:archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>
<g id="vaadin:area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>
<g id="vaadin:arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>
<g id="vaadin:arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>
<g id="vaadin:arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>
<g id="vaadin:arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>
<g id="vaadin:arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>
<g id="vaadin:arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>
<g id="vaadin:arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>
<g id="vaadin:arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>
<g id="vaadin:arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>
<g id="vaadin:arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>
<g id="vaadin:arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>
<g id="vaadin:asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>
<g id="vaadin:at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>
<g id="vaadin:automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>
<g id="vaadin:backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>
<g id="vaadin:backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>
<g id="vaadin:ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>
<g id="vaadin:bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>
<g id="vaadin:bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>
<g id="vaadin:bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>
<g id="vaadin:barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>
<g id="vaadin:bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>
<g id="vaadin:bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>
<g id="vaadin:bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>
<g id="vaadin:boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>
<g id="vaadin:bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>
<g id="vaadin:bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>
<g id="vaadin:bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>
<g id="vaadin:book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>
<g id="vaadin:bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>
<g id="vaadin:briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>
<g id="vaadin:browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>
<g id="vaadin:bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>
<g id="vaadin:bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>
<g id="vaadin:building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>
<g id="vaadin:building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>
<g id="vaadin:bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>
<g id="vaadin:bus"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:buss"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>
<g id="vaadin:calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>
<g id="vaadin:calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>
<g id="vaadin:calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>
<g id="vaadin:calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>
<g id="vaadin:calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>
<g id="vaadin:calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>
<g id="vaadin:car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:caret-down"><path d="M3 4h10l-5 7z"></path></g>
<g id="vaadin:caret-left"><path d="M11 3v10l-7-5z"></path></g>
<g id="vaadin:caret-right"><path d="M5 13v-10l7 5z"></path></g>
<g id="vaadin:caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>
<g id="vaadin:caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>
<g id="vaadin:caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>
<g id="vaadin:caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>
<g id="vaadin:caret-up"><path d="M13 12h-10l5-7z"></path></g>
<g id="vaadin:cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>
<g id="vaadin:cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>
<g id="vaadin:cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>
<g id="vaadin:chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>
<g id="vaadin:chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>
<g id="vaadin:chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>
<g id="vaadin:chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>
<g id="vaadin:chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>
<g id="vaadin:chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>
<g id="vaadin:check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>
<g id="vaadin:check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>
<g id="vaadin:check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>
<g id="vaadin:check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>
<g id="vaadin:chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>
<g id="vaadin:chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>
<g id="vaadin:chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>
<g id="vaadin:chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>
<g id="vaadin:chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>
<g id="vaadin:chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>
<g id="vaadin:chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>
<g id="vaadin:chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>
<g id="vaadin:chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>
<g id="vaadin:chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>
<g id="vaadin:chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>
<g id="vaadin:chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>
<g id="vaadin:child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>
<g id="vaadin:clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>
<g id="vaadin:clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>
<g id="vaadin:clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>
<g id="vaadin:clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>
<g id="vaadin:clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>
<g id="vaadin:close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>
<g id="vaadin:close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>
<g id="vaadin:close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>
<g id="vaadin:cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>
<g id="vaadin:cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>
<g id="vaadin:cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>
<g id="vaadin:cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>
<g id="vaadin:cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>
<g id="vaadin:cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>
<g id="vaadin:cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>
<g id="vaadin:code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>
<g id="vaadin:coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>
<g id="vaadin:cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>
<g id="vaadin:cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>
<g id="vaadin:coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>
<g id="vaadin:combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>
<g id="vaadin:comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>
<g id="vaadin:comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>
<g id="vaadin:compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>
<g id="vaadin:compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>
<g id="vaadin:connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>
<g id="vaadin:controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>
<g id="vaadin:copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>
<g id="vaadin:copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>
<g id="vaadin:copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>
<g id="vaadin:corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>
<g id="vaadin:corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>
<g id="vaadin:corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>
<g id="vaadin:corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>
<g id="vaadin:credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>
<g id="vaadin:crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>
<g id="vaadin:cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>
<g id="vaadin:crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>
<g id="vaadin:css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>
<g id="vaadin:ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>
<g id="vaadin:ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>
<g id="vaadin:cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>
<g id="vaadin:cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>
<g id="vaadin:curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>
<g id="vaadin:cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>
<g id="vaadin:cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>
<g id="vaadin:cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>
<g id="vaadin:dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>
<g id="vaadin:date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>
<g id="vaadin:deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>
<g id="vaadin:del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>
<g id="vaadin:dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>
<g id="vaadin:desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>
<g id="vaadin:diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>
<g id="vaadin:diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>
<g id="vaadin:diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>
<g id="vaadin:diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>
<g id="vaadin:disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>
<g id="vaadin:doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>
<g id="vaadin:dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>
<g id="vaadin:download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>
<g id="vaadin:drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>
<g id="vaadin:edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>
<g id="vaadin:eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>
<g id="vaadin:elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>
<g id="vaadin:ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>
<g id="vaadin:ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>
<g id="vaadin:ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>
<g id="vaadin:ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>
<g id="vaadin:enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>
<g id="vaadin:enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>
<g id="vaadin:envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>
<g id="vaadin:envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>
<g id="vaadin:envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>
<g id="vaadin:envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>
<g id="vaadin:envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>
<g id="vaadin:envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>
<g id="vaadin:eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>
<g id="vaadin:esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>
<g id="vaadin:esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>
<g id="vaadin:euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>
<g id="vaadin:exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>
<g id="vaadin:exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>
<g id="vaadin:exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>
<g id="vaadin:exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>
<g id="vaadin:expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>
<g id="vaadin:expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>
<g id="vaadin:external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>
<g id="vaadin:external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>
<g id="vaadin:eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>
<g id="vaadin:eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>
<g id="vaadin:eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>
<g id="vaadin:facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>
<g id="vaadin:facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>
<g id="vaadin:factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>
<g id="vaadin:family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>
<g id="vaadin:fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>
<g id="vaadin:fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>
<g id="vaadin:female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>
<g id="vaadin:file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>
<g id="vaadin:file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>
<g id="vaadin:file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>
<g id="vaadin:file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>
<g id="vaadin:file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>
<g id="vaadin:file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>
<g id="vaadin:file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>
<g id="vaadin:file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>
<g id="vaadin:file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>
<g id="vaadin:file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>
<g id="vaadin:file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>
<g id="vaadin:file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>
<g id="vaadin:file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>
<g id="vaadin:file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>
<g id="vaadin:file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>
<g id="vaadin:file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>
<g id="vaadin:fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>
<g id="vaadin:film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>
<g id="vaadin:fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>
<g id="vaadin:flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>
<g id="vaadin:flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>
<g id="vaadin:flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>
<g id="vaadin:flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>
<g id="vaadin:flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>
<g id="vaadin:flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>
<g id="vaadin:flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>
<g id="vaadin:folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>
<g id="vaadin:folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>
<g id="vaadin:folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>
<g id="vaadin:folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>
<g id="vaadin:font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>
<g id="vaadin:form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>
<g id="vaadin:forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>
<g id="vaadin:frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>
<g id="vaadin:funcion"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:function"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>
<g id="vaadin:gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>
<g id="vaadin:gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>
<g id="vaadin:glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>
<g id="vaadin:glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>
<g id="vaadin:globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>
<g id="vaadin:globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>
<g id="vaadin:golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>
<g id="vaadin:google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>
<g id="vaadin:google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>
<g id="vaadin:grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>
<g id="vaadin:grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>
<g id="vaadin:grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>
<g id="vaadin:grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>
<g id="vaadin:grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>
<g id="vaadin:grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>
<g id="vaadin:grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>
<g id="vaadin:grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>
<g id="vaadin:grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>
<g id="vaadin:group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>
<g id="vaadin:hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>
<g id="vaadin:hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>
<g id="vaadin:handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>
<g id="vaadin:hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>
<g id="vaadin:handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>
<g id="vaadin:harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>
<g id="vaadin:harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>
<g id="vaadin:hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>
<g id="vaadin:header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>
<g id="vaadin:headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>
<g id="vaadin:headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>
<g id="vaadin:health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>
<g id="vaadin:heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>
<g id="vaadin:heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>
<g id="vaadin:home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>
<g id="vaadin:home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>
<g id="vaadin:hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>
<g id="vaadin:hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>
<g id="vaadin:info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>
<g id="vaadin:info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>
<g id="vaadin:info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>
<g id="vaadin:invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>
<g id="vaadin:italic"><path d="M8 0h3l-3 16h-3z"></path></g>
<g id="vaadin:key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>
<g id="vaadin:keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>
<g id="vaadin:keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>
<g id="vaadin:laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>
<g id="vaadin:layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>
<g id="vaadin:level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>
<g id="vaadin:level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>
<g id="vaadin:level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>
<g id="vaadin:level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>
<g id="vaadin:level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>
<g id="vaadin:level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>
<g id="vaadin:level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>
<g id="vaadin:level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>
<g id="vaadin:lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>
<g id="vaadin:lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>
<g id="vaadin:line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>
<g id="vaadin:line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>
<g id="vaadin:line-h"><path d="M0 7h16v1h-16v-1z"></path></g>
<g id="vaadin:line-v"><path d="M8 0h1v16h-1v-16z"></path></g>
<g id="vaadin:lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>
<g id="vaadin:lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>
<g id="vaadin:link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>
<g id="vaadin:list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>
<g id="vaadin:list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>
<g id="vaadin:list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>
<g id="vaadin:location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>
<g id="vaadin:location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>
<g id="vaadin:location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>
<g id="vaadin:lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>
<g id="vaadin:magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>
<g id="vaadin:magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>
<g id="vaadin:mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>
<g id="vaadin:male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>
<g id="vaadin:margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>
<g id="vaadin:margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>
<g id="vaadin:medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>
<g id="vaadin:megafone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:megaphone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>
<g id="vaadin:menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>
<g id="vaadin:microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>
<g id="vaadin:minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>
<g id="vaadin:minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>
<g id="vaadin:minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:minus"><path d="M2 7h12v2h-12v-2z"></path></g>
<g id="vaadin:mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>
<g id="vaadin:mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>
<g id="vaadin:mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>
<g id="vaadin:modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>
<g id="vaadin:money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>
<g id="vaadin:moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>
<g id="vaadin:moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>
<g id="vaadin:morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>
<g id="vaadin:mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>
<g id="vaadin:native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>
<g id="vaadin:notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>
<g id="vaadin:nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>
<g id="vaadin:office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>
<g id="vaadin:open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>
<g id="vaadin:option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>
<g id="vaadin:options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>
<g id="vaadin:orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>
<g id="vaadin:out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>
<g id="vaadin:outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>
<g id="vaadin:padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>
<g id="vaadin:paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>
<g id="vaadin:paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>
<g id="vaadin:palete"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:palette"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>
<g id="vaadin:paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>
<g id="vaadin:paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>
<g id="vaadin:paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>
<g id="vaadin:paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>
<g id="vaadin:password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>
<g id="vaadin:pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>
<g id="vaadin:pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>
<g id="vaadin:phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>
<g id="vaadin:picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>
<g id="vaadin:pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>
<g id="vaadin:piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>
<g id="vaadin:piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>
<g id="vaadin:pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>
<g id="vaadin:pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>
<g id="vaadin:pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>
<g id="vaadin:play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>
<g id="vaadin:play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>
<g id="vaadin:play"><path d="M2 1v14l12-7z"></path></g>
<g id="vaadin:plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>
<g id="vaadin:plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>
<g id="vaadin:plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>
<g id="vaadin:plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>
<g id="vaadin:plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>
<g id="vaadin:pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>
<g id="vaadin:power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>
<g id="vaadin:presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>
<g id="vaadin:print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>
<g id="vaadin:progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>
<g id="vaadin:puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>
<g id="vaadin:pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>
<g id="vaadin:qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>
<g id="vaadin:question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>
<g id="vaadin:question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>
<g id="vaadin:question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>
<g id="vaadin:quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>
<g id="vaadin:random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>
<g id="vaadin:raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>
<g id="vaadin:recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>
<g id="vaadin:refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>
<g id="vaadin:reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>
<g id="vaadin:reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>
<g id="vaadin:resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>
<g id="vaadin:retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>
<g id="vaadin:rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>
<g id="vaadin:road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>
<g id="vaadin:road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>
<g id="vaadin:road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>
<g id="vaadin:rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>
<g id="vaadin:rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>
<g id="vaadin:rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>
<g id="vaadin:safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>
<g id="vaadin:safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>
<g id="vaadin:screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>
<g id="vaadin:search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>
<g id="vaadin:search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>
<g id="vaadin:select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>
<g id="vaadin:server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>
<g id="vaadin:share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>
<g id="vaadin:share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>
<g id="vaadin:shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>
<g id="vaadin:shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>
<g id="vaadin:shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>
<g id="vaadin:sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>
<g id="vaadin:sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>
<g id="vaadin:sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>
<g id="vaadin:sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>
<g id="vaadin:slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>
<g id="vaadin:sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>
<g id="vaadin:smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>
<g id="vaadin:sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>
<g id="vaadin:spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>
<g id="vaadin:spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>
<g id="vaadin:spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>
<g id="vaadin:spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>
<g id="vaadin:spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>
<g id="vaadin:spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>
<g id="vaadin:split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>
<g id="vaadin:split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>
<g id="vaadin:spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>
<g id="vaadin:square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>
<g id="vaadin:star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>
<g id="vaadin:star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>
<g id="vaadin:start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>
<g id="vaadin:step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>
<g id="vaadin:stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>
<g id="vaadin:stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>
<g id="vaadin:stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:stop"><path d="M1 1h14v14h-14v-14z"></path></g>
<g id="vaadin:stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>
<g id="vaadin:storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>
<g id="vaadin:strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>
<g id="vaadin:subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>
<g id="vaadin:sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>
<g id="vaadin:sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>
<g id="vaadin:tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>
<g id="vaadin:tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>
<g id="vaadin:table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>
<g id="vaadin:tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>
<g id="vaadin:tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>
<g id="vaadin:tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>
<g id="vaadin:tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>
<g id="vaadin:tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>
<g id="vaadin:taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>
<g id="vaadin:terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>
<g id="vaadin:text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>
<g id="vaadin:text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>
<g id="vaadin:text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>
<g id="vaadin:thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>
<g id="vaadin:thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>
<g id="vaadin:thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>
<g id="vaadin:time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>
<g id="vaadin:toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>
<g id="vaadin:tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>
<g id="vaadin:touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>
<g id="vaadin:train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>
<g id="vaadin:trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>
<g id="vaadin:tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>
<g id="vaadin:trendind-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>
<g id="vaadin:trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>
<g id="vaadin:truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>
<g id="vaadin:twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>
<g id="vaadin:twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>
<g id="vaadin:umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>
<g id="vaadin:underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>
<g id="vaadin:unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>
<g id="vaadin:unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>
<g id="vaadin:upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>
<g id="vaadin:upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>
<g id="vaadin:user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>
<g id="vaadin:user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>
<g id="vaadin:user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>
<g id="vaadin:user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>
<g id="vaadin:user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>
<g id="vaadin:user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>
<g id="vaadin:users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>
<g id="vaadin:vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>
<g id="vaadin:vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>
<g id="vaadin:viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>
<g id="vaadin:vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>
<g id="vaadin:vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>
<g id="vaadin:volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>
<g id="vaadin:workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>
<g id="vaadin:wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>
<g id="vaadin:youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>
<g id="vaadin:youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>
</defs></svg>
</vaadin-iconset>`;document.head.appendChild(template$1.content);const sheet=document.createElement("style");sheet.innerHTML=`
${fieldButton.cssText}
${menuOverlay.cssText}
${overlay.cssText}
${requiredField.cssText}
${badge.cssText}
${color.cssText}
${sizing$1.cssText}
${spacing$1.cssText}
${style.cssText}
${typography$1.cssText}
${userColors.cssText}
${utility.cssText}
`;document.body.appendChild(sheet);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=ee=>K=>typeof K=="function"?((Y,J)=>(customElements.define(Y,J),J))(ee,K):((Y,J)=>{const{kind:te,elements:ie}=J;return{kind:te,elements:ie,finisher(ae){customElements.define(Y,ae)}}})(ee,K);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1=(ee,K)=>K.kind==="method"&&K.descriptor&&!("value"in K.descriptor)?{...K,finisher(Y){Y.createProperty(K.key,ee)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:K.key,initializer(){typeof K.initializer=="function"&&(this[K.key]=K.initializer.call(this))},finisher(Y){Y.createProperty(K.key,ee)}};function e(ee){return(K,Y)=>Y!==void 0?((J,te,ie)=>{te.constructor.createProperty(ie,J)})(ee,K,Y):i$1(ee,K)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$1;((n$1=window.HTMLSlotElement)===null||n$1===void 0?void 0:n$1.prototype.assignedElements)!=null;/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const connect=ee=>K=>class extends K{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=ee.subscribe(()=>this.stateChanged(ee.getState())),this.stateChanged(ee.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(Y){}};function n(ee){for(var K=arguments.length,Y=Array(K>1?K-1:0),J=1;J<K;J++)Y[J-1]=arguments[J];throw Error("[Immer] minified error nr: "+ee+(Y.length?" "+Y.map(function(te){return"'"+te+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(ee){return!!ee&&!!ee[Q]}function t(ee){var K;return!!ee&&(function(Y){if(!Y||typeof Y!="object")return!1;var J=Object.getPrototypeOf(Y);if(J===null)return!0;var te=Object.hasOwnProperty.call(J,"constructor")&&J.constructor;return te===Object||typeof te=="function"&&Function.toString.call(te)===Z}(ee)||Array.isArray(ee)||!!ee[L]||!!(!((K=ee.constructor)===null||K===void 0)&&K[L])||s(ee)||v(ee))}function i(ee,K,Y){Y===void 0&&(Y=!1),o(ee)===0?(Y?Object.keys:nn)(ee).forEach(function(J){Y&&typeof J=="symbol"||K(J,ee[J],ee)}):ee.forEach(function(J,te){return K(te,J,ee)})}function o(ee){var K=ee[Q];return K?K.i>3?K.i-4:K.i:Array.isArray(ee)?1:s(ee)?2:v(ee)?3:0}function u(ee,K){return o(ee)===2?ee.has(K):Object.prototype.hasOwnProperty.call(ee,K)}function a(ee,K){return o(ee)===2?ee.get(K):ee[K]}function f(ee,K,Y){var J=o(ee);J===2?ee.set(K,Y):J===3?ee.add(Y):ee[K]=Y}function c(ee,K){return ee===K?ee!==0||1/ee==1/K:ee!=ee&&K!=K}function s(ee){return X&&ee instanceof Map}function v(ee){return q&&ee instanceof Set}function p(ee){return ee.o||ee.t}function l(ee){if(Array.isArray(ee))return Array.prototype.slice.call(ee);var K=rn(ee);delete K[Q];for(var Y=nn(K),J=0;J<Y.length;J++){var te=Y[J],ie=K[te];ie.writable===!1&&(ie.writable=!0,ie.configurable=!0),(ie.get||ie.set)&&(K[te]={configurable:!0,writable:!0,enumerable:ie.enumerable,value:ee[te]})}return Object.create(Object.getPrototypeOf(ee),K)}function d(ee,K){return K===void 0&&(K=!1),y(ee)||r(ee)||!t(ee)||(o(ee)>1&&(ee.set=ee.add=ee.clear=ee.delete=h),Object.freeze(ee),K&&i(ee,function(Y,J){return d(J,!0)},!0)),ee}function h(){n(2)}function y(ee){return ee==null||typeof ee!="object"||Object.isFrozen(ee)}function b(ee){var K=tn[ee];return K||n(18,ee),K}function m(ee,K){tn[ee]||(tn[ee]=K)}function _(){return U}function j(ee,K){K&&(b("Patches"),ee.u=[],ee.s=[],ee.v=K)}function O(ee){g(ee),ee.p.forEach(S),ee.p=null}function g(ee){ee===U&&(U=ee.l)}function w(ee){return U={p:[],l:U,h:ee,m:!0,_:0}}function S(ee){var K=ee[Q];K.i===0||K.i===1?K.j():K.O=!0}function P(ee,K){K._=K.p.length;var Y=K.p[0],J=ee!==void 0&&ee!==Y;return K.h.g||b("ES5").S(K,ee,J),J?(Y[Q].P&&(O(K),n(4)),t(ee)&&(ee=M(K,ee),K.l||x(K,ee)),K.u&&b("Patches").M(Y[Q].t,ee,K.u,K.s)):ee=M(K,Y,[]),O(K),K.u&&K.v(K.u,K.s),ee!==H?ee:void 0}function M(ee,K,Y){if(y(K))return K;var J=K[Q];if(!J)return i(K,function(re,se){return A(ee,J,K,re,se,Y)},!0),K;if(J.A!==ee)return K;if(!J.P)return x(ee,J.t,!0),J.t;if(!J.I){J.I=!0,J.A._--;var te=J.i===4||J.i===5?J.o=l(J.k):J.o,ie=te,ae=!1;J.i===3&&(ie=new Set(te),te.clear(),ae=!0),i(ie,function(re,se){return A(ee,J,te,re,se,Y,ae)}),x(ee,te,!1),Y&&ee.u&&b("Patches").N(J,Y,ee.u,ee.s)}return J.o}function A(ee,K,Y,J,te,ie,ae){if(r(te)){var re=M(ee,te,ie&&K&&K.i!==3&&!u(K.R,J)?ie.concat(J):void 0);if(f(Y,J,re),!r(re))return;ee.m=!1}else ae&&Y.add(te);if(t(te)&&!y(te)){if(!ee.h.D&&ee._<1)return;M(ee,te),K&&K.A.l||x(ee,te)}}function x(ee,K,Y){Y===void 0&&(Y=!1),!ee.l&&ee.h.D&&ee.m&&d(K,Y)}function z(ee,K){var Y=ee[Q];return(Y?p(Y):ee)[K]}function I(ee,K){if(K in ee)for(var Y=Object.getPrototypeOf(ee);Y;){var J=Object.getOwnPropertyDescriptor(Y,K);if(J)return J;Y=Object.getPrototypeOf(Y)}}function k(ee){ee.P||(ee.P=!0,ee.l&&k(ee.l))}function E(ee){ee.o||(ee.o=l(ee.t))}function N(ee,K,Y){var J=s(K)?b("MapSet").F(K,Y):v(K)?b("MapSet").T(K,Y):ee.g?function(te,ie){var ae=Array.isArray(te),re={i:ae?1:0,A:ie?ie.A:_(),P:!1,I:!1,R:{},l:ie,t:te,k:null,o:null,j:null,C:!1},se=re,oe=en;ae&&(se=[re],oe=on);var ne=Proxy.revocable(se,oe),le=ne.revoke,he=ne.proxy;return re.k=he,re.j=le,he}(K,Y):b("ES5").J(K,Y);return(Y?Y.A:_()).p.push(J),J}function R(ee){return r(ee)||n(22,ee),function K(Y){if(!t(Y))return Y;var J,te=Y[Q],ie=o(Y);if(te){if(!te.P&&(te.i<4||!b("ES5").K(te)))return te.t;te.I=!0,J=D(Y,ie),te.I=!1}else J=D(Y,ie);return i(J,function(ae,re){te&&a(te.t,ae)===re||f(J,ae,K(re))}),ie===3?new Set(J):J}(ee)}function D(ee,K){switch(K){case 2:return new Map(ee);case 3:return Array.from(ee)}return l(ee)}function F(){function ee(ie,ae){var re=te[ie];return re?re.enumerable=ae:te[ie]=re={configurable:!0,enumerable:ae,get:function(){var se=this[Q];return en.get(se,ie)},set:function(se){var oe=this[Q];en.set(oe,ie,se)}},re}function K(ie){for(var ae=ie.length-1;ae>=0;ae--){var re=ie[ae][Q];if(!re.P)switch(re.i){case 5:J(re)&&k(re);break;case 4:Y(re)&&k(re)}}}function Y(ie){for(var ae=ie.t,re=ie.k,se=nn(re),oe=se.length-1;oe>=0;oe--){var ne=se[oe];if(ne!==Q){var le=ae[ne];if(le===void 0&&!u(ae,ne))return!0;var he=re[ne],de=he&&he[Q];if(de?de.t!==le:!c(he,le))return!0}}var ce=!!ae[Q];return se.length!==nn(ae).length+(ce?0:1)}function J(ie){var ae=ie.k;if(ae.length!==ie.t.length)return!0;var re=Object.getOwnPropertyDescriptor(ae,ae.length-1);if(re&&!re.get)return!0;for(var se=0;se<ae.length;se++)if(!ae.hasOwnProperty(se))return!0;return!1}var te={};m("ES5",{J:function(ie,ae){var re=Array.isArray(ie),se=function(ne,le){if(ne){for(var he=Array(le.length),de=0;de<le.length;de++)Object.defineProperty(he,""+de,ee(de,!0));return he}var ce=rn(le);delete ce[Q];for(var pe=nn(ce),ve=0;ve<pe.length;ve++){var ue=pe[ve];ce[ue]=ee(ue,ne||!!ce[ue].enumerable)}return Object.create(Object.getPrototypeOf(le),ce)}(re,ie),oe={i:re?5:4,A:ae?ae.A:_(),P:!1,I:!1,R:{},l:ae,t:ie,k:se,o:null,O:!1,C:!1};return Object.defineProperty(se,Q,{value:oe,writable:!0}),se},S:function(ie,ae,re){re?r(ae)&&ae[Q].A===ie&&K(ie.p):(ie.u&&function se(oe){if(oe&&typeof oe=="object"){var ne=oe[Q];if(ne){var le=ne.t,he=ne.k,de=ne.R,ce=ne.i;if(ce===4)i(he,function(fe){fe!==Q&&(le[fe]!==void 0||u(le,fe)?de[fe]||se(he[fe]):(de[fe]=!0,k(ne)))}),i(le,function(fe){he[fe]!==void 0||u(he,fe)||(de[fe]=!1,k(ne))});else if(ce===5){if(J(ne)&&(k(ne),de.length=!0),he.length<le.length)for(var pe=he.length;pe<le.length;pe++)de[pe]=!1;else for(var ve=le.length;ve<he.length;ve++)de[ve]=!0;for(var ue=Math.min(he.length,le.length),me=0;me<ue;me++)he.hasOwnProperty(me)||(de[me]=!0),de[me]===void 0&&se(he[me])}}}}(ie.p[0]),K(ie.p))},K:function(ie){return ie.i===4?Y(ie):J(ie)}})}var G,U,W=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",X=typeof Map<"u",q=typeof Set<"u",B=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Z=""+Object.prototype.constructor,nn=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(ee){return Object.getOwnPropertyNames(ee).concat(Object.getOwnPropertySymbols(ee))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(ee){var K={};return nn(ee).forEach(function(Y){K[Y]=Object.getOwnPropertyDescriptor(ee,Y)}),K},tn={},en={get:function(ee,K){if(K===Q)return ee;var Y=p(ee);if(!u(Y,K))return function(te,ie,ae){var re,se=I(ie,ae);return se?"value"in se?se.value:(re=se.get)===null||re===void 0?void 0:re.call(te.k):void 0}(ee,Y,K);var J=Y[K];return ee.I||!t(J)?J:J===z(ee.t,K)?(E(ee),ee.o[K]=N(ee.A.h,J,ee)):J},has:function(ee,K){return K in p(ee)},ownKeys:function(ee){return Reflect.ownKeys(p(ee))},set:function(ee,K,Y){var J=I(p(ee),K);if(J!=null&&J.set)return J.set.call(ee.k,Y),!0;if(!ee.P){var te=z(p(ee),K),ie=te==null?void 0:te[Q];if(ie&&ie.t===Y)return ee.o[K]=Y,ee.R[K]=!1,!0;if(c(Y,te)&&(Y!==void 0||u(ee.t,K)))return!0;E(ee),k(ee)}return ee.o[K]===Y&&(Y!==void 0||K in ee.o)||Number.isNaN(Y)&&Number.isNaN(ee.o[K])||(ee.o[K]=Y,ee.R[K]=!0),!0},deleteProperty:function(ee,K){return z(ee.t,K)!==void 0||K in ee.t?(ee.R[K]=!1,E(ee),k(ee)):delete ee.R[K],ee.o&&delete ee.o[K],!0},getOwnPropertyDescriptor:function(ee,K){var Y=p(ee),J=Reflect.getOwnPropertyDescriptor(Y,K);return J&&{writable:!0,configurable:ee.i!==1||K!=="length",enumerable:J.enumerable,value:Y[K]}},defineProperty:function(){n(11)},getPrototypeOf:function(ee){return Object.getPrototypeOf(ee.t)},setPrototypeOf:function(){n(12)}},on={};i(en,function(ee,K){on[ee]=function(){return arguments[0]=arguments[0][0],K.apply(this,arguments)}}),on.deleteProperty=function(ee,K){return on.set.call(this,ee,K,void 0)},on.set=function(ee,K,Y){return en.set.call(this,ee[0],K,Y,ee[0])};var un=function(){function ee(Y){var J=this;this.g=B,this.D=!0,this.produce=function(te,ie,ae){if(typeof te=="function"&&typeof ie!="function"){var re=ie;ie=te;var se=J;return function(pe){var ve=this;pe===void 0&&(pe=re);for(var ue=arguments.length,me=Array(ue>1?ue-1:0),fe=1;fe<ue;fe++)me[fe-1]=arguments[fe];return se.produce(pe,function(ge){var _e;return(_e=ie).call.apply(_e,[ve,ge].concat(me))})}}var oe;if(typeof ie!="function"&&n(6),ae!==void 0&&typeof ae!="function"&&n(7),t(te)){var ne=w(J),le=N(J,te,void 0),he=!0;try{oe=ie(le),he=!1}finally{he?O(ne):g(ne)}return typeof Promise<"u"&&oe instanceof Promise?oe.then(function(pe){return j(ne,ae),P(pe,ne)},function(pe){throw O(ne),pe}):(j(ne,ae),P(oe,ne))}if(!te||typeof te!="object"){if((oe=ie(te))===void 0&&(oe=te),oe===H&&(oe=void 0),J.D&&d(oe,!0),ae){var de=[],ce=[];b("Patches").M(te,oe,de,ce),ae(de,ce)}return oe}n(21,te)},this.produceWithPatches=function(te,ie){if(typeof te=="function")return function(oe){for(var ne=arguments.length,le=Array(ne>1?ne-1:0),he=1;he<ne;he++)le[he-1]=arguments[he];return J.produceWithPatches(oe,function(de){return te.apply(void 0,[de].concat(le))})};var ae,re,se=J.produce(te,ie,function(oe,ne){ae=oe,re=ne});return typeof Promise<"u"&&se instanceof Promise?se.then(function(oe){return[oe,ae,re]}):[se,ae,re]},typeof(Y==null?void 0:Y.useProxies)=="boolean"&&this.setUseProxies(Y.useProxies),typeof(Y==null?void 0:Y.autoFreeze)=="boolean"&&this.setAutoFreeze(Y.autoFreeze)}var K=ee.prototype;return K.createDraft=function(Y){t(Y)||n(8),r(Y)&&(Y=R(Y));var J=w(this),te=N(this,Y,void 0);return te[Q].C=!0,g(J),te},K.finishDraft=function(Y,J){var te=Y&&Y[Q],ie=te.A;return j(ie,J),P(void 0,ie)},K.setAutoFreeze=function(Y){this.D=Y},K.setUseProxies=function(Y){Y&&!B&&n(20),this.g=Y},K.applyPatches=function(Y,J){var te;for(te=J.length-1;te>=0;te--){var ie=J[te];if(ie.path.length===0&&ie.op==="replace"){Y=ie.value;break}}te>-1&&(J=J.slice(te+1));var ae=b("Patches").$;return r(Y)?ae(Y,J):this.produce(Y,function(re){return ae(re,J)})},ee}(),an=new un,fn=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);function _typeof(ee){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(K){return typeof K}:function(K){return K&&typeof Symbol=="function"&&K.constructor===Symbol&&K!==Symbol.prototype?"symbol":typeof K},_typeof(ee)}function _toPrimitive(ee,K){if(_typeof(ee)!=="object"||ee===null)return ee;var Y=ee[Symbol.toPrimitive];if(Y!==void 0){var J=Y.call(ee,K||"default");if(_typeof(J)!=="object")return J;throw new TypeError("@@toPrimitive must return a primitive value.")}return(K==="string"?String:Number)(ee)}function _toPropertyKey(ee){var K=_toPrimitive(ee,"string");return _typeof(K)==="symbol"?K:String(K)}function _defineProperty(ee,K,Y){return K=_toPropertyKey(K),K in ee?Object.defineProperty(ee,K,{value:Y,enumerable:!0,configurable:!0,writable:!0}):ee[K]=Y,ee}function ownKeys(ee,K){var Y=Object.keys(ee);if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(ee);K&&(J=J.filter(function(te){return Object.getOwnPropertyDescriptor(ee,te).enumerable})),Y.push.apply(Y,J)}return Y}function _objectSpread2(ee){for(var K=1;K<arguments.length;K++){var Y=arguments[K]!=null?arguments[K]:{};K%2?ownKeys(Object(Y),!0).forEach(function(J){_defineProperty(ee,J,Y[J])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ee,Object.getOwnPropertyDescriptors(Y)):ownKeys(Object(Y)).forEach(function(J){Object.defineProperty(ee,J,Object.getOwnPropertyDescriptor(Y,J))})}return ee}function formatProdErrorMessage(ee){return"Minified Redux error #"+ee+"; visit https://redux.js.org/Errors?code="+ee+" for the full message or use the non-minified dev environment for full errors. "}var $$observable=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),randomString=function(){return Math.random().toString(36).substring(7).split("").join(".")},ActionTypes={INIT:"@@redux/INIT"+randomString(),REPLACE:"@@redux/REPLACE"+randomString(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+randomString()}};function isPlainObject$2(ee){if(typeof ee!="object"||ee===null)return!1;for(var K=ee;Object.getPrototypeOf(K)!==null;)K=Object.getPrototypeOf(K);return Object.getPrototypeOf(ee)===K}function createStore(ee,K,Y){var J;if(typeof K=="function"&&typeof Y=="function"||typeof Y=="function"&&typeof arguments[3]=="function")throw new Error(formatProdErrorMessage(0));if(typeof K=="function"&&typeof Y>"u"&&(Y=K,K=void 0),typeof Y<"u"){if(typeof Y!="function")throw new Error(formatProdErrorMessage(1));return Y(createStore)(ee,K)}if(typeof ee!="function")throw new Error(formatProdErrorMessage(2));var te=ee,ie=K,ae=[],re=ae,se=!1;function oe(){re===ae&&(re=ae.slice())}function ne(){if(se)throw new Error(formatProdErrorMessage(3));return ie}function le(pe){if(typeof pe!="function")throw new Error(formatProdErrorMessage(4));if(se)throw new Error(formatProdErrorMessage(5));var ve=!0;return oe(),re.push(pe),function(){if(ve){if(se)throw new Error(formatProdErrorMessage(6));ve=!1,oe();var me=re.indexOf(pe);re.splice(me,1),ae=null}}}function he(pe){if(!isPlainObject$2(pe))throw new Error(formatProdErrorMessage(7));if(typeof pe.type>"u")throw new Error(formatProdErrorMessage(8));if(se)throw new Error(formatProdErrorMessage(9));try{se=!0,ie=te(ie,pe)}finally{se=!1}for(var ve=ae=re,ue=0;ue<ve.length;ue++){var me=ve[ue];me()}return pe}function de(pe){if(typeof pe!="function")throw new Error(formatProdErrorMessage(10));te=pe,he({type:ActionTypes.REPLACE})}function ce(){var pe,ve=le;return pe={subscribe:function(me){if(typeof me!="object"||me===null)throw new Error(formatProdErrorMessage(11));function fe(){me.next&&me.next(ne())}fe();var ge=ve(fe);return{unsubscribe:ge}}},pe[$$observable]=function(){return this},pe}return he({type:ActionTypes.INIT}),J={dispatch:he,subscribe:le,getState:ne,replaceReducer:de},J[$$observable]=ce,J}function assertReducerShape(ee){Object.keys(ee).forEach(function(K){var Y=ee[K],J=Y(void 0,{type:ActionTypes.INIT});if(typeof J>"u")throw new Error(formatProdErrorMessage(12));if(typeof Y(void 0,{type:ActionTypes.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(formatProdErrorMessage(13))})}function combineReducers(ee){for(var K=Object.keys(ee),Y={},J=0;J<K.length;J++){var te=K[J];typeof ee[te]=="function"&&(Y[te]=ee[te])}var ie=Object.keys(Y),ae;try{assertReducerShape(Y)}catch(re){ae=re}return function(se,oe){if(se===void 0&&(se={}),ae)throw ae;for(var ne=!1,le={},he=0;he<ie.length;he++){var de=ie[he],ce=Y[de],pe=se[de],ve=ce(pe,oe);if(typeof ve>"u")throw oe&&oe.type,new Error(formatProdErrorMessage(14));le[de]=ve,ne=ne||ve!==pe}return ne=ne||ie.length!==Object.keys(se).length,ne?le:se}}function compose(){for(var ee=arguments.length,K=new Array(ee),Y=0;Y<ee;Y++)K[Y]=arguments[Y];return K.length===0?function(J){return J}:K.length===1?K[0]:K.reduce(function(J,te){return function(){return J(te.apply(void 0,arguments))}})}function applyMiddleware(){for(var ee=arguments.length,K=new Array(ee),Y=0;Y<ee;Y++)K[Y]=arguments[Y];return function(J){return function(){var te=J.apply(void 0,arguments),ie=function(){throw new Error(formatProdErrorMessage(15))},ae={getState:te.getState,dispatch:function(){return ie.apply(void 0,arguments)}},re=K.map(function(se){return se(ae)});return ie=compose.apply(void 0,re)(te.dispatch),_objectSpread2(_objectSpread2({},te),{},{dispatch:ie})}}}function createThunkMiddleware(ee){var K=function(J){var te=J.dispatch,ie=J.getState;return function(ae){return function(re){return typeof re=="function"?re(te,ie,ee):ae(re)}}};return K}var thunk=createThunkMiddleware();thunk.withExtraArgument=createThunkMiddleware;const thunkMiddleware=thunk;var __extends=globalThis&&globalThis.__extends||function(){var ee=function(K,Y){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(J,te){J.__proto__=te}||function(J,te){for(var ie in te)Object.prototype.hasOwnProperty.call(te,ie)&&(J[ie]=te[ie])},ee(K,Y)};return function(K,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Class extends value "+String(Y)+" is not a constructor or null");ee(K,Y);function J(){this.constructor=K}K.prototype=Y===null?Object.create(Y):(J.prototype=Y.prototype,new J)}}(),__generator=globalThis&&globalThis.__generator||function(ee,K){var Y={label:0,sent:function(){if(ie[0]&1)throw ie[1];return ie[1]},trys:[],ops:[]},J,te,ie,ae;return ae={next:re(0),throw:re(1),return:re(2)},typeof Symbol=="function"&&(ae[Symbol.iterator]=function(){return this}),ae;function re(oe){return function(ne){return se([oe,ne])}}function se(oe){if(J)throw new TypeError("Generator is already executing.");for(;Y;)try{if(J=1,te&&(ie=oe[0]&2?te.return:oe[0]?te.throw||((ie=te.return)&&ie.call(te),0):te.next)&&!(ie=ie.call(te,oe[1])).done)return ie;switch(te=0,ie&&(oe=[oe[0]&2,ie.value]),oe[0]){case 0:case 1:ie=oe;break;case 4:return Y.label++,{value:oe[1],done:!1};case 5:Y.label++,te=oe[1],oe=[0];continue;case 7:oe=Y.ops.pop(),Y.trys.pop();continue;default:if(ie=Y.trys,!(ie=ie.length>0&&ie[ie.length-1])&&(oe[0]===6||oe[0]===2)){Y=0;continue}if(oe[0]===3&&(!ie||oe[1]>ie[0]&&oe[1]<ie[3])){Y.label=oe[1];break}if(oe[0]===6&&Y.label<ie[1]){Y.label=ie[1],ie=oe;break}if(ie&&Y.label<ie[2]){Y.label=ie[2],Y.ops.push(oe);break}ie[2]&&Y.ops.pop(),Y.trys.pop();continue}oe=K.call(ee,Y)}catch(ne){oe=[6,ne],te=0}finally{J=ie=0}if(oe[0]&5)throw oe[1];return{value:oe[0]?oe[1]:void 0,done:!0}}},__spreadArray=globalThis&&globalThis.__spreadArray||function(ee,K){for(var Y=0,J=K.length,te=ee.length;Y<J;Y++,te++)ee[te]=K[Y];return ee},__defProp$m=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=function(ee,K,Y){return K in ee?__defProp$m(ee,K,{enumerable:!0,configurable:!0,writable:!0,value:Y}):ee[K]=Y},__spreadValues=function(ee,K){for(var Y in K||(K={}))__hasOwnProp.call(K,Y)&&__defNormalProp(ee,Y,K[Y]);if(__getOwnPropSymbols)for(var J=0,te=__getOwnPropSymbols(K);J<te.length;J++){var Y=te[J];__propIsEnum.call(K,Y)&&__defNormalProp(ee,Y,K[Y])}return ee},__spreadProps=function(ee,K){return __defProps(ee,__getOwnPropDescs(K))},__async=function(ee,K,Y){return new Promise(function(J,te){var ie=function(se){try{re(Y.next(se))}catch(oe){te(oe)}},ae=function(se){try{re(Y.throw(se))}catch(oe){te(oe)}},re=function(se){return se.done?J(se.value):Promise.resolve(se.value).then(ie,ae)};re((Y=Y.apply(ee,K)).next())})},composeWithDevTools=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?compose:compose.apply(null,arguments)};function isPlainObject$1(ee){if(typeof ee!="object"||ee===null)return!1;var K=Object.getPrototypeOf(ee);if(K===null)return!0;for(var Y=K;Object.getPrototypeOf(Y)!==null;)Y=Object.getPrototypeOf(Y);return K===Y}var MiddlewareArray=function(ee){__extends(K,ee);function K(){for(var Y=[],J=0;J<arguments.length;J++)Y[J]=arguments[J];var te=ee.apply(this,Y)||this;return Object.setPrototypeOf(te,K.prototype),te}return Object.defineProperty(K,Symbol.species,{get:function(){return K},enumerable:!1,configurable:!0}),K.prototype.concat=function(){for(var Y=[],J=0;J<arguments.length;J++)Y[J]=arguments[J];return ee.prototype.concat.apply(this,Y)},K.prototype.prepend=function(){for(var Y=[],J=0;J<arguments.length;J++)Y[J]=arguments[J];return Y.length===1&&Array.isArray(Y[0])?new(K.bind.apply(K,__spreadArray([void 0],Y[0].concat(this)))):new(K.bind.apply(K,__spreadArray([void 0],Y.concat(this))))},K}(Array);function freezeDraftable(ee){return t(ee)?fn(ee,function(){}):ee}function isBoolean$1(ee){return typeof ee=="boolean"}function curryGetDefaultMiddleware(){return function(K){return getDefaultMiddleware(K)}}function getDefaultMiddleware(ee){ee===void 0&&(ee={});var K=ee.thunk,Y=K===void 0?!0:K;ee.immutableCheck,ee.serializableCheck;var J=new MiddlewareArray;return Y&&(isBoolean$1(Y)?J.push(thunkMiddleware):J.push(thunkMiddleware.withExtraArgument(Y.extraArgument))),J}var IS_PRODUCTION=!0;function configureStore(ee){var K=curryGetDefaultMiddleware(),Y=ee||{},J=Y.reducer,te=J===void 0?void 0:J,ie=Y.middleware,ae=ie===void 0?K():ie,re=Y.devTools,se=re===void 0?!0:re,oe=Y.preloadedState,ne=oe===void 0?void 0:oe,le=Y.enhancers,he=le===void 0?void 0:le,de;if(typeof te=="function")de=te;else if(isPlainObject$1(te))de=combineReducers(te);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var ce=ae;typeof ce=="function"&&(ce=ce(K));var pe=applyMiddleware.apply(void 0,ce),ve=compose;se&&(ve=composeWithDevTools(__spreadValues({trace:!IS_PRODUCTION},typeof se=="object"&&se)));var ue=[pe];Array.isArray(he)?ue=__spreadArray([pe],he):typeof he=="function"&&(ue=he(ue));var me=ve.apply(void 0,ue);return createStore(de,ne,me)}function createAction(ee,K){function Y(){for(var J=[],te=0;te<arguments.length;te++)J[te]=arguments[te];if(K){var ie=K.apply(void 0,J);if(!ie)throw new Error("prepareAction did not return an object");return __spreadValues(__spreadValues({type:ee,payload:ie.payload},"meta"in ie&&{meta:ie.meta}),"error"in ie&&{error:ie.error})}return{type:ee,payload:J[0]}}return Y.toString=function(){return""+ee},Y.type=ee,Y.match=function(J){return J.type===ee},Y}function executeReducerBuilderCallback(ee){var K={},Y=[],J,te={addCase:function(ie,ae){var re=typeof ie=="string"?ie:ie.type;if(re in K)throw new Error("addCase cannot be called with two reducers for the same action type");return K[re]=ae,te},addMatcher:function(ie,ae){return Y.push({matcher:ie,reducer:ae}),te},addDefaultCase:function(ie){return J=ie,te}};return ee(te),[K,Y,J]}function isStateFunction(ee){return typeof ee=="function"}function createReducer(ee,K,Y,J){Y===void 0&&(Y=[]);var te=typeof K=="function"?executeReducerBuilderCallback(K):[K,Y,J],ie=te[0],ae=te[1],re=te[2],se;if(isStateFunction(ee))se=function(){return freezeDraftable(ee())};else{var oe=freezeDraftable(ee);se=function(){return oe}}function ne(le,he){le===void 0&&(le=se());var de=__spreadArray([ie[he.type]],ae.filter(function(ce){var pe=ce.matcher;return pe(he)}).map(function(ce){var pe=ce.reducer;return pe}));return de.filter(function(ce){return!!ce}).length===0&&(de=[re]),de.reduce(function(ce,pe){if(pe)if(r(ce)){var ve=ce,ue=pe(ve,he);return ue===void 0?ce:ue}else{if(t(ce))return fn(ce,function(me){return pe(me,he)});var ue=pe(ce,he);if(ue===void 0){if(ce===null)return ce;throw Error("A case reducer on a non-draftable value must not return undefined")}return ue}return ce},le)}return ne.getInitialState=se,ne}function getType2(ee,K){return ee+"/"+K}function createSlice(ee){var K=ee.name;if(!K)throw new Error("`name` is a required option for createSlice");typeof process<"u";var Y=typeof ee.initialState=="function"?ee.initialState:freezeDraftable(ee.initialState),J=ee.reducers||{},te=Object.keys(J),ie={},ae={},re={};te.forEach(function(ne){var le=J[ne],he=getType2(K,ne),de,ce;"reducer"in le?(de=le.reducer,ce=le.prepare):de=le,ie[ne]=de,ae[he]=de,re[ne]=ce?createAction(he,ce):createAction(he)});function se(){var ne=typeof ee.extraReducers=="function"?executeReducerBuilderCallback(ee.extraReducers):[ee.extraReducers],le=ne[0],he=le===void 0?{}:le,de=ne[1],ce=de===void 0?[]:de,pe=ne[2],ve=pe===void 0?void 0:pe,ue=__spreadValues(__spreadValues({},he),ae);return createReducer(Y,function(me){for(var fe in ue)me.addCase(fe,ue[fe]);for(var ge=0,_e=ce;ge<_e.length;ge++){var be=_e[ge];me.addMatcher(be.matcher,be.reducer)}ve&&me.addDefaultCase(ve)})}var oe;return{name:K,reducer:function(ne,le){return oe||(oe=se()),oe(ne,le)},actions:re,caseReducers:ie,getInitialState:function(){return oe||(oe=se()),oe.getInitialState()}}}var urlAlphabet="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",nanoid=function(ee){ee===void 0&&(ee=21);for(var K="",Y=ee;Y--;)K+=urlAlphabet[Math.random()*64|0];return K},commonProperties=["name","message","stack","code"],RejectWithValue=function(){function ee(K,Y){this.payload=K,this.meta=Y}return ee}(),FulfillWithMeta=function(){function ee(K,Y){this.payload=K,this.meta=Y}return ee}(),miniSerializeError=function(ee){if(typeof ee=="object"&&ee!==null){for(var K={},Y=0,J=commonProperties;Y<J.length;Y++){var te=J[Y];typeof ee[te]=="string"&&(K[te]=ee[te])}return K}return{message:String(ee)}};(function(){function ee(K,Y,J){var te=createAction(K+"/fulfilled",function(oe,ne,le,he){return{payload:oe,meta:__spreadProps(__spreadValues({},he||{}),{arg:le,requestId:ne,requestStatus:"fulfilled"})}}),ie=createAction(K+"/pending",function(oe,ne,le){return{payload:void 0,meta:__spreadProps(__spreadValues({},le||{}),{arg:ne,requestId:oe,requestStatus:"pending"})}}),ae=createAction(K+"/rejected",function(oe,ne,le,he,de){return{payload:he,error:(J&&J.serializeError||miniSerializeError)(oe||"Rejected"),meta:__spreadProps(__spreadValues({},de||{}),{arg:le,requestId:ne,rejectedWithValue:!!he,requestStatus:"rejected",aborted:(oe==null?void 0:oe.name)==="AbortError",condition:(oe==null?void 0:oe.name)==="ConditionError"})}}),re=typeof AbortController<"u"?AbortController:function(){function oe(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return oe.prototype.abort=function(){},oe}();function se(oe){return function(ne,le,he){var de=J!=null&&J.idGenerator?J.idGenerator(oe):nanoid(),ce=new re,pe;function ve(me){pe=me,ce.abort()}var ue=function(){return __async(this,null,function(){var me,fe,ge,_e,be,Me,we;return __generator(this,function(ze){switch(ze.label){case 0:return ze.trys.push([0,4,,5]),_e=(me=J==null?void 0:J.condition)==null?void 0:me.call(J,oe,{getState:le,extra:he}),isThenable(_e)?[4,_e]:[3,2];case 1:_e=ze.sent(),ze.label=2;case 2:if(_e===!1||ce.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return be=new Promise(function(ye,xe){return ce.signal.addEventListener("abort",function(){return xe({name:"AbortError",message:pe||"Aborted"})})}),ne(ie(de,oe,(fe=J==null?void 0:J.getPendingMeta)==null?void 0:fe.call(J,{requestId:de,arg:oe},{getState:le,extra:he}))),[4,Promise.race([be,Promise.resolve(Y(oe,{dispatch:ne,getState:le,extra:he,requestId:de,signal:ce.signal,abort:ve,rejectWithValue:function(ye,xe){return new RejectWithValue(ye,xe)},fulfillWithValue:function(ye,xe){return new FulfillWithMeta(ye,xe)}})).then(function(ye){if(ye instanceof RejectWithValue)throw ye;return ye instanceof FulfillWithMeta?te(ye.payload,de,oe,ye.meta):te(ye,de,oe)})])];case 3:return ge=ze.sent(),[3,5];case 4:return Me=ze.sent(),ge=Me instanceof RejectWithValue?ae(null,de,oe,Me.payload,Me.meta):ae(Me,de,oe),[3,5];case 5:return we=J&&!J.dispatchConditionRejection&&ae.match(ge)&&ge.meta.condition,we||ne(ge),[2,ge]}})})}();return Object.assign(ue,{abort:ve,requestId:de,arg:oe,unwrap:function(){return ue.then(unwrapResult)}})}}return Object.assign(se,{pending:ie,rejected:ae,fulfilled:te,typePrefix:K})}return ee.withTypes=function(){return ee},ee})();function unwrapResult(ee){if(ee.meta&&ee.meta.rejectedWithValue)throw ee.payload;if(ee.error)throw ee.error;return ee.payload}function isThenable(ee){return ee!==null&&typeof ee=="object"&&typeof ee.then=="function"}var alm="listenerMiddleware";createAction(alm+"/add");createAction(alm+"/removeAll");createAction(alm+"/remove");var promise;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);F();function bind(ee,K){return function(){return ee.apply(K,arguments)}}const{toString}=Object.prototype,{getPrototypeOf}=Object,kindOf=(ee=>K=>{const Y=toString.call(K);return ee[Y]||(ee[Y]=Y.slice(8,-1).toLowerCase())})(Object.create(null)),kindOfTest=ee=>(ee=ee.toLowerCase(),K=>kindOf(K)===ee),typeOfTest=ee=>K=>typeof K===ee,{isArray}=Array,isUndefined=typeOfTest("undefined");function isBuffer(ee){return ee!==null&&!isUndefined(ee)&&ee.constructor!==null&&!isUndefined(ee.constructor)&&isFunction(ee.constructor.isBuffer)&&ee.constructor.isBuffer(ee)}const isArrayBuffer=kindOfTest("ArrayBuffer");function isArrayBufferView(ee){let K;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?K=ArrayBuffer.isView(ee):K=ee&&ee.buffer&&isArrayBuffer(ee.buffer),K}const isString=typeOfTest("string"),isFunction=typeOfTest("function"),isNumber=typeOfTest("number"),isObject=ee=>ee!==null&&typeof ee=="object",isBoolean=ee=>ee===!0||ee===!1,isPlainObject=ee=>{if(kindOf(ee)!=="object")return!1;const K=getPrototypeOf(ee);return(K===null||K===Object.prototype||Object.getPrototypeOf(K)===null)&&!(Symbol.toStringTag in ee)&&!(Symbol.iterator in ee)},isDate=kindOfTest("Date"),isFile=kindOfTest("File"),isBlob=kindOfTest("Blob"),isFileList=kindOfTest("FileList"),isStream=ee=>isObject(ee)&&isFunction(ee.pipe),isFormData=ee=>{const K="[object FormData]";return ee&&(typeof FormData=="function"&&ee instanceof FormData||toString.call(ee)===K||isFunction(ee.toString)&&ee.toString()===K)},isURLSearchParams=kindOfTest("URLSearchParams"),trim=ee=>ee.trim?ee.trim():ee.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function forEach(ee,K,{allOwnKeys:Y=!1}={}){if(ee===null||typeof ee>"u")return;let J,te;if(typeof ee!="object"&&(ee=[ee]),isArray(ee))for(J=0,te=ee.length;J<te;J++)K.call(null,ee[J],J,ee);else{const ie=Y?Object.getOwnPropertyNames(ee):Object.keys(ee),ae=ie.length;let re;for(J=0;J<ae;J++)re=ie[J],K.call(null,ee[re],re,ee)}}function findKey(ee,K){K=K.toLowerCase();const Y=Object.keys(ee);let J=Y.length,te;for(;J-- >0;)if(te=Y[J],K===te.toLowerCase())return te;return null}const _global=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),isContextDefined=ee=>!isUndefined(ee)&&ee!==_global;function merge(){const{caseless:ee}=isContextDefined(this)&&this||{},K={},Y=(J,te)=>{const ie=ee&&findKey(K,te)||te;isPlainObject(K[ie])&&isPlainObject(J)?K[ie]=merge(K[ie],J):isPlainObject(J)?K[ie]=merge({},J):isArray(J)?K[ie]=J.slice():K[ie]=J};for(let J=0,te=arguments.length;J<te;J++)arguments[J]&&forEach(arguments[J],Y);return K}const extend=(ee,K,Y,{allOwnKeys:J}={})=>(forEach(K,(te,ie)=>{Y&&isFunction(te)?ee[ie]=bind(te,Y):ee[ie]=te},{allOwnKeys:J}),ee),stripBOM=ee=>(ee.charCodeAt(0)===65279&&(ee=ee.slice(1)),ee),inherits=(ee,K,Y,J)=>{ee.prototype=Object.create(K.prototype,J),ee.prototype.constructor=ee,Object.defineProperty(ee,"super",{value:K.prototype}),Y&&Object.assign(ee.prototype,Y)},toFlatObject=(ee,K,Y,J)=>{let te,ie,ae;const re={};if(K=K||{},ee==null)return K;do{for(te=Object.getOwnPropertyNames(ee),ie=te.length;ie-- >0;)ae=te[ie],(!J||J(ae,ee,K))&&!re[ae]&&(K[ae]=ee[ae],re[ae]=!0);ee=Y!==!1&&getPrototypeOf(ee)}while(ee&&(!Y||Y(ee,K))&&ee!==Object.prototype);return K},endsWith=(ee,K,Y)=>{ee=String(ee),(Y===void 0||Y>ee.length)&&(Y=ee.length),Y-=K.length;const J=ee.indexOf(K,Y);return J!==-1&&J===Y},toArray=ee=>{if(!ee)return null;if(isArray(ee))return ee;let K=ee.length;if(!isNumber(K))return null;const Y=new Array(K);for(;K-- >0;)Y[K]=ee[K];return Y},isTypedArray=(ee=>K=>ee&&K instanceof ee)(typeof Uint8Array<"u"&&getPrototypeOf(Uint8Array)),forEachEntry=(ee,K)=>{const J=(ee&&ee[Symbol.iterator]).call(ee);let te;for(;(te=J.next())&&!te.done;){const ie=te.value;K.call(ee,ie[0],ie[1])}},matchAll=(ee,K)=>{let Y;const J=[];for(;(Y=ee.exec(K))!==null;)J.push(Y);return J},isHTMLForm=kindOfTest("HTMLFormElement"),toCamelCase=ee=>ee.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(Y,J,te){return J.toUpperCase()+te}),hasOwnProperty=(({hasOwnProperty:ee})=>(K,Y)=>ee.call(K,Y))(Object.prototype),isRegExp=kindOfTest("RegExp"),reduceDescriptors=(ee,K)=>{const Y=Object.getOwnPropertyDescriptors(ee),J={};forEach(Y,(te,ie)=>{K(te,ie,ee)!==!1&&(J[ie]=te)}),Object.defineProperties(ee,J)},freezeMethods=ee=>{reduceDescriptors(ee,(K,Y)=>{if(isFunction(ee)&&["arguments","caller","callee"].indexOf(Y)!==-1)return!1;const J=ee[Y];if(isFunction(J)){if(K.enumerable=!1,"writable"in K){K.writable=!1;return}K.set||(K.set=()=>{throw Error("Can not rewrite read-only method '"+Y+"'")})}})},toObjectSet=(ee,K)=>{const Y={},J=te=>{te.forEach(ie=>{Y[ie]=!0})};return isArray(ee)?J(ee):J(String(ee).split(K)),Y},noop=()=>{},toFiniteNumber=(ee,K)=>(ee=+ee,Number.isFinite(ee)?ee:K),ALPHA="abcdefghijklmnopqrstuvwxyz",DIGIT="0123456789",ALPHABET={DIGIT,ALPHA,ALPHA_DIGIT:ALPHA+ALPHA.toUpperCase()+DIGIT},generateString=(ee=16,K=ALPHABET.ALPHA_DIGIT)=>{let Y="";const{length:J}=K;for(;ee--;)Y+=K[Math.random()*J|0];return Y};function isSpecCompliantForm(ee){return!!(ee&&isFunction(ee.append)&&ee[Symbol.toStringTag]==="FormData"&&ee[Symbol.iterator])}const toJSONObject=ee=>{const K=new Array(10),Y=(J,te)=>{if(isObject(J)){if(K.indexOf(J)>=0)return;if(!("toJSON"in J)){K[te]=J;const ie=isArray(J)?[]:{};return forEach(J,(ae,re)=>{const se=Y(ae,te+1);!isUndefined(se)&&(ie[re]=se)}),K[te]=void 0,ie}}return J};return Y(ee,0)},utils={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isBoolean,isObject,isPlainObject,isUndefined,isDate,isFile,isBlob,isRegExp,isFunction,isStream,isURLSearchParams,isTypedArray,isFileList,forEach,merge,extend,trim,stripBOM,inherits,toFlatObject,kindOf,kindOfTest,endsWith,toArray,forEachEntry,matchAll,isHTMLForm,hasOwnProperty,hasOwnProp:hasOwnProperty,reduceDescriptors,freezeMethods,toObjectSet,toCamelCase,noop,toFiniteNumber,findKey,global:_global,isContextDefined,ALPHABET,generateString,isSpecCompliantForm,toJSONObject};function AxiosError(ee,K,Y,J,te){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=ee,this.name="AxiosError",K&&(this.code=K),Y&&(this.config=Y),J&&(this.request=J),te&&(this.response=te)}utils.inherits(AxiosError,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:utils.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const prototype$1=AxiosError.prototype,descriptors={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(ee=>{descriptors[ee]={value:ee}});Object.defineProperties(AxiosError,descriptors);Object.defineProperty(prototype$1,"isAxiosError",{value:!0});AxiosError.from=(ee,K,Y,J,te,ie)=>{const ae=Object.create(prototype$1);return utils.toFlatObject(ee,ae,function(se){return se!==Error.prototype},re=>re!=="isAxiosError"),AxiosError.call(ae,ee.message,K,Y,J,te),ae.cause=ee,ae.name=ee.name,ie&&Object.assign(ae,ie),ae};const httpAdapter=null;function isVisitable(ee){return utils.isPlainObject(ee)||utils.isArray(ee)}function removeBrackets(ee){return utils.endsWith(ee,"[]")?ee.slice(0,-2):ee}function renderKey(ee,K,Y){return ee?ee.concat(K).map(function(te,ie){return te=removeBrackets(te),!Y&&ie?"["+te+"]":te}).join(Y?".":""):K}function isFlatArray(ee){return utils.isArray(ee)&&!ee.some(isVisitable)}const predicates=utils.toFlatObject(utils,{},null,function(K){return/^is[A-Z]/.test(K)});function toFormData(ee,K,Y){if(!utils.isObject(ee))throw new TypeError("target must be an object");K=K||new FormData,Y=utils.toFlatObject(Y,{metaTokens:!0,dots:!1,indexes:!1},!1,function(pe,ve){return!utils.isUndefined(ve[pe])});const J=Y.metaTokens,te=Y.visitor||ne,ie=Y.dots,ae=Y.indexes,se=(Y.Blob||typeof Blob<"u"&&Blob)&&utils.isSpecCompliantForm(K);if(!utils.isFunction(te))throw new TypeError("visitor must be a function");function oe(ce){if(ce===null)return"";if(utils.isDate(ce))return ce.toISOString();if(!se&&utils.isBlob(ce))throw new AxiosError("Blob is not supported. Use a Buffer instead.");return utils.isArrayBuffer(ce)||utils.isTypedArray(ce)?se&&typeof Blob=="function"?new Blob([ce]):Buffer.from(ce):ce}function ne(ce,pe,ve){let ue=ce;if(ce&&!ve&&typeof ce=="object"){if(utils.endsWith(pe,"{}"))pe=J?pe:pe.slice(0,-2),ce=JSON.stringify(ce);else if(utils.isArray(ce)&&isFlatArray(ce)||(utils.isFileList(ce)||utils.endsWith(pe,"[]"))&&(ue=utils.toArray(ce)))return pe=removeBrackets(pe),ue.forEach(function(fe,ge){!(utils.isUndefined(fe)||fe===null)&&K.append(ae===!0?renderKey([pe],ge,ie):ae===null?pe:pe+"[]",oe(fe))}),!1}return isVisitable(ce)?!0:(K.append(renderKey(ve,pe,ie),oe(ce)),!1)}const le=[],he=Object.assign(predicates,{defaultVisitor:ne,convertValue:oe,isVisitable});function de(ce,pe){if(!utils.isUndefined(ce)){if(le.indexOf(ce)!==-1)throw Error("Circular reference detected in "+pe.join("."));le.push(ce),utils.forEach(ce,function(ue,me){(!(utils.isUndefined(ue)||ue===null)&&te.call(K,ue,utils.isString(me)?me.trim():me,pe,he))===!0&&de(ue,pe?pe.concat(me):[me])}),le.pop()}}if(!utils.isObject(ee))throw new TypeError("data must be an object");return de(ee),K}function encode$1(ee){const K={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(ee).replace(/[!'()~]|%20|%00/g,function(J){return K[J]})}function AxiosURLSearchParams(ee,K){this._pairs=[],ee&&toFormData(ee,this,K)}const prototype=AxiosURLSearchParams.prototype;prototype.append=function(K,Y){this._pairs.push([K,Y])};prototype.toString=function(K){const Y=K?function(J){return K.call(this,J,encode$1)}:encode$1;return this._pairs.map(function(te){return Y(te[0])+"="+Y(te[1])},"").join("&")};function encode(ee){return encodeURIComponent(ee).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function buildURL(ee,K,Y){if(!K)return ee;const J=Y&&Y.encode||encode,te=Y&&Y.serialize;let ie;if(te?ie=te(K,Y):ie=utils.isURLSearchParams(K)?K.toString():new AxiosURLSearchParams(K,Y).toString(J),ie){const ae=ee.indexOf("#");ae!==-1&&(ee=ee.slice(0,ae)),ee+=(ee.indexOf("?")===-1?"?":"&")+ie}return ee}class InterceptorManager{constructor(){this.handlers=[]}use(K,Y,J){return this.handlers.push({fulfilled:K,rejected:Y,synchronous:J?J.synchronous:!1,runWhen:J?J.runWhen:null}),this.handlers.length-1}eject(K){this.handlers[K]&&(this.handlers[K]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(K){utils.forEach(this.handlers,function(J){J!==null&&K(J)})}}const InterceptorManager$1=InterceptorManager,transitionalDefaults={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},URLSearchParams$1=typeof URLSearchParams<"u"?URLSearchParams:AxiosURLSearchParams,FormData$1=typeof FormData<"u"?FormData:null,Blob$1=typeof Blob<"u"?Blob:null,isStandardBrowserEnv=(()=>{let ee;return typeof navigator<"u"&&((ee=navigator.product)==="ReactNative"||ee==="NativeScript"||ee==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),isStandardBrowserWebWorkerEnv=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),platform={isBrowser:!0,classes:{URLSearchParams:URLSearchParams$1,FormData:FormData$1,Blob:Blob$1},isStandardBrowserEnv,isStandardBrowserWebWorkerEnv,protocols:["http","https","file","blob","url","data"]};function toURLEncodedForm(ee,K){return toFormData(ee,new platform.classes.URLSearchParams,Object.assign({visitor:function(Y,J,te,ie){return platform.isNode&&utils.isBuffer(Y)?(this.append(J,Y.toString("base64")),!1):ie.defaultVisitor.apply(this,arguments)}},K))}function parsePropPath(ee){return utils.matchAll(/\w+|\[(\w*)]/g,ee).map(K=>K[0]==="[]"?"":K[1]||K[0])}function arrayToObject(ee){const K={},Y=Object.keys(ee);let J;const te=Y.length;let ie;for(J=0;J<te;J++)ie=Y[J],K[ie]=ee[ie];return K}function formDataToJSON(ee){function K(Y,J,te,ie){let ae=Y[ie++];const re=Number.isFinite(+ae),se=ie>=Y.length;return ae=!ae&&utils.isArray(te)?te.length:ae,se?(utils.hasOwnProp(te,ae)?te[ae]=[te[ae],J]:te[ae]=J,!re):((!te[ae]||!utils.isObject(te[ae]))&&(te[ae]=[]),K(Y,J,te[ae],ie)&&utils.isArray(te[ae])&&(te[ae]=arrayToObject(te[ae])),!re)}if(utils.isFormData(ee)&&utils.isFunction(ee.entries)){const Y={};return utils.forEachEntry(ee,(J,te)=>{K(parsePropPath(J),te,Y,0)}),Y}return null}const DEFAULT_CONTENT_TYPE={"Content-Type":void 0};function stringifySafely(ee,K,Y){if(utils.isString(ee))try{return(K||JSON.parse)(ee),utils.trim(ee)}catch(J){if(J.name!=="SyntaxError")throw J}return(Y||JSON.stringify)(ee)}const defaults={transitional:transitionalDefaults,adapter:["xhr","http"],transformRequest:[function(K,Y){const J=Y.getContentType()||"",te=J.indexOf("application/json")>-1,ie=utils.isObject(K);if(ie&&utils.isHTMLForm(K)&&(K=new FormData(K)),utils.isFormData(K))return te&&te?JSON.stringify(formDataToJSON(K)):K;if(utils.isArrayBuffer(K)||utils.isBuffer(K)||utils.isStream(K)||utils.isFile(K)||utils.isBlob(K))return K;if(utils.isArrayBufferView(K))return K.buffer;if(utils.isURLSearchParams(K))return Y.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),K.toString();let re;if(ie){if(J.indexOf("application/x-www-form-urlencoded")>-1)return toURLEncodedForm(K,this.formSerializer).toString();if((re=utils.isFileList(K))||J.indexOf("multipart/form-data")>-1){const se=this.env&&this.env.FormData;return toFormData(re?{"files[]":K}:K,se&&new se,this.formSerializer)}}return ie||te?(Y.setContentType("application/json",!1),stringifySafely(K)):K}],transformResponse:[function(K){const Y=this.transitional||defaults.transitional,J=Y&&Y.forcedJSONParsing,te=this.responseType==="json";if(K&&utils.isString(K)&&(J&&!this.responseType||te)){const ae=!(Y&&Y.silentJSONParsing)&&te;try{return JSON.parse(K)}catch(re){if(ae)throw re.name==="SyntaxError"?AxiosError.from(re,AxiosError.ERR_BAD_RESPONSE,this,null,this.response):re}}return K}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:platform.classes.FormData,Blob:platform.classes.Blob},validateStatus:function(K){return K>=200&&K<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};utils.forEach(["delete","get","head"],function(K){defaults.headers[K]={}});utils.forEach(["post","put","patch"],function(K){defaults.headers[K]=utils.merge(DEFAULT_CONTENT_TYPE)});const defaults$1=defaults,ignoreDuplicateOf=utils.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),parseHeaders=ee=>{const K={};let Y,J,te;return ee&&ee.split(`
`).forEach(function(ae){te=ae.indexOf(":"),Y=ae.substring(0,te).trim().toLowerCase(),J=ae.substring(te+1).trim(),!(!Y||K[Y]&&ignoreDuplicateOf[Y])&&(Y==="set-cookie"?K[Y]?K[Y].push(J):K[Y]=[J]:K[Y]=K[Y]?K[Y]+", "+J:J)}),K},$internals=Symbol("internals");function normalizeHeader(ee){return ee&&String(ee).trim().toLowerCase()}function normalizeValue(ee){return ee===!1||ee==null?ee:utils.isArray(ee)?ee.map(normalizeValue):String(ee)}function parseTokens(ee){const K=Object.create(null),Y=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let J;for(;J=Y.exec(ee);)K[J[1]]=J[2];return K}function isValidHeaderName(ee){return/^[-_a-zA-Z]+$/.test(ee.trim())}function matchHeaderValue(ee,K,Y,J,te){if(utils.isFunction(J))return J.call(this,K,Y);if(te&&(K=Y),!!utils.isString(K)){if(utils.isString(J))return K.indexOf(J)!==-1;if(utils.isRegExp(J))return J.test(K)}}function formatHeader(ee){return ee.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(K,Y,J)=>Y.toUpperCase()+J)}function buildAccessors(ee,K){const Y=utils.toCamelCase(" "+K);["get","set","has"].forEach(J=>{Object.defineProperty(ee,J+Y,{value:function(te,ie,ae){return this[J].call(this,K,te,ie,ae)},configurable:!0})})}class AxiosHeaders{constructor(K){K&&this.set(K)}set(K,Y,J){const te=this;function ie(re,se,oe){const ne=normalizeHeader(se);if(!ne)throw new Error("header name must be a non-empty string");const le=utils.findKey(te,ne);(!le||te[le]===void 0||oe===!0||oe===void 0&&te[le]!==!1)&&(te[le||se]=normalizeValue(re))}const ae=(re,se)=>utils.forEach(re,(oe,ne)=>ie(oe,ne,se));return utils.isPlainObject(K)||K instanceof this.constructor?ae(K,Y):utils.isString(K)&&(K=K.trim())&&!isValidHeaderName(K)?ae(parseHeaders(K),Y):K!=null&&ie(Y,K,J),this}get(K,Y){if(K=normalizeHeader(K),K){const J=utils.findKey(this,K);if(J){const te=this[J];if(!Y)return te;if(Y===!0)return parseTokens(te);if(utils.isFunction(Y))return Y.call(this,te,J);if(utils.isRegExp(Y))return Y.exec(te);throw new TypeError("parser must be boolean|regexp|function")}}}has(K,Y){if(K=normalizeHeader(K),K){const J=utils.findKey(this,K);return!!(J&&this[J]!==void 0&&(!Y||matchHeaderValue(this,this[J],J,Y)))}return!1}delete(K,Y){const J=this;let te=!1;function ie(ae){if(ae=normalizeHeader(ae),ae){const re=utils.findKey(J,ae);re&&(!Y||matchHeaderValue(J,J[re],re,Y))&&(delete J[re],te=!0)}}return utils.isArray(K)?K.forEach(ie):ie(K),te}clear(K){const Y=Object.keys(this);let J=Y.length,te=!1;for(;J--;){const ie=Y[J];(!K||matchHeaderValue(this,this[ie],ie,K,!0))&&(delete this[ie],te=!0)}return te}normalize(K){const Y=this,J={};return utils.forEach(this,(te,ie)=>{const ae=utils.findKey(J,ie);if(ae){Y[ae]=normalizeValue(te),delete Y[ie];return}const re=K?formatHeader(ie):String(ie).trim();re!==ie&&delete Y[ie],Y[re]=normalizeValue(te),J[re]=!0}),this}concat(...K){return this.constructor.concat(this,...K)}toJSON(K){const Y=Object.create(null);return utils.forEach(this,(J,te)=>{J!=null&&J!==!1&&(Y[te]=K&&utils.isArray(J)?J.join(", "):J)}),Y}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([K,Y])=>K+": "+Y).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(K){return K instanceof this?K:new this(K)}static concat(K,...Y){const J=new this(K);return Y.forEach(te=>J.set(te)),J}static accessor(K){const J=(this[$internals]=this[$internals]={accessors:{}}).accessors,te=this.prototype;function ie(ae){const re=normalizeHeader(ae);J[re]||(buildAccessors(te,ae),J[re]=!0)}return utils.isArray(K)?K.forEach(ie):ie(K),this}}AxiosHeaders.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);utils.freezeMethods(AxiosHeaders.prototype);utils.freezeMethods(AxiosHeaders);const AxiosHeaders$1=AxiosHeaders;function transformData(ee,K){const Y=this||defaults$1,J=K||Y,te=AxiosHeaders$1.from(J.headers);let ie=J.data;return utils.forEach(ee,function(re){ie=re.call(Y,ie,te.normalize(),K?K.status:void 0)}),te.normalize(),ie}function isCancel(ee){return!!(ee&&ee.__CANCEL__)}function CanceledError(ee,K,Y){AxiosError.call(this,ee??"canceled",AxiosError.ERR_CANCELED,K,Y),this.name="CanceledError"}utils.inherits(CanceledError,AxiosError,{__CANCEL__:!0});function settle(ee,K,Y){const J=Y.config.validateStatus;!Y.status||!J||J(Y.status)?ee(Y):K(new AxiosError("Request failed with status code "+Y.status,[AxiosError.ERR_BAD_REQUEST,AxiosError.ERR_BAD_RESPONSE][Math.floor(Y.status/100)-4],Y.config,Y.request,Y))}const cookies=platform.isStandardBrowserEnv?function(){return{write:function(Y,J,te,ie,ae,re){const se=[];se.push(Y+"="+encodeURIComponent(J)),utils.isNumber(te)&&se.push("expires="+new Date(te).toGMTString()),utils.isString(ie)&&se.push("path="+ie),utils.isString(ae)&&se.push("domain="+ae),re===!0&&se.push("secure"),document.cookie=se.join("; ")},read:function(Y){const J=document.cookie.match(new RegExp("(^|;\\s*)("+Y+")=([^;]*)"));return J?decodeURIComponent(J[3]):null},remove:function(Y){this.write(Y,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function isAbsoluteURL(ee){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(ee)}function combineURLs(ee,K){return K?ee.replace(/\/+$/,"")+"/"+K.replace(/^\/+/,""):ee}function buildFullPath(ee,K){return ee&&!isAbsoluteURL(K)?combineURLs(ee,K):K}const isURLSameOrigin=platform.isStandardBrowserEnv?function(){const K=/(msie|trident)/i.test(navigator.userAgent),Y=document.createElement("a");let J;function te(ie){let ae=ie;return K&&(Y.setAttribute("href",ae),ae=Y.href),Y.setAttribute("href",ae),{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:Y.pathname.charAt(0)==="/"?Y.pathname:"/"+Y.pathname}}return J=te(window.location.href),function(ae){const re=utils.isString(ae)?te(ae):ae;return re.protocol===J.protocol&&re.host===J.host}}():function(){return function(){return!0}}();function parseProtocol(ee){const K=/^([-+\w]{1,25})(:?\/\/|:)/.exec(ee);return K&&K[1]||""}function speedometer(ee,K){ee=ee||10;const Y=new Array(ee),J=new Array(ee);let te=0,ie=0,ae;return K=K!==void 0?K:1e3,function(se){const oe=Date.now(),ne=J[ie];ae||(ae=oe),Y[te]=se,J[te]=oe;let le=ie,he=0;for(;le!==te;)he+=Y[le++],le=le%ee;if(te=(te+1)%ee,te===ie&&(ie=(ie+1)%ee),oe-ae<K)return;const de=ne&&oe-ne;return de?Math.round(he*1e3/de):void 0}}function progressEventReducer(ee,K){let Y=0;const J=speedometer(50,250);return te=>{const ie=te.loaded,ae=te.lengthComputable?te.total:void 0,re=ie-Y,se=J(re),oe=ie<=ae;Y=ie;const ne={loaded:ie,total:ae,progress:ae?ie/ae:void 0,bytes:re,rate:se||void 0,estimated:se&&ae&&oe?(ae-ie)/se:void 0,event:te};ne[K?"download":"upload"]=!0,ee(ne)}}const isXHRAdapterSupported=typeof XMLHttpRequest<"u",xhrAdapter=isXHRAdapterSupported&&function(ee){return new Promise(function(Y,J){let te=ee.data;const ie=AxiosHeaders$1.from(ee.headers).normalize(),ae=ee.responseType;let re;function se(){ee.cancelToken&&ee.cancelToken.unsubscribe(re),ee.signal&&ee.signal.removeEventListener("abort",re)}utils.isFormData(te)&&(platform.isStandardBrowserEnv||platform.isStandardBrowserWebWorkerEnv)&&ie.setContentType(!1);let oe=new XMLHttpRequest;if(ee.auth){const de=ee.auth.username||"",ce=ee.auth.password?unescape(encodeURIComponent(ee.auth.password)):"";ie.set("Authorization","Basic "+btoa(de+":"+ce))}const ne=buildFullPath(ee.baseURL,ee.url);oe.open(ee.method.toUpperCase(),buildURL(ne,ee.params,ee.paramsSerializer),!0),oe.timeout=ee.timeout;function le(){if(!oe)return;const de=AxiosHeaders$1.from("getAllResponseHeaders"in oe&&oe.getAllResponseHeaders()),pe={data:!ae||ae==="text"||ae==="json"?oe.responseText:oe.response,status:oe.status,statusText:oe.statusText,headers:de,config:ee,request:oe};settle(function(ue){Y(ue),se()},function(ue){J(ue),se()},pe),oe=null}if("onloadend"in oe?oe.onloadend=le:oe.onreadystatechange=function(){!oe||oe.readyState!==4||oe.status===0&&!(oe.responseURL&&oe.responseURL.indexOf("file:")===0)||setTimeout(le)},oe.onabort=function(){oe&&(J(new AxiosError("Request aborted",AxiosError.ECONNABORTED,ee,oe)),oe=null)},oe.onerror=function(){J(new AxiosError("Network Error",AxiosError.ERR_NETWORK,ee,oe)),oe=null},oe.ontimeout=function(){let ce=ee.timeout?"timeout of "+ee.timeout+"ms exceeded":"timeout exceeded";const pe=ee.transitional||transitionalDefaults;ee.timeoutErrorMessage&&(ce=ee.timeoutErrorMessage),J(new AxiosError(ce,pe.clarifyTimeoutError?AxiosError.ETIMEDOUT:AxiosError.ECONNABORTED,ee,oe)),oe=null},platform.isStandardBrowserEnv){const de=(ee.withCredentials||isURLSameOrigin(ne))&&ee.xsrfCookieName&&cookies.read(ee.xsrfCookieName);de&&ie.set(ee.xsrfHeaderName,de)}te===void 0&&ie.setContentType(null),"setRequestHeader"in oe&&utils.forEach(ie.toJSON(),function(ce,pe){oe.setRequestHeader(pe,ce)}),utils.isUndefined(ee.withCredentials)||(oe.withCredentials=!!ee.withCredentials),ae&&ae!=="json"&&(oe.responseType=ee.responseType),typeof ee.onDownloadProgress=="function"&&oe.addEventListener("progress",progressEventReducer(ee.onDownloadProgress,!0)),typeof ee.onUploadProgress=="function"&&oe.upload&&oe.upload.addEventListener("progress",progressEventReducer(ee.onUploadProgress)),(ee.cancelToken||ee.signal)&&(re=de=>{oe&&(J(!de||de.type?new CanceledError(null,ee,oe):de),oe.abort(),oe=null)},ee.cancelToken&&ee.cancelToken.subscribe(re),ee.signal&&(ee.signal.aborted?re():ee.signal.addEventListener("abort",re)));const he=parseProtocol(ne);if(he&&platform.protocols.indexOf(he)===-1){J(new AxiosError("Unsupported protocol "+he+":",AxiosError.ERR_BAD_REQUEST,ee));return}oe.send(te||null)})},knownAdapters={http:httpAdapter,xhr:xhrAdapter};utils.forEach(knownAdapters,(ee,K)=>{if(ee){try{Object.defineProperty(ee,"name",{value:K})}catch{}Object.defineProperty(ee,"adapterName",{value:K})}});const adapters={getAdapter:ee=>{ee=utils.isArray(ee)?ee:[ee];const{length:K}=ee;let Y,J;for(let te=0;te<K&&(Y=ee[te],!(J=utils.isString(Y)?knownAdapters[Y.toLowerCase()]:Y));te++);if(!J)throw J===!1?new AxiosError(`Adapter ${Y} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(utils.hasOwnProp(knownAdapters,Y)?`Adapter '${Y}' is not available in the build`:`Unknown adapter '${Y}'`);if(!utils.isFunction(J))throw new TypeError("adapter is not a function");return J},adapters:knownAdapters};function throwIfCancellationRequested(ee){if(ee.cancelToken&&ee.cancelToken.throwIfRequested(),ee.signal&&ee.signal.aborted)throw new CanceledError(null,ee)}function dispatchRequest(ee){return throwIfCancellationRequested(ee),ee.headers=AxiosHeaders$1.from(ee.headers),ee.data=transformData.call(ee,ee.transformRequest),["post","put","patch"].indexOf(ee.method)!==-1&&ee.headers.setContentType("application/x-www-form-urlencoded",!1),adapters.getAdapter(ee.adapter||defaults$1.adapter)(ee).then(function(J){return throwIfCancellationRequested(ee),J.data=transformData.call(ee,ee.transformResponse,J),J.headers=AxiosHeaders$1.from(J.headers),J},function(J){return isCancel(J)||(throwIfCancellationRequested(ee),J&&J.response&&(J.response.data=transformData.call(ee,ee.transformResponse,J.response),J.response.headers=AxiosHeaders$1.from(J.response.headers))),Promise.reject(J)})}const headersToObject=ee=>ee instanceof AxiosHeaders$1?ee.toJSON():ee;function mergeConfig(ee,K){K=K||{};const Y={};function J(oe,ne,le){return utils.isPlainObject(oe)&&utils.isPlainObject(ne)?utils.merge.call({caseless:le},oe,ne):utils.isPlainObject(ne)?utils.merge({},ne):utils.isArray(ne)?ne.slice():ne}function te(oe,ne,le){if(utils.isUndefined(ne)){if(!utils.isUndefined(oe))return J(void 0,oe,le)}else return J(oe,ne,le)}function ie(oe,ne){if(!utils.isUndefined(ne))return J(void 0,ne)}function ae(oe,ne){if(utils.isUndefined(ne)){if(!utils.isUndefined(oe))return J(void 0,oe)}else return J(void 0,ne)}function re(oe,ne,le){if(le in K)return J(oe,ne);if(le in ee)return J(void 0,oe)}const se={url:ie,method:ie,data:ie,baseURL:ae,transformRequest:ae,transformResponse:ae,paramsSerializer:ae,timeout:ae,timeoutMessage:ae,withCredentials:ae,adapter:ae,responseType:ae,xsrfCookieName:ae,xsrfHeaderName:ae,onUploadProgress:ae,onDownloadProgress:ae,decompress:ae,maxContentLength:ae,maxBodyLength:ae,beforeRedirect:ae,transport:ae,httpAgent:ae,httpsAgent:ae,cancelToken:ae,socketPath:ae,responseEncoding:ae,validateStatus:re,headers:(oe,ne)=>te(headersToObject(oe),headersToObject(ne),!0)};return utils.forEach(Object.keys(ee).concat(Object.keys(K)),function(ne){const le=se[ne]||te,he=le(ee[ne],K[ne],ne);utils.isUndefined(he)&&le!==re||(Y[ne]=he)}),Y}const VERSION="1.3.4",validators$1={};["object","boolean","number","function","string","symbol"].forEach((ee,K)=>{validators$1[ee]=function(J){return typeof J===ee||"a"+(K<1?"n ":" ")+ee}});const deprecatedWarnings={};validators$1.transitional=function(K,Y,J){function te(ie,ae){return"[Axios v"+VERSION+"] Transitional option '"+ie+"'"+ae+(J?". "+J:"")}return(ie,ae,re)=>{if(K===!1)throw new AxiosError(te(ae," has been removed"+(Y?" in "+Y:"")),AxiosError.ERR_DEPRECATED);return Y&&!deprecatedWarnings[ae]&&(deprecatedWarnings[ae]=!0,console.warn(te(ae," has been deprecated since v"+Y+" and will be removed in the near future"))),K?K(ie,ae,re):!0}};function assertOptions(ee,K,Y){if(typeof ee!="object")throw new AxiosError("options must be an object",AxiosError.ERR_BAD_OPTION_VALUE);const J=Object.keys(ee);let te=J.length;for(;te-- >0;){const ie=J[te],ae=K[ie];if(ae){const re=ee[ie],se=re===void 0||ae(re,ie,ee);if(se!==!0)throw new AxiosError("option "+ie+" must be "+se,AxiosError.ERR_BAD_OPTION_VALUE);continue}if(Y!==!0)throw new AxiosError("Unknown option "+ie,AxiosError.ERR_BAD_OPTION)}}const validator={assertOptions,validators:validators$1},validators=validator.validators;class Axios{constructor(K){this.defaults=K,this.interceptors={request:new InterceptorManager$1,response:new InterceptorManager$1}}request(K,Y){typeof K=="string"?(Y=Y||{},Y.url=K):Y=K||{},Y=mergeConfig(this.defaults,Y);const{transitional:J,paramsSerializer:te,headers:ie}=Y;J!==void 0&&validator.assertOptions(J,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},!1),te!==void 0&&validator.assertOptions(te,{encode:validators.function,serialize:validators.function},!0),Y.method=(Y.method||this.defaults.method||"get").toLowerCase();let ae;ae=ie&&utils.merge(ie.common,ie[Y.method]),ae&&utils.forEach(["delete","get","head","post","put","patch","common"],ce=>{delete ie[ce]}),Y.headers=AxiosHeaders$1.concat(ae,ie);const re=[];let se=!0;this.interceptors.request.forEach(function(pe){typeof pe.runWhen=="function"&&pe.runWhen(Y)===!1||(se=se&&pe.synchronous,re.unshift(pe.fulfilled,pe.rejected))});const oe=[];this.interceptors.response.forEach(function(pe){oe.push(pe.fulfilled,pe.rejected)});let ne,le=0,he;if(!se){const ce=[dispatchRequest.bind(this),void 0];for(ce.unshift.apply(ce,re),ce.push.apply(ce,oe),he=ce.length,ne=Promise.resolve(Y);le<he;)ne=ne.then(ce[le++],ce[le++]);return ne}he=re.length;let de=Y;for(le=0;le<he;){const ce=re[le++],pe=re[le++];try{de=ce(de)}catch(ve){pe.call(this,ve);break}}try{ne=dispatchRequest.call(this,de)}catch(ce){return Promise.reject(ce)}for(le=0,he=oe.length;le<he;)ne=ne.then(oe[le++],oe[le++]);return ne}getUri(K){K=mergeConfig(this.defaults,K);const Y=buildFullPath(K.baseURL,K.url);return buildURL(Y,K.params,K.paramsSerializer)}}utils.forEach(["delete","get","head","options"],function(K){Axios.prototype[K]=function(Y,J){return this.request(mergeConfig(J||{},{method:K,url:Y,data:(J||{}).data}))}});utils.forEach(["post","put","patch"],function(K){function Y(J){return function(ie,ae,re){return this.request(mergeConfig(re||{},{method:K,headers:J?{"Content-Type":"multipart/form-data"}:{},url:ie,data:ae}))}}Axios.prototype[K]=Y(),Axios.prototype[K+"Form"]=Y(!0)});const Axios$1=Axios;class CancelToken{constructor(K){if(typeof K!="function")throw new TypeError("executor must be a function.");let Y;this.promise=new Promise(function(ie){Y=ie});const J=this;this.promise.then(te=>{if(!J._listeners)return;let ie=J._listeners.length;for(;ie-- >0;)J._listeners[ie](te);J._listeners=null}),this.promise.then=te=>{let ie;const ae=new Promise(re=>{J.subscribe(re),ie=re}).then(te);return ae.cancel=function(){J.unsubscribe(ie)},ae},K(function(ie,ae,re){J.reason||(J.reason=new CanceledError(ie,ae,re),Y(J.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(K){if(this.reason){K(this.reason);return}this._listeners?this._listeners.push(K):this._listeners=[K]}unsubscribe(K){if(!this._listeners)return;const Y=this._listeners.indexOf(K);Y!==-1&&this._listeners.splice(Y,1)}static source(){let K;return{token:new CancelToken(function(te){K=te}),cancel:K}}}const CancelToken$1=CancelToken;function spread(ee){return function(Y){return ee.apply(null,Y)}}function isAxiosError(ee){return utils.isObject(ee)&&ee.isAxiosError===!0}const HttpStatusCode={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(HttpStatusCode).forEach(([ee,K])=>{HttpStatusCode[K]=ee});const HttpStatusCode$1=HttpStatusCode;function createInstance(ee){const K=new Axios$1(ee),Y=bind(Axios$1.prototype.request,K);return utils.extend(Y,Axios$1.prototype,K,{allOwnKeys:!0}),utils.extend(Y,K,null,{allOwnKeys:!0}),Y.create=function(te){return createInstance(mergeConfig(ee,te))},Y}const axios=createInstance(defaults$1);axios.Axios=Axios$1;axios.CanceledError=CanceledError;axios.CancelToken=CancelToken$1;axios.isCancel=isCancel;axios.VERSION=VERSION;axios.toFormData=toFormData;axios.AxiosError=AxiosError;axios.Cancel=axios.CanceledError;axios.all=function(K){return Promise.all(K)};axios.spread=spread;axios.isAxiosError=isAxiosError;axios.mergeConfig=mergeConfig;axios.AxiosHeaders=AxiosHeaders$1;axios.formToJSON=ee=>formDataToJSON(utils.isHTMLForm(ee)?new FormData(ee):ee);axios.HttpStatusCode=HttpStatusCode$1;axios.default=axios;const axios$1=axios,initialState={loading:!1,error:!1,ui:void 0,journeyTypes:void 0,journeyType:void 0,journeyId:void 0,journey:void 0,stepId:void 0,step:void 0,completed:!1,items:void 0,matches:void 0},{actions:authActions,reducer:authReducer}=createSlice({name:"tiposJourney",initialState,reducers:{reset:ee=>(console.log("resetting",ee),initialState),setLoading:ee=>{ee.loading=!0},setJourneyTypes:(ee,{payload:K})=>{ee.loading=!1,ee.error=!1,ee.journeyTypes=K},setError:ee=>{ee.error=!0},setJourneyType:(ee,{payload:K})=>{ee.journeyType=K,ee.loading=!1,ee.error=!1,ee.journeyId=void 0,ee.journey=void 0,ee.stepId=void 0,ee.step=void 0,ee.completed=!1,ee.items=void 0,ee.matches=void 0},setJourneyId:(ee,{payload:K})=>{ee.journeyId=K},setJourney:(ee,{payload:K})=>{ee.journey=K,ee.journey.currentStepId?ee.stepId=ee.journey.currentStepId:ee.completed=!0},setStep:(ee,{payload:K})=>{const Y=K;ee.step=Y},completeStep:ee=>{ee.step=void 0,ee.stepId=void 0,ee.journey=void 0},setUi:(ee,{payload:K})=>{ee.ui=K},setCount:(ee,{payload:K})=>{ee.matches=K},setRows:(ee,{payload:K})=>{ee.items=K}}}),{reset,setLoading,setJourneyTypes,setError,setJourneyType,setJourneyId,setJourney,setStep,completeStep,setUi,setCount,setRows}=authActions,store=configureStore({reducer:{tiposJourney:authReducer}}),api=axios$1.create({baseURL:window.__MATEU_REMOTE_BASE_URL__?window.__MATEU_REMOTE_BASE_URL__:"https://remote.mateu.io/mateu/v1",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});function fetchItems(){return async ee=>{api.get("/journey-types").then(K=>{ee(setJourneyTypes(K.data))}).catch(K=>{console.log(K),ee(setError())})}}function createJourney(ee,K){const Y={journeyTypeId:ee,contextData:[]};return async J=>{api.post("/journeys/"+K,Y).then(te=>{console.log(te),J(setJourneyId(K))}).catch(te=>{console.log(te),J(setError())})}}function getJourneyStatus(ee){return async K=>{api.get("/journeys/"+ee).then(Y=>{K(setJourney(Y.data))}).catch(Y=>{console.log(Y),K(setError())})}}function getStep(ee,K){return async Y=>{api.get("/journeys/"+ee+"/steps/"+K).then(J=>{Y(setStep(J.data))}).catch(J=>{console.log(J),Y(setError())})}}function runStepAction(ee,K,Y,J){const te={data:J};return async ie=>{api.post("/journeys/"+ee+"/steps/"+K+"/"+Y,te).then(ae=>{ie(completeStep(ae.data))}).catch(ae=>{console.log(ae),ie(setError())})}}function getCount(ee,K,Y,J){return async te=>{api.get("/journeys/"+ee+"/steps/"+K+"/lists/"+Y+"/count?filters="+J).then(ie=>{te(setCount(ie.data))}).catch(ie=>{console.log(ie),te(setError())})}}function getRows(ee,K,Y,J){return async te=>{api.get("/journeys/"+ee+"/steps/"+K+"/lists/"+Y+"/rows?page=0&page_size=10&ordering=&filters="+J).then(ie=>{te(setRows(ie.data))}).catch(ie=>{console.log(ie),te(setError())})}}var __defProp$l=Object.defineProperty,__getOwnPropDesc$l=Object.getOwnPropertyDescriptor,__decorateClass$l=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$l(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$l(K,Y,te),te};let InputText=class extends s$1{constructor(){super(...arguments),this.name="",this.onChange=ee=>{const K=ee.target;console.log("input-text",K.value)},this.enabled=!0}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <p>Label</p>
            <input type="text" 
                           @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                   ?disabled=${!this.enabled}
        ></input>`}};__decorateClass$l([e()],InputText.prototype,"name",2);__decorateClass$l([e()],InputText.prototype,"onChange",2);__decorateClass$l([e()],InputText.prototype,"value",2);__decorateClass$l([e()],InputText.prototype,"enabled",2);InputText=__decorateClass$l([e$1("input-text")],InputText);var __defProp$k=Object.defineProperty,__getOwnPropDesc$k=Object.getOwnPropertyDescriptor,__decorateClass$k=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$k(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$k(K,Y,te),te};let InputNumber=class extends s$1{constructor(){super(...arguments),this.name="",this.enabled=!0,this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.value=""}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <p>Label</p>
            <input type="number" 
                           @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                   disabled=${this.enabled}
        ></input>`}};__decorateClass$k([e()],InputNumber.prototype,"name",2);__decorateClass$k([e()],InputNumber.prototype,"enabled",2);__decorateClass$k([e()],InputNumber.prototype,"onChange",2);__decorateClass$k([e()],InputNumber.prototype,"value",2);InputNumber=__decorateClass$k([e$1("input-number")],InputNumber);var __defProp$j=Object.defineProperty,__getOwnPropDesc$j=Object.getOwnPropertyDescriptor,__decorateClass$j=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$j(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$j(K,Y,te),te};let DynamicForm=class extends s$1{constructor(){super(...arguments),this.avalue="5",this.componentName="input-text",this.onChange=ee=>{const K=ee.target;console.log("dynamic-form",K.value)},this.onSelect=ee=>{const K=ee.target;this.changeInput(K.value)}}changeInput(ee){this.componentName=ee;const K=document.createElement(this.componentName),Y=this.shadowRoot.getElementById("cxx"),J=K;J.onValueChanged=te=>{console.log("new value",te.value)},J.setValue("1111"),Y.appendChild(K)}render(){return y$1`<h1>Hello ${this.avalue}</h1>
        
        <div>
            <select name="campo" id="campo" @change=${this.onSelect}>
                <option value="input-text">texto</option>
                <option value="input-number">número</option>
            </select>
        </div>
        
        <div id="cxx"></div>
        
        <slot></slot>`}};DynamicForm.styles=i$5`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;      
    }
  `;__decorateClass$j([e()],DynamicForm.prototype,"avalue",2);__decorateClass$j([e()],DynamicForm.prototype,"componentName",2);DynamicForm=__decorateClass$j([e$1("dynamic-form")],DynamicForm);const button=i$5`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;registerStyles("vaadin-button",button,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const DisabledMixin=dedupingMixin(ee=>class extends ee{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(Y){this._setAriaDisabled(Y)}_setAriaDisabled(Y){Y?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const passiveTouchGestures=!1,wrap=ee=>ee,HAS_NATIVE_TA=typeof document.head.style.touchAction=="string",GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,TRACK_LENGTH=2,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function isMouseEvent(ee){return MOUSE_EVENTS.indexOf(ee)>-1}let supportsPassive=!1;(function(){try{const ee=Object.defineProperty({},"passive",{get(){supportsPassive=!0}});window.addEventListener("test",null,ee),window.removeEventListener("test",null,ee)}catch{}})();function PASSIVE_TOUCH(ee){if(!(isMouseEvent(ee)||ee==="touchend")&&HAS_NATIVE_TA&&supportsPassive&&passiveTouchGestures)return{passive:!0}}const IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function hasLeftMouseButton(ee){const K=ee.type;if(!isMouseEvent(K))return!1;if(K==="mousemove"){let J=ee.buttons===void 0?1:ee.buttons;return ee instanceof window.MouseEvent&&!MOUSE_HAS_BUTTONS&&(J=MOUSE_WHICH_TO_BUTTONS[ee.which]||0),Boolean(J&1)}return(ee.button===void 0?0:ee.button)===0}function isSyntheticClick(ee){if(ee.type==="click"){if(ee.detail===0)return!0;const K=_findOriginalTarget(ee);if(!K.nodeType||K.nodeType!==Node.ELEMENT_NODE)return!0;const Y=K.getBoundingClientRect(),J=ee.pageX,te=ee.pageY;return!(J>=Y.left&&J<=Y.right&&te>=Y.top&&te<=Y.bottom)}return!1}const POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(ee){let K="auto";const Y=getComposedPath(ee);for(let J=0,te;J<Y.length;J++)if(te=Y[J],te[TOUCH_ACTION]){K=te[TOUCH_ACTION];break}return K}function trackDocument(ee,K,Y){ee.movefn=K,ee.upfn=Y,document.addEventListener("mousemove",K),document.addEventListener("mouseup",Y)}function untrackDocument(ee){document.removeEventListener("mousemove",ee.movefn),document.removeEventListener("mouseup",ee.upfn),ee.movefn=null,ee.upfn=null}const getComposedPath=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:ee=>ee.composedPath&&ee.composedPath()||[],gestures={},recognizers=[];function deepTargetFind(ee,K){let Y=document.elementFromPoint(ee,K),J=Y;for(;J&&J.shadowRoot&&!window.ShadyDOM;){const te=J;if(J=J.shadowRoot.elementFromPoint(ee,K),te===J)break;J&&(Y=J)}return Y}function _findOriginalTarget(ee){const K=getComposedPath(ee);return K.length>0?K[0]:ee.target}function _handleNative(ee){const K=ee.type,J=ee.currentTarget[GESTURE_KEY];if(!J)return;const te=J[K];if(!te)return;if(!ee[HANDLED_OBJ]&&(ee[HANDLED_OBJ]={},K.startsWith("touch"))){const ae=ee.changedTouches[0];if(K==="touchstart"&&ee.touches.length===1&&(POINTERSTATE.touch.id=ae.identifier),POINTERSTATE.touch.id!==ae.identifier)return;HAS_NATIVE_TA||(K==="touchstart"||K==="touchmove")&&_handleTouchAction(ee)}const ie=ee[HANDLED_OBJ];if(!ie.skip){for(let ae=0,re;ae<recognizers.length;ae++)re=recognizers[ae],te[re.name]&&!ie[re.name]&&re.flow&&re.flow.start.indexOf(ee.type)>-1&&re.reset&&re.reset();for(let ae=0,re;ae<recognizers.length;ae++)re=recognizers[ae],te[re.name]&&!ie[re.name]&&(ie[re.name]=!0,re[K](ee))}}function _handleTouchAction(ee){const K=ee.changedTouches[0],Y=ee.type;if(Y==="touchstart")POINTERSTATE.touch.x=K.clientX,POINTERSTATE.touch.y=K.clientY,POINTERSTATE.touch.scrollDecided=!1;else if(Y==="touchmove"){if(POINTERSTATE.touch.scrollDecided)return;POINTERSTATE.touch.scrollDecided=!0;const J=firstTouchAction(ee);let te=!1;const ie=Math.abs(POINTERSTATE.touch.x-K.clientX),ae=Math.abs(POINTERSTATE.touch.y-K.clientY);ee.cancelable&&(J==="none"?te=!0:J==="pan-x"?te=ae>ie:J==="pan-y"&&(te=ie>ae)),te?ee.preventDefault():prevent("track")}}function addListener(ee,K,Y){return gestures[K]?(_add(ee,K,Y),!0):!1}function _add(ee,K,Y){const J=gestures[K],te=J.deps,ie=J.name;let ae=ee[GESTURE_KEY];ae||(ee[GESTURE_KEY]=ae={});for(let re=0,se,oe;re<te.length;re++)se=te[re],!(IS_TOUCH_ONLY&&isMouseEvent(se)&&se!=="click")&&(oe=ae[se],oe||(ae[se]=oe={_count:0}),oe._count===0&&ee.addEventListener(se,_handleNative,PASSIVE_TOUCH(se)),oe[ie]=(oe[ie]||0)+1,oe._count=(oe._count||0)+1);ee.addEventListener(K,Y),J.touchAction&&setTouchAction(ee,J.touchAction)}function register(ee){recognizers.push(ee);for(let K=0;K<ee.emits.length;K++)gestures[ee.emits[K]]=ee}function _findRecognizerByEvent(ee){for(let K=0,Y;K<recognizers.length;K++){Y=recognizers[K];for(let J=0,te;J<Y.emits.length;J++)if(te=Y.emits[J],te===ee)return Y}return null}function setTouchAction(ee,K){HAS_NATIVE_TA&&ee instanceof HTMLElement&&microTask.run(()=>{ee.style.touchAction=K}),ee[TOUCH_ACTION]=K}function _fire(ee,K,Y){const J=new Event(K,{bubbles:!0,cancelable:!0,composed:!0});if(J.detail=Y,wrap(ee).dispatchEvent(J),J.defaultPrevented){const te=Y.preventer||Y.sourceEvent;te&&te.preventDefault&&te.preventDefault()}}function prevent(ee){const K=_findRecognizerByEvent(ee);K.info&&(K.info.prevent=!0)}register({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){untrackDocument(this.info)},mousedown(ee){if(!hasLeftMouseButton(ee))return;const K=_findOriginalTarget(ee),Y=this,J=ie=>{hasLeftMouseButton(ie)||(downupFire("up",K,ie),untrackDocument(Y.info))},te=ie=>{hasLeftMouseButton(ie)&&downupFire("up",K,ie),untrackDocument(Y.info)};trackDocument(this.info,J,te),downupFire("down",K,ee)},touchstart(ee){downupFire("down",_findOriginalTarget(ee),ee.changedTouches[0],ee)},touchend(ee){downupFire("up",_findOriginalTarget(ee),ee.changedTouches[0],ee)}});function downupFire(ee,K,Y,J){K&&_fire(K,ee,{x:Y.clientX,y:Y.clientY,sourceEvent:Y,preventer:J,prevent(te){return prevent(te)}})}register({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(ee){this.moves.length>TRACK_LENGTH&&this.moves.shift(),this.moves.push(ee)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,untrackDocument(this.info)},mousedown(ee){if(!hasLeftMouseButton(ee))return;const K=_findOriginalTarget(ee),Y=this,J=ie=>{const ae=ie.clientX,re=ie.clientY;trackHasMovedEnough(Y.info,ae,re)&&(Y.info.state=Y.info.started?ie.type==="mouseup"?"end":"track":"start",Y.info.state==="start"&&prevent("tap"),Y.info.addMove({x:ae,y:re}),hasLeftMouseButton(ie)||(Y.info.state="end",untrackDocument(Y.info)),K&&trackFire(Y.info,K,ie),Y.info.started=!0)},te=ie=>{Y.info.started&&J(ie),untrackDocument(Y.info)};trackDocument(this.info,J,te),this.info.x=ee.clientX,this.info.y=ee.clientY},touchstart(ee){const K=ee.changedTouches[0];this.info.x=K.clientX,this.info.y=K.clientY},touchmove(ee){const K=_findOriginalTarget(ee),Y=ee.changedTouches[0],J=Y.clientX,te=Y.clientY;trackHasMovedEnough(this.info,J,te)&&(this.info.state==="start"&&prevent("tap"),this.info.addMove({x:J,y:te}),trackFire(this.info,K,Y),this.info.state="track",this.info.started=!0)},touchend(ee){const K=_findOriginalTarget(ee),Y=ee.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:Y.clientX,y:Y.clientY}),trackFire(this.info,K,Y))}});function trackHasMovedEnough(ee,K,Y){if(ee.prevent)return!1;if(ee.started)return!0;const J=Math.abs(ee.x-K),te=Math.abs(ee.y-Y);return J>=TRACK_DISTANCE||te>=TRACK_DISTANCE}function trackFire(ee,K,Y){if(!K)return;const J=ee.moves[ee.moves.length-2],te=ee.moves[ee.moves.length-1],ie=te.x-ee.x,ae=te.y-ee.y;let re,se=0;J&&(re=te.x-J.x,se=te.y-J.y),_fire(K,"track",{state:ee.state,x:Y.clientX,y:Y.clientY,dx:ie,dy:ae,ddx:re,ddy:se,sourceEvent:Y,hover(){return deepTargetFind(Y.clientX,Y.clientY)}})}register({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(ee){hasLeftMouseButton(ee)&&(this.info.x=ee.clientX,this.info.y=ee.clientY)},click(ee){hasLeftMouseButton(ee)&&trackForward(this.info,ee)},touchstart(ee){const K=ee.changedTouches[0];this.info.x=K.clientX,this.info.y=K.clientY},touchend(ee){trackForward(this.info,ee.changedTouches[0],ee)}});function trackForward(ee,K,Y){const J=Math.abs(K.clientX-ee.x),te=Math.abs(K.clientY-ee.y),ie=_findOriginalTarget(Y||K);!ie||canBeDisabled[ie.localName]&&ie.hasAttribute("disabled")||(isNaN(J)||isNaN(te)||J<=TAP_DISTANCE&&te<=TAP_DISTANCE||isSyntheticClick(K))&&(ee.prevent||_fire(ie,"tap",{x:K.clientX,y:K.clientY,sourceEvent:K,preventer:Y}))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const KeyboardMixin=dedupingMixin(ee=>class extends ee{ready(){super.ready(),this.addEventListener("keydown",Y=>{this._onKeyDown(Y)}),this.addEventListener("keyup",Y=>{this._onKeyUp(Y)})}_onKeyDown(Y){switch(Y.key){case"Enter":this._onEnter(Y);break;case"Escape":this._onEscape(Y);break}}_onKeyUp(Y){}_onEnter(Y){}_onEscape(Y){}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ActiveMixin=ee=>class extends DisabledMixin(KeyboardMixin(ee)){get _activeKeys(){return[" "]}ready(){super.ready(),addListener(this,"down",Y=>{this._shouldSetActive(Y)&&this._setActive(!0)}),addListener(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(Y){return!this.disabled}_onKeyDown(Y){super._onKeyDown(Y),this._shouldSetActive(Y)&&this._activeKeys.includes(Y.key)&&(this._setActive(!0),document.addEventListener("keyup",J=>{this._activeKeys.includes(J.key)&&this._setActive(!1)},{once:!0}))}_setActive(Y){this.toggleAttribute("active",Y)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let keyboardActive=!1;window.addEventListener("keydown",()=>{keyboardActive=!0},{capture:!0});window.addEventListener("mousedown",()=>{keyboardActive=!1},{capture:!0});function isKeyboardActive(){return keyboardActive}function isElementHiddenDirectly(ee){const K=ee.style;if(K.visibility==="hidden"||K.display==="none")return!0;const Y=window.getComputedStyle(ee);return Y.visibility==="hidden"||Y.display==="none"}function normalizeTabIndex(ee){if(!isElementFocusable(ee))return-1;const K=ee.getAttribute("tabindex")||0;return Number(K)}function hasLowerTabOrder(ee,K){const Y=Math.max(ee.tabIndex,0),J=Math.max(K.tabIndex,0);return Y===0||J===0?J>Y:Y>J}function mergeSortByTabIndex(ee,K){const Y=[];for(;ee.length>0&&K.length>0;)hasLowerTabOrder(ee[0],K[0])?Y.push(K.shift()):Y.push(ee.shift());return Y.concat(ee,K)}function sortElementsByTabIndex(ee){const K=ee.length;if(K<2)return ee;const Y=Math.ceil(K/2),J=sortElementsByTabIndex(ee.slice(0,Y)),te=sortElementsByTabIndex(ee.slice(Y));return mergeSortByTabIndex(J,te)}function collectFocusableNodes(ee,K){if(ee.nodeType!==Node.ELEMENT_NODE||isElementHiddenDirectly(ee))return!1;const Y=ee,J=normalizeTabIndex(Y);let te=J>0;J>=0&&K.push(Y);let ie=[];return Y.localName==="slot"?ie=Y.assignedNodes({flatten:!0}):ie=(Y.shadowRoot||Y).children,[...ie].forEach(ae=>{te=collectFocusableNodes(ae,K)||te}),te}function isElementFocusable(ee){return ee.matches('[tabindex="-1"]')?!1:ee.matches("input, select, textarea, button, object")?ee.matches(":not([disabled])"):ee.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function isElementFocused(ee){return ee.getRootNode().activeElement===ee}function getFocusableElements(ee){const K=[];return collectFocusableNodes(ee,K)?sortElementsByTabIndex(K):K}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const FocusMixin=dedupingMixin(ee=>class extends ee{get _keyboardActive(){return isKeyboardActive()}ready(){this.addEventListener("focusin",Y=>{this._shouldSetFocus(Y)&&this._setFocused(!0)}),this.addEventListener("focusout",Y=>{this._shouldRemoveFocus(Y)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(Y){this.toggleAttribute("focused",Y),this.toggleAttribute("focus-ring",Y&&this._keyboardActive)}_shouldSetFocus(Y){return!0}_shouldRemoveFocus(Y){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const TabindexMixin=ee=>class extends DisabledMixin(ee){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(Y,J){super._disabledChanged(Y,J),Y?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):J&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(Y){this.disabled&&Y!==-1&&(this._lastTabIndex=Y,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ButtonMixin=ee=>class extends ActiveMixin(TabindexMixin(FocusMixin(ee))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(Y){super._onKeyDown(Y),this._activeKeys.includes(Y.key)&&(Y.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Button extends ButtonMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement)))){static get is(){return"vaadin-button"}static get template(){return html`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController)}}customElements.define(Button.is,Button);const horizontalLayout=i$5`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;registerStyles("vaadin-horizontal-layout",horizontalLayout,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class HorizontalLayout extends ElementMixin(ThemableMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(HorizontalLayout.is,HorizontalLayout);var ViewType=(ee=>(ee.Form="Form",ee.Crud="Crud",ee))(ViewType||{});const mapInputTypeToFieldType=(ee,K)=>{switch(K){case"readonly":return"field-readonly";case"textarea":return"field-textarea"}switch(ee){case"string":return"field-text";case"long":return"field-number";case"int":return"field-number";case"double":return"field-double";case"enum":return"field-enum";case"boolean":return"field-boolean";case"date":return"field-date";case"datetime":return"field-datetime";case"time":return"field-time"}return"field-text"};registerStyles("vaadin-input-container",i$5`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class InputContainer extends ThemableMixin(DirMixin(PolymerElement)){static get is(){return"vaadin-input-container"}static get template(){return html`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",K=>{K.target===this&&K.preventDefault()}),this.addEventListener("click",K=>{K.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(Y=>Y.focus&&Y.focus())})}}customElements.define(InputContainer.is,InputContainer);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const helper=i$5`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const inputField=i$5`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,inputFieldShared$1=[requiredField,fieldButton,helper,inputField];registerStyles("",inputFieldShared$1,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-text-field",inputFieldShared$1,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class InputController extends SlotController{constructor(K,Y){super(K,"input",()=>document.createElement("input"),(J,te)=>{J.value&&te.setAttribute("value",J.value),J.type&&te.setAttribute("type",J.type),te.id=this.defaultId,typeof Y=="function"&&Y(te)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const DelegateFocusMixin=dedupingMixin(ee=>class extends FocusMixin(TabindexMixin(ee)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(Y,J){Y?(Y.disabled=this.disabled,this._addFocusListeners(Y),this.__forwardTabIndex(this.tabindex)):J&&this._removeFocusListeners(J)}_addFocusListeners(Y){Y.addEventListener("blur",this._boundOnBlur),Y.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(Y){Y.removeEventListener("blur",this._boundOnBlur),Y.removeEventListener("focus",this._boundOnFocus)}_onFocus(Y){Y.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(Y){Y.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(Y){return Y.target===this.focusElement}_disabledChanged(Y,J){super._disabledChanged(Y,J),this.focusElement&&(this.focusElement.disabled=Y),Y&&this.blur()}_tabindexChanged(Y){this.__forwardTabIndex(Y)}__forwardTabIndex(Y){Y!==void 0&&this.focusElement&&(this.focusElement.tabIndex=Y,Y!==-1&&(this.tabindex=void 0)),this.disabled&&Y&&(Y!==-1&&(this._lastTabIndex=Y),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ErrorController extends SlotController{constructor(K){super(K,"error-message",()=>document.createElement("div"),(Y,J)=>{this.__updateErrorId(J),this.__updateHasError()},!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(K){this.errorMessage=K,this.__updateHasError()}setInvalid(K){this.invalid=K,this.__updateHasError()}initCustomNode(K){this.__updateErrorId(K),K.textContent&&!this.errorMessage&&(this.errorMessage=K.textContent.trim()),this.__updateHasError()}teardownNode(K){let Y=this.getSlotChild();!Y&&K!==this.defaultNode&&(Y=this.attachDefaultNode(),this.initNode(Y)),this.__updateHasError()}__isNotEmpty(K){return Boolean(K&&K.trim()!=="")}__updateHasError(){const K=this.node,Y=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));K&&(K.textContent=Y?this.errorMessage:"",K.hidden=!Y,Y?K.setAttribute("role","alert"):K.removeAttribute("role")),this.host.toggleAttribute("has-error-message",Y)}__updateErrorId(K){K.id||(K.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function getAncestorRootNodes(ee){const K=[];for(;ee;){if(ee.nodeType===Node.DOCUMENT_NODE){K.push(ee);break}if(ee.nodeType===Node.DOCUMENT_FRAGMENT_NODE){K.push(ee),ee=ee.host;continue}if(ee.assignedSlot){ee=ee.assignedSlot;continue}ee=ee.parentNode}return K}function deserializeAttributeValue(ee){return ee?new Set(ee.split(" ")):new Set}function serializeAttributeValue(ee){return[...ee].join(" ")}function addValueToAttribute(ee,K,Y){const J=deserializeAttributeValue(ee.getAttribute(K));J.add(Y),ee.setAttribute(K,serializeAttributeValue(J))}function removeValueFromAttribute(ee,K,Y){const J=deserializeAttributeValue(ee.getAttribute(K));if(J.delete(Y),J.size===0){ee.removeAttribute(K);return}ee.setAttribute(K,serializeAttributeValue(J))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class FieldAriaController{constructor(K){this.host=K,this.__required=!1}setTarget(K){this.__target=K,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(K){this.__setAriaRequiredAttribute(K),this.__required=K}setLabelId(K){this.__setLabelIdToAriaAttribute(K,this.__labelId),this.__labelId=K}setErrorId(K){this.__setErrorIdToAriaAttribute(K,this.__errorId),this.__errorId=K}setHelperId(K){this.__setHelperIdToAriaAttribute(K,this.__helperId),this.__helperId=K}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(K,Y){this.__setAriaAttributeId("aria-labelledby",K,Y)}__setErrorIdToAriaAttribute(K,Y){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",K,Y):this.__setAriaAttributeId("aria-describedby",K,Y)}__setHelperIdToAriaAttribute(K,Y){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",K,Y):this.__setAriaAttributeId("aria-describedby",K,Y)}__setAriaRequiredAttribute(K){this.__target&&(["input","textarea"].includes(this.__target.localName)||(K?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}__setAriaAttributeId(K,Y,J){this.__target&&(J&&removeValueFromAttribute(this.__target,K,J),Y&&addValueToAttribute(this.__target,K,Y))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class HelperController extends SlotController{constructor(K){super(K,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(K){this.__updateHelperId(K),this.__observeHelper(K);const Y=this.__hasHelper(K);this.__toggleHasHelper(Y)}teardownNode(K){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const Y=this.getSlotChild();if(Y&&Y!==this.defaultNode){const J=this.__hasHelper(Y);this.__toggleHasHelper(J)}else this.__applyDefaultHelper(this.helperText,Y)}setHelperText(K){this.helperText=K;const Y=this.getSlotChild();(!Y||Y===this.defaultNode)&&this.__applyDefaultHelper(K,Y)}__hasHelper(K){return K?K.children.length>0||K.nodeType===Node.ELEMENT_NODE&&customElements.get(K.localName)||this.__isNotEmpty(K.textContent):!1}__isNotEmpty(K){return K&&K.trim()!==""}__applyDefaultHelper(K,Y){const J=this.__isNotEmpty(K);J&&!Y&&(this.slotFactory=()=>document.createElement("div"),Y=this.attachDefaultNode(),this.__updateHelperId(Y),this.__observeHelper(Y)),Y&&(Y.textContent=K),this.__toggleHasHelper(J)}__observeHelper(K){this.__helperObserver=new MutationObserver(Y=>{Y.forEach(J=>{const te=J.target,ie=te===this.node;if(J.type==="attributes")ie&&te.id!==this.defaultId&&this.__updateHelperId(te);else if(ie||te.parentElement===this.node){const ae=this.__hasHelper(this.node);this.__toggleHasHelper(ae)}})}),this.__helperObserver.observe(K,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(K){this.host.toggleAttribute("has-helper",K),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:K,node:this.node}}))}__updateHelperId(K){K.id||(K.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class LabelController extends SlotController{constructor(K){super(K,"label",()=>document.createElement("label"),(Y,J)=>{this.__updateLabelId(J),this.__updateDefaultLabel(this.label),this.__observeLabel(J)},!0)}get labelId(){return this.node.id}initCustomNode(K){this.__updateLabelId(K);const Y=this.__hasLabel(K);this.__toggleHasLabel(Y)}teardownNode(K){this.__labelObserver&&this.__labelObserver.disconnect();let Y=this.getSlotChild();!Y&&K!==this.defaultNode&&(Y=this.attachDefaultNode(),this.initNode(Y));const J=this.__hasLabel(Y);this.__toggleHasLabel(J)}setLabel(K){this.label=K,this.__updateDefaultLabel(K)}__hasLabel(K){return K?K.children.length>0||this.__isNotEmpty(K.textContent):!1}__isNotEmpty(K){return Boolean(K&&K.trim()!=="")}__observeLabel(K){this.__labelObserver=new MutationObserver(Y=>{Y.forEach(J=>{const te=J.target,ie=te===this.node;if(J.type==="attributes")ie&&te.id!==this.defaultId&&this.__updateLabelId(te);else if(ie||te.parentElement===this.node){const ae=this.__hasLabel(this.node);this.__toggleHasLabel(ae)}})}),this.__labelObserver.observe(K,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(K){this.host.toggleAttribute("has-label",K),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:K,node:this.node}}))}__updateDefaultLabel(K){if(this.defaultNode&&(this.defaultNode.textContent=K,this.defaultNode===this.node)){const Y=this.__isNotEmpty(K);this.__toggleHasLabel(Y)}}__updateLabelId(K){K.id||(K.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const LabelMixin=dedupingMixin(ee=>class extends ControllerMixin(ee){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new LabelController(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(Y){this._labelController.setLabel(Y)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ValidateMixin=dedupingMixin(ee=>class extends ee{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const Y=this.checkValidity();return this._setInvalid(!Y),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:Y}})),Y}checkValidity(){return!this.required||!!this.value}_setInvalid(Y){this._shouldSetInvalid(Y)&&(this.invalid=Y)}_shouldSetInvalid(Y){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const FieldMixin=ee=>class extends ValidateMixin(LabelMixin(ControllerMixin(ee))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new FieldAriaController(this),this._helperController=new HelperController(this),this._errorController=new ErrorController(this),this._labelController.addEventListener("label-changed",Y=>{const{hasLabel:J,node:te}=Y.detail;this.__labelChanged(J,te)}),this._helperController.addEventListener("helper-changed",Y=>{const{hasHelper:J,node:te}=Y.detail;this.__helperChanged(J,te)})}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(Y,J){Y?this._fieldAriaController.setHelperId(J.id):this._fieldAriaController.setHelperId(null)}__labelChanged(Y,J){Y?this._fieldAriaController.setLabelId(J.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(Y){this._errorController.setErrorMessage(Y)}_helperTextChanged(Y){this._helperController.setHelperText(Y)}_ariaTargetChanged(Y){Y&&this._fieldAriaController.setTarget(Y)}_requiredChanged(Y){this._fieldAriaController.setRequired(Y)}_invalidChanged(Y){this._errorController.setInvalid(Y),setTimeout(()=>{Y?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const DelegateStateMixin=dedupingMixin(ee=>class extends ee{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(Y){Y&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(Y=>{this._delegateAttribute(Y,this[Y])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(Y=>{this._delegateProperty(Y,this[Y])})}_delegateAttrsChanged(...Y){this.constructor.delegateAttrs.forEach((J,te)=>{this._delegateAttribute(J,Y[te])})}_delegatePropsChanged(...Y){this.constructor.delegateProps.forEach((J,te)=>{this._delegateProperty(J,Y[te])})}_delegateAttribute(Y,J){this.stateTarget&&(Y==="invalid"&&this._delegateAttribute("aria-invalid",J?"true":!1),typeof J=="boolean"?this.stateTarget.toggleAttribute(Y,J):J?this.stateTarget.setAttribute(Y,J):this.stateTarget.removeAttribute(Y))}_delegateProperty(Y,J){this.stateTarget&&(this.stateTarget[Y]=J)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const InputMixin=dedupingMixin(ee=>class extends ee{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(Y){Y.addEventListener("input",this._boundOnInput),Y.addEventListener("change",this._boundOnChange)}_removeInputListeners(Y){Y.removeEventListener("input",this._boundOnInput),Y.removeEventListener("change",this._boundOnChange)}_forwardInputValue(Y){this.inputElement&&(Y!=null?this.inputElement.value=Y:this.inputElement.value="")}_inputElementChanged(Y,J){Y?this._addInputListeners(Y):J&&this._removeInputListeners(J)}_hasInputValueChanged(Y,J){(Y||J)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(Y){this._setHasInputValue(Y),this._onInput(Y)}_onInput(Y){const J=Y.composedPath()[0];this.__userInput=Y.isTrusted,this.value=J.value,this.__userInput=!1}_onChange(Y){}_toggleHasValue(Y){this.toggleAttribute("has-value",Y)}_valueChanged(Y,J){this._toggleHasValue(this._hasValue),!(Y===""&&J===void 0)&&(this.__userInput||this._forwardInputValue(Y))}get _hasValue(){return this.value!=null&&this.value!==""}_setHasInputValue(Y){const J=Y.composedPath()[0];this._hasInputValue=J.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const InputConstraintsMixin=dedupingMixin(ee=>class extends DelegateStateMixin(ValidateMixin(InputMixin(ee))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(Y=>this[Y]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(Y){return Y.some(J=>this.__isValidConstraint(J))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(Y,...J){if(!Y)return;const te=this._hasValidConstraints(J),ie=this.__previousHasConstraints&&!te;(this._hasValue||this.invalid)&&te?this.validate():ie&&this._setInvalid(!1),this.__previousHasConstraints=te}_onChange(Y){Y.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:Y},bubbles:Y.bubbles,cancelable:Y.cancelable}))}__isValidConstraint(Y){return Boolean(Y)||Y===0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const stylesMap=new WeakMap;function getRootStyles(ee){return stylesMap.has(ee)||stylesMap.set(ee,new Set),stylesMap.get(ee)}function insertStyles(ee,K){const Y=document.createElement("style");Y.textContent=ee,K===document?document.head.appendChild(Y):K.insertBefore(Y,K.firstChild)}const SlotStylesMixin=dedupingMixin(ee=>class extends ee{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const Y=this.getRootNode(),J=getRootStyles(Y);this.slotStyles.forEach(te=>{J.has(te)||(insertStyles(te,Y),J.add(te))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const InputControlMixin=ee=>class extends SlotStylesMixin(DelegateFocusMixin(InputConstraintsMixin(FieldMixin(KeyboardMixin(ee))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",Y=>this._onClearButtonClick(Y))}_onClearButtonClick(Y){Y.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(Y){super._onFocus(Y),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(Y){super._onEscape(Y),this.clearButtonVisible&&this.value&&(Y.stopPropagation(),this.__clear())}_onChange(Y){Y.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:Y},bubbles:Y.bubbles,cancelable:Y.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(Y){super._addInputListeners(Y),Y.addEventListener("paste",this._boundOnPaste),Y.addEventListener("drop",this._boundOnDrop),Y.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(Y){super._removeInputListeners(Y),Y.removeEventListener("paste",this._boundOnPaste),Y.removeEventListener("drop",this._boundOnDrop),Y.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(Y){super._onKeyDown(Y),this.allowedCharPattern&&!this.__shouldAcceptKey(Y)&&(Y.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=Debouncer$1.debounce(this._preventInputDebouncer,timeOut.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(Y){return Y.metaKey||Y.ctrlKey||!Y.key||Y.key.length!==1||this.__allowedCharRegExp.test(Y.key)}_onPaste(Y){if(this.allowedCharPattern){const J=Y.clipboardData.getData("text");this.__allowedTextRegExp.test(J)||(Y.preventDefault(),this._markInputPrevented())}}_onDrop(Y){if(this.allowedCharPattern){const J=Y.dataTransfer.getData("text");this.__allowedTextRegExp.test(J)||(Y.preventDefault(),this._markInputPrevented())}}_onBeforeInput(Y){this.allowedCharPattern&&Y.data&&!this.__allowedTextRegExp.test(Y.data)&&(Y.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(Y){if(Y)try{this.__allowedCharRegExp=new RegExp(`^${Y}$`),this.__allowedTextRegExp=new RegExp(`^${Y}*$`)}catch(J){console.error(J)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const InputFieldMixin=ee=>class extends InputControlMixin(ee){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(Y){super._inputElementChanged(Y),Y&&(Y.value&&Y.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),Y.value=""),this.value&&(Y.value=this.value))}get __data(){return this.__dataValue||{}}set __data(Y){this.__dataValue=Y}_setFocused(Y){super._setFocused(Y),Y||this.validate()}_onInput(Y){super._onInput(Y),this.invalid&&this.validate()}_valueChanged(Y,J){super._valueChanged(Y,J),J!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class LabelledInputController{constructor(K,Y){this.input=K,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),Y.addEventListener("label-changed",J=>{this.__initLabel(J.detail.node)}),this.__initLabel(Y.node)}__initLabel(K){K&&(K.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&K.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const K=Y=>{Y.stopImmediatePropagation(),this.input.removeEventListener("click",K)};this.input.addEventListener("click",K)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const PatternMixin=ee=>class extends InputConstraintsMixin(ee){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const Y=this.inputElement;Y&&Y.value.length>0&&!this.checkValidity()&&(Y.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=Debouncer$1.debounce(this._inputDebouncer,timeOut.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(Y){this._checkInputValue(),super._onInput(Y)}_preventInvalidInputChanged(Y){Y&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const clearButton=i$5`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fieldShared=i$5`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const inputFieldContainer=i$5`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const inputFieldShared=[fieldShared,inputFieldContainer,clearButton];/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-text-field",inputFieldShared,{moduleId:"vaadin-text-field-styles"});class TextField extends PatternMixin(InputFieldMixin(ThemableMixin(ElementMixin(PolymerElement)))){static get is(){return"vaadin-text-field"}static get template(){return html`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new InputController(this,K=>{this._setInputElement(K),this._setFocusElement(K),this.stateTarget=K,this.ariaTarget=K})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this._tooltipController=new TooltipController(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(TextField.is,TextField);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-text-field" is deprecated. Use "@vaadin/text-field" instead.');var __defProp$i=Object.defineProperty,__getOwnPropDesc$i=Object.getOwnPropertyDescriptor,__decorateClass$i=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$i(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$i(K,Y,te),te};let FieldText=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.enabled=!0}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-text-field
                label="${this.label}"
                @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                   ?disabled=${!this.enabled}
                ?required=${this.required}
            ></vaadin-text-field>
            `}};FieldText.styles=i$5`
        vaadin-text-field {
            width: 100%;
        }
    `;__decorateClass$i([e()],FieldText.prototype,"required",2);__decorateClass$i([e()],FieldText.prototype,"label",2);__decorateClass$i([e()],FieldText.prototype,"name",2);__decorateClass$i([e()],FieldText.prototype,"onChange",2);__decorateClass$i([e()],FieldText.prototype,"value",2);__decorateClass$i([e()],FieldText.prototype,"enabled",2);__decorateClass$i([e()],FieldText.prototype,"field",2);FieldText=__decorateClass$i([e$1("field-text")],FieldText);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const numberField=i$5`
  :host {
    width: 8em;
  }

  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input),
  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'],
  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;registerStyles("vaadin-number-field",[inputFieldShared$1,fieldButton,numberField],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-number-field",inputFieldShared,{moduleId:"vaadin-number-field-styles"});class NumberField extends InputFieldMixin(ThemableMixin(ElementMixin(PolymerElement))){static get is(){return"vaadin-number-field"}static get template(){return html`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number},max:{type:Number},step:{type:Number}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const K=this.localName;return[...super.slotStyles,`
        ${K} input[type="number"]::-webkit-outer-spin-button,
        ${K} input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        ${K} input[type="number"] {
          -moz-appearance: textfield;
        }

        ${K}[dir='rtl'] input[type="number"]::placeholder {
          direction: rtl;
        }

        ${K}[dir='rtl']:not([step-buttons-visible]):not([has-controls]) input[type="number"]::placeholder {
          text-align: left;
        }
      `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new InputController(this,K=>{this._setInputElement(K),this._setFocusElement(K),this.stateTarget=K,this.ariaTarget=K})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_decreaseButtonTouchend(K){K.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(K){K.preventDefault(),this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(K){if(this.disabled||this.readonly)return;const Y=this.step||1;let J=parseFloat(this.value);this.value?J<this.min?(K=0,J=this.min):J>this.max&&(K=0,J=this.max):this.min===0&&K<0||this.max===0&&K>0||this.max===0&&this.min===0?(K=0,J=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?J=0:this.min>0?(J=this.min,this.max<0&&K<0&&(J=this.max),K=0):this.max<0&&(J=this.max,K<0?K=0:this._getIncrement(1,J-Y)>this.max?J-=2*Y:J-=Y);const te=this._getIncrement(K,J);(!this.value||K===0||this._incrementIsInsideTheLimits(K,J))&&this._setValue(te)}_setValue(K){this.value=this.inputElement.value=String(parseFloat(K)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(K,Y){let J=this.step||1,te=this.min||0;const ie=Math.max(this._getMultiplier(Y),this._getMultiplier(J),this._getMultiplier(te));J*=ie,Y=Math.round(Y*ie),te*=ie;const ae=(Y-te)%J;return K>0?(Y-ae+J)/ie:K<0?(Y-(ae||J))/ie:Y/ie}_getDecimalCount(K){const Y=String(K),J=Y.indexOf(".");return J===-1?1:Y.length-J-1}_getMultiplier(K){if(!isNaN(K))return 10**this._getDecimalCount(K)}_incrementIsInsideTheLimits(K,Y){return K<0?this.min==null||this._getIncrement(K,Y)>=this.min:K>0?this.max==null||this._getIncrement(K,Y)<=this.max:this._getIncrement(K,Y)<=this.max&&this._getIncrement(K,Y)>=this.min}_allowed(K){const Y=K*(this.step||1),J=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(Y,J)}_stepChanged(K,Y){Y&&(Y.step=K||"any")}_valueChanged(K,Y){K&&isNaN(parseFloat(K))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,Y)}_onKeyDown(K){K.key==="ArrowUp"?(K.preventDefault(),this._increaseValue()):K.key==="ArrowDown"&&(K.preventDefault(),this._decreaseValue()),super._onKeyDown(K)}_isStepButtonVisible(K,Y){return K||Y}_setHasInputValue(K){const Y=K.composedPath()[0];this._hasInputValue=Y.value.length>0||Y.validity.badInput}}customElements.define(NumberField.is,NumberField);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class IntegerField extends NumberField{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(K,Y){if(K!==""&&!this.__isInteger(K)){console.warn(`Trying to set non-integer value "${K}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(K,Y)}_stepChanged(K,Y){if(K!=null&&!this.__hasOnlyDigits(K)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${K}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(K,Y)}__isInteger(K){return/^(-\d)?\d*$/.test(String(K))}__hasOnlyDigits(K){return/^\d+$/.test(String(K))}}customElements.define(IntegerField.is,IntegerField);var __defProp$h=Object.defineProperty,__getOwnPropDesc$h=Object.getOwnPropertyDescriptor,__decorateClass$h=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$h(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$h(K,Y,te),te};let FieldNumber=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.enabled=!0,this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.value=""}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-integer-field
                    label="${this.label}"
                    @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                    ?disabled=${!this.enabled}
                    ?required=${this.required}
                    step-buttons-visible
                    min="0"
                    max="100"
            ></vaadin-integer-field>
        `}};__decorateClass$h([e()],FieldNumber.prototype,"required",2);__decorateClass$h([e()],FieldNumber.prototype,"label",2);__decorateClass$h([e()],FieldNumber.prototype,"name",2);__decorateClass$h([e()],FieldNumber.prototype,"enabled",2);__decorateClass$h([e()],FieldNumber.prototype,"field",2);__decorateClass$h([e()],FieldNumber.prototype,"onChange",2);__decorateClass$h([e()],FieldNumber.prototype,"value",2);FieldNumber=__decorateClass$h([e$1("field-number")],FieldNumber);var __defProp$g=Object.defineProperty,__getOwnPropDesc$g=Object.getOwnPropertyDescriptor,__decorateClass$g=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$g(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$g(K,Y,te),te};let FieldDouble=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.enabled=!0,this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.value=""}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-number-field
                    label="${this.label}"
                    @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                    ?disabled=${!this.enabled}
                    ?required=${this.required}
            ></vaadin-number-field>
        `}};__decorateClass$g([e()],FieldDouble.prototype,"required",2);__decorateClass$g([e()],FieldDouble.prototype,"label",2);__decorateClass$g([e()],FieldDouble.prototype,"name",2);__decorateClass$g([e()],FieldDouble.prototype,"enabled",2);__decorateClass$g([e()],FieldDouble.prototype,"field",2);__decorateClass$g([e()],FieldDouble.prototype,"onChange",2);__decorateClass$g([e()],FieldDouble.prototype,"value",2);FieldDouble=__decorateClass$g([e$1("field-double")],FieldDouble);registerStyles("vaadin-radio-button",i$5`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_radio-button-size: var(--vaadin-radio-button-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='radio'] {
      width: var(--_radio-button-size);
      height: var(--_radio-button-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_radio-button-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const CheckedMixin=dedupingMixin(ee=>class extends DelegateStateMixin(DisabledMixin(InputMixin(ee))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(Y){const J=Y.target;this._toggleChecked(J.checked),isElementFocused(J)||J.focus()}_toggleChecked(Y){this.checked=Y}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class SlotTargetController{constructor(K,Y,J){this.sourceSlot=K,this.targetFactory=Y,this.copyCallback=J,K&&K.addEventListener("slotchange",()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()})}hostConnected(){this.__sourceSlotObserver=new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget()),this.__copying||this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const K=this.targetFactory();if(!K)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach(J=>{J.parentElement===K&&K.removeChild(J)}),delete this.__slotTargetClones);const Y=this.sourceSlot.assignedNodes({flatten:!0}).filter(J=>!(J.nodeType===Node.TEXT_NODE&&J.textContent.trim()===""));Y.length>0&&(K.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(Y,K))}__copyNodesToSlotTarget(K,Y){this.__slotTargetClones=this.__slotTargetClones||[],K.forEach(J=>{const te=J.cloneNode(!0);this.__slotTargetClones.push(te),Y.appendChild(te),this.__sourceSlotObserver.observe(J,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),typeof this.copyCallback=="function"&&this.copyCallback(K)}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class RadioButton extends LabelMixin(CheckedMixin(DelegateFocusMixin(ActiveMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement))))))){static get is(){return"vaadin-radio-button"}static get template(){return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='radio'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='radio'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='radio'] {
          width: var(--vaadin-radio-button-size, 1em);
          height: var(--vaadin-radio-button-size, 1em);
        }

        [part='radio']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-radio-button-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div part="radio"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new InputController(this,K=>{this._setInputElement(K),this._setFocusElement(K),this.stateTarget=K,this.ariaTarget=K})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this.addController(new SlotTargetController(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated()))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-radio-button> is deprecated.
  Please use <label slot="label"> wrapper or the label property instead.`)}}customElements.define(RadioButton.is,RadioButton);const radioGroup=i$5`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;registerStyles("vaadin-radio-group",[requiredField,helper,radioGroup],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class RadioGroup extends FieldMixin(FocusMixin(DisabledMixin(KeyboardMixin(ElementMixin(ThemableMixin(PolymerElement)))))){static get is(){return"vaadin-radio-group"}static get template(){return html`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${generateUniqueId()}`,this._observer=new FlattenedNodesObserver(this,({addedNodes:K,removedNodes:Y})=>{this.__filterRadioButtons(K).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(Y).forEach(this.__unregisterRadioButton)}),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController)}__filterRadioButtons(K){return K.filter(Y=>Y instanceof RadioButton)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(K=>K.checked)}get isHorizontalRTL(){return this.getAttribute("dir")==="rtl"&&this._theme!=="vertical"}_onKeyDown(K){super._onKeyDown(K);const Y=K.composedPath().find(J=>J instanceof RadioButton);["ArrowLeft","ArrowUp"].includes(K.key)&&(K.preventDefault(),this.__selectNextRadioButton(Y)),["ArrowRight","ArrowDown"].includes(K.key)&&(K.preventDefault(),this.__selectPrevRadioButton(Y))}_invalidChanged(K){super._invalidChanged(K),K?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(K){const Y=this.__radioButtons.indexOf(K);this.__selectIncRadioButton(Y,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(K){const Y=this.__radioButtons.indexOf(K);this.__selectIncRadioButton(Y,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(K,Y){const J=(this.__radioButtons.length+K+Y)%this.__radioButtons.length,te=this.__radioButtons[J];te.disabled?this.__selectIncRadioButton(J,Y):(te.focusElement.focus(),te.focusElement.click())}__registerRadioButton(K){K.name=this._fieldName,K.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(K.disabled=!0),K.checked&&this.__selectRadioButton(K)}__unregisterRadioButton(K){K.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),K.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(K){K.target.checked&&this.__selectRadioButton(K.target)}__valueChanged(K,Y){if(!(Y===void 0&&K==="")){if(K){const J=this.__radioButtons.find(te=>te.value===K);J?(this.__selectRadioButton(J),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${K}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");Y!==void 0&&this.validate()}}__readonlyChanged(K,Y){!K&&Y===void 0||Y!==K&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(K,Y){super._disabledChanged(K,Y),!(!K&&Y===void 0)&&Y!==K&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(K){return!this.contains(K.relatedTarget)}_setFocused(K){super._setFocused(K),K||this.validate()}__selectRadioButton(K){K?this.value=K.value:this.value="",this.__radioButtons.forEach(Y=>{Y.checked=Y===K}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(K=>{this.readonly?K.disabled=K!==this.__selectedRadioButton:K.disabled=this.disabled})}}customElements.define(RadioGroup.is,RadioGroup);var __defProp$f=Object.defineProperty,__getOwnPropDesc$f=Object.getOwnPropertyDescriptor,__decorateClass$f=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$f(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$f(K,Y,te),te};let FieldEnum=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.enabled=!0}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-radio-group label="${this.label}" theme="vertical"
                                @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                   ?disabled=${!this.enabled}
                                ?required=${this.required}
            >
                ${this.field.attributes.filter(ee=>ee.key=="choice").map(ee=>y$1`
                    <vaadin-radio-button value=${ee.value.value} label=${ee.value.key}></vaadin-radio-button>
                    `)}
            </vaadin-radio-group>
            `}};__decorateClass$f([e()],FieldEnum.prototype,"required",2);__decorateClass$f([e()],FieldEnum.prototype,"label",2);__decorateClass$f([e()],FieldEnum.prototype,"name",2);__decorateClass$f([e()],FieldEnum.prototype,"onChange",2);__decorateClass$f([e()],FieldEnum.prototype,"value",2);__decorateClass$f([e()],FieldEnum.prototype,"enabled",2);__decorateClass$f([e()],FieldEnum.prototype,"field",2);FieldEnum=__decorateClass$f([e$1("field-enum")],FieldEnum);registerStyles("vaadin-checkbox",i$5`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--_checkbox-size) + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Checkbox extends LabelMixin(CheckedMixin(DelegateFocusMixin(ActiveMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement))))))){static get is(){return"vaadin-checkbox"}static get template(){return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='checkbox'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='checkbox'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='checkbox'] {
          width: var(--vaadin-checkbox-size, 1em);
          height: var(--vaadin-checkbox-size, 1em);
        }

        [part='checkbox']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-checkbox-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div part="checkbox"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new InputController(this,K=>{this._setInputElement(K),this._setFocusElement(K),this.stateTarget=K,this.ariaTarget=K})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this.addController(new SlotTargetController(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController)}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`)}_shouldSetActive(K){return K.target.localName==="a"?!1:super._shouldSetActive(K)}_toggleChecked(K){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(K)}}customElements.define(Checkbox.is,Checkbox);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-checkbox" is deprecated. Use "@vaadin/checkbox" instead.');const checkboxGroup=i$5`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;registerStyles("vaadin-checkbox-group",[requiredField,helper,checkboxGroup],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class CheckboxGroup extends FieldMixin(FocusMixin(DisabledMixin(ElementMixin(ThemableMixin(PolymerElement))))){static get is(){return"vaadin-checkbox-group"}static get template(){return html`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new FlattenedNodesObserver(this,({addedNodes:K,removedNodes:Y})=>{const J=this.__filterCheckboxes(K),te=this.__filterCheckboxes(Y);J.forEach(this.__registerCheckbox),te.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(J)}),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(K){return K.filter(Y=>Y instanceof Checkbox)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(K){K.some(J=>{const{value:te}=J;return!J.hasAttribute("value")&&(!te||te==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(K){K.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(K.disabled=!0),K.checked?this.__addCheckboxToValue(K.value):this.value.includes(K.value)&&(K.checked=!0)}__unregisterCheckbox(K){K.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),K.checked&&this.__removeCheckboxFromValue(K.value)}_disabledChanged(K,Y){super._disabledChanged(K,Y),!(!K&&Y===void 0)&&Y!==K&&this.__checkboxes.forEach(J=>{J.disabled=K})}__addCheckboxToValue(K){this.value.includes(K)||(this.value=[...this.value,K])}__removeCheckboxFromValue(K){this.value.includes(K)&&(this.value=this.value.filter(Y=>Y!==K))}__onCheckboxCheckedChanged(K){const Y=K.target;Y.checked?this.__addCheckboxToValue(Y.value):this.__removeCheckboxFromValue(Y.value)}__valueChanged(K,Y){K.length===0&&Y===void 0||(this.toggleAttribute("has-value",K.length>0),this.__checkboxes.forEach(J=>{J.checked=K.includes(J.value)}),Y!==void 0&&this.validate())}_shouldRemoveFocus(K){return!this.contains(K.relatedTarget)}_setFocused(K){super._setFocused(K),K||this.validate()}}customElements.define(CheckboxGroup.is,CheckboxGroup);var __defProp$e=Object.defineProperty,__getOwnPropDesc$e=Object.getOwnPropertyDescriptor,__decorateClass$e=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$e(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$e(K,Y,te),te};let FieldBoolean=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.checked})},this.enabled=!0}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-checkbox-group label="${this.label}" theme="vertical">
                <vaadin-checkbox label="Yes"
            @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                   ?disabled=${!this.enabled}
                                 ?required=${this.required}
                ></vaadin-checkbox>
            </vaadin-checkbox-group>
            `}};__decorateClass$e([e()],FieldBoolean.prototype,"required",2);__decorateClass$e([e()],FieldBoolean.prototype,"label",2);__decorateClass$e([e()],FieldBoolean.prototype,"name",2);__decorateClass$e([e()],FieldBoolean.prototype,"onChange",2);__decorateClass$e([e()],FieldBoolean.prototype,"value",2);__decorateClass$e([e()],FieldBoolean.prototype,"enabled",2);__decorateClass$e([e()],FieldBoolean.prototype,"field",2);FieldBoolean=__decorateClass$e([e$1("field-boolean")],FieldBoolean);registerStyles("vaadin-overlay",overlay,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0,requestAnimationFrame(function(){scheduled=!1,flushQueue(beforeRenderQueue),setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(ee){for(;ee.length;)callMethod(ee.shift())}function runQueue(ee){for(let K=0,Y=ee.length;K<Y;K++)callMethod(ee.shift())}function callMethod(ee){const K=ee[0],Y=ee[1],J=ee[2];try{Y.apply(K,J)}catch(te){setTimeout(()=>{throw te})}}function beforeNextRender(ee,K,Y){scheduled||schedule(),beforeRenderQueue.push([ee,K,Y])}function afterNextRender(ee,K,Y){scheduled||schedule(),afterRenderQueue.push([ee,K,Y])}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function mutablePropertyChange(ee,K,Y,J,te){let ie;te&&(ie=typeof Y=="object"&&Y!==null,ie&&(J=ee.__dataTemp[K]));let ae=J!==Y&&(J===J||Y===Y);return ie&&ae&&(ee.__dataTemp[K]=Y),ae}const MutableData=dedupingMixin(ee=>{class K extends ee{_shouldPropertyChange(J,te,ie){return mutablePropertyChange(this,J,te,ie,!0)}}return K}),OptionalMutableData=dedupingMixin(ee=>{class K extends ee{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(J,te,ie){return mutablePropertyChange(this,J,te,ie,this.mutableData)}}return K});MutableData._mutablePropertyChange=mutablePropertyChange;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let newInstance=null;function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});const DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);function upgradeTemplate(ee,K){newInstance=ee,Object.setPrototypeOf(ee,K.prototype),new K,newInstance=null}const templateInstanceBase=PropertyEffects(class{});function showHideChildren(ee,K){for(let Y=0;Y<K.length;Y++){let J=K[Y];if(Boolean(ee)!=Boolean(J.__hideTemplateChildren__))if(J.nodeType===Node.TEXT_NODE)ee?(J.__polymerTextContent__=J.textContent,J.textContent=""):J.textContent=J.__polymerTextContent__;else if(J.localName==="slot")if(ee)J.__polymerReplaced__=document.createComment("hidden-slot"),wrap$1(wrap$1(J).parentNode).replaceChild(J.__polymerReplaced__,J);else{const te=J.__polymerReplaced__;te&&wrap$1(wrap$1(te).parentNode).replaceChild(J,te)}else J.style&&(ee?(J.__polymerDisplay__=J.style.display,J.style.display="none"):J.style.display=J.__polymerDisplay__);J.__hideTemplateChildren__=ee,J._showHideChildren&&J._showHideChildren(ee)}}class TemplateInstanceBase extends templateInstanceBase{constructor(K){super(),this._configureProperties(K),this.root=this._stampTemplate(this.__dataHost);let Y=[];this.children=Y;for(let te=this.root.firstChild;te;te=te.nextSibling)Y.push(te),te.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let J=this.__templatizeOptions;(K&&J.instanceProps||!J.instanceProps)&&this._enableProperties()}_configureProperties(K){if(this.__templatizeOptions.forwardHostProp)for(let J in this.__hostProps)this._setPendingProperty(J,this.__dataHost["_host_"+J]);for(let J in K)this._setPendingProperty(J,K[J])}forwardHostProp(K,Y){this._setPendingPropertyOrPath(K,Y,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(K,Y,J){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(K,Y,te=>{te.model=this,J(te)});else{let te=this.__dataHost.__dataHost;te&&te._addEventListenerToNode(K,Y,J)}}_showHideChildren(K){showHideChildren(K,this.children)}_setUnmanagedPropertyToNode(K,Y,J){K.__hideTemplateChildren__&&K.nodeType==Node.TEXT_NODE&&Y=="textContent"?K.__polymerTextContent__=J:super._setUnmanagedPropertyToNode(K,Y,J)}get parentModel(){let K=this.__parentModel;if(!K){let Y;K=this;do K=K.__dataHost.__dataHost;while((Y=K.__templatizeOptions)&&!Y.parentModel);this.__parentModel=K}return K}dispatchEvent(K){return!0}}TemplateInstanceBase.prototype.__dataHost;TemplateInstanceBase.prototype.__templatizeOptions;TemplateInstanceBase.prototype._methodHost;TemplateInstanceBase.prototype.__templatizeOwner;TemplateInstanceBase.prototype.__hostProps;const MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(ee){let K=ee.__dataHost;return K&&K._methodHost||K}function createTemplatizerClass(ee,K,Y){let J=Y.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;templatize.mixin&&(J=templatize.mixin(J));let te=class extends J{};return te.prototype.__templatizeOptions=Y,te.prototype._bindTemplate(ee),addNotifyEffects(te,ee,K,Y),te}function addPropagateEffects(ee,K,Y,J){let te=Y.forwardHostProp;if(te&&K.hasHostProps){const ie=ee.localName=="template";let ae=K.templatizeTemplateClass;if(!ae){if(ie){let se=Y.mutableData?MutableDataTemplate:DataTemplate;class oe extends se{}ae=K.templatizeTemplateClass=oe}else{const se=ee.constructor;class oe extends se{}ae=K.templatizeTemplateClass=oe}let re=K.hostProps;for(let se in re)ae.prototype._addPropertyEffect("_host_"+se,ae.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(se,te)}),ae.prototype._createNotifyingProperty("_host_"+se);legacyWarnings&&J&&warnOnUndeclaredProperties(K,Y,J)}if(ee.__dataProto&&Object.assign(ee.__data,ee.__dataProto),ie)upgradeTemplate(ee,ae),ee.__dataTemp={},ee.__dataPending=null,ee.__dataOld=null,ee._enableProperties();else{Object.setPrototypeOf(ee,ae.prototype);const re=K.hostProps;for(let se in re)if(se="_host_"+se,se in ee){const oe=ee[se];delete ee[se],ee.__data[se]=oe}}}}function createForwardHostPropEffect(ee,K){return function(J,te,ie){K.call(J.__templatizeOwner,te.substring(6),ie[te])}}function addNotifyEffects(ee,K,Y,J){let te=Y.hostProps||{};for(let ie in J.instanceProps){delete te[ie];let ae=J.notifyInstanceProp;ae&&ee.prototype._addPropertyEffect(ie,ee.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(ie,ae)})}if(J.forwardHostProp&&K.__dataHost)for(let ie in te)Y.hasHostProps||(Y.hasHostProps=!0),ee.prototype._addPropertyEffect(ie,ee.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}function createNotifyInstancePropEffect(ee,K){return function(J,te,ie){K.call(J.__templatizeOwner,J,te,ie[te])}}function createNotifyHostPropEffect(){return function(K,Y,J){K.__dataHost._setPendingPropertyOrPath("_host_"+Y,J[Y],!0,!0)}}function templatize(ee,K,Y){if(strictTemplatePolicy&&!findMethodHost(ee))throw new Error("strictTemplatePolicy: template owner not trusted");if(Y=Y||{},ee.__templatizeOwner)throw new Error("A <template> can only be templatized once");ee.__templatizeOwner=K;let te=(K?K.constructor:TemplateInstanceBase)._parseTemplate(ee),ie=te.templatizeInstanceClass;ie||(ie=createTemplatizerClass(ee,te,Y),te.templatizeInstanceClass=ie);const ae=findMethodHost(ee);addPropagateEffects(ee,te,Y,ae);let re=class extends ie{};return re.prototype._methodHost=ae,re.prototype.__dataHost=ee,re.prototype.__templatizeOwner=K,re.prototype.__hostProps=te.hostProps,re=re,re}function warnOnUndeclaredProperties(ee,K,Y){const J=Y.constructor._properties,{propertyEffects:te}=ee,{instanceProps:ie}=K;for(let ae in te)if(!J[ae]&&!(ie&&ie[ae])){const re=te[ae];for(let se=0;se<re.length;se++){const{part:oe}=re[se].info;if(!(oe.signature&&oe.signature.static)){console.warn(`Property '${ae}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function modelForElement(ee,K){let Y;for(;K;)if(Y=K.__dataHost?K:K.__templatizeInstance)if(Y.__dataHost!=ee)K=Y.__dataHost;else return Y;else K=wrap$1(K).parentNode;return null}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const testUserAgent=ee=>ee.test(navigator.userAgent),testPlatform=ee=>ee.test(navigator.platform),testVendor=ee=>ee.test(navigator.vendor),isAndroid=testUserAgent(/Android/),isChrome=testUserAgent(/Chrome/)&&testVendor(/Google Inc/),isFirefox=testUserAgent(/Firefox/),isIPad=testPlatform(/^iPad/)||testPlatform(/^Mac/)&&navigator.maxTouchPoints>1,isIPhone=testPlatform(/^iPhone/),isIOS=isIPhone||isIPad,isSafari=testUserAgent(/^((?!chrome|android).)*safari/i),isTouch=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const instances=[];class FocusTrapController{constructor(K){this.host=K,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(K){if(this.__trapNode=K,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");instances.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,instances.pop()}__onKeyDown(K){if(this.__trapNode&&this===Array.from(instances).pop()&&K.key==="Tab"){K.preventDefault();const Y=K.shiftKey;this.__focusNextElement(Y)}}__focusNextElement(K=!1){const Y=this.__focusableElements,J=K?-1:1,te=this.__focusedElementIndex,ie=(Y.length+te+J)%Y.length,ae=Y[ie];ae.focus(),ae.localName==="input"&&ae.select()}get __focusableElements(){return getFocusableElements(this.__trapNode)}get __focusedElementIndex(){const K=this.__focusableElements;return K.indexOf(K.filter(isElementFocused).pop())}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Overlay extends ThemableMixin(DirMixin(ControllerMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new FlattenedNodesObserver(this,K=>{this._setTemplateFromNodes(K.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),isIOS&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new FocusTrapController(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const K=window.innerHeight,J=window.innerWidth>K,te=document.documentElement.clientHeight;J&&te>K?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${te-K}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(K){this.template=K.find(Y=>Y.localName&&Y.localName==="template")||this.template}close(K){const Y=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:K}});this.dispatchEvent(Y),Y.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(K){K.preventDefault()}_mouseDownListener(K){this._mouseDownInside=K.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(K){this._mouseUpInside=K.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(K){if(K.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._last)return;const Y=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:K}});this.dispatchEvent(Y),this.opened&&!Y.defaultPrevented&&this.close(K)}_keydownListener(K){if(this._last&&!(this.modeless&&!K.composedPath().includes(this.$.overlay))&&K.key==="Escape"){const Y=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:K}});this.dispatchEvent(Y),this.opened&&!Y.defaultPrevented&&this.close(K)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(K,Y){this._instance||this._ensureTemplatized(),K?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),afterNextRender(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const J=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(J)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):Y&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(K){K&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const K=getComputedStyle(this).getPropertyValue("animation-name");return!(getComputedStyle(this).getPropertyValue("display")==="none")&&K&&K!=="none"}_enqueueAnimation(K,Y){const J=`__${K}Handler`,te=ie=>{ie&&ie.target!==this||(Y(),this.removeEventListener("animationend",te),delete this[J])};this[J]=te,this.addEventListener("animationend",te)}_flushAnimation(K){const Y=`__${K}Handler`;typeof this[Y]=="function"&&this[Y]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const K=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&K){const Y=this._getActiveElement();(Y===document.body||this._deepContains(Y))&&setTimeout(()=>K.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(K=>K instanceof Overlay&&!K.hasAttribute("closing")).sort((K,Y)=>K.__zIndex-Y.__zIndex||0)}get _last(){return this===Overlay.__attachedInstances.pop()}_modelessChanged(K){K?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Overlay.__attachedInstances.forEach(K=>{K!==this&&(K.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const K=Overlay.__attachedInstances;let Y;for(;(Y=K.pop())&&!(Y!==this&&(Y.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!Y.modeless)););}_removeOldContent(){!this.content||!this._contentNodes||(this._observer.disconnect(),this._contentNodes.forEach(K=>{K.parentNode===this.content&&this.content.removeChild(K)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(K){this._removeOldContent(),K._Templatizer||(K._Templatizer=templatize(K,this,{forwardHostProp(J,te){this._instance&&this._instance.forwardHostProp(J,te)}})),this._instance=new K._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const Y=K._templateRoot||(K._templateRoot=K.getRootNode());if(Y!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let J=Array.from(Y.querySelectorAll("style")).reduce((te,ie)=>te+ie.textContent,"");if(J=J.replace(/:host/g,":host-nomatch"),J){const te=document.createElement("style");te.textContent=J,this.$.content.shadowRoot.appendChild(te),this._contentNodes.unshift(te)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(K,Y,J,te){K!==Y?this.template=void 0:J!==te&&(this.renderer=void 0)}_templateOrRendererChanged(K,Y,J,te,ie){if(K&&Y)throw this._removeNewRendererOrTemplate(K,this._oldTemplate,Y,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const ae=this._oldOwner!==J||this._oldModel!==te;this._oldModel=te,this._oldOwner=J;const re=this._oldTemplate!==K;this._oldTemplate=K;const se=this._oldRenderer!==Y;this._oldRenderer=Y;const oe=this._oldOpened!==ie;this._oldOpened=ie,se&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),K&&re?this._stampOverlayTemplate(K):Y&&(se||oe||ae)&&ie&&this.requestContentUpdate()}_getActiveElement(){let K=document.activeElement||document.body;for(;K.shadowRoot&&K.shadowRoot.activeElement;)K=K.shadowRoot.activeElement;return K}_deepContains(K){if(this.contains(K))return!0;let Y=K;const J=K.ownerDocument;for(;Y&&Y!==J&&Y!==this;)Y=Y.parentNode||Y.host;return Y===this}bringToFront(){let K="";const Y=Overlay.__attachedInstances.filter(J=>J!==this).pop();Y&&(K=Y.__zIndex+1),this.style.zIndex=K,this.__zIndex=K||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(Overlay.is,Overlay);const datePickerOverlay=i$5`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;registerStyles("vaadin-date-picker-overlay",[menuOverlay,datePickerOverlay],{moduleId:"lumo-date-picker-overlay"});registerStyles("vaadin-date-picker-overlay-content",i$5`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    /* Month scroller */

    [part='months'] {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    /* Year scroller */
    [part='years'] {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    [part='year-number']:not([current]),
    [part='year-separator'] {
      opacity: 0.7;
      transition: 0.2s opacity;
    }

    [part='years']:hover [part='year-number'],
    [part='years']:hover [part='year-separator'] {
      opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
    #scrollers[desktop] [part='months'] {
      right: auto;
    }

    /* Year scroller position indicator */
    [part='years']::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='years'] [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '•';
    }

    /* Current year */

    [part='years'] [part='year-number'][current] {
      color: var(--lumo-primary-text-color);
    }

    /* Toolbar (footer) */

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    /* Today and Cancel buttons */

    [part='toolbar'] [part\$='button'] {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='years'] {
        background-color: var(--lumo-shade-5pct);
      }

      [part='toolbar'],
      [part='months'] {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      [part='years'] {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
      }

      :host([years-visible]) [part='months'] {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});registerStyles("vaadin-month-calendar",i$5`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part='date'] {
      transition: color 0.1s;
    }

    [part='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part='date'][today] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part='date'][focused]::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part='date'][focused]::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part='date']:not(:empty):not([disabled]):not([selected]):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part='date'][selected] {
      color: var(--lumo-primary-contrast-color);
    }

    [part='date'][selected]::before {
      background-color: var(--lumo-primary-color);
    }

    [part='date'][disabled] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part='date']:hover:not([selected])::before,
      [part='date'][focused]:not([selected])::before {
        display: none;
      }

      [part='date']:not(:empty):not([disabled]):active::before {
        display: block;
      }

      [part='date'][selected]::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const template=document.createElement("template");template.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(template.content);const datePicker=i$5`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;registerStyles("vaadin-date-picker",[inputFieldShared$1,datePicker],{moduleId:"lumo-date-picker"});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const DISABLED_ATTR="disable-upgrade",findObservedAttributesGetter=ee=>{for(;ee;){const K=Object.getOwnPropertyDescriptor(ee,"observedAttributes");if(K)return K.get;ee=Object.getPrototypeOf(ee.prototype).constructor}return()=>[]},DisableUpgradeMixin=dedupingMixin(ee=>{const K=ElementMixin$1(ee);let Y=findObservedAttributesGetter(K);class J extends K{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return Y.call(this).concat(DISABLED_ATTR)}_initializeProperties(){this.hasAttribute(DISABLED_ATTR)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(ie){return super._canApplyPropertyDefault(ie)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(ie))}attributeChangedCallback(ie,ae,re,se){ie==DISABLED_ATTR?this.__isUpgradeDisabled&&re==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,wrap$1(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(ie,ae,re,se)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return J});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const PROP_NAMES_VERTICAL={start:"top",end:"bottom"},PROP_NAMES_HORIZONTAL={start:"left",end:"right"},targetResizeObserver=new ResizeObserver(ee=>{setTimeout(()=>{ee.forEach(K=>{K.target.__overlay&&K.target.__overlay._updatePosition()})})}),PositionMixin=ee=>class extends ee{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=getAncestorRootNodes(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(Y=>{Y.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(Y=>{Y.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(Y,J){if(this.__removeUpdatePositionEventListeners(),J&&(J.__overlay=null,targetResizeObserver.unobserve(J),Y&&(this.__addUpdatePositionEventListeners(),J.__overlay=this,targetResizeObserver.observe(J))),Y){const te=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(ie=>{this.__margins[ie]=parseInt(te[ie],10)})),this.setAttribute("dir",te.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}__onScroll(Y){this.contains(Y.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const Y=this.positionTarget.getBoundingClientRect(),J=this.__shouldAlignStartVertically(Y);this.style.justifyContent=J?"flex-start":"flex-end";const te=this.__shouldAlignStartHorizontally(Y,this.__isRTL),ie=!this.__isRTL&&te||this.__isRTL&&!te;this.style.alignItems=ie?"flex-start":"flex-end";const ae=this.getBoundingClientRect(),re=this.__calculatePositionInOneDimension(Y,ae,this.noVerticalOverlap,PROP_NAMES_VERTICAL,this,J),se=this.__calculatePositionInOneDimension(Y,ae,this.noHorizontalOverlap,PROP_NAMES_HORIZONTAL,this,te);Object.assign(this.style,re,se),this.toggleAttribute("bottom-aligned",!J),this.toggleAttribute("top-aligned",J),this.toggleAttribute("end-aligned",!ie),this.toggleAttribute("start-aligned",ie)}__shouldAlignStartHorizontally(Y,J){const te=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const ie=Math.min(window.innerWidth,document.documentElement.clientWidth),ae=!J&&this.horizontalAlign==="start"||J&&this.horizontalAlign==="end";return this.__shouldAlignStart(Y,te,ie,this.__margins,ae,this.noHorizontalOverlap,PROP_NAMES_HORIZONTAL)}__shouldAlignStartVertically(Y){const J=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const te=Math.min(window.innerHeight,document.documentElement.clientHeight),ie=this.verticalAlign==="top";return this.__shouldAlignStart(Y,J,te,this.__margins,ie,this.noVerticalOverlap,PROP_NAMES_VERTICAL)}__shouldAlignStart(Y,J,te,ie,ae,re,se){const oe=te-Y[re?se.end:se.start]-ie[se.end],ne=Y[re?se.start:se.end]-ie[se.start],le=ae?oe:ne,de=le>(ae?ne:oe)||le>J;return ae===de}__adjustBottomProperty(Y,J,te){let ie;if(Y===J.end){if(J.end===PROP_NAMES_VERTICAL.end){const ae=Math.min(window.innerHeight,document.documentElement.clientHeight);if(te>ae&&this.__oldViewportHeight){const re=this.__oldViewportHeight-ae;ie=te-re}this.__oldViewportHeight=ae}if(J.end===PROP_NAMES_HORIZONTAL.end){const ae=Math.min(window.innerWidth,document.documentElement.clientWidth);if(te>ae&&this.__oldViewportWidth){const re=this.__oldViewportWidth-ae;ie=te-re}this.__oldViewportWidth=ae}}return ie}__calculatePositionInOneDimension(Y,J,te,ie,ae,re){const se=re?ie.start:ie.end,oe=re?ie.end:ie.start,ne=parseFloat(ae.style[se]||getComputedStyle(ae)[se]),le=this.__adjustBottomProperty(se,ie,ne),he=J[re?ie.start:ie.end]-Y[te===re?ie.end:ie.start],de=le?`${le}px`:`${ne+he*(re?-1:1)}px`;return{[se]:de,[oe]:""}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const datePickerStyles=i$5`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`,datePickerOverlayStyles=i$5`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-date-picker-overlay",datePickerOverlayStyles,{moduleId:"vaadin-date-picker-overlay-styles"});let memoizedTemplate$1;class DatePickerOverlay extends DisableUpgradeMixin(PositionMixin(Overlay)){static get is(){return"vaadin-date-picker-overlay"}static get template(){return memoizedTemplate$1||(memoizedTemplate$1=super.template.cloneNode(!0),memoizedTemplate$1.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),memoizedTemplate$1}}customElements.define(DatePickerOverlay.is,DatePickerOverlay);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Debouncer{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(K,Y){this._asyncModule=K,this._callback=Y,this._timer=this._asyncModule.run(()=>{this._timer=null,debouncerQueue.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),debouncerQueue.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(K,Y,J){return K instanceof Debouncer?K._cancelAsync():K=new Debouncer,K.setConfig(Y,J),K}}let debouncerQueue=new Set;const enqueueDebouncer=function(ee){debouncerQueue.add(ee)},flushDebouncers=function(){const ee=Boolean(debouncerQueue.size);return debouncerQueue.forEach(K=>{try{K.flush()}catch(Y){setTimeout(()=>{throw Y})}}),ee};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const flush=function(){let ee,K;do ee=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),K=flushDebouncers();while(ee||K)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let elementsHidden=!1;function hideElementsGlobally(){if(legacyOptimizations&&!useShadow){if(!elementsHidden){elementsHidden=!0;const ee=document.createElement("style");ee.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(ee)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const domRepeatBase=OptionalMutableData(PolymerElement);class DomRepeat extends domRepeatBase{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!suppressTemplateNotifications,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let K=0;K<this.__instances.length;K++)this.__detachInstance(K);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),hideElementsGlobally()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let K=wrap$1(wrap$1(this).parentNode);for(let Y=0;Y<this.__instances.length;Y++)this.__attachInstance(Y,K);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const K=this;let Y=this.template=K._templateInfo?K:this.querySelector("template");if(!Y){let te=new MutationObserver(()=>{if(this.querySelector("template"))te.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return te.observe(this,{childList:!0}),!1}let J={};J[this.as]=!0,J[this.indexAs]=!0,J[this.itemsIndexAs]=!0,this.__ctor=templatize(Y,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:J,forwardHostProp:function(te,ie){let ae=this.__instances;for(let re=0,se;re<ae.length&&(se=ae[re]);re++)se.forwardHostProp(te,ie)},notifyInstanceProp:function(te,ie,ae){if(matches(this.as,ie)){let re=te[this.itemsIndexAs];ie==this.as&&(this.items[re]=ae);let se=translate(this.as,`${JSCompiler_renameProperty("items",this)}.${re}`,ie);this.notifyPath(se,ae)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(K){if(typeof K=="string"){let Y=K,J=this.__getMethodHost();return function(){return J[Y].apply(J,arguments)}}return K}__sortChanged(K){this.__sortFn=this.__functionFromPropertyValue(K),this.items&&this.__debounceRender(this.__render)}__filterChanged(K){this.__filterFn=this.__functionFromPropertyValue(K),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(K){return Math.ceil(1e3/K)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(K){if(this.__sortFn||this.__filterFn){if(!K)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let Y=this.__observePaths;for(let J=0;J<Y.length;J++)K.indexOf(Y[J])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(K){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(K.path,K.value)||(K.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(K,Y=0){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,Y>0?timeOut$1.after(Y):microTask$1,K.bind(this)),enqueueDebouncer(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),flush()}__render(){if(!this.__ensureTemplatized())return;let K=this.items||[];const Y=this.__sortAndFilterItems(K),J=this.__calculateLimit(Y.length);this.__updateInstances(K,J,Y),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!suppressTemplateNotifications||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(K){let Y=new Array(K.length);for(let J=0;J<K.length;J++)Y[J]=J;return this.__filterFn&&(Y=Y.filter((J,te,ie)=>this.__filterFn(K[J],te,ie))),this.__sortFn&&Y.sort((J,te)=>this.__sortFn(K[J],K[te])),Y}__calculateLimit(K){let Y=K;const J=this.__instances.length;if(this.initialCount){let te;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(Y=Math.min(K,this.initialCount),te=Math.max(Y-J,0),this.__chunkCount=te||1):(te=Math.min(Math.max(K-J,0),this.__chunkCount),Y=Math.min(J+te,K)),this.__shouldMeasureChunk=te===this.__chunkCount,this.__shouldContinueChunking=Y<K,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,Y}__continueChunking(){if(this.__shouldMeasureChunk){const K=performance.now()-this.__renderStartTime,Y=this._targetFrameTime/K;this.__chunkCount=Math.round(this.__chunkCount*Y)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(K,Y,J){const te=this.__itemsIdxToInstIdx={};let ie;for(ie=0;ie<Y;ie++){let ae=this.__instances[ie],re=J[ie],se=K[re];te[re]=ie,ae?(ae._setPendingProperty(this.as,se),ae._setPendingProperty(this.indexAs,ie),ae._setPendingProperty(this.itemsIndexAs,re),ae._flushProperties()):this.__insertInstance(se,ie,re)}for(let ae=this.__instances.length-1;ae>=ie;ae--)this.__detachAndRemoveInstance(ae)}__detachInstance(K){let Y=this.__instances[K];const J=wrap$1(Y.root);for(let te=0;te<Y.children.length;te++){let ie=Y.children[te];J.appendChild(ie)}return Y}__attachInstance(K,Y){let J=this.__instances[K];Y.insertBefore(J.root,this)}__detachAndRemoveInstance(K){this.__detachInstance(K),this.__instances.splice(K,1)}__stampInstance(K,Y,J){let te={};return te[this.as]=K,te[this.indexAs]=Y,te[this.itemsIndexAs]=J,new this.__ctor(te)}__insertInstance(K,Y,J){const te=this.__stampInstance(K,Y,J);let ie=this.__instances[Y+1],ae=ie?ie.children[0]:this;return wrap$1(wrap$1(this).parentNode).insertBefore(te.root,ae),this.__instances[Y]=te,te}_showHideChildren(K){for(let Y=0;Y<this.__instances.length;Y++)this.__instances[Y]._showHideChildren(K)}__handleItemPath(K,Y){let J=K.slice(6),te=J.indexOf("."),ie=te<0?J:J.substring(0,te);if(ie==parseInt(ie,10)){let ae=te<0?"":J.substring(te+1);this.__handleObservedPaths(ae);let re=this.__itemsIdxToInstIdx[ie],se=this.__instances[re];if(se){let oe=this.as+(ae?"."+ae:"");se._setPendingPropertyOrPath(oe,Y,!1,!0),se._flushProperties()}return!0}}itemForElement(K){let Y=this.modelForElement(K);return Y&&Y[this.as]}indexForElement(K){let Y=this.modelForElement(K);return Y&&Y[this.indexAs]}modelForElement(K){return modelForElement(this.template,K)}}customElements.define(DomRepeat.is,DomRepeat);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function getISOWeekNumber(ee){let K=ee.getDay();K===0&&(K=7);const Y=4-K,J=new Date(ee.getTime()+Y*24*3600*1e3),te=new Date(0,0);te.setFullYear(J.getFullYear());const ie=J.getTime()-te.getTime(),ae=Math.round(ie/(24*3600*1e3));return Math.floor(ae/7+1)}function dateEquals(ee,K){return ee instanceof Date&&K instanceof Date&&ee.getFullYear()===K.getFullYear()&&ee.getMonth()===K.getMonth()&&ee.getDate()===K.getDate()}function dateAllowed(ee,K,Y){return(!K||ee>=K)&&(!Y||ee<=Y)}function getClosestDate(ee,K){return K.filter(Y=>Y!==void 0).reduce((Y,J)=>{if(!J)return Y;if(!Y)return J;const te=Math.abs(ee.getTime()-J.getTime()),ie=Math.abs(Y.getTime()-ee.getTime());return te<ie?J:Y})}function extractDateParts(ee){return{day:ee.getDate(),month:ee.getMonth(),year:ee.getFullYear()}}function getAdjustedYear(ee,K,Y=0,J=1){if(K>99)throw new Error("The provided year cannot have more than 2 digits.");if(K<0)throw new Error("The provided year cannot be negative.");let te=K+Math.floor(ee.getFullYear()/100)*100;return ee<new Date(te-50,Y,J)?te-=100:ee>new Date(te+50,Y,J)&&(te+=100),te}function parseDate(ee){const K=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(ee);if(!K)return;const Y=new Date(0,0);return Y.setFullYear(parseInt(K[1],10)),Y.setMonth(parseInt(K[2],10)-1),Y.setDate(parseInt(K[3],10)),Y}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class MonthCalendar extends FocusMixin(ThemableMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part='date'] {
          outline: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part="date"
                  date="[[item]]"
                  today$="[[_isToday(item)]]"
                  focused$="[[__isDayFocused(item, focusedDate)]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  selected$="[[__isDaySelected(item, selectedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}ready(){super.ready(),addListener(this.$.monthGrid,"tap",this._handleTap.bind(this))}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part=date]")].find(K=>dateEquals(K.date,this.focusedDate))}_isDisabled(K,Y,J){const te=new Date(0,0);te.setFullYear(K.getFullYear()),te.setMonth(K.getMonth()),te.setDate(1);const ie=new Date(0,0);return ie.setFullYear(K.getFullYear()),ie.setMonth(K.getMonth()+1),ie.setDate(0),Y&&J&&Y.getMonth()===J.getMonth()&&Y.getMonth()===K.getMonth()&&J.getDate()-Y.getDate()>=0?!1:!dateAllowed(te,Y,J)&&!dateAllowed(ie,Y,J)}_getTitle(K,Y){if(!(K===void 0||Y===void 0))return this.i18n.formatTitle(Y[K.getMonth()],K.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(K,Y){K.setDate(K.getDate()+Y)}_applyFirstDayOfWeek(K,Y){if(!(K===void 0||Y===void 0))return K.slice(Y).concat(K.slice(0,Y))}_getWeekDayNames(K,Y,J,te){if(!(K===void 0||Y===void 0||J===void 0||te===void 0))return K=this._applyFirstDayOfWeek(K,te),Y=this._applyFirstDayOfWeek(Y,te),K=K.map((ie,ae)=>({weekDay:ie,weekDayShort:Y[ae]})),K}__focusedDateChanged(K,Y){Y.some(J=>dateEquals(J,K))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(K){return K?K.getDate():""}_showWeekNumbersChanged(K,Y){K&&Y===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(K,Y){return K&&Y===1}_isToday(K){return dateEquals(new Date,K)}_getDays(K,Y){if(K===void 0||Y===void 0)return;const J=new Date(0,0);for(J.setFullYear(K.getFullYear()),J.setMonth(K.getMonth()),J.setDate(1);J.getDay()!==Y;)this._dateAdd(J,-1);const te=[],ie=J.getMonth(),ae=K.getMonth();for(;J.getMonth()===ae||J.getMonth()===ie;)te.push(J.getMonth()===ae?new Date(J.getTime()):null),this._dateAdd(J,1);return te}_getWeeks(K){return K.reduce((Y,J,te)=>(te%7===0&&Y.push([]),Y[Y.length-1].push(J),Y),[])}_handleTap(K){!this.ignoreTaps&&!this._notTapping&&K.target.date&&!K.target.hasAttribute("disabled")&&(this.selectedDate=K.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:K.target.date},bubbles:!0,composed:!0})))}_preventDefault(K){K.preventDefault()}__getWeekNumber(K){const Y=K.reduce((J,te)=>!J&&te?te:J);return getISOWeekNumber(Y)}__isDayFocused(K,Y){return dateEquals(K,Y)}__isDaySelected(K,Y){return dateEquals(K,Y)}__getDayAriaSelected(K,Y){if(this.__isDaySelected(K,Y))return"true"}__isDayDisabled(K,Y,J){return!dateAllowed(K,Y,J)}__getDayAriaDisabled(K,Y,J){if(!(K===void 0||Y===void 0||J===void 0)&&this.__isDayDisabled(K,Y,J))return"true"}__getDayAriaLabel(K){if(!K)return"";let Y=`${this._getDate(K)} ${this.i18n.monthNames[K.getMonth()]} ${K.getFullYear()}, ${this.i18n.weekdays[K.getDay()]}`;return this._isToday(K)&&(Y+=`, ${this.i18n.today}`),Y}__getDayTabindex(K,Y){return this.__isDayFocused(K,Y)?"0":"-1"}}customElements.define(MonthCalendar.is,MonthCalendar);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class InfiniteScroller extends PolymerElement{static get template(){return html`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`;const K=this.querySelector("template");this._TemplateClass=templatize(K,this,{forwardHostProp(Y,J){Y!=="index"&&this._buffers.forEach(te=>{[...te.children].forEach(ie=>{ie._itemWrapper.instance[Y]=J})})}}),isFirefox&&(this.$.scroller.tabIndex=-1)}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_activated(K){K&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(K=>{[...K.children].forEach(Y=>{this._ensureStampedInstance(Y._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(K){const Y=K?1:0;this._buffers[Y].translateY=this._buffers[Y?0:1].translateY+this._bufferHeight*(Y?-1:1),this._buffers[Y].style.transform=`translate3d(0, ${this._buffers[Y].translateY}px, 0)`,this._buffers[Y].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const K=this.$.scroller.scrollTop;(K<this._bufferHeight||K>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const Y=this.itemHeight+this.bufferOffset,J=K>this._buffers[1].translateY+Y,te=K<this._buffers[0].translateY+Y;(J||te)&&(this._translateBuffer(te),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=Debouncer$1.debounce(this._debouncerScrollFinish,timeOut.after(200),()=>{const ie=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],ie)&&!this._isVisible(this._buffers[1],ie)&&(this.position=this.position)})}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(K){this._preventScrollEvent=!0,K>this._firstIndex&&K<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(K-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~K,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=K%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get itemHeight(){if(!this._itemHeightVal){const K=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),Y="background-position";this.$.fullHeight.style.setProperty(Y,K);const J=getComputedStyle(this.$.fullHeight).getPropertyValue(Y);this.$.fullHeight.style.removeProperty(Y),this._itemHeightVal=parseFloat(J)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(K=>{K.style.transform=`translate3d(0, ${K.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=Debouncer$1.debounce(this._debouncerUpdateClones,timeOut.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const K=this.getBoundingClientRect();this._buffers.forEach(Y=>{for(let J=0;J<this.bufferSize;J++){const te=document.createElement("div");te.style.height=`${this.itemHeight}px`,te.instance={};const ae=`vaadin-infinite-scroller-item-content-${InfiniteScroller._contentIndex=InfiniteScroller._contentIndex+1||0}`,re=document.createElement("slot");re.setAttribute("name",ae),re._itemWrapper=te,Y.appendChild(re),te.setAttribute("slot",ae),this.appendChild(te),setTimeout(()=>{this._isVisible(te,K)&&this._ensureStampedInstance(te)},1)}}),setTimeout(()=>{afterNextRender(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(K){if(K.firstElementChild)return;const Y=K.instance;K.instance=new this._TemplateClass({}),K.appendChild(K.instance.root),Object.keys(Y).forEach(J=>{K.instance.set(J,Y[J])})}_updateClones(K){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const Y=K?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((J,te)=>{if(!J.updated){const ie=this._firstIndex+this.bufferSize*te;[...J.children].forEach((ae,re)=>{const se=ae._itemWrapper;(!K||this._isVisible(se,Y))&&(se.instance.index=ie+re)}),J.updated=!0}})}_isVisible(K,Y){const J=K.getBoundingClientRect();return J.bottom>Y.top&&J.top<Y.bottom}}customElements.define(InfiniteScroller.is,InfiniteScroller);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class MediaQueryController{constructor(K,Y){this.query=K,this.callback=Y,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(K){typeof this.callback=="function"&&this.callback(K.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class DatePickerOverlayContent extends ControllerMixin(ThemableMixin(DirMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [hidden] {
          display: none !important;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        [part='months'],
        [part='years'] {
          height: 100%;
        }

        [part='months'] {
          --vaadin-infinite-scroller-item-height: 270px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #scrollers[desktop] [part='months'] {
          right: 50px;
          transform: none !important;
        }

        [part='years'] {
          --vaadin-infinite-scroller-item-height: 80px;
          width: 50px;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          /* Center the year scroller position. */
          --vaadin-infinite-scroller-buffer-offset: 50%;
        }

        #scrollers[desktop] [part='years'] {
          position: absolute;
          transform: none !important;
        }

        [part='years']::before {
          content: '';
          display: block;
          background: transparent;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #000;
        }

        :host(.animate) [part='months'],
        :host(.animate) [part='years'] {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers" desktop$="[[_desktopMode]]">
        <vaadin-infinite-scroller
          id="monthScroller"
          on-custom-scroll="_onMonthScroll"
          on-touchstart="_onMonthScrollTouchStart"
          buffer-size="3"
          active="[[initialPosition]]"
          part="months"
        >
          <template>
            <vaadin-month-calendar
              i18n="[[i18n]]"
              month="[[_dateAfterXMonths(index)]]"
              selected-date="{{selectedDate}}"
              focused-date="[[focusedDate]]"
              ignore-taps="[[_ignoreTaps]]"
              show-week-numbers="[[showWeekNumbers]]"
              min-date="[[minDate]]"
              max-date="[[maxDate]]"
              part="month"
              theme$="[[_theme]]"
              on-keydown="__onMonthCalendarKeyDown"
            >
            </vaadin-month-calendar>
          </template>
        </vaadin-infinite-scroller>
        <vaadin-infinite-scroller
          id="yearScroller"
          on-custom-scroll="_onYearScroll"
          on-touchstart="_onYearScrollTouchStart"
          buffer-size="12"
          active="[[initialPosition]]"
          part="years"
          aria-hidden="true"
        >
          <template>
            <div
              part="year-number"
              current$="[[_isCurrentYear(index)]]"
              selected$="[[_isSelectedYear(index, selectedDate)]]"
            >
              [[_yearAfterXYears(index)]]
            </div>
            <div part="year-separator" aria-hidden="true"></div>
          </template>
        </vaadin-infinite-scroller>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <vaadin-button
          id="todayButton"
          part="today-button"
          theme="tertiary"
          disabled="[[!_isTodayAllowed(minDate, maxDate)]]"
          on-keydown="__onTodayButtonKeyDown"
        >
          [[i18n.today]]
        </vaadin-button>
        <vaadin-button id="cancelButton" part="cancel-button" theme="tertiary" on-keydown="__onCancelButtonKeyDown">
          [[i18n.cancel]]
        </vaadin-button>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date,value:null},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String}}get __isRTL(){return this.getAttribute("dir")==="rtl"}get __useSubMonthScrolling(){return this.$.monthScroller.clientHeight<this.$.monthScroller.itemHeight+this.$.monthScroller.bufferOffset}get calendars(){return[...this.shadowRoot.querySelectorAll("vaadin-month-calendar")]}get focusableDateElement(){return this.calendars.map(K=>K.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),addListener(this.$.scrollers,"track",this._track.bind(this)),addListener(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),addListener(this.shadowRoot.querySelector('[part="today-button"]'),"tap",this._onTodayTap.bind(this)),addListener(this.shadowRoot.querySelector('[part="cancel-button"]'),"tap",this._cancel.bind(this)),addListener(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),addListener(this.shadowRoot.querySelector('[part="years"]'),"tap",this._onYearTap.bind(this)),addListener(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new MediaQueryController(this._desktopMediaQuery,K=>{this._desktopMode=K}))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),setTouchAction(this.$.scrollers,"pan-y")}focusCancel(){this.$.cancelButton.focus()}scrollToDate(K,Y){const J=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(K):0;this._scrollToPosition(this._differenceInMonths(K,this._originDate)+J,Y),this.$.monthScroller.forceUpdate()}_selectDate(K){this.selectedDate=K,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:K},bubbles:!0,composed:!0}))}_focusedDateChanged(K){this.revealDate(K)}_isCurrentYear(K){return K===0}_isSelectedYear(K,Y){if(Y)return Y.getFullYear()===this._originDate.getFullYear()+K}revealDate(K,Y=!0){if(!K)return;const J=this._differenceInMonths(K,this._originDate);if(this.__useSubMonthScrolling){const se=this._calculateWeekScrollOffset(K);this._scrollToPosition(J+se,Y);return}const te=this.$.monthScroller.position>J,ae=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-this.$.monthScroller.bufferOffset*2)/this.$.monthScroller.itemHeight,re=this.$.monthScroller.position+ae-1<J;te?this._scrollToPosition(J,Y):re&&this._scrollToPosition(J-ae+1,Y)}_calculateWeekScrollOffset(K){const Y=new Date(0,0);Y.setFullYear(K.getFullYear()),Y.setMonth(K.getMonth()),Y.setDate(1);let J=0;for(;Y.getDate()<K.getDate();)Y.setDate(Y.getDate()+1),Y.getDay()===this.i18n.firstDayOfWeek&&(J+=1);return J/6}_initialPositionChanged(K){this.scrollToDate(K)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=this.$.yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=Debouncer$1.debounce(this._debouncer,timeOut.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(K,Y,J){return K?Y(extractDateParts(K)):J}_onTodayTap(){const K=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(K,this._originDate))<.001?(this._selectDate(K),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(K){if(!this._ignoreTaps&&!this._notTapping){const J=(K.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+J*12,!0)}}_scrollToPosition(K,Y){if(this._targetPosition!==void 0){this._targetPosition=K;return}if(!Y){this.$.monthScroller.position=K,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=K;let J;this._revealPromise=new Promise(se=>{J=se});const te=(se,oe,ne,le)=>(se/=le/2,se<1?ne/2*se*se+oe:(se-=1,-ne/2*(se*(se-2)-1)+oe));let ie=0;const ae=this.$.monthScroller.position,re=se=>{ie=ie||se;const oe=se-ie;if(oe<this.scrollDuration){const ne=te(oe,ae,this._targetPosition-ae,this.scrollDuration);this.$.monthScroller.position=ne,window.requestAnimationFrame(re)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:ae}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0,J(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(re)}_limit(K,Y){return Math.min(Y.max,Math.max(Y.min,K))}_handleTrack(K){if(Math.abs(K.detail.dx)<10||Math.abs(K.detail.ddy)>10)return;Math.abs(K.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const Y=this._translateX+K.detail.ddx;this._translateX=this._limit(Y,{min:0,max:this._yearScrollerWidth})}_track(K){if(!this._desktopMode)switch(K.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(K);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(K){K?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(K){this._desktopMode||(this.$.monthScroller.style.transform=`translateX(${K-this._yearScrollerWidth}px)`,this.$.yearScroller.style.transform=`translateX(${K}px)`)}_yearAfterXYears(K){const Y=new Date(this._originDate);return Y.setFullYear(parseInt(K)+this._originDate.getFullYear()),Y.getFullYear()}_yearAfterXMonths(K){return this._dateAfterXMonths(K).getFullYear()}_dateAfterXMonths(K){const Y=new Date(this._originDate);return Y.setDate(1),Y.setMonth(parseInt(K)+this._originDate.getMonth()),Y}_differenceInMonths(K,Y){return(K.getFullYear()-Y.getFullYear())*12-Y.getMonth()+K.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(K){K.preventDefault()}__toggleDate(K){dateEquals(K,this.selectedDate)?(this._clear(),this.focusedDate=K):this._selectDate(K)}__onMonthCalendarKeyDown(K){let Y=!1;switch(K.key){case"ArrowDown":this._moveFocusByDays(7),Y=!0;break;case"ArrowUp":this._moveFocusByDays(-7),Y=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),Y=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),Y=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),Y=!0;break;case" ":this.__toggleDate(this.focusedDate),Y=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),Y=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),Y=!0;break;case"PageDown":this._moveFocusByMonths(K.shiftKey?12:1),Y=!0;break;case"PageUp":this._moveFocusByMonths(K.shiftKey?-12:-1),Y=!0;break;case"Tab":this._onTabKeyDown(K,"calendar");break}Y&&(K.preventDefault(),K.stopPropagation())}_onTabKeyDown(K,Y){switch(K.stopPropagation(),Y){case"calendar":K.shiftKey&&(K.preventDefault(),this.hasAttribute("fullscreen")?this.$.cancelButton.focus():this.__focusInput());break;case"today":K.shiftKey&&(K.preventDefault(),this.focusDateElement());break;case"cancel":K.shiftKey||(K.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(K){K.key==="Tab"&&this._onTabKeyDown(K,"today")}__onCancelButtonKeyDown(K){K.key==="Tab"&&this._onTabKeyDown(K,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const Y=this.focusableDateElement;Y&&dateEquals(Y.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,Y.focus())}}async focusDate(K,Y){const J=K||this.selectedDate||this.initialPosition||new Date;this.focusedDate=J,Y||(this._focusedMonthDate=J.getDate()),await this.focusDateElement(!1)}async focusDateElement(K=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(Y=>{setTimeout(Y)}),K&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(K){this.focusDate(getClosestDate(K,[this.minDate,this.maxDate]))}_moveFocusByDays(K){const Y=this.focusedDate,J=new Date(0,0);J.setFullYear(Y.getFullYear()),J.setMonth(Y.getMonth()),J.setDate(Y.getDate()+K),this._dateAllowed(J,this.minDate,this.maxDate)?this.focusDate(J):this._dateAllowed(Y,this.minDate,this.maxDate)?K>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(Y)}_moveFocusByMonths(K){const Y=this.focusedDate,J=new Date(0,0);J.setFullYear(Y.getFullYear()),J.setMonth(Y.getMonth()+K);const te=J.getMonth();J.setDate(this._focusedMonthDate||(this._focusedMonthDate=Y.getDate())),J.getMonth()!==te&&J.setDate(0),this._dateAllowed(J,this.minDate,this.maxDate)?this.focusDate(J,!0):this._dateAllowed(Y,this.minDate,this.maxDate)?K>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(Y)}_moveFocusInsideMonth(K,Y){const J=new Date(0,0);J.setFullYear(K.getFullYear()),Y==="minDate"?(J.setMonth(K.getMonth()),J.setDate(1)):(J.setMonth(K.getMonth()+1),J.setDate(0)),this._dateAllowed(J,this.minDate,this.maxDate)?this.focusDate(J):this._dateAllowed(K,this.minDate,this.maxDate)?this.focusDate(this[Y]):this._focusClosestDate(K)}_dateAllowed(K,Y,J){return(!Y||K>=Y)&&(!J||K<=J)}_isTodayAllowed(K,Y){const J=new Date,te=new Date(0,0);return te.setFullYear(J.getFullYear()),te.setMonth(J.getMonth()),te.setDate(J.getDate()),this._dateAllowed(te,K,Y)}}customElements.define(DatePickerOverlayContent.is,DatePickerOverlayContent);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class VirtualKeyboardController{constructor(K){this.host=K,K.addEventListener("opened-changed",()=>{K.opened||this.__setVirtualKeyboardEnabled(!1)}),K.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),K.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(K){this.host.inputElement&&(this.host.inputElement.inputMode=K?"":"none")}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const DatePickerMixin=ee=>class extends ControllerMixin(DelegateFocusMixin(InputConstraintsMixin(KeyboardMixin(ee)))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",today:"Today",cancel:"Cancel",referenceDate:"",formatDate(Y){const J=String(Y.year).replace(/\d+/,te=>"0000".substr(te.length)+te);return[Y.month+1,Y.day,J].join("/")},parseDate(Y){const J=Y.split("/"),te=new Date;let ie,ae=te.getMonth(),re=te.getFullYear();if(J.length===3){if(ae=parseInt(J[0])-1,ie=parseInt(J[1]),re=parseInt(J[2]),J[2].length<3&&re>=0){const se=this.referenceDate?parseDate(this.referenceDate):new Date;re=getAdjustedYear(se,re,ae,ie)}}else J.length===2?(ae=parseInt(J[0])-1,ie=parseInt(J[1])):J.length===1&&(ie=parseInt(J[0]));if(ie!==void 0)return{day:ie,month:ae,year:re}},formatTitle:(Y,J)=>`${Y} ${J}`})},min:{type:String},max:{type:String},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:isIOS},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return null}get _inputValue(){return this.inputElement?this.inputElement.value:void 0}set _inputValue(Y){this.inputElement&&(this.inputElement.value=Y)}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this)}_onFocus(Y){super._onFocus(Y),this._noInput&&Y.target.blur()}_onBlur(Y){super._onBlur(Y),this.opened||(this.autoOpenDisabled&&this._selectParsedOrFocusedDate(),this.validate(),this._inputValue===""&&this.value!==""&&(this.value=""))}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new MediaQueryController(this._fullscreenMediaQuery,Y=>{this._fullscreen=Y})),this.addController(new VirtualKeyboardController(this))}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(Y,J,te){super._propertiesChanged(Y,J,te),"value"in J&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",Y=>{this.opened=Y.detail.value}),this.$.overlay.addEventListener("vaadin-overlay-escape-press",()=>{this._focusedDate=this._selectedDate,this._close()}),this._overlayContent.addEventListener("close",()=>{this._close()}),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this._overlayContent.addEventListener("date-tap",Y=>{this.__userConfirmedDate=!0,this._selectDate(Y.detail.date),this._close()}),this._overlayContent.addEventListener("date-selected",Y=>{this.__userConfirmedDate=!0,this._selectDate(Y.detail.date)}),this._overlayContent.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}checkValidity(){const Y=!this._inputValue||!!this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),J=!this._selectedDate||dateAllowed(this._selectedDate,this._minDate,this._maxDate);let te=!0;return this.inputElement&&(this.inputElement.checkValidity?te=this.inputElement.checkValidity():this.inputElement.validate&&(te=this.inputElement.validate())),Y&&J&&te}_shouldSetFocus(Y){return!this._shouldKeepFocusRing}_shouldRemoveFocus(Y){return!this.opened}_setFocused(Y){super._setFocused(Y),this._shouldKeepFocusRing=Y&&this._keyboardActive}_selectDate(Y){const J=this._formatISO(Y);this.value!==J&&(this.__dispatchChange=!0),this._selectedDate=Y}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(Y,J,te,ie,ae,re){return!Y||J&&(!re||ae)||te&&ae||!ie.parseDate}_formatISO(Y){if(!(Y instanceof Date))return"";const J=(ne,le="00")=>(le+ne).substr((le+ne).length-le.length);let te="",ie="0000",ae=Y.getFullYear();ae<0?(ae=-ae,te="-",ie="000000"):Y.getFullYear()>=1e4&&(te="+",ie="000000");const re=te+J(ae,ie),se=J(Y.getMonth()+1),oe=J(Y.getDate());return[re,se,oe].join("-")}_inputElementChanged(Y){super._inputElementChanged(Y),Y&&(Y.autocomplete="off",Y.setAttribute("role","combobox"),Y.setAttribute("aria-haspopup","dialog"),Y.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(Y){Y&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=Y),this.inputElement&&this.inputElement.setAttribute("aria-expanded",Y)}_selectedDateChanged(Y,J){if(Y===void 0||J===void 0)return;const te=this._formatISO(Y);this.__keepInputValue||this._applyInputValue(Y),te!==this.value&&(this.validate(),this.value=te),this._ignoreFocusedDateChange=!0,this._focusedDate=Y,this._ignoreFocusedDateChange=!1}_focusedDateChanged(Y,J){Y===void 0||J===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(Y)}__getOverlayTheme(Y,J){if(J)return Y}_valueChanged(Y,J){const te=parseDate(Y);if(Y&&!te){this.value=J;return}Y?dateEquals(this._selectedDate,te)||(this._selectedDate=te,J!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}_onOverlayOpened(){const Y=parseDate(this.initialPosition),J=this._selectedDate||this._overlayContent.initialPosition||Y||new Date;Y||dateAllowed(J,this._minDate,this._maxDate)?this._overlayContent.initialPosition=J:this._overlayContent.initialPosition=getClosestDate(J,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&(this.focusElement.blur(),this._overlayContent.focusDateElement())}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const Y=this._inputValue||"",J=this._getParsedDate(Y);this._isValidDate(J)?this._selectDate(J):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}_onScroll(Y){(Y.target===window||!this._overlayContent.contains(Y.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(Y){this._inputValue=Y?this._getFormattedDate(this.i18n.formatDate,Y):""}_getFormattedDate(Y,J){return Y(extractDateParts(J))}_setSelectionRange(Y,J){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(Y,J)}_isValidDate(Y){return Y&&!isNaN(Y.getTime())}_onChange(Y){this._inputValue===""&&(this.__dispatchChange=!0),Y.stopPropagation()}_onClick(Y){this._isClearButton(Y)||this._onHostClick(Y)}_onHostClick(Y){(!this.autoOpenDisabled||this._noInput)&&(Y.preventDefault(),this.open())}_onClearButtonClick(Y){Y.preventDefault(),this.value="",this._inputValue="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(Y){switch(super._onKeyDown(Y),this._noInput&&[9].indexOf(Y.keyCode)===-1&&Y.preventDefault(),Y.key){case"ArrowDown":case"ArrowUp":Y.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(Y.preventDefault(),Y.stopPropagation(),this._setSelectionRange(0,0),Y.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(Y){const J=this.value;this.opened?this.close():this._selectParsedOrFocusedDate(),J===this.value&&this.validate()}_onEscape(Y){if(!this.opened){if(this.clearButtonVisible&&this.value){Y.stopPropagation(),this._onClearButtonClick(Y);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_getParsedDate(Y=this._inputValue){const J=this.i18n.parseDate&&this.i18n.parseDate(Y);return J&&parseDate(`${J.year}-${J.month+1}-${J.day}`)}_isClearButton(Y){return Y.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this._inputValue){const Y=this._getParsedDate();this._isValidDate(Y)&&(this._ignoreFocusedDateChange=!0,dateEquals(Y,this._focusedDate)||(this._focusedDate=Y),this._ignoreFocusedDateChange=!1)}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}__computeMinOrMaxDate(Y){return parseDate(Y)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-date-picker",[inputFieldShared,datePickerStyles],{moduleId:"vaadin-date-picker-styles"});class DatePicker extends DatePickerMixin(InputControlMixin(ThemableMixin(ElementMixin(PolymerElement)))){static get is(){return"vaadin-date-picker"}static get template(){return html`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        disable-upgrade
      >
        <template>
          <vaadin-date-picker-overlay-content
            id="overlay-content"
            i18n="[[i18n]]"
            fullscreen$="[[_fullscreen]]"
            label="[[label]]"
            selected-date="[[_selectedDate]]"
            focused-date="{{_focusedDate}}"
            show-week-numbers="[[showWeekNumbers]]"
            min-date="[[_minDate]]"
            max-date="[[_maxDate]]"
            part="overlay-content"
            theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
          ></vaadin-date-picker-overlay-content>
        </template>
      </vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new InputController(this,Y=>{this._setInputElement(Y),this._setFocusElement(Y),this.stateTarget=Y,this.ariaTarget=Y})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(Y=>!Y.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",Y=>Y.preventDefault())}_initOverlay(){super._initOverlay(),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(K){K.detail.sourceEvent&&K.detail.sourceEvent.composedPath().includes(this)&&K.preventDefault()}_toggle(K){K.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_openedChanged(K){super._openedChanged(K),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(DatePicker.is,DatePicker);var __defProp$d=Object.defineProperty,__getOwnPropDesc$d=Object.getOwnPropertyDescriptor,__decorateClass$d=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$d(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$d(K,Y,te),te};let FieldDate=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.enabled=!0}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-date-picker
                    label="${this.label}"
                    @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                    ?disabled=${!this.enabled}
                    ?required=${this.required}
            ></vaadin-date-picker>
            `}};__decorateClass$d([e()],FieldDate.prototype,"required",2);__decorateClass$d([e()],FieldDate.prototype,"label",2);__decorateClass$d([e()],FieldDate.prototype,"name",2);__decorateClass$d([e()],FieldDate.prototype,"onChange",2);__decorateClass$d([e()],FieldDate.prototype,"value",2);__decorateClass$d([e()],FieldDate.prototype,"enabled",2);__decorateClass$d([e()],FieldDate.prototype,"field",2);FieldDate=__decorateClass$d([e$1("field-date")],FieldDate);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const loader=i$5`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,comboBoxOverlay=i$5`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;registerStyles("vaadin-combo-box-overlay",[overlay,menuOverlayCore,comboBoxOverlay,loader],{moduleId:"lumo-combo-box-overlay"});const item=i$5`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon),
  :host ::slotted(iron-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;registerStyles("vaadin-item",item,{moduleId:"lumo-item"});const comboBoxItem=i$5`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;registerStyles("vaadin-combo-box-item",[item,comboBoxItem],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const timePicker=i$5`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;registerStyles("vaadin-time-picker",[inputFieldShared$1,timePicker],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ComboBoxItem extends ThemableMixin(DirMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const K=this._comboBox.getAttribute("dir");K&&this.setAttribute("dir",K)}requestContentUpdate(){if(!this.renderer)return;const K={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,K)}__rendererOrItemChanged(K,Y,J){J===void 0||Y===void 0||(this._oldRenderer!==K&&(this.innerHTML="",delete this._$litPart$),K&&(this._oldRenderer=K,this.requestContentUpdate()))}__updateLabel(K,Y){Y||(this.textContent=K)}}customElements.define(ComboBoxItem.is,ComboBoxItem);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TimePickerItem extends ComboBoxItem{static get is(){return"vaadin-time-picker-item"}}customElements.define(TimePickerItem.is,TimePickerItem);/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&IOS[1]>=8,DEFAULT_PHYSICAL_COUNT=3,ironList={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const ee=this._virtualCount;return Math.max(0,ee-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(ee){ee=this._clamp(ee,0,this._maxVirtualStart),this._virtualStartVal=ee},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(ee){ee%=this._physicalCount,ee<0&&(ee=this._physicalCount+ee),this._physicalStartVal=ee},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(ee){this._physicalCountVal=ee},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let ee=this._firstVisibleIndexVal;if(ee==null){let K=this._physicalTop+this._scrollOffset;ee=this._iterateItems((Y,J)=>{if(K+=this._getPhysicalSizeIncrement(Y),K>this._scrollPosition)return J})||0,this._firstVisibleIndexVal=ee}return ee},get lastVisibleIndex(){let ee=this._lastVisibleIndexVal;if(ee==null){let K=this._physicalTop+this._scrollOffset;this._iterateItems((Y,J)=>{K<this._scrollBottom&&(ee=J),K+=this._getPhysicalSizeIncrement(Y)}),this._lastVisibleIndexVal=ee}return ee},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const ee=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let K=ee-this._scrollPosition;const Y=K>=0;if(this._scrollPosition=ee,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(K)>this._physicalSize&&this._physicalSize>0){K-=this._scrollOffset;const J=Math.round(K/this._physicalAverage);this._virtualStart+=J,this._physicalStart+=J,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const J=this._getReusables(Y);Y?(this._physicalTop=J.physicalTop,this._virtualStart+=J.indexes.length,this._physicalStart+=J.indexes.length):(this._virtualStart-=J.indexes.length,this._physicalStart-=J.indexes.length),this._update(J.indexes,Y?null:J.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),microTask)}},_getReusables(ee){let K,Y,J;const te=[],ie=this._hiddenContentSize*this._ratio,ae=this._virtualStart,re=this._virtualEnd,se=this._physicalCount;let oe=this._physicalTop+this._scrollOffset;const ne=this._physicalBottom+this._scrollOffset,le=this._scrollPosition,he=this._scrollBottom;for(ee?(K=this._physicalStart,Y=le-oe):(K=this._physicalEnd,Y=ne-he);J=this._getPhysicalSizeIncrement(K),Y-=J,!(te.length>=se||Y<=ie);)if(ee){if(re+te.length+1>=this._virtualCount||oe+J>=le-this._scrollOffset)break;te.push(K),oe+=J,K=(K+1)%se}else{if(ae-te.length<=0||oe+this._physicalSize-J<=he)break;te.push(K),oe-=J,K=K===0?se-1:K-1}return{indexes:te,physicalTop:oe-this._scrollOffset}},_update(ee,K){if(!(ee&&ee.length===0||this._physicalCount===0)){if(this._assignModels(ee),this._updateMetrics(ee),K)for(;K.length;){const Y=K.pop();this._physicalTop-=this._getPhysicalSizeIncrement(Y)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(ee){const Y=this._clamp(this._physicalCount+ee,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart)-this._physicalCount;let J=Math.round(this._physicalCount*.5);if(!(Y<0)){if(Y>0){const te=window.performance.now();[].push.apply(this._physicalItems,this._createPool(Y));for(let ie=0;ie<Y;ie++)this._physicalSizes.push(0);this._physicalCount+=Y,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=Y),this._update(),this._templateCost=(window.performance.now()-te)/Y,J=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||J===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,J)),idlePeriod):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,J),microTask))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const ee=this._getReusables(!0);this._physicalTop=ee.physicalTop,this._virtualStart+=ee.indexes.length,this._physicalStart+=ee.indexes.length,this._update(ee.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT))},_itemsChanged(ee){ee.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,animationFrame))},_iterateItems(ee,K){let Y,J,te,ie;if(arguments.length===2&&K){for(ie=0;ie<K.length;ie++)if(Y=K[ie],J=this._computeVidx(Y),(te=ee.call(this,Y,J))!=null)return te}else{for(Y=this._physicalStart,J=this._virtualStart;Y<this._physicalCount;Y++,J++)if((te=ee.call(this,Y,J))!=null)return te;for(Y=0;Y<this._physicalStart;Y++,J++)if((te=ee.call(this,Y,J))!=null)return te}},_computeVidx(ee){return ee>=this._physicalStart?this._virtualStart+(ee-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+ee},_positionItems(){this._adjustScrollPosition();let ee=this._physicalTop;this._iterateItems(K=>{this.translate3d(0,`${ee}px`,0,this._physicalItems[K]),ee+=this._physicalSizes[K]})},_getPhysicalSizeIncrement(ee){return this._physicalSizes[ee]},_adjustScrollPosition(){const ee=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(ee!==0){this._physicalTop-=ee;const K=this._scrollPosition;!IOS_TOUCH_SCROLLING&&K>0&&this._resetScrollPosition(K-ee)}},_resetScrollPosition(ee){this.scrollTarget&&ee>=0&&(this._scrollTop=ee,this._scrollPosition=this._scrollTop)},_updateScrollerSize(ee){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,ee=ee||this._scrollHeight===0,ee=ee||this._scrollPosition>=this._estScrollHeight-this._physicalSize,(ee||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(ee){if(typeof ee!="number"||ee<0||ee>this.items.length-1||(flush$1(),this._physicalCount===0))return;ee=this._clamp(ee,0,this._virtualCount-1),(!this._isIndexRendered(ee)||ee>=this._maxVirtualStart)&&(this._virtualStart=ee-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let K=this._physicalStart,Y=this._virtualStart,J=0;const te=this._hiddenContentSize;for(;Y<ee&&J<=te;)J+=this._getPhysicalSizeIncrement(K),K=(K+1)%this._physicalCount,Y+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+J),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},animationFrame)},_isIndexRendered(ee){return ee>=this._virtualStart&&ee<=this._virtualEnd},_getPhysicalIndex(ee){return(this._physicalStart+(ee-this._virtualStart))%this._physicalCount},_clamp(ee,K,Y){return Math.min(Y,Math.max(K,ee))},_debounce(ee,K,Y){this._debouncers=this._debouncers||{},this._debouncers[ee]=Debouncer$1.debounce(this._debouncers[ee],Y,K.bind(this)),enqueueDebouncer$1(this._debouncers[ee])}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const MAX_VIRTUAL_COUNT=1e5,OFFSET_ADJUST_MIN_THRESHOLD=1e3;class IronListAdapter{constructor({createElements:K,updateElement:Y,scrollTarget:J,scrollContainer:te,elementsContainer:ie,reorderElements:ae}){this.isAttached=!0,this._vidxOffset=0,this.createElements=K,this.updateElement=Y,this.scrollTarget=J,this.scrollContainer=te,this.elementsContainer=ie||te,this.reorderElements=ae,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",re=>this.__onWheel(re)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(K){if(typeof K!="number"||isNaN(K)||this.size===0||!this.scrollTarget.offsetHeight)return;K=this._clamp(K,0,this.size-1);const Y=this.__getVisibleElements().length;let J=Math.floor(K/this.size*this._virtualCount);this._virtualCount-J<Y?(J=this._virtualCount-(this.size-K),this._vidxOffset=this.size-this._virtualCount):J<Y?K<OFFSET_ADJUST_MIN_THRESHOLD?(J=K,this._vidxOffset=0):(J=OFFSET_ADJUST_MIN_THRESHOLD,this._vidxOffset=K-J):this._vidxOffset=K-J,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(J),this.adjustedFirstVisibleIndex!==K&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(K)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),flush$1(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(K=0,Y=this.size-1){this.__getVisibleElements().forEach(J=>{J.__virtualIndex>=K&&J.__virtualIndex<=Y&&this.__updateElement(J,J.__virtualIndex,!0)})}_updateMetrics(K){flush$1();let Y=0,J=0;const te=this._physicalAverageCount,ie=this._physicalAverage;this._iterateItems((ae,re)=>{J+=this._physicalSizes[ae],this._physicalSizes[ae]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[ae])),Y+=this._physicalSizes[ae],this._physicalAverageCount+=this._physicalSizes[ae]?1:0},K),this._physicalSize=this._physicalSize+Y-J,this._physicalAverageCount!==te&&(this._physicalAverage=Math.round((ie*te+Y)/this._physicalAverageCount))}__getBorderBoxHeight(K){const Y=getComputedStyle(K),J=parseFloat(Y.height)||0;if(Y.boxSizing==="border-box")return J;const te=parseFloat(Y.paddingBottom)||0,ie=parseFloat(Y.paddingTop)||0,ae=parseFloat(Y.borderBottomWidth)||0,re=parseFloat(Y.borderTopWidth)||0;return J+te+ie+ae+re}__updateElement(K,Y,J){K.style.paddingTop&&(K.style.paddingTop=""),!this.__preventElementUpdates&&(K.__lastUpdatedIndex!==Y||J)&&(this.updateElement(K,Y),K.__lastUpdatedIndex=Y);const te=K.offsetHeight;if(te===0)K.style.paddingTop=`${this.__placeholderHeight}px`,requestAnimationFrame(()=>this._resizeHandler());else{this.__elementHeightQueue.push(te),this.__elementHeightQueue.shift();const ie=this.__elementHeightQueue.filter(ae=>ae!==void 0);this.__placeholderHeight=Math.round(ie.reduce((ae,re)=>ae+re,0)/ie.length)}}__getIndexScrollOffset(K){const Y=this.__getVisibleElements().find(J=>J.__virtualIndex===K);return Y?this.scrollTarget.getBoundingClientRect().top-Y.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(K){if(K===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let Y,J;if(K>0&&(Y=this.adjustedFirstVisibleIndex,J=this.__getIndexScrollOffset(Y)),this.__size=K,this._itemsChanged({path:"items"}),flush$1(),K>0){Y=Math.min(Y,K-1),this.scrollToIndex(Y);const te=this.__getIndexScrollOffset(Y);J!==void 0&&te!==void 0&&(this._scrollTop+=J-te)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this.__preventElementUpdates=!1,this._resizeHandler(),flush$1()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(K){this.scrollTarget.scrollTop=K}get items(){return{length:Math.min(this.size,MAX_VIRTUAL_COUNT)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const K=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(K["padding-top"],10),this._isRTL=Boolean(K.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(K){const Y=this.createElements(K),J=document.createDocumentFragment();return Y.forEach(te=>{te.style.position="absolute",J.appendChild(te),this.__resizeObserver.observe(te)}),this.elementsContainer.appendChild(J),Y}_assignModels(K){this._iterateItems((Y,J)=>{const te=this._physicalItems[Y];te.hidden=J>=this.size,te.hidden?delete te.__lastUpdatedIndex:(te.__virtualIndex=J+(this._vidxOffset||0),this.__updateElement(te,te.__virtualIndex))},K)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(K,Y,J,te){te.style.transform=`translateY(${Y})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const K=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const Y=K>=0,J=this._getReusables(!Y);J.indexes.length&&(this._physicalTop=J.physicalTop,Y?(this._virtualStart-=J.indexes.length,this._physicalStart-=J.indexes.length):(this._virtualStart+=J.indexes.length,this._physicalStart+=J.indexes.length),this._resizeHandler())}K&&(this.__fixInvalidItemPositioningDebouncer=Debouncer$1.debounce(this.__fixInvalidItemPositioningDebouncer,timeOut.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=Debouncer$1.debounce(this.__scrollReorderDebouncer,timeOut.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(K)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const K=this._physicalTop>this._scrollTop,Y=this._physicalBottom<this._scrollBottom,J=this.adjustedFirstVisibleIndex===0,te=this.adjustedLastVisibleIndex===this.size-1;if(K&&!J||Y&&!te){const ie=Y,ae=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(ie?-1:1),this._scrollHandler(),this._ratio=ae}}__onWheel(K){if(K.ctrlKey||this._hasScrolledAncestor(K.target,K.deltaX,K.deltaY))return;let Y=K.deltaY;if(K.deltaMode===WheelEvent.DOM_DELTA_LINE?Y*=this._scrollLineHeight:K.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(Y*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame){this._deltaYAcc+=Y,K.preventDefault();return}Y+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=Debouncer$1.debounce(this.__debouncerWheelAnimationFrame,animationFrame,()=>{this._wheelAnimationFrame=!1});const J=Math.abs(K.deltaX)+Math.abs(Y);this._canScroll(this.scrollTarget,K.deltaX,Y)?(K.preventDefault(),this.scrollTarget.scrollTop+=Y,this.scrollTarget.scrollLeft+=K.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Debouncer$1.debounce(this._debouncerIgnoreNewWheel,timeOut.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&J<=this._previousMomentum||this._ignoreNewWheel?K.preventDefault():J>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=J}_hasScrolledAncestor(K,Y,J){if(K===this.scrollTarget||K===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(K,Y,J)&&["auto","scroll"].indexOf(getComputedStyle(K).overflow)!==-1)return!0;if(K!==this&&K.parentElement)return this._hasScrolledAncestor(K.parentElement,Y,J)}_canScroll(K,Y,J){return J>0&&K.scrollTop<K.scrollHeight-K.offsetHeight||J<0&&K.scrollTop>0||Y>0&&K.scrollLeft<K.scrollWidth-K.offsetWidth||Y<0&&K.scrollLeft>0}_getScrollLineHeight(){const K=document.createElement("div");K.style.fontSize="initial",K.style.display="none",document.body.appendChild(K);const Y=window.getComputedStyle(K).fontSize;return document.body.removeChild(K),Y?window.parseInt(Y):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(K=>!K.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const K=this._virtualStart+(this._vidxOffset||0),Y=this.__getVisibleElements(),te=Y.find(re=>re.contains(this.elementsContainer.getRootNode().activeElement)||re.contains(this.scrollTarget.getRootNode().activeElement))||Y[0];if(!te)return;const ie=te.__virtualIndex-K,ae=Y.indexOf(te)-ie;if(ae>0)for(let re=0;re<ae;re++)this.elementsContainer.appendChild(Y[re]);else if(ae<0)for(let re=Y.length+ae;re<Y.length;re++)this.elementsContainer.insertBefore(Y[re],Y[0]);if(isSafari){const{transform:re}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=re})}}_adjustVirtualIndexOffset(K){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(K)>1e4){const Y=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),J=Y*this.size;this._vidxOffset=Math.round(J-Y*this._virtualCount)}else{const Y=this._vidxOffset,J=OFFSET_ADJUST_MIN_THRESHOLD,te=100;this._scrollTop===0?(this._vidxOffset=0,Y!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<J&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,te),super.scrollToIndex(this.firstVisibleIndex+(Y-this._vidxOffset)));const ie=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=ie,Y!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-J&&this._vidxOffset<ie&&(this._vidxOffset+=Math.min(ie-this._vidxOffset,te),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-Y)))}}}Object.setPrototypeOf(IronListAdapter.prototype,ironList);class Virtualizer{constructor(K){this.__adapter=new IronListAdapter(K)}get size(){return this.__adapter.size}set size(K){this.__adapter.size=K}scrollToIndex(K){this.__adapter.scrollToIndex(K)}update(K=0,Y=this.size-1){this.__adapter.update(K,Y)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ComboBoxPlaceholder=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ComboBoxScroller extends PolymerElement{static get is(){return"vaadin-combo-box-scroller"}static get template(){return html`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(K){K&&this.requestContentUpdate()}ready(){super.ready(),this.id=`${this.localName}-${generateUniqueId()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",K=>K.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new Virtualizer({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(K){if(!(this.opened&&K>=0))return;const Y=this._visibleItemsCount();let J=K;K>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(K),J=K-Y+1):K>this.__virtualizer.firstVisibleIndex&&(J=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,J));const te=[...this.children].find(se=>!se.hidden&&se.index===this.__virtualizer.lastVisibleIndex);if(!te||K!==te.index)return;const ie=te.getBoundingClientRect(),ae=this.getBoundingClientRect(),re=ie.bottom-ae.bottom+this._viewportTotalPaddingBottom;re>0&&(this.scrollTop+=re)}__getAriaRole(K){return K!==void 0?"option":!1}__isItemFocused(K,Y){return!this.loading&&K===Y}_isItemSelected(K,Y,J){return K instanceof ComboBoxPlaceholder?!1:J&&K!==void 0&&Y!==void 0?this.get(J,K)===this.get(J,Y):K===Y}__itemsChanged(K){this.__virtualizer&&K&&(this.__virtualizer.size=K.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(K,Y){K!==Y&&this.requestContentUpdate(),K>=0&&!this.loading&&this.scrollIntoView(K)}__rendererChanged(K,Y){(K||Y)&&this.requestContentUpdate()}__createElements(K){return[...Array(K)].map(()=>{const Y=document.createElement(`${this.__hostTagName}-item`);return Y.addEventListener("click",this.__boundOnItemClick),Y.tabIndex="-1",Y.style.width="100%",Y})}__updateElement(K,Y){const J=this.items[Y],te=this.focusedIndex,ie=this._isItemSelected(J,this.selectedItem,this.itemIdPath);K.setProperties({item:J,index:Y,label:this.getItemLabel(J),selected:ie,renderer:this.renderer,focused:this.__isItemFocused(te,Y)}),K.id=`${this.__hostTagName}-item-${Y}`,K.setAttribute("role",this.__getAriaRole(Y)),K.setAttribute("aria-selected",ie.toString()),K.setAttribute("aria-posinset",Y+1),K.setAttribute("aria-setsize",this.items.length),this.theme?K.setAttribute("theme",this.theme):K.removeAttribute("theme"),J instanceof ComboBoxPlaceholder&&this.__requestItemByIndex(Y)}__onItemClick(K){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:K.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",K=>{const Y=this.scrollTop===0,J=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(Y&&K.deltaY<0||J&&K.deltaY>0)&&K.preventDefault()})}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const K=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[K.paddingBottom,K.borderBottomWidth].map(Y=>parseInt(Y,10)).reduce((Y,J)=>Y+J)}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(K){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:K,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(ComboBoxScroller.is,ComboBoxScroller);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TimePickerScroller extends ComboBoxScroller{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(TimePickerScroller.is,TimePickerScroller);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-combo-box-overlay",i$5`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});let memoizedTemplate;class ComboBoxOverlay extends PositionMixin(Overlay){static get is(){return"vaadin-combo-box-overlay"}static get template(){return memoizedTemplate||(memoizedTemplate=super.template.cloneNode(!0),memoizedTemplate.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),memoizedTemplate}static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const K=this._comboBox,Y=K&&K.getAttribute("dir");Y&&this.setAttribute("dir",Y)}ready(){super.ready();const K=document.createElement("div");K.setAttribute("part","loader");const Y=this.shadowRoot.querySelector('[part~="content"]');Y.parentNode.insertBefore(K,Y),this.requiredVerticalSpace=200}_outsideClickListener(K){const Y=K.composedPath();!Y.includes(this.positionTarget)&&!Y.includes(this)&&this.close()}_setOverlayWidth(K,Y){if(K&&Y){const J=this.localName;this.style.setProperty(`--_${J}-default-width`,`${K.clientWidth}px`);const te=getComputedStyle(this._comboBox).getPropertyValue(`--${J}-width`);te===""?this.style.removeProperty(`--${J}-width`):this.style.setProperty(`--${J}-width`,te),this._updatePosition()}}}customElements.define(ComboBoxOverlay.is,ComboBoxOverlay);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-time-picker-overlay",i$5`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class TimePickerOverlay extends ComboBoxOverlay{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(TimePickerOverlay.is,TimePickerOverlay);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function processTemplates(ee){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(ee);return}ee.querySelector("template")&&console.warn(`WARNING: <template> inside <${ee.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function isValidValue(ee){return ee!=null}function findItemIndex(ee,K){return ee.findIndex(Y=>Y instanceof ComboBoxPlaceholder?!1:K(Y))}const ComboBoxMixin=ee=>class extends ControllerMixin(KeyboardMixin(InputMixin(DisabledMixin(ee)))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(Y){this.inputElement&&(this.inputElement[this._propertyForValue]=Y)}get _nativeInput(){return this.inputElement}_inputElementChanged(Y){super._inputElementChanged(Y);const J=this._nativeInput;J&&(J.autocomplete="off",J.autocapitalize="off",J.setAttribute("role","combobox"),J.setAttribute("aria-autocomplete","list"),J.setAttribute("aria-expanded",!!this.opened),J.setAttribute("spellcheck","false"),J.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const Y=()=>{requestAnimationFrame(()=>{this.$.overlay.bringToFront()})};this.addEventListener("mousedown",Y),this.addEventListener("touchstart",Y),processTemplates(this),this.addController(new VirtualKeyboardController(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(Y=>{Y.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(Y,J,te){super._propertiesChanged(Y,J,te),J.filter!==void 0&&this._filterChanged(J.filter)}_initOverlay(){const Y=this.$.overlay;Y._comboBox=this,Y.addEventListener("touchend",this._boundOnOverlayTouchAction),Y.addEventListener("touchmove",this._boundOnOverlayTouchAction),Y.addEventListener("mousedown",J=>J.preventDefault()),Y.addEventListener("opened-changed",J=>{this._overlayOpened=J.detail.value})}_initScroller(Y){const J=`${this._tagNamePrefix}-scroller`,te=this.$.overlay;te.renderer=ae=>{ae.firstChild||ae.appendChild(document.createElement(J))},te.requestContentUpdate();const ie=te.querySelector(J);ie.comboBox=Y||this,ie.getItemLabel=this._getItemLabel.bind(this),ie.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=ie}_updateScroller(Y,J,te,ie,ae,re,se,oe,ne){Y&&(te&&(Y.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),Y.setProperties({items:te?J:[],opened:te,loading:ie,selectedItem:ae,itemIdPath:re,focusedIndex:se,renderer:oe,theme:ne}))}_openedOrItemsChanged(Y,J,te){this._overlayOpened=!!(Y&&(te||J&&J.length))}_overlayOpenedChanged(Y,J){Y?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):J&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(Y,J){J!==void 0&&this._updateActiveDescendant(Y)}_isInputFocused(){return this.inputElement&&isElementFocused(this.inputElement)}_updateActiveDescendant(Y){const J=this._nativeInput;if(!J)return;const te=this._getItemElements().find(ie=>ie.index===Y);te?J.setAttribute("aria-activedescendant",te.id):J.removeAttribute("aria-activedescendant")}_openedChanged(Y,J){if(J===void 0)return;Y?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!isTouch&&this.focus(),this.$.overlay.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const te=this._nativeInput;te&&(te.setAttribute("aria-expanded",!!Y),Y?te.setAttribute("aria-controls",this._scroller.id):te.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(Y){return Y.composedPath()[0]===this.clearElement}_handleClearButtonClick(Y){Y.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(Y){Y.preventDefault(),this.opened?this.close():this.open()}_onHostClick(Y){this.autoOpenDisabled||(Y.preventDefault(),this.open())}_onClick(Y){const J=Y.composedPath();this._isClearButton(Y)?this._handleClearButtonClick(Y):J.indexOf(this._toggleElement)>-1?this._onToggleButtonClick(Y):this._onHostClick(Y)}_onKeyDown(Y){super._onKeyDown(Y),Y.key==="Tab"?this.$.overlay.restoreFocusOnClose=!1:Y.key==="ArrowDown"?(this._onArrowDown(),Y.preventDefault()):Y.key==="ArrowUp"&&(this._onArrowUp(),Y.preventDefault())}_getItemLabel(Y){let J=Y&&this.itemLabelPath?this.get(this.itemLabelPath,Y):void 0;return J==null&&(J=Y?Y.toString():""),J}_getItemValue(Y){let J=Y&&this.itemValuePath?this.get(this.itemValuePath,Y):void 0;return J===void 0&&(J=Y?Y.toString():""),J}_onArrowDown(){if(this.opened){const Y=this.filteredItems;Y&&(this._focusedIndex=Math.min(Y.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const Y=this.filteredItems;Y&&(this._focusedIndex=Y.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const Y=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(Y),this._markAllSelectionRange()}}_setSelectionRange(Y,J){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(Y,J)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const Y=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(Y,Y)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(Y){const J=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;if(!this.allowCustomValue&&J){Y.preventDefault(),Y.stopPropagation();return}this.opened&&(Y.preventDefault(),Y.stopPropagation()),this._closeOrCommit()}_onEscape(Y){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(Y.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(Y.stopPropagation(),this._clear()):this.opened?(Y.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(Y.stopPropagation(),this._clear())}_toggleElementChanged(Y){Y&&(Y.addEventListener("mousedown",J=>J.preventDefault()),Y.addEventListener("click",()=>{isTouch&&!this._isInputFocused()&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this._scrollIntoView(this._focusedIndex),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const Y=this.filteredItems[this._focusedIndex];this.selectedItem!==Y&&(this.selectedItem=Y),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const Y=[...this.filteredItems||[],this.selectedItem],J=Y[this.__getItemIndexByLabel(Y,this._inputElementValue)];if(this.allowCustomValue&&!J){const te=this._inputElementValue;this._lastCustomValue=te;const ie=new CustomEvent("custom-value-set",{detail:te,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(ie),ie.defaultPrevented||(this.value=te)}else!this.allowCustomValue&&!this.opened&&J?this.value=this._getItemValue(J):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}get _propertyForValue(){return"value"}_onInput(Y){const J=this._inputElementValue,te={};this.filter===J?this._filterChanged(this.filter):te.filter=J,!this.opened&&!this._isClearButton(Y)&&!this.autoOpenDisabled&&(te.opened=!0),this.setProperties(te)}_onChange(Y){Y.stopPropagation()}_itemLabelPathChanged(Y){typeof Y!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(Y){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,Y):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(Y){if(Y==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const J=this._getItemValue(Y);if(this.value!==J&&(this.value=J,this.value!==J))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(Y)}this.filteredItems&&(this._focusedIndex=this.filteredItems.indexOf(Y))}_valueChanged(Y,J){Y===""&&J===void 0||(isValidValue(Y)?(this._getItemValue(this.selectedItem)!==Y&&this._selectItemForValue(Y),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=Y),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(Y,J){this._ensureItemsOrDataProvider(()=>{this.items=J}),Y?this.filteredItems=Y.slice(0):J&&(this.filteredItems=null)}_filteredItemsChanged(Y,J){const te=J?J[this._focusedIndex]:null,ie=this.__getItemIndexByValue(Y,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&ie>=0&&(this.selectedItem=Y[ie]);const ae=this.__getItemIndexByValue(Y,this._getItemValue(te));ae>-1?this._focusedIndex=ae:this.__setInitialFocusedIndex()}__setInitialFocusedIndex(){const Y=this._inputElementValue;Y===void 0||Y===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this._getItemLabel(this.selectedItem)):this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(Y,J){return Y&&Y.filter(ie=>(J=J?J.toString().toLowerCase():"",this._getItemLabel(ie).toString().toLowerCase().indexOf(J)>-1))}_selectItemForValue(Y){const J=this.__getItemIndexByValue(this.filteredItems,Y),te=this.selectedItem;J>=0?this.selectedItem=this.filteredItems[J]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&te===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(Y){this._scroller&&this._scroller.scrollIntoView(Y)}__getItemIndexByValue(Y,J){return!Y||!isValidValue(J)?-1:findItemIndex(Y,te=>this._getItemValue(te)===J)}__getItemIndexByLabel(Y,J){return!Y||!J?-1:findItemIndex(Y,te=>this._getItemLabel(te).toString().toLowerCase()===J.toString().toLowerCase())}_overlaySelectedItemChanged(Y){Y.stopPropagation(),!(Y.detail.item instanceof ComboBoxPlaceholder)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(Y.detail.item),this.close())}__onClearButtonMouseDown(Y){Y.preventDefault(),this.inputElement.focus()}_onFocusout(Y){if(!(Y.relatedTarget&&Y.relatedTarget.localName===`${this._tagNamePrefix}-item`)){if(Y.relatedTarget===this.$.overlay){Y.composedPath()[0].focus();return}if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}}_onTouchend(Y){!this.clearElement||Y.composedPath()[0]!==this.clearElement||(Y.preventDefault(),this._clear())}};/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TimePickerComboBox extends ComboBoxMixin(ThemableMixin(PolymerElement)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return html`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(TimePickerComboBox.is,TimePickerComboBox);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const MIN_ALLOWED_TIME="00:00:00.000",MAX_ALLOWED_TIME="23:59:59.999";registerStyles("vaadin-time-picker",inputFieldShared,{moduleId:"vaadin-time-picker-styles"});class TimePicker extends PatternMixin(InputControlMixin(ThemableMixin(ElementMixin(PolymerElement)))){static get is(){return"vaadin-time-picker"}static get template(){return html`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:K=>{if(!K)return;const Y=(te=0,ie="00")=>(ie+te).substr((ie+te).length-ie.length);let J=`${Y(K.hours)}:${Y(K.minutes)}`;return K.seconds!==void 0&&(J+=`:${Y(K.seconds)}`),K.milliseconds!==void 0&&(J+=`.${Y(K.milliseconds,"000")}`),J},parseTime:K=>{const Y="(\\d|[0-1]\\d|2[0-3])",J="(\\d|[0-5]\\d)",te=J,ie="(\\d{1,3})",re=new RegExp(`^${Y}(?::${J}(?::${te}(?:\\.${ie})?)?)?$`).exec(K);if(re){if(re[4])for(;re[4].length<3;)re[4]+="0";return{hours:re[1],minutes:re[2],seconds:re[3],milliseconds:re[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new InputController(this,K=>{this._setInputElement(K),this._setFocusElement(K),this.stateTarget=K,this.ariaTarget=K})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._tooltipController=new TooltipController(this),this._tooltipController.setShouldShow(K=>!K.opened),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}_inputElementChanged(K){super._inputElementChanged(K),K&&this.$.comboBox._setInputElement(K)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(K){super._setFocused(K),K||this.validate()}__validDayDivisor(K){return!K||24*3600%K===0||K<1&&K%1*1e3%1===0}_onKeyDown(K){if(super._onKeyDown(K),this.readonly||this.disabled||this.__dropdownItems.length)return;const Y=this.__validDayDivisor(this.step)&&this.step||60;K.keyCode===40?this.__onArrowPressWithStep(-Y):K.keyCode===38&&this.__onArrowPressWithStep(Y)}_onEscape(){}__onArrowPressWithStep(K){const Y=this.__addStep(this.__getMsec(this.__memoValue),K,!0);this.__memoValue=Y,this.inputElement.value=this.i18n.formatTime(this.__validateTime(Y)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(K){let Y=(K&&K.hours||0)*60*60*1e3;return Y+=(K&&K.minutes||0)*60*1e3,Y+=(K&&K.seconds||0)*1e3,Y+=K&&parseInt(K.milliseconds)||0,Y}__getSec(K){let Y=(K&&K.hours||0)*60*60;return Y+=(K&&K.minutes||0)*60,Y+=K&&K.seconds||0,Y+=K&&K.milliseconds/1e3||0,Y}__addStep(K,Y,J){K===0&&Y<0&&(K=24*60*60*1e3);const te=Y*1e3,ie=K%te;te<0&&ie&&J?K-=ie:te>0&&ie&&J?K-=ie-te:K+=te;const ae=Math.floor(K/1e3/60/60);K-=ae*1e3*60*60;const re=Math.floor(K/1e3/60);K-=re*1e3*60;const se=Math.floor(K/1e3);return K-=se*1e3,{hours:ae<24?ae:0,minutes:re,seconds:se,milliseconds:K}}__updateDropdownItems(K,Y,J,te){const ie=this.__validateTime(this.__parseISO(Y||MIN_ALLOWED_TIME)),ae=this.__getSec(ie),re=this.__validateTime(this.__parseISO(J||MAX_ALLOWED_TIME)),se=this.__getSec(re);if(this.__adjustValue(ae,se,ie,re),this.__dropdownItems=this.__generateDropdownList(ae,se,te),te!==this.__oldStep){this.__oldStep=te;const oe=this.__validateTime(this.__parseISO(this.value));this.__updateValue(oe)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(K,Y,J){if(J<15*60||!this.__validDayDivisor(J))return[];const te=[];J=J||3600;let ie=-J+K;for(;ie+J>=K&&ie+J<=Y;){const ae=this.__validateTime(this.__addStep(ie*1e3,J));ie+=J;const re=this.i18n.formatTime(ae);te.push({label:re,value:re})}return te}__adjustValue(K,Y,J,te){if(!this.__memoValue)return;const ie=this.__getSec(this.__memoValue);ie<K?this.__updateValue(J):ie>Y&&this.__updateValue(te)}_valueChanged(K,Y){const J=this.__memoValue=this.__parseISO(K),te=this.__formatISO(J)||"";K!==""&&K!==null&&!J?this.value=Y===void 0?"":Y:K!==te?this.value=te:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(J),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(K,Y){if(K===""&&Y===void 0)return;const J=this.i18n.parseTime(K),te=this.i18n.formatTime(J)||"";J?K!==te?this._comboBoxValue=te:this.__updateValue(J):(K!==""&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(K){K.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(K){const Y=this.__formatISO(this.__validateTime(K))||"";this.value=Y}__updateInputValue(K){const Y=this.i18n.formatTime(this.__validateTime(K))||"";this._comboBoxValue=Y}__validateTime(K){return K&&(K.hours=parseInt(K.hours),K.minutes=parseInt(K.minutes||0),K.seconds=this.__stepSegment<3?void 0:parseInt(K.seconds||0),K.milliseconds=this.__stepSegment<4?void 0:parseInt(K.milliseconds||0)),K}get __stepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(K){return TimePicker.properties.i18n.value().formatTime(K)}__parseISO(K){return TimePicker.properties.i18n.value().parseTime(K)}_timeAllowed(K){const Y=this.i18n.parseTime(this.min||MIN_ALLOWED_TIME),J=this.i18n.parseTime(this.max||MAX_ALLOWED_TIME);return(!this.__getMsec(Y)||this.__getMsec(K)>=this.__getMsec(Y))&&(!this.__getMsec(J)||this.__getMsec(K)<=this.__getMsec(J))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(TimePicker.is,TimePicker);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const customField=i$5`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;registerStyles("vaadin-custom-field",[requiredField,helper,customField],{moduleId:"lumo-custom-field"});registerStyles("vaadin-date-time-picker",[requiredField,helper,customField],{moduleId:"lumo-date-time-picker"});registerStyles("vaadin-date-time-picker-date-picker",i$5`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"});registerStyles("vaadin-date-time-picker-time-picker",i$5`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class DateTimePickerDatePicker extends DatePicker{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(DateTimePickerDatePicker.is,DateTimePickerDatePicker);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class DateTimePickerTimePicker extends TimePicker{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(DateTimePickerTimePicker.is,DateTimePickerTimePicker);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const SlotMixin=dedupingMixin(ee=>class extends ee{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(Y=>{if(!(this._getDirectSlotChild(Y)!==void 0)){const te=this.slots[Y],ie=te();ie instanceof Element&&(Y!==""&&ie.setAttribute("slot",Y),this.appendChild(ie))}})}_getDirectSlotChild(Y){return Array.from(this.childNodes).find(J=>J.nodeType===Node.ELEMENT_NODE&&J.slot===Y||J.nodeType===Node.TEXT_NODE&&J.textContent.trim()&&Y==="")}});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-date-time-picker",inputFieldShared,{moduleId:"vaadin-date-time-picker"});function getPropertyFromPrototype(ee,K){for(;ee;){if(ee.properties&&ee.properties[K])return ee.properties[K];ee=Object.getPrototypeOf(ee)}}const datePickerClass=customElements.get("vaadin-date-time-picker-date-picker"),timePickerClass=customElements.get("vaadin-date-time-picker-time-picker"),datePickerI18nDefaults=getPropertyFromPrototype(datePickerClass,"i18n").value(),timePickerI18nDefaults=getPropertyFromPrototype(timePickerClass,"i18n").value(),datePickerI18nProps=Object.keys(datePickerI18nDefaults),timePickerI18nProps=Object.keys(timePickerI18nDefaults);class DateTimePicker extends FieldMixin(SlotMixin(DisabledMixin(FocusMixin(ThemableMixin(ElementMixin(PolymerElement)))))){static get template(){return html`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        .slots ::slotted([slot='date-picker']) {
          min-width: 0;
          flex: 1 1 auto;
        }

        .slots ::slotted([slot='time-picker']) {
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...datePickerI18nDefaults,...timePickerI18nDefaults})},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(_theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return{...super.slots,"date-picker":()=>{const K=document.createElement("vaadin-date-time-picker-date-picker");return K.__defaultPicker=!0,K},"time-picker":()=>{const K=document.createElement("vaadin-date-time-picker-time-picker");return K.__defaultPicker=!0,K}}}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this)}ready(){super.ready(),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this._observer=new FlattenedNodesObserver(this,K=>{this.__onDomChange(K.addedNodes)}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(K=>K.__datePicker&&!K.__datePicker.opened&&K.__timePicker&&!K.__timePicker.opened),this.ariaTarget=this}focus(){this.__datePicker.focus()}_setFocused(K){super._setFocused(K),K||this.validate()}_shouldRemoveFocus(K){const Y=K.relatedTarget;return!(this.__datePicker.contains(Y)||this.__timePicker.contains(Y)||Y===this.__datePicker.$.overlay)}__syncI18n(K,Y,J){J=J||Object.keys(Y.i18n),J.forEach(te=>{Y.i18n&&Y.i18n.hasOwnProperty(te)&&K.set(`i18n.${te}`,Y.i18n[te])})}__changeEventHandler(K){K.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(K){K.addEventListener("change",this.__changeEventHandler),K.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(K){K.removeEventListener("change",this.__changeEventHandler),K.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(K){K.filter(Y=>Y.nodeType===Node.ELEMENT_NODE).forEach(Y=>{const J=Y.getAttribute("slot");J==="date-picker"?this.__datePicker=Y:J==="time-picker"&&(this.__timePicker=Y)}),this.value&&(this.min||this.max)&&this.validate()}__datePickerChanged(K,Y){K&&(Y&&(this.__removeInputListeners(Y),Y.remove()),this.__addInputListeners(K),K.__defaultPicker?(K.placeholder=this.datePlaceholder,K.invalid=this.invalid,K.initialPosition=this.initialPosition,K.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(K,this,datePickerI18nProps)):(this.datePlaceholder=K.placeholder,this.initialPosition=K.initialPosition,this.showWeekNumbers=K.showWeekNumbers,this.__syncI18n(this,K,datePickerI18nProps)),K.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),K.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),K.required=this.required,K.disabled=this.disabled,K.readonly=this.readonly,K.autoOpenDisabled=this.autoOpenDisabled,K.validate=()=>{},K._validateInput=()=>{})}__timePickerChanged(K,Y){K&&(Y&&(this.__removeInputListeners(Y),Y.remove()),this.__addInputListeners(K),K.__defaultPicker?(K.placeholder=this.timePlaceholder,K.step=this.step,K.invalid=this.invalid,this.__syncI18n(K,this,timePickerI18nProps)):(this.timePlaceholder=K.placeholder,this.step=K.step,this.__syncI18n(this,K,timePickerI18nProps)),this.__updateTimePickerMinMax(),K.required=this.required,K.disabled=this.disabled,K.readonly=this.readonly,K.autoOpenDisabled=this.autoOpenDisabled,K.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const K=this.__parseDate(this.__datePicker.value),Y=dateEquals(this.__minDateTime,this.__maxDateTime),J=this.__timePicker.value;this.__minDateTime&&dateEquals(K,this.__minDateTime)||Y?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&dateEquals(K,this.__maxDateTime)||Y?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==J&&(this.__timePicker.value=J)}}__i18nChanged(K){this.__datePicker&&this.__datePicker.set(K.path,K.value),this.__timePicker&&this.__timePicker.set(K.path,K.value)}__datePlaceholderChanged(K){this.__datePicker&&(this.__datePicker.placeholder=K)}__timePlaceholderChanged(K){this.__timePicker&&(this.__timePicker.placeholder=K)}__stepChanged(K){this.__timePicker&&this.__timePicker.step!==K&&(this.__timePicker.step=K)}__initialPositionChanged(K){this.__datePicker&&(this.__datePicker.initialPosition=K)}__showWeekNumbersChanged(K){this.__datePicker&&(this.__datePicker.showWeekNumbers=K)}__invalidChanged(K){this.__datePicker&&(this.__datePicker.invalid=K),this.__timePicker&&(this.__timePicker.invalid=K)}__requiredChanged(K){this.__datePicker&&(this.__datePicker.required=K),this.__timePicker&&(this.__timePicker.required=K)}__disabledChanged(K){this.__datePicker&&(this.__datePicker.disabled=K),this.__timePicker&&(this.__timePicker.disabled=K)}__readonlyChanged(K){this.__datePicker&&(this.__datePicker.readonly=K),this.__timePicker&&(this.__timePicker.readonly=K)}__parseDate(K){return parseDate(K)}__formatDateISO(K,Y){return K?datePickerClass.prototype._formatISO(K):Y}__formatTimeISO(K){return timePickerI18nDefaults.formatTime(K)}__parseTimeISO(K){return timePickerI18nDefaults.parseTime(K)}__parseDateTime(K){const[Y,J]=K.split("T");if(!(Y&&J))return;const te=this.__parseDate(Y);if(!te)return;const ie=this.__parseTimeISO(J);if(ie)return te.setHours(parseInt(ie.hours)),te.setMinutes(parseInt(ie.minutes||0)),te.setSeconds(parseInt(ie.seconds||0)),te.setMilliseconds(parseInt(ie.milliseconds||0)),te}__formatDateTime(K){if(!K)return"";const Y=this.__formatDateISO(K,""),J=this.__dateToIsoTimeString(K);return`${Y}T${J}`}__dateToIsoTimeString(K){return this.__formatTimeISO(this.__validateTime({hours:K.getHours(),minutes:K.getMinutes(),seconds:K.getSeconds(),milliseconds:K.getMilliseconds()}))}__validateTime(K){return K&&(K.seconds=this.__stepSegment<3?void 0:K.seconds,K.milliseconds=this.__stepSegment<4?void 0:K.milliseconds),K}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const K=this.__inputs.some(J=>!J.checkValidity()),Y=this.required&&this.__inputs.some(J=>!J.value);return!(K||Y)}get __stepSegment(){const K=this.step==null?60:parseFloat(this.step);if(K%3600===0)return 1;if(K%60===0||!K)return 2;if(K%1===0)return 3;if(K<1)return 4}__dateTimeEquals(K,Y){return dateEquals(K,Y)?K.getHours()===Y.getHours()&&K.getMinutes()===Y.getMinutes()&&K.getSeconds()===Y.getSeconds()&&K.getMilliseconds()===Y.getMilliseconds():!1}__handleDateTimeChange(K,Y,J,te){if(!J){this[K]="",this[Y]="";return}const ie=this.__parseDateTime(J);if(!ie){this[K]=te;return}this.__dateTimeEquals(this[Y],ie)||(this[Y]=ie)}__valueChanged(K,Y){this.__handleDateTimeChange("value","__selectedDateTime",K,Y),Y!==void 0&&(this.__dispatchChangeForValue=K),this.toggleAttribute("has-value",!!K),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(K,Y){this.__handleDateTimeChange("min","__minDateTime",K,Y),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(K,Y){this.__handleDateTimeChange("max","__maxDateTime",K,Y),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(K){const Y=this.__formatDateTime(K);if(this.value!==Y&&(this.value=Y),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[te,ie]=this.value.split("T");this.__datePicker.value=te||"",this.__timePicker.value=ie||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const K=this.__datePicker.value,Y=this.__timePicker.value;return K&&Y?[K,Y].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const K=this.__formattedValue,[Y,J]=K.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),Y&&J?K!==this.value&&(this.value=K):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(K){this.__datePicker&&(this.__datePicker.autoOpenDisabled=K),this.__timePicker&&(this.__timePicker.autoOpenDisabled=K)}__themeChanged(K,Y,J){!Y||!J||[Y,J].forEach(te=>{K?te.setAttribute("theme",K):te.removeAttribute("theme")})}__pickersChanged(K,Y){!K||!Y||K.__defaultPicker===Y.__defaultPicker&&(K.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(DateTimePicker.is,DateTimePicker);var __defProp$c=Object.defineProperty,__getOwnPropDesc$c=Object.getOwnPropertyDescriptor,__decorateClass$c=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$c(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$c(K,Y,te),te};let FieldDateTime=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.enabled=!0}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-date-time-picker
                    label="${this.label}"
                    @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                    ?disabled=${!this.enabled}
                    ?required=${this.required}
            ></vaadin-date-time-picker>
            `}};__decorateClass$c([e()],FieldDateTime.prototype,"required",2);__decorateClass$c([e()],FieldDateTime.prototype,"label",2);__decorateClass$c([e()],FieldDateTime.prototype,"name",2);__decorateClass$c([e()],FieldDateTime.prototype,"onChange",2);__decorateClass$c([e()],FieldDateTime.prototype,"value",2);__decorateClass$c([e()],FieldDateTime.prototype,"enabled",2);__decorateClass$c([e()],FieldDateTime.prototype,"field",2);FieldDateTime=__decorateClass$c([e$1("field-datetime")],FieldDateTime);var __defProp$b=Object.defineProperty,__getOwnPropDesc$b=Object.getOwnPropertyDescriptor,__decorateClass$b=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$b(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$b(K,Y,te),te};let FieldTime=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.enabled=!0}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-time-picker
                    label="${this.label}"
                    @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                    ?disabled=${!this.enabled}
                    ?required=${this.required}
            ></vaadin-time-picker>
            `}};__decorateClass$b([e()],FieldTime.prototype,"required",2);__decorateClass$b([e()],FieldTime.prototype,"label",2);__decorateClass$b([e()],FieldTime.prototype,"name",2);__decorateClass$b([e()],FieldTime.prototype,"onChange",2);__decorateClass$b([e()],FieldTime.prototype,"value",2);__decorateClass$b([e()],FieldTime.prototype,"enabled",2);__decorateClass$b([e()],FieldTime.prototype,"field",2);FieldTime=__decorateClass$b([e$1("field-time")],FieldTime);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const textArea=i$5`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(iron-icon),
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;registerStyles("vaadin-text-area",[inputFieldShared$1,textArea],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const observer=new ResizeObserver(ee=>{setTimeout(()=>{ee.forEach(K=>{K.target.resizables?K.target.resizables.forEach(Y=>{Y._onResize(K.contentRect)}):K.target._onResize(K.contentRect)})})}),ResizeMixin=dedupingMixin(ee=>class extends ee{connectedCallback(){if(super.connectedCallback(),observer.observe(this),this._observeParent){const Y=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;Y.resizables||(Y.resizables=new Set,observer.observe(Y)),Y.resizables.add(this),this.__parent=Y}}disconnectedCallback(){super.disconnectedCallback(),observer.unobserve(this);const Y=this.__parent;if(this._observeParent&&Y){const J=Y.resizables;J&&(J.delete(this),J.size===0&&observer.unobserve(Y)),this.__parent=null}}get _observeParent(){return!1}_onResize(Y){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class TextAreaController extends SlotController{constructor(K,Y){super(K,"textarea",()=>document.createElement("textarea"),(J,te)=>{const ie=J.getAttribute("value");ie&&(te.value=ie);const ae=J.getAttribute("name");ae&&te.setAttribute("name",ae),te.id=this.defaultId,typeof Y=="function"&&Y(te)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-text-area",inputFieldShared,{moduleId:"vaadin-text-area-styles"});class TextArea extends ResizeMixin(PatternMixin(InputFieldMixin(ThemableMixin(ElementMixin(PolymerElement))))){static get is(){return"vaadin-text-area"}static get template(){return html`
      <style>
        :host {
          animation: 1ms vaadin-text-area-appear;
        }

        .vaadin-text-area-container {
          flex: auto;
        }

        /* The label, helper text and the error message should neither grow nor shrink. */
        [part='label'],
        [part='helper-text'],
        [part='error-message'] {
          flex: none;
        }

        [part='input-field'] {
          flex: auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        ::slotted(textarea) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          resize: none;
          margin: 0;
          padding: 0 0.25em;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          font-size: 1em;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        /* Override styles from <vaadin-input-container> */
        [part='input-field'] ::slotted(textarea) {
          align-self: stretch;
          white-space: pre-wrap;
        }

        [part='input-field'] ::slotted(:not(textarea)) {
          align-self: flex-start;
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }

        @keyframes vaadin-text-area-appear {
          to {
            opacity: 1;
          }
        }
      </style>

      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="__scrollPositionUpdated"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}get clearElement(){return this.$.clearButton}_onResize(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new TextAreaController(this,K=>{this._setInputElement(K),this._setFocusElement(K),this.stateTarget=K,this.ariaTarget=K})),this.addController(new LabelledInputController(this.inputElement,this._labelController)),this._tooltipController=new TooltipController(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",K=>{const Y=this._inputField.scrollTop;this._inputField.scrollTop+=K.deltaY,Y!==this._inputField.scrollTop&&(K.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(K){K.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(K,Y){super._valueChanged(K,Y),this._updateHeight()}_updateHeight(){const K=this.inputElement,Y=this._inputField;if(!K||!Y)return;const J=Y.scrollTop,te=this.value?this.value.length:0;if(this._oldValueLength>=te){const ae=getComputedStyle(Y).height,re=getComputedStyle(K).width;Y.style.display="block",Y.style.height=ae,K.style.maxWidth=re,K.style.height="auto"}this._oldValueLength=te;const ie=K.scrollHeight;ie>K.clientHeight&&(K.style.height=`${ie}px`),K.style.removeProperty("max-width"),Y.style.removeProperty("display"),Y.style.removeProperty("height"),Y.scrollTop=J}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const K=this.inputElement.value.match(this.pattern);return K?K[0]===K.input:!1}catch{return!0}}}customElements.define(TextArea.is,TextArea);var __defProp$a=Object.defineProperty,__getOwnPropDesc$a=Object.getOwnPropertyDescriptor,__decorateClass$a=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$a(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$a(K,Y,te),te};let FieldReadonly=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.enabled=!0}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}firstUpdated(){var K;const ee=this.shadowRoot.querySelector("textarea");(K=ee==null?void 0:ee.parentElement)==null||K.removeChild(ee)}render(){return y$1`
            <vaadin-text-area
                label="${this.label}"
                @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                   ?disabled=${!this.enabled}
                ?required=${this.required}
                readonly
            ><div class="content" slot="textarea">${this.value}</div></vaadin-text-area>
            `}};FieldReadonly.styles=i$5`
        .content {
            width: 100%;
            min-height: unset;
        }
        vaadin-text-area {
            width: 100%;
        }
    `;__decorateClass$a([e()],FieldReadonly.prototype,"required",2);__decorateClass$a([e()],FieldReadonly.prototype,"label",2);__decorateClass$a([e()],FieldReadonly.prototype,"name",2);__decorateClass$a([e()],FieldReadonly.prototype,"onChange",2);__decorateClass$a([e()],FieldReadonly.prototype,"value",2);__decorateClass$a([e()],FieldReadonly.prototype,"enabled",2);__decorateClass$a([e()],FieldReadonly.prototype,"field",2);FieldReadonly=__decorateClass$a([e$1("field-readonly")],FieldReadonly);var __defProp$9=Object.defineProperty,__getOwnPropDesc$9=Object.getOwnPropertyDescriptor,__decorateClass$9=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$9(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$9(K,Y,te),te};let FieldTextarea=class extends s$1{constructor(){super(...arguments),this.required=!1,this.label="",this.name="",this.onChange=ee=>{const K=ee.target;this.onValueChanged({value:K.value})},this.enabled=!0}setRequired(ee){this.required=ee}setField(ee){this.field=ee}setLabel(ee){this.label=ee}setEnabled(ee){this.enabled=ee}onValueChanged(ee){console.log(ee)}setValue(ee){this.value=ee}render(){return y$1`
            <vaadin-text-area
                label="${this.label}"
                @change=${this.onChange} 
                           name="${this.name}" 
                           id="${this.name}"
                           value=${this.value}
                   ?disabled=${!this.enabled}
                ?required=${this.required}
            ></vaadin-text-area>
            `}};FieldTextarea.styles=i$5`
        .content {
            width: 100%;
        }
        vaadin-text-area {
            width: 100%;
        }
    `;__decorateClass$9([e()],FieldTextarea.prototype,"required",2);__decorateClass$9([e()],FieldTextarea.prototype,"label",2);__decorateClass$9([e()],FieldTextarea.prototype,"name",2);__decorateClass$9([e()],FieldTextarea.prototype,"onChange",2);__decorateClass$9([e()],FieldTextarea.prototype,"value",2);__decorateClass$9([e()],FieldTextarea.prototype,"enabled",2);__decorateClass$9([e()],FieldTextarea.prototype,"field",2);FieldTextarea=__decorateClass$9([e$1("field-textarea")],FieldTextarea);var __defProp$8=Object.defineProperty,__getOwnPropDesc$8=Object.getOwnPropertyDescriptor,__decorateClass$8=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$8(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$8(K,Y,te),te};let MateuField=class extends s$1{firstUpdated(){const ee=document.createElement(mapInputTypeToFieldType(this.field.type,this.field.stereotype)),K=this.shadowRoot.getElementById("container"),Y=ee;Y.onValueChanged=te=>{let ie=new CustomEvent("change",{detail:{key:this.field.id,value:te.value}});this.dispatchEvent(ie)},Y.setLabel(this.field.caption),Y.setField(this.field),Y.setValue(this.value),Y.setRequired(this.field.validations.length>0),K.appendChild(ee);const J=this.shadowRoot.getElementById("wrapper");this.fieldWrapper.container=J}render(){return y$1`
      <div id="wrapper">
        <div id="container"></div>
        
        <slot></slot>
      </div>
    `}};MateuField.styles=i$5`
  /*
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
*/
  `;__decorateClass$8([e()],MateuField.prototype,"field",2);__decorateClass$8([e()],MateuField.prototype,"value",2);__decorateClass$8([e()],MateuField.prototype,"visible",2);__decorateClass$8([e()],MateuField.prototype,"enabled",2);__decorateClass$8([e()],MateuField.prototype,"fieldWrapper",2);MateuField=__decorateClass$8([e$1("mateu-field")],MateuField);var __defProp$7=Object.defineProperty,__getOwnPropDesc$7=Object.getOwnPropertyDescriptor,__decorateClass$7=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$7(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$7(K,Y,te),te};let MateuFieldGroup=class extends s$1{connectedCallback(){super.connectedCallback()}onValueChange(ee){this.formElement.valueChanged(ee.detail.key,ee.detail.value)}render(){return y$1`
      <div>

        ${this.fieldGroup.caption?y$1`<h2>${this.fieldGroup.caption}</h2>`:""}
        
          ${this.fieldGroup.fields.map(ee=>y$1`<mateu-field .field="${ee}" @change=${this.onValueChange} .formElement=${this.formElement} .value=${this.formElement.getValue(ee.id)} .fieldWrapper=${this.formElement.getFieldWrapper(ee)}></mateu-field>`)}
        
        <slot></slot>
      </div>
    `}};MateuFieldGroup.styles=i$5`
  /*
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    */
  `;__decorateClass$7([e()],MateuFieldGroup.prototype,"fieldGroup",2);__decorateClass$7([e()],MateuFieldGroup.prototype,"formElement",2);MateuFieldGroup=__decorateClass$7([e$1("mateu-fieldgroup")],MateuFieldGroup);var __defProp$6=Object.defineProperty,__getOwnPropDesc$6=Object.getOwnPropertyDescriptor,__decorateClass$6=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$6(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$6(K,Y,te),te};let MateuSection=class extends s$1{render(){return y$1`
      <div class="mateu-section">

        ${this.section.caption?y$1`<h1>${this.section.caption}</h1>`:""}
        
        ${this.section.fieldGroups.map(ee=>y$1`<mateu-fieldgroup .fieldGroup="${ee}" .formElement=${this.formElement}></mateu-fieldgroup>`)}
        
        <slot></slot>
      </div>
    `}};MateuSection.styles=i$5`
    .mateu-section {
      text-align: left;
      border: 1px solid lightgrey;
      border-radius: 8px;
      padding: 2rem;  
      margin-bottom: 16px;    
    }

  `;__decorateClass$6([e()],MateuSection.prototype,"section",2);__decorateClass$6([e()],MateuSection.prototype,"formElement",2);MateuSection=__decorateClass$6([e$1("mateu-section")],MateuSection);registerStyles("vaadin-notification-card",i$5`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class NotificationContainer extends ThemableMixin(ElementMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),isIOS&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(K){K?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const K=window.innerHeight,J=window.innerWidth>K,te=document.documentElement.clientHeight;J&&te>K?this.style.bottom=`${te-K}px`:this.style.bottom="0"}_onVaadinOverlayClose(K){const Y=K.detail.sourceEvent;Y&&Y.composedPath().indexOf(this)>=0&&K.preventDefault()}}class NotificationCard extends ThemableMixin(PolymerElement){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class Notification extends ThemePropertyMixin(ElementMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}static show(K,Y){return n$2(K)?Notification._createAndShowNotification(J=>{Z$1(K,J)},Y):Notification._createAndShowNotification(J=>{J.innerText=K},Y)}static _createAndShowNotification(K,Y){const J=document.createElement(Notification.is);return Y&&Number.isFinite(Y.duration)&&(J.duration=Y.duration),Y&&Y.position&&(J.position=Y.position),Y&&Y.theme&&J.setAttribute("theme",Y.theme),J.renderer=K,document.body.appendChild(J),J.opened=!0,J.addEventListener("opened-changed",te=>{te.detail.value||J.remove()}),J}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),processTemplates(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}requestContentUpdate(){this.renderer&&this.renderer(this._card,this)}_rendererChanged(K,Y,J){if(!J)return;const te=this._oldRenderer!==K;this._oldRenderer=K,te&&(J.innerHTML="",delete J._$litPart$),Y&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return Notification._container||(Notification._container=document.createElement("vaadin-notification-container"),document.body.appendChild(Notification._container)),Notification._container}_openedChanged(K){K?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const K=()=>{this._card.removeEventListener("animationend",K),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",K),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const K=getComputedStyle(this._card).getPropertyValue("animation-name");if(K&&K!=="none"){const Y=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",Y)};this._card.addEventListener("animationend",Y)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(K,Y){Y&&(clearTimeout(this._durationTimeoutId),K>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),K)))}}customElements.define(NotificationContainer.is,NotificationContainer);customElements.define(NotificationCard.is,NotificationCard);customElements.define(Notification.is,Notification);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-notification" is deprecated. Use "@vaadin/notification" instead.');const initialValue={};class AbstractRendererDirective extends i$2{constructor(K){if(super(K),this.previousValue=initialValue,K.type!==t$2.ELEMENT)throw new Error("renderer only supports binding to element")}render(K,Y){return b$1}update(K,[Y,J]){var te;const ie=this.previousValue===initialValue;if(!this.hasChanged(J))return b$1;this.previousValue=Array.isArray(J)?Array.from(J):J;const ae=K.element;if(ie){const re=(te=K.options)===null||te===void 0?void 0:te.host;this.addRenderer(ae,Y,{host:re})}else this.runRenderer(ae);return b$1}hasChanged(K){let Y=!0;return Array.isArray(K)?Array.isArray(this.previousValue)&&this.previousValue.length===K.length&&K.every((J,te)=>J===this.previousValue[te])&&(Y=!1):this.previousValue===K&&(Y=!1),Y}}class NotificationRendererDirective extends AbstractRendererDirective{addRenderer(K,Y,J){K.renderer=(te,ie)=>{Z$1(Y.call(J.host,ie),te,J)}}runRenderer(K){K.requestContentUpdate()}}const rendererDirective=e$3(NotificationRendererDirective),notificationRenderer=(ee,K)=>rendererDirective(ee,K);class FieldsMap{constructor(){this.map=new Map}}class FieldWrapper{constructor(K){this.visible=!0,this.enabled=!0,this.container=void 0,this.field=K}setVisible(K){var Y;this.visible=K,(Y=this.container)==null||Y.setAttribute("style","display: "+(this.visible?"block":"none"))}}var __defProp$5=Object.defineProperty,__getOwnPropDesc$5=Object.getOwnPropertyDescriptor,__decorateClass$5=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$5(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$5(K,Y,te),te};let MateuForm=class extends s$1{constructor(){super(...arguments),this.notificationOpened=!1,this.notificationMessage="",this.fieldsMap=new FieldsMap,this.renderNotification=()=>y$1`${this.notificationMessage}`}getFieldWrapper(ee){return this.fieldsMap.map.get(ee)}valueChanged(ee,K){const Y={};Y[ee]=K,this.data={...this.data,...Y},this.runRules()}getValue(ee){return this.data[ee]}runRules(){this.metadata.sections.flatMap(ee=>ee.fieldGroups).flatMap(ee=>ee.fields).map(ee=>this.fieldsMap.map.get(ee)).filter(ee=>ee).forEach(ee=>ee.setVisible(!0)),this.rules.forEach(ee=>this.applyRule(ee))}applyRule(r){try{const applies=eval(this.buildJs(r.filter));if(applies&&r.action=="Hide"){const ee=r.data;this.metadata.sections.flatMap(K=>K.fieldGroups).flatMap(K=>K.fields).filter(K=>ee.includes(K.id)).map(K=>this.fieldsMap.map.get(K)).forEach(K=>K.setVisible(!1))}}catch(ee){}}buildJs(ee){let K="";for(let Y in this.data)K+="const "+Y+' = this.getValue("'+Y+'");';return K+=""+ee,K}connectedCallback(){super.connectedCallback(),this.metadata.sections.flatMap(ee=>ee.fieldGroups.flatMap(K=>K.fields)).forEach(ee=>this.fieldsMap.map.set(ee,new FieldWrapper(ee))),setTimeout(()=>this.runRules())}runAction(ee){const Y=this.metadata.sections.flatMap(J=>J.fieldGroups.flatMap(te=>te.fields)).filter(J=>J.validations.length>0).filter(J=>!this.data[J.id]);if(Y.length>0){const J=Y.map(te=>te.caption);this.notificationMessage="All mandatory fields must be filled ("+J+")",this.notificationOpened=!0}else{const J=ee.target.getAttribute("actionId");this.setLoading(!0),store.dispatch(runStepAction(this.journeyId,this.stepId,J,this.data))}}render(){return y$1`
      <div>
        
        <h1>${this.metadata.title}</h1>
        <h3>${this.metadata.subtitle}</h3>
        
        ${this.metadata.sections.map(ee=>y$1`<mateu-section .section="${ee}" .formElement=${this}></mateu-section>`)}

        <vaadin-horizontal-layout style="justify-content: end;" margin spacing>
          <slot></slot>
          ${this.metadata.actions.map(ee=>y$1`
            <vaadin-button theme="primary" @click=${this.runAction} actionId=${ee.id}>${ee.caption}</vaadin-button>
          `)}

          ${this.metadata.mainActions.map(ee=>y$1`
            <vaadin-button theme="primary" @click=${this.runAction} actionId=${ee.id}>${ee.caption}</vaadin-button>
          `)}
        </vaadin-horizontal-layout>

        <vaadin-notification
            .opened=${this.notificationOpened}
            position="bottom-end"
            duration="5000"
            theme="error"
            ${notificationRenderer(this.renderNotification)}
        >${this.notificationMessage}</vaadin-notification>
      </div>
    `}};MateuForm.styles=i$5`
    vaadin-button {
        margin-left: 10px;
    }
  `;__decorateClass$5([e()],MateuForm.prototype,"metadata",2);__decorateClass$5([e()],MateuForm.prototype,"data",2);__decorateClass$5([e()],MateuForm.prototype,"journeyId",2);__decorateClass$5([e()],MateuForm.prototype,"stepId",2);__decorateClass$5([e()],MateuForm.prototype,"rules",2);__decorateClass$5([e()],MateuForm.prototype,"notificationOpened",2);__decorateClass$5([e()],MateuForm.prototype,"notificationMessage",2);__decorateClass$5([e()],MateuForm.prototype,"fieldsMap",2);__decorateClass$5([e()],MateuForm.prototype,"setLoading",2);MateuForm=__decorateClass$5([e$1("mateu-form")],MateuForm);registerStyles("vaadin-grid",i$5`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ColumnBaseMixin=ee=>class extends ee{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const Y=this.parentNode;return Y&&Y.localName==="vaadin-grid-column-group"&&Y.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(Y=>{Y._content.parentNode||this._grid.appendChild(Y._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(Y=>{Y._content.parentNode&&Y._content.parentNode.removeChild(Y._content)})}),this._gridValue=void 0}ready(){super.ready(),processTemplates(this)}_findHostGrid(){let Y=this;for(;Y&&!/^vaadin.*grid(-pro)?$/.test(Y.localName);)Y=Y.assignedSlot?Y.assignedSlot.parentNode:Y.parentNode;return Y||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(Y=>Y)}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(Y){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(J=>{J.style.flexGrow=Y})}_orderChanged(Y){this._allCells.forEach(J=>{J.style.order=Y})}_widthChanged(Y){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(J=>{J.style.width=Y})}_frozenChanged(Y){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",Y),this._allCells.forEach(J=>J.toggleAttribute("frozen",Y)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(Y){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",Y),this._allCells.forEach(J=>{this._grid&&J.parentElement===this._grid.$.sizer||J.toggleAttribute("frozen-to-end",Y)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(Y){this._allCells.forEach(J=>J.toggleAttribute("last-frozen",Y)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=Y)}_firstFrozenToEndChanged(Y){this._allCells.forEach(J=>{this._grid&&J.parentElement===this._grid.$.sizer||J.toggleAttribute("first-frozen-to-end",Y)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=Y)}_generateHeader(Y){return Y.substr(Y.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,J=>J.toUpperCase())}_reorderStatusChanged(Y){this._allCells.forEach(J=>J.setAttribute("reorder-status",Y))}_resizableChanged(Y,J){Y===void 0||J===void 0||J&&[J].concat(this._emptyCells).forEach(te=>{if(te){const ie=te.querySelector('[part~="resize-handle"]');if(ie&&te.removeChild(ie),Y){const ae=document.createElement("div");ae.setAttribute("part","resize-handle"),te.appendChild(ae)}}})}_textAlignChanged(Y){if(Y===void 0)return;if(["start","end","center"].indexOf(Y)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let J;getComputedStyle(this._grid).direction==="ltr"?Y==="start"?J="left":Y==="end"&&(J="right"):Y==="start"?J="right":Y==="end"&&(J="left"),this._allCells.forEach(te=>{te._content.style.textAlign=Y,getComputedStyle(te._content).textAlign!==Y&&(te._content.style.textAlign=J)})}_hiddenChanged(Y){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",Y),!!Y!=!!this._previousHidden&&this._grid&&(Y===!0&&this._allCells.forEach(J=>{J._content.parentNode&&J._content.parentNode.removeChild(J._content)}),this._grid._debouncerHiddenChanged=Debouncer$1.debounce(this._grid._debouncerHiddenChanged,animationFrame,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=Y}_runRenderer(Y,J,te){const ie=[J._content,this];te&&te.item&&ie.push(te),Y.apply(this,ie)}__renderCellsContent(Y,J){this.hidden||!this._grid||J.forEach(te=>{if(!te.parentElement)return;const ie=this._grid.__getRowModel(te.parentElement);Y&&(te._renderer!==Y&&this._clearCellContent(te),te._renderer=Y,(ie.item||Y===this._headerRenderer||Y===this._footerRenderer)&&this._runRenderer(Y,te,ie))})}_clearCellContent(Y){Y._content.innerHTML="",delete Y._content._$litPart$}_renderHeaderCellContent(Y,J){!J||!Y||(this.__renderCellsContent(Y,[J]),this._grid&&J.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(J.parentElement))}_onHeaderRendererOrBindingChanged(Y,J,...te){this._renderHeaderCellContent(Y,J)}_renderBodyCellsContent(Y,J){!J||!Y||this.__renderCellsContent(Y,J)}_onRendererOrBindingChanged(Y,J,...te){this._renderBodyCellsContent(Y,J)}_renderFooterCellContent(Y,J){!J||!Y||(this.__renderCellsContent(Y,[J]),this._grid&&J.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(J.parentElement))}_onFooterRendererOrBindingChanged(Y,J){this._renderFooterCellContent(Y,J)}__setTextContent(Y,J){Y.textContent!==J&&(Y.textContent=J)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(Y,J,{item:te}){this.path&&this.__setTextContent(Y,this.get(this.path,te))}_defaultFooterRenderer(){}_computeHeaderRenderer(Y,J){return Y||(J!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(Y){return Y||this._defaultRenderer}_computeFooterRenderer(Y){return Y||this._defaultFooterRenderer}};class GridColumn extends ColumnBaseMixin(DirMixin(PolymerElement)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}customElements.define(GridColumn.is,GridColumn);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */registerStyles("vaadin-grid",i$5`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const A11yMixin=ee=>class extends ee{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(Y){return Y.filter(J=>J.some(te=>te.headerRenderer||te.path||te.header)).length}_a11yGetFooterRowCount(Y){return Y.filter(J=>J.some(te=>te.headerRenderer)).length}_a11yUpdateGridSize(Y,J){if(Y===void 0||J===void 0)return;const te=J[J.length-1];this.$.table.setAttribute("aria-rowcount",Y+this._a11yGetHeaderRowCount(J)+this._a11yGetFooterRowCount(J)),this.$.table.setAttribute("aria-colcount",te&&te.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((Y,J)=>Y.setAttribute("aria-rowindex",J+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((Y,J)=>Y.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+J+1))}_a11yUpdateRowRowindex(Y,J){Y.setAttribute("aria-rowindex",J+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(Y,J){Y.setAttribute("aria-selected",Boolean(J)),Array.from(Y.children).forEach(te=>te.setAttribute("aria-selected",Boolean(J)))}_a11yUpdateRowExpanded(Y){this.__isRowExpandable(Y)?Y.setAttribute("aria-expanded","false"):this.__isRowCollapsible(Y)?Y.setAttribute("aria-expanded","true"):Y.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(Y,J){J>0||this.__isRowCollapsible(Y)||this.__isRowExpandable(Y)?Y.setAttribute("aria-level",J+1):Y.removeAttribute("aria-level")}_a11ySetRowDetailsCell(Y,J){Array.from(Y.children).forEach(te=>{te!==J&&te.setAttribute("aria-controls",J.id)})}_a11yUpdateCellColspan(Y,J){Y.setAttribute("aria-colspan",Number(J))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(Y=>{let J=Y.parentNode;for(;J&&J.localName!=="vaadin-grid-cell-content";)J=J.parentNode;J&&J.assignedSlot&&J.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(Y.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ActiveItemMixin=ee=>class extends ee{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(Y){const J=Y.detail.model,te=J?J.item:null;te&&(this.activeItem=this._itemsEqual(this.activeItem,te)?null:te)}_onClick(Y){if(Y.defaultPrevented)return;const J=Y.composedPath(),te=J[J.indexOf(this.$.table)-3];if(!te||te.getAttribute("part").indexOf("details-cell")>-1)return;const ie=te._content,ae=this.getRootNode().activeElement;!ie.contains(ae)&&!this._isFocusable(Y.target)&&!(Y.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(te.parentElement)}}))}_isFocusable(Y){return isFocusable(Y)}},isFocusable=ee=>{if(!ee.parentNode)return!1;const Y=Array.from(ee.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(J=>{const te=J.getAttribute("part");return!(te&&te.includes("body-cell"))}).includes(ee);return!ee.disabled&&Y&&ee.offsetParent&&getComputedStyle(ee).visibility!=="hidden"};function get(ee,K){return ee.split(".").reduce((Y,J)=>Y[J],K)}function checkPaths(ee,K,Y){if(Y.length===0)return!1;let J=!0;return ee.forEach(({path:te})=>{if(!te||te.indexOf(".")===-1)return;const ie=te.replace(/\.[^.]*$/,"");get(ie,Y[0])===void 0&&(console.warn(`Path "${te}" used for ${K} does not exist in all of the items, ${K} is disabled.`),J=!1)}),J}function multiSort(ee,K){return ee.sort((Y,J)=>K.map(te=>te.direction==="asc"?compare(get(te.path,Y),get(te.path,J)):te.direction==="desc"?compare(get(te.path,J),get(te.path,Y)):0).reduce((te,ie)=>te!==0?te:ie,0))}function normalizeEmptyValue(ee){return[void 0,null].indexOf(ee)>=0?"":isNaN(ee)?ee.toString():ee}function compare(ee,K){return ee=normalizeEmptyValue(ee),K=normalizeEmptyValue(K),ee<K?-1:ee>K?1:0}function filter(ee,K){return ee.filter(Y=>K.every(J=>{const te=normalizeEmptyValue(get(J.path,Y)),ie=normalizeEmptyValue(J.value).toString().toLowerCase();return te.toString().toLowerCase().includes(ie)}))}const createArrayDataProvider=ee=>(K,Y)=>{let J=ee?[...ee]:[];K.filters&&checkPaths(K.filters,"filtering",J)&&(J=filter(J,K.filters)),Array.isArray(K.sortOrders)&&K.sortOrders.length&&checkPaths(K.sortOrders,"sorting",J)&&(J=multiSort(J,K.sortOrders));const te=Math.min(J.length,K.pageSize),ie=K.page*te,ae=ie+te,re=J.slice(ie,ae);Y(re,J.length)};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ArrayDataProviderMixin=ee=>class extends ee{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(Y){const J=createArrayDataProvider(this.items);J.__items=Y,this.setProperties({_arrayDataProvider:J,size:Y.length,dataProvider:J})}__dataProviderOrItemsChanged(Y,J,te){te&&(this._arrayDataProvider?Y!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):J?this._arrayDataProvider.__items===J?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(J):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):J&&this.__setArrayDataProvider(J))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function updateColumnOrders(ee,K,Y){let J=1;ee.forEach(te=>{J%10===0&&(J+=1),te._order=Y+J*K,J+=1})}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ColumnReorderingMixin=ee=>class extends ee{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),addListener(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(Y){this.hasAttribute("reordering")&&(Y.preventDefault(),isTouch||this._onTrackEnd())}_onTouchStart(Y){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:Y.touches[0].clientX,y:Y.touches[0].clientY}})},100)}_onTouchMove(Y){this._draggedColumn&&Y.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(Y){if(Y.detail.state==="start"){const J=Y.composedPath(),te=J[J.indexOf(this.$.header)-2];if(!te||!te._content||te._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(Y)}else Y.detail.state==="track"?this._onTrack(Y):Y.detail.state==="end"&&this._onTrackEnd(Y)}_onTrackStart(Y){if(!this.columnReorderingAllowed)return;const J=Y.composedPath&&Y.composedPath();if(J&&J.some(ie=>ie.hasAttribute&&ie.hasAttribute("draggable")))return;const te=this._cellFromPoint(Y.detail.x,Y.detail.y);if(!(!te||!te.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=te._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(te),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(Y.detail.x,this._touchDevice?Y.detail.y-50:Y.detail.y),this._autoScroller()}}_onTrack(Y){if(!this._draggedColumn)return;const J=this._cellFromPoint(Y.detail.x,Y.detail.y);if(!J)return;const te=this._getTargetColumn(J,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,te)&&this._isSwappableByPosition(te,Y.detail.x)){const ie=this._columnTree.findIndex(ne=>ne.includes(te)),ae=this._getColumnsInOrder(ie),re=ae.indexOf(this._draggedColumn),se=ae.indexOf(te),oe=re<se?1:-1;for(let ne=re;ne!==se;ne+=oe)this._swapColumnOrders(this._draggedColumn,ae[ne+oe])}this._updateGhostPosition(Y.detail.x,this._touchDevice?Y.detail.y-50:Y.detail.y),this._lastDragClientX=Y.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(Y=this._columnTree.length-1){return this._columnTree[Y].filter(J=>!J.hidden).sort((J,te)=>J._order-te._order)}_cellFromPoint(Y,J){Y=Y||0,J=J||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const te=this.shadowRoot.elementFromPoint(Y,J);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),te&&te._column)return te}_updateGhostPosition(Y,J){const te=this._reorderGhost.getBoundingClientRect(),ie=Y-te.width/2,ae=J-te.height/2,re=parseInt(this._reorderGhost._left||0),se=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=re-(te.left-ie),this._reorderGhost._top=se-(te.top-ae),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(Y){const J=this._reorderGhost;J.textContent=Y._content.innerText;const te=window.getComputedStyle(Y);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(ie=>{J.style[ie]=te[ie]}),J}_updateOrders(Y){Y!==void 0&&(Y[0].forEach(J=>{J._order=0}),updateColumnOrders(Y[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(Y,J){Array.from(Y.parentNode.children).filter(te=>/column/.test(te.localName)&&this._isSwapAllowed(te,Y)).forEach(te=>{te._reorderStatus=J})}_autoScroller(){if(this._lastDragClientX){const Y=this._lastDragClientX-this.getBoundingClientRect().right+50,J=this.getBoundingClientRect().left-this._lastDragClientX+50;Y>0?this.$.table.scrollLeft+=Y/10:J>0&&(this.$.table.scrollLeft-=J/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(Y,J){if(Y&&J){const te=Y!==J,ie=Y.parentElement===J.parentElement,ae=Y.frozen&&J.frozen||Y.frozenToEnd&&J.frozenToEnd||!Y.frozen&&!Y.frozenToEnd&&!J.frozen&&!J.frozenToEnd;return te&&ie&&ae}}_isSwappableByPosition(Y,J){const te=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(re=>Y.contains(re._column)),ie=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),ae=te.getBoundingClientRect();return ae.left>ie.left?J>ae.right-ie.width:J<ae.left+ie.width}_swapColumnOrders(Y,J){[Y._order,J._order]=[J._order,Y._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(Y,J){if(Y&&J){let te=Y._column;for(;te.parentElement!==J.parentElement&&te!==this;)te=te.parentElement;return te.parentElement===J.parentElement?te:Y._column}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ColumnResizingMixin=ee=>class extends ee{ready(){super.ready();const Y=this.$.scroller;addListener(Y,"track",this._onHeaderTrack.bind(this)),Y.addEventListener("touchmove",J=>Y.hasAttribute("column-resizing")&&J.preventDefault()),Y.addEventListener("contextmenu",J=>J.target.getAttribute("part")==="resize-handle"&&J.preventDefault()),Y.addEventListener("mousedown",J=>J.target.getAttribute("part")==="resize-handle"&&J.preventDefault())}_onHeaderTrack(Y){const J=Y.target;if(J.getAttribute("part")==="resize-handle"){let ie=J.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);ie.localName==="vaadin-grid-column-group";)ie=ie._childColumns.slice(0).sort((ne,le)=>ne._order-le._order).filter(ne=>!ne.hidden).pop();const ae=Y.detail.x,re=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),se=re.find(ne=>ne._column===ie);if(se.offsetWidth){const ne=getComputedStyle(se._content),le=10+parseInt(ne.paddingLeft)+parseInt(ne.paddingRight)+parseInt(ne.borderLeftWidth)+parseInt(ne.borderRightWidth)+parseInt(ne.marginLeft)+parseInt(ne.marginRight);let he;const de=se.offsetWidth,ce=se.getBoundingClientRect();se.hasAttribute("frozen-to-end")?he=de+(this.__isRTL?ae-ce.right:ce.left-ae):he=de+(this.__isRTL?ce.left-ae:ae-ce.right),ie.width=`${Math.max(le,he)}px`,ie.flexGrow=0}re.sort((ne,le)=>ne._column._order-le._column._order).forEach((ne,le,he)=>{le<he.indexOf(se)&&(ne._column.width=`${ne.offsetWidth}px`,ne._column.flexGrow=0)});const oe=this._frozenToEndCells[0];if(oe&&this.$.table.scrollWidth>this.$.table.offsetWidth){const ne=oe.getBoundingClientRect(),le=ae-(this.__isRTL?ne.right:ne.left);(this.__isRTL&&le<=0||!this.__isRTL&&le>=0)&&(this.$.table.scrollLeft+=le)}Y.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:ie}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ItemCache=class Te{constructor(K,Y,J){this.grid=K,this.parentCache=Y,this.parentItem=J,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(K=>this.itemCaches[K].isLoading())[0])}getItemForIndex(K){const{cache:Y,scaledIndex:J}=this.getCacheAndIndex(K);return Y.items[J]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((K,Y)=>{const J=this.itemCaches[Y];return J.updateSize(),K+J.effectiveSize},0):0}ensureSubCacheForScaledIndex(K){if(!this.itemCaches[K]){const Y=new Te(this.grid,this,this.items[K]);this.itemCaches[K]=Y,this.grid._loadPage(0,Y)}}getCacheAndIndex(K){let Y=K;const J=Object.keys(this.itemCaches);for(let te=0;te<J.length;te++){const ie=Number(J[te]),ae=this.itemCaches[ie];if(Y<=ie)return{cache:this,scaledIndex:Y};if(Y<=ie+ae.effectiveSize)return ae.getCacheAndIndex(Y-ie-1);Y-=ae.effectiveSize}return{cache:this,scaledIndex:Y}}},DataProviderMixin=ee=>class extends ee{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new ItemCache(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(Y){const J=Y-this._cache.size;this._cache.size+=J,this._cache.effectiveSize+=J,this._effectiveSize=this._cache.effectiveSize}_getItem(Y,J){if(Y>=this._effectiveSize)return;J.index=Y;const{cache:te,scaledIndex:ie}=this._cache.getCacheAndIndex(Y),ae=te.items[ie];ae?(J.toggleAttribute("loading",!1),this._updateItem(J,ae),this._isExpanded(ae)&&te.ensureSubCacheForScaledIndex(ie)):(J.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(ie),te))}getItemId(Y){return this.itemIdPath?this.get(this.itemIdPath,Y):Y}_isExpanded(Y){return this.__expandedKeys.has(this.getItemId(Y))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(Y,J){const te=J.base||[],ie=new Set;return te.forEach(ae=>{ie.add(this.getItemId(ae))}),ie}expandItem(Y){this._isExpanded(Y)||(this.expandedItems=[...this.expandedItems,Y])}collapseItem(Y){this._isExpanded(Y)&&(this.expandedItems=this.expandedItems.filter(J=>!this._itemsEqual(J,Y)))}_getIndexLevel(Y){let{cache:J}=this._cache.getCacheAndIndex(Y),te=0;for(;J.parentCache;)J=J.parentCache,te+=1;return te}_loadPage(Y,J){if(!J.pendingRequests[Y]&&this.dataProvider){this._setLoading(!0),J.pendingRequests[Y]=!0;const te={page:Y,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:J.parentItem};this.dataProvider(te,(ie,ae)=>{ae!==void 0?J.size=ae:te.parentItem&&(J.size=ie.length);const re=Array.from(this.$.items.children).map(se=>se._item);ie.forEach((se,oe)=>{const ne=Y*this.pageSize+oe;J.items[ne]=se,this._isExpanded(se)&&re.indexOf(se)>-1&&J.ensureSubCacheForScaledIndex(ne)}),this._hasData=!0,delete J.pendingRequests[Y],this._debouncerApplyCachedData=Debouncer$1.debounce(this._debouncerApplyCachedData,timeOut.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(se=>!se.hidden).forEach(se=>{this._cache.getItemForIndex(se.index)&&this._getItem(se.index,se)}),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(Y){return Math.floor(Y/this.pageSize)}clearCache(){this._cache=new ItemCache(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(Y,J){J!==void 0&&Y!==J&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(Y,J){J!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Debouncer$1.debounce(this._debouncerCheckSize,timeOut.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(Y,J){return this.getItemId(Y)===this.getItemId(J)}_getItemIndexInArray(Y,J){let te=-1;return J.forEach((ie,ae)=>{this._itemsEqual(ie,Y)&&(te=ae)}),te}scrollToIndex(Y){super.scrollToIndex(Y),!isNaN(Y)&&(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndex=Y)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const Y=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(Y)}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const DropMode={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},DropLocation={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},usesDnDPolyfill=!("draggable"in document.createElement("div")),DragAndDropMixin=ee=>class extends ee{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",Y=>{this.dropMode&&(Y.preventDefault(),Y.stopPropagation())})}_onDragStart(Y){if(this.rowsDraggable){let J=Y.target;if(J.localName==="vaadin-grid-cell-content"&&(J=J.assignedSlot.parentNode.parentNode),J.parentNode!==this.$.items)return;if(Y.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const re=J.style.transform;J.style.top=/translateY\((.*)\)/.exec(re)[1],J.style.transform="none",requestAnimationFrame(()=>{J.style.top="",J.style.transform=re})}const te=J.getBoundingClientRect();usesDnDPolyfill?Y.dataTransfer.setDragImage(J):Y.dataTransfer.setDragImage(J,Y.clientX-te.left,Y.clientY-te.top);let ie=[J];this._isSelected(J._item)&&(ie=this.__getViewportRows().filter(re=>this._isSelected(re._item)).filter(re=>!this.dragFilter||this.dragFilter(this.__getRowModel(re)))),Y.dataTransfer.setData("text",this.__formatDefaultTransferData(ie)),J.setAttribute("dragstart",ie.length>1?ie.length:""),this.style.setProperty("--_grid-drag-start-x",`${Y.clientX-te.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${Y.clientY-te.top+10}px`),requestAnimationFrame(()=>{J.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const ae=new CustomEvent("grid-dragstart",{detail:{draggedItems:ie.map(re=>re._item),setDragData:(re,se)=>Y.dataTransfer.setData(re,se),setDraggedItemsCount:re=>J.setAttribute("dragstart",re)}});ae.originalEvent=Y,this.dispatchEvent(ae)}}_onDragEnd(Y){this.toggleAttribute("dragging-rows",!1),Y.stopPropagation();const J=new CustomEvent("grid-dragend");J.originalEvent=Y,this.dispatchEvent(J)}_onDragLeave(Y){Y.stopPropagation(),this._clearDragStyles()}_onDragOver(Y){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(Y.clientY)){this._clearDragStyles();return}let J=Y.composedPath().find(te=>te.localName==="tr");if(!this._effectiveSize||this.dropMode===DropMode.ON_GRID)this._dropLocation=DropLocation.EMPTY;else if(!J||J.parentNode!==this.$.items){if(J)return;if(this.dropMode===DropMode.BETWEEN||this.dropMode===DropMode.ON_TOP_OR_BETWEEN)J=Array.from(this.$.items.children).filter(te=>!te.hidden).pop(),this._dropLocation=DropLocation.BELOW;else return}else{const te=J.getBoundingClientRect();if(this._dropLocation=DropLocation.ON_TOP,this.dropMode===DropMode.BETWEEN){const ie=Y.clientY-te.top<te.bottom-Y.clientY;this._dropLocation=ie?DropLocation.ABOVE:DropLocation.BELOW}else this.dropMode===DropMode.ON_TOP_OR_BETWEEN&&(Y.clientY-te.top<te.height/3?this._dropLocation=DropLocation.ABOVE:Y.clientY-te.top>te.height/3*2&&(this._dropLocation=DropLocation.BELOW))}if(J&&J.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}Y.stopPropagation(),Y.preventDefault(),this._dropLocation===DropLocation.EMPTY?this.toggleAttribute("dragover",!0):J?(this._dragOverItem=J._item,J.getAttribute("dragover")!==this._dropLocation&&J.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(Y){if(this.__dndAutoScrolling)return!0;const J=this.$.header.getBoundingClientRect().bottom,te=this.$.footer.getBoundingClientRect().top,ie=J-Y+this.__dndAutoScrollThreshold,ae=Y-te+this.__dndAutoScrollThreshold;let re=0;if(ae>0?re=ae*2:ie>0&&(re=-ie*2),re){const se=this.$.table.scrollTop;if(this.$.table.scrollTop+=re,se!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const Y=this.$.header.getBoundingClientRect().bottom,J=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(te=>{const ie=te.getBoundingClientRect();return ie.bottom>Y&&ie.top<J})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(Y=>Y.removeAttribute("dragover"))}_onDrop(Y){if(this.dropMode){Y.stopPropagation(),Y.preventDefault();const J=Y.dataTransfer.types&&Array.from(Y.dataTransfer.types).map(ie=>({type:ie,data:Y.dataTransfer.getData(ie)}));this._clearDragStyles();const te=new CustomEvent("grid-drop",{bubbles:Y.bubbles,cancelable:Y.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:J}});te.originalEvent=Y,this.dispatchEvent(te)}}__formatDefaultTransferData(Y){return Y.map(J=>Array.from(J.children).filter(te=>!te.hidden&&te.getAttribute("part").indexOf("details-cell")===-1).sort((te,ie)=>te._column._order>ie._column._order?1:-1).map(te=>te._content.textContent.trim()).filter(te=>te).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(Y=>!Y.hidden).forEach(Y=>{this._filterDragAndDrop(Y,this.__getRowModel(Y))})}_filterDragAndDrop(Y,J){const te=this.loading||Y.hasAttribute("loading"),ie=!this.rowsDraggable||te||this.dragFilter&&!this.dragFilter(J),ae=!this.dropMode||te||this.dropFilter&&!this.dropFilter(J);Array.from(Y.children).map(se=>se._content).forEach(se=>{ie?se.removeAttribute("draggable"):se.setAttribute("draggable",!0)}),Y.toggleAttribute("drag-disabled",!!ie),Y.toggleAttribute("drop-disabled",!!ae)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function arrayEquals(ee,K){if(!ee||!K||ee.length!==K.length)return!1;for(let Y=0,J=ee.length;Y<J;Y++)if(ee[Y]instanceof Array&&K[Y]instanceof Array){if(!arrayEquals(ee[Y],K[Y]))return!1}else if(ee[Y]!==K[Y])return!1;return!0}const DynamicColumnsMixin=ee=>class extends ee{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(Y){for(let J=0;J<Y.length;J++)if(Y[J].localName==="vaadin-grid-column-group")return!0;return!1}_getChildColumns(Y){return FlattenedNodesObserver.getFlattenedNodes(Y).filter(this._isColumnElement)}_flattenColumnGroups(Y){return Y.map(J=>J.localName==="vaadin-grid-column-group"?this._getChildColumns(J):[J]).reduce((J,te)=>J.concat(te),[])}_getColumnTree(){const Y=FlattenedNodesObserver.getFlattenedNodes(this).filter(this._isColumnElement),J=[Y];let te=Y;for(;this._hasColumnGroups(te);)te=this._flattenColumnGroups(te),J.push(te);return J}_updateColumnTree(){const Y=this._getColumnTree();arrayEquals(Y,this._columnTree)||(this._columnTree=Y)}_addNodeObserver(){this._observer=new FlattenedNodesObserver(this,Y=>{const J=te=>te.filter(this._isColumnElement).length>0;if(J(Y.addedNodes)||J(Y.removedNodes)){const te=Y.removedNodes.flatMap(ae=>ae._allCells),ie=ae=>te.filter(re=>re._content.contains(ae)).length;this.__removeSorters(this._sorters.filter(ie)),this.__removeFilters(this._filters.filter(ie)),this._updateColumnTree()}this._debouncerCheckImports=Debouncer$1.debounce(this._debouncerCheckImports,timeOut.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(Y=>{const J=this.querySelector(Y);J&&!(J instanceof PolymerElement)&&console.warn(`Make sure you have imported the required module for <${Y}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(Y=>this._updateFirstAndLastColumnForRow(Y))}_updateFirstAndLastColumnForRow(Y){Array.from(Y.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((J,te)=>J._column._order-te._column._order).forEach((J,te,ie)=>{J.toggleAttribute("first-column",te===0),J.toggleAttribute("last-column",te===ie.length-1)})}_isColumnElement(Y){return Y.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(Y.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const EventContextMixin=ee=>class extends ee{getEventContext(Y){const J={},te=Y.__composedPath||Y.composedPath(),ie=te[te.indexOf(this.$.table)-3];return ie&&(J.section=["body","header","footer","details"].find(ae=>ie.getAttribute("part").indexOf(ae)>-1),ie._column&&(J.column=ie._column),(J.section==="body"||J.section==="details")&&Object.assign(J,this.__getRowModel(ie.parentElement))),J}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const FilterMixin=ee=>class extends ee{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(Y){Y.stopPropagation(),this.__addFilter(Y.target),this.__applyFilters()}__removeFilters(Y){Y.length!==0&&(this._filters=this._filters.filter(J=>Y.indexOf(J)<0),this.__applyFilters())}__addFilter(Y){this._filters.indexOf(Y)===-1&&this._filters.push(Y)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(Y=>({path:Y.path,value:Y.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const KeyboardNavigationMixin=ee=>class extends ee{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(Y){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(J=>{const te=this[J];if(Y){const ie=te&&te.parentElement;this.__isCell(te)?this[J]=ie:this.__isCell(ie)&&(this[J]=ie.parentElement)}else if(!Y&&this.__isRow(te)){const ie=te.firstElementChild;this[J]=ie._focusButton||ie}})}_focusableChanged(Y,J){J&&J.setAttribute("tabindex","-1"),Y&&this._updateGridSectionFocusTarget(Y)}_focusedCellChanged(Y,J){J&&removeValueFromAttribute(J,"part","focused-cell"),Y&&addValueToAttribute(Y,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const Y=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(J=>{if(J.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=J;else{let te=this._itemsFocusable.parentElement,ie=this._itemsFocusable;if(te){this.__isCell(te)&&(ie=te,te=te.parentElement);const ae=[...te.children].indexOf(ie);this._itemsFocusable=this.__getFocusable(J,J.children[ae])}}}),Y&&this._itemsFocusable.focus()}_onKeyDown(Y){const J=Y.key;let te;switch(J){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":te="Navigation";break;case"Enter":case"Escape":case"F2":te="Interaction";break;case"Tab":te="Tab";break;case" ":te="Space";break}this._detectInteracting(Y),this.interacting&&te!=="Interaction"&&(te=void 0),te&&this[`_on${te}KeyDown`](Y,J)}_ensureScrolledToIndex(Y){[...this.$.items.children].find(te=>te.index===Y)?this.__scrollIntoViewport(Y):this.scrollToIndex(Y)}__isRowExpandable(Y){if(this.itemHasChildrenPath){const J=Y._item;return J&&this.get(this.itemHasChildrenPath,J)&&!this._isExpanded(J)}}__isRowCollapsible(Y){return this._isExpanded(Y._item)}__isDetailsCell(Y){return Y.matches('[part~="details-cell"]')}__isCell(Y){return Y instanceof HTMLTableCellElement}__isRow(Y){return Y instanceof HTMLTableRowElement}__getIndexOfChildElement(Y){return Array.prototype.indexOf.call(Y.parentNode.children,Y)}_onNavigationKeyDown(Y,J){Y.preventDefault();const te=this._lastVisibleIndex-this._firstVisibleIndex-1;let ie=0,ae=0;switch(J){case"ArrowRight":ie=this.__isRTL?-1:1;break;case"ArrowLeft":ie=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||Y.ctrlKey?ae=-1/0:ie=-1/0;break;case"End":this.__rowFocusMode||Y.ctrlKey?ae=1/0:ie=1/0;break;case"ArrowDown":ae=1;break;case"ArrowUp":ae=-1;break;case"PageDown":ae=te;break;case"PageUp":ae=-te;break}const re=Y.composedPath().find(le=>this.__isRow(le)),se=Y.composedPath().find(le=>this.__isCell(le));if(this.__rowFocusMode&&!re||!this.__rowFocusMode&&!se)return;const oe=this.__isRTL?"ArrowLeft":"ArrowRight",ne=this.__isRTL?"ArrowRight":"ArrowLeft";if(J===oe){if(this.__rowFocusMode){if(this.__isRowExpandable(re)){this.expandItem(re._item);return}this.__rowFocusMode=!1,this._onCellNavigation(re.firstElementChild,0,0);return}}else if(J===ne)if(this.__rowFocusMode){if(this.__isRowCollapsible(re)){this.collapseItem(re._item);return}}else{const le=[...re.children].sort((he,de)=>he._order-de._order);if(se===le[0]||this.__isDetailsCell(se)){this.__rowFocusMode=!0,this._onRowNavigation(re,0);return}}this.__rowFocusMode?this._onRowNavigation(re,ae):this._onCellNavigation(se,ie,ae)}_onRowNavigation(Y,J){const{dstRow:te}=this.__navigateRows(J,Y);te&&te.focus()}__getIndexInGroup(Y,J){return Y.parentNode===this.$.items?J!==void 0?J:Y.index:this.__getIndexOfChildElement(Y)}__navigateRows(Y,J,te){const ie=this.__getIndexInGroup(J,this._focusedItemIndex),ae=J.parentNode,re=(ae===this.$.items?this._effectiveSize:ae.children.length)-1;let se=Math.max(0,Math.min(ie+Y,re));if(ae!==this.$.items){if(se>ie)for(;se<re&&ae.children[se].hidden;)se+=1;else if(se<ie)for(;se>0&&ae.children[se].hidden;)se-=1;return this.toggleAttribute("navigating",!0),{dstRow:ae.children[se]}}let oe=!1;if(te){const ne=this.__isDetailsCell(te);if(ae===this.$.items){const le=J._item,he=this._cache.getItemForIndex(se);ne?oe=Y===0:oe=Y===1&&this._isDetailsOpened(le)||Y===-1&&se!==ie&&this._isDetailsOpened(he),oe!==ne&&(Y===1&&oe||Y===-1&&!oe)&&(se=ie)}}return this._ensureScrolledToIndex(se),this._focusedItemIndex=se,this.toggleAttribute("navigating",!0),{dstRow:[...ae.children].find(ne=>!ne.hidden&&ne.index===se),dstIsRowDetails:oe}}_onCellNavigation(Y,J,te){const ie=Y.parentNode,{dstRow:ae,dstIsRowDetails:re}=this.__navigateRows(te,ie,Y);if(!ae)return;const se=this.__getIndexOfChildElement(Y),oe=this.__isDetailsCell(Y),ne=ie.parentNode,le=this.__getIndexInGroup(ie,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(oe?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(ne,le).filter(he=>!he.hidden)[se]._order),re)[...ae.children].find(de=>this.__isDetailsCell(de)).focus();else{const he=this.__getIndexInGroup(ae,this._focusedItemIndex),de=this._getColumns(ne,he).filter(_e=>!_e.hidden),ce=de.map(_e=>_e._order).sort((_e,be)=>_e-be),pe=ce.length-1,ve=ce.indexOf(ce.slice(0).sort((_e,be)=>Math.abs(_e-this._focusedColumnOrder)-Math.abs(be-this._focusedColumnOrder))[0]),ue=te===0&&oe?ve:Math.max(0,Math.min(ve+J,pe));ue!==ve&&(this._focusedColumnOrder=void 0);const fe=de.reduce((_e,be,Me)=>(_e[be._order]=Me,_e),{})[ce[ue]],ge=ae.children[fe];this._scrollHorizontallyToCell(ge),ge.focus()}}_onInteractionKeyDown(Y,J){const te=Y.composedPath()[0],ie=te.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(te.type);let ae;switch(J){case"Enter":ae=this.interacting?!ie:!0;break;case"Escape":ae=!1;break;case"F2":ae=!this.interacting;break}const{cell:re}=this._getGridEventLocation(Y);if(this.interacting!==ae&&re!==null)if(ae){const se=re._content.querySelector("[focus-target]")||[...re._content.querySelectorAll("*")].find(oe=>this._isFocusable(oe));se&&(Y.preventDefault(),se.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else Y.preventDefault(),this._focusedColumnOrder=void 0,re.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);J==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(Y,J){const te=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let ie=te.indexOf(Y);for(ie+=J;ie>=0&&ie<=te.length-1;){let ae=te[ie];if(ae&&!this.__rowFocusMode&&(ae=te[ie].parentNode),!ae||ae.hidden)ie+=J;else break}return te[ie]}_onTabKeyDown(Y){const J=this._predictFocusStepTarget(Y.composedPath()[0],Y.shiftKey?-1:1);if(J){if(Y.stopPropagation(),J===this.$.table)this.$.table.focus();else if(J===this.$.focusexit)this.$.focusexit.focus();else if(J===this._itemsFocusable){let te=J;const ie=this.__isRow(J)?J:J.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),ie.index!==this._focusedItemIndex&&this.__isCell(J)){const ae=Array.from(ie.children).indexOf(this._itemsFocusable),re=Array.from(this.$.items.children).find(se=>!se.hidden&&se.index===this._focusedItemIndex);re&&(te=re.children[ae])}Y.preventDefault(),te.focus()}else Y.preventDefault(),J.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(Y){Y.preventDefault();const J=Y.composedPath()[0],te=this.__isRow(J);(te||!J._content||!J._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(te?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(te?J:J.parentElement)}}))}_onKeyUp(Y){if(!/^( |SpaceBar)$/.test(Y.key)||this.interacting)return;Y.preventDefault();const J=Y.composedPath()[0];if(J._content&&J._content.firstElementChild){const te=this.hasAttribute("navigating");J._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:Y.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",te)}}_onFocusIn(Y){this._isMousedown||this.toggleAttribute("navigating",!0);const J=Y.composedPath()[0];J===this.$.table||J===this.$.focusexit?(this._predictFocusStepTarget(J,J===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(Y)}_onFocusOut(Y){this.toggleAttribute("navigating",!1),this._detectInteracting(Y),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(Y){const{section:J,cell:te,row:ie}=this._getGridEventLocation(Y);if(!(!te&&!this.__rowFocusMode)){if(this._detectInteracting(Y),J&&(te||ie))if(this._activeRowGroup=J,this.$.header===J?this._headerFocusable=this.__getFocusable(ie,te):this.$.items===J?this._itemsFocusable=this.__getFocusable(ie,te):this.$.footer===J&&(this._footerFocusable=this.__getFocusable(ie,te)),te){const ae=this.getEventContext(Y);te.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:ae}})),this._focusedCell=te._focusButton||te,isKeyboardActive()&&Y.target===te&&this._showTooltip(Y)}else this._focusedCell=null;this._detectFocusedItemIndex(Y)}}__getFocusable(Y,J){return this.__rowFocusMode?Y:J._focusButton||J}_detectInteracting(Y){const J=Y.composedPath().some(te=>te.localName==="vaadin-grid-cell-content");this._setInteracting(J),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(Y){const{section:J,row:te}=this._getGridEventLocation(Y);J===this.$.items&&(this._focusedItemIndex=te.index)}_updateGridSectionFocusTarget(Y){if(!Y)return;const J=this._getGridSectionFromFocusTarget(Y),te=this.interacting&&J===this._activeRowGroup;Y.tabIndex=te?-1:0}_preventScrollerRotatingCellFocus(Y,J){Y.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),J===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(Y,J){let te=this._columnTree.length-1;return Y===this.$.header?te=J:Y===this.$.footer&&(te=this._columnTree.length-1-J),this._columnTree[te]}__isValidFocusable(Y){return this.$.table.contains(Y)&&Y.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(Y=>{if(!this.__isValidFocusable(this[`_${Y}Focusable`])){const J=[...this.$[Y].children].find(ie=>ie.offsetHeight),te=J?[...J.children].find(ie=>!ie.hidden):null;J&&te&&(this[`_${Y}Focusable`]=this.__getFocusable(J,te))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const Y=this.__getFirstVisibleItem(),J=Y?[...Y.children].find(te=>!te.hidden):null;J&&Y&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(Y,J))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(Y){if(Y.hasAttribute("frozen")||Y.hasAttribute("frozen-to-end")||this.__isDetailsCell(Y))return;const J=Y.getBoundingClientRect(),te=Y.parentNode,ie=Array.from(te.children).indexOf(Y),ae=this.$.table.getBoundingClientRect();let re=ae.left,se=ae.right;for(let oe=ie-1;oe>=0;oe--){const ne=te.children[oe];if(!(ne.hasAttribute("hidden")||this.__isDetailsCell(ne))&&(ne.hasAttribute("frozen")||ne.hasAttribute("frozen-to-end"))){re=ne.getBoundingClientRect().right;break}}for(let oe=ie+1;oe<te.children.length;oe++){const ne=te.children[oe];if(!(ne.hasAttribute("hidden")||this.__isDetailsCell(ne))&&(ne.hasAttribute("frozen")||ne.hasAttribute("frozen-to-end"))){se=ne.getBoundingClientRect().left;break}}J.left<re&&(this.$.table.scrollLeft+=Math.round(J.left-re)),J.right>se&&(this.$.table.scrollLeft+=Math.round(J.right-se))}_getGridEventLocation(Y){const J=Y.composedPath(),te=J.indexOf(this.$.table),ie=te>=1?J[te-1]:null,ae=te>=2?J[te-2]:null,re=te>=3?J[te-3]:null;return{section:ie,row:ae,cell:re}}_getGridSectionFromFocusTarget(Y){return Y===this._headerFocusable?this.$.header:Y===this._itemsFocusable?this.$.items:Y===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const RowDetailsMixin=ee=>class extends ee{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(Y=>{Y.forEach(({target:J})=>{this._updateDetailsCellHeight(J.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(Y){Y&&this._columnTree&&Array.from(this.$.items.children).forEach(J=>{if(!J.querySelector("[part~=details-cell]")){this._updateRow(J,this._columnTree[this._columnTree.length-1]);const te=this._isDetailsOpened(J._item);this._toggleDetailsCell(J,te)}})}_detailsOpenedItemsChanged(Y,J){Y.path==="detailsOpenedItems.length"||!Y.value||[...this.$.items.children].forEach(te=>{if(te.hasAttribute("details-opened")){this._updateItem(te,te._item);return}J&&this._isDetailsOpened(te._item)&&this._updateItem(te,te._item)})}_configureDetailsCell(Y){Y.setAttribute("part","cell details-cell"),Y.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(Y)}_toggleDetailsCell(Y,J){const te=Y.querySelector('[part~="details-cell"]');te&&(te.hidden=!J,!te.hidden&&this.rowDetailsRenderer&&(te._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(Y){const J=Y.querySelector('[part~="details-cell"]');J&&(J.hidden?Y.style.removeProperty("padding-bottom"):Y.style.setProperty("padding-bottom",`${J.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach(Y=>{this._updateDetailsCellHeight(Y)})}_isDetailsOpened(Y){return this.detailsOpenedItems&&this._getItemIndexInArray(Y,this.detailsOpenedItems)!==-1}openItemDetails(Y){this._isDetailsOpened(Y)||(this.detailsOpenedItems=[...this.detailsOpenedItems,Y])}closeItemDetails(Y){this._isDetailsOpened(Y)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(J=>!this._itemsEqual(J,Y)))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const timeouts={SCROLLING:500},ScrollMixin=ee=>class extends ResizeMixin(ee){static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(Y){this.$.table.scrollTop=Y}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",Y=>{const J=Y.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=Y.composedPath()[J-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){this._updateOverflow(),this.__updateHorizontalScrollPosition()}scrollToIndex(Y){Y=Math.min(this._effectiveSize-1,Math.max(0,Y)),this.__virtualizer.scrollToIndex(Y),this.__scrollIntoViewport(Y)}__scrollIntoViewport(Y){const J=[...this.$.items.children].find(te=>te.index===Y);if(J){const te=J.getBoundingClientRect(),ie=this.$.footer.getBoundingClientRect().top,ae=this.$.header.getBoundingClientRect().bottom;te.bottom>ie?this.$.table.scrollTop+=te.bottom-ie:te.top<ae&&(this.$.table.scrollTop-=ae-te.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=Debouncer$1.debounce(this._debounceScrolling,timeOut.after(timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow()}_updateOverflow(){let Y="";const J=this.$.table;J.scrollTop<J.scrollHeight-J.clientHeight&&(Y+=" bottom"),J.scrollTop>0&&(Y+=" top");const te=this.__getNormalizedScrollLeft(J);te>0&&(Y+=" start"),te<J.scrollWidth-J.clientWidth&&(Y+=" end"),this.__isRTL&&(Y=Y.replace(/start|end/gi,ie=>ie==="start"?"end":"start")),J.scrollLeft<J.scrollWidth-J.clientWidth&&(Y+=" right"),J.scrollLeft>0&&(Y+=" left"),this._debounceOverflow=Debouncer$1.debounce(this._debounceOverflow,animationFrame,()=>{const ie=Y.trim();ie.length>0&&this.getAttribute("overflow")!==ie?this.setAttribute("overflow",ie):ie.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_frozenCellsChanged(){this._debouncerCacheElements=Debouncer$1.debounce(this._debouncerCacheElements,microTask,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(Y=>{Y.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=Debouncer$1.debounce(this.__debounceUpdateFrozenColumn,microTask,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const Y=this._columnTree[this._columnTree.length-1].slice(0);Y.sort((ie,ae)=>ie._order-ae._order);let J,te;for(let ie=0;ie<Y.length;ie++){const ae=Y[ie];ae._lastFrozen=!1,ae._firstFrozenToEnd=!1,te===void 0&&ae.frozenToEnd&&!ae.hidden&&(te=ie),ae.frozen&&!ae.hidden&&(J=ie)}J!==void 0&&(Y[J]._lastFrozen=!0),te!==void 0&&(Y[te]._firstFrozenToEnd=!0)}__updateHorizontalScrollPosition(){const Y=this.$.table.scrollWidth,J=this.$.table.clientWidth,te=Math.max(0,this.$.table.scrollLeft),ie=this.__getNormalizedScrollLeft(this.$.table),ae=`translate(${-te}px, 0)`;this.$.header.style.transform=ae,this.$.footer.style.transform=ae,this.$.items.style.transform=ae;const re=this.__isRTL?ie+J-Y:te,se=`translate(${re}px, 0)`;for(let le=0;le<this._frozenCells.length;le++)this._frozenCells[le].style.transform=se;const ne=`translate(${this.__isRTL?ie:te+J-Y}px, 0)`;for(let le=0;le<this._frozenToEndCells.length;le++)this._frozenToEndCells[le].style.transform=ne;this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-re}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const SelectionMixin=ee=>class extends ee{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(Y){return this.__selectedKeys.has(this.getItemId(Y))}selectItem(Y){this._isSelected(Y)||(this.selectedItems=[...this.selectedItems,Y])}deselectItem(Y){this._isSelected(Y)&&(this.selectedItems=this.selectedItems.filter(J=>!this._itemsEqual(J,Y)))}_toggleItem(Y){this._isSelected(Y)?this.deselectItem(Y):this.selectItem(Y)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(Y,J){const te=J.base||[],ie=new Set;return te.forEach(ae=>{ie.add(this.getItemId(ae))}),ie}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let defaultMultiSortPriority="prepend";const SortMixin=ee=>class extends ee{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>defaultMultiSortPriority},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(Y){defaultMultiSortPriority=["append","prepend"].includes(Y)?Y:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(Y){const J=Y.target;Y.stopPropagation(),J._grid=this,this.__updateSorter(J,Y.detail.shiftClick,Y.detail.fromSorterClick),this.__applySorters()}__removeSorters(Y){Y.length!==0&&(this._sorters=this._sorters.filter(J=>Y.indexOf(J)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((Y,J)=>{Y._order=this._sorters.length>1?J:null})}__appendSorter(Y){Y.direction?this._sorters.includes(Y)||this._sorters.push(Y):this._removeArrayItem(this._sorters,Y),this.__updateSortOrders()}__prependSorter(Y){this._removeArrayItem(this._sorters,Y),Y.direction&&this._sorters.unshift(Y),this.__updateSortOrders()}__updateSorter(Y,J,te){if(!(!Y.direction&&this._sorters.indexOf(Y)===-1)){if(Y._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!te)||this.multiSortOnShiftClick&&J)this.multiSortPriority==="append"?this.__appendSorter(Y):this.__prependSorter(Y);else if(Y.direction||this.multiSortOnShiftClick){const ie=this._sorters.filter(ae=>ae!==Y);this._sorters=Y.direction?[Y]:[],ie.forEach(ae=>{ae._order=null,ae.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(Y=>({path:Y.path,direction:Y.direction}))}_removeArrayItem(Y,J){const te=Y.indexOf(J);te>-1&&Y.splice(te,1)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const StylingMixin=ee=>class extends ee{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(Y=>!Y.hidden&&!Y.hasAttribute("loading")).forEach(Y=>this._generateCellClassNames(Y,this.__getRowModel(Y)))}_generateCellClassNames(Y,J){Array.from(Y.children).forEach(te=>{if(te.__generatedClasses&&te.__generatedClasses.forEach(ie=>te.classList.remove(ie)),this.cellClassNameGenerator){const ie=this.cellClassNameGenerator(te._column,J);te.__generatedClasses=ie&&ie.split(" ").filter(ae=>ae.length>0),te.__generatedClasses&&te.__generatedClasses.forEach(ae=>te.classList.add(ae))}})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Grid extends ElementMixin(ThemableMixin(DataProviderMixin(ArrayDataProviderMixin(DynamicColumnsMixin(ActiveItemMixin(ScrollMixin(SelectionMixin(SortMixin(RowDetailsMixin(KeyboardNavigationMixin(A11yMixin(FilterMixin(ColumnReorderingMixin(ColumnResizingMixin(ControllerMixin(EventContextMixin(DragAndDropMixin(StylingMixin(TabindexMixin(PolymerElement)))))))))))))))))))){static get template(){return html`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:isSafari},_ios:{type:Boolean,value:isIOS},_firefox:{type:Boolean,value:isFirefox},_android:{type:Boolean,value:isAndroid},_touchDevice:{type:Boolean,value:isTouch},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getVisibleRows().find(K=>this._isInViewport(K))}get _firstVisibleIndex(){const K=this.__getFirstVisibleItem();return K?K.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(K=>this._isInViewport(K))}get _lastVisibleIndex(){const K=this.__getLastVisibleItem();return K?K.index:void 0}_isInViewport(K){const Y=this.$.table.getBoundingClientRect(),J=K.getBoundingClientRect(),te=this.$.header.getBoundingClientRect().height,ie=this.$.footer.getBoundingClientRect().height;return J.bottom>Y.top+te&&J.top<Y.bottom-ie}_getVisibleRows(){return Array.from(this.$.items.children).filter(K=>!K.hidden).sort((K,Y)=>K.index-Y.index)}ready(){super.ready(),this.__virtualizer=new Virtualizer({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer),processTemplates(this),this._tooltipController=new TooltipController(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}attributeChangedCallback(K,Y,J){super.attributeChangedCallback(K,Y,J),K==="dir"&&(this.__isRTL=J==="rtl")}__getBodyCellCoordinates(K){if(this.$.items.contains(K)&&K.localName==="td")return{item:K.parentElement._item,column:K._column}}__focusBodyCell({item:K,column:Y}){const J=this._getVisibleRows().find(ie=>ie._item===K),te=J&&[...J.children].find(ie=>ie._column===Y);te&&te.focus()}_effectiveSizeChanged(K,Y,J,te){if(Y&&J&&te){const ie=this.shadowRoot.activeElement,ae=this.__getBodyCellCoordinates(ie);Y.size=K,Y.update(),Y.flush(),ae&&ie.parentElement.hidden&&this.__focusBodyCell(ae),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(K=>K.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(K){if(this.__intrinsicWidthCache.has(K))return this.__intrinsicWidthCache.get(K);const Y=this.__calculateIntrinsicWidth(K);return this.__intrinsicWidthCache.set(K,Y),Y}__calculateIntrinsicWidth(K){const Y=K.width,J=K.flexGrow;K.width="auto",K.flexGrow=0;const te=K._allCells.filter(ie=>!this.$.items.contains(ie)||this._isInViewport(ie.parentElement)).reduce((ie,ae)=>Math.max(ie,ae.offsetWidth+1),0);return K.flexGrow=J,K.width=Y,te}__getDistributedWidth(K,Y){if(K==null||K===this)return 0;const J=Math.max(this.__getIntrinsicWidth(K),this.__getDistributedWidth(K.parentElement,K));if(!Y)return J;const te=K,ie=J,ae=te._visibleChildColumns.map(ne=>this.__getIntrinsicWidth(ne)).reduce((ne,le)=>ne+le,0),re=Math.max(0,ie-ae),oe=this.__getIntrinsicWidth(Y)/ae*re;return this.__getIntrinsicWidth(Y)+oe}_recalculateColumnWidths(K){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(Y=>{Y.__debounceUpdateHeaderFooterRowVisibility&&Y.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map,K.forEach(Y=>{Y.width=`${this.__getDistributedWidth(Y)}px`})}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const K=this._getColumns().filter(Y=>!Y.hidden&&Y.autoWidth);this._recalculateColumnWidths(K)}}_createScrollerRows(K){const Y=[];for(let J=0;J<K;J++){const te=document.createElement("tr");te.setAttribute("part","row"),te.setAttribute("role","row"),te.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(te,this._columnTree[this._columnTree.length-1],"body",!1,!0),Y.push(te)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(J=>J.isConnected&&J.notifyPath&&J.notifyPath("_cells.*",J._cells)),beforeNextRender(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()}),Y}_createCell(K,Y){const te=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,ie=document.createElement("vaadin-grid-cell-content");ie.setAttribute("slot",te);const ae=document.createElement(K);ae.id=te.replace("-content-","-"),ae.setAttribute("role",K==="td"?"gridcell":"columnheader"),!isAndroid&&!isIOS&&(ae.addEventListener("mouseenter",se=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(se)}),ae.addEventListener("mouseleave",()=>{this._hideTooltip()}),ae.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const re=document.createElement("slot");if(re.setAttribute("name",te),Y&&Y._focusButtonMode){const se=document.createElement("div");se.setAttribute("role","button"),se.setAttribute("tabindex","-1"),ae.appendChild(se),ae._focusButton=se,ae.focus=function(){ae._focusButton.focus()},se.appendChild(re)}else ae.setAttribute("tabindex","-1"),ae.appendChild(re);return ae._content=ie,ie.addEventListener("mousedown",()=>{if(isChrome){const se=oe=>{const ne=ie.contains(this.getRootNode().activeElement),le=oe.composedPath().includes(ie);!ne&&le&&ae.focus(),document.removeEventListener("mouseup",se,!0)};document.addEventListener("mouseup",se,!0)}else setTimeout(()=>{ie.contains(this.getRootNode().activeElement)||ae.focus()})}),ae}_updateRow(K,Y,J,te,ie){J=J||"body";const ae=document.createDocumentFragment();Array.from(K.children).forEach(re=>{re._vacant=!0}),K.innerHTML="",Y.filter(re=>!re.hidden).forEach((re,se,oe)=>{let ne;if(J==="body"){if(re._cells=re._cells||[],ne=re._cells.find(le=>le._vacant),ne||(ne=this._createCell("td",re),re._cells.push(ne)),ne.setAttribute("part","cell body-cell"),K.appendChild(ne),se===oe.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const le=this._detailsCells.find(he=>he._vacant)||this._createCell("td");this._detailsCells.indexOf(le)===-1&&this._detailsCells.push(le),le._content.parentElement||ae.appendChild(le._content),this._configureDetailsCell(le),K.appendChild(le),this._a11ySetRowDetailsCell(K,le),le._vacant=!1}re.notifyPath&&!ie&&re.notifyPath("_cells.*",re._cells)}else{const le=J==="header"?"th":"td";te||re.localName==="vaadin-grid-column-group"?(ne=re[`_${J}Cell`]||this._createCell(le),ne._column=re,K.appendChild(ne),re[`_${J}Cell`]=ne):(re._emptyCells=re._emptyCells||[],ne=re._emptyCells.find(he=>he._vacant)||this._createCell(le),ne._column=re,K.appendChild(ne),re._emptyCells.indexOf(ne)===-1&&re._emptyCells.push(ne)),ne.setAttribute("part",`cell ${J}-cell`)}ne._content.parentElement||ae.appendChild(ne._content),ne._vacant=!1,ne._column=re}),J!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(K),this.appendChild(ae),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(K)}__debounceUpdateHeaderFooterRowVisibility(K){K.__debounceUpdateHeaderFooterRowVisibility=Debouncer$1.debounce(K.__debounceUpdateHeaderFooterRowVisibility,microTask,()=>this.__updateHeaderFooterRowVisibility(K))}__updateHeaderFooterRowVisibility(K){if(!K)return;const Y=Array.from(K.children).filter(J=>{const te=J._column;if(te._emptyCells&&te._emptyCells.indexOf(J)>-1)return!1;if(K.parentElement===this.$.header){if(te.headerRenderer)return!0;if(te.header===null)return!1;if(te.path||te.header!==void 0)return!0}else if(te.footerRenderer)return!0;return!1});K.hidden!==!Y.length&&(K.hidden=!Y.length),this._resetKeyboardNavigation()}_updateScrollerItem(K,Y){this._preventScrollerRotatingCellFocus(K,Y),this._columnTree&&(K.toggleAttribute("first",Y===0),K.toggleAttribute("last",Y===this._effectiveSize-1),K.toggleAttribute("odd",Y%2),this._a11yUpdateRowRowindex(K,Y),this._getItem(Y,K))}_columnTreeChanged(K){this._renderColumnTree(K),this.recalculateColumnWidths()}_renderColumnTree(K){for(Array.from(this.$.items.children).forEach(Y=>this._updateRow(Y,K[K.length-1],null,!1,!0));this.$.header.children.length<K.length;){const Y=document.createElement("tr");Y.setAttribute("part","row"),Y.setAttribute("role","row"),Y.setAttribute("tabindex","-1"),this.$.header.appendChild(Y);const J=document.createElement("tr");J.setAttribute("part","row"),J.setAttribute("role","row"),J.setAttribute("tabindex","-1"),this.$.footer.appendChild(J)}for(;this.$.header.children.length>K.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((Y,J)=>this._updateRow(Y,K[J],"header",J===K.length-1)),Array.from(this.$.footer.children).forEach((Y,J)=>this._updateRow(Y,K[K.length-1-J],"footer",J===0)),this._updateRow(this.$.sizer,K[K.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(K,Y){K._item=Y;const J=this.__getRowModel(K);this._toggleDetailsCell(K,J.detailsOpened),this._a11yUpdateRowLevel(K,J.level),this._a11yUpdateRowSelected(K,J.selected),K.toggleAttribute("expanded",J.expanded),K.toggleAttribute("selected",J.selected),K.toggleAttribute("details-opened",J.detailsOpened),this._generateCellClassNames(K,J),this._filterDragAndDrop(K,J),Array.from(K.children).forEach(te=>{if(te._renderer){const ie=te._column||this;te._renderer.call(ie,te._content,ie,J)}}),this._updateDetailsCellHeight(K),this._a11yUpdateRowExpanded(K,J.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(K){K.animationName.indexOf("vaadin-grid-appear")===0&&(K.stopPropagation(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex()}))}__getRowModel(K){return{index:K.index,item:K._item,level:this._getIndexLevel(K.index),expanded:this._isExpanded(K._item),selected:this._isSelected(K._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(K._item)}}_showTooltip(K){const Y=this._tooltipController.node;Y&&Y.isConnected&&(this._tooltipController.setTarget(K.target),this._tooltipController.setContext(this.getEventContext(K)),Y._stateController.open({focus:K.type==="focusin",hover:K.type==="mouseenter"}))}_hideTooltip(K){const Y=this._tooltipController.node;Y&&Y._stateController.close(K)}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(K=>{K.forEach(Y=>{Y._renderHeaderAndFooter&&Y._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(K,Y){this.__virtualizer&&this.__virtualizer.update(K,Y)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(Grid.is,Grid);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-grid" is deprecated. Use "@vaadin/grid" instead.');/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class GridSelectionColumn extends GridColumn{static get is(){return"vaadin-grid-selection-column"}static get properties(){return{width:{type:String,value:"58px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},autoSelect:{type:Boolean,value:!1},__indeterminate:Boolean,__previousActiveItem:Object,__selectAllHidden:Boolean}}static get observers(){return["__onSelectAllChanged(selectAll)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, __indeterminate, __selectAllHidden)"]}constructor(){super(),this.__boundOnActiveItemChanged=this.__onActiveItemChanged.bind(this),this.__boundOnDataProviderChanged=this.__onDataProviderChanged.bind(this),this.__boundOnSelectedItemsChanged=this.__onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.removeEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.removeEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged))}_defaultHeaderRenderer(K,Y){let J=K.firstElementChild;J||(J=document.createElement("vaadin-checkbox"),J.setAttribute("aria-label","Select All"),J.classList.add("vaadin-grid-select-all-checkbox"),J.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)),K.appendChild(J));const te=this.__isChecked(this.selectAll,this.__indeterminate);J.__rendererChecked=te,J.checked=te,J.hidden=this.__selectAllHidden,J.indeterminate=this.__indeterminate}_defaultRenderer(K,Y,{item:J,selected:te}){let ie=K.firstElementChild;ie||(ie=document.createElement("vaadin-checkbox"),ie.setAttribute("aria-label","Select Row"),ie.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),K.appendChild(ie)),ie.__item=J,ie.__rendererChecked=te,ie.checked=te}__onSelectAllChanged(K){if(!(K===void 0||!this._grid)){if(!this.__selectAllInitialized){this.__selectAllInitialized=!0;return}this._selectAllChangeLock||(K&&this.__hasArrayDataProvider()?this.__withFilteredItemsArray(Y=>{this._grid.selectedItems=Y}):this._grid.selectedItems=[])}}__arrayContains(K,Y){return Array.isArray(K)&&Array.isArray(Y)&&Y.every(J=>K.includes(J))}__onSelectAllCheckedChanged(K){K.target.checked!==K.target.__rendererChecked&&(this.selectAll=this.__indeterminate||K.target.checked)}__onSelectRowCheckedChanged(K){K.target.checked!==K.target.__rendererChecked&&(K.target.checked?this._grid.selectItem(K.target.__item):this._grid.deselectItem(K.target.__item))}__isChecked(K,Y){return Y||K}__onActiveItemChanged(K){const Y=K.detail.value;if(this.autoSelect){const J=Y||this.__previousActiveItem;J&&this._grid._toggleItem(J)}this.__previousActiveItem=Y}__hasArrayDataProvider(){return Array.isArray(this._grid.items)&&!!this._grid.dataProvider}__onSelectedItemsChanged(){this._selectAllChangeLock=!0,this.__hasArrayDataProvider()&&this.__withFilteredItemsArray(K=>{this._grid.selectedItems.length?this.__arrayContains(this._grid.selectedItems,K)?(this.selectAll=!0,this.__indeterminate=!1):(this.selectAll=!1,this.__indeterminate=!0):(this.selectAll=!1,this.__indeterminate=!1)}),this._selectAllChangeLock=!1}__onDataProviderChanged(){this.__selectAllHidden=!Array.isArray(this._grid.items)}__withFilteredItemsArray(K){const Y={page:0,pageSize:1/0,sortOrders:[],filters:this._grid._mapFilters()};this._grid.dataProvider(Y,J=>K(J))}}customElements.define(GridSelectionColumn.is,GridSelectionColumn);var __defProp$4=Object.defineProperty,__getOwnPropDesc$4=Object.getOwnPropertyDescriptor,__decorateClass$4=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$4(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$4(K,Y,te),te};let MateuCrud=class extends connect(store)(s$1){search(){const ee="";store.dispatch(getCount(this.journeyId,this.stepId,"main",ee)),store.dispatch(getRows(this.journeyId,this.stepId,"main",ee))}connectedCallback(){super.connectedCallback()}stateChanged(ee){this.items=ee.tiposJourney.items}render(){var ee,K,Y;return y$1`
      
      <h1>${(ee=this.metadata)==null?void 0:ee.title}</h1>

      <vaadin-horizontal-layout style="align-items: baseline;" theme="spacing">
        
        ${(K=this.metadata)==null?void 0:K.searchForm.fields.map(J=>y$1`
          <vaadin-text-field id="${J.id}" label="${J.caption}"></vaadin-text-field>
        `)}
        
        
        <vaadin-button theme="primary" @click="${this.search}">Search</vaadin-button>
        
      </vaadin-horizontal-layout>

      <vaadin-grid .items="${this.items}">
        <vaadin-grid-selection-column></vaadin-grid-selection-column>

      ${(Y=this.metadata)==null?void 0:Y.columns.map(J=>y$1`
        <vaadin-grid-column path="${J.id}" header="${J.caption}"></vaadin-grid-column>
      `)}
      
        </vaadin-grid>
      
    `}};MateuCrud.styles=i$5`
    :host {

    }

  `;__decorateClass$4([e()],MateuCrud.prototype,"journeyId",2);__decorateClass$4([e()],MateuCrud.prototype,"stepId",2);__decorateClass$4([e()],MateuCrud.prototype,"metadata",2);__decorateClass$4([e()],MateuCrud.prototype,"data",2);__decorateClass$4([e()],MateuCrud.prototype,"items",2);MateuCrud=__decorateClass$4([e$1("mateu-crud")],MateuCrud);var __defProp$3=Object.defineProperty,__getOwnPropDesc$3=Object.getOwnPropertyDescriptor,__decorateClass$3=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$3(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$3(K,Y,te),te};let MateuComponent=class extends s$1{connectedCallback(){super.connectedCallback()}render(){var ee,K;return y$1`
        
            ${((ee=this.component)==null?void 0:ee.metadata.type)==ViewType.Form?y$1`<mateu-form 
                            .metadata=${this.component.metadata} 
                            .data=${this.component.data}
                            journeyId="${this.journeyId}" stepId="${this.stepId}"
                            .setLoading=${this.setLoading}
                            .rules=${this.component.rules}
                    ><slot></slot></mateu-form>`:y$1``}

            ${((K=this.component)==null?void 0:K.metadata.type)==ViewType.Crud?y$1`<mateu-crud 
                            .metadata=${this.component.metadata} 
                            .data=${this.component.data}
                            journeyId="${this.journeyId}" stepId="${this.stepId}"
                            .setLoading=${this.setLoading}
                            .rules=${this.component.rules}
                    ><slot></slot></mateu-crud>`:y$1``}
        
        `}};MateuComponent.styles=i$5`
    
  `;__decorateClass$3([e()],MateuComponent.prototype,"component",2);__decorateClass$3([e()],MateuComponent.prototype,"journeyId",2);__decorateClass$3([e()],MateuComponent.prototype,"stepId",2);__decorateClass$3([e()],MateuComponent.prototype,"setLoading",2);MateuComponent=__decorateClass$3([e$1("mateu-component")],MateuComponent);var __defProp$2=Object.defineProperty,__getOwnPropDesc$2=Object.getOwnPropertyDescriptor,__decorateClass$2=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$2(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$2(K,Y,te),te};let MateuView=class extends s$1{connectedCallback(){super.connectedCallback()}render(){var ee;return y$1`
      <div>
        ${(ee=this.view)==null?void 0:ee.components.map(K=>y$1`<mateu-component 
            .component=${K}  journeyId="${this.journeyId}" stepId="${this.stepId}" .setLoading=${this.setLoading}>
          <slot></slot></mateu-component>
        `)}</div>`}};MateuView.styles=i$5`
    `;__decorateClass$2([e()],MateuView.prototype,"view",2);__decorateClass$2([e()],MateuView.prototype,"journeyId",2);__decorateClass$2([e()],MateuView.prototype,"stepId",2);__decorateClass$2([e()],MateuView.prototype,"setLoading",2);MateuView=__decorateClass$2([e$1("mateu-view")],MateuView);var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc$1(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp$1(K,Y,te),te};let JourneyStep=class extends s$1{constructor(){super(...arguments),this.journeyId="",this.stepId="",this.step=void 0}connectedCallback(){super.connectedCallback()}render(){var ee;return y$1`<mateu-view 
                .view=${(ee=this.step)==null?void 0:ee.view} 
                journeyId="${this.journeyId}" 
                stepId="${this.stepId}" 
                .setLoading=${this.setLoading}><slot></slot></mateu-view>`}};JourneyStep.styles=i$5`

  `;__decorateClass$1([e()],JourneyStep.prototype,"journeyId",2);__decorateClass$1([e()],JourneyStep.prototype,"stepId",2);__decorateClass$1([e()],JourneyStep.prototype,"step",2);__decorateClass$1([e()],JourneyStep.prototype,"setLoading",2);JourneyStep=__decorateClass$1([e$1("journey-step")],JourneyStep);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(ee,K,Y,J)=>{for(var te=J>1?void 0:J?__getOwnPropDesc(K,Y):K,ie=ee.length-1,ae;ie>=0;ie--)(ae=ee[ie])&&(te=(J?ae(K,Y,te):ae(te))||te);return J&&te&&__defProp(K,Y,te),te};let JourneyStarter=class extends connect(store)(s$1){constructor(){super(...arguments),this.journeyTypeId=void 0,this.loading=!1,this.cargando=void 0,this.error=void 0,this.tipos=[],this.journeyType=void 0,this.journeyId=void 0,this.journey=void 0,this.stepId=void 0,this.step=void 0,this.completed=!1}stateChanged(ee){if(this.loading=!1,this.journeyTypeId||(this.tipos=ee.tiposJourney.journeyTypes),this.cargando=ee.tiposJourney.loading,this.error=ee.tiposJourney.error,this.journeyType=ee.tiposJourney.journeyType,this.journeyId=ee.tiposJourney.journeyId,this.journey=ee.tiposJourney.journey,this.stepId=ee.tiposJourney.stepId,this.step=ee.tiposJourney.step,this.completed=ee.tiposJourney.completed,!this.tipos)this.loading=!0,store.dispatch(fetchItems());else if(this.journeyType)if(this.journeyId)this.journey?this.stepId&&(this.step||(this.loading=!0,store.dispatch(getStep(this.journeyId,this.stepId)))):(this.loading=!0,store.dispatch(getJourneyStatus(this.journeyId)));else{const K=nanoid();this.loading=!0,store.dispatch(createJourney(this.journeyType,K))}}updated(ee){ee.has("journeyTypeId")&&store.dispatch(setJourneyType(this.journeyTypeId))}connectedCallback(){super.connectedCallback(),this.journeyTypeId?store.dispatch(setJourneyType(this.journeyTypeId)):store.dispatch(fetchItems())}startJourney(ee){const K=ee.target.getAttribute("typeId");store.dispatch(setJourneyType(K))}resetJourney(){store.dispatch(reset())}setLoading(ee){this.loading=ee}render(){var ee;return y$1`

            <div class="lds-roller" style="display: ${this.loading?"":"none"};"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            <!--
            <div>cargando = ${this.cargando}</div>
            <div>error = ${this.error}</div>
            <div>journey types = ${this.tipos}</div>
            <div>journey type = ${this.journeyType}</div>
            <div>journey id = ${this.journeyId}</div>
            <div>journey = ${this.journey}</div>
            <div>step id = ${this.stepId}</div>
            <div>step = ${this.step}</div>
            <div>completed = ${this.completed}</div>
            -->
        
            ${this.journeyType?y$1``:y$1`

                ${this.tipos?y$1`
                            <h1>Available journey types</h1>
                            <div>
                                ${(ee=this.tipos)==null?void 0:ee.map(K=>y$1`<div class="card-journey-type">
                <vaadin-horizontal-layout theme="spacing padding" style="width: 100%;">
                    <div style="flex-grow: 1"><h2>${K.name}</h2></div>
                    <vaadin-horizontal-layout style="align-items: center;">
                        <vaadin-button theme="primary" @click=${this.startJourney} typeId="${K.id}">Start journey</vaadin-button>
                    </vaadin-horizontal-layout>
                </vaadin-horizontal-layout>
            </div>`)}
                            </div>                     
                        `:y$1`<h2>No journey type available</h2>`}

                    `}

            ${this.step?y$1`

                        <journey-step  journeyId="${this.journeyId}" stepId="${this.stepId}" .step=${this.step} .setLoading=${this.setLoading}>
            <vaadin-button theme="secondary" @click=${this.resetJourney}>Back to the beginning</vaadin-button>
                        </journey-step>

                    `:""}
            
            ${this.completed?y$1`<h1>Done!</h1>

                    <vaadin-button theme="secondary" @click=${this.resetJourney}>+</vaadin-button>
                    
                    `:""}

        <slot></slot>`}};JourneyStarter.styles=i$5`
    :host {
      max-width: 1280px;
      width: 800px;
      margin: 0 auto;
      padding: 2rem;    
    }
    
    .card-journey-type {
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 10px;
        border: 1px solid lightgrey;
        border-radius: 7px;
    }
    
    
.lds-roller {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fcf;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



  `;__decorateClass([e()],JourneyStarter.prototype,"journeyTypeId",2);__decorateClass([e()],JourneyStarter.prototype,"loading",2);__decorateClass([e()],JourneyStarter.prototype,"cargando",2);__decorateClass([e()],JourneyStarter.prototype,"error",2);__decorateClass([e()],JourneyStarter.prototype,"tipos",2);__decorateClass([e()],JourneyStarter.prototype,"journeyType",2);__decorateClass([e()],JourneyStarter.prototype,"journeyId",2);__decorateClass([e()],JourneyStarter.prototype,"journey",2);__decorateClass([e()],JourneyStarter.prototype,"stepId",2);__decorateClass([e()],JourneyStarter.prototype,"step",2);__decorateClass([e()],JourneyStarter.prototype,"completed",2);JourneyStarter=__decorateClass([e$1("journey-starter")],JourneyStarter);
