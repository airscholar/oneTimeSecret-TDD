import { SecretTooShortError } from '../../src/errors/SecretTooShortError';
import { Secret } from '../../src/models/Secret';

describe('Secret Test', () => {
  it('should create an instance of secret class', () => {
    expect(new Secret('123qwe')).toBeInstanceOf(Secret);
  });
  it('should throw an error if the secret is less than 3 chars', () => {
    expect(() => new Secret('12')).toThrow(SecretTooShortError);
  });
});
