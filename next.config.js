/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@mui/material", "@mui/icons-material"],
  modularizeImports: {
    "@mui/material/!(styles)/?*": {
      transform: "@mui/material/{{path}}/{{member}}",
      skipDefaultConversion: true,
    },
    "@mui/icons-material/?(((\\w*)?/?)*)": {
      transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
    },
  },
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
