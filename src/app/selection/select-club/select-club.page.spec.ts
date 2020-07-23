import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectClubPage } from './select-club.page';

describe('SelectClubPage', () => {
  let component: SelectClubPage;
  let fixture: ComponentFixture<SelectClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectClubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
