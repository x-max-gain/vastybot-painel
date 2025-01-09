/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permite qualquer hostname
        port: "", // Permite qualquer porta (ou nenhuma)
        pathname: "**", // Permite qualquer caminho
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
