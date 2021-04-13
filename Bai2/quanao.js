// Quần áo: có thêm thuộc tính: xuất xứ, chất liệu, giảm giá = 5%
import hang_hoa from "./hanghoa.js";
export default class quanAo extends hang_hoa{
    do_ben;
    constructor(dinh_gia,ten_mat_hang,gia_thanh,nha_san_xuat,giam_gia,ngay_nhap,chat_lieu,xuat_xu){
        super(dinh_gia,ten_mat_hang,gia_thanh,nha_san_xuat,giam_gia,ngay_nhap);
        this.chat_lieu = chat_lieu;
        this.xuat_xu = xuat_xu;
        giam_gia = 5;
    }
}