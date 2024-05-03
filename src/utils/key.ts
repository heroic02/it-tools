import crypto from 'crypto-js';

export async function generateKey(password: string): Promise<string> {
  return crypto
    .PBKDF2(password, 'utf-8', {
      iterations: 1000,
      keySize: 32,
      hasher: crypto.algo.SHA256,
    })
    .toString();
}
