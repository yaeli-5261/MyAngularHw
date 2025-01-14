// // import { Component } from '@angular/core';
// // import { enumCourses } from '../../models/enumCourses';

// // @Component({
// //   selector: 'app-courses-list',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './courses-list.component.html',
// //   styleUrl: './courses-list.component.css'
// // })

// // export class CoursesListComponent {



// // }
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {Component} from '@angular/core';
// import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import { enumCourses } from '../../models/enumCourses';

// /**
//  * Food data with nested structure.
//  * Each node has a name and an optional list of children.
//  */
// // interface FoodNode {
// //   name: string;
// //   children?: FoodNode[];
// // }

// // const TREE_DATA: FoodNode[] = [
// //   {
// //     name: 'Fruit',
// //     children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
// //   },
// //   {
// //     name: 'Vegetables',
// //     children: [
// //       {
// //         name: 'Green',
// //         children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
// //       },
// //       {
// //         name: 'Orange',
// //         children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
// //       },
// //     ],
// //   },
// // ];

// interface SubjectNode {
//   name: string;
// }
// interface CourseNode {
//   IdCourse: Number;
//   NameCourse: string;
//   SubjectCourse: enumCourses;
//   Semester: number;
//   Syllabus: SubjectNode[];
// }


// const COURSE_DATA: CourseNode[] = [

//   {
//     IdCourse: 1,
//     NameCourse: 'C',
//     SubjectCourse: enumCourses.C,
//     Semester: 7,
//     Syllabus: [
//       { name: 'Introduction to C' },
//       { name: 'Learning ctor' },
//       { name: 'Writing' },
//       { name: 'Reading' }
//     ]
//   },
//   {
//     IdCourse: 2,
//     NameCourse: 'LLM',
//     SubjectCourse: enumCourses.llm,
//     Semester: 7,
//     Syllabus: [
//       { name: 'Introduction to llm' },
//       { name: 'Learning gpt' },
//       { name: 'Writing' },
//       { name: 'Reading' }
//     ]
//   },
//   {
//     IdCourse: 3,
//     NameCourse: 'Phtyon',
//     SubjectCourse: enumCourses.phtyon,
//     Semester: 7,
//     Syllabus: [
//       { name: 'Introduction to Phtyon' },
//       { name: 'Learning hang Person' },
//       { name: 'Writing' },
//       { name: 'Reading' }
//     ]
//   },
// ];
// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// /** Flat node with expandable and level information */
// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//   level: number;
// }

// /**
//  * @title Tree with flat nodes
//  */
// @Component({
//   selector: 'tree-flat-overview-example',
//   templateUrl: './courses-list.component.html',
//   standalone: true,
//   imports: [MatTreeModule, MatButtonModule, MatIconModule],
// })
// export class TreeFlatOverviewExample {
//   private _transformer = (node: CourseNode, level: number) => {
//     return {
//       expandable: !!node.IdCourse && node.Syllabus.length > 0,
//       name: node.NameCourse,
//       level: level,
//     };
//   };

//   treeControl = new FlatTreeControl<ExampleFlatNode>(
//     node => node.level,
//     node => node.expandable,
//   );

//   treeFlattener = new MatTreeFlattener(
//     this._transformer,
//     node => node.level,
//     node => node.expandable,
//     node => node.children,
//   );

//   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

//   constructor() {
//     this.dataSource.data = COURSE_DATA;
//   }

//   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
// }
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, ViewChildren} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
  active? : boolean;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Math',
    children: [{ name: 'Analize' }, { name: 'Graph' }, { name: 'X/Y' }],
    active : true
    // active : TREE_DATA[0].children?.length>2?true:false
  },
  {
    name: 'Hi-Tec',
    children: [
      {
        name: 'C#',
        children: [{ name: 'C#-mahat' }, { name: 'C#' }],
        active: false 
      },
    ],
    active: true
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'tree-flat-overview-example',
  templateUrl: './courses-list.component.html',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
})
export class CoursesListComponent {
  active = false;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
