const cameras = [
  {
    name: "Canon EOS R6",
    image: "https://example.com/canon-r6.jpg",
    price: "59,900 บาท",
    description: "กล้องมิเรอร์เลสระดับโปร มีระบบกันสั่นและโฟกัสเร็ว"
  },
  {
    name: "Sony Alpha A7 III",
    image: "https://example.com/sony-a7iii.jpg",
    price: "62,500 บาท",
    description: "กล้องฟูลเฟรมพร้อมคุณภาพภาพถ่ายระดับสูง"
  },
  {
    name: "Fujifilm X-T5",
    image: "https://example.com/fuji-xt5.jpg",
    price: "48,900 บาท",
    description: "สไตล์เรโทร พร้อมเซนเซอร์ X-Trans CMOS"
  }
];

const cameraList = document.getElementById("camera-list");

cameras.forEach(camera => {
  const card = document.createElement("div");
  card.className = "camera-card";

  card.innerHTML = `
    <img src="${camera.image}" alt="${camera.name}">
    <h3>${camera.name}</h3>
    <p>${camera.description}</p>
    <strong>${camera.price}</strong>
  `;

  cameraList.appendChild(card);
});