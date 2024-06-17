/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shikimori.one",
        port: "",
        pathname: "/system/animes/original/**",
      },
      {
        protocol: "https",
        hostname: "st.kp.yandex.net",
        port: "",
        pathname: "/images/film_big/**",
      },
    ],
  },
};

export default nextConfig;
