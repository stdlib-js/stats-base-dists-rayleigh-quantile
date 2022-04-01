// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-quantile@esm/index.mjs";var a=s,d=e,m=n;var o=function(t,s){return a(s)||s<0||a(t)||t<0||t>1?NaN:0===s?0:m(-2*(s*s)*d(-t))},l=r,j=i.factory,p=s,c=e,f=n;var h=o,u=function(t){var s;return p(t)||t<0?l(NaN):0===t?j(0):(s=t*t,function(t){if(p(t)||t<0||t>1)return NaN;return f(-2*s*c(-t))})};t(h,"factory",u);var b=h;export{b as default,u as factory};
//# sourceMappingURL=index.mjs.map
