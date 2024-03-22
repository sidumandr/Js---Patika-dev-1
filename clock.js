let userName = prompt("Lütfen Adınızı Giriniz");
document.getElementById("myName").innerHTML = userName;

function showTime() {
  let date = new Date().toLocaleString("tr-TR");
  document.getElementById("myClock").innerHTML = date;
}

if (userName != "") {
  setInterval(showTime, 1000);
} else {
  alert("Lütfen Adınızı Giriniz");
}
