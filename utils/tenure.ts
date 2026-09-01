/** 以指定日期換算年資，回傳「x 年 x 個月」 */
export function formatTenure(start: string, end?: string, now: Date = new Date()) {
  const from = new Date(start)
  const to = end ? new Date(end) : now

  let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth())
  if (to.getDate() < from.getDate()) months -= 1
  months = Math.max(months, 0)

  const years = Math.floor(months / 12)
  const rest = months % 12

  if (years && rest) return `${years} 年 ${rest} 個月`
  if (years) return `${years} 年`
  return `${rest} 個月`
}
