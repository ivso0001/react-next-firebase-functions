module.exports = {
    distDir: ".next",
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/post': { page: '/post' },
        }
    }
}