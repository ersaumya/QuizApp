import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule,HeaderComponent]
})
export class SharedModule {}
