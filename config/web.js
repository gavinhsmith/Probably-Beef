const config = {
    port: (process.env.NODE_ENV === "production") ? 80 : 3000
};

module.exports = config;