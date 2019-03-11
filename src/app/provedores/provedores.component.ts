import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProviderModel } from 'src/app/model/ProviderModel';
import { ProvedoresService } from './provedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.css'],
  providers: [ProvedoresService]
})
export class ProvedoresComponent implements OnInit {

  private providers: Array<ProviderModel>;
  private displayedColumns: string[] = ['id', 'name', 'city', 'phone', 'nit', 'action'];
  private dataSource;

  constructor(private providerService: ProvedoresService,
    private router: Router) {
      sessionStorage.clear();
      this.dataSource = new MatTableDataSource(this.providers);
    }

  ngOnInit() {
    this.loadProviders();
  }

  private loadProviders(): void {
    this.providerService.getProvider().subscribe(
      res => {
        this.providers = res;
        this.dataSource.data = this.providers;
      },
      (error: any) => (this.providers = [])
    );
  }

  public edit(provider: ProviderModel): void {
    sessionStorage.setItem('provider', JSON.stringify(provider));
    this.router.navigate(['/createProvedores']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get providerList() {return this.providers; }
  get dataSourceList() {return this.dataSource; }
  get getDisplayedColumns() {return this.displayedColumns; }
}
