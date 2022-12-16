const icon = document.getElementById("icon");
icon.addEventListener("click", () => {
document.body.classList.toggle("light-theme");
if (document.body.classList.contains("light-theme")) {
icon.src ="PNG & SVG/moon.png"; 
} else {
icon.src = "PNG & SVG/sun.png";
}


});
const icon2 = document.getElementById("icon2");
icon2.addEventListener("click", () => {
document.body.classList.toggle("light-theme");
if (document.body.classList.contains("light-theme")) {
icon2.src ="PNG & SVG/moon.png"; 
} else {
icon2.src = "PNG & SVG/sun.png";
}


})
const menu = document.getElementById("menu");
const vr = document.getElementById("vr");
menu.addEventListener("click", ()=>{
    hundmenu()
function hundmenu(){
    
menu.classList.toggle("is-active");
vr.classList.toggle("is-active");
}
});
function fun(){
        
    if (document.getElementById("active").getAttribute('src')=="PNG & SVG/Asset 2.svg"){
    document.getElementById("mydiv1").style.margin="0 0 0 3.5rem";
    document.getElementById("mydiv1").style.opacity="100%";
    document.getElementById("mydiv1").style.width="3.2rem";
    document.getElementById("mydiv2").style.margin="0 0 0 6.5rem";
    document.getElementById("mydiv2").style.opacity="100%";
    document.getElementById("mydiv2").style.width="3.2rem";
    document.getElementById("mydiv3").style.margin="0 0 0 -1.7rem";
    document.getElementById("mydiv3").style.opacity="100%";
    document.getElementById("mydiv3").style.width="3.2rem";
    document.getElementById("mydiv4").style.width="3.2rem";
    document.getElementById("mydiv4").style.margin="0 0 0 -4.7rem";
    document.getElementById("mydiv4").style.opacity="100%";
    document.getElementById("mydiv4").style.width="3.2rem";
    document.getElementById("active").src="PNG & SVG/Artboard 1.svg";
    document.getElementById("active").style.width="1.5rem";
    document.getElementById("active").style.margin="1.1rem 0 0 1.7rem";
    document.getElementById("active2").src="PNG & SVG/Artboard 2.svg";
    document.getElementById("active2").style.width="1.5rem";
    document.getElementById("active2").style.margin="1.1rem 0 0 1.7rem";
    document.getElementById("mydiv1").style.rotate="360deg";
    document.getElementById("mydiv2").style.rotate="360deg";
    document.getElementById("mydiv3").style.rotate="-360deg";
    document.getElementById("mydiv4").style.rotate="-360deg";
    }

else {
    document.getElementById("mydiv1").style.margin="0 0 0 12px";
    document.getElementById("mydiv1").style.opacity="0";
    document.getElementById("mydiv1").style.width="2.5rem";
    document.getElementById("mydiv2").style.margin="0 0 0 12px";
    document.getElementById("mydiv2").style.opacity="0";
    document.getElementById("mydiv2").style.width="2.5rem";
    document.getElementById("mydiv3").style.margin="0 0 0 12px";
    document.getElementById("mydiv3").style.opacity="0";
    document.getElementById("mydiv3").style.width="2.5rem";
    document.getElementById("mydiv4").style.width="2.5rem";
    document.getElementById("mydiv4").style.margin="0 0 0 12px";
    document.getElementById("mydiv4").style.opacity="0";
    document.getElementById("mydiv4").style.width="2.5rem";
    document.getElementById("active").src="PNG & SVG/Asset 2.svg";
    document.getElementById("active").style.width="3.2rem";
    document.getElementById("active").style.margin="0 0 0 12px";
    document.getElementById("active2").src="PNG & SVG/SVG/Asset 2.svg";
    document.getElementById("active2").style.width="3.2rem";
    document.getElementById("active2").style.margin="0 0 0 12px";
    document.getElementById("mydiv1").style.rotate="270deg";
    document.getElementById("mydiv2").style.rotate="270deg";
    document.getElementById("mydiv3").style.rotate="-270deg";
    document.getElementById("mydiv4").style.rotate="-270deg";
    

}}
function fun2(m){
    if(m==1){
    document.getElementById("bt").style.display="contents";  
    document.getElementById("no").style.display="none";
    document.getElementById("no2").style.display="none";
    document.getElementById("no1").style.display="block"; } 
    else{
    document.getElementById("bt").style.display="none";
    document.getElementById("no2").style.display="block";  
    document.getElementById("no").style.display="block";
    document.getElementById("no1").style.display="none"; } 
}
function fun11(m){
    if (document.getElementById("hid1").style.display==0 || document.getElementById("hid1").style.display=="none" ){
    document.getElementById("hid1").style.display="contents";
    document.getElementById("hid11").style.display="contents";
    document.getElementById("crd1").style.width="250px";
    document.getElementById("crd1").style.margin="0 0";
    
}


else{
    document.getElementById("crd1").style.margin=" 10rem 0";
    document.getElementById("hid1").style.display="none";
    document.getElementById("hid11").style.display="none";
    document.getElementById("crd1").style.width="160px";
    }
}


