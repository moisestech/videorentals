/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dck5rzi4h/**',
      },
      {
        protocol: 'https',
        hostname: 'videorentals.miami',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/tv/:tvId',
        destination: '/?tv=:tvId',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig 