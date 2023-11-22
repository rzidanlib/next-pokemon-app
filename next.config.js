/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freepnglogos.com",
      },
    ],
  },
};

module.exports = nextConfig;
