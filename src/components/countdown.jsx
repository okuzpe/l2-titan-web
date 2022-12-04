import React, { useEffect, useState } from 'react'
import MomentTimezone from 'moment-timezone'

const INITIAL_DATE = '2022-09-12 15:30'
const TIME_ZONE = 'Europe/Madrid'
const targetTime = MomentTimezone(INITIAL_DATE).tz(TIME_ZONE)

const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(MomentTimezone().tz(TIME_ZONE))

  const timeBetween = MomentTimezone(targetTime.diff(currentTime))
  const seconds = timeBetween.seconds()
  const minutes = timeBetween.minutes()
  const hours = timeBetween.hours()
  const days = timeBetween.days()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(MomentTimezone().tz(TIME_ZONE))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='counter '>
      <h2 className='mx-1 is-size-1 is-uppercase has-text-weight-bold'>Server Start in</h2>
      <div className='is-flex is-align-content-space-between '>
        <button className='button mx-1 is-large is-rounded has-text-weight-bold'>{days}d </button>
        <button className='button mx-1 is-large is-rounded has-text-weight-bold'>{hours}h</button>
        <button className='button mx-1 is-large is-rounded has-text-weight-bold'>{minutes}m</button>
        <button className='button mx-1 is-large is-rounded has-text-weight-bold'>{seconds}s</button>
      </div>
    </div>
  )
}
export default Countdown
