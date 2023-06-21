/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

module.exports = nextConfig;
