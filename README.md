# A statically generated site using Outstatic and Next.js with Discord authentication

## Instructions

Click to deploy with vercel and choose to clone to a new github repository

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstanz%2Fsquirrel-web&env=OST_GITHUB_ID,OST_GITHUB_SECRET,OST_TOKEN_SECRET,DISCORD_CLIENT_ID,DISCORD_CLIENT_SECRET,DISCORD_AUTHORIZATION_HEADER,NEXTAUTH_SECRET&envDescription=Environment%20variables%20needed%20to%20run%20the%20application&envLink=https%3A%2F%2Fgithub.com%2Fstanz%2Fsquirrel-web%2Ftree%2Fmain%2F.env.local.example)

_These environment variables can instead be set as part of the instructions later_

### Adding visual editing (optional)

Register a new [OAuth application on github](https://github.com/settings/applications/new)

_Make sure the Authorization URL is set to the URL Vercel has deployed to and appended with `/api/outstatic/callback`_

### Adding Discord authentication (optional)

You'll need a discord application with an associated bot that has joined the server so that it can see users in that server

1. Setup a new [Discord Application](https://discord.com/developers/applications) (or pick an existing one)
2. Click OAuth2 and add a redirect URL to your websites URL and appended with `/api/auth/callback/discord`
3. Add your Client ID and Client Secret to the environment variables DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET
4. Click on bot to get your token and set the environment variable DISCORD_AUTHORIZATION_HEADER e.g. `Bot <token>`
5. Join your bot to server you want to check if not already and set DISCORD_GUILD_ID to the [ID of the server](https://tokenizedhq.com/discord-server-id/)
6. Make sure the NEXTAUTH_URL environment variable is set to the URL Vercel has deployed to (and that NEXTURL_SECRET is set to something.. secret)
