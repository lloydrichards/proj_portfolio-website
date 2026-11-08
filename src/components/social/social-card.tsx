/* biome-ignore-all lint/performance/noImgElement: ImageResponse renders native images into PNG. */
import type { CSSProperties, ReactNode } from "react";
import assets from "@/lib/social-assets.json";
import {
  fitCardTitle,
  type SocialCardKind,
  wrapCardText,
} from "@/lib/social-card";

const color = {
  background: "#1a2234",
  card: "#253047",
  foreground: "#f7f8fa",
  muted: "#b0bdcc",
  green: "#10b981",
  greenMuted: "#214b43",
};
function Tile({
  x,
  y,
  width,
  height,
  children,
  style,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        background: color.card,
        borderRadius: 6,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
function Lines({
  lines,
  size,
  bold = false,
}: {
  lines: string[];
  size: number;
  bold?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: size,
        lineHeight: 1.12,
        fontWeight: bold ? 700 : 400,
      }}
    >
      {lines.map((line, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Static PNG lines have no reconciled state.
        <span key={`${index}-${line}`}>{line.replaceAll(" ", "\u00a0")}</span>
      ))}
    </div>
  );
}
export type SocialCardProps = {
  kind: SocialCardKind;
  title: string;
  description: string;
  tags: string[];
  label?: string;
  date?: string;
  image?: string;
  globe: string;
};
export function SocialCard({
  kind,
  title,
  description,
  tags,
  label,
  date,
  image,
  globe,
}: SocialCardProps) {
  const year = date?.match(/\b(?:19|20)\d{2}\b/)?.[0];
  const section =
    label ||
    { home: "Portfolio", page: title, project: "Project", lab: "Lab" }[kind];
  const heading = fitCardTitle(
    title,
    image ? 344 : 1024,
    image ? 292 : 234,
    image ? 54 : 64,
  );
  const tagLine = tags.slice(0, 2).join(" / ");
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "relative",
        background: color.background,
        color: color.foreground,
        fontFamily: "Roboto Mono",
      }}
    >
      {kind === "home" ? (
        <>
          <Tile
            x={48}
            y={48}
            width={696}
            height={330}
            style={{
              padding: "36px 40px",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Lines lines={["Lloyd", "Richards"]} size={82} bold />
          </Tile>
          <Tile
            x={756}
            y={48}
            width={396}
            height={422}
            style={{
              background: "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={globe}
              alt="Countries Lloyd has lived in and visited"
              width={380}
              height={380}
            />
          </Tile>
          <Tile
            x={48}
            y={390}
            width={696}
            height={140}
            style={{
              background: color.green,
              color: color.background,
              padding: "24px 36px",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 700 }}>
              Interaction engineer
            </div>
            <div style={{ fontSize: 21, marginTop: 8 }}>
              Data platforms & visualizations
            </div>
          </Tile>
          {[
            { value: assets.counts.labs, name: "labs", x: 756 },
            { value: assets.counts.projects, name: "projects", x: 960 },
          ].map(({ value, name, x }) => (
            <Tile
              key={name}
              x={x}
              y={482}
              width={192}
              height={48}
              style={{
                background: name === "labs" ? color.greenMuted : color.green,
                color: name === "labs" ? color.foreground : color.background,
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <span style={{ fontSize: 27, fontWeight: 700 }}>{value}</span>
              <span style={{ fontSize: 21 }}>{name}</span>
            </Tile>
          ))}
        </>
      ) : image ? (
        <>
          <Tile
            x={48}
            y={48}
            width={408}
            height={482}
            style={{
              padding: 32,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Lines lines={heading.lines} size={heading.size} bold />
            <Lines lines={wrapCardText(description, 27, 3)} size={20} />
          </Tile>
          <Tile
            x={468}
            y={48}
            width={684}
            height={400}
            style={{ background: color.card }}
          >
            <img
              src={image}
              alt={title}
              width={684}
              height={400}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Tile>
          <Tile
            x={468}
            y={460}
            width={684}
            height={70}
            style={{
              background: color.green,
              color: color.background,
              padding: "0 28px",
              alignItems: "center",
            }}
          >
            <Lines lines={wrapCardText(tagLine || section, 48, 1)} size={21} />
          </Tile>
        </>
      ) : (
        <>
          <Tile
            x={48}
            y={48}
            width={1104}
            height={302}
            style={{
              padding: "30px 40px",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Lines lines={heading.lines} size={heading.size} bold />
          </Tile>
          <Tile
            x={48}
            y={362}
            width={720}
            height={168}
            style={{
              padding: "26px 32px",
              background: color.green,
              color: color.background,
              alignItems: "center",
            }}
          >
            <Lines lines={wrapCardText(description, 48, 4)} size={22} />
          </Tile>
          <Tile
            x={780}
            y={362}
            width={372}
            height={168}
            style={{
              padding: "24px 28px",
              flexDirection: "column",
              justifyContent: "center",
              color: color.green,
            }}
          >
            <Lines
              lines={
                tags.length
                  ? tags.slice(0, 3).map((tag) => wrapCardText(tag, 22, 1)[0])
                  : [
                      `${assets.counts.projects} projects`,
                      `${assets.counts.labs} labs`,
                    ]
              }
              size={23}
            />
          </Tile>
        </>
      )}
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: 48,
          right: 48,
          bottom: 36,
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 20,
        }}
      >
        <span style={{ color: color.green, fontWeight: 700 }}>
          lloydrichards.dev
        </span>
        <span style={{ color: color.muted }}>
          {wrapCardText(`${section}${year ? ` · ${year}` : ""}`, 48, 1)[0]}
        </span>
      </div>
    </div>
  );
}
