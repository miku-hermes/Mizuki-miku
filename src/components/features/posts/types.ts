import type { Page } from "astro";
import type { CollectionEntry } from "astro:content";

export interface PostCardProps {
	class?: string;
	entry: CollectionEntry<"posts">;
	style?: string;
}

export interface PostPageProps {
	page: Page<CollectionEntry<"posts">>;
}
