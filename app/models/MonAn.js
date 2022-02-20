export class MonAn {//export để những file khác có thể sử dụng
    maMon = '';
    tenMon = '';
    loaiMon = '';
    maLoai = '';
    giaMon = '';
    khuyenMai = '';
    tenTinhTrang = '';
    maTinhTrang = '';
    hinhAnh = '';
    moTa = '';

    constructor() {

    }

    //phương thức tính giá khuyến mãi
    tinhGiaKhuyenMai = () => {
        return Number(this.giaMon) - (Number(this.giaMon) * Number(this.khuyenMai / 100));
    }
}

//mô hình MVC chia file theo thư mục
/**
 * MVC:
 *  + V(view): các file chưa giao diện html
 *  + M(model): folder chứa các file js về class hoặc prototype lớp đối tượng
 *  + C(control): folder chứa các file js để xử lý những control (nút nhấn, text input,...) thao tác của người dùng
 * 
 */

/**
 * thiết kế lớp đối tượng:
 * 
 */
//ví dụ về 1 lớp đối tượng phức tạp và cần dùng đối tượng để xử lý
// let object = {
//     thuocTinh1: {
//         id: 'a',
//         name: 'b'
//     },
//     thuocTinh2: [],
//     thuocTinh3: {
//         arr: [],
//         thuocTinh: {}
//     }
// }