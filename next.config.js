/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit",
    DB_URL:
      "mongodb+srv://ossycollections:2vyI51yGiTbSGGTi@cluster0.m4opncc.mongodb.net/bookit?retryWrites=true&w=majority",
    DB_COMPASS:
      "mongodb+srv://ossycollections:2vyI51yGiTbSGGTi@cluster0.m4opncc.mongodb.net/ossycollections",

    CLOUDINARY_CLOUD_NAME: "dirstc3ej",
    CLOUDINARY_API_KEY: "274456218582533",
    CLOUDINARY_API_SECRET: "6AAFL9xp0_WsVT16QG4ykDcdelk",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: 2525,
    SMTP_USER: "c5dd455ad6eb06",
    SMTP_PASSWORD: "df05db58f5220d",
    SMTP_FROM_EMAIL: "solomon.chukwuka28@gmail.com",
    SMTP_FROM_NAME: "CTECH",

    STRIPE_WEBHOOK_SECRET:
      "whsec_3d753c2f9970602f74bcdb71db71d8663c34df023e7179b938cf10306ab990f5",
    STRIPE_SECRET_KEY:
      "sk_test_51NpAdMC5COzsdt72QqrDwpiOQPKQ0BG03yoR683ihhhYQePJKW4YAj6VzqlYdGGvJyklzumNlAWPrgFF1KQnICVN00L46FJBAm",

    GEOCODER_API_KEY: "AIzaSyBnGH1abUqVK90n63xW1d0tTDIR0rB1o",
    GEOCODER_PROVIDER: "google",

    MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET:
      "cbc8124bc527213e9eba36f798e95df31c52316d00e571b47c21aa4c9f43ac19",
    REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
