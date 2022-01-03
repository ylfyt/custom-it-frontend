export interface IProduct {
	id: string;
	name: string;
	description: string;
	price: number;
	stock: number;
	storeId: string;
	imageUrl: string;
	comments: IComment[];
}

export interface IComment {
	id: string;
	text: string;
	createAt: string;
	user: IUser;
}

export interface IUser {
	id: string;
	username: string;
}
