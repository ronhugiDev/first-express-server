const path = require("path");

function getMessage(req, res) {
  // const picPath = path.join(__dirname, "..", "public","images", "cheetah.jpg");
  // res.sendFile(picPath);

  res.render("messages", {
    title: "messages to all my friends",
    caption: "hello all",
    friend: "ron Hugi",
  });
}

function postMessage(req, res) {
  console.log("update messages");
}

module.exports = {
  getMessage,
  postMessage,
};
