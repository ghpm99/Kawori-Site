import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import authorization from '../../../security/authorization';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
  ],
  callbacks: {

    signIn: async (user, account, profile) => {

      if (account.provider === 'discord') {

        user.discordUser = {
          id: user.id,
          name: user.name,
          discriminator: profile.discriminator,
          image: user.image,
          locale: profile.locale,
          verified: profile.verified
        }

        return true;
      }
      return false;

    },
    session: async (session, user) => {      
      
      session.user.id = user.sub;
      session.user.role = await getUserRole(user.sub);
      return Promise.resolve(session);
    }
  },
  events: {
    async signIn(message) { /* on successful sign in */
      onSignIn(message.user.discordUser);
    },
    async signOut(message) { /* on signout */
      onSignOut(message.sub);
    },
    async session(message) { /* session is active */ },
    async error(message) { /* error in authentication flow */ }
  }
})

async function onSignIn(discordUser) {

  const urlLogin = process.env.API_SPRING_URL + "/user/_login?id=" + discordUser.id + "&username=" + discordUser.name +
    "&discriminator=" + discordUser.discriminator + "&avatar=" + discordUser.image + "&locale=" + discordUser.locale + "&verified=" + discordUser.verified;


  fetch(urlLogin, {
    method: "GET",
    headers: authorization()
  });

}

function onSignOut(idUser) {

  const urlLogout = process.env.API_SPRING_URL + "/user/_logout?id=" + idUser;

  fetch(urlLogout, {
    method: "GET",
    headers: authorization()
  });

}

async function getUserRole(idUser) {
  const urlRole = process.env.API_SPRING_URL + "/user/role?id=" + idUser;

  const res = await fetch(urlRole, {
    method: "GET",
    headers: authorization()
  });

  const data = await res.json();

  return data.role;
}