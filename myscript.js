mp_w = document.querySelector("#mainpage_white")
mp_c = document.querySelector("#nav_container")
mp_t = document.querySelector("#mainpage_title")
m_t = document.querySelector("#me_title")
g_t = document.querySelector("#gallery_text")
g_c = document.querySelector("#gallery_container")

console.log(mp_w.style.left)
 window.addEventListener("scroll", e =>{
    var mq = window.matchMedia( "(max-width: 2000px)" );
if (mq.matches) {
    g_t.style.top =  10 - (scrollY*0.1)+ "vh" 
}
else{
    
    console.log(scrollY)
    mp_t.style.top = 50 - (scrollY*0.1) + "vh"
    mp_c.style.top = 5 - (scrollY*0.1) + "vh" 
    m_t.style.top =  80 - (scrollY*0.1)+ "vh" 
    g_t.style.top =  240 + "vh" 
    
    mp_w.style.left = 35 + "vw"
    mp_w.style.width = 65 + "vw"
    m_t.style.left = -100 + "%" 
    g_c.style.marginTop = 100 + "vh"
    
    
    if( scrollY > 400 &&  1000 > scrollY){
        mp_w.style.left = 0 + "vw"
        m_t.style.left = 12 + "%" 
    }
    
    if(scrollY >= 900){
        g_t.style.top =  150 - (scrollY*0.1)+ "vh" 
        mp_w.style.left = 0 + "vw"
        mp_w.style.width = 100 + "vw"
        m_t.style.left = -100 + "%" 
        g_c.style.marginTop = 5 + "vh"
    }
}
})

r1 = document.querySelector("#r1")
r2 = document.querySelector("#r2")
r3 = document.querySelector("#r3")
r4 = document.querySelector("#r4")

r1.addEventListener("click", e=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
r2.addEventListener("click", e=>{
    window.scrollTo({ top: 650, behavior: 'smooth' })
})
r3.addEventListener("click", e=>{
    window.scrollTo({ top: 1400, behavior: 'smooth' })
})
r4.addEventListener("click", e=>{
    window.scrollTo({ top: 4600, behavior: 'smooth' })
})
