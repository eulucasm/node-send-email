const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'portalapphomologacao@gmail.com',
        pass: 'valiant010203',
    },
});

transporter.verify().then(console.log).catch(console.error);

transporter.sendMail({
    from: '"Your Name" <portalapphomologacao@gmail.com>', // sender address
    to: "lucaspoletis@gmail.com", // list of receivers
    subject: "Teste para envio", // Subject line
    text: "There is a new article. It's about sending emails, check it out!", // plain text body
    html: `<html>
                <body>
                <center>
                    <div style="background-color: #d3d3d3; max-width: 840px; margin: 0; padding: 30px;">
                    <h2 style="color: #292536; text-align: center">Confirme seu endereço de email</h2>
                    <p>Para confirmar seu email clique no botão abaixo, ou acesse o seguinte link: </p>
                    <div style="margin: 20px auto; width: 180px; padding: 10px 20px; background-color: #442d52; border-radius: 5px; text-align: center;">
                        <a href="http://url-do-front/email-confirmation/?token={{token}}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #fcfcfc; font-size: 18px; margin: 0 auto;">Confirmar Email</a>
                    </div>
                    </div>
                </center>
                </body>
            </html>`, // html body
}).then(info => {
    console.log({
        info
    });
}).catch(console.error);