// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "babel-plugin-root-import",
        {
          rootPathSuffix: "./src",
          rootPathPrefix: "@/",
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
    ],
  };
};
