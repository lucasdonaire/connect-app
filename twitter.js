const { Token, Key, ClientSecret } = require("./env/credentials.js")
const { Client, auth } = require("twitter-api-sdk");
const readline = require("readline");

// const client = new Client(Token);

async function main(){
    // let res = await axios.get('https://api.twitter.com/2/users/by/username/nike/following')
    // const tweet = await client.tweets.findTweetById("20");
    // console.log(tweet.data.text);
    // let res = await client.users.findUserByUsername('lucasdnr_')
    // console.log(res)
    // let fol = await client.users.usersIdFollow(res.data.id)
    // console.log(fol)

    const authClient = new auth.OAuth2User({
        client_id: Key,
        client_secret: ClientSecret,
        callback: "http://127.0.0.1:3000/callback",
        scopes: ["tweet.read", "users.read", "offline.access"],
    });

    const authUrl = authClient.generateAuthURL({
        code_challenge_method: "s256",
    });

    console.log(authUrl)
    return

    let code = '?'

    await authClient.requestAccessToken(code);


    const client = new Client(authClient);
}
main()