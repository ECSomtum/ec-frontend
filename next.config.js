/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ih1.redbubble.net", "www.coindesk.com", "pbs.twimg.com", "us-fbcloud.net", "encrypted-tbn0.gstatic.com","www.playtoearn.online"]
  },
};

module.exports = nextConfig;
