import jwtDecode from "jwt-decode";

export type DecodedToken = {
  readonly exp: number;
  readonly iat: number;
  readonly user_id?: string | number;
  readonly token_type?: string;
  readonly jti?: string;
};

let sample = {
  token_type: "refresh",
  exp: 1642666104,
  iat: 1642579704,
  jti: "dedb175f44584bc4a25e9d16b71843cb",
  user_id: 4,
};

export class AuthToken {
  readonly decodedToken: DecodedToken;

  constructor(readonly token?: string) {
    // we are going to default to an expired decodedToken
    this.decodedToken = { exp: 0, iat: 0 };

    // then try and decode the jwt using jwt-decode
    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e: any) {}
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }

  get userInfo(): string | number | undefined {
    return this.decodedToken.user_id;
  }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  get isValid(): boolean {
    return !this.isExpired;
  }
}
