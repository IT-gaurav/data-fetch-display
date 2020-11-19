fetch("http://localhost:8000/")
  .then((res) => res.json())
  .then(({ data }) => {
    let columns = Object.keys(data[0]).map((d) => {
      if (d === "VIEW") {
        return {
          title: d,
          field: d,
          formatter: "link",
          formatterParams: {
            labelField: "VIEW",
            target: "_blank",
            label: "LINK",
          },
        };
      }
      return {
        title: d,
        field: d,
      };
    });

    let table = new Tabulator("#example-table", {
      columns,
      data,
      pagination: "local",
      paginationSize: 15,
      layout: "fitColumns",
      initialSort: [{ column: "ClosingDate", dir: "dsc" }],
    });
  });
