window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("hide"),650));
const screens=[...document.querySelectorAll(".screen")];
function show(id){
 screens.forEach(s=>s.classList.remove("active"));
 const t=document.getElementById(id); t.classList.add("active"); t.scrollTop=0;
 window.scrollTo({top:0,behavior:"instant"});
}
document.querySelectorAll("[data-next]").forEach(b=>b.addEventListener("click",()=>show(b.dataset.next)));
