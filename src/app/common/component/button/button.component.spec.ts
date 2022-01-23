import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonComponentTest } from '@app/common/component/button/button.component.test';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent, ButtonComponentTest ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have label', () => {
    const testFixture = TestBed.createComponent(ButtonComponentTest);
    const de: DebugElement = testFixture.debugElement.query(
      By.css('button')
    );
    const el: Element = de.nativeElement;
    expect(el.textContent).toEqual('Test Label');
  });

});
