/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  // async rewrites() {
  //   return [
  //     { source: "/api/items", destination: "http://localhost:3000/api/items" },
  //   ];
  // },
};

module.exports = nextConfig;
