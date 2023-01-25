import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export function hashPassword(rawPassword: string) {
  return bcrypt.hashSync(rawPassword, saltOrRounds);
}

export function compareHashPassword(rawPassword: string, encrypted: string) {
  return bcrypt.compareSync(rawPassword, encrypted);
}
