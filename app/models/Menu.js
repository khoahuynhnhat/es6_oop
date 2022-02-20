export class Menu {
    mangMonAn = []; //[{...},{...},{...}]

    cnstructor () {

    }
    themMonAn = (monAnMoi) => {
        try
        {
            //bất kì 1 lệnh nào trong khối try xảy ra lỗi => hủy k chạy tiếp mà sẽ chạy vào catch
            //Thêm món ăn vào mảng món ăn
            this.mangMonAn.push(monAnMoi);
            return true;
        } catch(ex) {
            return false
        }
        return true;
    }

    xoaMonAn = () => {

    }
    chinhSuaMonAn = () => {
    
    }
    timKiemMonAn = () => {
        
    }
}

