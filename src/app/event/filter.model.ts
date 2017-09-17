export class Filter {
  sDate: string;
  eDate: string;
  constructor(sDate: string = '',
              eDate: string = '') {

                  
    let d = new Date();
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1;
    let curr_year = d.getFullYear();
    
    this.sDate = (curr_year + "-0" + curr_month + "-" + curr_date);    
    this.eDate = ""              
  }
}