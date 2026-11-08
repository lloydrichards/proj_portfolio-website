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
  collection?: (string | undefined)[];
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
  collection = [],
}: SocialCardProps) {
  const year = date?.match(/\b(?:19|20)\d{2}\b/)?.[0];
  const section =
    label ||
    {
      home: "Portfolio",
      page: title,
      project: "Project",
      lab: "Lab",
      timeline: "Timeline",
      projects: "Projects",
      labs: "Labs",
      cv: "Curriculum Vitae",
    }[kind];
  const heading = fitCardTitle(title, image ? 344 : 1024, 234, image ? 54 : 64);
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
      ) : kind === "timeline" ? (
        <>
          <Tile
            x={32}
            y={42}
            width={496}
            height={488}
            style={{
              background: "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={globe}
              alt="Countries Lloyd has lived in and visited"
              width={496}
              height={496}
            />
          </Tile>
          <Tile
            x={552}
            y={48}
            width={600}
            height={286}
            style={{
              padding: 36,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Lines lines={["Timeline"]} size={64} bold />
            <Lines lines={wrapCardText(description, 36, 4)} size={23} />
          </Tile>
          {["Work", "Learning", "Community", "Places"].map((item, i) => (
            <Tile
              key={item}
              x={552 + (i % 2) * 306}
              y={346 + Math.floor(i / 2) * 98}
              width={294}
              height={86}
              style={{
                background: i === 3 ? color.green : color.greenMuted,
                color: i === 3 ? color.background : color.foreground,
                alignItems: "center",
                padding: 28,
                fontSize: 25,
              }}
            >
              {item}
            </Tile>
          ))}
        </>
      ) : kind === "projects" || kind === "labs" ? (
        <>
          <Tile
            x={48}
            y={48}
            width={432}
            height={302}
            style={{
              padding: 32,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Lines lines={[title]} size={64} bold />
            <Lines lines={wrapCardText(description, 25, 4)} size={23} />
          </Tile>
          <Tile
            x={48}
            y={362}
            width={432}
            height={168}
            style={{
              background: color.green,
              color: color.background,
              padding: 32,
              alignItems: "center",
              gap: 24,
            }}
          >
            <span style={{ fontSize: 76, fontWeight: 700 }}>
              {assets.counts[kind]}
            </span>
            <Lines
              lines={
                kind === "labs"
                  ? ["experiments", "& prototypes"]
                  : ["selected", "projects"]
              }
              size={23}
            />
          </Tile>
          {[
            { x: 492, y: 48, width: 660, height: 282 },
            { x: 492, y: 342, width: 324, height: 188 },
            { x: 828, y: 342, width: 324, height: 188 },
          ].map((rect, i) => (
            <Tile
              key={`${rect.x}-${rect.y}`}
              {...rect}
              style={{ background: i === 0 ? color.card : color.greenMuted }}
            >
              {collection[i] ? (
                <img
                  src={collection[i]}
                  alt={
                    kind === "labs"
                      ? "An experiment from the lab"
                      : "Selected project artwork"
                  }
                  width={rect.width}
                  height={rect.height}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 28,
                    fontSize: 30,
                  }}
                >
                  {kind === "labs"
                    ? "Experiments & prototypes"
                    : "Design & development"}
                </div>
              )}
            </Tile>
          ))}
        </>
      ) : kind === "cv" ? (
        <>
          <Tile
            x={48}
            y={48}
            width={636}
            height={302}
            style={{
              padding: 36,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Lines lines={["Lloyd", "Richards"]} size={76} bold />
            <Lines
              lines={wrapCardText(label || "Fullstack Engineer", 30, 2)}
              size={26}
            />
          </Tile>
          <Tile
            x={48}
            y={362}
            width={636}
            height={168}
            style={{
              background: color.green,
              color: color.background,
              padding: 30,
              alignItems: "center",
            }}
          >
            <Lines lines={wrapCardText(description, 39, 4)} size={23} />
          </Tile>
          <Tile
            x={696}
            y={48}
            width={456}
            height={482}
            style={{
              padding: 32,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Lines lines={wrapCardText(title, 17, 3)} size={36} bold />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                color: color.green,
              }}
            >
              {tags.slice(0, 4).map((tag) => (
                <Lines key={tag} lines={wrapCardText(tag, 26, 2)} size={24} />
              ))}
            </div>
          </Tile>
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
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <span style={{ color: color.green, fontSize: 21 }}>
                {section}
                {year ? ` · ${year}` : ""}
              </span>
              <Lines lines={heading.lines} size={heading.size} bold />
            </div>
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
                  : [section, ...(year ? [year] : [])]
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
