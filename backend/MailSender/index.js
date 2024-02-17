import { Resend } from 'resend';
const resend = new Resend("re_YugFuutB_AArJVDngkhB4Dt8omRrELEPm");

export const sendMail = async (req, res) => {
    try {
        const { data, error } = await resend.emails.send({
            from: `ShareFile@resend.dev`,
            to: [`${req.body.Reciever}`],
            subject: "File Sharing Notification",
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>File Sharing Email</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        
                        h2 {
                            color: #333333;
                            margin-top: 0;
                        }
                        p {
                            color: #666666;
                        }
                        ul {
                            list-style-type: none;
                            padding: 0;
                        }
                        li {
                            margin-bottom: 10px;
                        }
                        .button {
                            display: inline-block;
                            background-color: #4CAF50;
                            color: white;
                            padding: 10px 20px;
                            text-align: center;
                            text-decoration: none;
                            border-radius: 5px;
                            transition: background-color 0.3s;
                        }
                    </style>
                </head>
                <body>
                    <div >
                        <h2>File Sharing Notification</h2>
                        <p>Hello ${req.body.Reciever},</p>
                        <p>The sender, ${req.body.Sender}, has shared a file with you. Below are the details:</p>
                        <ul>
                            <li><strong>Subject:</strong> Recieved a file.</li>
                            <li><strong>Recipient:</strong> ${req.body.Reciever}</li>
                        </ul>
                        <p>The password for the file is: <strong>${req.body.Password}</strong>.</p>
                        <p>You can download the file using the button below -</p>
                        <a class="button" href="${req.body.Link}">Download File</a>
                        <p>If you have any questions or concerns, please contact the sender.</p>
                        <p>Thank you.</p>
                    </div>
                </body>
                </html>
            `,
        });

        if (error) {
            return res.status(400).json({ error });
        }

        return res.status(200).json({ data });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
