const { getDefaultConfig } = require('@expo/metro-config');
 //@type {import()}

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;