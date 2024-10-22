function validateForm() {
  document.getElementById("surname").style.fontSize = "15px";
  document.getElementById("name").style.fontSize = "15px";
  var inPut = document.getElementById("name");
  var inPut2 = document.getElementById("surname");
  if (inPut.value.trim() === "" || inPut2.value.trim() === "") {
    inPut.value = "Vui lòng nhập tên";
    inPut2.value = "Vui lòng nhập họ";
    inPut.style.color = "red";
    inPut2.style.color = "red";
    return false;
  }
  inPut.style.color = "";
  inPut2.style.color = "";
  return true;
}
var subMit = document.getElementById("subMit");
subMit.addEventListener("click", () => {
  Swal.fire("Thành công!", "Bạn đã đăng ký thành công!", "success");
});
