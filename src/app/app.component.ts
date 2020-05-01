import { Component } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'johnsapp';

  completecount:number = 0;
  incompletecount:number = 0;

  icount:number = 0;

  taskArray:Task[] = [
    {taskName: "Feed Nellie", taskDescription: "Use the open bag of food", daysToComplete: 0, completed: false},
    {taskName: "Fix Drywall", taskDescription: "Need to get the tools out as well.", daysToComplete: 30, completed: false},
    {taskName: "Grocery Shop", taskDescription: "List is on the table", daysToComplete: 3, completed: false},
  ];

  filterArray:Task[] = [];


  tC:number = 0;

  tI:number = 0;



  countCI = function(taskArray:Task[]):void{
    let totalComp:number = 0;
    let totalIncomp:number = 0;

    for(let t of taskArray){
      if(t.completed === true){
        totalComp++;
      }
      else{
        totalIncomp++;
      }
    }

    this.tC = totalComp;
    this.tI = totalIncomp;
  }


  //This is all the code for the task section
  newTask:string = "";
  newTaskDesc:string = "";
  newDaysToComplete:number = 0;
  newCompleted = false;

  showForm:boolean = false;


  uTaskName:string = "";
  uTaskDesc:string = "";
  uDaysToComplete:number = 0;
  uCompleted = false;

  index:number = 0;

  


  showMain:boolean = true;


  addTask = function(ev:Event){
    this.taskArray.push({taskName:this.newTask, taskDescription:this.newTaskDesc, daysToComplete:this.newDaysToComplete, completed:this.newCompleted});
  }
  
  //completed = false;
  completeTask = function(ev:Event){
    this.completecount++;
    this.incompletecount--;
    
    return true;
  }

  incompleteTask = function(ev:Event){
    this.incompletecount++;
    this.completecount--;
    return false;
  }

  incompleteForm = function(){
    return this.newTask == "" || this.newTaskDesc == "" || this.daysToComplete == "";
  }

  deleteTask = function(task:Task){
    var index = this.taskArray.indexOf(task);
    this.taskArray.splice(index, 1);
  }

  doit:boolean = true;

  updateTask = function(ev:Event){
    this.taskArray[this.index].taskName = this.uTaskName;
    this.taskArray[this.index].taskDescription = this.uTaskDesc;
    this.taskArray[this.index].daysToComplete = this.uDaysToComplete;
    
    return this.showForm = false;
 }

  //Shows the update Form. 
  showUpdateForm = function(t:Task){
    this.index = this.taskArray.indexOf(t);
    return this.showForm = true;
  }

  
  activeSearch = function(){

    if(this.searchTerm == ""){
      this.showMain = true;
    }
    else{
      this.showMain = false

    }

    
  }

  searchTerm:string = "";
  showFilter:boolean = false;
  

  searchList = function(taskArray:Task[]):void{
    
    this.clearFilterArray();
    
    for(let t of taskArray){  
      if(t.taskDescription.includes(this.searchTerm)){
        this.filterArray.push({taskName:t.taskName, taskDescription:t.taskDescription, daysToComplete:t.daysToComplete, completed:t.completed})
      }
      // if(this.searchTerm != ""){
        
      // }
      
    }
    this.showFilter = true;
  }

  clearFilterArray = function():void{
    for(let t of this.filterArray){
      this.filterArray.splice(t.index, 1);
    }
  }

  backToNormalView = function():void{
    this.clearFilterArray();
    this.showFilter = false;
  }


}
