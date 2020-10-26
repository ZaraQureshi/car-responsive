const navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav_content');
    const nav_links=document.querySelectorAll('.nav_content li');
    const slider=document.querySelector('.slider');
    
        burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active'); 
        nav_links.forEach((link,index)=>{
            if(link.style.animation) {
                link.style.animation=''
            } 
            else{
                link.style.animation=`nav_link_fade 0.5s ease-in-out forwards ${index/7 }s`; 
                
            } 
            });  
        slider.classList.toggle('navbar_active');
        
        });
        
}

const slider=()=>{
    const slide=[
        {
            id:1,
            image:'images/car_1.jpg',
            name:'Classic car',
            info:'Lorem ipsum Lorem ipsum'
        },
        {
            id:2,
            image:'images/car_2.jpg',
            name:'Sports car',
            info:'Lorem ipsum Lorem ipsum'
        },
        {
            id:3,
            image:'images/car_3.jpg',
            name:'Vintage car',
            info:'Lorem ipsum Lorem ipsum'
        }
    ]
    const prev=document.getElementById('prev');
    const next=document.getElementById('next');
    let name=document.getElementById('car_name');
    let info=document.getElementById('car_info');
    let image=document.querySelector('.image_slider');

    let count=2;

    prev.addEventListener('click',()=>{
        count--;
        if(count<0){
            count=slide.length-1;
        }
        showSlide(count);
        
    })
    next.addEventListener('click',()=>{
        count++;
        if(count>slide.length-1){
            count=0;
        }
        showSlide(count);
    
    })

    function showSlide(count){
        const item=slide[count];
        name.textContent=item.name;
        image.style.backgroundImage= "url(" +item.image + ")";
        info.textContent=item.info;
        // image.classList.toggle('fade');
        // name.classList.toggle('text_fade');
    }
}
const text_fade=()=>{
    const item=slide[count];
    name.textContent=item.name;
    image.style.backgroundImage= "url(" +item.image + ")";
    info.textContent=item.info;
    image.classList.add('fade');
    name.classList.add('text_fade');
}

const register=()=>{
    const regBtn=document.querySelector('.reg');
    const modal=document.querySelector('.modal_bg');
    const regSubmit=document.querySelector('.submitBtn');
    regBtn.addEventListener('click',()=>{
        modal.classList.add('modal_active');
    });
    // regSubmit.addEventListener('click',()=>{
    //     regSubmit.classList.remove('modal_active');
    // });
}
function validate(){
    var email=document.getElementById('email').value;
    var ph=document.getElementById("contact").value;
    var regx=/^([a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,20})(.[a-z]{2,20})$/;
    
    var reg=/^[7-9]\d{9}$/;
    if(regx.test(email)||reg.test(ph)){
        alert("valid");
            }else{
        document.getElementById("lb1").style.visibility="visible";
          document.getElementById("lb2").style.visibility="visible";
    }
}
register();
navSlide();
slider();
