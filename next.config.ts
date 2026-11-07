import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/ramen-wassen", destination: "/diensten/ramen-wassen", permanent: true },
      { source: "/zonnepanelen-reinigen", destination: "/diensten/zonnepanelen-reinigen", permanent: true },
      { source: "/gevelreiniging", destination: "/diensten/gevelreiniging", permanent: true },
      { source: "/crepi-gevelreiniging", destination: "/diensten/crepi-reinigen", permanent: true },
      { source: "/opritten-en-terrassen-reiniging", destination: "/diensten/oprit-en-terras-reinigen", permanent: true },
      { source: "/dakreiniging", destination: "/diensten/dakreiniging", permanent: true },
      { source: "/dakgoten-reinigen", destination: "/diensten", permanent: true },
      { source: "/privacy-beleid", destination: "/privacybeleid", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
