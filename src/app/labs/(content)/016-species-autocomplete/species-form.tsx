"use client";

import { Combobox } from "@base-ui/react/combobox";
import { useId, useState } from "react";
import { Button } from "@/components/atom/button";
import { Input } from "@/components/atom/input";
import species from "./species.json";

type Species = (typeof species)[number];

export function SpeciesForm() {
  const nameId = useId();
  const speciesId = useId();
  const [selected, setSelected] = useState<Species | null>(null);
  const [submitted, setSubmitted] = useState<{
    plantName: string;
    speciesId: string;
  } | null>(null);

  return (
    <form
      className="not-prose my-6 grid gap-4 rounded-lg border p-4"
      onSubmit={(event) => {
        event.preventDefault();
        const fields = new FormData(event.currentTarget);
        const plantName = String(fields.get("plantName") ?? "").trim();
        if (plantName && selected) {
          setSubmitted({ plantName, speciesId: selected.id });
        }
      }}
    >
      <div className="grid gap-1.5">
        <label htmlFor={nameId} className="text-sm font-medium">
          Plant name
        </label>
        <Input
          id={nameId}
          name="plantName"
          required
          placeholder="e.g. Living room plant"
        />
      </div>
      <Combobox.Root
        name="speciesId"
        items={species}
        itemToStringLabel={(item) => item.common}
        itemToStringValue={(item) => item.id}
        filter={(item, query) =>
          `${item.common} ${item.scientific}`
            .toLowerCase()
            .includes(query.trim().toLowerCase())
        }
        value={selected}
        onValueChange={setSelected}
        required
      >
        <div className="grid gap-1.5">
          <label htmlFor={speciesId} className="text-sm font-medium">
            Species
          </label>
          <Combobox.InputGroup className="flex gap-2">
            <Combobox.Input
              id={speciesId}
              render={<Input />}
              placeholder="Search by common or scientific name"
            />
            <Combobox.Clear render={<Button type="button" variant="outline" />}>
              Clear
            </Combobox.Clear>
          </Combobox.InputGroup>
        </div>
        <Combobox.Portal>
          <Combobox.Positioner
            sideOffset={4}
            className="z-50 w-(--anchor-width)"
          >
            <Combobox.Popup className="max-h-64 overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
              <Combobox.Empty className="px-2 text-sm empty:hidden">
                No species found.
              </Combobox.Empty>
              <Combobox.List>
                {(item: Species) => (
                  <Combobox.Item
                    key={item.id}
                    value={item}
                    className="grid cursor-default rounded-sm px-3 py-2 data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                  >
                    <span>{item.common}</span>
                    <span className="text-sm italic text-muted-foreground">
                      {item.scientific}
                    </span>
                  </Combobox.Item>
                )}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
      <Button type="submit" className="justify-self-start" disabled={!selected}>
        Submit
      </Button>
      {submitted && (
        <div role="status" className="rounded-md bg-muted p-3">
          <p className="text-sm font-medium">Sample form submission</p>
          <pre className="mt-2 overflow-auto text-sm">
            {JSON.stringify(submitted, null, 2)}
          </pre>
        </div>
      )}
    </form>
  );
}
