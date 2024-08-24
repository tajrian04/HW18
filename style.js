// let name = "userName";
// let password = "12345678";

// function userLog(user_name, user_pass){
//     if(name = "user_name"){
//         if(password = "user_pass"){
//             document.write('Successfully logged in');
//         }else{
//             document.write('Invalid password');
//         }
//     }else{
//         document.write('Invalid username');
//     }
// }
// userLog("userName","12345678");

/** JS LOOP */
// const cars = ["BMW" , "Volvo" , "Saab" , "Ford" , "Fiat" , "Audi"]
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
//   } 

let on = document.querySelector('.on');
let img = document.querySelector('.img');
let off = document.querySelector('.off');

on.addEventListener('click', function(){
    img.src ="https://www.w3schools.com/js/pic_bulbon.gif";
});

off.addEventListener('click', ()=>{
    img.src = "https://www.w3schools.com/js/pic_bulboff.gif";
});