var img =document.getElementById('img');
var on =document.getElementById('on')
var off =document.getElementById('off')



on.addEventListener("click", function() {
    // alert('hello');
    // img.src ="https://media.istockphoto.com/id/915281014/photo/3d-illustration-of-a-light-bulb-with-the-word-idea-as-filament.jpg?s=612x612&w=0&k=20&c=6ZFCD5NbCBdbtpzEkpRxSmKmJclA10Fxizml2zemkTk=";
    img.src ="https://img.freepik.com/premium-photo/creative-light-bulb_1057389-16894.jpg";
    body.style.backgroundColor = "blue";
});




off.addEventListener("click", function() {
    // alert('hello');
    img.src ="https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs=";

});