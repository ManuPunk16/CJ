import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActasComiteComponent } from './actas-comite.component';

describe('ActasComiteComponent', () => {
  let component: ActasComiteComponent;
  let fixture: ComponentFixture<ActasComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActasComiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActasComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
