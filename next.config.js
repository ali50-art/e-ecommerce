module.exports = {
  async rewrites() {
    return [
      {
        source: "s/:path*",
        destination: "hhttp://localhost:5000/:path*",
      },
    ];
  },
  devIndicators: {
    autoPrerender: false,
  },
};
