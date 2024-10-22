function changeImage(newSrc) {
  document.getElementById("main").src = newSrc;
}
const decreaseNumber = document.getElementById("decrease");
/* gán decrease cho biến deacreaseNumber để có thể sử dụng trong mã js*/
const inCreaSeNumBer = document.getElementById("increase");
/* gán increase cho biến inCreaSeNumBer để sdung trong js */
const inPutNumber = document.getElementById("quanTiTy");
/* gán ptu quanTiTY cho increase để sd trong js */
const price = 89000; //khai báo giá trị 1 sản phẩm
const moneyNumBer = document.getElementById("money"); //gán biến money cho moneyNumBer sd trong js
decreaseNumber.addEventListener("click", () => {
  /* thêm 1 sự kiện click vào pt decreaseNumber */
  let itemCount = parseInt(inPutNumber.value);
  /*  chuyển kiểu dl của inPutNumber về int rồi gán cho itemCount*/
  if (itemCount > 1) {
    /*  nếu itemCount<1 thì k thực hiện */
    itemCount--;
    inPutNumber.value = itemCount;
    /*  sau khi thực hiện xong thì gán gtri của itemCount cho inPutNumber*/
    let totalMoney = price * itemCount; // Cập nhật thành tiền
    moneyNumBer.value = totalMoney.toLocaleString();
    //moneyNumBer.value là giá trị hiển thị ở ô input
    //.toLocaleString() là thêm dấu phẩy cho hàng nghìn vd 10,000 thay vì 10000
  }
});
inCreaSeNumBer.addEventListener("click", () => {
  let itemCount = parseInt(inPutNumber.value);
  itemCount++;
  inPutNumber.value = itemCount;
  let totalMoney = price * itemCount; // Cập nhật thành tiền
  moneyNumBer.value = totalMoney.toLocaleString();
  //moneyNumBer.value là giá trị hiển thị ở ô input
  //.toLocaleString() là thêm dấu phẩy cho hàng nghìn vd 10,000 thay vì 10000
});

money.addEventListener("change", () => {
  let itemCount = parseInt(inPutNumBer.value);
  let totalMoney = price * itemCount;
  moneyNumBer.value = totalMoney.toLocaleString();
  //moneyNumBer.value là giá trị hiển thị ở ô input
  //.toLocaleString() là thêm dấu phẩy cho hàng nghìn vd 10,000 thay vì 10000
});
