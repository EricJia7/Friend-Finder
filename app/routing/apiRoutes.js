const data = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(data);
    });
    app.post("/surve", function(req, res) {
        let newFriend = req.body;
        let finalIndex = -1;
        let finalDiff = 100; 

        data.map((ele,index) => {
            let diffNum = 0;

            ele.score.map((ele,index) => {
                diffNum += Math.abs(ele-parseInt(newFriend.score[index]));
            });
            if(finalDiff > diffNum) {
                finalDiff = diffNum;
                finalIndex = index;
            };
            if(index === data.length-1) {
                data.push(newFriend);
                res.json([data[finalIndex].name, data[finalIndex].photo])
            };
        })
    });
};






  


