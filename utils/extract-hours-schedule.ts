import _ from "lodash"

export class ExtractHoursToday {

  #hours:[]
  #open: any
  #close: any
  constructor(hours: any) {
    this.#hours = hours   
  }

  get open() {
    return this.#open
  }

  get close() {
    return this.#close
  }

  hourOpen() {
    const hours = this.#hours.map((item) => item).reduce((item) => item)
    const data = _.map(hours, 'open');
   
    data.forEach(item => {     
      if (!_.isEmpty(item) && !_.isUndefined(item)) {
        if(!this.#open)
          this.#open = item
      }
    })
  }

  hourClose() {
    const hours = this.#hours.map((item) => item).reduce((item) => item)
    const data = _.map(hours, 'close');
    data.forEach(item => {
      if (!_.isEmpty(item) && !_.isUndefined(item)) {
        this.#close = item
      }
    })
  }

  hourLunchTime() {
    const hours = this.#hours.map((item) => item).reduce((item) => item)
    const dataClose = _.map(hours, 'close');
    dataClose.forEach(item => {
      if (!_.isEmpty(item) && !_.isUndefined(item)) {
        if (!this.#close)
          this.#close = item      
      }
    })

    const dataOpen = _.map(hours, 'open');
    dataOpen.forEach(item => {
      if (!_.isEmpty(item) && !_.isUndefined(item)) {
        this.#open = item      
      }
    })
  }
}