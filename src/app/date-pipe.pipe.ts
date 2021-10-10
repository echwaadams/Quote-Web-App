import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any): number {
    const today:Date = new Date();
    const todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    let dateDifference = Math.abs(todayWithNoTime - value)
    const secondsInADay = 86400;

    var dateDifferenceSeconds=dateDifference*0.01;
    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if(dateCounter >= 1 && todayWithNoTime > value){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
