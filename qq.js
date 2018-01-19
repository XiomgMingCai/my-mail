/**
 * Created by xiongMingCai on 2018/1/19.
 */
var credentials = require('/Users/xiongMingCai/.password');
var nodemailer = require('nodemailer');



var smtpTransport = require('nodemailer-smtp-transport');
// 开启一个 SMTP 连接池
var transporter = nodemailer.createTransport(smtpTransport({
    host: "smtp.qq.com", // 主机
    secure: true, // 使用 SSL
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: credentials.qqMail
}));


// 设置邮件内容（谁发送什么给谁）
let mailOptions = {
    from: '"熊明才 👻" <1026911109@qq.com>', // 发件人
    to: '1026911109@qq.com', // 收件人
    subject: 'Hello ✔', // 主题
    text: '这是一封来自 Node.js 的测试邮件', // plain text body
    // html: '<b>这是一封来自 Node.js 的测试邮件</b>', // html body
    attachments: [
        {
            filename: 'text0.txt',
            content: 'hello world!'  //文件的内容
        },
        {
            filename: 'text1.txt',
            path: './README.md'  //文件的路径
        }
    ]
};
// 使用先前创建的传输器的 sendMail 方法传递消息对象
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(`Message: ${info.messageId}`);
    console.log(`sent: ${info.response}`);
});