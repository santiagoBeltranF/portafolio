const IS_PRODUCTION_BUILD = process.env.NODE_ENV === 'production';

const basePath = IS_PRODUCTION_BUILD ? '/portafolio' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    
    basePath: basePath,

    assetPrefix: undefined,

    trailingSlash: true,

    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },

    images: {
        unoptimized: true,
        domains: [
            "source.unsplash.com", "images.unsplash.com",
            "ext.same-assets.com", "ugc.same-assets.com",
        ],
        remotePatterns: [
            { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
            { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
            { protocol: "https", hostname: "ext.same-assets.com", pathname: "/**" },
            { protocol: "https", hostname: "ugc.same-assets.com", pathname: "/**" },
        ],
    },
};

module.exports = nextConfig;