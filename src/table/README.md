# Table
A Table component which supports sorting, multiple selection and auto-sizing.

Implemented on top of [https://github.com/facebook/fixed-data-table](https://github.com/facebook/fixed-data-table)

## Props

| Name | Type | Default | Description |
|------|:----:|:-------:|-------------|
| **height** | <code>Number</code> | <code>400</code> | *optional*. the desired height of the table |
| **width** | <code>Number</code> | <code>400</code> | *optional*. the desired width of the table |
| **autoSize** | <code>Boolean</code> |  | *optional*. if true, the table will fit the container if width and height |
| **autoSizeColumns** | <code>Boolean</code> |  | *optional*. if true, the columns will split evenly the width, avoiding horizontal scrollbars |
| **rowHeight** | <code>Number</code> |  | *optional*. height in pixel of every row |
| **headerHeight** | <code>Number</code> |  | *optional*. height in pixel of header |
| **groupHeaderHeight** | <code>Number</code> |  | *optional*. height in pixel of groupHeader |
| **footerHeight** | <code>Number</code> |  | *optional*. height in pixel of footer |
| **rowGetter** | <code>Function</code> |  | method to get the desired row of data |
| **rowsCount** | <code>Number</code> |  | *optional*. number of row displayed in the table |
| **cellRenderer** | <code>Function</code> |  |  |
| **children** | <code>ReactNode</code> |  |  |
| **sort** | <code>{by:?String,dir:?sortDir}</code> |  | *optional*.  |
| **selectedRows** | <code>Array&lt;Number&gt;</code> | <code>[]</code> | *optional*.  |
| **onRowSelect** | <code>Function</code> |  | *optional*.  |
| **onRowsSelect** | <code>Function</code> |  | *optional*.  |
| **selectionType** | <code>selectionType</code> |  |  |
| **className** | <code>String</code> |  | *optional*.  |
| **style** | <code>Object</code> |  | *optional*.  |
| **id** | <code>String</code> |  | *optional*.  |