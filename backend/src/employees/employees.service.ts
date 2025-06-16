import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './DTO/create-employee.dto';
import { PrismaService } from 'src/prisma.service';
import { create } from 'domain';

@Injectable()
export class EmployeesService {
  
  constructor(private prisma: PrismaService) {}

  getAllEmployees() {
    return this.prisma.employees.findMany();
  }

  getEmployeeById(id: number) {
    const result = this.prisma.employees.findUnique({where: {id}}).then((result) => {;
      console.log(result)
      if (!result){
        return new NotFoundException(`Employee with id ${id} not found`);
      }

      return result;
    });

    return result
  }

  createEmployee(createEmployee: CreateEmployeeDto) {
    return this.prisma.employees.create({data: createEmployee});
  }

  updateEmployee(id: number, updateEmployee: Partial<CreateEmployeeDto>) {
    return this.prisma.employees.update({
      where: {id},
      data: updateEmployee,
    });
  }

  deleteEmployee(id: number) {
    return this.prisma.employees.delete({where: {id}});
  }
}
