export function ConvertMoney(money) {
  return money?.toString()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
