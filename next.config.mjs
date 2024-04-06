/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hpsaamsaegwysjkrheei.supabase.co'
            }
        ]
    }
};

export default nextConfig;
