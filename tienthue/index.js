document.getElementById("btnTax").onclick = function() {
  var e = document.getElementById("inputName2").value,
    n = document.getElementById("inputSalary").value - 4.0 - 1.6 * document.getElementById("inputUser").value,
    t = 0;
    n > 0 && n <= 60
    ? (t = 0.05 * n)
    : n > 60 && n <= 120
    ? (t = 0.1 * n)
    : n > 120 && n <= 210
    ? (t = 0.15 * n)
    : n > 210 && n <= 384
    ? (t = 0.2 * n)
    : n > 384 && n <= 624
    ? (t = 0.25 * n)
    : n > 624 && n <= 960
    ? (t = 0.3 * n)
    : n > 960
    ? (t = 0.35 * n)
    : alert("Số tiền thu nhập không hợp lệ"),
    (t = new Intl.NumberFormat("vn-VN").format(t)),
    (document.getElementById("txtTax").innerHTML =
      "Họ tên: " + e + "; Tiền thuế thu nhập cá nhân: " + t + " VND");
}
function disableInput() {
  var e = document.getElementById("selCustomer").value;
  document.getElementById("inputConnect").style.display =
    "company" == e ? "block" : "none";
}
