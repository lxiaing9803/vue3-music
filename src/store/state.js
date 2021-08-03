import { PLAY_MODE, FAVORITE_KEY } from '@/assets/js/constant'
import { load } from '@/assets/js/array-store'

const state = {
  // 顺序列表
  sequenceList: [],
  // 播放列表
  playlist: [],
  // 播放状态
  playing: false,
  // 播放模式
  playMode: PLAY_MODE.sqeuence,
  // 播放歌曲索引
  currentIndex: 0,
  // 全屏播放
  fullScreen: false,
  // 收藏列表
  favoriteList: load(FAVORITE_KEY)
}

export default state
