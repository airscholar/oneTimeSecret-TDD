import { Secret } from '../models/Secret';
import { UrlId } from '../models/Url-id';

export interface SecretStorer {
  storeSecret(secret: Secret): Promise<UrlId>;
}
