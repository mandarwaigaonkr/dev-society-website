/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  logging: {
    incomingRequests: false,
  }
};

export default nextConfig;
