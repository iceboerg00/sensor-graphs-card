/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(i,t,s)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",m=u.reactiveElementPolyfillSupport,v=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},x=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:x};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);o?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:_).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=i;const r=o.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const r=this.constructor;if(!1===i&&(o=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??x)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[v("elementProperties")]=new Map,b[v("finalized")]=new Map,m?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,w=t=>t,A=$.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,T=`<${C}>`,M=document,P=()=>M.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,O=/>/g,N=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,F=/^(?:script|style|textarea|title)$/i,j=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),B=j(1),V=j(2),q=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),W=new WeakMap,K=M.createTreeWalker(M,129);function J(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=D:void 0!==l[1]?n=O:void 0!==l[2]?(F.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=o??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?L:I):n===L||n===I?n=N:n===D||n===O?n=H:(n=N,o=void 0);const d=n===N&&t[e+1].startsWith("/>")?" ":"";r+=n===H?s+T:c>=0?(i.push(a),s.slice(0,c)+S+s.slice(c)+k+d):s+k+(-2===c?e:d)}return[J(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=X.createElement(l,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=c[r++],s=i.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?ot:et}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(F.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],P()),K.nextNode(),a.push({type:2,index:++o});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===q)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const r=z(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);K.currentNode=i;let o=K.nextNode(),r=0,n=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new rt(o,this,t)),this._$AV.push(e),a=s[++n]}r!==a?.index&&(o=K.nextNode(),r++)}return K.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),z(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new tt(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=G}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=Y(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const i=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Y(this,i[s+n],e,n),a===q&&(a=this._$AH[n]),r||=!z(a)||a!==this._$AH[n],a===G?t=G:t!==G&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!i&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class ot extends et{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??G)===q)return;const s=this._$AH,i=t===G&&s!==G||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==G&&(s===G||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(X,tt),($.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new tt(e.insertBefore(P(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");const ht=r`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
    height: 100%;
  }

  ha-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: color-mix(in srgb, var(--card-background-color) 90%, transparent);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 8px;
    flex-shrink: 0;
    gap: 8px;
  }

  .title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text-color);
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .time-buttons {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  .time-btn {
    padding: 3px 8px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 4px;
    background: transparent;
    color: var(--secondary-text-color);
    cursor: pointer;
    font-size: 0.72rem;
    font-family: inherit;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }

  .time-btn:hover {
    background: var(--secondary-background-color);
  }

  .time-btn.active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color);
  }

  .time-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .graphs-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 12px 12px;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  .empty {
    padding: 24px;
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 0.875rem;
  }

  .graphs-container::-webkit-scrollbar {
    width: 6px;
  }

  .graphs-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .graphs-container::-webkit-scrollbar-thumb {
    background: var(--divider-color, rgba(0, 0, 0, 0.2));
    border-radius: 3px;
  }
`,dt=r`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 120px;
    overflow: hidden;
  }

  .graph-wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    padding: 4px 0;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    box-sizing: border-box;
  }

  .graph-wrap:last-child {
    border-bottom: none;
  }

  .graph-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 4px 2px;
    flex-shrink: 0;
  }

  .graph-label {
    font-size: 0.82rem;
    color: var(--secondary-text-color);
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
  }

  .graph-current {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-text-color);
    white-space: nowrap;
    transition: color 0.1s;
  }

  .graph-current--hover {
    color: var(--primary-color);
  }

  .svg-container {
    flex: 1;
    position: relative;
    min-height: 0;
    overflow: hidden;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .tooltip {
    position: absolute;
    transform: translateY(-50%);
    background: var(--card-background-color, #1c1c1c);
    border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    border-radius: 6px;
    padding: 4px 8px;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    font-size: 0.75rem;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .tooltip.tooltip-synced {
    opacity: 0.75;
    padding: 3px 6px;
    font-size: 0.7rem;
  }

  .tooltip-value {
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .tooltip-time {
    color: var(--secondary-text-color);
    font-size: 0.68rem;
    margin-top: 1px;
  }

  .y-label {
    position: absolute;
    left: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--secondary-text-color);
    opacity: 0.9;
    line-height: 1;
    pointer-events: none;
    z-index: 1;
  }
  .y-max { top: 2px; }
  .y-min { bottom: 2px; }

  .x-axis {
    display: flex;
    justify-content: space-between;
    padding: 2px 4px 0;
    height: 20px;
    flex-shrink: 0;
  }
  .x-axis span {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--secondary-text-color);
    opacity: 0.9;
  }

  .hover-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 2;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);
  }

  .no-data {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
    font-size: 0.8rem;
  }

  .error-msg {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--error-color, #f44336);
    font-size: 0.8rem;
  }
`;async function pt(t,e,s){if(!e||"string"!=typeof e)return console.error("[sensor-graphs-card] fetchHistory: entityId must be a non-empty string"),[];if("number"!=typeof s||s<=0)return console.error("[sensor-graphs-card] fetchHistory: hours must be a positive number"),[];const i=function(t,e){return`history/period/${e.toISOString()}?filter_entity_id=${encodeURIComponent(t)}&minimal_response=true&no_attributes=true`}(e,new Date(Date.now()-60*s*60*1e3));try{return function(t){return t&&t.length&&t[0]&&t[0].length?t[0].map(t=>{const e=t.state??t.s,s=t.last_changed??t.last_updated??t.lu,i=parseFloat(e);return{time:"number"==typeof s?new Date(1e3*s):new Date(s),value:i}}).filter(t=>!isNaN(t.value)&&!isNaN(t.time.getTime())):[]}(await t.callApi("GET",i))}catch(t){return console.error(`[sensor-graphs-card] fetchHistory failed for ${e}:`,t),[]}}r`
  :host {
    display: block;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .editor {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .field label {
    font-size: 0.78rem;
    color: var(--secondary-text-color);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .field input[type='text'] {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
    border-radius: 4px;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    font-size: 0.875rem;
    font-family: inherit;
    box-sizing: border-box;
    outline: none;
  }

  .field input[type='text']:focus {
    border-color: var(--primary-color);
  }

  .sensors-label {
    font-size: 0.78rem;
    color: var(--secondary-text-color);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: -8px;
  }

  .sensors-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sensor-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sensor-row ha-entity-picker {
    flex: 1;
    min-width: 0;
  }

  .sensor-row input[type='color'] {
    width: 34px;
    height: 34px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
    border-radius: 4px;
    cursor: pointer;
    padding: 2px;
    background: none;
    flex-shrink: 0;
  }

  .sensor-row .icon-btn {
    padding: 4px 7px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
    border-radius: 4px;
    background: transparent;
    color: var(--secondary-text-color);
    cursor: pointer;
    font-size: 0.8rem;
    font-family: inherit;
    flex-shrink: 0;
    line-height: 1.4;
  }

  .sensor-row .icon-btn:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  .sensor-row .icon-btn.remove {
    color: var(--error-color, #f44336);
    border-color: var(--error-color, #f44336);
  }

  .add-btn {
    align-self: flex-start;
    padding: 8px 16px;
    border: 1px dashed var(--primary-color);
    border-radius: 4px;
    background: transparent;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 0.875rem;
    font-family: inherit;
    transition: background 0.15s, color 0.15s;
  }

  .add-btn:hover {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .add-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;const ut=1e3,gt=200,ft=10,mt=8,vt=10,_t=8,xt=[.25,.5,.75].map(t=>(ft+t*(gt-ft-vt)).toFixed(1)),yt=new Set(["unavailable","unknown","none"]);function bt(t){if(!t||t.length<2)return null;if(t=function(t,e=3e5){if(!t?.length)return t;const s=[];let i=Math.floor(t[0].time.getTime()/e)*e,o=0,r=0;for(const n of t){const t=n.time.getTime();t>=i+e&&(r>0&&s.push({time:new Date(i),value:o/r}),i=Math.floor(t/e)*e,o=0,r=0),o+=n.value,r++}return r>0&&s.push({time:new Date(i),value:o/r}),s}(t,3e5),t.length<2)return null;const e=t.reduce((t,e)=>e.value<t?e.value:t,t[0].value),s=t.reduce((t,e)=>e.value>t?e.value:t,t[0].value),i=s-e,o=Math.max(.1*i,.5),r=e-o,n=s+o,a=t[0].time.getTime(),l=t[t.length-1].time.getTime()-a||1,c=t=>_t+(t-a)/l*(ut-_t-mt),h=t=>gt-vt-(t-r)/(n-r)*(gt-ft-vt),d=function(t,e=200){if(t.length<=e)return t;const s=Math.ceil(t.length/e);return t.filter((e,i)=>i%s===0||i===t.length-1)}(t,200),p=d.map(t=>({x:c(t.time.getTime()),y:h(t.value)})),u=function(t){if(t.length<2)return"";let e=`M ${t[0].x.toFixed(1)},${t[0].y.toFixed(1)}`;const s=1/8;for(let i=1;i<t.length;i++){const o=t[i-2]||t[i-1],r=t[i-1],n=t[i],a=t[i+1]||n;e+=` C ${(r.x+(n.x-o.x)*s).toFixed(1)},${(r.y+(n.y-o.y)*s).toFixed(1)} ${(n.x-(a.x-r.x)*s).toFixed(1)},${(n.y-(a.y-r.y)*s).toFixed(1)} ${n.x.toFixed(1)},${n.y.toFixed(1)}`}return e}(p),g=(gt-vt).toFixed(1),f=`${u} L ${p[p.length-1].x.toFixed(1)},${g} L ${p[0].x.toFixed(1)},${g} Z`,m=[0,Math.floor((t.length-1)/2),t.length-1].map(e=>t[e].time),v=i<1?2:1;return{linePath:u,areaPath:f,points:p,plotData:d,displayMin:e.toFixed(v),displayMax:s.toFixed(v),xTimes:m}}customElements.define("sensor-graph",class extends lt{static styles=dt;static properties={entityId:{type:String},label:{type:String},unit:{type:String},color:{type:String},data:{type:Array},currentValue:{type:String},hoverTime:{type:Object,hasChanged:()=>!0},_hoverIndex:{state:!0}};constructor(){super(),this.data=[],this.color="var(--primary-color)",this.hoverTime=null,this._hoverIndex=-1,this._paths=null}willUpdate(t){t.has("data")&&(this._paths=bt(this.data))}_toSvgCoords(t){const e=this.shadowRoot?.querySelector("svg");if(!e)return null;const s=e.getScreenCTM();if(!s)return null;const i=e.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i.matrixTransform(s.inverse())}_handleMouseMove(t){const e=this._paths;if(!e)return;const s=this._toSvgCoords(t);if(!s)return;let i=0,o=Math.abs(e.points[0].x-s.x);for(let t=1;t<e.points.length;t++){const r=Math.abs(e.points[t].x-s.x);r<o&&(o=r,i=t)}this._hoverIndex!==i&&(this._hoverIndex=i,this.dispatchEvent(new CustomEvent("sgc-hover",{detail:{time:this._paths.plotData[i].time},bubbles:!0,composed:!0})))}_handleMouseLeave(){this._hoverIndex=-1,this.dispatchEvent(new CustomEvent("sgc-hover-end",{bubbles:!0,composed:!0}))}_formatTooltipTime(t){return t.toLocaleString("de-DE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}_formatXTime(t){return t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}_gradientId(){return`sgc-grad-${(this.entityId||"unknown").replace(/[^a-zA-Z0-9]/g,"-")}`}render(){const t=this._paths,e=this._gradientId(),s=this._hoverIndex>=0?this._hoverIndex:function(t,e){if(!t?.length||!e)return-1;const s=e.getTime();let i=0,o=Math.abs(t[0].time.getTime()-s);for(let e=1;e<t.length;e++){const r=Math.abs(t[e].time.getTime()-s);r<o&&(o=r,i=e)}return i}(t?.plotData??[],this.hoverTime),i=this._hoverIndex>=0,o=s>=0&&t?.plotData[s]?t.plotData[s]:null,r=o&&t?t.points[s]:null,n=r?r.x/ut*100:0,a=r?r.y/gt*100:0,l=n>72?`right:${(100-n+2).toFixed(1)}%`:`left:${(n+2).toFixed(1)}%`,c=`top:${a.toFixed(1)}%`,h=this.currentValue&&!yt.has(this.currentValue.toLowerCase()),d=o?`${o.value.toFixed(2)}${this.unit?" "+this.unit:""}`:h?`${this.currentValue}${this.unit?" "+this.unit:""}`:"–";return B`
      <div class="graph-wrap">

        <div class="graph-header">
          <span class="graph-label" style="color:${this.color}">${this.label||this.entityId}</span>
          <span class="graph-current ${o?"graph-current--hover":""}">${d}</span>
        </div>

        <div class="svg-container"
          @mousemove=${this._handleMouseMove}
          @mouseleave=${this._handleMouseLeave}>

          ${t?B`
            <span class="y-label y-max">${t.displayMax}</span>
            <span class="y-label y-min">${t.displayMin}</span>
          `:""}

          <svg viewBox="0 0 ${ut} ${gt}" preserveAspectRatio="none"
               xmlns="http://www.w3.org/2000/svg">
            ${V`
              ${xt.map(t=>V`
                <line x1="${_t}" y1="${t}" x2="${ut-mt}" y2="${t}"
                      stroke="var(--divider-color, rgba(128,128,128,0.12))" stroke-width="1"
                      vector-effect="non-scaling-stroke"/>
              `)}
            `}
            ${t?V`
              <defs>
                <linearGradient id="${e}" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stop-color="${this.color}" stop-opacity="0.30"/>
                  <stop offset="100%" stop-color="${this.color}" stop-opacity="0.02"/>
                </linearGradient>
              </defs>
              <path d="${t.areaPath}" fill="url(#${e})"/>
              <path d="${t.linePath}" stroke="${this.color}" stroke-width="1.5" fill="none"
                    stroke-linejoin="round" stroke-linecap="round"
                    vector-effect="non-scaling-stroke"/>
              ${r?V`
                <line x1="${r.x.toFixed(1)}" y1="${ft}"
                      x2="${r.x.toFixed(1)}" y2="${gt-vt}"
                      stroke="${this.color}" stroke-width="1" stroke-dasharray="4 3" opacity="0.6"
                      vector-effect="non-scaling-stroke"/>
              `:""}
            `:""}
          </svg>

          ${r?B`
            <div class="hover-dot" style="
              left:${(r.x/ut*100).toFixed(2)}%;
              top:${(r.y/gt*100).toFixed(2)}%;
              background:${this.color};
            "></div>
          `:""}

          ${o?B`
            <div class="tooltip ${i?"":"tooltip-synced"}"
              style="${l};${c}">
              <span class="tooltip-value">
                ${o.value.toFixed(2)}${this.unit?" "+this.unit:""}
              </span>
              ${i?B`
                <span class="tooltip-time">${this._formatTooltipTime(o.time)}</span>
              `:""}
            </div>
          `:""}

          ${!t&&this.entityId?B`<div class="no-data">Keine Daten</div>`:""}
        </div>

        ${t?B`
          <div class="x-axis">
            ${t.xTimes.map(t=>B`<span>${this._formatXTime(t)}</span>`)}
          </div>
        `:""}

      </div>
    `}});const $t=["#03a9f4","#4caf50","#ffb300","#e91e63","#9c27b0","#00bcd4","#ff5722","#8bc34a"],wt="\n  .sgc-editor {\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .sgc-field {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n  }\n  .sgc-field label {\n    font-size: 0.78rem;\n    color: var(--secondary-text-color);\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n  }\n  .sgc-field input[type='text'] {\n    width: 100%;\n    padding: 8px 10px;\n    border: 1px solid var(--divider-color, rgba(0,0,0,0.2));\n    border-radius: 4px;\n    background: var(--secondary-background-color);\n    color: var(--primary-text-color);\n    font-size: 0.875rem;\n    font-family: inherit;\n    box-sizing: border-box;\n    outline: none;\n  }\n  .sgc-field input[type='text']:focus {\n    border-color: var(--primary-color);\n  }\n  .sgc-sensors-label {\n    font-size: 0.78rem;\n    color: var(--secondary-text-color);\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    margin-bottom: -8px;\n  }\n  .sgc-sensors-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .sgc-sensor-block {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    padding: 8px;\n    border: 1px solid var(--divider-color, rgba(0,0,0,0.15));\n    border-radius: 6px;\n    background: var(--secondary-background-color, rgba(0,0,0,0.05));\n  }\n  .sgc-sensor-row {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n  .sgc-sensor-row ha-selector {\n    flex: 1;\n    min-width: 0;\n  }\n  .sgc-sensor-label-row {\n    display: flex;\n  }\n  .sgc-sensor-label-row ha-selector {\n    flex: 1;\n  }\n  .sgc-sensor-row input[type='color'] {\n    width: 34px;\n    height: 34px;\n    border: 1px solid var(--divider-color, rgba(0,0,0,0.2));\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 2px;\n    background: none;\n    flex-shrink: 0;\n  }\n  .sgc-icon-btn {\n    padding: 4px 7px;\n    border: 1px solid var(--divider-color, rgba(0,0,0,0.2));\n    border-radius: 4px;\n    background: transparent;\n    color: var(--secondary-text-color);\n    cursor: pointer;\n    font-size: 0.8rem;\n    font-family: inherit;\n    flex-shrink: 0;\n    line-height: 1.4;\n  }\n  .sgc-icon-btn:disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n  .sgc-icon-btn.remove {\n    color: var(--error-color, #f44336);\n    border-color: var(--error-color, #f44336);\n  }\n  .sgc-add-btn {\n    align-self: flex-start;\n    padding: 8px 16px;\n    border: 1px dashed var(--primary-color);\n    border-radius: 4px;\n    background: transparent;\n    color: var(--primary-color);\n    cursor: pointer;\n    font-size: 0.875rem;\n    font-family: inherit;\n    transition: background 0.15s, color 0.15s;\n  }\n  .sgc-add-btn:hover {\n    background: var(--primary-color);\n    color: var(--text-primary-color, #fff);\n  }\n";customElements.define("sensor-graphs-card-editor",class extends lt{static properties={_config:{state:!0}};createRenderRoot(){return this}set hass(t){t?(this._hass=t,this.requestUpdate()):console.warn("[sensor-graphs-card-editor] hass object is missing")}setConfig(t){t||(t={title:"",sensors:[]}),this._config=JSON.parse(JSON.stringify(t))}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_updateTitle(t){this._config={...this._config,title:t.target.value},this._fire()}_updateEntity(t,e){const s=[...this._config.sensors];s[t]={...s[t],entity:e.detail.value||""},this._config={...this._config,sensors:s},this._fire()}_updateColor(t,e){const s=[...this._config.sensors];s[t]={...s[t],color:e.target.value},this._config={...this._config,sensors:s},this._fire()}_updateLabel(t,e){const s=[...this._config.sensors];s[t]={...s[t],label:e.detail.value??""},this._config={...this._config,sensors:s},this._fire()}_move(t,e){const s=[...this._config.sensors],i=t+e;i<0||i>=s.length||([s[t],s[i]]=[s[i],s[t]],this._config={...this._config,sensors:s},this._fire())}_remove(t){const e=this._config.sensors.filter((e,s)=>s!==t);this._config={...this._config,sensors:e},this._fire()}_addSensor(){const t=[...this._config.sensors||[]],e=$t[t.length%$t.length];t.push({entity:"",color:e,label:""}),this._config={...this._config,sensors:t},this._fire()}render(){if(!this._config||!this._hass)return B`<style>${wt}</style><div class="sgc-editor"><p style="color: var(--secondary-text-color)">Editor wird geladen…</p></div>`;const t=this._config.sensors||[];return B`
      <style>${wt}</style>
      <div class="sgc-editor">
        <!-- Title -->
        <div class="sgc-field">
          <label>Kartentitel</label>
          <input
            type="text"
            .value=${this._config.title||""}
            @input=${this._updateTitle}
            placeholder="z.B. Grow Tent Sensoren"
          />
        </div>

        <!-- Sensor list -->
        <div class="sgc-sensors-label">Sensoren</div>
        <div class="sgc-sensors-list">
          ${t.map((e,s)=>B`
              <div class="sgc-sensor-block">
                <!-- Row 1: entity picker + controls -->
                <div class="sgc-sensor-row">
                  <ha-selector
                    .hass=${this._hass}
                    .selector=${{entity:{}}}
                    .value=${e.entity||""}
                    @value-changed=${t=>this._updateEntity(s,t)}
                  ></ha-selector>

                  <input
                    type="color"
                    .value=${e.color||$t[0]}
                    @input=${t=>this._updateColor(s,t)}
                    title="Graphfarbe wählen"
                  />

                  <button
                    class="sgc-icon-btn"
                    @click=${()=>this._move(s,-1)}
                    ?disabled=${0===s}
                    title="Nach oben"
                  >▲</button>

                  <button
                    class="sgc-icon-btn"
                    @click=${()=>this._move(s,1)}
                    ?disabled=${s===t.length-1}
                    title="Nach unten"
                  >▼</button>

                  <button
                    class="sgc-icon-btn remove"
                    @click=${()=>this._remove(s)}
                    title="Sensor entfernen"
                  >✕</button>
                </div>

                <!-- Row 2: optional label -->
                <div class="sgc-sensor-label-row">
                  <ha-selector
                    .hass=${this._hass}
                    .selector=${{text:{}}}
                    .value=${e.label||""}
                    .label=${"Label (leer = Entity-Name)"}
                    @value-changed=${t=>this._updateLabel(s,t)}
                  ></ha-selector>
                </div>
              </div>
            `)}
        </div>

        <button class="sgc-add-btn" @click=${this._addSensor}>
          + Sensor hinzufügen
        </button>
      </div>
    `}});const At=[{label:"1h",hours:1},{label:"6h",hours:6},{label:"12h",hours:12},{label:"24h",hours:24},{label:"7d",hours:168}];customElements.define("sensor-graphs-card",class extends lt{static styles=ht;static properties={_config:{state:!0},_historyData:{state:!0},_activeRange:{state:!0},_hoverTime:{state:!0}};constructor(){super(),this._historyData={},this._activeRange=At[1],this._hoverTime=null,this._lastLoad=0,this._loadId=0,this._loadTimer=null,this._hass=null}setConfig(t){if(!t)throw new Error("[sensor-graphs-card] setConfig called without config");const e=(this._config?.sensors||[]).map(t=>t.entity).join(","),s=(t.sensors||[]).map(t=>t.entity).join(",");this._config=t,e!==s&&(this._lastLoad=0,this._hass&&this._loadData())}set hass(t){this._hass=t,this._scheduleDataLoad(),this.requestUpdate()}getCardSize(){const t=this._config?.sensors?.length||3;return Math.max(3,2*t)}getLayoutOptions(){return{grid_rows:4,grid_columns:4,grid_min_rows:3,grid_max_rows:12,grid_min_columns:2,grid_max_columns:12}}static getConfigElement(){return document.createElement("sensor-graphs-card-editor")}static getStubConfig(){return{title:"Sensor Graphs",sensors:[]}}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._loadTimer)}_scheduleDataLoad(){Date.now()-this._lastLoad<6e4||(clearTimeout(this._loadTimer),this._loadTimer=setTimeout(()=>this._loadData(),100))}async _loadData(){if(!this._hass||!this._config?.sensors?.length)return;this._lastLoad=Date.now();const t=++this._loadId,e={};await Promise.all(this._config.sensors.filter(t=>t.entity).map(async t=>{e[t.entity]=await pt(this._hass,t.entity,this._activeRange.hours)})),t===this._loadId&&(this._historyData=e)}_selectRange(t){this._activeRange=t,this._lastLoad=0,this._loadData()}_onHover(t){this._hoverTime=t.detail.time}_onHoverEnd(){this._hoverTime=null}render(){if(!this._config)return B`
        <ha-card>
          <div class="empty">Bitte Karte konfigurieren</div>
        </ha-card>
      `;const t=this._config.sensors||[];return B`
      <ha-card>
        <div class="card-header">
          ${this._config.title?B`<div class="title">${this._config.title}</div>`:B`<div></div>`}

          <div class="time-buttons">
            ${At.map(t=>B`
                <button
                  class="time-btn ${this._activeRange.label===t.label?"active":""}"
                  @click=${()=>this._selectRange(t)}
                >
                  ${t.label}
                </button>
              `)}
          </div>
        </div>

        <div class="graphs-container">
          ${0===t.length?B`<div class="empty">Keine Sensoren konfiguriert</div>`:t.map(t=>{const e=this._hass?.states?.[t.entity];return B`
                    <sensor-graph
                      .entityId=${t.entity}
                      .label=${t.label||(e?.attributes?.friendly_name??t.entity)}
                      .unit=${e?.attributes?.unit_of_measurement??""}
                      .color=${t.color||"var(--primary-color)"}
                      .data=${this._historyData[t.entity]??[]}
                      .currentValue=${e?.state??""}
                      .hoverTime=${this._hoverTime}
                      @sgc-hover=${this._onHover}
                      @sgc-hover-end=${this._onHoverEnd}
                    ></sensor-graph>
                  `})}
        </div>
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"sensor-graphs-card",name:"Sensor Graphs Card",description:"Historische Sensor-Graphen als Flächendiagramm",preview:!0});
