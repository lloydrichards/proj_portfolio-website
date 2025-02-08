export class FSReadDirError {
  readonly _tag = "FSReadDirError";
  constructor(readonly path: string) {}
}

export class ContentNotFoundError {
  readonly _tag = "ContentNotFoundError";
  constructor(readonly slug: string) {}
}

export class ImportError {
  _tag = "ImportError";
  constructor(readonly slug: unknown) {}
}
