//sử dụng class
import {MonAn} from '../models/MonAn.js';
import {Menu} from '../models/Menu.js'

var menu = new Menu();

document.querySelector('#btnThemMon').onclick = (event) => {
    event.preventDefault();
    
    //let monAn = {};//nếu để kiểu này sẽ không lấy được phương thức
    let monAn = new MonAn();
    //Dùng es6 để đưa thông tin từ giao diện vào đối tượng
    let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');

    for (let input of arrInput) {
        //Mỗi lần duyệt lấy ra 1 thẻ (giống DOM đến từng thẻ)
        let {id,value} = input;

        //chạy if-else để lấy ra các option được chọn
        if(id === 'loaiMon') {
            monAn['maLoai'] = value;
            //input đang là select khi chạy đến loại món
            monAn['loaiMon'] = input.options[input.selectedIndex].innerHTML
        }else if (id === 'maTinhTrang'){
            // monAn = ['tenTinhTrang'] = value ===0 ? 'Hết món' : 'Còn';
            monAn['tenTinhTrang'] = input.options[input.selectedIndex].innerHTML
        } else {
            monAn[id] = value;
            console.log(id,value);
        }

        
    }
    //DOM đến tất cả thẻ li => in thông tin
    var arrLi = document.querySelectorAll('#thongTinMonAn li:not(:first-child)');
    for (let li of arrLi) {
        let {id} = li;

        if(id === 'giaKhuyenMai') {
            li.innerHTML = `
            <div>
                <h6>${id}</h6>
                <p id="pMoTa" class="text-muted">${monAn.tinhGiaKhuyenMai()}</p>
            </div>`
        } else {
            li.innerHTML = `
            <div>
                <h6>${id}</h6>
                <p id="pMoTa" class="text-muted">${monAn[id]}</p>
            </div>`
        }
    }
    document.getElementById('imgMonAn').src = monAn.hinhAnh;
    // console.log(monAn);

    //sau khi lấy thông tin món ăn thì gọi hàm thêm món ăn vào menu
    menu.themMonAn(monAn);
    console.log(menu)
}