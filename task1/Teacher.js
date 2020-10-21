
 class Teacher extends Student {
            constructor(id, name, Email, mobile_number, Salary, Subjects) {
                super(id, name, Email, mobile_number);
                this.Salary = Number(Salary);
                this.Subjects = Subjects.split(',') ;
                }
                

                }                          }