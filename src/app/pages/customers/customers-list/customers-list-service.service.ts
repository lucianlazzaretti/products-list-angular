import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CustomersListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { name: 'João', cpf: 54292933006, rg: 473173906, birth: '12/05/1990' , city: 'Constantina'},
      { name: 'Maria', cpf: 22001582030, rg: 309982595, birth: '10/04/1991' , city: 'Engenho Velho' },
      { name: 'José', cpf: 86464236032, rg: 426106891, birth: '02/03/1992'  , city: 'Toledo'},
      { name: 'Luis', cpf: 50609599020, rg: 472785916, birth: '09/02/1988' , city: 'Cascavel'},
      { name: 'Paulo', cpf: 63775842020, rg: 233788049, birth: '25/12/1950' , city: 'Foz do Iguaçu' },
      { name: 'Felipe', cpf: 41950683044, rg: 195488398, birth: '01/01/1955' , city: 'Foz do Iguaçu' },
      { name: 'Marcia', cpf: 16981000008, rg: 464099547, birth: '17/06/1989' , city: 'Foz do Iguaçu' },
      { name: 'Josefina', cpf: 74947225050, rg: 419902326, birth: '22/11/2001' , city: 'Foz do Iguaçu' },
      { name: 'Andrei', cpf: 85057276069, rg: 491276941, birth: '03/08/2012' , city: 'Foz do Iguaçu' },
      { name: 'Luan', cpf: 43113770025, rg: 191900801, birth: '19/05/1944' , city: 'Foz do Iguaçu' },
    ];
  }

  getColumns() {
    return {
      name: {
        title: 'Nome',
        type: 'string',
        filter: true,
        width: '20%',
      },
      cpf: {
        title: 'CPF',
        type: 'number',
        filter: true,
        width: '15%',
      },
      rg: {
        title: 'RG',
        type: 'number',
        filter: true,
        width: '15%',
      },
      birth: {
        title: 'Data de Nascimento',
        type: 'string',
        filter: true,
        width: '15%',
      },
      city: {
        title: 'Local de Nascimento',
        type: 'string',
        filter: true,
        width: '20%',
      },
    }
  };

}
