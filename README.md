# webcam-s3
This package helps to send images from webcamURLs to an Amazon S3 Bucket of your choice.

# usage

```javascript
require('webcam-s3')
const config = {
  accessKeyId: 'your-access-key-id-here',
  secretAccessKey: 'your-secret-access-key-here',
  region: 'us-east-1'
}
let send = require('./index')(config).send

send('http://imageurl', 'filename.jpg', 'bucket-name')
.then(data => {
  // saved! treat data, maybe?
}).catch(err => {
  // treats err
})
```

That's it! Have fun!
