import { Ansi, Box } from "effect-boxes";

// ─── Helper: PromptChrome (mirrors Panel.ts) ─────────────────────────────────

const PromptChrome =
  (annotation: Ansi.AnsiAnnotation = Ansi.dim) =>
  <A>(box: Box.Box<A>) =>
    box.pipe(
      Box.pad(0, 0, 0, 1),
      Box.border("thick", {
        annotation,
        sides: { top: false, bottom: false, right: false },
      }),
      Box.pad(1, 0),
    );

// ─── Helper: Hint bar ────────────────────────────────────────────────────────

const hint = (bindings: Array<[string, string]>) =>
  Box.hsep(
    bindings.flatMap(([key, action], i) => [
      ...(i > 0 ? [Box.text(" • ")] : []),
      Box.text(key).pipe(Box.annotate(Ansi.bold)),
      Box.text(` ${action}`),
    ]),
    0,
    Box.left,
  ).pipe(Box.moveRight(2), Box.annotate(Ansi.dim));

// ─── Built-in Prompt.select approximation ────────────────────────────────────

export const builtinSelectExample = [
  `\x1b[36m?\x1b[0m \x1b[1mSelect a template\x1b[0m \x1b[90m›\x1b[0m`,
  `\x1b[36m❯\x1b[0m \x1b[4m\x1b[36mbasic\x1b[0m`,
  `  advanced`,
  `  minimal`,
].join("\n");

// ─── Custom Select (active state, cursor on first item) ──────────────────────

export const customSelectExample = Box.renderPrettySync(
  Box.vcat(
    [
      Box.vcat(
        [
          Box.text("Select a template").pipe(Box.annotate(Ansi.bold)),
          Box.vcat(
            [
              Box.hsep(
                [
                  Box.char("⏵").pipe(Box.annotate(Ansi.cyan)),
                  Box.text("basic").pipe(Box.annotate(Ansi.bold)),
                  Box.hsep(
                    [
                      Box.text("·").pipe(Box.annotate(Ansi.dim)),
                      Box.text("A simple starter").pipe(
                        Box.annotate(Ansi.combine(Ansi.dim, Ansi.italic)),
                      ),
                    ],
                    1,
                    Box.left,
                  ),
                ],
                1,
                Box.left,
              ),
              Box.hsep(
                [
                  Box.char(" "),
                  Box.text("advanced").pipe(Box.annotate(Ansi.dim)),
                ],
                1,
                Box.left,
              ),
              Box.hsep(
                [
                  Box.char(" "),
                  Box.text("minimal").pipe(Box.annotate(Ansi.dim)),
                ],
                1,
                Box.left,
              ),
            ],
            Box.left,
          ),
        ],
        Box.left,
      ).pipe(PromptChrome()),
      hint([
        ["↓", "down"],
        ["↑", "up"],
        ["enter", "select"],
      ]),
    ],
    Box.left,
  ),
);

// ─── Custom Select (submitted state) ────────────────────────────────────────

export const customSelectSubmittedExample = Box.renderPrettySync(
  Box.hsep(
    [
      Box.text("✔").pipe(Box.annotate(Ansi.green)),
      Box.text("Select a template").pipe(Box.annotate(Ansi.bold)),
      Box.text("basic").pipe(Box.annotate(Ansi.cyan)),
    ],
    1,
    Box.top,
  ),
);

// ─── Confirm (active, cursor on Yes) ────────────────────────────────────────

export const confirmExample = Box.renderPrettySync(
  Box.vcat(
    [
      Box.vsep(
        [
          Box.text("Deploy to production?").pipe(Box.annotate(Ansi.bold)),
          Box.text(
            "This will deploy the current\nbranch to the production env.",
          ).pipe(Box.pad(0, 1), Box.border("single", { annotation: Ansi.dim })),
          Box.hsep(
            [
              Box.text("Yes").pipe(
                Box.pad(0, 2),
                Box.annotate(Ansi.combine(Ansi.bgCyan, Ansi.bold)),
              ),
              Box.text("No").pipe(
                Box.pad(0, 2),
                Box.annotate(Ansi.bgBrightBlack),
              ),
            ],
            1,
            Box.center1,
          ),
        ],
        1,
        Box.left,
      ).pipe(PromptChrome()),
      hint([
        ["←", "left"],
        ["→", "right"],
        ["enter", "confirm"],
      ]),
    ],
    Box.left,
  ),
);

// ─── TextInput (error state) ────────────────────────────────────────────────

