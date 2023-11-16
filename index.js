const menubar  = document.getElementById("mnubar");
const navbar = document.querySelector(".navbar");
const first = document.getElementById("btn1");
const menu1 = document.querySelector(".femnu");
const second = document.getElementById("btn2");
const menu2 = document.querySelector(".femnu2");
            function menuBar(){
                navbar.classList.toggle("active");
            }
            function firstMenu(){
                menu1.classList.toggle("active2");
            }
            function firstMenu1(){
                menu2.classList.toggle("active3");
            }


            menubar.addEventListener('click',menuBar);
            first.addEventListener('click',firstMenu);
            second.addEventListener('click',firstMenu1);

           