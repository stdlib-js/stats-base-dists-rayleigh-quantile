// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-quantile@v0.2.1-esm/index.mjs";function d(t,i){return s(i)||i<0||s(t)||t<0||t>1?NaN:0===i?0:n(-2*(i*i)*e(-t))}function m(t){var d;return s(t)||t<0?i(NaN):0===t?r(0):(d=t*t,function(t){if(s(t)||t<0||t>1)return NaN;return n(-2*d*e(-t))})}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
