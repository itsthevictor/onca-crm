import sgMail from "@sendgrid/mail";

export const sendResetPasswordEmail = async ({
  name,
  email,
  token,
  origin,
}) => {
  const link = `${process.env.ORIGIN}/reset-password/${token}/${email}`;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    from: "BLAZE CRM <hello@onca.studio>",
    to: email,
    templateId: process.env.RESET_PASSWORD_TEMPLATE,
    dynamicTemplateData: {
      name,
      link,
    },
  };

  await sgMail.send(msg);
};

export default sendResetPasswordEmail;
