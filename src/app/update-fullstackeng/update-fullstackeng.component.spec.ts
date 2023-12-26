import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFullstackengComponent } from './update-fullstackeng.component';

describe('UpdateFullstackengComponent', () => {
  let component: UpdateFullstackengComponent;
  let fixture: ComponentFixture<UpdateFullstackengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateFullstackengComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFullstackengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
