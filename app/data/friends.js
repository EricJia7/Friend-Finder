function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
};
function genScoreArr(num) {
    let arr = [];
    for (let i=0; i<num; i++) {
        arr.push(getRandomInt(5))
    };
    return arr;
};
function createFriend(str1,str2,arr)  {
    return {'name': str1, 'photo': str2, 'score': arr}
};

const frd1 = createFriend("Lady Gaga","https://timedotcom.files.wordpress.com/2018/02/lady-gaga-joanne-tour-cancelled.jpg",genScoreArr(10));
const frd2 = createFriend("Jay Z","https://cdn-images-1.medium.com/max/1366/1*h80VXv7OIbhHuCAbrKiLxQ.jpeg",genScoreArr(10));
const frd3 = createFriend("Captain America","https://cdn.vox-cdn.com/thumbor/GdK3eq_VKu9RZo_fvWTP3uVqAHA=/0x47:600x447/920x613/filters:focal(0x47:600x447):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/35708452/Bst7rv7CAAAn15W.0.jpg",genScoreArr(10));
const frd4 = createFriend("Yoda","https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/yoda-advice-always-in-motion-is-the-future.jpg",genScoreArr(10));
const frd5 = createFriend("Nemo","https://images-na.ssl-images-amazon.com/images/I/71E7e0RRujL._SL1500_.jpg",genScoreArr(10));
const frd6 = createFriend("Bono","https://qpr2l7.imagenii.com/static2.seeantibes.com/image_uploader/photos/53/large/bono-u2-frontman-riviera-cote-d-azur.png?f=q(v=.8)&auth=81b613a596209ed58722ea3e93ed69d543810615",genScoreArr(10));

const friends = [frd1,frd2,frd3,frd4,frd5,frd6];

module.exports = friends;
