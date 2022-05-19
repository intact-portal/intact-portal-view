import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeDescriptionComponent} from './home-description/home-description.component';
import {TileMenuComponent} from './tile-menu/tile-menu.component';
import {SearchComponent} from './search/search.component';
import {HomeDashboardComponent} from './home-dashboard.component';
import {HomeDashboardRoutingModule} from './home-dashboard-routing.module';
import {NewsletterSubscriptionComponent} from './newsletter-subscription/newsletter-subscription.component';
import {TwitterDisplayComponent} from './twitter-display/twitter-display.component';
import {FeaturedDatasetComponent} from './featured-dataset/featured-dataset.component';
import {NewsComponent} from './news/news.component';
import {DatasetArchiveComponent} from './featured-dataset/dataset-archive/dataset-archive.component';
import {AdvancedSearchComponent} from './advanced-search/advanced-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {QueryBuilderModule} from 'angular2-query-builder';
import {BatchSearchComponent} from './batch-search/batch-search.component';
import {ArchwizardModule} from 'angular-archwizard';
import {KeyvaluemapPipe} from './shared/keyvaluemap.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {DatasetByYearComponent} from './featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component';
import {ProgressSpinnerModule} from '../layout/loading-indicators/progress-spinner/progress-spinner.module';
import {ComponentsModule} from '../shared/components/components.module';
import {MIQLPipe} from './advanced-search/MIQL.pipe';
import {ColorMIQLPipe} from './advanced-search/colorMIQL.pipe';
import {MarkdownModule} from '../navigation/documentation/shared/markdown/markdown.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { RangeInputComponent } from './advanced-search/range-input/range-input.component';
import { DateRangeComponent } from './advanced-search/date-range/date-range.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BooleanInputComponent } from './advanced-search/boolean-input/boolean-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QueryBuilderModule,
    HomeDashboardRoutingModule,
    FileUploadModule,
    ArchwizardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    ProgressSpinnerModule,
    ComponentsModule,
    MarkdownModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  exports: [
    KeyvaluemapPipe
  ],
  declarations: [
    HomeDashboardComponent,
    HomeDescriptionComponent,
    SearchComponent,
    TileMenuComponent,
    NewsletterSubscriptionComponent,
    TwitterDisplayComponent,
    FeaturedDatasetComponent,
    NewsComponent,
    DatasetArchiveComponent,
    AdvancedSearchComponent,
    BatchSearchComponent,
    KeyvaluemapPipe,
    DatasetByYearComponent,
    MIQLPipe,
    ColorMIQLPipe,
    RangeInputComponent,
    DateRangeComponent,
    BooleanInputComponent
  ]
})
export class HomeDashboardModule {
}
