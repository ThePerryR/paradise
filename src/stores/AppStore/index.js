import { observable } from 'mobx'

import ServerLayer from '../TransportLayer'

/**
 * AppStore
 * Maintains session information
 */
class AppStore {
  @observable currentUserId = null

  constructor (TransportLayer) {
    this.TransportLayer = TransportLayer || new ServerLayer()
  }

  get asJSON () {
    return {
    }
  }
}

export default AppStore
