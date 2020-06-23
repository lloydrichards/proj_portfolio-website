export const randomRecycling = (addItem: (pickedItem: string) => void) => (
  possibleRoutes: Array<string>
) => {
  const randomNumber = Math.floor(Math.random() * possibleRoutes.length);
  addItem(possibleRoutes[randomNumber]);
};
