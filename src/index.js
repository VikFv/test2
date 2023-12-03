import './styles/main.scss'

import logo from './images/logo.svg';
import arrowImg from './images/arrow.svg';
import dateImg from './images/date.svg';
import menu_phone from './images/menu_phone.svg';
import menu_phone_hide from './images/menu_phone-hide.svg';
import liArrow from './images/liArrow.svg';
import liArrowSelect from './images/liArrowSelect.svg';
import firstImg from './images/first.png';
import secondImg from './images/second.png';
import thirdImg from './images/play.png';
import group1 from './images/group1.png';
import group2 from './images/group2.png';
import group3 from './images/group3.png';
import group from './images/group.png';
import star from './images/star.png';
import direction1 from './images/direction1.png';
import direction2 from './images/direction2.png';
import direction3 from './images/direction3.png';
import blogCardImg1 from './images/blogCardImg1.png';
import blogCardImg2 from './images/blogCardImg2.png';
import blogCardImg3 from './images/blogCardImg3.png';
import blogCardImg4 from './images/blogCardImg4.png';
import impressionImg1 from './images/impressionImg1.png';
import impressionImg2 from './images/impressionImg2.png';
import impressionImg3 from './images/impressionImg3.png';
import impressionImg4 from './images/impressionImg4.png';
import impressionImg5 from './images/impressionImg5.png';
import impressionImg6 from './images/impressionImg6.png';
import socialMedia1 from './images/socialMedia1.png';
import socialMedia2 from './images/socialMedia2.png';
import socialMedia3 from './images/socialMedia3.png';
import socialMedia4 from './images/socialMedia4.png';

document.getElementsByClassName("header")[0].style.height = window.innerHeight + "px";

window.addEventListener('resize', function () {
   setTimeout(function () {
      document.getElementsByClassName("header")[0].style.height = window.innerHeight + "px";
   }, 50);

   if (window.innerWidth < 927) {
      elemPos("direction", 285 + 20);
      elemPos("impressionImg", 280 + 20);
   } else if (window.innerWidth >= 927) {
      stepDirection = 0;
      stepImpressionImg = 0;
   }

   if (window.innerWidth < 1080) {
      elemPos("blog-card", 285 + 24);
   } else if (window.innerWidth >= 1080) {
      stepBlogCard = 0;
   }

   redrawText();
});

window.addEventListener('orientationchange', function () {
   setTimeout(function () {
      document.getElementsByClassName("header")[0].style.height = window.innerHeight + "px";
   }, 50);
});

window.addEventListener('scroll', function () {
   if (window.scrollY > window.innerHeight)
      document.getElementsByClassName("upScroll")[0].style.display = "flex";
   else
      document.getElementsByClassName("upScroll")[0].style.display = "none";
});

if (window.scrollY > window.innerHeight)
   document.getElementsByClassName("upScroll")[0].style.display = "flex";
else
   document.getElementsByClassName("upScroll")[0].style.display = "none";

document.getElementsByClassName("logo")[0].setAttribute("src", logo);

document.getElementsByClassName("menu-phone-img")[0].setAttribute("src", menu_phone);

document.getElementsByClassName("menu-phone-hide_img")[0].setAttribute("src", menu_phone_hide);

document.getElementsByClassName("date-img")[0].setAttribute("src", dateImg);

for (let i = 0; i < document.getElementsByClassName("arrow-img").length; i++)
   document.getElementsByClassName("arrow-img")[i].setAttribute("src", arrowImg);

var menuPhoneItem;
for (let j = 0; j < document.getElementsByClassName("menu-phone-item").length; j++)
   document.getElementsByClassName("menu-phone-item")[j].addEventListener('click', function () {
      if (menuPhoneItem == null) {
         menuPhoneItem = event.target;
         menuPhoneItem.style.background = "url(" + liArrowSelect + ") no-repeat";
         menuPhoneItem.style.backgroundPositionY = "-1px";
         menuPhoneItem.style.color = "#F2BE22";
         menuPhoneItem.style.textDecoration = "underline";
         setTimeout(function () {
            document.getElementsByClassName("block-menu-phone")[0].style.display = "none";
         }, 500);
      } else {
         menuPhoneItem.style.background = "url(" + liArrow + ") no-repeat";
         menuPhoneItem.style.backgroundPositionY = "-1px";
         menuPhoneItem.style.color = "#FDFDFD";
         menuPhoneItem.style.textDecoration = "none";
         menuPhoneItem = event.target;
         menuPhoneItem.style.background = "url(" + liArrowSelect + ") no-repeat";
         menuPhoneItem.style.backgroundPositionY = "-1px";
         menuPhoneItem.style.color = "#F2BE22";
         menuPhoneItem.style.textDecoration = "underline";
         setTimeout(function () {
            document.getElementsByClassName("block-menu-phone")[0].style.display = "none";
         }, 500);
      }
   });

document.getElementsByClassName("menu-phone-hide_img")[0].addEventListener('click', function () {
   document.getElementsByClassName("block-menu-phone")[0].style.display = "none";
});

document.getElementsByClassName("menu-phone-img")[0].addEventListener('click', function () {
   document.getElementsByClassName("block-menu-phone")[0].style.display = "flex";
});

