// - Meme:
// + id
// + name
// + image: url ảnh của meme
// + dateModified: ngày tạo
// + show(): hiển thị ra màn hình dạng html của meme đó bao gồm: name, image, dateModified
// + update(data): thay đổi thông tin của meme với data là 1 object truyền vào

export default class Meme{
    id;
    name;
    image;
    dataModified;
    constructor(id,name,image,dataModified){
        this.id = id;
        this.name = name;
        this.image = image;
        this.dataModified = dataModified;
    }
    show(){
        document.getElementById("1").innerHTML = this.name;
        var x = document.createElement("IMG");
        x.setAttribute("src", this.image);
        document.body.children[1].appendChild(x);
        document.getElementById("3").innerHTML = "Ngày tạo " + this.dataModified;
    }
    update(data){
        this.id = data.id;
        this.name = data.name;
        this.image = data.image;
        this.dataModified = data.dataModified;
    }
}
// me_me1.update(me_me2);
// me_me1.show();