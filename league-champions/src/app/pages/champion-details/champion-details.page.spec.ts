import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionDetailsPage } from './champion-details.page';

describe('ChampionDetailsPage', () => {
  let component: ChampionDetailsPage;
  let fixture: ComponentFixture<ChampionDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
