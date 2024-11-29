import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteElementoComponent } from './componente-elemento.component';

describe('ComponenteElementoComponent', () => {
  let component: ComponenteElementoComponent;
  let fixture: ComponentFixture<ComponenteElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteElementoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
