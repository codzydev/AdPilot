module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              '@': './src',
              '@components': './src/components',
              '@assets': './src/assets',
              '@hooks': './src/hooks',
              '@screens': './src/screens',
              '@utils': './src/utils',
              '@navigation': './src/navigation',
              '@context': './src/context',
              '@constants': './src/constants',
              '@styles': './src/styles',
              '@services': './src/services',
              '@store': './src/store',
              '@types': './src/types',
              '@mocks': './src/mocks',
              '@config': './src/config',
            },
          },
        ],
        'react-native-reanimated/plugin', // keep this last
      ],
    };
  };
  