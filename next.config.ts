import type { NextConfig } from "next";

// academ.aplicon.ru — кастомный домен, сайт живёт в корне, basePath не нужен
// (так же, как aplicon-ru.github.io; в отличие от orgmu-site, который висит
// в подкаталоге /orgmu-site на *.github.io).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
