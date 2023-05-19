import cheerio from "cheerio";

export interface TableRow {
  cells: string[];
}

export interface Table {
  head?: TableRow;
  body: TableRow[];
}

export interface TableParserOptions {
  rowSelector?: string;
  cellSelector?: string;
  onRow?: (row: any, rowIndex: number) => void;
  onCell?: (cell: any, cellIndex: number, rowIndex: number) => void;
}

export function parseTable(html: any, options: TableParserOptions = {}): Table {
  const {
    rowSelector = "table tr",
    cellSelector = "td, th",
    onRow = () => {},
    onCell = () => {},
  } = options;

  const $ = cheerio.load(html);
  const table: Table = { body: [] };

  $(rowSelector).each((rowIndex, rowElement) => {
    const cells: string[] = [];

    const row = $(rowElement);
    onRow(row, rowIndex);

    row.find(cellSelector).each((cellIndex, cellElement) => {
      const cell = $(cellElement);
      onCell(cell, cellIndex, rowIndex);

      cells.push(cell.text().trim());
    });

    if (row.parent().is("thead") && !table.head) {
      table.head = { cells };
    } else {
      table.body.push({ cells });
    }
  });

  const reorderedTable: Table = {
    head: table.head,
    body: table.body,
  };

  return reorderedTable;
}
