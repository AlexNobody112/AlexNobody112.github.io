(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();function m(e,n,r,a){e.beginPath(),e.rect(0,0,n,r),e.fillStyle=a,e.fill(),e.translate(0,r),e.rotate(-Math.PI/2),e.beginPath(),e.moveTo(40,40),e.lineTo(400,40),e.moveTo(40,40),e.lineTo(40,700),e.stroke()}function y(e,n,r,a=8){let o=100;requestAnimationFrame(t);function t(){n>o&&(o+=5),e.fillStyle="gray",e.lineWidth=1,e.beginPath(),e.fillRect(o-30,r-10,25,20),e.arc(o,r,a,0,2*Math.PI),e.fillStyle="black",e.fill(),e.stroke(),o!==n&&requestAnimationFrame(t)}}function M(e,n,r,a,o){const t=(n-a)/(r-o),i=n-r*t;let l=r,d;requestAnimationFrame(s);function s(){d=Math.floor(t*l+i),l+=4,e.beginPath(),e.strokeStyle="black",e.moveTo(n,r),e.lineTo(d,l),e.stroke(),!(l>=o)&&requestAnimationFrame(s)}}function p(e,n,r){const a=n*.125;r.reduce((o,t,i,l)=>{const d=(n-a*2)/(l.length-1),s=i===0?a:o.x+d;return o.y&&setTimeout(()=>M(e,o.y,o.x,t.y,s),500),y(e,t.y,s),{x:s,y:t.y}},a)}const h=750,u=420,f=document.getElementById("app"),g=()=>{for(;f.firstChild;)f.removeChild(f.firstChild)};function c(){const e=Math.random()*10>5?[{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100}]:[{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100},{y:Math.floor(Math.random()*150)+100}],n=document.createElement("canvas");n.width=h,n.height=u;const r=n.getContext("2d");m(r,h,u,"gray"),p(r,h,e),console.log("object"),g(),f.appendChild(n)}window.onload=function(){c()};f.addEventListener("click",()=>c());
