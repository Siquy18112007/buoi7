
function tinhTheTichHinhHop(chieuDai, chieuRong, chieuCao) {
    if (isNaN(chieuDai) || isNaN(chieuRong) || isNaN(chieuCao) || chieuDai <= 0 || chieuRong <= 0 || chieuCao <= 0) {
        console.log("Vui lòng nhập lại các giá trị hợp lệ (số dương và là số).");
        return;
    }
    return chieuDai * chieuRong * chieuCao;
}
let chieuDai = parseFloat(prompt("Nhập chiều dài:"));
let chieuRong = parseFloat(prompt("Nhập chiều rộng:"));
let chieuCao = parseFloat(prompt("Nhập chiều cao:"));
let theTich = tinhTheTichHinhHop(chieuDai, chieuRong, chieuCao);
if (theTich) {
    console.log(`Thể tích hình hộp là: ${theTich}`);
}
const tinhTheTichHinhHopArrow = (chieuDai, chieuRong, chieuCao) => 
    (isNaN(chieuDai) || isNaN(chieuRong) || isNaN(chieuCao) || chieuDai <= 0 || chieuRong <= 0 || chieuCao <= 0) 
    ? "Vui lòng nhập lại các giá trị hợp lệ (số dương và là số)." 
    : chieuDai * chieuRong * chieuCao;
try {
    let theTichArrow = tinhTheTichHinhHopArrow(chieuDai, chieuRong, chieuCao);
    if (theTichArrow) {
        console.log(`Thể tích tính bằng arrow function là: ${theTichArrow}`);
    }
} catch (e) {
    console.log("Lỗi với arrow function: " + e.message);
}