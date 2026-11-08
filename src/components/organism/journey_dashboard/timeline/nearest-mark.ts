export type MarkSegment = {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

// Distance to the actual bar segment gives long bars a consistent catchment area.
export function nearestMark(
  segments: MarkSegment[],
  x: number,
  y: number,
  radius = 22,
) {
  let nearest: string | null = null;
  let distance = radius * radius;
  for (const segment of segments) {
    const dx = segment.x2 - segment.x1;
    const dy = segment.y2 - segment.y1;
    const length = dx * dx + dy * dy;
    const t = length
      ? Math.max(
          0,
          Math.min(1, ((x - segment.x1) * dx + (y - segment.y1) * dy) / length),
        )
      : 0;
    const squared =
      (x - segment.x1 - t * dx) ** 2 + (y - segment.y1 - t * dy) ** 2;
    if (squared <= distance && (nearest === null || squared < distance)) {
      nearest = segment.id;
      distance = squared;
    }
  }
  return nearest;
}

export function staggerNearbyPoints(
  segments: MarkSegment[],
  pointIds: Set<string>,
  height: number,
  spacing = 24,
) {
  const result = segments.map((segment) => ({ ...segment }));
  const points = result
    .filter((segment) => pointIds.has(segment.id))
    .sort((a, b) => a.x1 - b.x1);
  const clusters: MarkSegment[][] = [];
  for (const point of points) {
    const cluster = clusters.at(-1);
    if (cluster && point.x1 - cluster[cluster.length - 1].x1 < spacing)
      cluster.push(point);
    else clusters.push([point]);
  }
  for (const cluster of clusters) {
    let center =
      cluster.reduce((sum, point) => sum + point.y1, 0) / cluster.length;
    const bars = result.filter(
      (segment) =>
        !pointIds.has(segment.id) &&
        segment.x2 >= cluster[0].x1 - spacing &&
        segment.x1 <= cluster[cluster.length - 1].x1 + spacing,
    );
    if (bars.length)
      center = Math.max(
        center,
        ...bars.map(
          (bar) =>
            Math.max(bar.y1, bar.y2) +
            spacing +
            ((cluster.length - 1) / 2) * spacing,
        ),
      );
    cluster.forEach((point, index) => {
      point.y1 = center + (index - (cluster.length - 1) / 2) * spacing;
      point.y2 = point.y1;
    });
  }
  const shift = Math.max(
    0,
    12 - Math.min(...result.map((segment) => Math.min(segment.y1, segment.y2))),
  );
  for (const segment of result) {
    segment.y1 += shift;
    segment.y2 += shift;
  }
  return {
    segments: result,
    height: Math.max(
      height,
      ...result.map((segment) => Math.max(segment.y1, segment.y2) + 12),
    ),
  };
}
