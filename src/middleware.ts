import authMiddleware from "next-auth/middleware";

const noop = () => {};

const func = process.env.DISCORD_CLIENT_ID ? authMiddleware : noop;

export default func;
