import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernanceVotingComponent } from './governance-voting.component';

describe('GovernanceVotingComponent', () => {
  let component: GovernanceVotingComponent;
  let fixture: ComponentFixture<GovernanceVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernanceVotingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernanceVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
