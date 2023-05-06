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
        },
        {
          protocol: 'https',
          hostname: 'flowbite.com'
        },
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net'
        }
      ],
    },
  }