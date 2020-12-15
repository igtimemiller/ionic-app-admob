import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalenPage } from './modalen.page';

describe('ModalenPage', () => {
  let component: ModalenPage;
  let fixture: ComponentFixture<ModalenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
