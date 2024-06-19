import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prashantpathak6395@gmail.com",
    pass: "isyw xgxq miet oejb",
  },
});

const sendEmail = async (req, res) => {
  const mailOptions = {
    from: "prashantpathak6395@gmail.com",
    to: req.body.Reciever,
    subject: `${req.body.Sender} has sent you a file.`,
    text: "Send-Me",
    html: `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Sharing Notification</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 600px;
            margin: auto;
        }
        h2 {
            color: #4CAF50;
            margin-top: 0;
        }
        p {
            color: #555555;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 12px 25px;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
            margin-top: 20px;
        }
        .button:hover {
            background-color: #45a049;
        }
        .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>You've Received a File!</h2>
        <p>Hello <strong>${req.body.Reciever}</strong>,</p>
        <p><strong>${req.body.Sender}</strong> has shared a file with you. Below are the details:</p>
        <p><strong>Password:</strong> <span style="color: #4CAF50; font-weight: bold;">${req.body.Password}</span></p>
        <p>Click the button below to download your file:</p>
        <a class="button" href="${req.body.Link}">Download File</a>
        <p>If you have any questions or concerns, please contact <strong>${req.body.Sender}</strong>.</p>
        <p class="footer">Thank you for using our service!</p>
    </div>
</body>
</html>

            `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ status: 1 });
  } catch (error) {
    return res.status(500).json({ status: -1 });
  }
};
export default sendEmail;
