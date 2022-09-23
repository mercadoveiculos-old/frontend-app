export function startTimer(duration: number): void {
  let timer: number = duration
  let minutes, seconds
  let display
  setInterval(() => {
    const timerDevider: string = String(timer / 60)
    const timerModule: string = String(timer % 60)
    minutes = parseInt(timerDevider, 10)
    seconds = parseInt(timerModule, 10)
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    display = `${minutes}:${seconds}`
    if (--timer < 0) {
      timer = duration
    }
    return display
  }, 1000)
}
