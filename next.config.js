/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { 
                protocol: 'http',
                hostname: 'localhost', 
            },
            {
                protocol: 'https',
                hostname: 'epk.tapped.ai',
            },
        ],
    }
}

module.exports = nextConfig
