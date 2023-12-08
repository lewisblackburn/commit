export const getCommitColour = (commits: number, maxCommits: number): string => {
  const percentage = (commits / maxCommits) * 100;
  const green = Math.round(percentage * 2.55);
  return `rgb(0, ${green}, 0)`;
};
