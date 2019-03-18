import { Component, OnInit } from '@angular/core';
import { BuzonService } from './buzon.service';
import { Router } from '@angular/router';
import { MailboxModel } from 'src/app/model/MailboxModel';
import { MatTableDataSource, TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-buzon',
  templateUrl: './buzon.component.html',
  styleUrls: ['./buzon.component.css'],
  providers: [BuzonService]
})
export class BuzonComponent implements OnInit {

  private mailboxs: Array<MailboxModel>;
  private dataSource;
  private isValid: boolean;
  private message: string;
  private mailBox: MailboxModel;
  displayedColumns: string[] = ['idMessage', 'nameClient', 'lastClient',
   'emailClient', 'affair', 'action'];
   positionOptions: TooltipPosition = 'above';

  constructor(private router: Router,
    private mailboxService: BuzonService) {
      this.mailBox = new MailboxModel();
      this.message = "No hay mensajes de sugerencias por el momento";
      this.isValid = false;
      this.dataSource = new MatTableDataSource(this.mailboxs);
     }

  ngOnInit() {
    this.loadMailbox();
  }

  public onClick(mailBox: MailboxModel) {
    this.mailBox = mailBox;
  }


  private loadMailbox(): void {
    this.mailboxService.getListMailbox().subscribe(
      res => {
        this.mailboxs = res;
        this.dataSource.data = this.mailboxs;
        if(this.mailboxs.length === 0) {
          this.isValid = true;
        }
      },
      (error: any) => (this.mailboxs = [],
        this.isValid = true)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  get getListMailbox() {
    return this.mailboxs;
  }

  get getDataSource() {
    return this.dataSource;
  }

  get getMessageInfo() {
    return this.message;
   }

   get getMailBox() {
    return this.mailBox;
   }

   get getValid() {
    return this.isValid;
   }

}
