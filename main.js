var typed = new Typed (".text", {
    strings: ["Frontend Developer" , "UI/UX Designer" , "Web Developer"],
    typeSpeed:70,
    backSpeed:50,
    backDelay:1000,
    loop:true
});


// Let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         Let top = window.scrollY;
//         Let offset = sec.offsetTop - 150;
//         Let height = sec.offsetHeight;
//         Let id = sec.getAttribute('id');
        
//         if (top >= offset && top offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {

//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });

//             let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
//             if (activeLink) {
//                 activeLink.classList.add('active');
//             }
//         }
//     });
// };
