const { getDefaultConfig } = require("metro-config");
const path = require('path')

const projectRoot = __dirname

module.exports = (async () => {
  const workspaceRoot = path.resolve(__dirname, '../..')
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(projectRoot);
  return {
    watchFolders: [workspaceRoot],
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
      nodeModulesPaths: [
        path.resolve(projectRoot, 'node_modules'),
        path.resolve(workspaceRoot, 'node_modules'),
      ]
    }
  };
})();