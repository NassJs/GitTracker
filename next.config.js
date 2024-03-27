module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.github.com',
          // pathname: '/user/',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          // port: '',
          // pathname: '/u/**',
        },
      ],
    },
    env : {
      USER : process.env.USER,
    }
  }
  