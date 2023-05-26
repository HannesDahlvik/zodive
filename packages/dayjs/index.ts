import dayjs from 'dayjs'
import en from 'dayjs/locale/en'
import isBetween from 'dayjs/plugin/isBetween'
import localeData from 'dayjs/plugin/localeData'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(isBetween)
dayjs.extend(localeData)
dayjs.extend(weekOfYear)
dayjs.locale({
    ...en,
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
})

export type Dayjs = dayjs.Dayjs

export default dayjs
