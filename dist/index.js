"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var a=u(function(h,i){
var n=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-log1p/dist'),s=require('@stdlib/math-base-special-sqrt/dist');function N(e,r){return n(r)||r<0?NaN:n(e)||e<0||e>1?NaN:r===0?0:r*s(-2*v(-e))}i.exports=N
});var f=u(function(j,o){
var l=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/stats-base-dists-degenerate-quantile/dist').factory,q=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-log1p/dist'),d=require('@stdlib/math-base-special-sqrt/dist');function F(e){if(q(e)||e<0)return l(NaN);if(e===0)return y(0);return r;function r(t){return q(t)||t<0||t>1?NaN:e*d(-2*x(-t))}}o.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=a(),R=f();O(c,"factory",R);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
