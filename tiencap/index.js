document.getElementById("btnNet").onclick = function() {
  var e = document.getElementById("selCustomer").value,
    n = document.getElementById("inputID").value,
    t = document.getElementById("inputChanel").value,
    u = document.getElementById("inputConnect").value,
    c = 0;
    "company" == e
    ? (c = tinhTong(15, 75, 50, t, u, 5))
    : "user" == e
    ? (c = tinhTong(4.5, 20.5, 7.5, t, 0, 0))
    : alert("Hãy chọn loại khách hàng"),
    (document.getElementById("txtNet").innerHTML =
      "Mã khách hàng: " +
      n +
      "; Tiền cáp: " +
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(c));

      document.getElementById("inputConnect")
}

function disableInput() {
  var e = document.getElementById("selCustomer").value;
  document.getElementById("inputConnect").style.display = "company" == e ? "block" : "none"
}
function tinhTong(e, n, t, u, c, l) {
  var m = e + n + t * u;
  return c > 10 && (m += (c - 10) * l), m;
}

