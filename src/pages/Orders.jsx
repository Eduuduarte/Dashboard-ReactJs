import React from 'react';
import { Grid, GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

class Orders extends React.Component {
  constructor () {
    super(...arguments);
    this.toolbar=['PdfExport', 'ExcelExport'];
    this.toolbarClick = (args) => {
      if(this.grid ) {
        if(args.item.id === 'grid_pdfexport'){
          this.grid.pdfExport();
        }
        if(args.item.id === 'grid_excelexport'){
          this.grid.excelExport();
        }
      }
    }
  }
render(){
  this.toolbarClick = this.toolbarClick.bind(this);
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Ordens de serviços" />
      <GridComponent
        id="grid"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowPdfExport={true}
        allowExcelExport={true}
        toolbar={this.toolbar}
        toolbarClick={this.toolbarClick}
        ref={g=>this.grid = g}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar]}/>
      </GridComponent>
    </div>
  )
    }
}

export default Orders;