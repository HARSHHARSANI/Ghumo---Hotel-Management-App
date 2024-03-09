/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.freepik.com", "img.freepik.com", "images.pexels.com"], // Add the domain without query parameters
  },
};

export default nextConfig;
