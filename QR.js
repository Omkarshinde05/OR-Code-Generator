const qrtext=document.getElementById("qr-text");
const sizes=document.getElementById("size");
const generatebtn=document.getElementById("Generatebtn");
const downloadbtn=document.getElementById("Downloadbtn");
const qrbody=document.querySelector('.qr-body');
 let size=sizes.value;
generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isemptyinput();

});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isemptyinput();
});
downloadbtn.addEventListener('click',()=>{
    let img=document.querySelector(".qr-body img");
    if(img!==null){
        let imgatrr= img.getAttribute('src');
        downloadbtn.setAttribute('href',imgatrr)
    } else{
        downloadbtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`);
    }
});

function isemptyinput(){
    if(qrtext.value.length>0){
   generateQRCode();
    } else{
        alert("Enter the text")
    }
}
function generateQRCode(){
     qrbody.innerHTML="";
    new QRCode(qrbody,{
        text:qrtext.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000"
    });
};
