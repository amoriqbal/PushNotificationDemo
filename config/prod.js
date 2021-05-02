module.exports = {
  pusherCreds: {
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: PUSHER_SECRET,
    cluster: PUSHER_CLUSTER,
    useTLS: true,
  },
  port : process.env.PORT
};
