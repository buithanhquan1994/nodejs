var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
const upload = multer();


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// eyescan/
router.get('/',(req, res) => {

  var objectImage = {
    listImg: {

        Anterior : [
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          },
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          }
        ],

        Posterior : [
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          },
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          }
        ],

        Other: [
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          },
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          },
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          },
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          },
          {
            id: 'image_1',
            name: 'Image_1',
            url : '/images/test/test-image.jpg',
          }
        ]

      }
    };




  var objectKey = Object.keys(objectImage.listImg);
  res.render('eyescan/index',{
              listIMG: objectImage.listImg,
              objectKey: objectKey,
              anterior: objectImage.listImg.Anterior,
              posterior : objectImage.listImg.Posterior,
              other: objectImage.listImg.Other,

            });
  console.log(objectImage);
});


router.get('/detail/:image_id',(req, res) => {
    res.send(req.params.image_id);

});

router.post('/search',(req,res) => {
  var valInput = req.body.keywordInput.replace(' ','');
  var keyword = valInput.split(',');
  keyword = Object.assign({}, keyword);
  
  res.redirect('/eyescan/search/'+JSON.stringify(keyword));
});

router.get('/search/:keyword',(req,res) => { 
  var keyword = JSON.parse(req.params.keyword);
  res.render('eyescan/search',{
            keywordObj : keyword

  }); 
});

module.exports = router;
