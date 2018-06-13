import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

// export const coursesRoutes: Routes = [
//   {
//     path: "",
//     component: HomeComponent
//
//   },
//   {
//     path: ':id',
//     component: CourseComponent,
//     resolve: {
//       course: CourseResolver
//     }
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
    // RouterModule.forChild(coursesRoutes),
    // StoreModule.forFeature('courses', coursesReducer),
    // EffectsModule.forFeature([CourseEffects]),
    // StoreModule.forFeature('lessons', lessonsReducer)
  ],
  declarations: [],
  exports: [],
  // providers: [
  //   CoursesService,
  //   CourseResolver
  // ]
})

export class PostsModule {}