export const textInputErrorExample = Box.renderPrettySync(
  Box.vcat(
    [
      Box.vcat(
        [
          Box.text("Project name").pipe(Box.annotate(Ansi.bold)),
          Box.hsep(
            [
              Box.text("? ").pipe(Box.annotate(Ansi.red)),
              Box.text("my project").pipe(
                Box.annotate(Ansi.combine(Ansi.white, Ansi.bold)),
              ),
              Box.text(" ").pipe(
                Box.annotate(Ansi.combine(Ansi.bgWhite, Ansi.black)),
              ),
            ],
            0,
            Box.center1,
          ),
        ],
        Box.left,
      ).pipe(PromptChrome(Ansi.red)),
      Box.text("✘ Must not contain spaces").pipe(
        Box.moveRight(2),
        Box.annotate(Ansi.red),
      ),
    ],
    Box.left,
  ),
);

// ─── MultiSelect (with groups, 2 checked) ───────────────────────────────────

export const multiSelectExample = Box.renderPrettySync(
  Box.vcat(
    [
      Box.vcat(
        [
          Box.hsep(
            [
              Box.text("Select plugins").pipe(Box.annotate(Ansi.bold)),
              Box.text("(2/5)").pipe(Box.annotate(Ansi.dim)),
            ],
            1,
            Box.center1,
          ),
          Box.text("── Linting ──").pipe(Box.annotate(Ansi.dim)),
          Box.hsep(
            [
              Box.char("⏵").pipe(Box.annotate(Ansi.cyan)),
              Box.char("◼").pipe(Box.annotate(Ansi.green)),
              Box.text("eslint").pipe(Box.annotate(Ansi.green)),
              Box.hsep(
                [
                  Box.text("·").pipe(Box.annotate(Ansi.dim)),
                  Box.text("Code linting").pipe(
                    Box.annotate(Ansi.combine(Ansi.dim, Ansi.italic)),
                  ),
                ],
                1,
                Box.left,
              ),
            ],
            1,
            Box.left,
          ),
          Box.hsep(
            [
              Box.char(" "),
              Box.char("◼").pipe(Box.annotate(Ansi.green)),
              Box.text("prettier").pipe(Box.annotate(Ansi.green)),
            ],
            1,
            Box.left,
          ),
          Box.text("── Testing ──").pipe(Box.annotate(Ansi.dim)),
          Box.hsep(
            [
              Box.char(" "),
              Box.char("◻").pipe(Box.annotate(Ansi.dim)),
              Box.text("vitest").pipe(Box.annotate(Ansi.white)),
            ],
            1,
            Box.left,
          ),
          Box.hsep(
            [
              Box.char(" "),
              Box.char("◻").pipe(Box.annotate(Ansi.dim)),
              Box.text("playwright").pipe(Box.annotate(Ansi.white)),
            ],
            1,
            Box.left,
          ),
          Box.hsep(
            [
              Box.char(" "),
              Box.char("◻").pipe(Box.annotate(Ansi.dim)),
              Box.text("storybook").pipe(Box.annotate(Ansi.white)),
            ],
            1,
            Box.left,
          ),
        ],
        Box.left,
      ).pipe(PromptChrome()),
      hint([
        ["space", "toggle"],
        ["a", "all"],
        ["enter", "submit"],
      ]),
    ],
    Box.left,
  ),
);

// ─── HorizontalSelect (pill layout, cursor on second) ───────────────────────

export const horizontalSelectExample = Box.renderPrettySync(
  Box.vcat(
    [
      Box.vcat(
        [
          Box.hsep(
            [
              Box.text("?").pipe(Box.annotate(Ansi.cyan)),
              Box.text("Package manager").pipe(Box.annotate(Ansi.bold)),
            ],
            1,
            Box.center1,
          ),
          Box.hsep(
            [
              Box.text("npm").pipe(Box.pad(0, 2), Box.annotate(Ansi.dim)),
              Box.text("pnpm").pipe(
                Box.pad(0, 2),
                Box.annotate(Ansi.combine(Ansi.cyan, Ansi.bold)),
              ),
              Box.text("yarn").pipe(Box.pad(0, 2), Box.annotate(Ansi.dim)),
              Box.text("bun").pipe(Box.pad(0, 2), Box.annotate(Ansi.dim)),
            ],
            2,
            Box.center1,
          ),
        ],
        Box.left,
      ).pipe(PromptChrome()),
      hint([
        ["←", "left"],
        ["→", "right"],
        ["enter", "select"],
      ]),
    ],
    Box.left,
  ),
);
