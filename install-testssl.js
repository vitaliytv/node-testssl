const https = require("https");
const tar = require("tar");
const fs = require("fs");
const dir = "./testssl";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

https.get("https://codeload.github.com/drwetter/testssl.sh/tar.gz/3.0", function(response) {
  response.pipe(
    tar.x({
      strip: 1,
      C: "testssl"
    })
  );
});
