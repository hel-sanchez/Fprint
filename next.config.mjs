/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  transpilePackages: ["@mui/material", "@emotion/react", "@emotion/styled"],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
