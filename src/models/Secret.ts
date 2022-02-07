import { SecretTooShortError } from '../errors/SecretTooShortError';

export class Secret {
  constructor(private secret: string) {
    if (this.secret.length <= 3) throw new SecretTooShortError();
  }
}
