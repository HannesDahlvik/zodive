import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData)

export type Dayjs = dayjs.Dayjs

export default dayjs
