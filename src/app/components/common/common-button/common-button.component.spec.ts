import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonButtonComponent } from './common-button.component';
import { Component } from '@angular/core';

describe('CommonButtonComponent', () => {
  let component: CommonButtonComponent;
  let fixture: ComponentFixture<CommonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the correct class for `primary`', () => {
    component.color = 'primary';
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList).toContain('bg-indigo-600');
    expect(buttonElement.classList).toContain('hover:bg-indigo-500');
  });

  it('should be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBeTrue();
    expect(buttonElement.classList).toContain('opacity-50');
    expect(buttonElement.classList).toContain('cursor-not-allowed');
  });

  it('should emit `clicked` event', () => {
    spyOn(component.clicked, 'emit');

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();

    expect(component.clicked.emit).toHaveBeenCalled();
  });

  it('should NOT emit clicked when disabled', () => {
    component.disabled = true;
    spyOn(component.clicked, 'emit');

    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();

    expect(component.clicked.emit).not.toHaveBeenCalled();
  });

  it('should NOT emit clicked when loading', () => {
    component.loading = true;
    spyOn(component.clicked, 'emit');

    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();

    expect(component.clicked.emit).not.toHaveBeenCalled();
  });

  it('should display a spinner when loading', () => {
    component.loading = true;
    fixture.detectChanges();

    const spinner = fixture.nativeElement.querySelector('span.animate-spin');
    expect(spinner).toBeTruthy();
  });
});
