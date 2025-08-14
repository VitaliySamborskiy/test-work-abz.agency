type Position = {
	id: number;
	name: string;
};

type PositionsResponse = {
	success: boolean;
	positions: Position[];
};

export type { PositionsResponse, Position };
