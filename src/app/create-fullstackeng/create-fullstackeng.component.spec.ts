import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFullstackengComponent } from './create-fullstackeng.component';

describe('CreateFullstackengComponent', () => {
  let component: CreateFullstackengComponent;
  let fixture: ComponentFixture<CreateFullstackengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFullstackengComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFullstackengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
