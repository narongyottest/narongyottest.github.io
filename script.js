function rain() {
  // เลือกองค์ประกอบที่มี class เป็น 'cloud' เพื่อเพิ่ม drop (ฝน) เข้าไปในนั้น
  let cloud = document.querySelector('.cloud');
  
  // สร้าง div ใหม่ที่จะใช้แทนหยดน้ำ
  let e = document.createElement('div');
  
  // เพิ่ม class 'drop' ให้ div ที่สร้างใหม่เพื่อใช้งาน CSS ที่ตั้งไว้กับ class นี้
  e.classList.add('drop');
  
  // เพิ่ม div (drop) เข้าไปใน cloud
  cloud.appendChild(e);
  
  // กำหนดตำแหน่งการตกฝนให้สุ่มในระยะความกว้าง 290px
  let left = Math.floor(Math.random() * 290);
  
  // กำหนดขนาดของ drop โดยสุ่มขนาดจาก 1-1.5 เท่าของขนาดปกติ
  let size = Math.round() * 1.5;
  
  // กำหนดระยะเวลาของแอนิเมชันการตกฝนแบบสุ่ม (1 วินาที)
  let duration = Math.random() * 2;
  
  // กำหนด emoji ของ drop เป็นรูปหัวใจ 🩷,🤍
  e.innerText = '🤍';
  
  // ตั้งค่าตำแหน่งการตกของ drop โดยให้ค่าที่ได้จากการสุ่มในตัวแปร left
  e.style.left = left + 'px';
  
  // ตั้งค่าขนาด font size ของ drop โดยบวกค่าที่สุ่มได้จากตัวแปร size
  e.style.fontSize = 0.5 + size + 'em';
  
  // ตั้งค่าระยะเวลาแอนิเมชันการตกของ drop จากตัวแปร duration
  e.style.animationDuration = 1 + duration + 's';
  
  // ลบ drop ออกจาก cloud หลังจาก 2 วินาที เพื่อไม่ให้ div สะสมเยอะเกินไป
  setTimeout(function () {
      cloud.removeChild(e)
  }, 2000)
}

// เรียกใช้ฟังก์ชัน rain ทุก ๆ 20 มิลลิวินาทีเพื่อสร้างเอฟเฟกต์ฝนต่อเนื่อง
setInterval(function () {
  rain()
}, 20);
