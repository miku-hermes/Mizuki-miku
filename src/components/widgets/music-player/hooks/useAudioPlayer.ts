import { DEFAULT_SONG } from "../constants";
import type { Song } from "../types";

export interface AudioPlayerState {
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
	isMuted: boolean;
	isLoading: boolean;
	currentSong: Song;
	autoplayFailed: boolean;
	willAutoPlay: boolean;
}

export function togglePlay(
	state: AudioPlayerState,
	audio: HTMLAudioElement | undefined,
) {
	if (!audio || !state.currentSong.url) {
		return;
	}
	if (state.isPlaying) {
		audio.pause();
	} else {
		audio.play().catch(() => {});
	}
}

export function toggleMute(state: AudioPlayerState) {
	state.isMuted = !state.isMuted;
}

export function loadSong(state: AudioPlayerState, song: Song, autoPlay = true) {
	if (!song) {
		return;
	}
	if (song.url !== state.currentSong.url) {
		state.currentSong = { ...song };
		if (song.url) {
			state.isLoading = true;
		} else {
			state.isLoading = false;
		}
	}
	state.willAutoPlay = autoPlay;
}
