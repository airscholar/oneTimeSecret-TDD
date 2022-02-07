import { SecretTooShortError } from './Errors/SecretTooShortError';

export class Secret {
  constructor(private secret: string) {
    if (this.secret.length <= 3) throw new SecretTooShortError();
  }
}
