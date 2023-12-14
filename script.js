const wrapper = document.querySelector(".wrapper");
const qrinput = wrapper.querySelector(".form input");
const generatebtn = wrapper.querySelector(".form button");
const qrimg = wrapper.querySelector(".qrcode img");
let prevalue;

generatebtn.addEventListener("click", () => {
    let qrvalue = qrinput.value.trim();
    if (!qrvalue || prevalue === qrvalue) return;
    prevalue = qrvalue;
    generatebtn.innerText = "Generating QR Code...";
    qrimg.src = `https://quickchart.io/qr?text=${qrvalue}`;
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatebtn.innerText = "Generate QR Code";
    });
});

qrinput.addEventListener("keyup", () => {
    if (!qrinput.value.trim()) {
        wrapper.classList.remove("active");
        prevalue = "";
    }
});