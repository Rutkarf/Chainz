import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakingOptionsComponent } from './staking-options.component';

describe('StakingOptionsComponent', () => {
  let component: StakingOptionsComponent;
  let fixture: ComponentFixture<StakingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakingOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
