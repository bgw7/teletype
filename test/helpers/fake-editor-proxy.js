module.exports =
class FakeEditorProxy {
  constructor (uri) {
    this.bufferProxy = {
      uri,
      dispose () {},
      setDelegate () {},
      createCheckpoint () {},
      groupChangesSinceCheckpoint () {},
      applyGroupingInterval () {}
    }
  }

  dispose () {
    if (this.delegate) this.delegate.dispose()
  }

  follow () {}

  didScroll () {}

  setDelegate (delegate) {
    this.delegate = delegate
  }

  updateSelections () {}
}
