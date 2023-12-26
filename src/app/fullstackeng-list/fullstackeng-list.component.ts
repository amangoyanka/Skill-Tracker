import { Component } from '@angular/core';
import { Fullstackeng } from '../fullstackeng'
import { FullstackengService } from '../fullstackeng.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fullstackeng-list',
  templateUrl: './fullstackeng-list.component.html',
  styleUrl: './fullstackeng-list.component.css'
})
export class FullstackengListComponent {
  searchtext:any;
  fullstackengs: Fullstackeng[] = [];
constructor(private fullstackengService: FullstackengService,
  private router: Router) { }
ngOnInit(): void{
  this.getFullstackengs();
}

private getFullstackengs(){
  this.fullstackengService.getFullstackengsList().subscribe(data=>{
    this.fullstackengs=data;
  });
}

fullstackengDetails(id: String){
  this.router.navigate(['fullstackeng-details', id]);
}


updateFullstackeng(id: String){
this.router.navigate(['update-fullstackeng',id]);
}

deleteFullstackeng(id: String){
  this.fullstackengService.deleteFullstackeng(id).subscribe( data => {
    console.log(data);
    this.getFullstackengs();
  })
}



}