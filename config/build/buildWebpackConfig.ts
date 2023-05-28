import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { buildWebpackLoaders } from './buildWebpackLoaders';
import miniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {

   const {paths, mode, isDev} = options;

   return {
      mode,
      entry: paths.entry,
      output: {
         filename: '[name].[contenthash].js',
         path: paths.build,
         clean: true,
      },
      devtool: isDev ? 'inline-source-map': undefined,
      module: {
         rules: buildWebpackLoaders(options)
      },
      plugins: [
         new HTMLWebpackPlugin({
            template: paths.html
         }),
         new webpack.ProgressPlugin(),
         new miniCssExtractPlugin()
      ],
      resolve: {
         extensions: ['.tsx', '.ts', '.js'],
         preferAbsolute: true,
         modules: [paths.src, 'node_modules'],
         mainFiles: ['index'],
         alias: {},
      },
      devServer: isDev ? buildDevServer(options) : undefined,
   };
}