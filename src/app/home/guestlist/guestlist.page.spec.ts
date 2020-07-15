import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestlistPage } from './guestlist.page';

describe('GuestlistPage', () => {
  let component: GuestlistPage;
  let fixture: ComponentFixture<GuestlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
