/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ih1.redbubble.net"]
  },
};

module.exports = nextConfig;
