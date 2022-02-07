import { UrlIdTooShortError } from './Errors/UrlIdTooShortError';

export class UrlId {
  constructor(private urlId: string) {
    if (this.urlId.length < 10) {
      throw new UrlIdTooShortError();
    }
  }
}
