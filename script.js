const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
if(menuToggle) menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));

const themeToggle=document.querySelector(".theme-toggle");
const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="light") document.body.classList.add("light");
if(themeToggle) themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("portfolio-theme",document.body.classList.contains("light")?"light":"dark");
});

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>nav?.classList.remove("open"));
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("show");});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const year=document.getElementById("year");
if(year) year.textContent=new Date().getFullYear();

const form=document.getElementById("contactForm");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    document.getElementById("formNote").textContent="Pesan berhasil divalidasi. Untuk benar-benar mengirim pesan, hubungkan form ke backend/email service.";
    form.reset();
  });
}
