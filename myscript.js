mp_w = document.querySelector("#mainpage_white")
mp_c = document.querySelector("#nav_container")
mp_t = document.querySelector("#mainpage_title")
m_t = document.querySelector("#me_title")
g_t = document.querySelector("#gallery_text")
g_c = document.querySelector("#gallery_container")

console.log(mp_w.style.left)
 window.addEventListener("scroll", e =>{
    console.log(scrollY)
    mp_t.style.top = 50 - (scrollY*0.226628895184136) + "vh"
    mp_c.style.top = 5 - (scrollY*0.226628895184136) + "vh" 
    m_t.style.top =  100 - (scrollY*0.226628895184136)+ "vh" 
    g_t.style.top =  240 + "vh" 

    mp_w.style.left = 35 + "vw"
    mp_w.style.width = 65 + "vw"
    m_t.style.left = 12 + "%" 
    g_c.style.marginTop = 100 + "vh"


    if(scrollY > 300){
        mp_w.style.left = 0 + "vw"
    }
    
    if(scrollY > 500){
        g_t.style.top =  175 - (scrollY*0.226628895184136)+ "vh" 
        mp_w.style.left = 0 + "vw"
        mp_w.style.width = 100 + "vw"
        m_t.style.left = -100 + "%" 
        g_c.style.marginTop = 5 + "vh"
    }
})

r1 = document.querySelector("#r1")
r1.addEventListener("click", e=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
r2.addEventListener("click", e=>{
    window.scrollTo({ top: 400, behavior: 'smooth' })
})
r3.addEventListener("click", e=>{
    window.scrollTo({ top: 700, behavior: 'smooth' })
})
r4.addEventListener("click", e=>{
    window.scrollTo({ top: 2400, behavior: 'smooth' })
})
