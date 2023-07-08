/** @type {import('next').NextConfig} */
const nextConfig = {
   env: {
    rapidApiKey: 'ee5c526905msh02438072c669a06p1aa2bfjsndf913359a642',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
        port: '',
        pathname: '/**',
      },
    ],
  }
};

module.exports = nextConfig;
