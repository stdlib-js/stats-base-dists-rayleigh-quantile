"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(j,i){
var a=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-log1p/dist'),N=require('@stdlib/math-base-special-sqrt/dist');function l(e,r){var t;return a(r)||r<0?NaN:a(e)||e<0||e>1?NaN:r===0?0:(t=r*r,N(-2*t*s(-e)))}i.exports=l
});var v=n(function(k,f){
var y=require('@stdlib/utils-constant-function/dist'),x=require('@stdlib/stats-base-dists-degenerate-quantile/dist').factory,o=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-log1p/dist'),F=require('@stdlib/math-base-special-sqrt/dist');function O(e){var r;if(o(e)||e<0)return y(NaN);if(e===0)return x(0);return r=e*e,t;function t(u){return o(u)||u<0||u>1?NaN:F(-2*r*d(-u))}}f.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),b=v();R(c,"factory",b);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