document.getElementsByClassName("content-first-img-first")[0].setAttribute("src", secondImg);
document.getElementsByClassName("content-first-img-second")[0].setAttribute("src", firstImg);
document.getElementsByClassName("content-first-img-third")[0].setAttribute("src", thirdImg);

document.getElementsByClassName("img1")[0].setAttribute("src", group1);
document.getElementsByClassName("img2")[0].setAttribute("src", group2);
document.getElementsByClassName("img3")[0].setAttribute("src", group3);
document.getElementsByClassName("block2-content-block-img")[0].setAttribute("src", group);

for (let f = 0; f < document.getElementsByClassName("star").length; f++)
   document.getElementsByClassName("star")[f].setAttribute("src", star);

document.getElementsByClassName("direction")[0].style.background = "url(" + direction1 + ") no-repeat";
document.getElementsByClassName("direction")[1].style.background = "url(" + direction2 + ") no-repeat";
document.getElementsByClassName("direction")[2].style.background = "url(" + direction3 + ") no-repeat";

document.getElementsByClassName("blog-card-img")[0].setAttribute("src", blogCardImg1);
document.getElementsByClassName("blog-card-img")[1].setAttribute("src", blogCardImg2);
document.getElementsByClassName("blog-card-img")[2].setAttribute("src", blogCardImg3);
document.getElementsByClassName("blog-card-img")[3].setAttribute("src", blogCardImg4);

document.getElementsByClassName("impressionImg")[0].setAttribute("src", impressionImg1);
document.getElementsByClassName("impressionImg")[1].setAttribute("src", impressionImg2);
document.getElementsByClassName("impressionImg")[2].setAttribute("src", impressionImg3);
document.getElementsByClassName("impressionImg")[3].setAttribute("src", impressionImg4);
document.getElementsByClassName("impressionImg")[4].setAttribute("src", impressionImg5);
document.getElementsByClassName("impressionImg")[5].setAttribute("src", impressionImg6);

document.getElementsByClassName("social-media")[0].setAttribute("src", socialMedia1);
document.getElementsByClassName("social-media")[1].setAttribute("src", socialMedia2);
document.getElementsByClassName("social-media")[2].setAttribute("src", socialMedia3);
document.getElementsByClassName("social-media")[3].setAttribute("src", socialMedia4);

if (window.innerWidth < 927) {
   elemPos("direction", 285 + 20);
   elemPos("impressionImg", 280 + 20);
}

if (window.innerWidth < 1080)
   elemPos("blog-card", 285 + 24);

var blogCardContentTextLengthArr = [];

for (let p = 0; p < document.getElementsByClassName("blog-card-content-text2").length; p++) {
   blogCardContentTextLengthArr.push(document.getElementsByClassName("blog-card-content-text2")[p].innerHTML);
}

redrawText();

function redrawText() {
   if (window.innerWidth < 1080) {
      for (let i = 0; i < blogCardContentTextLengthArr.length; i++) {
         let text = blogCardContentTextLengthArr[i];
         if (text.length > 122) {
            document.getElementsByClassName("blog-card-content-text2")[i].innerText = text.substr(0, 122) + "...";
         } else {
            document.getElementsByClassName("blog-card-content-text2")[i].innerText = text;
         }
      }
   } else if (window.innerWidth >= 1080) {
      for (let i = 0; i < blogCardContentTextLengthArr.length; i++) {
         let text = blogCardContentTextLengthArr[i];
         if (text.length > 180) {
            document.getElementsByClassName("blog-card-content-text2")[i].innerText = text.substr(0, 180) + "...";
         } else {
            document.getElementsByClassName("blog-card-content-text2")[i].innerText = text;
         }
      }
   }
}

function elemPos(targetElemName, stepVal) {
   for (let g = 0; g < document.getElementsByClassName(targetElemName).length; g++)
      document.getElementsByClassName(targetElemName)[g].style.left = g * stepVal + "px";
}

var stepDirection = 0;
document.getElementsByClassName("block3-content-container")[0].addEventListener('click', function () {
   sliderClick(stepDirection, "direction", 285 + 20, 927);
});

var stepBlogCard = 0;
document.getElementsByClassName("block4-content-container")[0].addEventListener('click', function () {
   sliderClick(stepBlogCard, "blog-card", 285 + 24, 1080);
});

var stepImpressionImg = 0;
document.getElementsByClassName("block5-content-container")[0].addEventListener('click', function () {
   sliderClick(stepImpressionImg, "impressionImg", 280 + 20, 927);
});

function sliderClick(step, targetElemName, stepVal, windowWidth) {

   if (window.innerWidth >= windowWidth)
      return;

   let maxStep = document.getElementsByClassName(targetElemName).length;

   for (let i = 0; i < maxStep; i++) {
      let curTargetElem = document.getElementsByClassName(targetElemName)[i];
      let leftPos = parseInt(document.getElementsByClassName(targetElemName)[i].style.left);

      curTargetElem.style.zIndex = 1;

      let newLeftPos = leftPos - (stepVal);

      if (newLeftPos < 0) {
         curTargetElem.style.zIndex = 0;
         setTimeout(function () {
            curTargetElem.style.left = stepVal * (maxStep - 1) + "px";
         }, 500);
      } else {
         curTargetElem.style.zIndex = 1;
         setTimeout(function () {
            curTargetElem.style.left = newLeftPos + "px";
         }, 500);
      }
   };

   step = step + 1;
   if (step == maxStep)
      step = 0;
}
