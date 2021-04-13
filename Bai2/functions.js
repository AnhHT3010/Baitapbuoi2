// - Nhập hàng hóa
// - Bán hàng
// - Kiểm tra doanh thu (số tiền bán được hàng)


// định danh,
// tên mặt hàng,
// giá thành,
// nhà sản xuất,
// giảm giá (tính theo %)
// ngày nhập

import hang_hoa from "./hanghoa.js";
import doAn from "./doan.js";
import quanAo from "./quanao.js";
import doGiaDung from "./dogiadung.js";

let lays_Stax = new doAn(10,"snacks",20,"PepsiCo","12");
let shorts = new quanAo(15,"quần đùi",90,"shoppe","20");
let laptop = new doGiaDung(20,"ASUS Vivobook",15000,"fptshop","30");

class functions{
    ds_hang_hoa;
    tong = 0;
    constructor(ds_hang_hoa){
        this.ds_hang_hoa = ds_hang_hoa;
    }
    nhap_hang_hoa(data){
        if(data instanceof hang_hoa){
            this.ds_hang_hoa.push(data);
        }
        else console.log("hàng hóa không hợp lệ");
    }
    ban_hang(maQR){
            let location = -1;
            for(let i = 0; i < this.ds_hang_hoa.length; i++){
                if(this.ds_hang_hoa[i].dinh_gia == maQR){
                    this.tong += this.ds_hang_hoa[i].gia_thanh;
                    location = i;
                    break;
                }
            }
            if(location > - 1){
            this.ds_hang_hoa.splice(location,1,this.ds_hang_hoa);
            // console.log(ds_hang_hoa);
        }
            else console.log("chưa có sản phẩm nào được bán  ra") 
    }
    doanh_thu(){
        console.log("tổng số doanh thu " +  this.tong);
    }
}
let ds_hang_hoa = new functions([lays_Stax,shorts,laptop]);
console.log(ds_hang_hoa);
ds_hang_hoa.ban_hang(10);
ds_hang_hoa.doanh_thu();



