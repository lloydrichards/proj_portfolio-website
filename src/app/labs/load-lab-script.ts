export function createLabScriptLoader<T>(
  src: string,
  getLibrary: () => T | undefined,
) {
  let request: Promise<T> | undefined;

  return () => {
    request ??= new Promise<T>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      function fail() {
        script.remove();
        reject(new Error(`Could not load ${src}`));
      }
      script.onload = () => {
        const library = getLibrary();
        if (library) resolve(library);
        else fail();
      };
      script.onerror = fail;
      document.head.append(script);
    }).catch((error: unknown) => {
      request = undefined;
      throw error;
    });
    return request;
  };
}
