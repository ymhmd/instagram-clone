export const usePrettifyUserHandle = () => {
  const prettifyUserHandle = (handle?: string) => {
    return `@${handle}`;
  };

  return {prettifyUserHandle};
};
