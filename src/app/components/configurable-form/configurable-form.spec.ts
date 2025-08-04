import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableForm } from './configurable-form';

describe('ConfigurableForm', () => {
  let component: ConfigurableForm;
  let fixture: ComponentFixture<ConfigurableForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurableForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
