import { Component } from '@angular/core';
import { Fullstackeng } from '../fullstackeng';
import { ActivatedRoute } from '@angular/router';
import { FullstackengService } from '../fullstackeng.service';

@Component({
  selector: 'app-fullstackeng-details',
  templateUrl: './fullstackeng-details.component.html',
  styleUrl: './fullstackeng-details.component.css'
})
export class FullstackengDetailsComponent {

  id!: String;
  fullstackeng!: Fullstackeng;
  constructor(private route: ActivatedRoute, private fullstackengService: FullstackengService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fullstackeng = new Fullstackeng();
    this.fullstackengService.getFullstackengById(this.id).subscribe( data => {
      this.fullstackeng = data;
    });
  }
}
