var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
const upload = multer();


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


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


/* each val,index in list.listImg
 div.grid-item
 img.img-thumbnail.img-item-grid(src='#{val.url}')
 */
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

module.exports = router;
