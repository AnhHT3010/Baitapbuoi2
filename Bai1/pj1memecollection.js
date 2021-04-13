
// VD: meme.update({name: 'Nà Ní', image: 'image url here'})
// - MemeCollection:
// + id
// + name
// + owner: tên của người tạo
// + memes: mảng gồm các meme
// + add(meme): thêm 1 meme, tham số meme chỉ được phép nhận instance của Meme
// + update(id, data): thay đổi thông tin của meme có id tương ứng
// + delete(id): xóa 1 meme có id tương ứng
// + show(): show ra màn hình dạng html của meme collection

import Meme from "./pj1meme.js";
export default class MemeCollection extends Meme{
    owner;
    memes;
    constructor(id,name,owner,memes){
        super(id,name);
        this.owner = owner;
        this.memes = memes;
        // console.log(this);
    }
    add(meme){
        if(meme instanceof Meme){
            this.memes.push(meme);
        }
                console.log(this.memes);
    }

    
    update(id, data){
        if(data instanceof Meme){
            let location = -1;
            for(let i = 0; i < this.memes.length; i++){
                if(id == this.memes[i].id){
                    location = i;
                    vi_tri = i;
                    break;
                }
            }
            if(location > - 1)
            this.memes.splice(location,1,data);
            else document.getElementById("4").innerHTML = "Không có data tương thích" 
        }
                console.log(this.memes);
    }

    detele(id){
            let location = -1;
            for(let i = 0; i < this.memes.length; i++){
                if(id == this.memes[i].id){
                    location = i;
                    break;
                }
            }
            if(location > - 1)
            this.memes.splice(location,1);
            else document.getElementById("5").innerHTML = "Không có data tương thích" ;
            console.log(this.memes);   
            }
    show(){
        document.getElementById("5").innerHTML = this.id;
        document.getElementById("6").innerHTML = this.name;
        document.getElementById("7").innerHTML = "Album của " + this.owner;
    }
}