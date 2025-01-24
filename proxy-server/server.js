const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.post("/oauth/access-token", async (req, res) => {
  const { code } = req.body;
  const clientId = "24f2b7cfa592cf8248345a9766493c7e";
  const clientSecret = "iTCvvnnzgiitAXnVNobfciArsUFPQEEh";
  const redirectUri = "http://localhost:5173/auth/redirect";
  const accessTokenUrl = "https://test.sso.pesaflow.com/oauth/access-token";

  try {
    const response = await axios.post(accessTokenUrl, null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error during OAuth token exchange:", error);
    res.status(500).json({ message: "OAuth token exchange failed" });
  }
});

app.get("/user-info", async (req, res) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if (!accessToken) {
      throw new Error("Missing access token");
    }

    const userInfoUrl = "https://test.sso.pesaflow.com/api/user-info";
    const userResponse = await axios.get(userInfoUrl, {
      params: { access_token: accessToken },
    });

    res.json(userResponse.data);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ message: "Error fetching user information" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
