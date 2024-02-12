import { sign } from './jwt/sign';
import { verify } from './jwt/verify';

const secret = '#secret';

const token = sign({
  exp: Date.now() - 1000,
  data: {
    sub: '@luca.rodrigues'
  },
  secret,
});

const decoded = verify({
  token,
  secret
});

console.log({ decoded })
