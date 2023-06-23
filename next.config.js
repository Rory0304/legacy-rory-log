/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // ref: https://nextjs.org/docs/messages/export-image-api
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

module.exports = nextConfig;
