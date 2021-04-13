// Biết rằng, hàng hóa bao gồm những thông tin cơ bản sau:
// định danh,
// tên mặt hàng,
// giá thành,
// nhà sản xuất,
// giảm giá (tính theo %)
// ngày nhập

export default class hang_hoa{
    dinh_gia;
    ten_mat_hang;
    gia_thanh;
    nha_san_xuat;
    giam_gia;
    ngay_nhap;
    constructor(dinh_gia,ten_mat_hang,gia_thanh,nha_san_xuat,giam_gia,ngay_nhap){
        this.dinh_gia = dinh_gia;
        this.ten_mat_hang = ten_mat_hang;
        this.gia_thanh = gia_thanh;
        this.nha_san_xuat = nha_san_xuat;
        this.giam_gia = giam_gia;
        this.ngay_nhap = ngay_nhap;
    }
}