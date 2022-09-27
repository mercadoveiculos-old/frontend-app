export default class ScheduleExtractHours {

  #hours
  #hourOpen: any
  #hourClose: any
  #hourOne: number
  #hourTwo: number
  #lunch: boolean = false
  constructor(hours: any) {
    this.#hours = hours
    this.#hourOne = 1
    this.#hourTwo = 2
  }

  make(): void {
    this._mapHours()
  }

  set hourOne(value: number) {
    this.#hourOne = value
  } 

  set hourTwo(value: number) {
    this.#hourOne = value
  } 

  get hourOpen() {
    return this.#hourOpen
  }

  get hourClose() {
    return this.#hourClose
  }

  get lunchTime() {
    this.#lunch = true
    return this
  }

  _mapHours(): void {

    const mapHours = this.#hours
      .map((element: any) => element[1] ?? [])
      .reduce((element: any) => element)

    Array(mapHours).map((hour: any) => {

      const hour1 = hour[this.#hourOne] ?? null
      if(hour1) {
      
        this.#hourOpen = hour1.open
        this.#hourClose = hour1.close  
        if (!this.#lunch) {
          this.#hourOpen = hour1.open 
        }
     
      }

      const hour2 = hour[this.#hourTwo] ?? null
      if(hour2) {
        this.#hourOpen = hour2.open
        
        if (!this.#lunch) {   
          this.#hourOpen = hour1.open        
          this.#hourClose = hour2.close 
        }
      }      
    })

  }

}