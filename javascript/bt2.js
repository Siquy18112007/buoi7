function tinhLaiKep (vonGoc, laiSuat = 0.05, soNam = 1) {
    return vonGoc * Math.pow (1+ laiSuat, soNam);
}
console.log(tinhLaiKep(vonGoc = prompt("Nhập vốn góc:"), 0.05, 3).toFixed(3));
const tinhLaiKeparrow = (vonGoc2, laiSuat = 0.05, soNam = 1) => vonGoc2 * Math.pow (1+ laiSuat, soNam);
console.log(tinhLaiKeparrow(vonGoc2 = prompt("Nhập vốn góc:"), 0.05, 3).toFixed(3));