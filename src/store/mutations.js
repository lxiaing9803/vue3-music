const mutations = {
  setPlayingState (state, playing) {
    state.playing = playing
  },
  setSequenceList (state, list) {
    state.sequenceList = list
  },
  setPlaylist (state, playlist) {
    state.playlist = playlist
  },
  setPlayMode (state, mode) {
    state.playMode = mode
  },
  setCurrentIndex (state, index) {
    state.currentIndex = index
  },
  setFullScreen (state, fullScreen) {
    state.fullScreen = fullScreen
  }
}

export default mutations