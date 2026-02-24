/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // wallbedking-pro.de -> wallbedking-pro.com/de-re
      {
        source: "/:path*",
        has: [
          { type: "host", value: "wallbedking-pro.de" },
        ],
        destination: "https://wallbedking-pro.com/de-re/:path*",
        permanent: true, // 301
      },
      // www.wallbedking-pro.de -> wallbedking-pro.com/de-re
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.wallbedking-pro.de" },
        ],
        destination: "https://wallbedking-pro.com/de-re/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
