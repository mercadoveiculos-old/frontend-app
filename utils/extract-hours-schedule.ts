export default class ScheduleExtractHours {

  #hours
  #hourOpen: any
  #hourClose: any
  constructor(hours: any) {
    this.#hours = hours
  }

  make() {

    const mapHours = this.#hours
      .map((element: any) => element[1] ?? [])
      .reduce((element: any) => element)

    Array(mapHours).map((hour: any) => {

      const hour1 = hour[1] ?? null

      if(hour1) {
        this.#hourOpen = hour1.open
        this.#hourClose = hour1.close
      }

      const hour2 = hour[2] ?? null

      if(hour2) {
        if(!this.#hourOpen) 
          this.#hourOpen = hour2.open
        this.#hourClose = hour2.close 
      }      
    })

  }

  get hourOpen() {
    return this.#hourOpen
  }

  get hourClose() {
    return this.#hourClose
  }

}