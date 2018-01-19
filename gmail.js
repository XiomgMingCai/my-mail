var credentials = require('/Users/xiongMingCai/.password');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(
    smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: credentials.google.user,
            pass: credentials.google.pass
        }
    }));
let title = "熊明才 👻";
var mailOptions = {
    from: `${title}  <${credentials.google.user}>`,
    to: '1026911109@qq.com',
    subject: '测试 主题',//主题
    // text: 'Hello world?',
    html: `
<body class="main" style="width: 100%;">
    <img src="https://nodemailer.com/nm_logo_200x136.png" alt="">
</body>
` // html body
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log(info.envelope);
        transporter.close(); // 如果没用，关闭连接池
    }
});  