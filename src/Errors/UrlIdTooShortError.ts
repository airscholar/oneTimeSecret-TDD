export class UrlIdTooShortError extends Error {
  constructor() {
    super('URL Id must not be less than 10 chars');
    this.name = 'UrlIdTooShortError';
  }
}
