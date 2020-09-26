import "dotenv/config";

export default {
  PORT: process.env.PORT || "5000",
  BASE_URL: process.env.BASE_URL || "",
  DB: {
    MONGODB_URI: process.env.MONGODB_URI || "",
  },
  SMTP: {
    HOST: process.env.SMTP_HOST || "",
    PORT: process.env.SMTP_PORT || "",
    AUTH: process.env.SMTP_AUTH || "",
    PASS: process.env.SMTP_PASS || "",
  },
};
