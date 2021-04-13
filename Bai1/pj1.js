
import Meme from "./pj1meme.js";
import MemeCollection from "./pj1memecollection.js";
let me_me1 = new Meme(123,"Không tìm nổi bug","./Anh/93c868c53f00f2ff6724ed6eb2af6f41.jpg","20/3/2021")
let me_me2 = new Meme(321,"Bài quá khó hiểu","./Anh/ricardo-dua-tay-moi-goi-sau-soi-day-treo-co.jpg","18/4/2021")
let me_me3 = new Meme(234,"Chạy không bug","./Anh/timra.png","1/5/2021")
let me_mes = new MemeCollection(124,"Album meme","Trung Anh",[me_me1,me_me2])
me_me3.show();
me_mes.add(me_me3);
me_mes.update(123,me_me3);
me_mes.detele(321);
me_mes.show();
