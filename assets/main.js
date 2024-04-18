// Show And Hide Menu

const hiddenItems = document.querySelectorAll(".menu .js-controll");
const showBtn = document.querySelector(".menu #exploreMenu");

showBtn.onclick = () => {
    hiddenItems.forEach((item) => {
        item.classList.toggle("show-js");
    })
}

// Send Messages To Whatsapp

const form = document.getElementById("form");

form.onsubmit = async (e) => {
    e.preventDefault();
    
    const phoneNumber = document.getElementById('number').value;
    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const selected = document.getElementById("select").value;
    const messageContent = `Phone Number: ${phoneNumber} \n Address: ${address} \n Order: ${selected} \n Name: ${fullName}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+2001002906370&text=${encodeURIComponent(messageContent)}`;

    window.open(whatsappUrl);
}