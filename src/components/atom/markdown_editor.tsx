"use client";

import { Bold, Heading2, Heading3, Italic, List } from "lucide-react";
import { useCallback, useRef } from "react";

import { Button } from "@/components/atom/button";
import { Markdown } from "@/components/atom/markdown";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atom/tabs";
import { Textarea } from "@/components/atom/textarea";
import { cn } from "@/lib/utils";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  placeholder?: string;
  className?: string;
  minRows?: number;
}

type FormatAction = "bold" | "italic" | "ul" | "h2" | "h3";

function toggleFormat(
  textarea: HTMLTextAreaElement,
  action: FormatAction,
): string {
  const { selectionStart, selectionEnd, value } = textarea;
  const selected = value.slice(selectionStart, selectionEnd);

  // Check if we can remove existing formatting
  switch (action) {
    case "bold": {
      // Check if selection is wrapped with **
      const beforeChars = value.slice(selectionStart - 2, selectionStart);
      const afterChars = value.slice(selectionEnd, selectionEnd + 2);
      if (beforeChars === "**" && afterChars === "**") {
        const newValue =
          value.slice(0, selectionStart - 2) +
          selected +
          value.slice(selectionEnd + 2);
        setTimeout(() => {
          textarea.selectionStart = selectionStart - 2;
          textarea.selectionEnd = selectionEnd - 2;
          textarea.focus();
        }, 0);
        return newValue;
      }
      // Check if selected text includes the markers
      if (selected.startsWith("**") && selected.endsWith("**")) {
        const unwrapped = selected.slice(2, -2);
        const newValue =
          value.slice(0, selectionStart) +
          unwrapped +
          value.slice(selectionEnd);
        setTimeout(() => {
          textarea.selectionStart = selectionStart;
          textarea.selectionEnd = selectionStart + unwrapped.length;
          textarea.focus();
        }, 0);
        return newValue;
      }
      break;
    }
    case "italic": {
      const beforeChar = value.slice(selectionStart - 1, selectionStart);
      const afterChar = value.slice(selectionEnd, selectionEnd + 1);
      if (beforeChar === "_" && afterChar === "_") {
        const newValue =
          value.slice(0, selectionStart - 1) +
          selected +
          value.slice(selectionEnd + 1);
        setTimeout(() => {
          textarea.selectionStart = selectionStart - 1;
          textarea.selectionEnd = selectionEnd - 1;
          textarea.focus();
        }, 0);
        return newValue;
      }
      if (selected.startsWith("_") && selected.endsWith("_")) {
        const unwrapped = selected.slice(1, -1);
        const newValue =
          value.slice(0, selectionStart) +
          unwrapped +
          value.slice(selectionEnd);
        setTimeout(() => {
          textarea.selectionStart = selectionStart;
          textarea.selectionEnd = selectionStart + unwrapped.length;
          textarea.focus();
        }, 0);
        return newValue;
      }
      break;
    }
    case "ul": {
      // Check if all lines start with "- "
      const lines = selected.split("\n");
      const allBulleted =
        lines.length > 0 && lines.every((l) => l.startsWith("- "));
      if (allBulleted) {
        const stripped = lines.map((l) => l.slice(2)).join("\n");
        const newValue =
          value.slice(0, selectionStart) + stripped + value.slice(selectionEnd);
        setTimeout(() => {
          textarea.selectionStart = selectionStart;
          textarea.selectionEnd = selectionStart + stripped.length;
          textarea.focus();
        }, 0);
        return newValue;
      }
      break;
    }
    case "h2":
    case "h3": {
      const prefix = action === "h2" ? "## " : "### ";
      // Find start of current line
      const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
      const linePrefix = value.slice(lineStart, lineStart + prefix.length);
      if (linePrefix === prefix) {
        const newValue =
          value.slice(0, lineStart) + value.slice(lineStart + prefix.length);
        setTimeout(() => {
          textarea.selectionStart = selectionStart - prefix.length;
          textarea.selectionEnd = selectionEnd - prefix.length;
          textarea.focus();
        }, 0);
        return newValue;
      }
      break;
    }
  }

  // Not toggling off — apply formatting
  let before: string;
  let after: string;
  let insertion: string;

  switch (action) {
    case "bold":
      before = "**";
      after = "**";
      insertion = selected || "bold text";
      break;
    case "italic":
      before = "_";
      after = "_";
      insertion = selected || "italic text";
      break;
    case "ul": {
      const prefix = "- ";
      if (selected) {
        insertion = selected
          .split("\n")
          .map((line) => `${prefix}${line}`)
          .join("\n");
      } else {
        insertion = `${prefix}item`;
      }
      before =
        selectionStart > 0 && value[selectionStart - 1] !== "\n" ? "\n" : "";
      after = "";
      break;
    }
    case "h2":
      before =
        selectionStart > 0 && value[selectionStart - 1] !== "\n"
          ? "\n## "
          : "## ";
      after = "";
      insertion = selected || "Heading";
      break;
    case "h3":
      before =
        selectionStart > 0 && value[selectionStart - 1] !== "\n"
          ? "\n### "
          : "### ";
      after = "";
      insertion = selected || "Heading";
      break;
  }

  const newValue =
    value.slice(0, selectionStart) +
    before +
    insertion +
    after +
    value.slice(selectionEnd);

  setTimeout(() => {
    textarea.selectionStart = selectionStart + before.length;
    textarea.selectionEnd = selectionStart + before.length + insertion.length;
    textarea.focus();
  }, 0);

  return newValue;
}

function MarkdownEditor({
  value,
  onChange,
  id,
  placeholder = "Write markdown...",
  className,
  minRows = 6,
}: MarkdownEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFormat = useCallback(
    (action: FormatAction) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      const newValue = toggleFormat(textarea, action);
      onChange(newValue);
    },
    [onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const mod = e.metaKey || e.ctrlKey;
      if (!mod) return;

      if (e.key === "b") {
        e.preventDefault();
        handleFormat("bold");
      } else if (e.key === "i") {
        e.preventDefault();
        handleFormat("italic");
      }
    },
    [handleFormat],
  );

  return (
    <Tabs
      defaultValue="edit"
      data-slot="markdown-editor"
      className={cn("flex flex-col gap-2", className)}
    >
      <div className="flex items-center gap-2">
        <TabsList>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <div
          data-slot="markdown-toolbar"
          className="flex items-center gap-0.5 ml-auto"
        >
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => handleFormat("bold")}
            aria-label="Bold"
          >
            <Bold />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => handleFormat("italic")}
            aria-label="Italic"
          >
            <Italic />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => handleFormat("ul")}
            aria-label="Unordered list"
          >
            <List />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => handleFormat("h2")}
            aria-label="Heading 2"
          >
            <Heading2 />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => handleFormat("h3")}
            aria-label="Heading 3"
          >
            <Heading3 />
          </Button>
        </div>
      </div>

      <TabsContent value="edit">
        <Textarea
          ref={textareaRef}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={minRows}
          className="font-mono text-sm"
        />
      </TabsContent>

      <TabsContent value="preview">
        {value ? (
          <Markdown
            markdown={value}
            className="min-h-16 rounded-md border border-input px-2.5 py-2"
          />
        ) : (
          <p className="min-h-16 rounded-md border border-input px-2.5 py-2 text-muted-foreground">
            Nothing to preview
          </p>
        )}
      </TabsContent>
    </Tabs>
  );
}

export { MarkdownEditor };
