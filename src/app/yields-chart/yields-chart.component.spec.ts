import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldsChartComponent } from './yields-chart.component';

describe('YieldsChartComponent', () => {
  let component: YieldsChartComponent;
  let fixture: ComponentFixture<YieldsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
