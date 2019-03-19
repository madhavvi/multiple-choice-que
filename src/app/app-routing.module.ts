import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TechnologyComponent } from './technology/technology.component';
import { QuestionComponent } from './questions/question.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [
  {
    path: 'technology',
    // loadChildren: './admin/admin.module#AdminModule',
    component: TechnologyComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'questions/:tech', 
    component: QuestionComponent
  },
  {
    path: '',
    component: TechnologyComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
