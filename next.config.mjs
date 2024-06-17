/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "shikimori.one",
      "st.kp.yandex.net",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
    ],
    loader: "default",
  },
};

export default nextConfig;
