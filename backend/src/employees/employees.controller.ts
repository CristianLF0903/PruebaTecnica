import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './DTO/create-employee.dto';
import { UpdateEmployeeDto } from './DTO/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  getAllEmployees() {
    return this.employeesService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.getEmployeeById(id);
  }

  @Post()
  createEmployee(@Body() body: CreateEmployeeDto) {
    return this.employeesService.createEmployee(body);
  }

  @Put(':id')
  updateEmployee(@Body() body: UpdateEmployeeDto, @Param('id', ParseIntPipe) id: number) {

    return this.employeesService.updateEmployee(id, body);
  }

  @Delete(':id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.deleteEmployee(id);
  }
}
