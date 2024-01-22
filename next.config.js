// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ifgsd.com",
      },
      {
        protocol: "https",
        hostname: "new.ifgsd.com",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "development") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about/our-story",
        permanent: true,
      },
      {
        source: "/mission",
        destination: "/join/why-choose-us/our-mission-and-values",
        permanent: true,
      },
      {
        source: "/category/press-room/press-releases",
        destination: "/press-and-media/press-releases",
        permanent: true,
      },
    ];
  },
};
