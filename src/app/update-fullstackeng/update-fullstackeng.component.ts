import { Component,OnInit } from '@angular/core';
import { Fullstackeng } from '../fullstackeng';
import { ActivatedRoute, Router } from '@angular/router';
import { FullstackengService } from '../fullstackeng.service';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-fullstackeng',
  templateUrl: './update-fullstackeng.component.html',
  styleUrl: './update-fullstackeng.component.css'
})
// const headers = new HttpHeaders({
//   'request-id': 'your-request-id-value'
// });
export class UpdateFullstackengComponent {
  submitForm= new FormGroup({
    // aid:new FormControl('',[Validators.required]),
    // aname:new FormControl('',[Validators.required]),
    // mNumber:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),
    // Validators.maxLength(10)]),
    // email:new FormControl('',[Validators.required,Validators.email]),
    hcj:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    angular:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    react:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    spring:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    restful:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    hibernet:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    git:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    docker:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    jenkins:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    aws:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    spoken:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    communication:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)]),
    aptitude:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(0),Validators.max(20)])


  })
  
  id!: String;
  fullstackeng: Fullstackeng = new Fullstackeng();
  constructor(private fullstackengService: FullstackengService,
    private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.fullstackengService.getFullstackengById(this.id).subscribe(data => {
        this.fullstackeng = data;
      }, error => console.log(error));
    }

  onSubmit(){
    this.fullstackengService.updateFullstackeng(this.id, this.fullstackeng).subscribe( data =>{
      this.goToFullstackengList();
    }
    , error => console.log(error));
  }
  // get aid()
  // {
  //   return this.submitForm.get('aid');
  // }
  // get aname()
  // {
  //   return this.submitForm.get('aname');
  // }
  // get mNumber()
  // {
  //   return this.submitForm.get('mNumber');
  // }
  // get email()
  // {
  //   return this.submitForm.get('email');
  // }
  get hcj(){
    return this.submitForm.get('hcj');
  }
  get angular(){
    return this.submitForm.get('angular');
  }
  get react(){
    return this.submitForm.get('react');
  }
  get spring(){
    return this.submitForm.get('spring');
  }
  get restful(){
    return this.submitForm.get('restful');
  }
  get hibernet(){
    return this.submitForm.get('hibernet');
  }
  get git(){
    return this.submitForm.get('git');
  }
  get docker(){
    return this.submitForm.get('docker');
  }
  get jenkins(){
    return this.submitForm.get('jenkins');
  }
  get aws(){
    return this.submitForm.get('aws');
  }
  get spoken(){
    return this.submitForm.get('spoken');
  }
  get communication(){
    return this.submitForm.get('communication');
  }
  get aptitude(){
    return this.submitForm.get('aptitude');
  }
  goToFullstackengList(){
    this.router.navigate(['/fullstackengs']);
  }
}
