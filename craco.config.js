module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Add the externals configuration to prevent React from bundling in the background script
        webpackConfig.externals = {
          ...webpackConfig.externals,
          react: 'commonjs react',
          'react-dom': 'commonjs react-dom',
        };
  
        return webpackConfig;
      },
    },
  };
  
  
  
  
  
  
  
















// module.exports = {
//     webpack: {
//         configure: (webpackConfig, {env, paths}) => {
//             return {
//                 ...webpackConfig,
//                 entry: {
//                     main: [
//                         env === 'development' && 
//                             require.resolve("react-dev-utils/webpackHotDevClient"),
//                         paths.appIndexJs,
//                     ].filter(Boolean),
//                     content: "./src/services/DOMHandler.jsx",
//                     background: "./src/services/background.js"
//                 },
//                 output: {
//                     ...webpackConfig.output,
//                     filename: 'static/js/[name].js',
//                 },
//                 optimization: {
//                     ...webpackConfig.optimization,
//                     runtimeChunk: false,
//                 },
//             };
//         },
//     },
// }