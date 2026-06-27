/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  experimental: {},
  logging: {
    incomingRequests: false,
  }
};

export default nextConfig;
