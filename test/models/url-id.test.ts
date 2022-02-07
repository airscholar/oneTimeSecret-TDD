import { UrlIdTooShortError } from '../../src/errors/UrlIdTooShortError';
import { UrlId } from '../../src/models/Url-id';

describe('UrlId Test', () => {
  it('should create an instance of urlId class', () => {
    expect(new UrlId('123qwerty12')).toBeInstanceOf(UrlId);
  });
  it('should throw an error if the urlId is less than 10 chars', () => {
    expect(() => new UrlId('1245qsd')).toThrow(UrlIdTooShortError);
  });
});
