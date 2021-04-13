// Đồ gia dụng: có thêm thuộc tính: độ bền, giảm giá = 10%
import hang_hoa from "./hanghoa.js";
export default class doGiaDung extends hang_hoa{
    do_ben;
    constructor(dinh_gia,ten_mat_hang,gia_thanh,nha_san_xuat,giam_gia,ngay_nhap,do_ben){
        super(dinh_gia,ten_mat_hang,gia_thanh,nha_san_xuat,giam_gia,ngay_nhap);
        this.do_ben = do_ben;
        giam_gia = 10;
    }
}