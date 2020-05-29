const path = require("path");

const replaceTable = {
  useControlledStateWithValue: true,
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /(\/|\\)FeatureFlags\.js$/,
      loader: "string-replace-loader",
      options: {
        multiple: Object.keys(replaceTable).map((key) => ({
          search: `export\\s+var\\s+${key}\\s*=\\s*false`,
          replace: `export var ${key} = ${replaceTable[key]}`,
          flags: "i",
        })),
      },
    });
    return config;
  },
};
