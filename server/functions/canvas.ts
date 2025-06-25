import { gt } from "drizzle-orm";

export async function getAllArtworks() {
	const result = await useDrizzle()
		.select({
			data: tables.artwork.data,
		})
		.from(tables.artwork)
		.orderBy(eq(tables.artwork.id, 1));
	if (!result) {
		console.error("getPaintings failed", result);
		return createError("Failed to get paintings");
	}

	console.log(result);
	return result.map((v) => new Uint8Array(v.data));
}

export async function addArtwork(
	painting: Uint8Array,
	WIDTH: number,
	DEPTH: number,
) {
	if (
		painting.length !== Math.pow(WIDTH, 2) ||
		!painting.every((c) => c <= DEPTH)
	) {
		return createError("Validation error");
	}

	const latestIdResult = await useDrizzle()
		.select({ maxId: sql`max(id)` })
		.from(tables.artwork)
		.get();
	const latestId = (latestIdResult?.maxId as number) ?? 0;
	const thresholdId = latestId - 10;

	const similar = await useDrizzle()
		.select()
		.from(tables.artwork)
		.where(
			and(
				eq(tables.artwork.data, painting),
				gt(tables.artwork.id, thresholdId),
			),
		)
		.get();

	if (similar) {
		return createError("Too similar to recent painting");
	}

	const result = await useDrizzle()
		.insert(tables.artwork)
		.values({ data: painting })
		.run();

	if (!result) {
		console.error("addPainting failed", result);
		return createError("Failed to add painting");
	}

	return { ok: true };
}
