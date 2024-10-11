import sgMail from "@sendgrid/mail";

const sendEmail = async ({ to, subject, templateId, data }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    from: "ONCA CRM",
    to,
    templateId,
    data,
  };

  await sgMail.send(msg);
};
export default sendEmail;
