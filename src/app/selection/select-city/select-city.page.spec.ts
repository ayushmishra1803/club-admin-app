import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectCityPage } from './select-city.page';

describe('SelectCityPage', () => {
  let component: SelectCityPage;
  let fixture: ComponentFixture<SelectCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
