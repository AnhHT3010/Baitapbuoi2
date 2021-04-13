// Đồ ăn: có thêm thuộc tính: vị (vd: ngọt, chua, ...), giảm giá = 2%
import hang_hoa from "./hanghoa.js";
export default class doAn extends hang_hoa{
    do_ben;
    constructor(dinh_gia,ten_mat_hang,gia_thanh,nha_san_xuat,giam_gia,ngay_nhap,vi){
        super(dinh_gia,ten_mat_hang,gia_thanh,nha_san_xuat,giam_gia,ngay_nhap);
        this.vi = vi;
        giam_gia = 2;
    }
}