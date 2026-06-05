function buyAccount(){
const msg=encodeURIComponent('أريد شراء حساب من EFootball Store 23');
window.open('https://wa.me/213657492675?text='+msg,'_blank');
}
function sellAccount(){
let n=document.getElementById('name').value;
let p=document.getElementById('phone').value;
let d=document.getElementById('desc').value;
const msg=encodeURIComponent(`طلب بيع حساب%0Aالاسم: ${n}%0Aالهاتف: ${p}%0Aالوصف: ${d}`);
window.open('https://wa.me/213657492675?text='+msg,'_blank');
}