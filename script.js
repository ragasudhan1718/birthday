const screens=[...document.querySelectorAll(".screen")];
function show(id){screens.forEach(s=>s.classList.remove("active"));document.getElementById(id).classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-next]").forEach(b=>b.addEventListener("click",()=>show(b.dataset.next)));
