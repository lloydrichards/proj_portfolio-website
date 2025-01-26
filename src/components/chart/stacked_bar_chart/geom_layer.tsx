import { typefaceMeta } from "@/components/tokens/typeface";
import { max, ScaleBand, ScaleLinear, ScaleOrdinal } from "d3";
import { motion } from "framer-motion";
import { FC } from "react";

type GeomLayerProps = {
  xScale: ScaleBand<string>;
  yScale: ScaleLinear<number, number>;
  cScale: ScaleOrdinal<string, string>;
  series: d3.Series<
    { stack: string; [key: string]: string | number },
    string
  >[];
  onSelected: (selected: { series: string; value: number } | null) => void;
};

export const GeomLayer: FC<GeomLayerProps> = ({
  xScale,
  yScale,
  cScale,
  series,
  onSelected,
}) => {
  const stackSums = series[0].map((_, index) => {
    return series.reduce((sum, s) => {
      const value = s[index].data[s.key] as number;
      return sum + value;
    }, 0);
  });

  return (
    <g>
      {/* Bars */}
      <g>
        {series.map((s, i) => (
          <g key={i}>
            {s.map((d) => (
              <motion.rect
                key={`series-${s.key}-stack-${d.data.stack}`}
                initial={{
                  x: xScale(d.data.stack),
                }}
                animate={{
                  x: xScale(d.data.stack),
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                y={yScale(d[1])}
                width={xScale.bandwidth()}
                height={max([0, yScale(d[0]) - yScale(d[1])])}
                fill={cScale(d.data.stack)}
                className="stroke-background stroke-3 hover:opacity-60"
                opacity={0.8}
                onTouchStart={() =>
                  onSelected({
                    series: s.key,
                    value: d.data[s.key] as number,
                  })
                }
                onTouchEnd={() => onSelected(null)}
                onHoverStart={() => {
                  onSelected({
                    series: s.key,
                    value: d.data[s.key] as number,
                  });
                }}
                onHoverEnd={() => onSelected(null)}
              />
            ))}
          </g>
        ))}
      </g>
      {/* Annotations */}
      <g>
        {stackSums.map((sum, i) => (
          <text
            key={i}
            x={xScale(series[0][i].data.stack)! + xScale.bandwidth() / 2}
            y={yScale(sum) - 8}
            textAnchor="middle"
            className={typefaceMeta("fill-foreground text-sm")}
          >
            {sum.toLocaleString()}
          </text>
        ))}
      </g>
    </g>
  );
};
