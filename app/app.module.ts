import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    imports: [BrowserModule, FormsModule, Ng2TableModule, PaginationModule, CommonModule],
    declarations: [AppComponent, HighlightDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }