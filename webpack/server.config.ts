import path from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';

const config: Configuration = {
    name: 'server',
    target: 'node',
    node: { __dirname: false },
    entry: path.join(SRC_DIR, 'server'),
    module: {
        rules: [
            {
                test: /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf|ico)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                loader: 'null-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                loader: 'null-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                use: { loader: 'ts-loader' },
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    mode: IS_DEV ? 'development' : 'production',
    devtool: 'source-map',
    performance: {
        hints: IS_DEV ? false : 'warning',
    },
    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
    optimization: { nodeEnv: false },
};

export default config;