/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit",
    DB_URL: "",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET:
      "cbc8124bc527213e9eba36f798e95df31c52316d00e571b47c21aa4c9f43ac19",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
