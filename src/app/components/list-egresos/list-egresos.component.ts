import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpService } from '../../core/services/http.service'

@Component({
  selector: 'app-list-egresos',
  templateUrl: './list-egresos.component.html',
  styleUrls: ['./list-egresos.component.scss']
})
export class ListEgresosComponent implements OnInit {

  egresos!: any[];
  totalEgresos = 0;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get<any>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions', true)
      .subscribe(data => {
        const transactions = data.data;
        this.egresos = transactions.filter((transaction: any) => transaction.type === 'topup');
        this.egresos.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
        for (const engreso of this.egresos) {
          this.totalEgresos += engreso.amount;
        }
      });
      

  }
  

}
