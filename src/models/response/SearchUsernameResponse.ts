export interface PlayerItem {
	item_id: number;
	quantity: number;
	image_url: string;
	item_name: string;
}

export interface Subcategory {
	name: string;
	items: PlayerItem[];
	owned_items_count: number;
	kc: number;
}

export interface Category {
	category_name: string;
	subcategories: Subcategory[];
}

export interface SearchUsernameResponse {
	categories: Category[];
}