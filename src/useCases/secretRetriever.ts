import { Secret } from '../models/Secret';
import { UrlId } from '../models/Url-id';

export interface SecretRetriever {
  retrieveSecret(urlId: UrlId): Promise<Secret>;
}
