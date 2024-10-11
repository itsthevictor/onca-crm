import sgMail from "@sendgrid/mail";

export const sendVerificationEmail = async ({
  email,
  firstName,
  verificationToken,
}) => {
  const link = `${process.env.ORIGIN}/verify-email/${verificationToken}/${email}`;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    from: "ONCA  CRM <hello@onca.studio>",
    to: email,
    templateId: process.env.VERIFY_EMAIL_TEMPLATE,
    dynamicTemplateData: {
      name: firstName,
      link: link,
    },
  };

  await sgMail.send(msg);
};
