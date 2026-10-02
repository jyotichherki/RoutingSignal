import { Component,signal,effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-productd-comp11',
  styleUrl: './productd-comp11.css',
  templateUrl: './productd-comp11.html',
})
export class ProductdComp11 {
  search = signal(' ');
  productcomp11 = signal<string[]>(['phone','laptop','tablet','monitor','keyboard'])
  filtered = signal<string[]>(this.productcomp11())

  constructor(
    private Router:ActivatedRoute,
    private router:Router
  ){

    //URL TO SIGNAL
    this.Router.queryParamMap.subscribe(params =>{
      this.search.set(params.get('search') || '');
    })
    //signal to UI update
    effect(()=>{
      const value = this.search().toLowerCase();
      this.filtered.set(
        this.productcomp11().filter( p =>
          p.toLowerCase().includes(value)
        )
      )
    })
  }
  updateURL(){
    this.router.navigate([],{
      queryParams: {search:this.search()}
    })
  }
}
