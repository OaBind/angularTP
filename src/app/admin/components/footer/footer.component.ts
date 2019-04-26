import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.style.scss']
})

export class FooterComponent implements OnChanges, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked{
  isNameDisplayed = true;
  firstname = 'Corentin';
  lastname = 'Martinez';
  users = [];

  constructor(){
    this.users.push({
      firstname: 'Toto',
      lastname: 'TotoName'
    });
    this.users.push({
      firstname: 'Tata',
      lastname: 'TataName'
    });
    this.users.push({
      firstname: 'Titi',
      lastname: 'TitiName'
    });
  }

  isFirstNameToto(value: string): boolean {
    return (value === 'Toto') ? true : false;
  }

  getLastName(): string {
    return ""
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
