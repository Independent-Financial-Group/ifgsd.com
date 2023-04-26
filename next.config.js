// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ifgsd.com',
        },
        {
          protocol: 'https',
          hostname: 'new.ifgsd.com'
        }
      ],
    },
  }