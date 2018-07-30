import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingsChartComponent } from './holdings-chart.component';

describe('HoldingsChartComponent', () => {
  let component: HoldingsChartComponent;
  let fixture: ComponentFixture<HoldingsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
