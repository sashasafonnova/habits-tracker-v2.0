import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';


export const buildWebpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
   
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };


    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                        localIdentName: options.isDev ? '[path][name]__[local]__[hash:base64:5]' : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader',
        ],
    };
   

    return [
        cssLoader,
        svgLoader,
        tsLoader,
    ];
};