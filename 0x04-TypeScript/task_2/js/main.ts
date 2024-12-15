interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  console.log(createEmployee(200));
  console.log(createEmployee(1000));
  console.log(createEmployee("$500"));
  
  
  function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  const teacher = createEmployee(200);
  const director = createEmployee(1000);
  
  executeWork(teacher);
  executeWork(director);
  
  
  type Subjects = "Math" | "History";
  
  function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else {
      return "Teaching History";
    }
  }
  
  console.log(teachClass("Math"));
  console.log(teachClass("History"));