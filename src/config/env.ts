import "dotenv/config";

export default {
  PORT: process.env.PORT || "5000",
  BASE_URL: process.env.BASE_URL || "",
  DB: {
    MONGODB_URI: process.env.MONGODB_URI || "",
  },
};
