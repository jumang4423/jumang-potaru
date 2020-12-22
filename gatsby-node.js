const path = require(`path`)
const resolve = require('path').resolve
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            },
        },
    });
};
// ???