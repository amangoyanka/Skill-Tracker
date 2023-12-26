import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullstackengListComponent } from './fullstackeng-list/fullstackeng-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateFullstackengComponent } from './create-fullstackeng/create-fullstackeng.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateFullstackengComponent } from './update-fullstackeng/update-fullstackeng.component';
import { FilterPipe } from './filter.pipe';
import { FullstackengDetailsComponent } from './fullstackeng-details/fullstackeng-details.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    FullstackengListComponent,
    CreateFullstackengComponent,
    UpdateFullstackengComponent,
    FilterPipe,
    FullstackengDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
