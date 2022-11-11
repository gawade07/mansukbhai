import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhoneComponent } from './ohone.component';

describe('OhoneComponent', () => {
  let component: OhoneComponent;
  let fixture: ComponentFixture<OhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
