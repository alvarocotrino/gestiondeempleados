// src/app/models/empleado.ts
export class Empleado{

  
  _id: string;      // Coincide con el '_id' enviado por tu backend
  name: string;     // Coincide con el 'name' enviado por tu backend
  position: string; // Coincide con el 'position' enviado por tu backend
  office: string;   // Coincide con el 'office' enviado por tu backend
  salary: number;   // ¡Coincide con el 'salary' enviado por tu backend (string)!

constructor (_id="" , name="", position="", office="", salary= 0){ 
    
    this._id = _id;
    this.name = name;
    this.position = position;
    this.office = office;
    this.salary = salary;
    
    }
  }