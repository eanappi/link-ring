export const useLocationHash = () => {
  return window.location.hash.replace(/^#\//, "") || false
};
