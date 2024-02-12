const $ = document
let menuIcon = $.querySelector('#menuicon')
let menuu = $.querySelector('#menuu')
let overlaymenu = $.querySelector('#overlaymenu')
let menumobile = $.querySelector('#menumobile')
let wrappDetails = $.querySelector('#wrapp-details')
let listEducation = $.querySelectorAll('.education')

const detailsArray = [
    {id:1,detail: `  <nav class="p-2" id="1">

    <ul style="margin:10px;">
     <label for="Master" class="font-v-medium  text-xl" ">کارشناسی:</label>
     <li class=" lg:list-disc lg:mr-10  mt-3" id="Master">مهندسی کامپیوتر گرایش نرم افزار از دانشگاه آزاد ماهشهر</li>
   </ul>
   <ul style="margin:10px;">
<label for="Masters" class="font-v-medium  text-xl" ">کارشناسی ارشد:</label>
     <li class=" lg:list-disc lg:mr-10  mt-3" id="Masters">مهندسی صنایع گرایش مدیریت سیستم و بهره وری از دانشگاه صنعتی امیرکبیر</li>
   </ul>
   <ul style="margin:10px;">
<label for="Masters" class="font-v-medium  text-xl" ">زبان های خارجه:</label>
     <li class=" lg:list-disc lg:mr-10  mt-3" id="Masters">تسلط کامل بر زبان انگلیسی</li>
     <li class=" lg:list-disc lg:mr-10 " id="Masters">تسلط کامل بر زبان عربی</li>
   </ul>
  </nav>`},
  {id:2, detail:`<nav class="p-2" id="2">
  <ul class="[&>*]:lg:list-decimal [&>*]:lg:mr-8 p-2 [&>*]:mb-4 mt-2 ">
    <li>مدرس سیستم مدیریت یکپارچه</li>
    <li>مدرس سیستم مدیریت کیفیت</li>
    <li>مدرس دوره مدیریت استراتژیک</li>
    <li>مدرس مدیریت ایمنی و بهداشت حرفه ای</li>
    <li>مدرس سیستم مدیریت زیست محیطی</li>
    <li>مدرس مدل تعالی سازمانی</li>
  </ul>
 </nav>`},
 {id:3, detail: `<nav class="p-2" id="3">
 <ul class="[&>*]:lg:list-decimal [&>*]:lg:mr-8 p-2 [&>*]:mb-4 mt-2 ">
   <li>مدیریت استراتژیک (سازماندهی و رهبری) </li>
   <li>سیستم نگهداری و تعمیرات کامپیوتری شده</li>
   <li>مدیریت کیفیت و بهره وری</li>
   <li>مدیریت تولید و پروژه</li>
   <li>اصول حسابداری و هزینه یابی</li>
   <li>اصول آراستگی سازمانی</li>
   <li>اصول و روشهای تیم سازی در سازمان</li>
 
 </ul>
</nav>`},
 {id:4, detail:` <nav class="p-2" id="4">
 <ul class="[&>*]:lg:list-decimal [&>*]:lg:mr-8 p-2 [&>*]:text-wrap [&>*]:mb-4 mt-2 ">
   <li>سر ممیز رسمی سیستم مدیریت کیفیت</li>
   <li>ارزیاب رسمی مدل تعالی صنعت پتروشیمی</li>
   <li>راه انداز پروژه های مدیریت استراتژیک، مدیریت فرآیندهای سازمانی</li>
   <li>راه انداز پروژه های استقرار سیستم های مدیریتی</li>
   <li>ممیز و راه انداز نظام آراستگی سازمانی</li>
   <li>آشنایی کلی با مدل جامع بلوغ مدیریت پروژه</li>
   <li>آشنایی کامل با سیستم تعالی سازمانی مدیریت</li>
 </ul>
</nav>`}
]
// menu mobile
let menubool = true
menuu.addEventListener('click', () =>{
if(menubool){
    menuIcon.setAttribute('href' , '#multiply')
    overlaymenu.classList.remove('hidden')
    overlaymenu.classList.add('block')
    menumobile.style.top = "2.5rem" 
 
    menubool = false
}else{
    menuIcon.setAttribute('href' , '#menuiconn')
    overlaymenu.classList.remove('block')
    overlaymenu.classList.add('hidden')
    menumobile.style.top = "-20rem" 
    menubool = true
}
})


wrappDetails.innerHTML = detailsArray[0].detail
listEducation.forEach(education =>{
   
    
    education.addEventListener('click' , (event) =>{
        clearEnable()
        education.classList.add('enable')
      setDetails(event.target.id) 
    })
})

let setDetails = (idd) =>{
   detailsArray.forEach(item =>{
    if(item.id === +idd)
    wrappDetails.innerHTML = item.detail
    })
    
}
const clearEnable = () =>{
    listEducation.forEach(education =>{
        console.log(education);
        education.classList.remove("enable")
    }) 
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
    effect: 'slide',
  loop: true,
lazy:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    enabled: true,
    delay: 4000,
  },

  // Navigation arrows
 

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});