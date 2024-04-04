/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // "res.cloudinary.com",
      // "avatars.githubusercontent.com",
      // "lh3.googleusercontent.com",
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
