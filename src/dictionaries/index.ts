export const getDictionary = async (locale: string) => {
  switch (locale) {
    case "th":
      return (await import("./th.json")).default;
    case "en":
    default:
      return (await import("./en.json")).default;
  }
};
