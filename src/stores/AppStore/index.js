import ServerLayer from '../TransportLayer'

/**
 * AppStore
 * Maintains session information
 */
class AppStore {
  constructor (TransportLayer) {
    this.TransportLayer = TransportLayer || new ServerLayer()
  }

  get asJSON () {
    return {}
  }
}

export default AppStore
