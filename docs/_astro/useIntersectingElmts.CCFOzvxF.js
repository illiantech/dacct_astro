import{h as o,A as u,y as f}from"./hooks.module.BIP-7rWD.js";const l=({ref:t,options:s})=>{const[c,i]=o(!1),e=u(null);return f(()=>{const r=t.current;return e.current=new IntersectionObserver(([n])=>{console.log(`intersecting: ${n.isIntersecting}`),i(n.isIntersecting)},s),r&&e.current.observe(r),()=>{r&&e.current?.disconnect()}},[]),{intersecting:c,refObserver:e.current}};export{l as u};
