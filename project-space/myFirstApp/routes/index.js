var express = require('express');
var router = express.Router();

// 해당 경로/파일은 페이지 이동 시 사용되는 파일이다.
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/animal', (req,res) => {
  const animal = [
    {
      id : 1 ,
      name : 'Dog',
    },
    {
      id : 2 ,
      name : 'Cat',
    },
    {
      id : 3 ,
      name : 'Tiger',
    }
  ]
  res.json(animal)
})


module.exports = router;
