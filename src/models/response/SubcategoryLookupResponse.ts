export interface SubcategoryLookupResponse {
	kc: number;
	subcategoryName: string;
	total: number;
	items: Array<{
		itemId: number;
		quantity: number;
	}>;
}