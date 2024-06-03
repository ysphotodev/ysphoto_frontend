/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,

  images: {
    minimumCacheTTL: 360,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },




async rewrites() {
        return [
            {
                source: '/admin/*',
                destination: 'http://64.176.70.84:1337/admin',
            },
        ]
    },




    // async redirects() {
    //     return [
    //         {
    //             source: '/admin',
    //             destination: 'http://64.176.70.84:1337/admin',
    //             permanent: true,
    //         },
    //     ]
    // },





 async headers() {
        return [
            {
                // matching all API routes
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }




};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  sw: 'service-worker.js',
});

module.exports = withPWA(nextConfig);

// module.exports = nextConfig
