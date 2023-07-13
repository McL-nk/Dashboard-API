type userReturn = {
        "id": string,
        "username": string,
        "discriminator": Number,
        "avatar": string,
        "verified": Boolean,
        "email": string,
        "flags": Number,
        "banner": string,
        "accent_color": Number,
        "premium_type": Number,
        "public_flags": Number
}

type oathReturn = {
    "access_token": string,
    "token_type": string,
    "expires_in": Number,
    "refresh_token": string,
    "scope": string
  }