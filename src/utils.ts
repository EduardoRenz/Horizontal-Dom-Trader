import { quintOut } from "svelte/easing"
import { crossfade } from "svelte/transition"

export interface IColorRanges {
  min: number
  max: number
  color: string
  text_color: string
}
interface IColorConfig {
  offer: Boolean
  agression: Boolean
  ranges: Array<IColorRanges>
}
/** Return HH:MM:SS date from date object **/
export const getFormatedTime = (date: Date) =>
  date &&
  ` ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getUTCSeconds()).padStart(
    2,
    "0"
  )} `
/** Checks if date is lower than other date **/
export const dateIsLowerThan = (main_date: Date, date_to_compare: Date) => main_date < date_to_compare
/** Get/Generate a id for each price **/

// get difference in mm:ss between two dates
export function minutesAndSecondsDiff(date1, date2) {
  let diff = date2.getTime() - date1.getTime()
  if (diff > 0) return "00:00"

  let minutes = Math.floor(diff / (1000 * 60))
  let seconds = Math.floor(diff / 1000) - minutes * 60
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

export const getPriceID = (price: Number): string => "price_" + price.toFixed(1).replace(".", "_")

export const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 200),
  fallback(node, params) {
    const style = getComputedStyle(node)
    const transform = style.transform === "none" ? "" : style.transform

    return {
      duration: 150,
      easing: quintOut,
      css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
    }
  },
})

export const getQuantityColor = (quantity: Number, ranges: IColorRanges[]): IColorRanges => {
  let found = ranges?.find((color) => quantity >= color.min && quantity <= color.max)
  return found || null
}

export const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    // Add object to list for given key's value
    acc[key].push(obj)
    return acc
  }, {})
}