function fun12(m){

    if (document.getElementById("hid2").style.display==0 || document.getElementById("hid2").style.display=="none" ){
    document.getElementById("hid2").style.display="contents";
    document.getElementById("hid12").style.display="contents";
    document.getElementById("crd2").style.width="250px";
    document.getElementById("crd2").style.margin="0 0";

}

else{
    document.getElementById("crd2").style.margin=" 10rem 0";
    document.getElementById("hid2").style.display="none";
    document.getElementById("hid12").style.display="none";
    document.getElementById("crd2").style.width="160px";
    }}


function fun13(m){

    if (document.getElementById("hid3").style.display==0 || document.getElementById("hid3").style.display=="none" ){
    document.getElementById("hid3").style.display="contents";
    document.getElementById("hid13").style.display="contents";
    document.getElementById("crd3").style.width="250px";
    document.getElementById("crd3").style.margin="0 0";

}

else{
    document.getElementById("crd3").style.margin=" 10rem 0";
    document.getElementById("hid3").style.display="none";
    document.getElementById("hid13").style.display="none";
    document.getElementById("crd3").style.width="160px";
    }}


function fun14(m){

    if (document.getElementById("hid4").style.display==0 || document.getElementById("hid4").style.display=="none" ){
    document.getElementById("hid4").style.display="contents";
    document.getElementById("hid14").style.display="contents";
    document.getElementById("crd4").style.width="250px";
    document.getElementById("crd4").style.margin="0 0";

}

else{
    document.getElementById("crd4").style.margin=" 10rem 0";
    document.getElementById("hid4").style.display="none";
    document.getElementById("hid14").style.display="none";
    document.getElementById("crd4").style.width="160px";
    }}
    function fun4(){
        
       if(screen.width<=1536){
        document.getElementById("rel").style.margin="0rem";
       }
        
        if (document.getElementById("im1").style.width=="0px"||document.getElementById("im1").style.width==0){
        document.getElementById("im1").style.width="70px";
        document.getElementById("im1").style.height="70px";
        document.getElementById("m1").style.height="70%";
        document.getElementById("im2").style.width="70px";
        document.getElementById("im2").style.height="70px";
        document.getElementById("m2").style.height="70%";
        document.getElementById("im3").style.width="70px";
        document.getElementById("im3").style.height="70px";
        document.getElementById("m3").style.height="70%";
        document.getElementById("im3").style.width="70px";
        document.getElementById("im3").style.height="70px";
        document.getElementById("m3").style.height="70%";
        document.getElementById("im4").style.width="70px";
        document.getElementById("im4").style.height="70px";
        document.getElementById("m4").style.height="70%";
        document.getElementById("im5").style.width="70px";
        document.getElementById("im5").style.height="70px";
        document.getElementById("m5").style.height="70%";
        document.getElementById("im6").style.width="70px";
        document.getElementById("im6").style.height="70px";
        document.getElementById("m6").style.height="70%";
        document.getElementById("im7").style.width="70px";
        document.getElementById("im7").style.height="70px";
        document.getElementById("m7").style.height="70%";
        document.getElementById("im8").style.width="70px";
        document.getElementById("im8").style.height="70px";
        document.getElementById("m8").style.height="70%";
        document.getElementById("im9").style.width="70px";
        document.getElementById("im9").style.height="70px";
        document.getElementById("m9").style.height="70%";
        document.getElementById("im10").style.width="70px";
        document.getElementById("im10").style.height="70px";
        document.getElementById("m10").style.height="70%";
        document.getElementById("im11").style.width="70px";
        document.getElementById("im11").style.height="70px";
        document.getElementById("m11").style.height="70%";
        document.getElementById("im12").style.width="70px";
        document.getElementById("im12").style.height="70px";
        document.getElementById("img1").style.height="500px";
        document.getElementById("img1").style.width="400px";
        document.getElementById("rel").style.margin="var(--mar)";
        document.getElementById("img2").style.width="70%";
        document.getElementById("img2").style.position="relative";
        document.getElementById("im1").style.position="relative";
        document.getElementById("im2").style.position="relative";
        document.getElementById("im3").style.position="relative";
        document.getElementById("im4").style.position="relative";
        document.getElementById("im5").style.position="relative";
        document.getElementById("im6").style.position="relative";
        document.getElementById("im7").style.position="relative";
        document.getElementById("im8").style.position="relative";
        document.getElementById("im9").style.position="relative";
        document.getElementById("im10").style.position="relative";
        document.getElementById("im11").style.position="relative";
        document.getElementById("im12").style.position="relative";
        document.getElementById("skill").style.display="flex";
        document.getElementById("img2").style.margin="0 0 0 0";
        document.getElementById("img2").style.display="block";
        document.getElementById("im1").style.opacity="100%";
        document.getElementById("im2").style.opacity="100%";
        document.getElementById("im3").style.opacity="100%";
        document.getElementById("im4").style.opacity="100%";
        document.getElementById("im5").style.opacity="100%";
        document.getElementById("im6").style.opacity="100%";
        document.getElementById("im7").style.opacity="100%";
        document.getElementById("im8").style.opacity="100%";
        document.getElementById("im9").style.opacity="100%";
        document.getElementById("im10").style.opacity="100%";
        document.getElementById("im11").style.opacity="100%";
        document.getElementById("im12").style.opacity="100%";
        document.getElementById("m1").style.opacity="100%";
        document.getElementById("m2").style.opacity="100%";
        document.getElementById("m3").style.opacity="100%";
        document.getElementById("m4").style.opacity="100%";
        document.getElementById("m5").style.opacity="100%";
        document.getElementById("m6").style.opacity="100%";
        document.getElementById("m7").style.opacity="100%";
        document.getElementById("m8").style.opacity="100%";
        document.getElementById("m9").style.opacity="100%";
        document.getElementById("m10").style.opacity="100%";
        document.getElementById("m11").style.opacity="100%";
        document.getElementById("m12").style.opacity="100%";
        } 
        else{
        
            document.getElementById("im1").style.width="0px";
        document.getElementById("im1").style.height="0px";
        document.getElementById("m1").style.height="0%";
        document.getElementById("im2").style.width="0px";
        document.getElementById("im2").style.height="0px";
        document.getElementById("m2").style.height="0%";
        document.getElementById("im3").style.width="0px";
        document.getElementById("im3").style.height="0px";
        document.getElementById("m3").style.height="0%";
        document.getElementById("im3").style.width="0px";
        document.getElementById("im3").style.height="0px";
        document.getElementById("m3").style.height="0%";
        document.getElementById("im4").style.width="0px";
        document.getElementById("im4").style.height="0px";
        document.getElementById("m4").style.height="0%";
        document.getElementById("im5").style.width="0px";
        document.getElementById("im5").style.height="0px";
        document.getElementById("m5").style.height="0%";
        document.getElementById("im6").style.width="0px";
        document.getElementById("im6").style.height="0px";
        document.getElementById("m6").style.height="0%";
        document.getElementById("im7").style.width="0px";
        document.getElementById("im7").style.height="0px";
        document.getElementById("m7").style.height="0%";
        document.getElementById("im8").style.width="0px";
        document.getElementById("im8").style.height="0px";
        document.getElementById("m8").style.height="0%";
        document.getElementById("im9").style.width="0px";
        document.getElementById("im9").style.height="0px";
        document.getElementById("m9").style.height="0%";
        document.getElementById("im10").style.width="0px";
        document.getElementById("im10").style.height="0px";
        document.getElementById("m10").style.height="0%";
        document.getElementById("im11").style.width="0px";
        document.getElementById("im11").style.height="0px";
        document.getElementById("m11").style.height="0%";
        document.getElementById("im12").style.width="0px";
        document.getElementById("im12").style.height="0px";
        document.getElementById("img1").style.height="0px";
        document.getElementById("img1").style.width="0px";
        document.getElementById("rel").style.margin="10rem 35%";
        document.getElementById("rel").style.margin="0 auto"
        document.getElementById("img2").style.margin="0 20rem 0 0";
        document.getElementById("img2").style.display="none";
        document.getElementById("im1").style.position="absolute";
        document.getElementById("im2").style.position="absolute";
        document.getElementById("im3").style.position="absolute";
        document.getElementById("im4").style.position="absolute";
        document.getElementById("im5").style.position="absolute";
        document.getElementById("im6").style.position="absolute";
        document.getElementById("im7").style.position="absolute";
        document.getElementById("im8").style.position="absolute";
        document.getElementById("im9").style.position="absolute";
        document.getElementById("im10").style.position="absolute";
        document.getElementById("im11").style.position="absolute";
        document.getElementById("im12").style.position="absolute";
        document.getElementById("im1").style.opacity="0%";
        document.getElementById("im2").style.opacity="0%";
        document.getElementById("im3").style.opacity="0%";
        document.getElementById("im4").style.opacity="0%";
        document.getElementById("im5").style.opacity="0%";
        document.getElementById("im6").style.opacity="0%";
        document.getElementById("im7").style.opacity="0%";
        document.getElementById("im8").style.opacity="0%";
        document.getElementById("im9").style.opacity="0%";
        document.getElementById("im10").style.opacity="0%";
        document.getElementById("im11").style.opacity="0%";
        document.getElementById("im12").style.opacity="0%";
        document.getElementById("m1").style.opacity="0%";
        document.getElementById("m2").style.opacity="0%";
        document.getElementById("m3").style.opacity="0%";
        document.getElementById("m4").style.opacity="0%";
        document.getElementById("m5").style.opacity="0%";
        document.getElementById("m6").style.opacity="0%";
        document.getElementById("m7").style.opacity="0%";
        document.getElementById("m8").style.opacity="0%";
        document.getElementById("m9").style.opacity="0%";
        document.getElementById("m10").style.opacity="0%";
        document.getElementById("m11").style.opacity="0%";
        document.getElementById("m12").style.opacity="0%";
        
        
        
        }
       
    }
