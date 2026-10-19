export interface Song {
	id: number;
	title: string;
	artist: string;
	cover: string;
	url: string;
	duration: number;
}

export type RepeatMode = 0 | 1 | 2;

export interface MetingSong {
	id?: number | string;
	name?: string;
	title?: string;
	artist?: string;
	author?: string;
	pic?: string;
	url?: string;
	duration?: number | string;
}
