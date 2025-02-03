import { createVirtualDOM } from "../src/createVirtualDom";

export function jsx(type, props, ...children) {
  return createVirtualDOM(type, props, ...children);
}

export function jsxs(type, props, ...children) {
  return createVirtualDOM(type, props, ...children);
}
