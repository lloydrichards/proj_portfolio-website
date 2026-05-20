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

function insertFormat(
  textarea: HTMLTextAreaElement,
  action: FormatAction,
): string {
  const { selectionStart, selectionEnd, value } = textarea;
  const selected = value.slice(selectionStart, selectionEnd);

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

  // Schedule cursor position after React re-render
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
      const newValue = insertFormat(textarea, action);
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
