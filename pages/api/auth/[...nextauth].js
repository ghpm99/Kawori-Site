import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET
      }),     
  ],
  callbacks: {
    session: async (session, user) => {
      session.user.id = user.sub;      
      return Promise.resolve(session);
    }
  }
})