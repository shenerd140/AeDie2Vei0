let express = require("express"),
    app = express(),
    api_key = 'key-849ec11b71eb01661dad19d1dbf143d7',
    domain = 'sandboxd93b611d5a0744e59acd2a8f9f7801ca.mailgun.org',
    mailgun = require('mailgun-js')({
        apiKey: api_key,
        domain: domain
    });

app.set("port", (process.env.PORT || 9088))

app.set("view engine", "ejs")

app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("index");
})

app.listen(app.get("port"), function () {
    console.log(`Server started on port ${app.get("port")}`);
})

/*var data = {
    from: 'Crypto Leads <me@samples.mailgun.org>',
    to: 'etheambitiousgeek@gmail.com',
    subject: 'Hello',
    text: `Hey Jay
Your payment has been confirmed, please visit this link to download the csv file
`
};

mailgun.messages().send(data, function (err, body) {

    if (err) {
        console.log(err);
    } else {
        console.log(body.message);
    }
});*/
