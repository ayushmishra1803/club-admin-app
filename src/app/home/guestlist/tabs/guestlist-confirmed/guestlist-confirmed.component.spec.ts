import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestlistConfirmedComponent } from './guestlist-confirmed.component';

describe('GuestlistConfirmedComponent', () => {
  let component: GuestlistConfirmedComponent;
  let fixture: ComponentFixture<GuestlistConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestlistConfirmedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestlistConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
