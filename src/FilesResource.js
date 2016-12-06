import querystring from 'querystring';

/**
 * Provides access to the `calls` resource.
 */
class CallsResource {

  /**
   * The path to the `calls` resource.
   */
  static get PATH() {
    return '/media/download?id=';
  }

  /**
   * Creates a new FilesResource.
   *
   * @param {Credentials} creds - Credentials used when interacting with the Nexmo API.
   * @param {Object} options - additional options for the class.
   */
  constructor(creds, options) {
    this.creds = creds;
    this.options = options;
  }

  /**
   * Get media file.
   *
   * @param {string|object} query -
   * @param {function} callback - function to be called when the request completes.
   */
  get(query, $fileId) {
    if(!fileId) {
      throw new Error('"fileId" is a required parameter');
    }

    var config = {
      host:'api.nexmo.com',
      path:`${CallsResource.PATH}${fileId}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }

}

export default CallsResource;
