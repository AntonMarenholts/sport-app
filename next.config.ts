import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://api.escuelajs.co/api/v1/files/5f83.jpg/**"),
      new URL("https://i.imgur.com/**"),
    ],
  },
};

export default nextConfig;
