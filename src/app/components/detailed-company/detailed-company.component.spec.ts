import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCompanyComponent } from './detailed-company.component';

describe('DetailedCompanyComponent', () => {
  let component: DetailedCompanyComponent;
  let fixture: ComponentFixture<DetailedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
