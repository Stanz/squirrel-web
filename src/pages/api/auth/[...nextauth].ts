import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      let member;
      try {
        member = await (
          await fetch(
            `https://discord.com/api/guilds/${encodeURI(
              process.env.DISCORD_GUILD_ID
            )}/members/${encodeURI(user.id)}`,
            {
              headers: {
                Authorization: process.env.DISCORD_AUTHORIZATION_HEADER,
              },
            }
          )
        ).json();
      } catch (err) {
        return false;
      }
      return !!member.user;
    },
  },
});
