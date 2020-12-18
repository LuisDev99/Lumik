class BaseService {
  protected URL: string = "https://localhost:5001/api";

  constructor(serviceEndpoint: string) {
    this.URL += "/" + serviceEndpoint;
  }
}

export default BaseService;