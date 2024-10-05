import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairsComponent } from './chairs.component';

describe('ChairsComponent', () => {
  let component: ChairsComponent;
  let fixture: ComponentFixture<ChairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
