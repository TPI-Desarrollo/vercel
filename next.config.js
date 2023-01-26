module.exports = {
   reactStrictMode: true,
   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
   webpack: (config, options) => {
      config.module.rules.push({
         test: /\.html$/i,
         loader: "html-loader",
         options: {
            sources: false,
         },
      });

      return config;
   }
};