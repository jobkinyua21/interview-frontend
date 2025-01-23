import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    returnUrl: null,
    accessToken: null,
  }),
  actions: {
    async loginWithOAuth() {
      const clientId = "24f2b7cfa592cf8248345a9766493c7e";
      const redirectUri = "http://localhost:5173/auth/redirect";
      const authorizationUrl =
        "https://test.sso.pesaflow.com/en/oauth/authorize";
      const scope = "openid";
      const responseType = "code";

      const url = `${authorizationUrl}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

      window.location.href = url;
    },

    // async handleOAuthRedirect() {
    //   const code = new URLSearchParams(window.location.search).get('code');
    //   if (!code) {
    //     console.error('No authorization code found in the URL');
    //     return;
    //   }

    //   const accessTokenUrl = 'http://localhost:3000/oauth/access-token'; // Proxy URL

    //   try {
    //     const response = await axios.post(accessTokenUrl, { code });

    //     const accessToken = response.data.access_token;
    //     localStorage.setItem('access_token', accessToken);

    //     this.fetchUserInfo(accessToken);
    //   } catch (error) {
    //     console.error('Error during OAuth token exchange:', error);
    //   }
    // },

    // async fetchUserInfo(accessToken) {
    //   try {
    //     const userInfoUrl = 'http://localhost:3000/user-info'; // Proxy URL
    //     const response = await axios.get(userInfoUrl, {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     });
    //     this.user = response.data;
    //     this.accessToken = accessToken;

    //   } catch (error) {
    //     console.error('Error fetching user info:', error);
    //     if (error.response && error.response.status === 401) {
    //       this.clearUserData();
    //     }
    //   }
    // },

    async handleOAuthRedirect() {
      const code = new URLSearchParams(window.location.search).get("code");
      const clientId = "24f2b7cfa592cf8248345a9766493c7e";
      const clientSecret = "iTCvvnnzgiitAXnVNobfciArsUFPQEEh";
      const redirectUri = "http://localhost:5173/auth/redirect";
      const accessTokenUrl = "https://test.sso.pesaflow.com/oauth/access-token";
      try {
        const response = await axios.post(accessTokenUrl, {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "authorization_code",
          code: code,
          redirect_uri: redirectUri,
        });
        console.log("response: 000000" + response);
        const accessToken = response.data.access_token;
        localStorage.setItem("access_token", accessToken);

        this.fetchUserInfo(accessToken);
      } catch (error) {
        console.error("Error during OAuth token exchange", error);
      }
    },

    async fetchUserInfo(accessToken) {
      const userInfoUrl = "https://test.sso.pesaflow.com/api/user-info";

      try {
        const userResponse = await axios.get(userInfoUrl, {
          params: { access_token: accessToken },
        });

        this.user = userResponse.data;
        this.accessToken = accessToken;

        const router = useRouter();
        router.push(this.returnUrl || "/");
      } catch (error) {
        console.error("Error fetching user info", error);
      }
    },
    clearUserData() {
      this.user = null;
      this.accessToken = null;
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      window.location.href = "/";
    },
  },
});
