export const sleep = (ms: number): Promise<boolean> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
